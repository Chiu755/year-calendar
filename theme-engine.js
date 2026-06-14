const THEME_CONFIG = {
  text: "#d7d7db",
  mutedText: "#8e8e93",
  overlay: "rgba(5,5,6,0.34)"
};

const FONT_STACK = "\"Noto Sans CJK SC\", \"Noto Sans SC\", \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif";

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

const CULTURAL_PALETTES = {
  CN: { gradient: ["#25080c", "#8f171c", "#12090a"], accent: "#f6c85f", secondary: "#e83b36", tags: ["civic", "celebration", "sun", "light"] },
  US: { gradient: ["#101a34", "#4a2432", "#111316"], accent: "#6aa7ff", secondary: "#e85a63", tags: ["civic", "celebration", "sky"] },
  JP: { gradient: ["#171318", "#4b1f2a", "#111214"], accent: "#f2eee6", secondary: "#d94a4d", tags: ["sun", "civic"] },
  SG: { gradient: ["#151821", "#5b2530", "#111315"], accent: "#e85a63", secondary: "#f3f3f5", tags: ["civic", "celebration"] },
  FR: { gradient: ["#101d3f", "#342742", "#4c2734"], accent: "#6aa7ff", secondary: "#e85a63", tags: ["civic", "celebration"] },
  GB: { gradient: ["#111b32", "#482538", "#111316"], accent: "#7faee8", secondary: "#e65b5b", tags: ["civic"] },
  CA: { gradient: ["#17161c", "#5d2630", "#111214"], accent: "#e85a63", secondary: "#f3f3f5", tags: ["civic", "botanical"] },
  AU: { gradient: ["#101d34", "#263a54", "#111316"], accent: "#78aee8", secondary: "#d8b95b", tags: ["sky", "civic"] },
  DE: { gradient: ["#151515", "#55302d", "#111111"], accent: "#d8b95b", secondary: "#d65345", tags: ["civic"] },
  IT: { gradient: ["#10251f", "#4f2c31", "#111515"], accent: "#70bf75", secondary: "#e65b5b", tags: ["civic", "botanical"] },
  ES: { gradient: ["#211619", "#63362a", "#111314"], accent: "#d8b95b", secondary: "#e65b5b", tags: ["sun", "civic"] },
  KR: { gradient: ["#11192d", "#3d2f4b", "#111316"], accent: "#f3f3f5", secondary: "#d8555b", tags: ["civic", "sky"] },
  TH: { gradient: ["#111b34", "#4d2844", "#111316"], accent: "#7fbbe8", secondary: "#e65b5b", tags: ["water", "celebration"] },
  CH: { gradient: ["#151b27", "#4d2727", "#111314"], accent: "#e65b5b", secondary: "#f0f0f2", tags: ["mountain", "civic"] },
  NO: { gradient: ["#101d34", "#4f2d38", "#101316"], accent: "#6da2cf", secondary: "#e65b5b", tags: ["winter", "civic"] },
  MX: { gradient: ["#10251f", "#4f2c31", "#111515"], accent: "#70bf75", secondary: "#e85a63", tags: ["civic", "celebration"] },
  BR: { gradient: ["#102622", "#465c2d", "#101516"], accent: "#77c98e", secondary: "#d8c070", tags: ["sun", "celebration"] },
  IN: { gradient: ["#18251f", "#604026", "#111515"], accent: "#f0a24a", secondary: "#70bf75", tags: ["civic", "sun"] },
  ZA: { gradient: ["#10251f", "#1f415a", "#111515"], accent: "#77c98e", secondary: "#d8b95b", tags: ["civic", "celebration"] },
  NZ: { gradient: ["#101d34", "#293f5d", "#101316"], accent: "#78aee8", secondary: "#e85a63", tags: ["sky", "civic"] }
};

const OCCASION_PALETTES = [
  [/christmas/i, { gradient: ["#101827", "#2d4436", "#111314"], accent: "#d8c070", secondary: "#d65345", tags: ["winter", "light"] }],
  [/halloween/i, { gradient: ["#17121f", "#4b2d13", "#111113"], accent: "#f08a2d", secondary: "#8d65c5", tags: ["night", "playful"] }],
  [/valentine/i, { gradient: ["#241525", "#643044", "#111214"], accent: "#e87a94", secondary: "#d7b56b", tags: ["botanical", "celebration"] }],
  [/new year's day|new year's eve/i, { gradient: ["#151a2d", "#493456", "#111316"], accent: "#d6c070", secondary: "#78b8e6", tags: ["fireworks", "light"] }],
  [/thanksgiving|harvest/i, { gradient: ["#211916", "#604026", "#111314"], accent: "#d8a05f", secondary: "#9bb06d", tags: ["harvest", "botanical"] }]
];

const COUNTRY_NAMES_ZH = {
  INTL: "国际",
  CN: "中国",
  US: "美国",
  JP: "日本",
  SG: "新加坡",
  FR: "法国",
  GB: "英国",
  CA: "加拿大",
  AU: "澳大利亚",
  DE: "德国",
  IT: "意大利",
  ES: "西班牙",
  KR: "韩国",
  TH: "泰国",
  CH: "瑞士",
  NO: "挪威",
  MX: "墨西哥",
  BR: "巴西",
  IN: "印度",
  ZA: "南非",
  NZ: "新西兰"
};

const REGION_NAMES_ZH = typeof Intl !== "undefined" && Intl.DisplayNames
  ? new Intl.DisplayNames(["zh-Hans"], { type: "region" })
  : null;

const ZH_MONTH_TO_EN = {
  一月: "January",
  二月: "February",
  三月: "March",
  四月: "April",
  五月: "May",
  六月: "June",
  七月: "July",
  八月: "August",
  九月: "September",
  十月: "October",
  十一月: "November",
  十二月: "December"
};

const SEASONAL_TITLE_EN = {
  雪光: "Snowlight",
  霜窗: "Frost Window",
  冷白: "Cold White",
  窗灯: "Window Light",
  暖烛: "Warm Candle",
  夜灯: "Night Light",
  月轨: "Moon Orbit",
  夜潮: "Night Tide",
  微月: "Small Moon",
  茶汽: "Tea Steam",
  暖雾: "Warm Mist",
  杯影: "Cup Shadow",
  新芽: "New Buds",
  枝信: "Branch Signal",
  青芽: "Green Buds",
  雨庭: "Rain Garden",
  雨幕: "Rain Veil",
  湿光: "Wet Light",
  纸鸢: "Paper Kites",
  风线: "Wind Lines",
  晴风: "Clear Wind",
  花影: "Petal Shadows",
  花信: "Flower Signal",
  柔瓣: "Soft Petals",
  水花: "Water Flowers",
  水纹: "Water Pattern",
  潮色: "Tidal Color",
  织纹: "Woven Pattern",
  经纬: "Warp and Weft",
  布纹: "Cloth Texture",
  麦色: "Wheat Color",
  谷光: "Grain Light",
  穗影: "Ear Shadows",
  麦束: "Wheat Sheaves",
  谷束: "Grain Sheaves",
  金穗: "Golden Ears",
  长昼: "Long Day",
  日带: "Sun Ribbon",
  晴弧: "Clear Arc",
  灯影: "Lantern Shadows",
  小灯: "Small Lights",
  光串: "Light String",
  天光: "Sky Light",
  流光: "Flowing Light",
  山色: "Mountain Color",
  剪影: "Paper Cut",
  纸纹: "Paper Texture",
  红金: "Red and Gold",
  星图: "Star Map",
  夜星: "Night Stars",
  星线: "Star Lines"
};

const HOLIDAY_TYPE_LABELS = {
  Public: "公众节日",
  Bank: "银行假日",
  School: "学校假日",
  Authorities: "政府机关假日",
  Optional: "可选假日",
  Observance: "纪念日"
};

const PALETTE_ATMOSPHERES = [
  "#2a1024", "#33131b", "#3a160f", "#38210f", "#2e2a12", "#1f3218", "#123025", "#103038",
  "#102b44", "#14244b", "#1d1f4a", "#2a1d49", "#381c42", "#431b34", "#4a1f27", "#3c2a18",
  "#24351f", "#17382d", "#163847", "#19304f", "#222b52", "#312650", "#44234a", "#512233",
  "#552622", "#483316", "#394018", "#254521", "#18483a", "#174654", "#1d3c60", "#29345f",
  "#3a2b5a", "#4b2851", "#5a2840", "#5a302d", "#4b3b22"
];

const DAY_INTROS = {
  "New Year's Day": "公历新年的第一天，用烟火和微光开启新一年的日历。",
  "Valentine's Day": "情人节，以玫瑰、书信和温柔心意纪念亲密关系。",
  "Saint Patrick's Day": "爱尔兰文化节日，常以三叶草和绿色游行庆祝。",
  Songkran: "泰国传统新年，泼水象征洗去旧岁、迎接祝福。",
  "Earth Day": "世界地球日，提醒人们关注环境保护与生态共生。",
  "International Workers' Day": "国际劳动节，纪念劳动者权益与春日劳动精神。",
  "Children's Day Japan": "日本儿童节，鲤鱼旗象征孩子健康成长、乘风向上。",
  "Tonga Emancipation Day": "汤加解放日，纪念自由与岛屿共同体的历史时刻。",
  "Iceland National Day": "冰岛国庆日，纪念共和国成立和北大西洋夏日传统。",
  "Seychelles National Day": "塞舌尔国庆日，用群岛旗色与海风庆祝国家身份。",
  "Mozambique Independence Day": "莫桑比克独立日，纪念国家独立与海岸节庆鼓点。",
  "Seychelles Independence Day": "塞舌尔独立日，纪念印度洋群岛走向独立的日子。",
  "Independence Day": "美国独立日，常以烟火、旗帜和夏夜聚会庆祝。",
  Tanabata: "七夕源自星河传说，人们写下愿望挂在短册上。",
  "Bastille Day": "法国国庆日，纪念法国大革命中的巴士底狱事件。",
  "Maldives Independence Day": "马尔代夫独立日，以珊瑚海与绿色旗影纪念主权。",
  "Vanuatu Independence Day": "瓦努阿图独立日，纪念南太平洋岛国的独立庆典。",
  "Swiss National Day": "瑞士国庆日，山间灯火和红白旗色是节日符号。",
  "Singapore National Day": "新加坡国庆日，城市海湾常被红白旗色与烟火点亮。",
  "San Marino Foundation Day": "圣马力诺建国日，纪念山城古国的共和国传统。",
  "Andorra National Day": "安道尔国家日，纪念比利牛斯山间小国的守护传统。",
  "Mexico Independence Day": "墨西哥独立日，钟声、广场和绿白红旗帜是核心意象。",
  "Tuvalu Independence Day": "图瓦卢独立日，纪念太平洋岛国的国家生日。",
  "Germany Unity Day": "德国统一日，纪念东西德重新统一的现代历史时刻。",
  Halloween: "万圣夜前夕，南瓜灯、夜色和装扮构成十月节庆。",
  "All Saints' Day": "诸圣节，用鲜花与烛光纪念圣徒和逝去的人。",
  "Dia de Muertos": "亡灵节，以万寿菊、祭坛和色彩记住亲人。",
  "Remembrance Day": "阵亡将士纪念日，红罂粟象征静默追思。",
  "Saint Lucia Day": "圣露西亚节，冬夜烛冠与歌声象征光回到人间。",
  "Bhutan National Day": "不丹国庆日，在山风和彩旗中纪念国家历史。",
  "Christmas Eve": "平安夜，冬夜窗灯、松枝与等待构成节日前奏。",
  "Christmas Day": "圣诞节，用松枝、钟声和雪光庆祝冬日团聚。",
  "New Year's Eve": "跨年夜，在倒数与烟火中告别旧岁、迎向新年。",
  Thanksgiving: "感恩节，以秋日餐桌和团聚表达感谢。",
  "World Oceans Day": "世界海洋日，提醒人们保护潮汐、海风与蓝色星球。",
  "Fiji Day": "斐济日，纪念群岛国家的独立与南太平洋节庆传统。",
  "Monaco National Day": "摩纳哥国庆日，海岸城邦用红白旗色纪念国家传统。",
  "Liechtenstein National Day": "列支敦士登国庆日，在阿尔卑斯山间庆祝国家身份。",
  "Tonga National Day": "汤加国庆日，以岛风、旗色和共同体记忆庆祝国家日。",
  "Kiribati Independence Day": "基里巴斯独立日，纪念太平洋岛国走向独立。",
  "Nauru Independence Day": "瑙鲁独立日，纪念蓝海岛国的国家生日。",
  "Palau Constitution Day": "帕劳宪法日，纪念宪法秩序与太平洋岛国身份。",
  "Samoa Independence Day": "萨摩亚独立日，纪念南太平洋群岛国家的独立。",
  "San Marino Civic Day": "圣马力诺公民日，纪念共和国传统与山城公民身份。",
  "Malta Republic Day": "马耳他共和国日，纪念地中海岛国的共和国历史。",
  "Cyprus Independence Day": "塞浦路斯独立日，纪念地中海岛国的独立。",
  "Belize Independence Day": "伯利兹独立日，纪念中美洲国家的独立与热带庆典。",
  "Cape Verde Independence Day": "佛得角独立日，纪念大西洋群岛国家的独立。",
  "Saint Lucia Independence Day": "圣卢西亚独立日，纪念加勒比岛国的独立。",
  "Barbados Independence Day": "巴巴多斯独立日，纪念加勒比岛国的独立与金蓝旗色。",
  "Botswana Day": "博茨瓦纳日，纪念国家独立与蓝白黑旗色传统。",
  "Estonia Independence Day": "爱沙尼亚独立日，纪念北方国家的独立。",
  "Georgia Independence Day": "格鲁吉亚独立日，纪念高加索国家的独立。",
  "Nepal Constitution Day": "尼泊尔宪法日，纪念喜马拉雅山国的宪法时刻。",
  "Laos National Day": "老挝国庆日，纪念湄公河畔国家的现代历史。",
  "Qatar National Day": "卡塔尔国庆日，纪念海湾国家的历史与酒红旗色。",
  "Oman National Day": "阿曼国庆日，以红绿白旗色纪念海湾国家传统。",
  "Mongolia Naadam": "那达慕是蒙古传统节庆，草原竞技与彩旗是核心意象。",
  "Norway Constitution Day": "挪威宪法日，峡湾蓝与五月旗海庆祝国家宪法。"
};

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

const MONTH_MOODS = [
  {
    title: "Deep Winter Light",
    zhMonth: "一月",
    mood: "寒夜、雪光与岁初微光",
    intro: "一月处在深冬与岁初之间，寒意最盛，白昼缓慢变长，日历从清冷的微光里重新开始。",
    motif: "snow",
    gradient: ["#101827", "#26374c", "#101214"],
    accent: "#a9c9e8",
    secondary: "#d9d9e5",
    tags: ["seasonal", "winter", "light"]
  },
  {
    title: "Early Spring Signal",
    zhMonth: "二月",
    mood: "早春枝芽、细雨和将醒未醒的空气",
    intro: "二月常在冬末与早春之间摆动，寒意还在，降水和枝芽已经开始提示新的季节。",
    motif: "springBuds",
    gradient: ["#14251d", "#425643", "#111516"],
    accent: "#92c982",
    secondary: "#d8c070",
    tags: ["seasonal", "spring", "botanical"]
  },
  {
    title: "Spring Bud Field",
    zhMonth: "三月",
    mood: "昼夜渐平、花信渐浓与新绿漫开的田野",
    intro: "三月进入春意更清楚的时段，昼夜渐渐均衡，花信与新绿让日历从沉静转向舒展。",
    motif: "springBuds",
    gradient: ["#16251e", "#526141", "#111516"],
    accent: "#a9d37f",
    secondary: "#e6b6c8",
    tags: ["seasonal", "spring", "botanical"]
  },
  {
    title: "Clear Rain Garden",
    zhMonth: "四月",
    mood: "春雨气息、水面花影和暮春透明感",
    intro: "四月的春雨变得频繁，草木继续生长，暮春的空气带着透明的水汽和新绿。",
    motif: "waterFlowers",
    gradient: ["#122735", "#346158", "#101518"],
    accent: "#87c9b7",
    secondary: "#c8d58f",
    tags: ["seasonal", "spring", "water", "botanical"]
  },
  {
    title: "Green Grain Rise",
    zhMonth: "五月",
    mood: "麦穗渐满、长昼初热和明亮绿意",
    intro: "五月从春末走向初夏，麦穗渐满，白昼拉长，天气开始有更明亮的热意。",
    motif: "grain",
    gradient: ["#1a271c", "#5d6639", "#121515"],
    accent: "#bfd46f",
    secondary: "#76b58a",
    tags: ["seasonal", "harvest", "botanical"]
  },
  {
    title: "Summer Water Pattern",
    zhMonth: "六月",
    mood: "夏日水纹、梅雨蓝绿和长昼里的潮湿光感",
    intro: "六月进入仲夏，白昼拉长，湿热、梅雨和水汽让季节变得丰沛而明亮。",
    motif: "waterFlowers",
    gradient: ["#102735", "#2d6467", "#111518"],
    accent: "#73d1c9",
    secondary: "#d8b95b",
    tags: ["seasonal", "summer", "water", "light"]
  },
  {
    title: "High Summer Heatwave",
    zhMonth: "七月",
    mood: "盛夏热浪、莲叶水面和午后云雨",
    intro: "七月是暑气最明显的月份，热浪、云雨和漫长午后构成盛夏的高点。",
    motif: "sunRibbons",
    gradient: ["#221a20", "#68412a", "#121314"],
    accent: "#e89b42",
    secondary: "#75bdd0",
    tags: ["seasonal", "summer", "sun", "water"]
  },
  {
    title: "Late Summer Grain",
    zhMonth: "八月",
    mood: "暑气渐散、初秋谷色和夜里的新凉",
    intro: "八月仍有暑气，夜里开始出现新凉，金色谷物和低一点的天光让季节悄悄转向秋天。",
    motif: "grain",
    gradient: ["#1d211a", "#615237", "#121414"],
    accent: "#d6a95e",
    secondary: "#88a06a",
    tags: ["seasonal", "harvest", "autumn"]
  },
  {
    title: "Autumn Grain Balance",
    zhMonth: "九月",
    mood: "初秋谷物、露水和昼夜均衡",
    intro: "九月暑气退去，清晨露水增多，谷物、凉风和均衡的日光让秋意变得清楚。",
    motif: "grain",
    gradient: ["#201d1b", "#635136", "#121414"],
    accent: "#d8a95e",
    secondary: "#8fa36b",
    tags: ["seasonal", "harvest", "autumn"]
  },
  {
    title: "Cold Dew Skyline",
    zhMonth: "十月",
    mood: "深秋冷露、霜色边缘和更清澈的夜空",
    intro: "十月进入深秋，凉意更明显，天空清透，草木开始收束，夜色也更有轮廓。",
    motif: "aurora",
    gradient: ["#111c2b", "#30445a", "#101316"],
    accent: "#91bfe6",
    secondary: "#c5b06f",
    tags: ["seasonal", "autumn", "sky", "light"]
  },
  {
    title: "First Winter Window",
    zhMonth: "十一月",
    mood: "初冬窗光、浅寒空气和安静的蓝灰色",
    intro: "十一月寒意逐渐稳定，窗光、浅冷空气和蓝灰色的傍晚让日历进入更安静的初冬。",
    motif: "candle",
    gradient: ["#101b2b", "#253c50", "#101214"],
    accent: "#84bde6",
    secondary: "#d2d8e6",
    tags: ["seasonal", "winter", "light"]
  },
  {
    title: "Winter Solstice Glow",
    zhMonth: "十二月",
    mood: "冬光、雪意和长夜里慢慢回升的金色",
    intro: "十二月接近一年中黑夜最长的时段，雪意、冬光和慢慢回升的金色让寒冷不至于沉闷。",
    motif: "snow",
    gradient: ["#11182a", "#273154", "#101214"],
    accent: "#9dbaf0",
    secondary: "#d6c071",
    tags: ["seasonal", "winter", "light"]
  }
];

const MONTH_MOTIF_ROTATION = [
  ["snow", "candle", "moonOrbit", "teaSteam", "starfield", "aurora", "paperCut", "lanterns"],
  ["springBuds", "rainGarden", "paperKites", "petals", "waterFlowers", "moonOrbit", "teaSteam", "wovenPattern"],
  ["springBuds", "petals", "paperKites", "rainGarden", "waterFlowers", "wovenPattern", "moonOrbit", "lanterns"],
  ["rainGarden", "waterFlowers", "springBuds", "wovenPattern", "petals", "paperKites", "moonOrbit", "teaSteam"],
  ["grain", "harvestSheaves", "sunRibbons", "paperKites", "waterFlowers", "wovenPattern", "lanterns", "springBuds"],
  ["waterFlowers", "rainGarden", "sunRibbons", "moonOrbit", "paperKites", "lanterns", "wovenPattern", "starfield"],
  ["sunRibbons", "waterFlowers", "paperKites", "lanterns", "rainGarden", "starfield", "moonOrbit", "wovenPattern"],
  ["grain", "harvestSheaves", "moonOrbit", "wovenPattern", "sunRibbons", "lanterns", "paperKites", "teaSteam"],
  ["harvestSheaves", "grain", "moonOrbit", "teaSteam", "aurora", "wovenPattern", "paperKites", "lanterns"],
  ["aurora", "paperCut", "wovenPattern", "lanterns", "candle", "starfield", "moonOrbit", "harvestSheaves"],
  ["candle", "teaSteam", "wovenPattern", "starfield", "aurora", "snow", "moonOrbit", "lanterns"],
  ["snow", "lanterns", "candle", "moonOrbit", "starfield", "teaSteam", "aurora", "paperCut"]
];

const SEASONAL_MOTIF_COPY = {
  snow: {
    titles: ["雪光", "霜窗", "冷白"],
    descriptions: ["清冷的雪意和低色温光线让这一天更安静。", "像窗边凝住的寒光，适合留一点留白。", "冷白色的空气把季节压低，也让微光更清楚。"]
  },
  candle: {
    titles: ["窗灯", "暖烛", "夜灯"],
    descriptions: ["一点暖光把冷空气收拢起来，让日历显得更向内。", "烛光感让这一天不只是寒冷，也有安定的室内气息。", "夜灯和暗色背景给桌面留出更清楚的阅读空间。"]
  },
  moonOrbit: {
    titles: ["月轨", "夜潮", "微月"],
    descriptions: ["月相般的轨迹给潮湿或清冷的日子留出缓慢节奏。", "夜色和潮气叠在一起，画面更像一个安静的天象切片。", "微光绕开正中央，让日历主体保持干净。"]
  },
  teaSteam: {
    titles: ["茶汽", "暖雾", "杯影"],
    descriptions: ["蒸汽一样的线条让季节有一点日常的温度。", "暖雾散开，给冷色背景添一点柔和的生活感。", "杯影和细线让画面更安静，不去抢日历主体。"]
  },
  springBuds: {
    titles: ["新芽", "枝信", "青芽"],
    descriptions: ["细小的新芽让季节显得轻一点，像刚展开的日历页。", "枝条和浅绿把空气拉开，保留春天刚出现的弹性。", "青色的小形状让画面更有生长感。"]
  },
  rainGarden: {
    titles: ["雨庭", "雨幕", "湿光"],
    descriptions: ["雨线和庭院感让这一天带着湿润、清亮的层次。", "细雨像一层轻幕，压低对比度，也让桌面更耐看。", "湿光铺在背景上，画面更丰沛但不过分热闹。"]
  },
  paperKites: {
    titles: ["纸鸢", "风线", "晴风"],
    descriptions: ["纸鸢和风线让画面有向上的轻快感。", "细线穿过边角，像风把日历轻轻提起来。", "晴风主题给普通的一天一点明亮的动势。"]
  },
  petals: {
    titles: ["花影", "花信", "柔瓣"],
    descriptions: ["花瓣形状提供柔和的节奏，不让画面显得单调。", "花信感更轻，适合普通日子里的小变化。", "柔瓣装饰把色彩压得更细，也更像插画。"]
  },
  waterFlowers: {
    titles: ["水花", "水纹", "潮色"],
    descriptions: ["水面花影让湿润的季节感更具体。", "水纹把背景分成更细的层次，避免大面积色块重复。", "潮色在边缘铺开，让这一天有一点清凉的波动。"]
  },
  wovenPattern: {
    titles: ["织纹", "经纬", "布纹"],
    descriptions: ["织纹让普通日子多一点手作质感。", "经纬线条给画面秩序感，也让背景更耐看。", "布纹感比纯装饰更克制，适合长期使用。"]
  },
  grain: {
    titles: ["麦色", "谷光", "穗影"],
    descriptions: ["谷物色调让画面更温暖，也更接近季节里的土地感。", "谷光带来一点收获感，但不把主题说成具体节日。", "穗影让边角有节奏，中心仍保持清楚。"]
  },
  harvestSheaves: {
    titles: ["麦束", "谷束", "金穗"],
    descriptions: ["成束的谷物形状让日子更有插画感。", "谷束比单纯色块更有层次，也减少重复。", "金穗带来温暖的边缘装饰，不影响文字阅读。"]
  },
  sunRibbons: {
    titles: ["长昼", "日带", "晴弧"],
    descriptions: ["长昼感用细亮色带表现，明亮但不刺眼。", "日带从边缘穿过，让普通日子也有一点节庆气息。", "晴弧让画面更开阔，像日光划过背景。"]
  },
  lanterns: {
    titles: ["灯影", "小灯", "光串"],
    descriptions: ["小灯串给普通日子一点轻微的庆祝感。", "灯影悬在边缘，既有氛围，也不会抢掉日历。", "光串让背景更有节奏，适合夜色或暖色主题。"]
  },
  aurora: {
    titles: ["天光", "流光", "山色"],
    descriptions: ["流动天光让背景更有纵深。", "柔和的光带给冷色背景增加变化。", "山色和天光让画面更开阔，不像固定模板。"]
  },
  paperCut: {
    titles: ["剪影", "纸纹", "红金"],
    descriptions: ["剪纸式几何让画面更像节日插画，但不绑定具体节日。", "纸纹给边角增加手工质感。", "红金元素提供一点仪式感，同时保持背景克制。"]
  },
  starfield: {
    titles: ["星图", "夜星", "星线"],
    descriptions: ["星图让普通夜色更有空间感。", "夜星细碎分布，给背景一点安静的闪动。", "星线把画面连起来，但不制造视觉噪音。"]
  }
};

function createTheme({ title, caption, motif, gradient, accent, secondary, priority = 50, description, tags = [], source = null }) {
  const theme = {
    title,
    caption,
    description: description || inferThemeDescription(title, caption),
    motif,
    tags: Array.from(new Set([...(MOTIF_TAGS[motif] || []), ...inferThemeTags(title, caption), ...tags])),
    gradient,
    accent,
    secondary,
    priority,
    source
  };
  return applyCulturalPalette(theme);
}

function applyCulturalPalette(theme) {
  const text = `${theme.title} ${theme.caption}`.toLowerCase();
  const countryPalette = theme.source?.countryCode ? CULTURAL_PALETTES[theme.source.countryCode] : null;
  const occasionPalette = OCCASION_PALETTES.find(([pattern]) => pattern.test(text))?.[1];
  const palette = occasionPalette || countryPalette;
  if (!palette) return theme;

  return {
    ...theme,
    gradient: palette.gradient,
    accent: palette.accent,
    secondary: palette.secondary,
    tags: Array.from(new Set([...theme.tags, ...(palette.tags || [])]))
  };
}

function applyPaletteAtmosphere(theme, date, index) {
  const tint = PALETTE_ATMOSPHERES[(dayOfYearForTheme(date) + themeVariant(theme, PALETTE_ATMOSPHERES.length) + index * 7) % PALETTE_ATMOSPHERES.length];
  const warmTint = PALETTE_ATMOSPHERES[(dayOfYearForTheme(date) * 3 + themeVariant(theme, PALETTE_ATMOSPHERES.length, 4)) % PALETTE_ATMOSPHERES.length];
  const culturalWeight = theme.source?.countryCode || /christmas|halloween|valentine|thanksgiving/i.test(theme.title) ? 0.12 : 0.22;
  const accentWeight = theme.source?.countryCode ? 0.1 : 0.18;

  return {
    ...theme,
    gradient: [
      mixHex(theme.gradient[0], tint, culturalWeight),
      mixHex(mixHex(theme.gradient[1], tint, culturalWeight * 0.8), theme.accent, 0.08),
      mixHex(theme.gradient[2], warmTint, culturalWeight * 0.55)
    ],
    accent: mixHex(theme.accent, tint, accentWeight),
    secondary: mixHex(theme.secondary, warmTint, accentWeight * 0.85)
  };
}

function inferThemeDescription(title, caption) {
  if (DAY_INTROS[title]) return DAY_INTROS[title];

  const phrase = caption.includes("·") ? caption.split("·").slice(1).join("·").trim() : caption;
  if (/Independence Day/i.test(title)) {
    return `${title.replace(" Independence Day", "")}的独立纪念日，${phrase}。`;
  }
  if (/National Day/i.test(title)) {
    return `${title.replace(" National Day", "")}的国家纪念日，${phrase}。`;
  }
  if (/Foundation Day/i.test(title)) {
    return `${title.replace(" Foundation Day", "")}的建国纪念日，${phrase}。`;
  }
  if (/Constitution Day/i.test(title)) {
    return `${title.replace(" Constitution Day", "")}的宪法纪念日，${phrase}。`;
  }
  if (/Republic Day/i.test(title)) {
    return `${title.replace(" Republic Day", "")}的共和国纪念日，${phrase}。`;
  }
  if (/Civic Day/i.test(title)) {
    return `${title.replace(" Civic Day", "")}的公民纪念日，${phrase}。`;
  }
  if (/Day$/i.test(title)) {
    return `${title}是具有地方或国家意义的纪念日，${phrase}。`;
  }

  return `${phrase}。`;
}

function inferThemeTags(title, caption) {
  const text = `${title} ${caption}`.toLowerCase();
  const tags = [];
  if (/ocean|sea|island|coast|pacific|atlantic|indian|maldives|seychelles|tonga|tuvalu|vanuatu|palau|fiji|samoa|kiribati|barbados|cape verde/.test(text)) tags.push("water", "island");
  if (/national|independence|republic|constitution|foundation|unity|workers|emancipation|bastille|swiss|mexico|germany/.test(text)) tags.push("civic");
  if (/christmas|winter|snow|lucia|estonia|norway|iceland|北方|冬|雪/.test(text)) tags.push("winter", "light");
  if (/earth|spring|flower|petal|rose|bud|clover|grain|harvest|谷|雨|春|麦|花|草|叶/.test(text)) tags.push("botanical");
  if (/star|firework|night|tanabata|eve|星|烟火|夜|光/.test(text)) tags.push("sky", "light");
  if (/mountain|alps|andes|pyrenees|himalaya|bhutan|nepal|andorra|san marino|山/.test(text)) tags.push("mountain");
  if (/memorial|remembrance|saints|muertos|candle|记忆|纪念|烛/.test(text)) tags.push("memorial");
  if (/halloween|children|songkran|thanksgiving|valentine|day|festival|庆典|节日|祝福/.test(text)) tags.push("celebration");
  return tags;
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

function fallbackTheme(date, motif = seasonalFallbackMotifs(date)[0], priorityOffset = 0) {
  const mood = MONTH_MOODS[date.getMonth()];
  const copy = seasonalFallbackCopy(date, mood, motif, priorityOffset);

  return createTheme({
    title: copy.title,
    caption: copy.caption,
    description: copy.description,
    motif,
    gradient: mood.gradient,
    accent: mood.accent,
    secondary: mood.secondary,
    priority: 30 - priorityOffset,
    tags: [
      ...mood.tags,
      "month-mood"
    ]
  });
}

function fallbackThemes(date) {
  return seasonalFallbackMotifs(date).map((motif, index) => fallbackTheme(date, motif, index * 0.25));
}

function seasonalFallbackCopy(date, mood, motif, priorityOffset) {
  const motifCopy = SEASONAL_MOTIF_COPY[motif] || {
    titles: [mood.title],
    descriptions: [mood.intro]
  };
  const variantIndex = (date.getDate() + Math.round(priorityOffset * 4)) % motifCopy.titles.length;
  const title = `${mood.zhMonth}${motifCopy.titles[variantIndex]}`;
  const description = `${mood.intro}${motifCopy.descriptions[variantIndex]}`;
  return {
    title,
    caption: `${mood.zhMonth} · ${mood.mood}`,
    description
  };
}

function seasonalFallbackMotifs(date) {
  const motifs = MONTH_MOTIF_ROTATION[date.getMonth()];
  const start = (date.getDate() - 1) % motifs.length;
  return [...motifs.slice(start), ...motifs.slice(0, start)];
}

function dateKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function cachedHolidayThemes(date) {
  const cache = window.YearCalendarHolidayCache;
  const rawThemes = cache?.days?.[dateKey(date)];
  if (!Array.isArray(rawThemes)) return [];

  return rawThemes.map((theme) => createTheme({
    title: theme.title,
    caption: theme.caption,
    description: displayDescriptionForSource(theme),
    motif: theme.motif,
    gradient: theme.gradient,
    accent: theme.accent,
    secondary: theme.secondary,
    priority: theme.priority,
    tags: theme.tags || [],
    source: theme.source || null
  }));
}

function displayDescriptionForSource(theme) {
  if (!theme.source) return theme.description;
  if (theme.source.provider === "Curated Cultural Observances") return theme.description;

  return holidayIntroduction(theme.title, theme.source, theme.description);
}

function holidayIntroduction(title, source, fallback) {
  const intro = holidayIntroFor(title, source);
  if (intro) return intro;

  const text = `${title} ${source?.localName || ""}`.toLowerCase();
  const country = countryNameZh(source);
  const localName = source?.localName && source.localName !== title ? source.localName : "";

  if (/king'?s birthday|queen'?s birthday/.test(text)) {
    if (source?.countryCode === "AU") {
      return "这是澳大利亚庆祝英国君主生日的假日，多数地区会把它安排成六月长周末，人们常借此休息、出行或参加社区活动。";
    }
    return "这是英联邦传统中的君主生日假日，用来象征君主制与国家礼仪，也常成为当地的长周末。";
  }
  if (/new year/.test(text)) return "新年假日标志公历年份开始，人们常用倒数、烟火、聚会和休息迎接新的日历周期。";
  if (/christmas/.test(text)) return "圣诞节源自基督教传统，后来也成为许多地方的冬日团聚节日，常见象征包括灯饰、松枝、礼物和家庭餐桌。";
  if (/boxing day/.test(text)) return "节礼日延续自英联邦传统，通常在圣诞节后一天，人们会继续休假、探亲、购物或观看体育赛事。";
  if (/good friday/.test(text)) return "耶稣受难日纪念基督教传统中耶稣受难的日子，许多地方会以静默礼拜和复活节前的休假来标记。";
  if (/easter/.test(text)) return "复活节源自基督教传统，纪念复活与新生，许多地方也有彩蛋、家庭聚会和春日休假的习俗。";
  if (/sacred heart/.test(text)) return "圣心节源自天主教传统，纪念耶稣圣心，许多地区会以弥撒、游行或地方守护庆典标记。";
  if (/corpus christi/.test(text)) return "基督圣体圣血节源自天主教传统，常以圣体游行、花毯和城镇仪式表达信仰共同体。";
  if (/midsummer|st john|st\. john|john's day/.test(text)) return "仲夏相关节日常见于欧洲传统，篝火、夏夜聚会和地方仪式是重要习俗。";
  if (/st\.?\s|saint|sankt|san |santa |santo /.test(text)) return saintDayIntroduction(title, country);
  if (/carnival|karneval|mardi gras/.test(text)) return "狂欢节通常出现在大斋期前后，人们以游行、面具、音乐和街头庆祝暂时打破日常秩序。";
  if (/municipal holiday|city day|town day|communal holiday|community holiday/.test(text)) return `${country}的地方假日，通常由城市或市镇纪念守护圣人、建城传统或本地共同体历史。`;
  if (/independence day/.test(text)) return `${country}的独立纪念日，通常纪念国家取得主权或脱离殖民统治的历史时刻，常伴随旗帜、仪式和公共庆祝。`;
  if (/national day/.test(text)) return `${country}的国家纪念日，通常用来纪念国家成立、宪法传统或重要历史节点，常有官方仪式和公共庆典。`;
  if (/republic day/.test(text)) return `${country}的共和国纪念日，通常纪念共和国体制确立或重要宪政转折，是国家身份的一部分。`;
  if (/constitution day/.test(text)) return `${country}的宪法纪念日，纪念宪法秩序或现代国家制度的重要节点。`;
  if (/foundation day/.test(text)) return `${country}的建国或奠基纪念日，通常回望国家、城市或共同体形成的历史。`;
  if (/labou?r day|workers'? day|may day/.test(text)) return "劳动节纪念劳动者权益与劳动生活，许多地方会在这一天休假，也可能举行游行、集会或公共活动。";
  if (/thanksgiving/.test(text)) return "感恩节以感谢、收获和团聚为核心，常见习俗包括家庭餐桌、秋日食物和与亲友共度假日。";
  if (/remembrance|memorial/.test(text)) return "这是带有追思性质的纪念日，常用静默、花束、仪式或公共纪念来记住历史与逝去的人。";
  if (/all saints/.test(text)) return "诸圣节源自基督教传统，用来纪念圣徒，也常与献花、点烛和追思逝者联系在一起。";
  if (/bank holiday/.test(text)) return `${country}的银行假日通常是公共休息日，人们会利用这一天旅行、聚会或处理家庭与社区活动。`;
  if (/^day of /i.test(title)) {
    const place = title.replace(/^Day of /i, "");
    return `${place}日通常纪念地方身份、自治传统或区域历史，是当地公共生活与社区记忆的一部分。`;
  }
  if (localName) return `${country}以「${localName}」为名标记这一天，名称本身往往保留了地方语言、宗教传统或社区记忆。`;
  if (fallback && !/的.+节日/.test(fallback)) return fallback;
  return genericHolidayIntroduction(title, source, country);
}

function saintDayIntroduction(title, country) {
  const saint = title.replace(/^(st\.?|saint|sankt|san|santa|santo)\s+/i, "").trim();
  if (saint) return `${title}多与基督教圣人纪念和地方守护传统有关，在${country}可能以礼拜、集市、游行或社区聚会延续。`;
  return `${country}的圣人纪念日多与地方守护传统有关，常见形式包括礼拜、游行、集市和社区聚会。`;
}

function genericHolidayIntroduction(title, source, country) {
  const typeLabel = holidayTypeLabelFromSource(source);
  if (source?.nationwide === false) return `${title}是${country}的地方性${typeLabel}，多半与特定城市、地区守护传统或地方历史记忆有关。`;
  if (/公众节日|银行假日|Public|Bank/.test((source?.typeLabels || []).join(" "))) return `${title}是${country}的${typeLabel}，这一天会进入公共日历，常伴随休息、仪式或地方社区活动。`;
  return `${title}在${country}日历中标记一段地方记忆、宗教传统或公共生活节点。`;
}

function holidayIntroFor(title, source = {}) {
  const content = holidayContentFor(title, source);
  if (content?.description) return content.description;

  const intros = globalThis.YearCalendarHolidayIntros || {};
  const keys = holidayLookupKeys(title, source);

  for (const key of keys) {
    const intro = intros[key] || introByNormalizedKey(intros, key);
    if (intro) return intro;
  }
  return "";
}

function holidayContentFor(title, source = {}) {
  const content = globalThis.YearCalendarHolidayContent;
  const entries = Array.isArray(content?.entries) ? content.entries : [];
  if (!entries.length) return null;

  const keys = holidayLookupKeys(title, source);
  const countryScopedKeys = keys.filter(isCountryScopedHolidayKey);
  const countryLookup = new Set(countryScopedKeys.map(normalizeIntroKey));
  const countryMatch = entries.find((entry) => holidayContentKeys(entry).some((key) => countryLookup.has(normalizeIntroKey(key))));
  if (countryMatch) return countryMatch;

  const genericLookup = new Set(keys.filter((key) => !isCountryScopedHolidayKey(key)).map(normalizeIntroKey));
  return entries.find((entry) => {
    const entryKeys = holidayContentKeys(entry);
    if (entryKeys.some(isCountryScopedHolidayKey)) return false;
    return entryKeys.some((key) => genericLookup.has(normalizeIntroKey(key)));
  }) || null;
}

function holidayContentKeys(entry) {
  return Array.isArray(entry.keys) ? entry.keys.filter(Boolean) : [];
}

function holidayLookupKeys(title, source = {}) {
  return [
    source?.countryCode ? `${source.countryCode}|${title}` : "",
    source?.countryCode && source?.localName ? `${source.countryCode}|${source.localName}` : "",
    title,
    source?.localName || ""
  ].filter(Boolean);
}

function isCountryScopedHolidayKey(key) {
  return /^[A-Z]{2}\|/.test(key);
}

function introByNormalizedKey(intros, key) {
  const normalizedKey = normalizeIntroKey(key);
  const match = Object.entries(intros).find(([introKey]) => normalizeIntroKey(introKey) === normalizedKey);
  return match?.[1] || "";
}

function normalizeIntroKey(value) {
  return value.toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();
}

function countryNameZh(source = {}) {
  if (source.zhName) return source.zhName;
  if (COUNTRY_NAMES_ZH[source.countryCode]) return COUNTRY_NAMES_ZH[source.countryCode];
  try {
    const regionName = source.countryCode ? REGION_NAMES_ZH?.of(source.countryCode) : "";
    if (regionName && regionName !== source.countryCode) return regionName;
  } catch {
    // Some upstream country codes are not valid ISO regions.
  }
  return "当地";
}

function holidayTypeLabelFromSource(source) {
  if (Array.isArray(source?.typeLabels) && source.typeLabels[0]) return source.typeLabels[0];
  return primaryHolidayTypeLabel(source?.types);
}

function primaryHolidayTypeLabel(types = []) {
  const type = Array.isArray(types) ? types.find((value) => HOLIDAY_TYPE_LABELS[value]) : null;
  return type ? HOLIDAY_TYPE_LABELS[type] : "节日";
}

function diversityPenalty(theme, avoidMotifs = []) {
  if (!theme.tags.includes("month-mood")) return 0;
  const recentIndex = avoidMotifs.lastIndexOf(theme.motif);
  if (recentIndex === -1) return 0;
  const recency = avoidMotifs.length - recentIndex;
  if (recency <= 7) return 40 - recency * 3;
  return Math.max(5, 16 - (recency - 7) * 2);
}

function rankDailyThemes(date, options = {}) {
  const md = monthDay(date);
  const candidates = [];
  const cachedThemes = cachedHolidayThemes(date);
  const avoidMotifs = Array.isArray(options.avoidMotifs) ? options.avoidMotifs : [];
  candidates.push(...cachedThemes);

  if (cachedThemes.length === 0) {
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
  }

  if (candidates.length === 0) {
    candidates.push(...fallbackThemes(date));
  }

  const seed = seedForDate(date);
  return candidates
    .map((theme, index) => {
      const variedTheme = applyPaletteAtmosphere(theme, date, index);
      return {
        theme: variedTheme,
        score: theme.priority + seededJitter(seed, index) * 6 - diversityPenalty(theme, avoidMotifs),
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

function drawDailyThemeBackground(ctx, theme, width, height) {
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, theme.gradient[0]);
  bg.addColorStop(0.5, theme.gradient[1]);
  bg.addColorStop(1, theme.gradient[2]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  drawAtmosphericColorField(ctx, theme, width, height);

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

function drawAtmosphericColorField(ctx, theme, width, height) {
  const variant = themeVariant(theme, 7, 8);

  const topWash = ctx.createRadialGradient(width * 0.22, height * 0.08, 0, width * 0.22, height * 0.08, height * 0.58);
  topWash.addColorStop(0, hexToRgba(theme.accent, 0.22));
  topWash.addColorStop(0.52, hexToRgba(theme.gradient[1], 0.08));
  topWash.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = topWash;
  ctx.fillRect(0, 0, width, height);

  const lowerWash = ctx.createRadialGradient(width * 0.78, height * 0.88, 0, width * 0.78, height * 0.88, height * 0.62);
  lowerWash.addColorStop(0, hexToRgba(theme.secondary, 0.18));
  lowerWash.addColorStop(0.58, hexToRgba(theme.gradient[0], 0.07));
  lowerWash.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = lowerWash;
  ctx.fillRect(0, 0, width, height);

  for (let band = 0; band < 3; band++) {
    const y = 180 + band * 880 + variant * 18;
    const ribbon = ctx.createLinearGradient(0, y, width, y + 260);
    ribbon.addColorStop(0, "rgba(0,0,0,0)");
    ribbon.addColorStop(0.28, hexToRgba(band % 2 ? theme.secondary : theme.accent, 0.045));
    ribbon.addColorStop(0.5, hexToRgba(theme.gradient[1], 0.035));
    ribbon.addColorStop(0.72, hexToRgba(band % 2 ? theme.accent : theme.secondary, 0.045));
    ribbon.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = ribbon;
    ctx.save();
    ctx.translate(width / 2, y);
    ctx.rotate((-5 + band * 4 + variant) * Math.PI / 180);
    ctx.fillRect(-width, -90, width * 2, 260);
    ctx.restore();
  }

  const vignette = ctx.createLinearGradient(0, 0, 0, height);
  vignette.addColorStop(0, "rgba(0,0,0,0.18)");
  vignette.addColorStop(0.36, "rgba(0,0,0,0)");
  vignette.addColorStop(0.72, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(0,0,0,0.34)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
}

function drawThemeCaption(ctx, theme, x, y) {
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  const meta = themeMetaLine(theme);
  if (meta) {
    ctx.fillStyle = hexToRgba(theme.accent, 0.68);
    drawFittedText(ctx, meta, x, y - 58, 860, 18, 14);
    drawCaptionRule(ctx, theme, x, y - 42);
  }

  ctx.fillStyle = "rgba(242,242,246,0.86)";
  const title = themeDisplayTitle(theme);
  const titleSize = /^[\u4e00-\u9fff]{2,6}$/.test(title) ? 40 : 36;
  drawFittedText(ctx, title, x, y - 6, 980, titleSize, 25);

  ctx.fillStyle = "rgba(215,215,219,0.66)";
  drawFittedText(ctx, theme.description, x, y + 39, 1040, 23, 17);
  ctx.restore();
}

function themeMetaLine(theme) {
  if (theme.source?.countryName) {
    return `${countryNameZh(theme.source)} · ${holidayTypeLabelFromSource(theme.source)}`;
  }
  if (hasTag(theme, "seasonal")) return "季节气质";
  if (hasTag(theme, "civic")) return "公共节日";
  if (hasTag(theme, "celebration")) return "节庆日";
  return "";
}

function themeDisplayTitle(theme) {
  const content = holidayContentFor(theme.title, theme.source || {});

  if (theme.source?.countryCode === "CN") {
    const localName = theme.source.localName && theme.source.localName !== theme.title ? theme.source.localName : "";
    if (localName && /[\u4e00-\u9fff]/.test(localName) && !/[\u4e00-\u9fff]/.test(theme.title)) {
      return `${localName} · ${content?.title || theme.title}`;
    }
  }

  if (hasTag(theme, "month-mood")) return seasonalDisplayTitle(theme);
  if (content?.title) return content.title;
  return theme.title;
}

function seasonalDisplayTitle(theme) {
  const zhMonth = theme.caption?.split("·")[0]?.trim() || "";
  const month = ZH_MONTH_TO_EN[zhMonth] || "Seasonal";
  const suffix = theme.title.replace(zhMonth, "");
  const motifTitle = SEASONAL_TITLE_EN[suffix] || theme.title;
  return `${month} ${motifTitle}`;
}

function drawCaptionRule(ctx, theme, x, y) {
  strokePath(ctx, [[x - 265, y], [x - 46, y]], theme.secondary, 1.4, 0.15);
  strokePath(ctx, [[x + 46, y], [x + 265, y]], theme.secondary, 1.4, 0.15);
  drawDiamond(ctx, x, y, 6, theme.accent, 0.28);
  drawDiamond(ctx, x - 32, y, 4, theme.secondary, 0.18);
  drawDiamond(ctx, x + 32, y, 4, theme.secondary, 0.18);
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
    case "lanterns":
      drawLanterns(ctx, theme, width, height);
      break;
    case "paperKites":
      drawPaperKites(ctx, theme, width, height);
      break;
    case "wovenPattern":
      drawWovenPattern(ctx, theme, width, height);
      break;
    case "moonOrbit":
      drawMoonOrbit(ctx, theme, width, height);
      break;
    case "rainGarden":
      drawRainGarden(ctx, theme, width, height);
      break;
    case "harvestSheaves":
      drawHarvestSheaves(ctx, theme, width, height);
      break;
    case "paperCut":
      drawPaperCut(ctx, theme, width, height);
      break;
    case "teaSteam":
      drawTeaSteam(ctx, theme, width, height);
      break;
    default:
      drawAurora(ctx, theme, width, height);
  }
  drawCulturalIllustration(ctx, theme, width, height);
  drawSemanticOrnaments(ctx, theme, width, height);
}

function drawFittedText(ctx, text, x, y, maxWidth, startSize, minSize) {
  let size = startSize;
  do {
    ctx.font = `${size}px ${FONT_STACK}`;
    if (ctx.measureText(text).width <= maxWidth || size <= minSize) break;
    size -= 1;
  } while (size > minSize);
  ctx.fillText(text, x, y);
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16)
  ];
}

function rgbToHex([r, g, b]) {
  const channels = [r, g, b].map((value) => {
    const channel = Math.max(0, Math.min(255, Math.round(value)));
    return channel.toString(16).padStart(2, "0");
  });
  return `#${channels.join("")}`;
}

function mixHex(base, overlay, amount) {
  const a = hexToRgb(base);
  const b = hexToRgb(overlay);
  return rgbToHex(a.map((value, index) => value * (1 - amount) + b[index] * amount));
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

function drawSemanticOrnaments(ctx, theme, width, height) {
  const variant = themeVariant(theme, 9);
  drawMicroTexture(ctx, theme, width, height, variant);
  drawCornerAccents(ctx, theme, width, height, variant);

  if (hasTag(theme, "water")) drawWaveLattice(ctx, theme, width, height, variant);
  if (hasTag(theme, "botanical")) drawBotanicalVines(ctx, theme, width, height, variant);
  if (hasTag(theme, "celebration")) drawRibbonConfetti(ctx, theme, width, height, variant);
  if (hasTag(theme, "civic")) drawCivicRosettes(ctx, theme, width, height, variant);
  if (hasTag(theme, "sky")) drawConstellationVeil(ctx, theme, width, height, variant);
  if (hasTag(theme, "mountain")) drawContourLines(ctx, theme, width, height, variant);
  if (hasTag(theme, "winter")) drawFrostCrystals(ctx, theme, width, height, variant);
  if (hasTag(theme, "memorial")) drawQuietLightMarks(ctx, theme, width, height, variant);
  if (hasTag(theme, "island")) drawIslandFronds(ctx, theme, width, height, variant);
  if (hasTag(theme, "sun")) drawSolarHalos(ctx, theme, width, height, variant);
  if (hasTag(theme, "light")) drawSmallLanternGlow(ctx, theme, width, height, variant);
  drawSignatureOrnaments(ctx, theme, width, height, variant);
}

function hasTag(theme, tag) {
  return theme.tags && theme.tags.includes(tag);
}

function themeVariant(theme, modulo, salt = 0) {
  const text = `${theme.title}:${theme.motif}:${salt}`;
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return hash % modulo;
}

function drawMicroTexture(ctx, theme, width, height, variant) {
  for (let i = 0; i < 70; i++) {
    const x = 42 + ((i * 97 + variant * 53) % (width - 84));
    const y = 110 + ((i * 149 + variant * 71) % (height - 240));
    const color = i % 2 ? theme.accent : theme.secondary;
    dot(ctx, x, y, 1.4 + (i % 3) * 0.5, color, 0.025 + (i % 5) * 0.006);
  }
}

function drawCornerAccents(ctx, theme, width, height, variant) {
  const corners = [
    [86, 650],
    [width - 86, 650],
    [110, height - 620],
    [width - 110, height - 620]
  ];
  for (let i = 0; i < corners.length; i++) {
    const [x, y] = corners[i];
    const flip = x > width / 2 ? -1 : 1;
    for (let ring = 0; ring < 3; ring++) {
      strokePath(
        ctx,
        [[x + flip * ring * 11, y + ring * 18], [x + flip * (34 + ring * 13), y - 46 - ring * 22]],
        ring % 2 ? theme.secondary : theme.accent,
        2,
        0.09 + ring * 0.025
      );
    }
    if ((variant + i) % 2 === 0) drawDiamond(ctx, x + flip * 28, y + 72, 12 + (variant % 3) * 3, theme.secondary, 0.11);
    else drawTinyGlyphFlower(ctx, theme, x + flip * 24, y + 70, 18 + (variant % 2) * 4, 0.11);
  }
}

function drawWaveLattice(ctx, theme, width, height, variant) {
  for (const baseY of [150 + variant * 6, height - 180 - variant * 5]) {
    for (let row = 0; row < 4; row++) {
      const y = baseY + row * 30;
      strokePath(ctx, [[44, y], [240, y - 52, 390, y + 54, 575, y - 4], [770, y - 62, 946, y + 50, width - 44, y - 6]], row % 2 ? theme.secondary : theme.accent, 2, 0.08 + row * 0.012);
    }
  }
  for (let i = 0; i < 15; i++) {
    drawEllipse(ctx, 86 + ((i * 83 + variant * 41) % (width - 172)), 520 + ((i * 157) % 1540), 5 + (i % 3) * 2, 11 + (i % 4) * 2, i * 0.6, i % 2 ? theme.secondary : theme.accent, 0.07);
  }
}

function drawBotanicalVines(ctx, theme, width, height, variant) {
  for (const side of [-1, 1]) {
    const startX = side < 0 ? 58 : width - 58;
    for (let vine = 0; vine < 3; vine++) {
      const y = 815 + vine * 455 + variant * 9;
      strokePath(ctx, [[startX, y], [startX + side * 82, y - 70, startX + side * 150, y + 62, startX + side * 226, y - 12]], theme.accent, 2, 0.11 + vine * 0.016);
      for (let leaf = 0; leaf < 5; leaf++) {
        const lx = startX + side * (54 + leaf * 38);
        const ly = y - 38 + ((leaf + vine + variant) % 3) * 28;
        drawEllipse(ctx, lx, ly, 7, 18, side * (leaf % 2 ? 0.7 : -0.5), leaf % 2 ? theme.secondary : theme.accent, 0.1);
      }
    }
  }
}

function drawRibbonConfetti(ctx, theme, width, height, variant) {
  for (let i = 0; i < 34; i++) {
    const x = 58 + ((i * 137 + variant * 83) % (width - 116));
    const y = i % 2 ? 125 + ((i * 47) % 360) : height - 380 + ((i * 53) % 280);
    if (i % 3 === 0) {
      strokePath(ctx, [[x - 12, y], [x + 12, y - 10, x + 22, y + 11, x + 38, y]], i % 2 ? theme.secondary : theme.accent, 2, 0.11);
    } else if (i % 3 === 1) {
      drawDiamond(ctx, x, y, 7 + (i % 4), i % 2 ? theme.accent : theme.secondary, 0.12);
    } else {
      flag(ctx, x, y, i % 2 ? theme.secondary : theme.accent);
    }
  }
}

function drawCivicRosettes(ctx, theme, width, height, variant) {
  const points = [
    [150, 520],
    [width - 150, 520],
    [180, height - 485],
    [width - 180, height - 485]
  ];
  for (let p = 0; p < points.length; p++) {
    const [cx, cy] = points[p];
    const spokes = 14 + ((variant + p) % 5);
    for (let i = 0; i < spokes; i++) {
      const angle = (Math.PI * 2 * i) / spokes;
      const r1 = 16;
      const r2 = 52 + (i % 3) * 7;
      strokePath(ctx, [[cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1], [cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2]], i % 2 ? theme.secondary : theme.accent, 2, 0.075);
    }
    dot(ctx, cx, cy, 10, p % 2 ? theme.secondary : theme.accent, 0.1);
  }
}

function drawConstellationVeil(ctx, theme, width, height, variant) {
  const stars = [];
  for (let i = 0; i < 24; i++) {
    stars.push([
      70 + ((i * 151 + variant * 67) % (width - 140)),
      105 + ((i * 79 + variant * 29) % 360)
    ]);
  }
  for (let i = 0; i < stars.length; i++) {
    const [x, y] = stars[i];
    if (i % 5 === 0) drawStar(ctx, x, y, 7, 3, theme.secondary, 0.12);
    else dot(ctx, x, y, 2.5 + (i % 3), theme.accent, 0.1);
    if (i > 0 && i % 4 !== 0) {
      const [px, py] = stars[i - 1];
      if (Math.abs(x - px) < 260) strokePath(ctx, [[px, py], [x, y]], theme.secondary, 1, 0.045);
    }
  }
}

function drawContourLines(ctx, theme, width, height, variant) {
  for (let row = 0; row < 5; row++) {
    const y = height - 300 + row * 28;
    strokePath(ctx, [[70, y], [240, y - 44 - row * 8, 420, y + 36, 590, y - 10], [790, y - 58, 970, y + 40, width - 70, y - 18]], row % 2 ? theme.secondary : theme.accent, 2, 0.05 + row * 0.011);
  }
  for (let i = 0; i < 7; i++) {
    const x = 130 + ((i * 149 + variant * 47) % (width - 260));
    flag(ctx, x, height - 410 + (i % 3) * 22, i % 2 ? theme.accent : theme.secondary);
  }
}

function drawFrostCrystals(ctx, theme, width, height, variant) {
  for (let i = 0; i < 18; i++) {
    const cx = 80 + ((i * 173 + variant * 59) % (width - 160));
    const cy = i % 2 ? 135 + ((i * 71) % 420) : height - 515 + ((i * 61) % 350);
    const size = 10 + (i % 4) * 3;
    for (let arm = 0; arm < 6; arm++) {
      const angle = (Math.PI * 2 * arm) / 6;
      strokePath(ctx, [[cx, cy], [cx + Math.cos(angle) * size, cy + Math.sin(angle) * size]], "#f3f7ff", 1.4, 0.08);
    }
  }
}

function drawQuietLightMarks(ctx, theme, width, height, variant) {
  for (const side of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const x = side < 0 ? 78 + i * 72 : width - 78 - i * 72;
      const y = height - 570 + ((i + variant) % 3) * 45;
      ctx.fillStyle = hexToRgba(theme.secondary, 0.08);
      roundRect(ctx, x - 8, y - 18, 16, 42, 4);
      ctx.fill();
      drawEllipse(ctx, x, y - 29, 5, 12, 0, theme.accent, 0.13);
    }
  }
}

function drawIslandFronds(ctx, theme, width, height, variant) {
  for (const [baseX, baseY, side] of [[92, height - 260, 1], [width - 92, height - 260, -1], [76, 430, 1], [width - 76, 430, -1]]) {
    for (let i = 0; i < 5; i++) {
      const angle = side * (-0.8 + i * 0.22);
      const endX = baseX + Math.cos(angle) * (76 + i * 10) * side;
      const endY = baseY - Math.sin(angle) * (40 + i * 6) - variant * 2;
      strokePath(ctx, [[baseX, baseY], [endX, endY]], i % 2 ? theme.secondary : theme.accent, 2, 0.075);
      for (let leaf = 0; leaf < 3; leaf++) {
        drawEllipse(ctx, baseX + side * (24 + leaf * 18 + i * 4), baseY - 8 - leaf * 12 - i * 3, 5, 15, angle, theme.accent, 0.07);
      }
    }
  }
}

function drawSolarHalos(ctx, theme, width, height, variant) {
  for (const [cx, cy] of [[width / 2, 285], [width / 2, height - 230]]) {
    for (let ring = 0; ring < 3; ring++) {
      ctx.save();
      ctx.strokeStyle = hexToRgba(ring % 2 ? theme.secondary : theme.accent, 0.055 + ring * 0.018);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 74 + ring * 42 + variant * 2, Math.PI * 0.08, Math.PI * 0.92);
      ctx.stroke();
      ctx.restore();
    }
  }
}

function drawSmallLanternGlow(ctx, theme, width, height, variant) {
  for (let i = 0; i < 8; i++) {
    const x = 165 + ((i * 181 + variant * 37) % (width - 330));
    const y = i % 2 ? 520 + ((i * 151) % 620) : height - 690 + ((i * 127) % 430);
    drawSoftGlow(ctx, x, y, 42 + (i % 3) * 12, i % 2 ? theme.secondary : theme.accent, 0.035);
    drawEllipse(ctx, x, y, 5, 14, 0, i % 2 ? theme.secondary : theme.accent, 0.08);
  }
}

function drawCulturalIllustration(ctx, theme, width, height) {
  const code = theme.source?.countryCode;
  const text = `${theme.title} ${theme.caption}`.toLowerCase();

  if (code === "CN") {
    drawChinaRedGoldEmblem(ctx, theme, width, height);
    return;
  }
  if (code === "JP") {
    drawRisingSunSeal(ctx, theme, width, height);
    return;
  }
  if (/christmas/i.test(text)) {
    drawEvergreenIllustration(ctx, theme, width, height);
    return;
  }
  if (/halloween/i.test(text)) {
    drawNightFestivalIllustration(ctx, theme, width, height);
    return;
  }
  if (hasTag(theme, "civic")) {
    drawFlagColorSweep(ctx, theme, width, height);
    return;
  }
  if (hasTag(theme, "water") || hasTag(theme, "island")) {
    drawCoastalSeal(ctx, theme, width, height);
  }
}

function drawChinaRedGoldEmblem(ctx, theme, width, height) {
  for (const [cx, cy, scale] of [[width / 2, 210, 1], [width / 2, height - 220, 0.92]]) {
    drawSoftGlow(ctx, cx, cy, 150 * scale, theme.accent, 0.055);
    for (let ring = 0; ring < 4; ring++) {
      ctx.save();
      ctx.strokeStyle = hexToRgba(theme.accent, 0.075 - ring * 0.008);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, (48 + ring * 30) * scale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    drawStar(ctx, cx, cy, 22 * scale, 9 * scale, theme.accent, 0.22);
    for (let i = 0; i < 4; i++) {
      const angle = -0.9 + i * 0.28;
      drawStar(ctx, cx + Math.cos(angle) * 62 * scale, cy + Math.sin(angle) * 50 * scale, 9 * scale, 4 * scale, theme.accent, 0.16);
    }
  }
  for (const y of [138, height - 130]) {
    strokePath(ctx, [[70, y], [260, y - 38, 420, y + 34, 610, y - 10], [805, y - 50, 980, y + 30, width - 70, y - 6]], theme.secondary, 5, 0.14);
    strokePath(ctx, [[92, y + 28], [280, y - 6, 450, y + 56, 628, y + 20], [830, y - 12, 996, y + 52, width - 92, y + 18]], theme.accent, 3, 0.12);
  }
}

function drawRisingSunSeal(ctx, theme, width, height) {
  for (const [cx, cy] of [[width / 2, 230], [width / 2, height - 235]]) {
    drawSoftGlow(ctx, cx, cy, 128, theme.secondary, 0.04);
    drawEllipse(ctx, cx, cy, 54, 54, 0, theme.secondary, 0.13);
    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 * i) / 18;
      strokePath(ctx, [[cx + Math.cos(angle) * 72, cy + Math.sin(angle) * 72], [cx + Math.cos(angle) * 126, cy + Math.sin(angle) * 126]], theme.accent, 2, 0.055);
    }
  }
}

function drawFlagColorSweep(ctx, theme, width, height) {
  const bands = [
    [theme.accent, 0],
    ["#f3f3f5", 1],
    [theme.secondary, 2]
  ];
  for (const [color, index] of bands) {
    const y = 135 + index * 38;
    strokePath(ctx, [[70, y], [260, y - 54, 440, y + 48, 620, y - 4], [830, y - 58, 990, y + 40, width - 70, y - 8]], color, 4, index === 1 ? 0.08 : 0.14);
    const bottomY = height - 150 - index * 36;
    strokePath(ctx, [[80, bottomY], [285, bottomY - 48, 460, bottomY + 44, 646, bottomY - 2], [830, bottomY - 54, 990, bottomY + 38, width - 80, bottomY - 6]], color, 4, index === 1 ? 0.07 : 0.12);
  }
}

function drawEvergreenIllustration(ctx, theme, width, height) {
  for (const [baseX, baseY, side] of [[85, 380, 1], [width - 85, 380, -1], [95, height - 405, 1], [width - 95, height - 405, -1]]) {
    for (let i = 0; i < 7; i++) {
      const x = baseX + side * (i * 26);
      const y = baseY + i * 8;
      strokePath(ctx, [[x, y], [x + side * 82, y - 42]], i % 2 ? theme.secondary : theme.accent, 2, 0.09);
      drawEllipse(ctx, x + side * 38, y - 18, 5, 18, side * 0.72, theme.secondary, 0.075);
    }
  }
}

function drawNightFestivalIllustration(ctx, theme, width, height) {
  drawSoftGlow(ctx, width / 2, 235, 130, theme.accent, 0.04);
  for (let i = 0; i < 12; i++) {
    const x = 90 + ((i * 113) % (width - 180));
    const y = i % 2 ? 335 + (i % 4) * 32 : height - 360 + (i % 3) * 28;
    drawEllipse(ctx, x, y, 11 + (i % 3) * 4, 17 + (i % 4) * 4, 0, theme.accent, 0.08);
    strokePath(ctx, [[x, y - 18], [x + 8, y - 34]], theme.secondary, 2, 0.08);
  }
}

function drawCoastalSeal(ctx, theme, width, height) {
  for (const [cx, cy] of [[width / 2, 230], [width / 2, height - 230]]) {
    drawSoftGlow(ctx, cx, cy, 132, theme.secondary, 0.035);
    for (let i = 0; i < 4; i++) {
      strokePath(ctx, [[cx - 110, cy + i * 18], [cx - 34, cy - 28 + i * 10, cx + 36, cy + 30 + i * 8, cx + 110, cy - 6 + i * 12]], i % 2 ? theme.secondary : theme.accent, 2, 0.08);
    }
  }
}

function drawSignatureOrnaments(ctx, theme, width, height, variant) {
  if (hasTag(theme, "civic")) drawCeremonialMedallions(ctx, theme, width, height, variant);
  if (hasTag(theme, "celebration")) drawFoldedPaperFans(ctx, theme, width, height, variant);
  if (hasTag(theme, "water") || hasTag(theme, "island")) drawTideGlyphs(ctx, theme, width, height, variant);
  if (hasTag(theme, "botanical") || hasTag(theme, "harvest")) drawPressedSprigs(ctx, theme, width, height, variant);
  if (hasTag(theme, "sky") || hasTag(theme, "light")) drawLuminousPearls(ctx, theme, width, height, variant);
  if (hasTag(theme, "winter")) drawGlassBands(ctx, theme, width, height, variant);
  if (hasTag(theme, "memorial")) drawRemembranceStems(ctx, theme, width, height, variant);
  if (hasTag(theme, "culture")) drawCulturalGlyphs(ctx, theme, width, height, variant);
  if (hasTag(theme, "seasonal")) drawSeasonalGlyphs(ctx, theme, width, height, variant);
}

function drawCulturalGlyphs(ctx, theme, width, height, variant) {
  const text = `${theme.title} ${theme.caption}`.toLowerCase();
  if (/book|education|teacher|language|poetry/.test(text)) drawBookGlyphs(ctx, theme, width, height, variant);
  if (/music|jazz/.test(text)) drawSoundGlyphs(ctx, theme, width, height, variant);
  if (/photo|television/.test(text)) drawFrameGlyphs(ctx, theme, width, height, variant);
  if (/coffee|tea|food/.test(text)) drawSteamGlyphs(ctx, theme, width, height, variant);
  if (/peace|human rights|tolerance|friendship|kindness/.test(text)) drawPeaceGlyphs(ctx, theme, width, height, variant);
}

function drawBookGlyphs(ctx, theme, width, height, variant) {
  for (const [cx, cy] of [[145, 430], [width - 145, 430], [170, height - 430], [width - 170, height - 430]]) {
    ctx.save();
    ctx.strokeStyle = hexToRgba(theme.accent, 0.08);
    ctx.lineWidth = 2;
    roundRect(ctx, cx - 30, cy - 22, 60, 44, 5);
    ctx.stroke();
    strokePath(ctx, [[cx, cy - 20], [cx, cy + 22]], theme.secondary, 1.5, 0.08);
    for (let i = 0; i < 3; i++) {
      strokePath(ctx, [[cx - 21, cy - 10 + i * 10], [cx - 6, cy - 10 + i * 10]], theme.accent, 1, 0.075);
      strokePath(ctx, [[cx + 6, cy - 10 + i * 10], [cx + 21, cy - 10 + i * 10]], theme.secondary, 1, 0.075);
    }
    ctx.restore();
  }
}

function drawSoundGlyphs(ctx, theme, width, height, variant) {
  for (const baseY of [390 + variant * 5, height - 410 - variant * 4]) {
    for (let i = 0; i < 18; i++) {
      const x = 95 + i * ((width - 190) / 17);
      const amp = 14 + ((i + variant) % 5) * 7;
      strokePath(ctx, [[x, baseY - amp], [x, baseY + amp]], i % 2 ? theme.secondary : theme.accent, 2, 0.065);
    }
  }
}

function drawFrameGlyphs(ctx, theme, width, height, variant) {
  for (const [x, y] of [[120, 405], [width - 240, 405], [145, height - 470], [width - 265, height - 470]]) {
    ctx.save();
    ctx.strokeStyle = hexToRgba(theme.secondary, 0.075);
    ctx.lineWidth = 2;
    roundRect(ctx, x, y, 120, 78, 8);
    ctx.stroke();
    dot(ctx, x + 92, y + 22, 5, theme.accent, 0.08);
    drawEllipse(ctx, x + 58, y + 40, 18, 18, 0, theme.accent, 0.055);
    ctx.restore();
  }
}

function drawSteamGlyphs(ctx, theme, width, height, variant) {
  for (const [cx, cy] of [[130, 430], [width - 130, 430], [165, height - 430], [width - 165, height - 430]]) {
    drawEllipse(ctx, cx, cy + 34, 38, 11, 0, theme.secondary, 0.055);
    for (let i = 0; i < 3; i++) {
      strokePath(ctx, [[cx - 22 + i * 22, cy + 12], [cx - 30 + i * 22, cy - 22, cx - 12 + i * 24, cy - 34, cx - 20 + i * 24, cy - 62]], theme.accent, 2, 0.075);
    }
  }
}

function drawPeaceGlyphs(ctx, theme, width, height, variant) {
  for (const [cx, cy] of [[width / 2, 250], [width / 2, height - 260]]) {
    ctx.save();
    ctx.strokeStyle = hexToRgba(theme.accent, 0.08);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 52, 0, Math.PI * 2);
    ctx.stroke();
    strokePath(ctx, [[cx, cy - 52], [cx, cy + 52]], theme.secondary, 2, 0.08);
    strokePath(ctx, [[cx, cy + 8], [cx - 36, cy + 42]], theme.secondary, 2, 0.08);
    strokePath(ctx, [[cx, cy + 8], [cx + 36, cy + 42]], theme.secondary, 2, 0.08);
    ctx.restore();
  }
}

function drawCeremonialMedallions(ctx, theme, width, height, variant) {
  const anchors = [
    [width / 2, 205],
    [width / 2, height - 235]
  ];
  for (const [cx, cy] of anchors) {
    for (let ring = 0; ring < 3; ring++) {
      ctx.save();
      ctx.strokeStyle = hexToRgba(ring % 2 ? theme.secondary : theme.accent, 0.05 + ring * 0.018);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 52 + ring * 27 + variant, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 * i) / 18;
      const r = 86 + (i % 2) * 14;
      drawDiamond(ctx, cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 4 + (i % 3), i % 2 ? theme.secondary : theme.accent, 0.07);
    }
  }
}

function drawFoldedPaperFans(ctx, theme, width, height, variant) {
  const fans = [
    [150, 400, 1],
    [width - 150, 400, -1],
    [190, height - 420, 1],
    [width - 190, height - 420, -1]
  ];
  for (const [cx, cy, side] of fans) {
    for (let fold = 0; fold < 7; fold++) {
      const angle = side * (-0.72 + fold * 0.24);
      strokePath(ctx, [[cx, cy], [cx + Math.cos(angle) * 78, cy + Math.sin(angle) * 78]], fold % 2 ? theme.secondary : theme.accent, 2, 0.085);
    }
    ctx.save();
    ctx.strokeStyle = hexToRgba(theme.accent, 0.075);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 78, side > 0 ? -0.72 : Math.PI - 0.72, side > 0 ? 0.72 : Math.PI + 0.72);
    ctx.stroke();
    ctx.restore();
  }
}

function drawTideGlyphs(ctx, theme, width, height, variant) {
  for (const base of [380, height - 465]) {
    for (let i = 0; i < 9; i++) {
      const cx = 120 + ((i * 143 + variant * 29) % (width - 240));
      const cy = base + (i % 3) * 26;
      ctx.save();
      ctx.strokeStyle = hexToRgba(i % 2 ? theme.secondary : theme.accent, 0.07);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 16 + (i % 4) * 4, Math.PI * 0.1, Math.PI * 1.78);
      ctx.stroke();
      ctx.restore();
      dot(ctx, cx + 22, cy - 3, 2.5, theme.secondary, 0.08);
    }
  }
}

function drawPressedSprigs(ctx, theme, width, height, variant) {
  for (const [baseX, baseY, side] of [[128, 510, 1], [width - 128, 510, -1], [142, height - 520, 1], [width - 142, height - 520, -1]]) {
    strokePath(ctx, [[baseX, baseY], [baseX + side * 82, baseY - 76, baseX + side * 126, baseY + 34, baseX + side * 188, baseY - 42]], theme.accent, 2, 0.08);
    for (let i = 0; i < 6; i++) {
      const x = baseX + side * (32 + i * 25);
      const y = baseY - 24 + ((i + variant) % 3) * 22;
      drawEllipse(ctx, x, y, 5 + (i % 2), 15 + (i % 3) * 3, side * (i % 2 ? 0.72 : -0.42), i % 2 ? theme.secondary : theme.accent, 0.075);
    }
  }
}

function drawLuminousPearls(ctx, theme, width, height, variant) {
  for (let arc = 0; arc < 2; arc++) {
    const cy = arc === 0 ? 315 : height - 330;
    for (let i = 0; i < 14; i++) {
      const t = i / 13;
      const x = 135 + t * (width - 270);
      const y = cy + Math.sin(t * Math.PI * 2 + variant) * 22;
      drawSoftGlow(ctx, x, y, 16 + (i % 3) * 5, i % 2 ? theme.secondary : theme.accent, 0.026);
      dot(ctx, x, y, 2.2 + (i % 3) * 0.8, "#ffffff", 0.1);
    }
  }
}

function drawGlassBands(ctx, theme, width, height, variant) {
  for (const y of [430 + variant * 3, height - 450 - variant * 2]) {
    for (let i = 0; i < 4; i++) {
      strokePath(ctx, [[84, y + i * 22], [300, y - 28 + i * 18, 520, y + 34 + i * 10, 700, y - 10 + i * 18], [900, y - 48 + i * 12, 1040, y + 30 + i * 10, width - 84, y - 4 + i * 18]], "#f3f7ff", 1.5, 0.042 + i * 0.01);
    }
  }
}

function drawRemembranceStems(ctx, theme, width, height, variant) {
  const stems = [[96, height - 705, 1], [width - 96, height - 705, -1], [118, 620, 1], [width - 118, 620, -1]];
  for (const [x, y, side] of stems) {
    strokePath(ctx, [[x, y + 80], [x + side * 28, y + 20, x + side * 12, y - 38, x + side * 48, y - 82]], theme.secondary, 2, 0.075);
    flower(ctx, x + side * 50, y - 92, 22 + (variant % 3) * 3, theme.accent, theme.secondary, 0.1, 5);
  }
}

function drawSeasonalGlyphs(ctx, theme, width, height, variant) {
  if (hasTag(theme, "dew-season")) drawDewBeadVeils(ctx, theme, width, height, variant);
  if (hasTag(theme, "equinox")) drawEquinoxBalanceMarks(ctx, theme, width, height, variant);
  if (hasTag(theme, "rain-season") || hasTag(theme, "summer")) drawRainCurtainGlyphs(ctx, theme, width, height, variant);
  if (hasTag(theme, "heat-season")) drawHeatShimmerGlyphs(ctx, theme, width, height, variant);
  if (hasTag(theme, "cold-season")) drawWinterWindowGlyphs(ctx, theme, width, height, variant);
  if (hasTag(theme, "spring-season") || hasTag(theme, "spring")) drawSproutOrbitGlyphs(ctx, theme, width, height, variant);
  if (hasTag(theme, "grain-season") || hasTag(theme, "harvest")) drawHarvestMoonGlyphs(ctx, theme, width, height, variant);
}

function drawDewBeadVeils(ctx, theme, width, height, variant) {
  const rows = [310 + variant * 3, height - 520 - variant * 2];
  for (const baseY of rows) {
    for (let i = 0; i < 18; i++) {
      const t = i / 17;
      const x = 88 + t * (width - 176);
      const y = baseY + Math.sin(t * Math.PI * 2 + variant * 0.7) * 30;
      strokePath(ctx, [[x - 8, y - 34], [x - 2, y - 12, x + 2, y + 10, x + 8, y + 34]], theme.secondary, 1.4, 0.075);
      drawEllipse(ctx, x, y + 42, 6 + (i % 3), 10 + (i % 4), 0, i % 2 ? theme.accent : "#f3f7ff", 0.16);
      dot(ctx, x - 2, y + 38, 1.6, "#ffffff", 0.16);
      drawSoftGlow(ctx, x, y + 42, 24, theme.accent, 0.026);
    }
  }
  for (const [x, side] of [[105, 1], [width - 105, -1]]) {
    for (let i = 0; i < 7; i++) {
      const y = 605 + i * 190;
      strokePath(ctx, [[x, y], [x + side * 42, y - 52, x + side * 82, y + 34, x + side * 126, y - 18]], theme.secondary, 1.8, 0.09);
      drawEllipse(ctx, x + side * (34 + (i % 3) * 18), y + 12, 8, 12, 0, theme.accent, 0.13);
    }
  }
  for (const [cx, cy, scale] of [[width / 2, 270, 1], [width / 2, height - 300, 0.8]]) {
    drawSoftGlow(ctx, cx, cy, 120 * scale, theme.accent, 0.032);
    drawEllipse(ctx, cx - 38 * scale, cy, 46 * scale, 54 * scale, -0.2, theme.secondary, 0.075);
    drawEllipse(ctx, cx - 18 * scale, cy - 4 * scale, 38 * scale, 48 * scale, -0.2, theme.gradient[0], 0.18);
    for (let i = 0; i < 5; i++) {
      const angle = -0.5 + i * 0.25;
      drawEllipse(ctx, cx + Math.cos(angle) * 96 * scale, cy + Math.sin(angle) * 42 * scale, 7 * scale, 12 * scale, angle, theme.accent, 0.11);
    }
  }
}

function drawEquinoxBalanceMarks(ctx, theme, width, height, variant) {
  for (const y of [360 + variant * 4, height - 430 - variant * 3]) {
    strokePath(ctx, [[width / 2 - 180, y], [width / 2 + 180, y]], theme.accent, 2, 0.075);
    drawDiamond(ctx, width / 2, y, 9, theme.secondary, 0.11);
    for (const side of [-1, 1]) {
      const cx = width / 2 + side * 128;
      strokePath(ctx, [[cx, y], [cx - side * 34, y + 42], [cx + side * 34, y + 42], [cx, y]], theme.secondary, 1.5, 0.065);
      dot(ctx, cx, y + 42, 3.2, theme.accent, 0.09);
    }
  }
}

function drawRainCurtainGlyphs(ctx, theme, width, height, variant) {
  for (const zone of [210, height - 610]) {
    for (let i = 0; i < 28; i++) {
      const x = 65 + ((i * 67 + variant * 43) % (width - 130));
      const y = zone + ((i * 37) % 260);
      const length = 30 + (i % 5) * 12;
      strokePath(ctx, [[x, y], [x - 9, y + length]], i % 2 ? theme.secondary : theme.accent, 1.5, 0.055);
      if (i % 4 === 0) drawEllipse(ctx, x - 12, y + length + 8, 4, 7, 0, theme.secondary, 0.07);
    }
  }
}

function drawHeatShimmerGlyphs(ctx, theme, width, height, variant) {
  for (const y of [340 + variant * 6, height - 510 - variant * 4]) {
    for (let i = 0; i < 9; i++) {
      const x = 100 + i * ((width - 200) / 8);
      strokePath(ctx, [[x, y + 42], [x - 20, y + 10, x + 24, y - 18, x, y - 54]], theme.accent, 2.4, 0.06);
      strokePath(ctx, [[x + 18, y + 52], [x + 40, y + 16, x - 2, y - 12, x + 22, y - 46]], theme.secondary, 1.8, 0.045);
    }
  }
}

function drawWinterWindowGlyphs(ctx, theme, width, height, variant) {
  for (const [x, y] of [[104, 420], [width - 224, 420], [130, height - 560], [width - 250, height - 560]]) {
    ctx.save();
    ctx.strokeStyle = hexToRgba("#f3f7ff", 0.06);
    ctx.lineWidth = 2;
    roundRect(ctx, x, y, 120, 150, 10);
    ctx.stroke();
    strokePath(ctx, [[x + 60, y], [x + 60, y + 150]], "#f3f7ff", 1.4, 0.055);
    strokePath(ctx, [[x, y + 74], [x + 120, y + 74]], "#f3f7ff", 1.4, 0.055);
    ctx.restore();
    drawSoftGlow(ctx, x + 60, y + 84, 72, theme.secondary, 0.025);
  }
}

function drawSproutOrbitGlyphs(ctx, theme, width, height, variant) {
  for (const [cx, cy] of [[width / 2, 300], [width / 2, height - 420]]) {
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16 + variant * 0.04;
      const rx = 250 + (i % 3) * 18;
      const ry = 72 + (i % 4) * 7;
      const x = cx + Math.cos(angle) * rx;
      const y = cy + Math.sin(angle) * ry;
      drawEllipse(ctx, x, y, 5, 15, angle, i % 2 ? theme.secondary : theme.accent, 0.075);
    }
  }
}

function drawHarvestMoonGlyphs(ctx, theme, width, height, variant) {
  for (const [cx, cy, scale] of [[width / 2, 260, 1], [width / 2, height - 365, 0.86]]) {
    drawSoftGlow(ctx, cx, cy, 165 * scale, theme.secondary, 0.04);
    drawEllipse(ctx, cx, cy, 64 * scale, 64 * scale, 0, theme.secondary, 0.085);
    for (let i = 0; i < 11; i++) {
      const angle = -0.92 + i * 0.18;
      const x = cx + Math.cos(angle) * 130 * scale;
      const y = cy + Math.sin(angle) * 76 * scale;
      drawEllipse(ctx, x, y, 8 * scale, 16 * scale, angle, i % 2 ? theme.accent : theme.secondary, 0.105);
    }
  }
}

function drawDiamond(ctx, x, y, size, color, alpha) {
  ctx.save();
  ctx.fillStyle = hexToRgba(color, alpha);
  ctx.beginPath();
  ctx.moveTo(x, y - size);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x, y + size);
  ctx.lineTo(x - size, y);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawTinyGlyphFlower(ctx, theme, cx, cy, size, alpha) {
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 * i) / 6;
    drawEllipse(ctx, cx + Math.cos(angle) * size * 0.42, cy + Math.sin(angle) * size * 0.42, size * 0.14, size * 0.3, angle, i % 2 ? theme.secondary : theme.accent, alpha);
  }
  dot(ctx, cx, cy, size * 0.13, theme.accent, alpha);
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

function drawLanterns(ctx, theme, width, height) {
  for (const y of [150, height - 410]) {
    strokePath(ctx, [[78, y], [280, y - 44, 440, y + 34, 620, y - 8], [820, y - 52, 986, y + 36, width - 78, y - 10]], theme.secondary, 2, 0.15);
    for (let i = 0; i < 9; i++) {
      const x = 120 + i * ((width - 240) / 8);
      const ly = y + 38 + ((i % 3) * 13);
      strokePath(ctx, [[x, y + 4], [x, ly - 34]], theme.secondary, 1.4, 0.12);
      drawSoftGlow(ctx, x, ly, 54, i % 2 ? theme.secondary : theme.accent, 0.035);
      drawEllipse(ctx, x, ly, 18, 30, 0, i % 2 ? theme.secondary : theme.accent, 0.16);
      strokePath(ctx, [[x - 16, ly], [x + 16, ly]], "#ffffff", 1.2, 0.12);
      strokePath(ctx, [[x, ly + 31], [x, ly + 50]], theme.accent, 1.5, 0.1);
    }
  }
}

function drawPaperKites(ctx, theme, width, height) {
  const kites = [
    [135, 385, 0.72],
    [width - 150, 415, -0.62],
    [190, height - 455, -0.45],
    [width - 175, height - 500, 0.55]
  ];
  for (const [cx, cy, angle] of kites) {
    drawKite(ctx, cx, cy, 56, angle, theme.accent, theme.secondary);
    strokePath(ctx, [[cx, cy + 40], [cx - 36, cy + 110, cx + 44, cy + 160, cx - 18, cy + 220]], theme.secondary, 1.8, 0.1);
    for (let bow = 0; bow < 3; bow++) {
      const bx = cx + (bow % 2 ? 22 : -18);
      const by = cy + 95 + bow * 48;
      drawDiamond(ctx, bx, by, 8, bow % 2 ? theme.secondary : theme.accent, 0.12);
    }
  }
  drawConstellationVeil(ctx, theme, width, height, themeVariant(theme, 7));
}

function drawWovenPattern(ctx, theme, width, height) {
  for (const baseY of [210, height - 350]) {
    for (let row = 0; row < 5; row++) {
      const y = baseY + row * 26;
      for (let i = 0; i < 16; i++) {
        const x = 84 + i * ((width - 168) / 15);
        const color = (i + row) % 2 ? theme.secondary : theme.accent;
        strokePath(ctx, [[x - 18, y - 10], [x + 18, y + 10]], color, 2.2, 0.08);
        strokePath(ctx, [[x - 18, y + 10], [x + 18, y - 10]], color, 2.2, 0.06);
      }
    }
  }
  for (const [x, y] of [[105, 610], [width - 105, 610], [126, height - 610], [width - 126, height - 610]]) {
    drawDiamond(ctx, x, y, 34, theme.accent, 0.08);
    drawDiamond(ctx, x, y, 18, theme.secondary, 0.1);
  }
}

function drawMoonOrbit(ctx, theme, width, height) {
  for (const [cx, cy, scale] of [[width / 2, 255, 1], [width / 2, height - 330, 0.85]]) {
    drawSoftGlow(ctx, cx, cy, 170 * scale, theme.secondary, 0.035);
    drawEllipse(ctx, cx, cy, 64 * scale, 64 * scale, 0, theme.secondary, 0.11);
    drawEllipse(ctx, cx + 24 * scale, cy - 6 * scale, 56 * scale, 60 * scale, 0, theme.gradient[0], 0.23);
    for (let ring = 0; ring < 3; ring++) {
      ctx.save();
      ctx.strokeStyle = hexToRgba(ring % 2 ? theme.accent : theme.secondary, 0.055 + ring * 0.012);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, (145 + ring * 40) * scale, (44 + ring * 14) * scale, -0.18 + ring * 0.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      dot(ctx, cx + Math.cos(angle) * 210 * scale, cy + Math.sin(angle) * 66 * scale, 2.8 + (i % 3), "#ffffff", 0.11);
    }
  }
}

function drawRainGarden(ctx, theme, width, height) {
  drawWaveLattice(ctx, theme, width, height, themeVariant(theme, 7));
  for (const [baseX, baseY, side] of [[95, 690, 1], [width - 95, 700, -1], [126, height - 620, 1], [width - 126, height - 635, -1]]) {
    strokePath(ctx, [[baseX, baseY + 72], [baseX + side * 38, baseY + 10, baseX + side * 82, baseY - 20, baseX + side * 132, baseY - 88]], theme.accent, 2.5, 0.11);
    for (let i = 0; i < 5; i++) {
      drawEllipse(ctx, baseX + side * (34 + i * 22), baseY - 12 - i * 16, 7, 18, side * (0.5 - i * 0.12), i % 2 ? theme.secondary : theme.accent, 0.1);
    }
    flower(ctx, baseX + side * 146, baseY - 96, 26, theme.secondary, theme.accent, 0.13, 7);
  }
  drawRainCurtainGlyphs(ctx, theme, width, height, themeVariant(theme, 5));
}

function drawHarvestSheaves(ctx, theme, width, height) {
  for (const [baseX, baseY, side] of [[110, 720, 1], [width - 110, 720, -1], [150, height - 480, 1], [width - 150, height - 480, -1]]) {
    for (let i = 0; i < 7; i++) {
      const angle = side * (-0.45 + i * 0.15);
      const x = baseX + side * i * 7;
      strokePath(ctx, [[x, baseY], [x + Math.sin(angle) * 90, baseY - 155 - i * 8]], i % 2 ? theme.secondary : theme.accent, 2.4, 0.13);
      for (let g = 0; g < 4; g++) {
        drawEllipse(ctx, x + side * (20 + g * 6), baseY - 132 + g * 18 - i * 5, 7, 16, side * -0.56, i % 2 ? theme.secondary : theme.accent, 0.105);
      }
    }
    strokePath(ctx, [[baseX - side * 46, baseY - 58], [baseX + side * 74, baseY - 76]], theme.secondary, 3, 0.12);
  }
  drawHarvestMoonGlyphs(ctx, theme, width, height, themeVariant(theme, 8));
}

function drawPaperCut(ctx, theme, width, height) {
  for (const [cx, cy, scale] of [[width / 2, 220, 1], [width / 2, height - 240, 0.9]]) {
    drawSoftGlow(ctx, cx, cy, 150 * scale, theme.accent, 0.035);
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16;
      const r = 84 * scale;
      drawDiamond(ctx, cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 12 * scale, i % 2 ? theme.secondary : theme.accent, 0.095);
    }
    drawDiamond(ctx, cx, cy, 48 * scale, theme.accent, 0.12);
    drawDiamond(ctx, cx, cy, 24 * scale, theme.secondary, 0.12);
  }
  drawBunting(ctx, theme, 84, 120, 7);
  drawBunting(ctx, theme, width - 574, 120, 7, true);
}

function drawTeaSteam(ctx, theme, width, height) {
  for (const [cx, cy] of [[150, 520], [width - 150, 520], [180, height - 500], [width - 180, height - 500]]) {
    drawEllipse(ctx, cx, cy + 54, 48, 12, 0, theme.secondary, 0.075);
    ctx.save();
    ctx.strokeStyle = hexToRgba(theme.accent, 0.1);
    ctx.lineWidth = 2;
    roundRect(ctx, cx - 42, cy + 10, 84, 54, 8);
    ctx.stroke();
    ctx.restore();
    for (let i = 0; i < 4; i++) {
      strokePath(ctx, [[cx - 30 + i * 20, cy], [cx - 46 + i * 22, cy - 44, cx - 6 + i * 18, cy - 74, cx - 22 + i * 21, cy - 118]], i % 2 ? theme.secondary : theme.accent, 2, 0.085);
    }
  }
  drawSmallLanternGlow(ctx, theme, width, height, themeVariant(theme, 6));
}

function drawKite(ctx, cx, cy, size, rotation, color, secondary) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.fillStyle = hexToRgba(color, 0.15);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.64, 0);
  ctx.lineTo(0, size * 0.92);
  ctx.lineTo(-size * 0.64, 0);
  ctx.closePath();
  ctx.fill();
  strokePath(ctx, [[0, -size], [0, size * 0.92]], secondary, 1.5, 0.11);
  strokePath(ctx, [[-size * 0.64, 0], [size * 0.64, 0]], secondary, 1.5, 0.11);
  ctx.restore();
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

globalThis.ThemeEngine = {
  getDailyTheme,
  rankDailyThemes
};
