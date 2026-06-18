export function createHolidayCacheBuilder({ startDate, endDate, maxCandidatesPerDay, dateKey, addDays }) {
  const days = {};

  function addTheme(dayKey, theme) {
    days[dayKey] ||= [];
    days[dayKey].push(theme);
  }

  function dedupeThemes(themes) {
    const seen = new Map();
    for (const theme of themes) {
      const key = `${theme.title.toLowerCase()}-${theme.source.countryCode || "global"}`;
      const existing = seen.get(key);
      if (!existing || theme.score > existing.score) seen.set(key, theme);
    }
    return Array.from(seen.values());
  }

  function rankedDays() {
    const ranked = {};
    for (const [day, themes] of Object.entries(days).sort(([a], [b]) => a.localeCompare(b))) {
      ranked[day] = dedupeThemes(themes)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxCandidatesPerDay);
    }
    return ranked;
  }

  function coverage(ranked) {
    const missingDates = [];
    let totalDays = 0;

    for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
      totalDays++;
      const key = dateKey(date);
      if (!ranked[key]) missingDates.push(key);
    }

    return {
      totalDays,
      candidateDays: Object.keys(ranked).length,
      fallbackDays: missingDates.length,
      fallbackDates: missingDates
    };
  }

  function finalize() {
    const ranked = rankedDays();
    return {
      days: ranked,
      coverage: coverage(ranked)
    };
  }

  return {
    addTheme,
    finalize
  };
}
