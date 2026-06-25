// Theme selection owns ranking, motif freshness, and final daily choice.

const {
  MOTIF_TAGS: SELECTOR_MOTIF_TAGS,
  MONTH_MOTIF_ROTATION: SELECTOR_MONTH_MOTIF_ROTATION,
  FIXED_HOLIDAYS: SELECTOR_FIXED_HOLIDAYS,
  FLOATING_RULES: SELECTOR_FLOATING_RULES,
  applyPaletteAtmosphere: selectorApplyPaletteAtmosphere,
  cachedHolidayThemes: selectorCachedHolidayThemes,
  createTheme: selectorCreateTheme,
  fallbackThemes: selectorFallbackThemes,
  monthDay: selectorMonthDay,
  seedForDate: selectorSeedForDate,
  seededJitter: selectorSeededJitter,
  themeVariant: selectorThemeVariant
} = globalThis.ThemeEngineInternals;

const MOTIF_ALTERNATIVES = {
  fireworks: ["cityParade", "laurelTorch", "streamers", "sunRibbons", "musicWaves", "starfield", "maritimeFlags"],
  wovenPattern: ["folkEmbroidery", "bookPress", "marketBanners", "paperCut", "streamers", "lotusMandala"],
  waterFlowers: ["maritimeFlags", "oceanCompass", "tropicalBloom", "rainGarden", "sunRibbons", "paperKites"],
  mountainFlags: ["cityParade", "maritimeFlags", "laurelTorch", "aurora", "paperKites"],
  sunRibbons: ["sportsMedals", "cityParade", "streamers", "paperKites", "marketBanners"],
  paperCut: ["dragonDance", "lanterns", "folkEmbroidery", "cityParade", "carnivalMasks"],
  streamers: ["cityParade", "marketBanners", "carnivalMasks", "musicWaves", "paperKites", "sportsMedals"],
  starfield: ["cosmicObservatory", "moonOrbit", "crescentLantern", "aurora", "stainedGlass", "doveGarland"],
  petals: ["gardenGate", "lotusMandala", "tropicalBloom", "oliveBranches", "rainGarden", "springBuds"],
  candle: ["doveGarland", "stainedGlass", "templeBells", "ancestralTable", "crescentLantern"],
  lanterns: ["crescentLantern", "dragonDance", "marketBanners", "musicWaves", "paperCut", "starfield"],
  musicWaves: ["streamers", "marketBanners", "cityParade", "carnivalMasks", "sunRibbons"],
  cosmicObservatory: ["starfield", "moonOrbit", "aurora", "paperKites", "stainedGlass"],
  gardenGate: ["springBuds", "rainGarden", "petals", "tropicalBloom", "oliveBranches"],
  oceanCompass: ["maritimeFlags", "waterFlowers", "rainGarden", "paperKites", "sunRibbons"]
};

function diversityPenalty(theme, avoidMotifs = []) {
  const recentMotifs = avoidMotifs.slice(-7);
  const recentIndex = recentMotifs.lastIndexOf(theme.motif);
  if (recentIndex === -1) return 0;
  const recency = recentMotifs.length - recentIndex;
  const occurrences = recentMotifs.filter((motif) => motif === theme.motif).length;
  const monthMoodPenalty = theme.tags.includes("month-mood") ? 12 : 0;
  const recencyPenalty = [0, 36, 28, 20, 14, 10, 7, 5][recency] || 0;
  const frequencyPenalty = Math.max(0, occurrences - 1) * 10;
  return recencyPenalty + frequencyPenalty + monthMoodPenalty;
}

function recentMotifSet(avoidMotifs = [], days = 3) {
  return new Set(avoidMotifs.slice(-days));
}

function semanticMotifAlternatives(theme) {
  const tags = theme.tags || [];
  const alternatives = [];
  if (tags.includes("civic")) alternatives.push("cityParade", "laurelTorch", "maritimeFlags", "streamers");
  if (tags.includes("celebration")) alternatives.push("marketBanners", "carnivalMasks", "musicWaves", "sunRibbons", "sportsMedals");
  if (tags.includes("water") || tags.includes("island") || tags.includes("maritime")) alternatives.push("oceanCompass", "maritimeFlags", "tropicalBloom", "rainGarden");
  if (tags.includes("botanical")) alternatives.push("gardenGate", "springBuds", "rainGarden", "tropicalBloom");
  if (tags.includes("religious")) alternatives.push("stainedGlass", "templeBells", "crescentLantern", "lotusMandala");
  if (tags.includes("remembrance") || tags.includes("memorial")) alternatives.push("doveGarland", "ancestralTable", "candle", "oliveBranches");
  if (tags.includes("culture") || tags.includes("heritage")) alternatives.push("musicWaves", "gardenGate", "folkEmbroidery", "bookPress", "lotusMandala", "templeBells");
  if (tags.includes("music")) alternatives.push("musicWaves", "carnivalMasks", "cityParade", "marketBanners");
  if (tags.includes("science")) alternatives.push("cosmicObservatory", "starfield", "moonOrbit", "aurora");
  if (tags.includes("sky")) alternatives.push("cosmicObservatory", "moonOrbit", "aurora", "starfield", "paperKites");
  return alternatives;
}

function diversifyRecentMotif(theme, avoidMotifs = [], date, index) {
  const recentMotifs = recentMotifSet(avoidMotifs);
  if (!recentMotifs.has(theme.motif)) return theme;

  const veryRecentIndex = avoidMotifs.slice(-2).lastIndexOf(theme.motif);
  if (veryRecentIndex === -1) return theme;

  const monthMotifs = SELECTOR_MONTH_MOTIF_ROTATION[date.getMonth()] || [];
  const alternatives = [
    ...(MOTIF_ALTERNATIVES[theme.motif] || []),
    ...semanticMotifAlternatives(theme),
    ...monthMotifs
  ];
  const uniqueAlternatives = Array.from(new Set(alternatives))
    .filter((motif) => motif !== theme.motif && SELECTOR_MOTIF_TAGS[motif] && !recentMotifs.has(motif));

  if (uniqueAlternatives.length < 3) return theme;

  const shouldDiversify = selectorThemeVariant(theme, 100, index + 23) < 65;
  if (!shouldDiversify) return theme;

  const motif = uniqueAlternatives[(selectorThemeVariant(theme, uniqueAlternatives.length, index + 11)) % uniqueAlternatives.length];
  return {
    ...theme,
    motif,
    tags: Array.from(new Set([...(theme.tags || []), ...(SELECTOR_MOTIF_TAGS[motif] || [])]))
  };
}

function candidateThemesForDate(date) {
  const md = selectorMonthDay(date);
  const candidates = [];
  const cachedThemes = selectorCachedHolidayThemes(date);
  candidates.push(...cachedThemes);

  if (cachedThemes.length === 0) {
    for (const [holidayDate, title, caption, motif, gradient, accent, secondary, priority] of SELECTOR_FIXED_HOLIDAYS) {
      if (md === holidayDate) {
        candidates.push(selectorCreateTheme({ title, caption, motif, gradient, accent, secondary, priority }));
      }
    }

    for (const rule of SELECTOR_FLOATING_RULES) {
      if (rule.match(date)) {
        candidates.push(selectorCreateTheme(rule));
      }
    }
  }

  return candidates.length > 0 ? candidates : selectorFallbackThemes(date);
}

function rankDailyThemes(date, options = {}) {
  const avoidMotifs = Array.isArray(options.avoidMotifs) ? options.avoidMotifs : [];
  const seed = selectorSeedForDate(date);
  return candidateThemesForDate(date)
    .map((theme, index) => {
      const diversifiedTheme = diversifyRecentMotif(theme, avoidMotifs, date, index);
      const variedTheme = selectorApplyPaletteAtmosphere(diversifiedTheme, date, index);
      return {
        theme: variedTheme,
        score: diversifiedTheme.priority + selectorSeededJitter(seed, index) * 6 - diversityPenalty(diversifiedTheme, avoidMotifs),
        rankSeed: seed,
        sourceIndex: index
      };
    })
    .sort((a, b) => b.score - a.score)
    .map((entry, rank) => ({
      ...entry,
      rank
    }));
}

function getDailyTheme(date) {
  return rankDailyThemes(date)[0].theme;
}

globalThis.ThemeEngine = {
  getDailyTheme,
  rankDailyThemes
};
