const THEME_CONFIG = {
  text: "#d7d7db",
  mutedText: "#8e8e93",
  overlay: "rgba(5,5,6,0.34)"
};

const SOLAR_TERMS = [
  ["02-04", "立春", "立春 · 东风解冻，万物起始", "springBuds", ["#14251d", "#496143", "#111516"], "#8fcb7d", "#d8c070"],
  ["02-19", "雨水", "雨水 · 天街小雨，草色遥看", "waterFlowers", ["#102132", "#25495c", "#111518"], "#72bdd4", "#91b987"],
  ["03-06", "惊蛰", "惊蛰 · 春雷初动，蛰虫始振", "aurora", ["#152236", "#34495f", "#101418"], "#8fd0ff", "#d8b95b"],
  ["03-21", "春分", "春分 · 昼夜均分，花信渐浓", "springBuds", ["#18251f", "#5b6040", "#111516"], "#a9d37f", "#e6b6c8"],
  ["04-05", "清明", "清明 · 风清景明，草木新发", "waterFlowers", ["#142723", "#3d6659", "#111516"], "#87c9b7", "#c8d58f"],
  ["04-20", "谷雨", "谷雨 · 雨生百谷，暮春将深", "waterFlowers", ["#122735", "#2d5c63", "#101518"], "#75d6d0", "#d7c56f"],
  ["05-06", "立夏", "立夏 · 风暖昼长，万物并秀", "grain", ["#1a271c", "#526638", "#121515"], "#b5d46f", "#6fb58a"],
  ["05-21", "小满", "小满 · 麦粒渐盈，夏意初满", "grain", ["#20281b", "#6d6132", "#121515"], "#d5bd63", "#86a86f"],
  ["06-06", "芒种", "芒种 · 麦黄梅熟，仲夏将至", "grain", ["#19251d", "#6e6130", "#151516"], "#d8b95b", "#78a879"],
  ["06-21", "夏至", "夏至 · 日长之至，万物盛明", "sunRibbons", ["#1c2332", "#6c522e", "#111316"], "#f0c95c", "#79b7d8"],
  ["07-07", "小暑", "小暑 · 风动莲香，暑气渐盛", "waterFlowers", ["#102735", "#2c6567", "#111518"], "#73d1c9", "#e6b6c8"],
  ["07-23", "大暑", "大暑 · 炎蒸乃极，云雨时行", "sunRibbons", ["#221a20", "#68412a", "#121314"], "#e89b42", "#75bdd0"],
  ["08-08", "立秋", "立秋 · 凉风有信，秋意初来", "grain", ["#1d211a", "#615237", "#121414"], "#d6a95e", "#88a06a"],
  ["08-23", "处暑", "处暑 · 暑云渐散，新凉入夜", "aurora", ["#152034", "#3d4d61", "#111418"], "#8ec6e6", "#d6b06a"],
  ["09-08", "白露", "白露 · 蒹葭苍苍，露华初凝", "aurora", ["#111f2b", "#324f59", "#101416"], "#a8d9e8", "#d9d0a1"],
  ["09-23", "秋分", "秋分 · 昼夜再均，秋色平分", "grain", ["#201d1b", "#635136", "#121414"], "#d8a95e", "#8fa36b"],
  ["10-08", "寒露", "寒露 · 露气寒生，秋声渐远", "aurora", ["#111c2b", "#30445a", "#101316"], "#91bfe6", "#c5b06f"],
  ["10-23", "霜降", "霜降 · 霜华初下，草木深秋", "aurora", ["#171b28", "#3a3b4c", "#101214"], "#b8c9df", "#d6ad71"],
  ["11-07", "立冬", "立冬 · 水始冰，冬意入窗", "aurora", ["#101b2b", "#253c50", "#101214"], "#84bde6", "#d2d8e6"],
  ["11-22", "小雪", "小雪 · 云暗初寒，雪意未深", "snow", ["#111a28", "#2a3d51", "#101214"], "#b6d5ef", "#f1f4f8"],
  ["12-07", "大雪", "大雪 · 北风渐紧，天地清寒", "snow", ["#101826", "#24364e", "#101214"], "#a7cdf0", "#eef4ff"],
  ["12-22", "冬至", "冬至 · 日南至，长夜生光", "snow", ["#11182a", "#273154", "#101214"], "#9dbaf0", "#d6c071"],
  ["01-06", "小寒", "小寒 · 寒气渐深，微光入岁", "snow", ["#101827", "#26374c", "#101214"], "#a9c9e8", "#d9d9e5"],
  ["01-20", "大寒", "大寒 · 岁末严寒，春信将近", "snow", ["#101725", "#28334a", "#101214"], "#b3cbe6", "#d8b95b"]
];

const FIXED_HOLIDAYS = [
  ["01-01", "New Year's Day", "New Year's Day · 新年第一束光", "fireworks", ["#151a2d", "#493456", "#111316"], "#d6c070", "#78b8e6", 90],
  ["02-14", "Valentine's Day", "Valentine's Day · 玫瑰色的二月心跳", "petals", ["#241525", "#643044", "#111214"], "#e87a94", "#d7b56b", 70],
  ["03-17", "Saint Patrick's Day", "Saint Patrick's Day · 绿意、三叶草与春日游行", "clover", ["#0d2a20", "#184936", "#111516"], "#72c46b", "#d7bc58", 82],
  ["04-13", "Songkran", "Songkran · 清水、花影与新年祝福", "waterFlowers", ["#0d2836", "#1d5a64", "#101518"], "#70d6d0", "#f2b8c6", 80],
  ["04-22", "Earth Day", "Earth Day · 山海与绿色星球", "aurora", ["#102622", "#2f5c4c", "#101516"], "#77c98e", "#75bdd8", 76],
  ["05-01", "International Workers' Day", "International Workers' Day · 春日劳动者之歌", "tricolor", ["#181b24", "#4d2c2f", "#111315"], "#e2534f", "#d8b95b", 74],
  ["05-05", "Children's Day Japan", "Children's Day · 鲤旗乘风，五月晴朗", "streamers", ["#102238", "#365a70", "#101418"], "#78bde6", "#e66b58", 72],
  ["06-04", "Tonga Emancipation Day", "Tonga Emancipation Day · 岛风、自由与珊瑚海", "waterFlowers", ["#10293a", "#2c6470", "#101417"], "#75cce8", "#d8555b", 84],
  ["06-17", "Iceland National Day", "Iceland National Day · 北大西洋的夏日微光", "aurora", ["#0f2233", "#274861", "#121419"], "#78c6e6", "#d8555b", 82],
  ["06-18", "Seychelles National Day", "Seychelles National Day · 印度洋的彩色海风", "sunRibbons", ["#10283a", "#345e68", "#101417"], "#6ecbe6", "#f0c95c", 76],
  ["06-25", "Mozambique Independence Day", "Mozambique Independence Day · 海岸、星光与鼓点", "starfield", ["#10251f", "#4b5134", "#111515"], "#77c98e", "#d8b95b", 72],
  ["06-29", "Seychelles Independence Day", "Seychelles Independence Day · 群岛的夏日旗色", "tricolor", ["#11233a", "#513044", "#111416"], "#6da2ff", "#f0c95c", 76],
  ["07-04", "Independence Day", "Independence Day · 烟火照亮夏夜", "fireworks", ["#101a34", "#4a2734", "#111316"], "#6aa7ff", "#e85a63", 78],
  ["07-07", "Tanabata", "Tanabata · 星河、短册与夏夜愿望", "tanabata", ["#0f1734", "#25265f", "#11131d"], "#9fc8ff", "#e6c86f", 78],
  ["07-14", "Bastille Day", "Bastille Day · 蓝白红的夏日庆典", "tricolor", ["#101d3f", "#4c2734", "#131318"], "#6aa7ff", "#e85a63", 78],
  ["07-26", "Maldives Independence Day", "Maldives Independence Day · 珊瑚海与绿色旗影", "waterFlowers", ["#0c2b32", "#1e5b54", "#101516"], "#6fd0d2", "#d8555b", 74],
  ["07-30", "Vanuatu Independence Day", "Vanuatu Independence Day · 南太平洋的晨风", "sunRibbons", ["#102621", "#514f29", "#101514"], "#d8bd5f", "#78c08a", 74],
  ["08-01", "Swiss National Day", "Swiss National Day · 山间灯火与红白旗色", "mountainFlags", ["#151b27", "#4d2727", "#111314"], "#e65b5b", "#f0f0f2", 76],
  ["08-09", "Singapore National Day", "Singapore National Day · 城市海湾的红白光", "fireworks", ["#121b2d", "#543038", "#111315"], "#e85a63", "#f3f3f5", 76],
  ["09-03", "San Marino Foundation Day", "San Marino Foundation Day · 山城古国的蓝白日", "mountainFlags", ["#112138", "#334a62", "#101417"], "#7fbbe8", "#f0f0f2", 80],
  ["09-08", "Andorra National Day", "Andorra National Day · 比利牛斯山间的节日", "mountainFlags", ["#121c33", "#54371f", "#111314"], "#f0b64d", "#6da2cf", 80],
  ["09-16", "Mexico Independence Day", "Mexico Independence Day · 绿白红与广场钟声", "tricolor", ["#10251f", "#4f2c31", "#111515"], "#70bf75", "#e85a63", 76],
  ["10-01", "Tuvalu Independence Day", "Tuvalu Independence Day · 太平洋小岛的晴蓝国庆", "waterFlowers", ["#0c2635", "#255d70", "#101417"], "#76cce8", "#f0c95c", 82],
  ["10-03", "Germany Unity Day", "Germany Unity Day · 黑红金的秋日光带", "tricolor", ["#151515", "#55302d", "#111111"], "#d8b95b", "#d65345", 74],
  ["10-31", "Halloween", "Halloween · 南瓜灯与十月夜色", "pumpkin", ["#17121f", "#4b2d13", "#111113"], "#f08a2d", "#8d65c5", 80],
  ["11-01", "All Saints' Day", "All Saints' Day · 烛光、花束与静默记忆", "petals", ["#151520", "#473d4c", "#111214"], "#d8c78f", "#b68fd8", 70],
  ["11-02", "Dia de Muertos", "Dia de Muertos · 鲜花与记忆之日", "marigold", ["#221535", "#5e2348", "#171115"], "#f2a23a", "#cf4f73", 86],
  ["11-11", "Remembrance Day", "Remembrance Day · 红罂粟与静默时刻", "petals", ["#17161c", "#4f2832", "#111214"], "#d65345", "#8e8e93", 72],
  ["12-13", "Saint Lucia Day", "Saint Lucia Day · 冬夜里的烛光歌声", "candle", ["#101827", "#37304d", "#111214"], "#f0c95c", "#f2f0d6", 78],
  ["12-17", "Bhutan National Day", "Bhutan National Day · 山风中的彩旗", "mountainFlags", ["#182035", "#583522", "#121316"], "#f0b64d", "#6da2cf", 82],
  ["12-24", "Christmas Eve", "Christmas Eve · 冬夜窗灯与松枝", "snow", ["#101827", "#263a35", "#111314"], "#d8c070", "#86b38c", 78],
  ["12-25", "Christmas Day", "Christmas Day · 松枝、雪光与节日钟声", "snow", ["#101827", "#2d4436", "#111314"], "#d8c070", "#d65345", 84],
  ["12-31", "New Year's Eve", "New Year's Eve · 倒数与新年的微光", "fireworks", ["#111729", "#493456", "#111316"], "#d6c070", "#8fc8ff", 82]
];

const FLOATING_RULES = [
  {
    title: "Thanksgiving",
    caption: "Thanksgiving · 秋日餐桌与感谢之夜",
    motif: "grain",
    gradient: ["#211916", "#604026", "#111314"],
    accent: "#d8a05f",
    secondary: "#9bb06d",
    priority: 76,
    match: (date) => date.getMonth() === 10 && nthWeekdayOfMonth(date, 4, 4)
  },
  {
    title: "World Oceans Day",
    caption: "World Oceans Day · 潮汐、海风与蓝色星球",
    motif: "waterFlowers",
    gradient: ["#0c2134", "#225a6a", "#101418"],
    accent: "#70cce8",
    secondary: "#8bd0b6",
    priority: 74,
    match: (date) => monthDay(date) === "06-08"
  }
];

const FALLBACK_THEMES = [
  ["Fiji Day", "Fiji Day · 南太平洋的海风与旗色", "waterFlowers", ["#10293a", "#2c6470", "#101417"], "#75cce8", "#d8b95b"],
  ["Monaco National Day", "Monaco National Day · 海岸城邦的红白光", "tricolor", ["#141a27", "#523039", "#111315"], "#e65b5b", "#f2f2f4"],
  ["Liechtenstein National Day", "Liechtenstein National Day · 阿尔卑斯山间的蓝红夜", "mountainFlags", ["#111c34", "#4c2938", "#101316"], "#6da2cf", "#d8b95b"],
  ["Tonga National Day", "Tonga National Day · 岛风与珊瑚海", "waterFlowers", ["#102434", "#315566", "#101417"], "#78c8e6", "#e85a63"],
  ["Kiribati Independence Day", "Kiribati Independence Day · 海平线上的日出", "sunRibbons", ["#102437", "#60412b", "#101417"], "#f0b64d", "#6fc7e6"],
  ["Nauru Independence Day", "Nauru Independence Day · 蓝海、星点与岛屿", "starfield", ["#101f35", "#263d5a", "#101316"], "#77bde8", "#d8c070"],
  ["Palau Constitution Day", "Palau Constitution Day · 月色映着太平洋", "tanabata", ["#101b33", "#2e4770", "#101316"], "#9fc8ff", "#e6c86f"],
  ["Samoa Independence Day", "Samoa Independence Day · 岛屿星光与红蓝旗影", "starfield", ["#111a34", "#543044", "#101316"], "#78aee8", "#e85a63"],
  ["San Marino Civic Day", "San Marino Civic Day · 山城钟声与蓝白旗", "mountainFlags", ["#112138", "#334a62", "#101417"], "#7fbbe8", "#f0f0f2"],
  ["Malta Republic Day", "Malta Republic Day · 石城海岸的红白晨光", "tricolor", ["#161a24", "#50302d", "#111314"], "#e65b5b", "#f3f0df"],
  ["Cyprus Independence Day", "Cyprus Independence Day · 橄榄枝与地中海微光", "springBuds", ["#18251e", "#5a5634", "#111515"], "#91c47c", "#d8b95b"],
  ["Belize Independence Day", "Belize Independence Day · 热带蓝与庆典鼓点", "sunRibbons", ["#102344", "#364f6c", "#101417"], "#6da2ff", "#e85a63"],
  ["Cape Verde Independence Day", "Cape Verde Independence Day · 大西洋群岛的星与潮", "starfield", ["#111d34", "#263e5b", "#101316"], "#78bde8", "#d8c070"],
  ["Saint Lucia Independence Day", "Saint Lucia Independence Day · 火山双峰与加勒比海", "mountainFlags", ["#102338", "#43505f", "#101417"], "#78c6e6", "#f0c95c"],
  ["Barbados Independence Day", "Barbados Independence Day · 金蓝旗影与海风", "sunRibbons", ["#10223a", "#4f4c2b", "#101417"], "#d8b95b", "#78bde8"],
  ["Botswana Day", "Botswana Day · 蓝白黑的草原清晨", "tricolor", ["#102434", "#304c5e", "#101417"], "#86c9e8", "#f3f3f5"],
  ["Estonia Independence Day", "Estonia Independence Day · 北方蓝黑白的雪光", "snow", ["#101827", "#27364d", "#101214"], "#8fb8e8", "#f1f4f8"],
  ["Georgia Independence Day", "Georgia Independence Day · 高加索山风与红白旗", "mountainFlags", ["#151b24", "#4d2b2d", "#111314"], "#e65b5b", "#f3f0df"],
  ["Nepal Constitution Day", "Nepal Constitution Day · 喜马拉雅山影与旗色", "mountainFlags", ["#111c34", "#4f2d2d", "#101316"], "#d8555b", "#6da2cf"],
  ["Laos National Day", "Laos National Day · 湄公河畔的红蓝圆月", "tanabata", ["#101b33", "#44344f", "#101316"], "#9fc8ff", "#d8555b"],
  ["Qatar National Day", "Qatar National Day · 沙海边缘的酒红日光", "sunRibbons", ["#1a1620", "#573040", "#111214"], "#b95a72", "#d8c070"],
  ["Oman National Day", "Oman National Day · 海湾风与红绿白旗", "tricolor", ["#12251e", "#50302d", "#111314"], "#70bf75", "#e65b5b"],
  ["Mongolia Naadam", "Naadam · 草原、彩旗与夏日竞技", "mountainFlags", ["#102039", "#5c4227", "#101417"], "#6da2cf", "#f0b64d"],
  ["Norway Constitution Day", "Norway Constitution Day · 五月旗海与峡湾蓝", "tricolor", ["#101d34", "#4f2d38", "#101316"], "#6da2cf", "#e65b5b"]
];

function createTheme({ title, caption, motif, gradient, accent, secondary, priority = 50 }) {
  return { title, caption, motif, gradient, accent, secondary, priority };
}

function monthDay(date) {
  return `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dayOfYearForTheme(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date - start) / 86400000) + 1;
}

function nthWeekdayOfMonth(date, weekday, nth) {
  if (date.getDay() !== weekday) return false;
  return Math.floor((date.getDate() - 1) / 7) + 1 === nth;
}

function seedForDate(date) {
  return date.getFullYear() * 1000 + dayOfYearForTheme(date);
}

function seededJitter(seed, index) {
  const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function fallbackTheme(date) {
  const seed = seedForDate(date);
  const item = FALLBACK_THEMES[seed % FALLBACK_THEMES.length];
  return createTheme({
    title: item[0],
    caption: item[1],
    motif: item[2],
    gradient: item[3],
    accent: item[4],
    secondary: item[5],
    priority: 30
  });
}

function getDailyTheme(date) {
  const md = monthDay(date);
  const candidates = [];

  for (const [termDate, title, caption, motif, gradient, accent, secondary] of SOLAR_TERMS) {
    if (md === termDate) {
      candidates.push(createTheme({ title, caption, motif, gradient, accent, secondary, priority: 95 }));
    }
  }

  for (const [holidayDate, title, caption, motif, gradient, accent, secondary, priority] of FIXED_HOLIDAYS) {
    if (md === holidayDate) {
      candidates.push(createTheme({ title, caption, motif, gradient, accent, secondary, priority }));
    }
  }

  for (const rule of FLOATING_RULES) {
    if (rule.match(date)) {
      candidates.push(createTheme(rule));
    }
  }

  if (candidates.length === 0) {
    candidates.push(fallbackTheme(date));
  }

  const seed = seedForDate(date);
  return candidates
    .map((theme, index) => ({
      theme,
      score: theme.priority + seededJitter(seed, index) * 6
    }))
    .sort((a, b) => b.score - a.score)[0].theme;
}

function drawDailyThemeBackground(ctx, theme, width, height) {
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, theme.gradient[0]);
  bg.addColorStop(0.5, theme.gradient[1]);
  bg.addColorStop(1, theme.gradient[2]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = THEME_CONFIG.overlay;
  ctx.fillRect(0, 0, width, height);

  drawSoftGlow(ctx, 215, 250, 300, theme.accent, 0.1);
  drawSoftGlow(ctx, 1100, 2480, 360, theme.secondary, 0.1);

  const glow = ctx.createRadialGradient(width / 2, height * 0.2, 0, width / 2, height * 0.2, height * 0.75);
  glow.addColorStop(0, hexToRgba(theme.accent, 0.22));
  glow.addColorStop(0.58, hexToRgba(theme.secondary, 0.05));
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  drawThemeDecorations(ctx, theme, width, height);
}

function drawThemeCaption(ctx, theme, x, y) {
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = "31px -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif";
  ctx.fillStyle = "rgba(215,215,219,0.76)";
  ctx.fillText(theme.caption, x, y);
  ctx.restore();
}

function drawThemeDecorations(ctx, theme, width, height) {
  switch (theme.motif) {
    case "grain":
      drawGrain(ctx, theme, width, height);
      break;
    case "marigold":
      drawMarigold(ctx, theme, width, height);
      break;
    case "clover":
      drawClover(ctx, theme, width, height);
      break;
    case "mountainFlags":
      drawMountainFlags(ctx, theme, width, height);
      break;
    case "tanabata":
      drawTanabata(ctx, theme, width, height);
      break;
    case "waterFlowers":
      drawWaterFlowers(ctx, theme, width, height);
      break;
    case "tricolor":
      drawTricolor(ctx, theme, width, height);
      break;
    case "pumpkin":
      drawPumpkin(ctx, theme, width, height);
      break;
    case "snow":
      drawSnow(ctx, theme, width, height);
      break;
    case "springBuds":
      drawSpringBuds(ctx, theme, width, height);
      break;
    case "sunRibbons":
      drawSunRibbons(ctx, theme, width, height);
      break;
    case "fireworks":
      drawFireworks(ctx, theme, width, height);
      break;
    case "petals":
      drawPetals(ctx, theme, width, height);
      break;
    case "candle":
      drawCandle(ctx, theme, width, height);
      break;
    case "streamers":
      drawStreamers(ctx, theme, width, height);
      break;
    case "starfield":
      drawStarfield(ctx, theme, width, height);
      break;
    default:
      drawAurora(ctx, theme, width, height);
  }
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function drawSoftGlow(ctx, x, y, r, color, alpha) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
  gradient.addColorStop(0, hexToRgba(color, alpha));
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function strokePath(ctx, points, color, width, alpha) {
  ctx.save();
  ctx.strokeStyle = hexToRgba(color, alpha);
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    if (p.length === 2) ctx.lineTo(p[0], p[1]);
    else ctx.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
  }
  ctx.stroke();
  ctx.restore();
}

function drawEllipse(ctx, x, y, rx, ry, rotation, color, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.fillStyle = hexToRgba(color, alpha);
  ctx.beginPath();
  ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawStar(ctx, x, y, outer, inner, color, alpha) {
  ctx.save();
  ctx.fillStyle = hexToRgba(color, alpha);
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / 10;
    const r = i % 2 === 0 ? outer : inner;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawGrain(ctx, theme, width) {
  for (const side of [-1, 1]) {
    const baseX = side < 0 ? 118 : width - 118;
    for (let i = 0; i < 7; i++) {
      const x = baseX + side * i * 13;
      const y = 655 + i * 115;
      strokePath(ctx, [[x, y], [x + side * 46, y - 150]], theme.accent, 3, 0.28 - i * 0.012);
      for (let g = 0; g < 5; g++) {
        const gy = y - 128 + g * 24;
        drawEllipse(ctx, x + side * (24 + g * 3), gy, 8, 20, side * -0.49, theme.accent, 0.16);
      }
    }
  }
  for (let i = 0; i < 28; i++) {
    const x = 70 + i * 42;
    const y = 205 + (i % 4) * 20;
    strokePath(ctx, [[x, y], [x + 18, y + 52]], theme.secondary, 2, 0.14 + (i % 3) * 0.03);
  }
  strokePath(ctx, [[90, 2350], [250, 2260, 390, 2295, 535, 2210]], theme.accent, 3, 0.18);
  strokePath(ctx, [[1170, 2352], [1010, 2262, 872, 2297, 725, 2215]], theme.accent, 3, 0.18);
}

function drawMarigold(ctx, theme, width) {
  drawBunting(ctx, theme, 74, 94, 7);
  drawBunting(ctx, theme, width - 536, 94, 7, true);
  for (const [cx, cy, size] of [[82, 770, 44], [1160, 790, 52], [106, 2265, 56], [1154, 2260, 46], [1015, 2440, 38], [245, 2448, 38]]) {
    flower(ctx, cx, cy, size, theme.accent, theme.secondary, 0.21);
  }
  strokePath(ctx, [[72, 2105], [210, 2060, 320, 2108, 438, 2048]], theme.secondary, 3, 0.18);
  strokePath(ctx, [[1188, 2105], [1050, 2060, 940, 2108, 822, 2048]], theme.secondary, 3, 0.18);
}

function drawClover(ctx, theme, width) {
  for (const [x, y, r] of [[95, 710, 18], [1165, 720, 22], [110, 2235, 26], [1135, 2240, 18], [250, 2485, 18], [1015, 2470, 20]]) {
    clover(ctx, x, y, r, theme.accent, 0.22);
  }
  for (let i = 0; i < 9; i++) {
    strokePath(ctx, [[84 + i * 28, 230 + i * 8], [172 + i * 20, 190 + i * 4, 268 + i * 16, 218 + i * 10, 360 + i * 9, 178 + i * 3]], theme.accent, 3, 0.11 + i * 0.006);
    strokePath(ctx, [[width - 84 - i * 28, 230 + i * 8], [width - 172 - i * 20, 190 + i * 4, width - 268 - i * 16, 218 + i * 10, width - 360 - i * 9, 178 + i * 3]], theme.accent, 3, 0.11 + i * 0.006);
  }
  strokePath(ctx, [[95, 2400], [260, 2345, 390, 2395, 520, 2325]], theme.secondary, 3, 0.18);
  strokePath(ctx, [[1165, 2400], [1000, 2345, 870, 2395, 740, 2325]], theme.secondary, 3, 0.18);
}

function drawMountainFlags(ctx, theme, width, height) {
  ctx.save();
  ctx.fillStyle = hexToRgba(theme.secondary, 0.12);
  ctx.beginPath();
  ctx.moveTo(0, 2570);
  ctx.lineTo(190, 2300);
  ctx.lineTo(320, 2460);
  ctx.lineTo(505, 2215);
  ctx.lineTo(690, 2500);
  ctx.lineTo(842, 2340);
  ctx.lineTo(1040, 2590);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = hexToRgba(theme.accent, 0.1);
  ctx.beginPath();
  ctx.moveTo(76, 2578);
  ctx.lineTo(254, 2360);
  ctx.lineTo(386, 2500);
  ctx.lineTo(548, 2302);
  ctx.lineTo(720, 2578);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  for (const y of [174, 226]) {
    strokePath(ctx, [[105, y], [285, y - 55, 410, y + 50, 570, y - 10]], "#ffffff", 2, 0.16);
    strokePath(ctx, [[690, y - 4], [850, y - 65, 978, y + 48, 1152, y - 12]], "#ffffff", 2, 0.16);
    for (let i = 0; i < 10; i++) {
      flag(ctx, 120 + i * 48, y - 4 + (i % 3) * 7, [theme.accent, theme.secondary, "#d65345", "#ffffff"][i % 4]);
      flag(ctx, 704 + i * 48, y - 8 + (i % 3) * 7, [theme.secondary, theme.accent, "#d65345", "#ffffff"][i % 4]);
    }
  }
}

function drawTanabata(ctx, theme, width) {
  for (let i = 0; i < 42; i++) {
    const x = 55 + ((i * 109) % 1150);
    const y = 130 + ((i * 73) % 250);
    drawStar(ctx, x, y, 6 + (i % 3) * 2, 2.5, i % 4 === 0 ? theme.secondary : theme.accent, 0.15 + (i % 5) * 0.025);
  }
  strokePath(ctx, [[56, 270], [250, 178, 412, 316, 610, 232], [810, 148, 972, 278, 1204, 184]], theme.accent, 2, 0.22);
  strokePath(ctx, [[70, 2380], [260, 2310, 404, 2370, 566, 2280]], theme.secondary, 3, 0.18);
  strokePath(ctx, [[1190, 2380], [1000, 2310, 856, 2370, 694, 2280]], theme.secondary, 3, 0.18);
  for (const [x, y, color] of [[96, 700, theme.secondary], [1160, 710, theme.accent], [128, 2250, theme.accent], [1132, 2250, theme.secondary], [1006, 2450, theme.accent]]) {
    tag(ctx, x, y, color);
  }
}

function drawWaterFlowers(ctx, theme) {
  for (let i = 0; i < 8; i++) {
    strokePath(ctx, [[60 + i * 16, 265 + i * 18], [190 + i * 12, 190 + i * 5, 290 + i * 20, 335 - i * 12, 420 + i * 16, 250 + i * 9]], theme.accent, 3, 0.13 + i * 0.01);
    strokePath(ctx, [[1200 - i * 16, 265 + i * 18], [1070 - i * 12, 190 + i * 5, 970 - i * 20, 335 - i * 12, 840 - i * 16, 250 + i * 9]], theme.accent, 3, 0.13 + i * 0.01);
  }
  for (const [cx, cy, size] of [[92, 770, 40], [1168, 790, 44], [120, 2235, 42], [1140, 2230, 38], [260, 2460, 34], [1005, 2468, 34]]) {
    flower(ctx, cx, cy, size, theme.secondary, theme.accent, 0.22, 5);
  }
  strokePath(ctx, [[78, 2360], [225, 2280, 408, 2344, 552, 2266]], theme.accent, 4, 0.18);
  strokePath(ctx, [[1182, 2360], [1035, 2280, 852, 2344, 708, 2266]], theme.accent, 4, 0.18);
}

function drawTricolor(ctx, theme) {
  const colors = [theme.accent, "#f3f3f5", theme.secondary];
  for (const [cx, cy] of [[112, 230], [1138, 230], [118, 2250], [1142, 2250], [260, 2460], [1000, 2460]]) {
    for (let ring = 0; ring < 3; ring++) {
      for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 * i) / 18;
        const len = 24 + ring * 18;
        const x1 = cx + Math.cos(angle) * (18 + ring * 16);
        const y1 = cy + Math.sin(angle) * (18 + ring * 16);
        const x2 = cx + Math.cos(angle) * len;
        const y2 = cy + Math.sin(angle) * len;
        strokePath(ctx, [[x1, y1], [x2, y2]], colors[(i + ring) % 3], 2, 0.12 - ring * 0.02);
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    strokePath(ctx, [[70, 170 + i * 45], [245, 125 + i * 38, 392, 215 + i * 18, 560, 160 + i * 30]], colors[i], 4, 0.18);
    strokePath(ctx, [[700, 170 + i * 45], [875, 125 + i * 38, 1022, 215 + i * 18, 1190, 160 + i * 30]], colors[i], 4, 0.18);
  }
}

function drawPumpkin(ctx, theme) {
  for (const [cx, cy, size] of [[92, 735, 46], [1166, 742, 42], [114, 2240, 54], [1145, 2245, 48], [255, 2470, 38], [1010, 2465, 42]]) {
    ctx.fillStyle = hexToRgba(theme.accent, 0.2);
    ctx.beginPath();
    ctx.ellipse(cx, cy, size * 0.55, size * 0.38, 0, 0, Math.PI * 2);
    ctx.fill();
    drawEllipse(ctx, cx - size * 0.22, cy, size * 0.28, size * 0.4, 0, theme.accent, 0.14);
    drawEllipse(ctx, cx + size * 0.22, cy, size * 0.28, size * 0.4, 0, theme.accent, 0.14);
    strokePath(ctx, [[cx, cy - size * 0.34], [cx + size * 0.16, cy - size * 0.64, cx - size * 0.08, cy - size * 0.72, cx + size * 0.18, cy - size * 0.92]], theme.secondary, 3, 0.16);
  }
  for (let i = 0; i < 18; i++) {
    dot(ctx, 90 + i * 64, 190 + (i % 3) * 35, 3 + (i % 3), theme.secondary, 0.12 + (i % 4) * 0.025);
  }
  strokePath(ctx, [[70, 2370], [225, 2295, 398, 2355, 548, 2268]], theme.accent, 3, 0.18);
  strokePath(ctx, [[1190, 2370], [1035, 2295, 862, 2355, 712, 2268]], theme.accent, 3, 0.18);
}

function drawAurora(ctx, theme) {
  for (let i = 0; i < 7; i++) {
    strokePath(ctx, [[70, 155 + i * 22], [260, 80 + i * 9, 402, 240 - i * 13, 585, 120 + i * 18]], i % 2 ? theme.secondary : theme.accent, 5, 0.09 + i * 0.01);
    strokePath(ctx, [[675, 155 + i * 22], [865, 80 + i * 9, 1007, 240 - i * 13, 1190, 120 + i * 18]], i % 2 ? theme.accent : theme.secondary, 5, 0.09 + i * 0.01);
  }
  mountainBase(ctx, theme);
  for (let i = 0; i < 28; i++) {
    dot(ctx, 55 + ((i * 127) % 1150), 305 + ((i * 97) % 180), 2 + (i % 3), "#f3f7ff", 0.12 + (i % 4) * 0.03);
  }
}

function drawSnow(ctx, theme) {
  drawAurora(ctx, theme);
  for (let i = 0; i < 50; i++) {
    dot(ctx, 55 + ((i * 131) % 1150), 125 + ((i * 83) % 330), 2 + (i % 3), "#f3f7ff", 0.09 + (i % 4) * 0.025);
  }
}

function drawSpringBuds(ctx, theme) {
  for (let i = 0; i < 8; i++) {
    strokePath(ctx, [[80 + i * 18, 270 + i * 18], [190 + i * 28, 198 + i * 8, 300 + i * 20, 330 - i * 10, 430 + i * 14, 230 + i * 8]], theme.accent, 3, 0.12 + i * 0.01);
    strokePath(ctx, [[1180 - i * 18, 270 + i * 18], [1070 - i * 28, 198 + i * 8, 960 - i * 20, 330 - i * 10, 830 - i * 14, 230 + i * 8]], theme.accent, 3, 0.12 + i * 0.01);
  }
  for (const [x, y] of [[96, 730], [1160, 735], [125, 2248], [1135, 2245], [260, 2460], [1010, 2460]]) {
    drawEllipse(ctx, x - 10, y, 10, 24, -0.6, theme.accent, 0.18);
    drawEllipse(ctx, x + 12, y - 4, 10, 24, 0.6, theme.secondary, 0.16);
  }
}

function drawSunRibbons(ctx, theme) {
  for (const [cx, cy] of [[130, 230], [1130, 230], [140, 2245], [1120, 2245], [285, 2470], [980, 2470]]) {
    for (let i = 0; i < 22; i++) {
      const angle = (Math.PI * 2 * i) / 22;
      strokePath(ctx, [[cx + Math.cos(angle) * 18, cy + Math.sin(angle) * 18], [cx + Math.cos(angle) * 64, cy + Math.sin(angle) * 64]], i % 2 ? theme.secondary : theme.accent, 3, 0.11);
    }
  }
  strokePath(ctx, [[70, 2360], [230, 2285, 410, 2350, 570, 2265]], theme.accent, 3, 0.18);
  strokePath(ctx, [[1190, 2360], [1030, 2285, 850, 2350, 690, 2265]], theme.secondary, 3, 0.18);
}

function drawFireworks(ctx, theme) {
  drawTricolor(ctx, theme);
}

function drawPetals(ctx, theme) {
  for (const [cx, cy, size] of [[92, 740, 42], [1166, 742, 38], [115, 2240, 46], [1142, 2244, 42], [255, 2468, 34], [1010, 2462, 36]]) {
    flower(ctx, cx, cy, size, theme.accent, theme.secondary, 0.18, 6);
  }
  for (let i = 0; i < 28; i++) {
    drawEllipse(ctx, 70 + ((i * 79) % 1120), 150 + ((i * 41) % 280), 5, 13, i * 0.7, i % 2 ? theme.secondary : theme.accent, 0.12);
  }
}

function drawCandle(ctx, theme) {
  for (const [x, y] of [[95, 730], [1165, 735], [125, 2245], [1135, 2240], [260, 2460], [1010, 2460]]) {
    ctx.fillStyle = hexToRgba(theme.secondary, 0.17);
    roundRect(ctx, x - 11, y - 25, 22, 58, 5);
    ctx.fill();
    drawEllipse(ctx, x, y - 42, 7, 17, 0, theme.accent, 0.22);
  }
  drawSnow(ctx, theme);
}

function drawStreamers(ctx, theme) {
  for (let y of [174, 226]) {
    strokePath(ctx, [[80, y], [260, y - 55, 420, y + 45, 590, y - 8]], theme.accent, 2, 0.16);
    strokePath(ctx, [[680, y], [860, y - 55, 1020, y + 45, 1190, y - 8]], theme.secondary, 2, 0.16);
    for (let i = 0; i < 10; i++) {
      flag(ctx, 100 + i * 48, y + (i % 3) * 7, i % 2 ? theme.secondary : theme.accent);
      flag(ctx, 700 + i * 48, y + (i % 3) * 7, i % 2 ? theme.accent : theme.secondary);
    }
  }
  drawSunRibbons(ctx, theme);
}

function drawStarfield(ctx, theme) {
  for (let i = 0; i < 56; i++) {
    const x = 50 + ((i * 113) % 1160);
    const y = 125 + ((i * 71) % 360);
    if (i % 4 === 0) drawStar(ctx, x, y, 7, 3, theme.secondary, 0.16);
    else dot(ctx, x, y, 2 + (i % 4), theme.accent, 0.11 + (i % 5) * 0.02);
  }
  strokePath(ctx, [[78, 2360], [240, 2285, 420, 2355, 574, 2268]], theme.secondary, 3, 0.18);
  strokePath(ctx, [[1182, 2360], [1020, 2285, 840, 2355, 686, 2268]], theme.secondary, 3, 0.18);
}

function drawBunting(ctx, theme, startX, y, count, alternate = false) {
  for (let i = 0; i < count; i++) {
    const x = startX + i * 70;
    ctx.fillStyle = hexToRgba((i + (alternate ? 1 : 0)) % 2 ? theme.secondary : theme.accent, 0.2);
    roundRect(ctx, x, y, 44, 58, 4);
    ctx.fill();
    strokePath(ctx, [[x + 8, y + 30], [x + 22, y + 51, x + 36, y + 30, x + 36, y + 30]], "#ffffff", 2, 0.18);
  }
}

function flower(ctx, cx, cy, size, petalColor, centerColor, alpha, petals = 12) {
  for (let p = 0; p < petals; p++) {
    const angle = (Math.PI * 2 * p) / petals;
    const px = cx + Math.cos(angle) * size * 0.48;
    const py = cy + Math.sin(angle) * size * 0.48;
    drawEllipse(ctx, px, py, size * 0.18, size * 0.36, angle, petalColor, alpha);
  }
  dot(ctx, cx, cy, size * 0.18, centerColor, alpha + 0.01);
}

function clover(ctx, cx, cy, r, color, alpha) {
  dot(ctx, cx, cy - r * 0.65, r, color, alpha);
  dot(ctx, cx - r * 0.65, cy, r, color, alpha);
  dot(ctx, cx + r * 0.65, cy, r, color, alpha);
  strokePath(ctx, [[cx, cy + r * 0.4], [cx - r * 0.15, cy + r * 1.3, cx - r * 0.7, cy + r * 2.1, cx - r * 1.15, cy + r * 2.8]], color, Math.max(2, r * 0.12), alpha);
}

function flag(ctx, x, y, color) {
  ctx.fillStyle = hexToRgba(color, 0.2);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 24, y + 7);
  ctx.lineTo(x, y + 24);
  ctx.closePath();
  ctx.fill();
}

function tag(ctx, x, y, color) {
  ctx.fillStyle = hexToRgba(color, 0.2);
  roundRect(ctx, x - 12, y - 34, 24, 68, 3);
  ctx.fill();
  strokePath(ctx, [[x, y - 52], [x, y - 34]], "#ffffff", 1.5, 0.18);
}

function mountainBase(ctx, theme) {
  ctx.save();
  ctx.fillStyle = hexToRgba(theme.accent, 0.1);
  ctx.beginPath();
  ctx.moveTo(0, 2580);
  ctx.lineTo(160, 2350);
  ctx.lineTo(270, 2492);
  ctx.lineTo(435, 2260);
  ctx.lineTo(620, 2580);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = hexToRgba(theme.secondary, 0.1);
  ctx.beginPath();
  ctx.moveTo(530, 2580);
  ctx.lineTo(700, 2335);
  ctx.lineTo(815, 2488);
  ctx.lineTo(1000, 2280);
  ctx.lineTo(1260, 2580);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function dot(ctx, x, y, r, color, alpha) {
  ctx.fillStyle = hexToRgba(color, alpha);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
