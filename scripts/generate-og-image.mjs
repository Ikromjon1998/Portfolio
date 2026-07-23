import { chromium } from '@playwright/test';
import { writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fonts = (file) => `file://${path.join(root, 'public/fonts', file)}`;
const outFile = path.join(root, 'public/og.png');
const tmpHtml = path.join(root, 'scripts/.og-card.html');

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'Space Grotesk';
    src: url('${fonts('SpaceGrotesk-Variable.ttf')}');
    font-weight: 300 700;
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('${fonts('IBMPlexMono-Regular.ttf')}');
    font-weight: 400;
  }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #15171c;
    color: #fafaf7;
    font-family: 'Space Grotesk', sans-serif;
    padding: 84px 88px 72px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .accent { position: absolute; left: 0; top: 0; bottom: 0; width: 12px; background: #2440c7; }
  .eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 22px;
    color: #6b82f0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  h1 { font-size: 92px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.04; margin-top: 22px; }
  .role { font-size: 34px; color: #a0a4ad; font-weight: 500; margin-top: 20px; }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 22px;
    color: #8e929a;
  }
  .chip { display: flex; align-items: center; gap: 14px; color: #eaeaed; }
  .pulse { width: 14px; height: 14px; border-radius: 50%; background: #2bc48a; }
</style>
</head>
<body>
  <div class="accent"></div>
  <div>
    <div class="eyebrow">Berlin · Laravel · React · AI</div>
    <h1>Ikromjon Ochilov</h1>
    <div class="role">Senior Full-Stack Engineer</div>
  </div>
  <div class="bottom">
    <div class="chip"><span class="pulse"></span>Available for projects</div>
    <div>ikromjon-ochilov.com</div>
  </div>
</body>
</html>`;

await writeFile(tmpHtml, html);
const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(`file://${tmpHtml}`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: outFile });
  console.log(`wrote ${outFile}`);
} finally {
  await browser.close();
  await rm(tmpHtml, { force: true });
}
