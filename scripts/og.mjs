// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const slab = font('node_modules/@fontsource/alfa-slab-one/files/alfa-slab-one-latin-400-normal.woff2');
const sans = font('node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2');
const css = `@font-face{font-family:A;src:url(${slab})}@font-face{font-family:D;src:url(${sans});font-weight:100 1000}
*{margin:0;box-sizing:border-box}body{background:#f6f0e1;color:#1b1714;font-family:D}`;

const pizza = `<svg viewBox="0 0 400 400" width="560" height="560"><circle cx="200" cy="200" r="190" fill="#b9773a"/><circle cx="200" cy="200" r="185" fill="#e2a85c"/><circle cx="200" cy="200" r="153" fill="#c3241c"/>
<circle cx="148" cy="138" r="30" fill="#fffbf2"/><circle cx="258" cy="128" r="24" fill="#fffbf2"/><circle cx="118" cy="238" r="27" fill="#fffbf2"/><circle cx="214" cy="212" r="35" fill="#fffbf2"/><circle cx="292" cy="252" r="22" fill="#fffbf2"/><circle cx="184" cy="302" r="26" fill="#fffbf2"/>
<g fill="#2f6b33"><path transform="translate(196 150) rotate(-30)" d="M0 -24 C16 -13 16 13 0 24 C-16 13 -16 -13 0 -24Z"/><path transform="translate(270 205) rotate(40)" d="M0 -24 C16 -13 16 13 0 24 C-16 13 -16 -13 0 -24Z"/><path transform="translate(150 275) rotate(110)" d="M0 -24 C16 -13 16 13 0 24 C-16 13 -16 -13 0 -24Z"/></g>
<g stroke="#1b1714" stroke-opacity=".22" stroke-width="3"><line x1="200" y1="14" x2="200" y2="386"/><line x1="14" y1="200" x2="386" y2="200"/><line x1="68" y1="68" x2="332" y2="332"/><line x1="332" y1="68" x2="68" y2="332"/></g></svg>`;

const og = `<style>${css}
.w{width:1200px;height:630px;position:relative;overflow:hidden}
.top{height:74px;background:#d9bf92;border-bottom:12px solid #c7a874;display:flex;align-items:center;padding:0 70px}
.t{font-family:A;color:#9a1b14;border:3px solid #9a1b14;outline:1.5px solid #9a1b14;outline-offset:3px;padding:4px 12px;transform:rotate(-2deg);font-size:26px}
h1{position:absolute;left:70px;top:150px;width:640px;font-family:A;font-weight:400;color:#c3241c;font-size:86px;line-height:.98}
.s{position:absolute;left:70px;bottom:60px;font-size:27px;font-weight:600}
.s b{font-family:A;font-weight:400;font-size:40px;margin-right:10px}
.p{position:absolute;right:-90px;top:110px}
</style><div class="w"><div class="top"><span class="t">Pizza Di Nello · 100 % napoletana</span></div>
<h1>Pizza napolitaine au centre des Vergers</h1>
<p class="s"><b>4,9/5</b> 78 avis Google · Saint-Brice-sous-Forêt · 09 81 27 42 87</p>
<div class="p">${pizza}</div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#d9bf92;display:grid;place-items:center}</style>${pizza.replace('width="560" height="560"', 'width="150" height="150"')}`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(400);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
