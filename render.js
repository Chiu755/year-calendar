import puppeteer from "puppeteer";
import fs from "fs";

const URL = "https://chiu755.github.io/year-calendar/";
const OUTPUT = "output/today.png";

// 确保 output 目录存在
fs.mkdirSync("output", { recursive: true });

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

const page = await browser.newPage();

// iPhone 锁屏分辨率（你可以之后换）
await page.setViewport({
  width: 1170,
  height: 2532,
  deviceScaleFactor: 2
});

await page.goto(URL, {
  waitUntil: "networkidle0"
});

// ⏱ 等 canvas & JS 彻底画完（关键）
await new Promise(resolve => setTimeout(resolve, 2000));

await page.screenshot({
  path: OUTPUT,
  fullPage: false
});

await browser.close();

console.log("✅ Wallpaper generated:", OUTPUT);