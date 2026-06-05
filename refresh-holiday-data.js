process.env.TZ = "Asia/Shanghai";

import fs from "fs";
import path from "path";

const OUTPUT_FILE = path.join("data", "holiday-cache.js");
const API_ROOT = "https://date.nager.at/api/v3";
const LOOKAHEAD_DAYS = 240;
const MAX_CANDIDATES_PER_DAY = 5;

const COUNTRY_PROFILE = [
  ["CN", "China", "中国", 42],
  ["US", "United States", "美国", 34],
  ["JP", "Japan", "日本", 26],
  ["SG", "Singapore", "新加坡", 22],
  ["FR", "France", "法国", 18],
  ["GB", "United Kingdom", "英国", 16],
  ["CA", "Canada", "加拿大", 15],
  ["AU", "Australia", "澳大利亚", 15],
  ["DE", "Germany", "德国", 14],
  ["IT", "Italy", "意大利", 12],
  ["ES", "Spain", "西班牙", 12],
  ["KR", "South Korea", "韩国", 12],
  ["TH", "Thailand", "泰国", 12],
  ["CH", "Switzerland", "瑞士", 10],
  ["NO", "Norway", "挪威", 10],
  ["MX", "Mexico", "墨西哥", 10],
  ["BR", "Brazil", "巴西", 8],
  ["IN", "India", "印度", 8],
  ["ZA", "South Africa", "南非", 8],
  ["NZ", "New Zealand", "新西兰", 8]
].map(([code, name, zhName, affinity]) => ({ code, name, zhName, affinity }));

const MOTIF_TAGS = {
  grain: ["botanical", "harvest"],
  waterFlowers: ["water", "botanical"],
  marigold: ["botanical", "memorial", "celebration"],
  clover: ["botanical", "luck"],
  mountainFlags: ["mountain", "civic", "celebration"],
  tanabata: ["sky", "wish", "light"],
  tricolor: ["civic", "celebration"],
  pumpkin: ["night", "autumn", "playful"],
  snow: ["winter", "sky", "light"],
  springBuds: ["botanical", "spring"],
  sunRibbons: ["sun", "celebration"],
  fireworks: ["sky", "celebration", "light"],
  petals: ["botanical", "memorial"],
  candle: ["memorial", "light", "winter"],
  streamers: ["civic", "celebration"],
  starfield: ["sky", "light"],
  aurora: ["sky", "mountain", "light"]
};

const MOTIF_STYLES = {
  fireworks: [["#101a34", "#4a2734", "#111316"], "#6aa7ff", "#e85a63"],
  petals: [["#241525", "#643044", "#111214"], "#e87a94", "#d7b56b"],
  clover: [["#0d2a20", "#184936", "#111516"], "#72c46b", "#d7bc58"],
  waterFlowers: [["#0d2836", "#1d5a64", "#101518"], "#70d6d0", "#f2b8c6"],
  aurora: [["#102622", "#2f5c4c", "#101516"], "#77c98e", "#75bdd8"],
  tricolor: [["#181b24", "#4d2c2f", "#111315"], "#e2534f", "#d8b95b"],
  streamers: [["#102238", "#365a70", "#101418"], "#78bde6", "#e66b58"],
  sunRibbons: [["#10283a", "#345e68", "#101417"], "#6ecbe6", "#f0c95c"],
  starfield: [["#10251f", "#4b5134", "#111515"], "#77c98e", "#d8b95b"],
  tanabata: [["#0f1734", "#25265f", "#11131d"], "#9fc8ff", "#e6c86f"],
  mountainFlags: [["#151b27", "#4d2727", "#111314"], "#e65b5b", "#f0f0f2"],
  pumpkin: [["#17121f", "#4b2d13", "#111113"], "#f08a2d", "#8d65c5"],
  marigold: [["#221535", "#5e2348", "#171115"], "#f2a23a", "#cf4f73"],
  candle: [["#101827", "#37304d", "#111214"], "#f0c95c", "#f2f0d6"],
  snow: [["#101827", "#263a35", "#111314"], "#d8c070", "#86b38c"],
  grain: [["#211916", "#604026", "#111314"], "#d8a05f", "#9bb06d"],
  springBuds: [["#18251f", "#5b6040", "#111516"], "#a9d37f", "#e6b6c8"]
};

function parseArgs(argv) {
  const options = {
    date: null,
    days: LOOKAHEAD_DAYS
  };

  const dateIndex = argv.indexOf("--date");
  if (dateIndex !== -1) options.date = argv[dateIndex + 1];

  const daysIndex = argv.indexOf("--days");
  if (daysIndex !== -1) options.days = Number(argv[daysIndex + 1]) || LOOKAHEAD_DAYS;

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

function shanghaiToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function yearsInRange(startDate, endDate) {
  const years = [];
  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    years.push(year);
  }
  return years;
}

function inRange(date, startDate, endDate) {
  return date >= startDate && date <= endDate;
}

async function fetchPublicHolidays(year, country) {
  const url = `${API_ROOT}/PublicHolidays/${year}/${country.code}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${country.code} ${year}: ${response.status}`);
  }
  const body = await response.text();
  if (!body.trim()) return [];
  return JSON.parse(body);
}

function selectMotif(holiday, country) {
  const text = `${holiday.name} ${holiday.localName} ${country.name}`.toLowerCase();
  if (/christmas|boxing|new year|independence|constitution|national|republic|liberation|victory|bastille|unity|foundation/.test(text)) return "fireworks";
  if (/valentine|rose|mother|flower|buddha|vesak|all saints|memorial|remembrance/.test(text)) return "petals";
  if (/patrick/.test(text)) return "clover";
  if (/sea|ocean|island|songkran|dragon boat|water|marine|harbour|harbor/.test(text)) return "waterFlowers";
  if (/mountain|swiss|norway|alps|himalaya|qingming|tomb/.test(text)) return "mountainFlags";
  if (/lantern|moon|mid-autumn|star|tanabata|eve/.test(text)) return "tanabata";
  if (/halloween/.test(text)) return "pumpkin";
  if (/dead|muertos/.test(text)) return "marigold";
  if (/lucia|candle|light/.test(text)) return "candle";
  if (/winter|snow|epiphany/.test(text)) return "snow";
  if (/labor|labour|workers|may day|flag|civic|state|federation/.test(text)) return "tricolor";
  if (/thanksgiving|harvest|autumn/.test(text)) return "grain";
  if (/spring|easter|good friday|qingming/.test(text)) return "springBuds";
  return country.affinity >= 20 ? "sunRibbons" : "tricolor";
}

function visualScore(holiday) {
  const text = `${holiday.name} ${holiday.localName}`.toLowerCase();
  let score = 0;
  if (/christmas|new year|independence|national|republic|constitution|bastille|songkran|dragon boat|mid-autumn|halloween|thanksgiving|lantern/.test(text)) score += 24;
  if (/day$|festival|fest|fiesta|fete|celebration/.test(text)) score += 10;
  if (/observed|substitute|bridge|bank holiday/.test(text)) score -= 16;
  if (/good friday|easter|all saints|memorial|remembrance|tomb/.test(text)) score += 8;
  return score;
}

function inferTags(holiday, motif) {
  const text = `${holiday.name} ${holiday.localName}`.toLowerCase();
  const tags = [...(MOTIF_TAGS[motif] || [])];
  if (/public|national|independence|constitution|republic|state|civic|liberation|unity/.test(text)) tags.push("civic");
  if (/festival|christmas|new year|halloween|thanksgiving|songkran|dragon boat/.test(text)) tags.push("celebration");
  if (/water|sea|ocean|island|boat/.test(text)) tags.push("water");
  if (/moon|star|lantern|light|eve/.test(text)) tags.push("sky", "light");
  if (/spring|flower|rose|green|qingming/.test(text)) tags.push("botanical");
  if (/memorial|remembrance|tomb|all saints/.test(text)) tags.push("memorial");
  return Array.from(new Set(tags));
}

function priorityForHoliday(holiday, country, score) {
  const typeBoost = Array.isArray(holiday.types) && holiday.types.includes("Public") ? 2 : 0;
  const globalBoost = holiday.global ? 1 : 0;
  return Math.max(42, Math.min(94, Math.round(52 + score / 24 + typeBoost + globalBoost)));
}

function descriptionForHoliday(holiday, country) {
  const localPart = holiday.localName && holiday.localName !== holiday.name ? `，当地名称是「${holiday.localName}」` : "";
  const typePart = Array.isArray(holiday.types) && holiday.types.length ? `，类型为 ${holiday.types.join(", ")}` : "";
  return `${country.zhName}的公共节日${localPart}${typePart}。`;
}

function captionForHoliday(holiday, country) {
  const phrase = holiday.localName && holiday.localName !== holiday.name ? holiday.localName : country.name;
  return `${holiday.name} · ${phrase}`;
}

function themeForHoliday(holiday, country, score) {
  const motif = selectMotif(holiday, country);
  const [gradient, accent, secondary] = MOTIF_STYLES[motif] || MOTIF_STYLES.aurora;
  return {
    title: holiday.name,
    caption: captionForHoliday(holiday, country),
    description: descriptionForHoliday(holiday, country),
    motif,
    gradient,
    accent,
    secondary,
    priority: priorityForHoliday(holiday, country, score),
    tags: inferTags(holiday, motif),
    source: {
      provider: "Nager.Date",
      countryCode: country.code,
      countryName: country.name,
      localName: holiday.localName,
      types: holiday.types || []
    },
    score: Math.round(score * 100) / 100
  };
}

function scoreHoliday(holiday, country) {
  const base = country.affinity * 10;
  const visual = visualScore(holiday) * 8;
  const typeBoost = Array.isArray(holiday.types) && holiday.types.includes("Public") ? 80 : 0;
  const globalBoost = holiday.global ? 40 : 0;
  const localBoost = country.code === "CN" ? 60 : 0;
  return base + visual + typeBoost + globalBoost + localBoost;
}

function dedupeThemes(themes) {
  const seen = new Set();
  const result = [];
  for (const theme of themes) {
    const key = `${theme.title.toLowerCase()}-${theme.source.countryCode}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(theme);
  }
  return result;
}

async function buildHolidayCache(options) {
  const startDate = options.date ? dateFromKey(options.date) : shanghaiToday();
  if (!startDate) throw new Error(`Invalid --date value: ${options.date}`);
  const endDate = addDays(startDate, options.days);
  const years = yearsInRange(startDate, endDate);
  const days = {};
  const errors = [];

  for (const country of COUNTRY_PROFILE) {
    for (const year of years) {
      try {
        const holidays = await fetchPublicHolidays(year, country);
        for (const holiday of holidays) {
          const date = dateFromKey(holiday.date);
          if (!date || !inRange(date, startDate, endDate)) continue;
          const score = scoreHoliday(holiday, country);
          days[holiday.date] ||= [];
          days[holiday.date].push(themeForHoliday(holiday, country, score));
        }
      } catch (error) {
        errors.push(`${country.code} ${year}: ${error.message}`);
      }
    }
  }

  const rankedDays = {};
  for (const [day, themes] of Object.entries(days).sort(([a], [b]) => a.localeCompare(b))) {
    rankedDays[day] = dedupeThemes(themes)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_CANDIDATES_PER_DAY);
  }

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: `${API_ROOT}/PublicHolidays/{year}/{countryCode}`,
    window: {
      start: dateKey(startDate),
      end: dateKey(endDate),
      days: options.days
    },
    profile: {
      countries: COUNTRY_PROFILE
    },
    days: rankedDays,
    errors
  };
}

const options = parseArgs(process.argv.slice(2));
const cache = await buildHolidayCache(options);
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, `window.YearCalendarHolidayCache = ${JSON.stringify(cache, null, 2)};\n`);

console.log("Holiday cache refreshed:");
console.log(`   window: ${cache.window.start} -> ${cache.window.end}`);
console.log(`   candidate days: ${Object.keys(cache.days).length}`);
console.log(`   source errors: ${cache.errors.length}`);
for (const error of cache.errors.slice(0, 12)) {
  console.log(`   ! ${error}`);
}
