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
  aurora: ["sky", "mountain", "light"]
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

const SOLAR_TERM_DESCRIPTIONS = {
  立春: "立春是二十四节气之首，意味着寒冬开始松动，春天的气息重新进入日历。",
  雨水: "雨水是春季的第二个节气，气温回升，降水增多，草木开始得到更柔和的滋养。",
  惊蛰: "惊蛰标志春雷渐起、蛰伏的生命开始苏醒，是春天从静到动的转折。",
  春分: "春分时昼夜大致平分，春意进入更稳定的阶段，花木与日光一同舒展。",
  清明: "清明天气清澈明朗，草木新发，也是踏青、祭扫和记取春日人事的时节。",
  谷雨: "谷雨是春季最后一个节气，雨水滋养百谷，暮春逐渐走向初夏。",
  立夏: "立夏表示夏季开始，白昼变长，草木繁盛，天气开始显露稳定的暖意。",
  小满: "小满时麦类作物籽粒渐渐饱满，但还没有完全成熟，夏意正在积蓄。",
  芒种: "芒种多在仲夏前后，麦类收获、稻类播种，农事进入忙碌而丰盛的时段。",
  夏至: "夏至是一年中白昼最长的节气，日光抵达盛处，盛夏也由此逐渐展开。",
  小暑: "小暑意味着暑气开始明显增强，天气转热，雷雨和潮湿感也更频繁出现。",
  大暑: "大暑是一年中最热的节气之一，炎热、湿气与午后云雨构成盛夏的高点。",
  立秋: "立秋表示秋季开始，但暑气常未散尽，凉意先在夜里和风里出现。",
  处暑: "处暑意味着暑热逐渐退去，白天仍暖，夜晚开始有更清楚的新凉。",
  白露: "白露是秋季的第三个节气，天气转凉，清晨水汽凝成露珠，秋意开始变得清晰。",
  秋分: "秋分时昼夜再次大致平分，秋色进入中段，收获、凉意与均衡感同时出现。",
  寒露: "寒露时气温继续下降，露水带上寒意，深秋的清冷感变得更明显。",
  霜降: "霜降是秋季最后一个节气，气温更低，霜意初现，草木逐渐进入深秋收束。",
  立冬: "立冬表示冬季开始，万物趋向收藏，日历进入更安静的寒冷时段。",
  小雪: "小雪时天气继续转寒，北方开始出现初雪或雪意，冬天的轮廓更清楚。",
  大雪: "大雪表示寒意更深、降雪可能增多，冬季进入更沉静清寒的阶段。",
  冬至: "冬至是一年中黑夜最长的节气，此后白昼开始慢慢回升，是冬天里的转折点。",
  小寒: "小寒标志寒气加深，天气进入一年中最冷的一段，岁末微光也越来越近。",
  大寒: "大寒是二十四节气的最后一个，严寒抵达深处，也预示新的春信将近。"
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
    intro: "二月常在冬末与早春之间摆动，寒意还在，雨水和枝芽已经开始提示新的季节。",
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
    mood: "清明雨气、水面花影和暮春透明感",
    intro: "四月多有清明与谷雨，春雨变得频繁，草木继续生长，暮春的气息逐渐加深。",
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
    intro: "六月进入仲夏，芒种与夏至前后日照变长，湿热、梅雨和水汽让季节变得丰沛。",
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
    intro: "七月是暑气最明显的月份，小暑与大暑相继到来，热浪、云雨和漫长午后构成盛夏。",
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
    intro: "八月仍有暑气，却已经接近立秋与处暑，夜里开始出现新凉，季节悄悄转向秋天。",
    motif: "grain",
    gradient: ["#1d211a", "#615237", "#121414"],
    accent: "#d6a95e",
    secondary: "#88a06a",
    tags: ["seasonal", "harvest", "autumn"]
  },
  {
    title: "Autumn Grain Balance",
    zhMonth: "九月",
    mood: "秋分前后的谷物、露水和昼夜均衡",
    intro: "九月从白露走向秋分，暑气退去，清晨露水增多，昼夜重新接近均衡。",
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
    intro: "十月进入深秋，寒露与霜降带来更明显的凉意，天空清透，草木开始收束。",
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
    intro: "十一月从立冬走向小雪，寒意逐渐稳定，日历进入更安静、更向内的初冬。",
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
    intro: "十二月接近一年中黑夜最长的时段，大雪与冬至带来寒意，也带来白昼回升的转折。",
    motif: "snow",
    gradient: ["#11182a", "#273154", "#101214"],
    accent: "#9dbaf0",
    secondary: "#d6c071",
    tags: ["seasonal", "winter", "light"]
  }
];

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
  if (/^[\u4e00-\u9fff]{2,4}$/.test(title)) {
    return SOLAR_TERM_DESCRIPTIONS[title] || `二十四节气之一，${phrase}。`;
  }
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

function fallbackTheme(date) {
  const mood = MONTH_MOODS[date.getMonth()];
  const nearbyTerm = nearestSolarTerm(date);
  const hasNearbyTerm = nearbyTerm && nearbyTerm.distance <= 9;
  const termWeight = hasNearbyTerm ? Math.max(0.2, (10 - nearbyTerm.distance) / 10 * 0.55) : 0;
  const title = hasNearbyTerm ? `${mood.title} / ${nearbyTerm.title}` : mood.title;
  const caption = hasNearbyTerm ? `${mood.title} · ${nearbyTerm.title}` : `${mood.title} · ${mood.zhMonth}气质`;
  const description = seasonalFallbackDescription(mood, nearbyTerm);
  const termTheme = hasNearbyTerm ? nearbyTerm.theme : null;

  return createTheme({
    title,
    caption,
    description,
    motif: mood.motif,
    gradient: termTheme ? blendGradient(mood.gradient, termTheme.gradient, termWeight) : mood.gradient,
    accent: termTheme ? mixHex(mood.accent, termTheme.accent, termWeight) : mood.accent,
    secondary: termTheme ? mixHex(mood.secondary, termTheme.secondary, termWeight) : mood.secondary,
    priority: 30,
    tags: [
      ...mood.tags,
      ...(termTheme ? termTheme.tags : []),
      ...(termTheme ? solarTermTags(nearbyTerm.title) : []),
      hasNearbyTerm ? "solar-nearby" : "month-mood"
    ]
  });
}

function nearestSolarTerm(date) {
  const year = date.getFullYear();
  const target = startOfDay(date);
  let nearest = null;

  for (const candidateYear of [year - 1, year, year + 1]) {
    for (const [termDate, title, caption, motif, gradient, accent, secondary] of SOLAR_TERMS) {
      const candidateDate = dateFromMonthDay(candidateYear, termDate);
      const diff = Math.round((target - candidateDate) / 86400000);
      const distance = Math.abs(diff);
      if (!nearest || distance < nearest.distance) {
        nearest = {
          title,
          caption,
          diff,
          distance,
          date: candidateDate,
          theme: createTheme({ title, caption, motif, gradient, accent, secondary, priority: 95 })
        };
      }
    }
  }

  return nearest;
}

function seasonalFallbackDescription(mood, nearbyTerm) {
  if (nearbyTerm?.distance <= 9) {
    const relation = nearbyTerm.diff < 0 ? "临近" : nearbyTerm.diff === 0 ? "正逢" : "刚过";
    const termDescription = SOLAR_TERM_DESCRIPTIONS[nearbyTerm.title] || `「${nearbyTerm.title}」是二十四节气之一。`;
    return `${termDescription}这一天${relation}这个节气。`;
  }
  return mood.intro;
}

function solarTermTags(title) {
  const tags = [`term-${title}`];
  if (/雨水|谷雨|小暑|大暑/.test(title)) tags.push("rain-season");
  if (/白露|寒露|霜降/.test(title)) tags.push("dew-season");
  if (/春分|秋分/.test(title)) tags.push("equinox");
  if (/小满|芒种|立秋|秋分/.test(title)) tags.push("grain-season");
  if (/夏至|小暑|大暑/.test(title)) tags.push("heat-season");
  if (/小雪|大雪|小寒|大寒|冬至/.test(title)) tags.push("cold-season");
  if (/立春|惊蛰|春分|清明/.test(title)) tags.push("spring-season");
  return tags;
}

function dateFromMonthDay(year, value) {
  const [month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function blendGradient(base, overlay, amount) {
  return base.map((color, index) => mixHex(color, overlay[index] || color, amount));
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
  const country = source?.zhName || COUNTRY_NAMES_ZH[source?.countryCode] || source?.countryName || "当地";
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
  if (localName) return `${country}以「${localName}」为名纪念这一天，通常与当地历史、传统或社区公共生活有关。`;
  if (fallback && !/的.+节日/.test(fallback)) return fallback;
  return `${title}是${country}日历中的纪念日，通常承载当地历史、公共生活或季节性的休假安排。`;
}

function holidayIntroFor(title, source = {}) {
  const intros = globalThis.YearCalendarHolidayIntros || {};
  const keys = [
    source?.countryCode ? `${source.countryCode}|${title}` : "",
    source?.countryCode && source?.localName ? `${source.countryCode}|${source.localName}` : "",
    title,
    source?.localName || ""
  ].filter(Boolean);

  for (const key of keys) {
    const intro = intros[key] || introByNormalizedKey(intros, key);
    if (intro) return intro;
  }
  return "";
}

function introByNormalizedKey(intros, key) {
  const normalizedKey = normalizeIntroKey(key);
  const match = Object.entries(intros).find(([introKey]) => normalizeIntroKey(introKey) === normalizedKey);
  return match?.[1] || "";
}

function normalizeIntroKey(value) {
  return value.toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();
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
  const recentIndex = avoidMotifs.lastIndexOf(theme.motif);
  if (recentIndex === -1) return 0;
  const recency = avoidMotifs.length - recentIndex;
  return Math.max(5, 18 - recency * 2);
}

function rankDailyThemes(date, options = {}) {
  const md = monthDay(date);
  const candidates = [];
  const cachedThemes = cachedHolidayThemes(date);
  const avoidMotifs = Array.isArray(options.avoidMotifs) ? options.avoidMotifs : [];

  for (const [termDate, title, caption, motif, gradient, accent, secondary] of SOLAR_TERMS) {
    if (md === termDate) {
      candidates.push(createTheme({ title, caption, motif, gradient, accent, secondary, priority: 95 }));
    }
  }

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
    candidates.push(fallbackTheme(date));
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
  const titleSize = /^[\u4e00-\u9fff]{2,6}$/.test(theme.title) ? 40 : 36;
  drawFittedText(ctx, theme.title, x, y - 6, 980, titleSize, 25);

  ctx.fillStyle = "rgba(215,215,219,0.66)";
  drawFittedText(ctx, theme.description, x, y + 39, 1040, 23, 17);
  ctx.restore();
}

function themeMetaLine(theme) {
  if (theme.source?.countryName) {
    const country = theme.source.zhName || COUNTRY_NAMES_ZH[theme.source.countryCode] || theme.source.countryName;
    return `${country} · ${holidayTypeLabelFromSource(theme.source)}`;
  }
  if (hasTag(theme, "seasonal")) return hasTag(theme, "solar-nearby") ? "Seasonal Mood · Solar Term Nearby" : "Seasonal Mood";
  if (/^[\u4e00-\u9fff]{2,6}$/.test(theme.title)) return "Solar Term · China";
  if (hasTag(theme, "civic")) return "Civic Holiday";
  if (hasTag(theme, "celebration")) return "Festival Day";
  return "";
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
