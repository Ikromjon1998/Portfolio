import { chromium } from '@playwright/test';
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fontUrl = `file://${path.join(root, 'public/fonts', 'SpaceGrotesk-Variable.ttf')}`;
const out = (file) => path.join(root, 'public', file);
const tmpHtml = path.join(root, 'scripts/.icon.html');

// Same mark as favicon.svg (IO monogram + status dot), rendered with the real
// Space Grotesk so rasters don't depend on the viewer having the font.
// `rounded: false` fills the full square — iOS masks apple-touch-icons itself.
const html = (size, { rounded }) => `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'Space Grotesk';
    src: url('${fontUrl}');
    font-weight: 300 700;
  }
  * { margin: 0; box-sizing: border-box; }
  body { width: ${size}px; height: ${size}px; background: transparent; }
  .tile {
    width: 100%;
    height: 100%;
    background: #2440c7;
    border-radius: ${rounded ? '21.875%' : '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .io {
    font-family: 'Space Grotesk', sans-serif;
    font-size: ${Math.round(size * 0.469)}px;
    font-weight: 600;
    letter-spacing: -0.033em;
    color: #fafaf7;
    transform: translate(-${size * 0.008}px, ${size * 0.02}px);
  }
  .dot {
    position: absolute;
    width: 15.625%;
    height: 15.625%;
    border-radius: 50%;
    background: #2bc48a;
    left: 73.4375%;
    top: 6.25%;
  }
</style>
</head>
<body><div class="tile"><span class="io">IO</span><span class="dot"></span></div></body>
</html>`;

// .ico container with PNG-compressed entries (valid since Windows Vista and
// understood by every modern browser and crawler).
function packIco(pngs) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = 6 + 16 * count;
  for (const { size, data } of pngs) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
try {
  const render = async (size, options, file) => {
    await writeFile(tmpHtml, html(size, options));
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.goto(`file://${tmpHtml}`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: out(file), omitBackground: options.rounded });
    await page.close();
    console.log(`wrote public/${file}`);
  };

  await render(96, { rounded: true }, 'favicon-96x96.png');
  await render(48, { rounded: true }, 'favicon-48x48.png');
  await render(32, { rounded: true }, 'favicon-32x32.png');
  await render(16, { rounded: true }, 'favicon-16x16.png');
  await render(180, { rounded: false }, 'apple-touch-icon.png');

  const ico = packIco(
    await Promise.all(
      [16, 32, 48].map(async (size) => ({
        size,
        data: await readFile(out(`favicon-${size}x${size}.png`)),
      }))
    )
  );
  await writeFile(out('favicon.ico'), ico);
  console.log('wrote public/favicon.ico (16, 32, 48)');
} finally {
  await browser.close();
  await rm(tmpHtml, { force: true });
}
