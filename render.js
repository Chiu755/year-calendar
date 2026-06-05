process.env.TZ = "Asia/Shanghai";

import puppeteer from "puppeteer";
import fs from "fs";
import os from "os";
import path from "path";
import { pathToFileURL } from "url";

const OUTPUT_ROOT = "output";
const DRAFT_ROOT = "drafts";
const TODAY_OUTPUT = path.join(OUTPUT_ROOT, "today.png");
const HTML_ENTRY = path.resolve("index.html");
const HTML_URL = pathToFileURL(HTML_ENTRY).href;
const PUPPETEER_PROFILE = path.join(os.tmpdir(), "year-calendar-puppeteer-profile");
const LOOKAHEAD_DAYS = 7;

function parseArgs(argv) {
  const options = {
    force: argv.includes("--force"),
    date: null
  };

  const dateIndex = argv.indexOf("--date");
  if (dateIndex !== -1) {
    options.date = argv[dateIndex + 1];
  }

  return options;
}

function dateFromKey(key) {
  const match = key?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function dateKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function pathPartsForDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return {
    year,
    month,
    day,
    yearFolder: `${year}`,
    monthFolder: `${year}.${month}`,
    fileName: `${year}.${month}.${day}.png`
  };
}

function archivePathForDate(date) {
  const parts = pathPartsForDate(date);
  return path.join(OUTPUT_ROOT, parts.yearFolder, parts.monthFolder, parts.fileName);
}

function draftFolderForDate(date) {
  const parts = pathPartsForDate(date);
  return path.join(DRAFT_ROOT, parts.yearFolder, parts.monthFolder, `${parts.year}.${parts.month}.${parts.day}`);
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "theme";
}

function getBaseDate(options) {
  if (options.date) {
    const parsed = dateFromKey(options.date);
    if (!parsed) {
      throw new Error(`Invalid --date value: ${options.date}`);
    }
    return parsed;
  }
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

async function renderWallpaper(page, date, themeRank, outputPath) {
  const key = dateKey(date);
  const url = `${HTML_URL}?date=${key}&themeRank=${themeRank}`;

  await page.goto(url, { waitUntil: "load" });
  await page.waitForSelector("img");
  await page.waitForFunction(() => {
    const img = document.querySelector("img");
    return Boolean(img && img.complete && img.naturalWidth > 0);
  });

  const buffer = await page.screenshot({ fullPage: false });
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, buffer);

  return page.evaluate(() => window.__YEAR_CALENDAR_RENDER_INFO);
}

function writeCandidateMetadata(date, info) {
  const folder = draftFolderForDate(date);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(
    path.join(folder, "candidates.json"),
    JSON.stringify(
      {
        date: dateKey(date),
        selectedRank: info.selectedRank,
        selectedTheme: info.selectedTheme,
        discardedCandidates: info.candidates.filter((candidate) => candidate.rank !== info.selectedRank),
        candidates: info.candidates
      },
      null,
      2
    )
  );
}

async function renderDiscardedCandidates(page, date, info, options) {
  const discarded = info.candidates.filter((candidate) => candidate.rank !== info.selectedRank);
  if (discarded.length === 0) return;

  const folder = draftFolderForDate(date);
  fs.mkdirSync(folder, { recursive: true });

  for (const candidate of discarded) {
    const fileName = `rank-${String(candidate.rank + 1).padStart(2, "0")}-${slug(candidate.theme.title)}.png`;
    const outputPath = path.join(folder, fileName);
    if (!options.force && fs.existsSync(outputPath)) continue;
    await renderWallpaper(page, date, candidate.rank, outputPath);
  }
}

function datesToEnsure(baseDate) {
  return Array.from({ length: LOOKAHEAD_DAYS + 1 }, (_, index) => addDays(baseDate, index));
}

const options = parseArgs(process.argv.slice(2));
const baseDate = getBaseDate(options);
const dates = datesToEnsure(baseDate);

fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
fs.mkdirSync(DRAFT_ROOT, { recursive: true });
fs.mkdirSync(PUPPETEER_PROFILE, { recursive: true });

const browser = await puppeteer.launch({
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-crash-reporter",
    "--disable-crashpad",
    `--user-data-dir=${PUPPETEER_PROFILE}`
  ]
});

const page = await browser.newPage();
await page.setViewport({
  width: 1170,
  height: 2532,
  deviceScaleFactor: 2
});

const generated = [];
const skipped = [];

for (const date of dates) {
  const archivePath = archivePathForDate(date);
  const shouldRender = options.force || !fs.existsSync(archivePath);

  if (!shouldRender) {
    skipped.push(dateKey(date));
    continue;
  }

  const info = await renderWallpaper(page, date, 0, archivePath);
  writeCandidateMetadata(date, info);
  await renderDiscardedCandidates(page, date, info, options);
  generated.push({
    date: dateKey(date),
    output: archivePath,
    selectedTheme: info.selectedTheme.title,
    discardedCount: info.candidates.length - 1
  });
}

const todayArchive = archivePathForDate(baseDate);
if (fs.existsSync(todayArchive)) {
  fs.copyFileSync(todayArchive, TODAY_OUTPUT);
}

await browser.close();

console.log("Wallpaper generation complete:");
console.log(`   base date: ${dateKey(baseDate)}`);
console.log(`   ensured through: ${dateKey(addDays(baseDate, LOOKAHEAD_DAYS))}`);
console.log(`   generated: ${generated.length}`);
for (const item of generated) {
  console.log(`   -> ${item.date}: ${item.selectedTheme} (${item.discardedCount} discarded)`);
}
console.log(`   skipped existing: ${skipped.length}`);
console.log(`   today: ${TODAY_OUTPUT}`);
