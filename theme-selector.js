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

const POPULAR_HOLIDAY_PATTERNS = [
  [/lunar new year|chinese new year|spring festival|春节/i, 24],
  [/new year/i, 22],
  [/christmas/i, 22],
  [/easter/i, 20],
  [/halloween/i, 18],
  [/thanksgiving/i, 18],
  [/valentine/i, 16],
  [/mid-?autumn|moon festival|中秋/i, 18],
  [/dragon boat|端午/i, 17],
  [/qingming|清明/i, 15],
  [/diwali|eid|ramadan|vesak|buddha/i, 15],
  [/children'?s day|mother'?s day|father'?s day|earth day|workers'? day|labou?r day|may day/i, 14],
  [/national day|independence day|bastille day|constitution day|republic day|foundation day|unity day/i, 10],
  [/world |international /i, 8]
];

const MAINSTREAM_COUNTRY_CODES = new Set(["CN", "US", "JP", "SG", "GB", "FR", "CA", "AU", "DE", "IT", "ES", "KR"]);
const CULTURAL_BALANCE_CLUSTERS = [
  ["civic", ["civic"]],
  ["religious", ["religious", "islamic"]],
  ["remembrance", ["remembrance", "memorial"]],
  ["heritage", ["heritage", "folk", "culture", "literature"]],
  ["celebration", ["celebration", "procession", "market"]],
  ["maritime", ["maritime", "island"]],
  ["nature", ["botanical", "water", "mountain"]],
  ["knowledge", ["science", "music", "sports"]]
];

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

function popularityBonus(theme) {
  if (theme.tags?.includes("month-mood")) return 0;

  const text = `${theme.title} ${theme.caption} ${theme.source?.localName || ""}`;
  const source = theme.source || {};
  const typeLabels = Array.isArray(source.typeLabels) ? source.typeLabels.join(" ") : "";
  let bonus = 0;

  for (const [pattern, value] of POPULAR_HOLIDAY_PATTERNS) {
    if (pattern.test(text)) bonus = Math.max(bonus, value);
  }

  if (source.nationwide === true) bonus += 8;
  if (/public|公众节日|national|federal/i.test(typeLabels)) bonus += 6;
  if (source.countryCode === "INTL") bonus += 6;
  if (MAINSTREAM_COUNTRY_CODES.has(source.countryCode)) bonus += 4;
  if (Array.isArray(source.subdivisions) && source.subdivisions.length > 0) bonus -= 10;
  if (source.nationwide === false) bonus -= 14;
  if (/municipal|city|town|communal|regional|state|地方|区域/i.test(`${text} ${typeLabels}`)) bonus -= 10;
  if (/saint|st\.|sankt|san |santa |santo /i.test(text) && bonus < 16) bonus -= 6;

  return Math.max(-18, Math.min(32, bonus));
}

function normalizedRecentThemes(options = {}, avoidMotifs = []) {
  const recentThemes = Array.isArray(options.recentThemes) ? options.recentThemes : [];
  if (recentThemes.length > 0) return recentThemes.filter(Boolean);
  return avoidMotifs.filter(Boolean).map((motif) => ({ motif, tags: [] }));
}

function culturalDiversityPenalty(theme, recentThemes = []) {
  if (!recentThemes.length || theme.tags?.includes("month-mood")) return 0;

  const recent = recentThemes.slice(-10);
  const source = theme.source || {};
  const countryCode = source.countryCode && source.countryCode !== "INTL" ? source.countryCode : "";
  const clusters = culturalClusters(theme);
  let penalty = 0;

  if (countryCode) {
    const countries = recent.map((entry) => entry?.source?.countryCode || entry?.countryCode || "").filter((code) => code && code !== "INTL");
    const recentIndex = countries.lastIndexOf(countryCode);
    if (recentIndex !== -1) {
      const recency = countries.length - recentIndex;
      penalty += [0, 26, 20, 14, 9, 6][recency] || 4;
    }
    const occurrences = countries.filter((code) => code === countryCode).length;
    penalty += Math.max(0, occurrences - 1) * 7;
  }

  const clusterRecencyPenalty = [0, 16, 11, 7, 4];
  for (let offset = 1; offset <= Math.min(4, recent.length); offset++) {
    const entry = recent[recent.length - offset];
    const overlap = culturalClusters(entry).filter((cluster) => clusters.includes(cluster));
    if (overlap.length > 0) {
      penalty += clusterRecencyPenalty[offset] + Math.min(6, overlap.length * 2);
    }
  }

  return Math.min(42, penalty);
}

function culturalClusters(theme) {
  const tags = Array.isArray(theme?.tags) ? theme.tags : [];
  return CULTURAL_BALANCE_CLUSTERS
    .filter(([, clusterTags]) => clusterTags.some((tag) => tags.includes(tag)))
    .map(([cluster]) => cluster);
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

  for (const [holidayDate, title, caption, motif, gradient, accent, secondary, priority] of SELECTOR_FIXED_HOLIDAYS) {
    if (md === holidayDate) {
      addCandidateIfDistinct(candidates, selectorCreateTheme({ title, caption, motif, gradient, accent, secondary, priority }));
    }
  }

  for (const rule of SELECTOR_FLOATING_RULES) {
    if (rule.match(date)) {
      addCandidateIfDistinct(candidates, selectorCreateTheme(rule));
    }
  }

  return candidates.length > 0 ? candidates : selectorFallbackThemes(date);
}

function addCandidateIfDistinct(candidates, theme) {
  const key = candidateIdentity(theme);
  if (candidates.some((candidate) => candidateIdentity(candidate) === key)) return;
  candidates.push(theme);
}

function candidateIdentity(theme) {
  return normalizeCandidateText(`${theme.source?.countryCode || ""}|${theme.title}|${theme.source?.localName || ""}`);
}

function normalizeCandidateText(value) {
  return value.toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();
}

function rankDailyThemes(date, options = {}) {
  const avoidMotifs = Array.isArray(options.avoidMotifs) ? options.avoidMotifs : [];
  const recentThemes = normalizedRecentThemes(options, avoidMotifs);
  const seed = selectorSeedForDate(date);
  return candidateThemesForDate(date)
    .map((theme, index) => {
      const diversifiedTheme = diversifyRecentMotif(theme, avoidMotifs, date, index);
      const variedTheme = selectorApplyPaletteAtmosphere(diversifiedTheme, date, index);
      const score =
        diversifiedTheme.priority +
        popularityBonus(diversifiedTheme) +
        selectorSeededJitter(seed, index) * 6 -
        diversityPenalty(diversifiedTheme, avoidMotifs) -
        culturalDiversityPenalty(diversifiedTheme, recentThemes);
      return {
        theme: variedTheme,
        score,
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
