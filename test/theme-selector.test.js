import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const selectorSource = fs.readFileSync(new URL("../theme-selector.js", import.meta.url), "utf8");

function monthDay(date) {
  return `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function candidate(title, motif, priority, tags = []) {
  return {
    title,
    caption: title,
    motif,
    gradient: ["#111111", "#222222", "#333333"],
    accent: "#ffffff",
    secondary: "#999999",
    priority,
    tags
  };
}

function loadSelector(overrides = {}) {
  const context = vm.createContext({
    ThemeEngineInternals: {
      MOTIF_TAGS: {},
      MONTH_MOTIF_ROTATION: Array.from({ length: 12 }, () => []),
      FIXED_HOLIDAYS: [],
      FLOATING_RULES: [],
      applyPaletteAtmosphere: (theme) => ({ ...theme, atmosphereApplied: true }),
      cachedHolidayThemes: () => [],
      createTheme: (theme) => ({ ...theme, tags: theme.tags || [] }),
      fallbackThemes: () => [candidate("Fallback", "aurora", 30, ["month-mood"])],
      monthDay,
      seedForDate: () => 123,
      seededJitter: () => 0,
      themeVariant: () => 99,
      ...overrides
    }
  });

  vm.runInContext(selectorSource, context, { filename: "theme-selector.js" });
  return context.ThemeEngine;
}

test("cached provider themes take precedence over local fixed holidays", () => {
  const cached = candidate("Provider Holiday", "lanterns", 50);
  const selector = loadSelector({
    cachedHolidayThemes: () => [cached],
    FIXED_HOLIDAYS: [
      ["06-18", "Fixed Holiday", "Fixed Holiday", "fireworks", ["#111111", "#222222", "#333333"], "#ffffff", "#999999", 99]
    ]
  });

  const ranked = selector.rankDailyThemes(new Date(2026, 5, 18));

  assert.equal(ranked.length, 1);
  assert.equal(ranked[0].theme.title, "Provider Holiday");
  assert.equal(ranked[0].theme.atmosphereApplied, true);
});

test("fixed holidays are used before seasonal fallbacks", () => {
  const selector = loadSelector({
    FIXED_HOLIDAYS: [
      ["06-18", "Fixed Holiday", "Fixed Holiday", "fireworks", ["#111111", "#222222", "#333333"], "#ffffff", "#999999", 80]
    ]
  });

  assert.equal(selector.getDailyTheme(new Date(2026, 5, 18)).title, "Fixed Holiday");
});

test("seasonal fallbacks preserve rank metadata when no holiday matches", () => {
  const selector = loadSelector({
    fallbackThemes: () => [
      candidate("Lower fallback", "snow", 20, ["month-mood"]),
      candidate("Higher fallback", "aurora", 30, ["month-mood"])
    ]
  });

  const ranked = selector.rankDailyThemes(new Date(2026, 5, 19));

  assert.deepEqual(
    Array.from(ranked, ({ rank, sourceIndex, rankSeed, theme }) => ({ rank, sourceIndex, rankSeed, title: theme.title })),
    [
      { rank: 0, sourceIndex: 1, rankSeed: 123, title: "Higher fallback" },
      { rank: 1, sourceIndex: 0, rankSeed: 123, title: "Lower fallback" }
    ]
  );
});

test("recent motif use can move a fresher candidate to the top", () => {
  const selector = loadSelector({
    cachedHolidayThemes: () => [
      candidate("Repeated visual", "fireworks", 70),
      candidate("Fresh visual", "snow", 60)
    ]
  });

  const ranked = selector.rankDailyThemes(new Date(2026, 5, 20), {
    avoidMotifs: ["fireworks"]
  });

  assert.equal(ranked[0].theme.title, "Fresh visual");
  assert.equal(ranked[0].score, 60);
  assert.equal(ranked[1].score, 34);
});
