globalThis.window = { YearCalendarHolidayCache: {} };

await import("./theme-engine.js");

const year = Number(process.argv[2] || new Date().getFullYear());
const terms = globalThis.ThemeEngine.getSolarTermsForYear(year);
const termKeys = new Set(terms.map((term) => term.dateKey));
const failures = [];

function parseDateKey(key) {
  const [dateYear, month, day] = key.split("-").map(Number);
  return new Date(dateYear, month - 1, day);
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

function hasSolarTreatment(theme) {
  return Boolean(theme.tags?.some((tag) => tag === "solar-nearby" || tag.startsWith("term-")));
}

function check(condition, message) {
  if (!condition) failures.push(message);
}

check(terms.length === 24, `Expected 24 solar terms for ${year}, got ${terms.length}`);
check(termKeys.size === terms.length, `Expected unique solar-term date keys for ${year}`);

for (const term of terms) {
  const exact = parseDateKey(term.dateKey);
  const exactMatch = globalThis.ThemeEngine.getSolarTermForDate(exact);
  check(exactMatch?.dateKey === term.dateKey, `${term.dateKey} did not match itself`);
  check(exactMatch?.title === term.title, `${term.dateKey} returned ${exactMatch?.title || "null"} instead of ${term.title}`);

  for (const offset of [-1, 1]) {
    const adjacent = addDays(exact, offset);
    const adjacentKey = dateKey(adjacent);
    if (termKeys.has(adjacentKey)) continue;

    const adjacentMatch = globalThis.ThemeEngine.getSolarTermForDate(adjacent);
    const topTheme = globalThis.ThemeEngine.rankDailyThemes(adjacent)[0].theme;
    check(adjacentMatch === null, `${adjacentKey} adjacent to ${term.title} returned ${adjacentMatch?.title || "unknown"}`);
    check(!hasSolarTreatment(topTheme), `${adjacentKey} adjacent to ${term.title} has solar treatment on ${topTheme.title}`);
  }
}

const normalDate = Array.from({ length: 366 }, (_, index) => new Date(year, 0, index + 1))
  .find((date) => !termKeys.has(dateKey(date)));
check(Boolean(normalDate), `Could not find a non-solar-term date for ${year}`);
if (normalDate) {
  const normalKey = dateKey(normalDate);
  check(globalThis.ThemeEngine.getSolarTermForDate(normalDate) === null, `${normalKey} unexpectedly matched a solar term`);
}

if (failures.length > 0) {
  console.error(`Solar-term validation failed for ${year}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Solar-term validation passed for ${year}.`);
console.log(terms.map((term) => `${term.dateKey} ${term.title}`).join("\n"));
