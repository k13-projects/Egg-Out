import { chromium } from "playwright";
import fs from "node:fs";

const OUT = "/tmp/qa";
fs.mkdirSync(OUT, { recursive: true });
const URL = process.env.QA_URL || "http://localhost:9149/";
const VW = 1440, VH = 900;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 });

// ---- INTRO (time-based, before any scroll) ----
await page.goto(URL, { waitUntil: "domcontentloaded" });
const introT = [400, 1000, 1700, 2200, 2700, 3200, 3700];
for (let i = 0; i < introT.length; i++) {
  await page.waitForTimeout(i === 0 ? introT[0] : introT[i] - introT[i - 1]);
  await page.screenshot({ path: `${OUT}/intro-${i}-${introT[i]}ms.png` });
}

// wait for intro to finish
await sleep(1200);

// helper: hard scroll that also drives Lenis if present
async function scrollTo(y) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await sleep(750);
}

// ---- HERO ----
await scrollTo(0);
await page.screenshot({ path: `${OUT}/hero.png` });

// ---- BUILD (sandwich assembly) across its scroll range ----
const build = await page.evaluate(() => {
  const el = document.getElementById("build");
  return el ? { top: el.offsetTop, height: el.offsetHeight } : null;
});
if (build) {
  const range = build.height - VH;
  for (const f of [0.12, 0.3, 0.5, 0.7, 0.88, 1.0]) {
    await scrollTo(build.top + Math.round(range * f));
    await page.screenshot({ path: `${OUT}/build-${Math.round(f * 100)}.png` });
  }
}

// ---- SECTIONS ----
for (const id of ["about", "menu", "catering", "locations", "contact"]) {
  const top = await page.evaluate((id) => {
    const el = document.getElementById(id);
    return el ? el.offsetTop : null;
  }, id);
  if (top != null) {
    await scrollTo(Math.max(0, top + 40));
    await page.screenshot({ path: `${OUT}/sec-${id}.png` });
  }
}

// ---- FULL PAGE (tall) ----
await scrollTo(0);
await page.screenshot({ path: `${OUT}/fullpage.png`, fullPage: true });

// ---- collect console errors ----
const errs = [];
page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });

await browser.close();
console.log("QA screenshots written to", OUT);
