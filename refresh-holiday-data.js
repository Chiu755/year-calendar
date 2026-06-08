process.env.TZ = "Asia/Shanghai";

import fs from "fs";
import path from "path";

const OUTPUT_FILE = path.join("data", "holiday-cache.js");
const API_ROOT = "https://date.nager.at/api/v3";
const LOOKAHEAD_DAYS = 240;
const MAX_CANDIDATES_PER_DAY = 5;

await import("./data/holiday-intros.js");
const HOLIDAY_INTROS = globalThis.YearCalendarHolidayIntros || {};

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
  aurora: ["sky", "mountain", "light"],
  lanterns: ["light", "celebration", "culture"],
  paperKites: ["sky", "celebration", "wind"],
  wovenPattern: ["culture", "civic"],
  moonOrbit: ["sky", "light", "seasonal"],
  rainGarden: ["water", "botanical", "seasonal"],
  harvestSheaves: ["botanical", "harvest", "seasonal"],
  paperCut: ["civic", "celebration", "culture"],
  teaSteam: ["culture", "light", "winter"]
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
  springBuds: [["#18251f", "#5b6040", "#111516"], "#a9d37f", "#e6b6c8"],
  lanterns: [["#171427", "#523143", "#111214"], "#f0c95c", "#e85a63"],
  paperKites: [["#102238", "#365a70", "#101418"], "#78bde6", "#e6b66b"],
  wovenPattern: [["#171822", "#4d3d32", "#111314"], "#d8b95b", "#78bde8"],
  moonOrbit: [["#101729", "#2f3158", "#111316"], "#d8c070", "#9fc8ff"],
  rainGarden: [["#122735", "#346158", "#101518"], "#87c9b7", "#c8d58f"],
  harvestSheaves: [["#211916", "#604026", "#111314"], "#d8a05f", "#9bb06d"],
  paperCut: [["#25080c", "#7a1e26", "#12090a"], "#f6c85f", "#e83b36"],
  teaSteam: [["#101827", "#37304d", "#111214"], "#f0c95c", "#f2f0d6"]
};

const COUNTRY_PALETTES = {
  CN: [["#25080c", "#8f171c", "#12090a"], "#f6c85f", "#e83b36"],
  US: [["#101a34", "#4a2432", "#111316"], "#6aa7ff", "#e85a63"],
  JP: [["#171318", "#4b1f2a", "#111214"], "#f2eee6", "#d94a4d"],
  SG: [["#151821", "#5b2530", "#111315"], "#e85a63", "#f3f3f5"],
  FR: [["#101d3f", "#342742", "#4c2734"], "#6aa7ff", "#e85a63"],
  GB: [["#111b32", "#482538", "#111316"], "#7faee8", "#e65b5b"],
  CA: [["#17161c", "#5d2630", "#111214"], "#e85a63", "#f3f3f5"],
  AU: [["#101d34", "#263a54", "#111316"], "#78aee8", "#d8b95b"],
  DE: [["#151515", "#55302d", "#111111"], "#d8b95b", "#d65345"],
  IT: [["#10251f", "#4f2c31", "#111515"], "#70bf75", "#e65b5b"],
  ES: [["#211619", "#63362a", "#111314"], "#d8b95b", "#e65b5b"],
  KR: [["#11192d", "#3d2f4b", "#111316"], "#f3f3f5", "#d8555b"],
  TH: [["#111b34", "#4d2844", "#111316"], "#7fbbe8", "#e65b5b"],
  CH: [["#151b27", "#4d2727", "#111314"], "#e65b5b", "#f0f0f2"],
  NO: [["#101d34", "#4f2d38", "#101316"], "#6da2cf", "#e65b5b"],
  MX: [["#10251f", "#4f2c31", "#111515"], "#70bf75", "#e85a63"],
  BR: [["#102622", "#465c2d", "#101516"], "#77c98e", "#d8c070"],
  IN: [["#18251f", "#604026", "#111515"], "#f0a24a", "#70bf75"],
  ZA: [["#10251f", "#1f415a", "#111515"], "#77c98e", "#d8b95b"],
  NZ: [["#101d34", "#293f5d", "#101316"], "#78aee8", "#e85a63"]
};

const OCCASION_PALETTES = [
  [/christmas/i, [["#101827", "#2d4436", "#111314"], "#d8c070", "#d65345"]],
  [/halloween/i, [["#17121f", "#4b2d13", "#111113"], "#f08a2d", "#8d65c5"]],
  [/valentine/i, [["#241525", "#643044", "#111214"], "#e87a94", "#d7b56b"]],
  [/new year's day|new year's eve/i, [["#151a2d", "#493456", "#111316"], "#d6c070", "#78b8e6"]],
  [/thanksgiving|harvest/i, [["#211916", "#604026", "#111314"], "#d8a05f", "#9bb06d"]]
];

const CULTURAL_OBSERVANCES = [
  ["01-24", "International Day of Education", "国际教育日", "联合国设立的国际日，关注学习、知识与人的发展。", "starfield", ["#111d34", "#263e5b", "#101316"], "#78bde8", "#d8c070", 66, ["culture", "international", "light"]],
  ["02-11", "Women and Girls in Science Day", "妇女和女童参与科学国际日", "国际日，鼓励更多女性进入科学与探索的领域。", "aurora", ["#17182d", "#3d2f59", "#111316"], "#b68fd8", "#78bde8", 68, ["culture", "international", "sky"]],
  ["02-21", "International Mother Language Day", "国际母语日", "联合国教科文组织倡议的日子，纪念语言多样性与文化传承。", "streamers", ["#151d2d", "#3f3a58", "#111316"], "#d8b95b", "#78bde8", 72, ["culture", "international", "celebration"]],
  ["03-08", "International Women's Day", "国际妇女节", "纪念女性权益与创造力的国际节日。", "petals", ["#241525", "#643044", "#111214"], "#e87a94", "#d7b56b", 74, ["culture", "international", "celebration", "botanical"]],
  ["03-20", "International Day of Happiness", "国际幸福日", "联合国设立的国际日，提醒人们珍视幸福与共同生活。", "sunRibbons", ["#201d25", "#5e4a2a", "#111314"], "#f0c95c", "#e87a94", 66, ["culture", "international", "sun", "celebration"]],
  ["03-21", "World Poetry Day", "世界诗歌日", "联合国教科文组织设立的文化日，纪念诗歌、语言与想象力。", "petals", ["#17182d", "#473254", "#111316"], "#d6b6e8", "#d8c070", 70, ["culture", "international", "botanical"]],
  ["03-22", "World Water Day", "世界水日", "联合国设立的国际日，关注水资源与蓝色星球。", "waterFlowers", ["#0c2134", "#225a6a", "#101418"], "#70cce8", "#8bd0b6", 72, ["culture", "international", "water"]],
  ["04-15", "World Art Day", "世界艺术日", "纪念艺术、创作与视觉文化的世界性日子。", "streamers", ["#19172d", "#5a344d", "#111316"], "#e87a94", "#78bde8", 72, ["culture", "international", "celebration"]],
  ["04-22", "Earth Day", "世界地球日", "关注环境保护与生态共生的全球纪念日。", "aurora", ["#102622", "#2f5c4c", "#101516"], "#77c98e", "#75bdd8", 76, ["culture", "international", "botanical", "water"]],
  ["04-23", "World Book Day", "世界读书日", "联合国教科文组织设立的文化日，纪念阅读、书籍与出版。", "starfield", ["#171827", "#3c3350", "#111316"], "#d8c070", "#b68fd8", 70, ["culture", "international", "light"]],
  ["04-30", "International Jazz Day", "国际爵士乐日", "联合国教科文组织设立的音乐日，纪念即兴、节奏与城市夜色。", "starfield", ["#111729", "#493456", "#111316"], "#d6c070", "#8fc8ff", 74, ["culture", "international", "sky", "celebration"]],
  ["05-18", "International Museum Day", "国际博物馆日", "纪念博物馆、收藏与公共文化记忆。", "mountainFlags", ["#171822", "#4d3d32", "#111314"], "#d8b95b", "#78bde8", 70, ["culture", "international", "civic"]],
  ["05-21", "International Tea Day", "国际茶日", "联合国设立的国际日，纪念茶、农耕与日常仪式感。", "springBuds", ["#14251d", "#496143", "#111516"], "#8fcb7d", "#d8c070", 72, ["culture", "international", "botanical", "harvest"]],
  ["06-05", "World Environment Day", "世界环境日", "联合国环境日，关注生态、城市与地球未来。", "aurora", ["#102622", "#2f5c4c", "#101516"], "#77c98e", "#75bdd8", 74, ["culture", "international", "botanical", "water"]],
  ["06-08", "World Oceans Day", "世界海洋日", "关注海洋、潮汐与蓝色星球的国际日。", "waterFlowers", ["#0c2134", "#225a6a", "#101418"], "#70cce8", "#8bd0b6", 76, ["culture", "international", "water", "island"]],
  ["06-21", "World Music Day", "世界音乐日", "夏至前后的音乐日，用节奏、声响与街头庆祝连接城市。", "sunRibbons", ["#1c2332", "#6c522e", "#111316"], "#f0c95c", "#79b7d8", 74, ["culture", "international", "celebration", "sun"]],
  ["07-30", "International Day of Friendship", "国际友谊日", "联合国设立的国际日，纪念友谊、理解与相互照亮。", "streamers", ["#141d2f", "#493456", "#111316"], "#d6c070", "#78b8e6", 68, ["culture", "international", "celebration", "light"]],
  ["08-09", "Indigenous Peoples Day", "世界土著人民国际日", "联合国设立的国际日，关注原住民文化、土地与传统。", "mountainFlags", ["#1a2019", "#5a5634", "#111515"], "#d8b95b", "#91c47c", 70, ["culture", "international", "mountain", "botanical"]],
  ["08-12", "International Youth Day", "国际青年日", "联合国设立的国际日，关注年轻人的创造力与公共参与。", "streamers", ["#102238", "#365a70", "#101418"], "#78bde6", "#e66b58", 68, ["culture", "international", "celebration"]],
  ["08-19", "World Photography Day", "世界摄影日", "纪念影像、光线与观看方式的文化日。", "starfield", ["#111827", "#2e3d51", "#101316"], "#d8c070", "#78bde8", 68, ["culture", "international", "light"]],
  ["09-21", "International Day of Peace", "国际和平日", "联合国设立的国际日，纪念和平、停火与共同生活。", "candle", ["#101827", "#37304d", "#111214"], "#f0c95c", "#f2f0d6", 76, ["culture", "international", "light", "memorial"]],
  ["09-27", "World Tourism Day", "世界旅游日", "关注旅行、地方文化与人与地点之间的连接。", "mountainFlags", ["#102039", "#5c4227", "#101417"], "#6da2cf", "#f0b64d", 66, ["culture", "international", "mountain", "celebration"]],
  ["10-01", "International Coffee Day", "国际咖啡日", "纪念咖啡、手作与城市日常节奏的国际文化日。", "grain", ["#1b1513", "#563321", "#111314"], "#d8a05f", "#9bb06d", 64, ["culture", "international", "harvest"]],
  ["10-05", "World Teachers' Day", "世界教师日", "联合国教科文组织设立的国际日，感谢教育者与知识传递。", "starfield", ["#171827", "#3c3350", "#111316"], "#d8c070", "#b68fd8", 68, ["culture", "international", "light"]],
  ["10-16", "World Food Day", "世界粮食日", "联合国粮农组织纪念日，关注食物、土地与人类生活。", "grain", ["#211916", "#604026", "#111314"], "#d8a05f", "#9bb06d", 70, ["culture", "international", "harvest", "botanical"]],
  ["10-24", "United Nations Day", "联合国日", "纪念联合国宪章生效的国际日，象征合作、和平与公共秩序。", "tricolor", ["#101d34", "#263a54", "#111316"], "#78aee8", "#f3f3f5", 72, ["culture", "international", "civic"]],
  ["11-13", "World Kindness Day", "世界友善日", "纪念善意、照顾与人与人之间温柔连接的文化日。", "petals", ["#241525", "#643044", "#111214"], "#e87a94", "#d7b56b", 66, ["culture", "international", "botanical", "light"]],
  ["11-16", "International Day for Tolerance", "国际宽容日", "联合国教科文组织设立的国际日，纪念理解、差异与共处。", "candle", ["#101827", "#37304d", "#111214"], "#f0c95c", "#f2f0d6", 68, ["culture", "international", "light"]],
  ["11-21", "World Television Day", "世界电视日", "联合国设立的国际日，纪念影像媒介与公共叙事。", "starfield", ["#101b33", "#2e4770", "#101316"], "#9fc8ff", "#e6c86f", 62, ["culture", "international", "sky", "light"]],
  ["12-10", "Human Rights Day", "人权日", "联合国纪念日，关注人的尊严、自由与平等。", "candle", ["#101827", "#37304d", "#111214"], "#f0c95c", "#f2f0d6", 74, ["culture", "international", "civic", "light"]],
  ["12-18", "International Migrants Day", "国际移民日", "联合国设立的国际日，关注迁徙、家园与跨文化生活。", "mountainFlags", ["#111d34", "#263e5b", "#101316"], "#78bde8", "#d8c070", 66, ["culture", "international", "mountain"]]
].map(([monthDay, title, localName, description, motif, gradient, accent, secondary, priority, tags]) => ({
  monthDay,
  title,
  localName,
  description,
  motif,
  gradient,
  accent,
  secondary,
  priority,
  tags
}));

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
  if (/lantern/.test(text)) return "lanterns";
  if (/moon|mid-autumn/.test(text)) return "moonOrbit";
  if (/songkran|water|rain|garden/.test(text)) return "rainGarden";
  if (/sea|ocean|island|dragon boat|marine|harbour|harbor/.test(text)) return "waterFlowers";
  if (/mountain|swiss|norway|alps|himalaya|qingming|tomb/.test(text)) return "mountainFlags";
  if (/star|tanabata|eve/.test(text)) return "tanabata";
  if (/halloween/.test(text)) return "pumpkin";
  if (/dead|muertos/.test(text)) return "marigold";
  if (/lucia|candle|light/.test(text)) return "candle";
  if (/winter|snow|epiphany/.test(text)) return "snow";
  if (/labor|labour|workers|may day|flag|civic|state|federation/.test(text)) return "paperCut";
  if (/thanksgiving|harvest|autumn/.test(text)) return "harvestSheaves";
  if (/spring|easter|good friday|qingming/.test(text)) return "springBuds";
  return country.affinity >= 20 ? "sunRibbons" : "wovenPattern";
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
  const intro = holidayIntroFor(holiday.name, country, holiday.localName);
  if (intro) return intro;
  return holidayIntroduction(holiday, country);
}

function holidayIntroFor(title, country, localName = "") {
  const keys = [
    `${country.code}|${title}`,
    localName ? `${country.code}|${localName}` : "",
    title,
    localName
  ].filter(Boolean);

  for (const key of keys) {
    const intro = HOLIDAY_INTROS[key] || introByNormalizedKey(key);
    if (intro) return intro;
  }
  return "";
}

function introByNormalizedKey(key) {
  const normalizedKey = normalizeIntroKey(key);
  const match = Object.entries(HOLIDAY_INTROS).find(([introKey]) => normalizeIntroKey(introKey) === normalizedKey);
  return match?.[1] || "";
}

function normalizeIntroKey(value) {
  return value.toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();
}

function holidayIntroduction(holiday, country) {
  const title = holiday.name;
  const text = `${holiday.name} ${holiday.localName}`.toLowerCase();
  const localName = holiday.localName && holiday.localName !== holiday.name ? holiday.localName : "";

  if (/king'?s birthday|queen'?s birthday/.test(text)) {
    if (country.code === "AU") {
      return "这是澳大利亚庆祝英国君主生日的假日，多数地区会把它安排成六月长周末，人们常借此休息、出行或参加社区活动。";
    }
    return "这是英联邦传统中的君主生日假日，用来象征君主制与国家礼仪，也常成为当地的长周末。";
  }
  if (/new year/.test(text)) return "新年假日标志公历年份开始，人们常用倒数、烟火、聚会和休息迎接新的日历周期。";
  if (/christmas/.test(text)) return "圣诞节源自基督教传统，后来也成为许多地方的冬日团聚节日，常见象征包括灯饰、松枝、礼物和家庭餐桌。";
  if (/boxing day/.test(text)) return "节礼日延续自英联邦传统，通常在圣诞节后一天，人们会继续休假、探亲、购物或观看体育赛事。";
  if (/good friday/.test(text)) return "耶稣受难日纪念基督教传统中耶稣受难的日子，许多地方会以静默礼拜和复活节前的休假来标记。";
  if (/easter/.test(text)) return "复活节源自基督教传统，纪念复活与新生，许多地方也有彩蛋、家庭聚会和春日休假的习俗。";
  if (/independence day/.test(text)) return `${country.zhName}的独立纪念日，通常纪念国家取得主权或脱离殖民统治的历史时刻，常伴随旗帜、仪式和公共庆祝。`;
  if (/national day/.test(text)) return `${country.zhName}的国家纪念日，通常用来纪念国家成立、宪法传统或重要历史节点，常有官方仪式和公共庆典。`;
  if (/republic day/.test(text)) return `${country.zhName}的共和国纪念日，通常纪念共和国体制确立或重要宪政转折，是国家身份的一部分。`;
  if (/constitution day/.test(text)) return `${country.zhName}的宪法纪念日，纪念宪法秩序或现代国家制度的重要节点。`;
  if (/foundation day/.test(text)) return `${country.zhName}的建国或奠基纪念日，通常回望国家、城市或共同体形成的历史。`;
  if (/labou?r day|workers'? day|may day/.test(text)) return "劳动节纪念劳动者权益与劳动生活，许多地方会在这一天休假，也可能举行游行、集会或公共活动。";
  if (/thanksgiving/.test(text)) return "感恩节以感谢、收获和团聚为核心，常见习俗包括家庭餐桌、秋日食物和与亲友共度假日。";
  if (/remembrance|memorial/.test(text)) return "这是带有追思性质的纪念日，常用静默、花束、仪式或公共纪念来记住历史与逝去的人。";
  if (/all saints/.test(text)) return "诸圣节源自基督教传统，用来纪念圣徒，也常与献花、点烛和追思逝者联系在一起。";
  if (/bank holiday/.test(text)) return `${country.zhName}的银行假日通常是公共休息日，人们会利用这一天旅行、聚会或处理家庭与社区活动。`;
  if (/^day of /i.test(title)) {
    const place = title.replace(/^Day of /i, "");
    return `${place}日通常纪念地方身份、自治传统或区域历史，是当地公共生活与社区记忆的一部分。`;
  }
  if (localName) return `${country.zhName}以「${localName}」为名纪念这一天，通常与当地历史、传统或社区公共生活有关。`;
  return `${title}是${country.zhName}日历中的纪念日，通常承载当地历史、公共生活或季节性的休假安排。`;
}

function primaryHolidayTypeLabel(types = []) {
  const labels = holidayTypeLabels(types);
  return labels[0] || "节日";
}

function holidayTypeLabels(types = []) {
  const labels = {
    Public: "公众节日",
    Bank: "银行假日",
    School: "学校假日",
    Authorities: "政府机关假日",
    Optional: "可选假日",
    Observance: "纪念日"
  };
  return Array.isArray(types) ? types.map((value) => labels[value]).filter(Boolean) : [];
}

function captionForHoliday(holiday, country) {
  const phrase = holiday.localName && holiday.localName !== holiday.name ? holiday.localName : country.name;
  return `${holiday.name} · ${phrase}`;
}

function themeForHoliday(holiday, country, score) {
  const motif = selectMotif(holiday, country);
  const text = `${holiday.name} ${holiday.localName}`.toLowerCase();
  const occasionPalette = OCCASION_PALETTES.find(([pattern]) => pattern.test(text))?.[1];
  const [gradient, accent, secondary] = occasionPalette || COUNTRY_PALETTES[country.code] || MOTIF_STYLES[motif] || MOTIF_STYLES.aurora;
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
      typeLabels: holidayTypeLabels(holiday.types)
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
    const key = `${theme.title.toLowerCase()}-${theme.source.provider}-${theme.source.countryCode || "global"}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(theme);
  }
  return result;
}

function themeForCulturalObservance(observance, date) {
  return {
    title: observance.title,
    caption: `${observance.title} · ${observance.localName}`,
    description: observance.description,
    motif: observance.motif,
    gradient: observance.gradient,
    accent: observance.accent,
    secondary: observance.secondary,
    priority: observance.priority,
    tags: observance.tags,
    source: {
      provider: "Curated Cultural Observances",
      countryCode: "INTL",
      countryName: "International",
      zhName: "国际",
      localName: observance.localName,
      typeLabels: observance.tags.includes("culture") ? ["文化日"] : ["国际日"]
    },
    score: observance.priority * 8 + date.getMonth() * 3
  };
}

function addCulturalObservances(days, startDate, endDate) {
  for (const year of yearsInRange(startDate, endDate)) {
    for (const observance of CULTURAL_OBSERVANCES) {
      const date = dateFromKey(`${year}-${observance.monthDay}`);
      if (!date || !inRange(date, startDate, endDate)) continue;
      const key = dateKey(date);
      days[key] ||= [];
      days[key].push(themeForCulturalObservance(observance, date));
    }
  }
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

  addCulturalObservances(days, startDate, endDate);

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
    sources: [
      {
        name: "Nager.Date Public Holidays",
        url: `${API_ROOT}/PublicHolidays/{year}/{countryCode}`
      },
      {
        name: "Curated Cultural Observances",
        count: CULTURAL_OBSERVANCES.length
      }
    ],
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
