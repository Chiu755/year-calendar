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

function createTheme({ title, caption, motif, gradient, accent, secondary, priority = 50, description, tags = [] }) {
  return {
    title,
    caption,
    description: description || inferThemeDescription(title, caption),
    motif,
    tags: Array.from(new Set([...(MOTIF_TAGS[motif] || []), ...inferThemeTags(title, caption), ...tags])),
    gradient,
    accent,
    secondary,
    priority
  };
}

function inferThemeDescription(title, caption) {
  if (DAY_INTROS[title]) return DAY_INTROS[title];

  const phrase = caption.includes("·") ? caption.split("·").slice(1).join("·").trim() : caption;
  if (/^[\u4e00-\u9fff]{2,4}$/.test(title)) {
    return `二十四节气之一，${phrase}。`;
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

function rankDailyThemes(date) {
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
      score: theme.priority + seededJitter(seed, index) * 6,
      rankSeed: seed,
      sourceIndex: index
    }))
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
  ctx.fillStyle = "rgba(225,225,230,0.82)";
  drawFittedText(ctx, theme.title, x, y - 10, 980, 35, 25);
  ctx.fillStyle = "rgba(215,215,219,0.64)";
  drawFittedText(ctx, theme.description, x, y + 34, 1040, 24, 18);
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
