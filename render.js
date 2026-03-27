process.env.TZ = "Asia/Shanghai";

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const OUTPUT_ROOT = "output";
const TODAY_OUTPUT = path.join(OUTPUT_ROOT, "today.png");
const HTML_ENTRY = path.resolve("index.html");
const HTML_URL = pathToFileURL(HTML_ENTRY).href;

// =============================
// 📅 生成日期信息
// =============================
const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");

const yearFolder = path.join(OUTPUT_ROOT, `${year}`);
const monthFolder = path.join(yearFolder, `${year}.${month}`);
const datedFileName = `${year}.${month}.${day}.png`;
const datedOutput = path.join(monthFolder, datedFileName);

// =============================
// 📁 创建目录
// =============================
fs.mkdirSync(monthFolder, { recursive: true });

// =============================
// 🚀 启动浏览器
// =============================
const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

const page = await browser.newPage();

// iPhone 锁屏分辨率
await page.setViewport({
  width: 1170,
  height: 2532,
  deviceScaleFactor: 2
});

await page.goto(HTML_URL, {
  waitUntil: "load"
});

// ⏱ 等导出图片真正出现在页面上，再截图
await page.waitForSelector("img");
await page.waitForFunction(() => {
  const img = document.querySelector("img");
  return Boolean(img && img.complete && img.naturalWidth > 0);
});

// =============================
// 📸 截图（只截一次）
// =============================
const buffer = await page.screenshot({
  fullPage: false
});

// 写入 today.png（始终覆盖）
fs.writeFileSync(TODAY_OUTPUT, buffer);

// 写入归档版本（每日独立文件）
fs.writeFileSync(datedOutput, buffer);

await browser.close();

console.log("✅ Wallpaper generated:");
console.log("   → today:", TODAY_OUTPUT);
console.log("   → archive:", datedOutput);
