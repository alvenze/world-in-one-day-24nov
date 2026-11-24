// THE WORLD IN ONE DAY — Tuesday 24 November 2026
// One-page newspaper infographic, 1024x1024, cream/navy/red broadsheet in the
// format of the 22 Nov winner (kept) with all-new 24 Nov content and drawings.
// Engine: satori + @resvg/resvg-js + @fontsource fonts, imported from the
// audited install at ~/workspace/tools/news-poster (offline; no remote assets).
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const TOOLS = "/home/hatch/workspace/tools/news-poster";
const require = createRequire(TOOLS + "/package.json");
const satori = require("satori").default;
const { Resvg } = require("@resvg/resvg-js");

const F = (pkg, file) => readFile(`${TOOLS}/node_modules/@fontsource/${pkg}/files/${file}`);
const fonts = [
  { name: "Archivo", data: await F("archivo", "archivo-latin-500-normal.woff"), weight: 500, style: "normal" },
  { name: "Archivo", data: await F("archivo", "archivo-latin-700-normal.woff"), weight: 700, style: "normal" },
  { name: "Archivo", data: await F("archivo", "archivo-latin-800-normal.woff"), weight: 800, style: "normal" },
  { name: "Archivo", data: await F("archivo", "archivo-latin-900-normal.woff"), weight: 900, style: "normal" },
  { name: "Inter", data: await F("inter", "inter-latin-400-normal.woff"), weight: 400, style: "normal" },
  { name: "Inter", data: await F("inter", "inter-latin-500-normal.woff"), weight: 500, style: "normal" },
  { name: "Inter", data: await F("inter", "inter-latin-600-normal.woff"), weight: 600, style: "normal" },
  { name: "Playfair Display", data: await F("playfair-display", "playfair-display-latin-800-italic.woff"), weight: 800, style: "italic" },
  { name: "Playfair Display", data: await F("playfair-display", "playfair-display-latin-900-normal.woff"), weight: 900, style: "normal" },
];

const h = (type, props, children) => ({ type, props: { ...props, children } });
const div = (style, children) => h("div", { style }, children);
const span = (style, children) => h("span", { style }, children);
const svgEl = (w, ht, viewBox, children) => h("svg", { width: w, height: ht, viewBox }, children);
const el = (type, props) => h(type, props, undefined);

// palette — the winner's series look
const PAPER = "#f6f1e3";
const PAPER2 = "#efe8d5";
const NAVY = "#17293f";
const NAVY2 = "#1f3a56";
const DEEP = "#101f33";
const RED = "#b3372a";
const INK = "#23231f";
const MUT = "#5c584c";
const LINE = "#c8c0a8";
const SKY = "#dfe5ea";
const SEA = "#274b63";
const GOLD = "#e8b64c";
const ORANGE = "#e8873a";

// ---------- top-story illustration panels (308 x 112 viewBox) ----------
// 1 · Asia markets: dawn sky, rising bars, red arrow arcing up, sun
const illAsia = svgEl(308, 92, "0 0 308 112", [
  el("rect", { x: 0, y: 0, width: 308, height: 112, fill: SKY }),
  el("circle", { cx: 268, cy: 30, r: 16, fill: GOLD }),
  el("circle", { cx: 268, cy: 30, r: 24, fill: GOLD, opacity: 0.25 }),
  // ascending bars
  el("rect", { x: 26, y: 78, width: 30, height: 22, fill: NAVY2 }),
  el("rect", { x: 70, y: 68, width: 30, height: 32, fill: NAVY2 }),
  el("rect", { x: 114, y: 56, width: 30, height: 44, fill: NAVY }),
  el("rect", { x: 158, y: 42, width: 30, height: 58, fill: NAVY }),
  el("rect", { x: 202, y: 26, width: 30, height: 74, fill: NAVY }),
  // the arrow of the rebound
  el("path", { d: "M18 84 C80 78 130 58 196 30 L236 14", stroke: RED, strokeWidth: 5, fill: "none" }),
  el("path", { d: "M236 14 l-20 1 12 15 Z", fill: RED }),
  el("rect", { x: 0, y: 100, width: 308, height: 3, fill: NAVY }),
]);
// 2 · Jakarta VP: assembly hall dome and columns, two candidate busts
const illVP = svgEl(308, 92, "0 0 308 112", [
  el("rect", { x: 0, y: 0, width: 308, height: 112, fill: PAPER2 }),
  // dome
  el("path", { d: "M84 52 A70 40 0 0 1 224 52 Z", fill: NAVY }),
  el("rect", { x: 150, y: 6, width: 8, height: 12, fill: NAVY }),
  el("circle", { cx: 154, cy: 5, r: 4, fill: RED }),
  el("rect", { x: 74, y: 52, width: 160, height: 6, fill: NAVY }),
  // columns
  ...[92, 122, 152, 182, 212].map((x) => el("rect", { x, y: 58, width: 9, height: 30, fill: NAVY2 })),
  el("rect", { x: 70, y: 88, width: 168, height: 6, fill: NAVY }),
  el("rect", { x: 0, y: 100, width: 308, height: 3, fill: LINE }),
  // two candidate busts in front
  el("g", { transform: "translate(40 62)" }, [
    el("circle", { cx: 0, cy: 8, r: 9, fill: RED }),
    el("path", { d: "M-13 34 a13 12 0 0 1 26 0 Z", fill: RED }),
  ]),
  el("g", { transform: "translate(268 62)" }, [
    el("circle", { cx: 0, cy: 8, r: 9, fill: NAVY }),
    el("path", { d: "M-13 34 a13 12 0 0 1 26 0 Z", fill: NAVY }),
  ]),
]);
// 3 · Police chief suspect: officer's cap with star badge, red tag ribbon
const illPolice = svgEl(308, 92, "0 0 308 112", [
  el("rect", { x: 0, y: 0, width: 308, height: 112, fill: SKY }),
  // cap crown
  el("path", { d: "M84 62 C84 34 112 22 154 22 C196 22 224 34 224 62 L212 62 C212 44 188 34 154 34 C120 34 96 44 96 62 Z", fill: NAVY }),
  el("rect", { x: 84, y: 62, width: 140, height: 7, fill: GOLD }),
  // peak
  el("path", { d: "M92 69 H216 C216 80 190 86 154 86 C118 86 92 80 92 69 Z", fill: DEEP }),
  // star badge
  el("path", { d: "M154 40 L158 50 L169 50 L160 57 L163 68 L154 61 L145 68 L148 57 L139 50 L150 50 Z", fill: GOLD }),
  // the red tag ribbon across the corner
  el("g", { transform: "rotate(24 268 26)" }, [
    el("rect", { x: 216, y: 16, width: 104, height: 20, fill: RED }),
  ]),
  el("rect", { x: 0, y: 100, width: 308, height: 3, fill: NAVY }),
]);

// ---------- mini strips for the grid (148 x 34 viewBox) ----------
const mini = (children) => svgEl(148, 26, "0 0 148 34", [el("rect", { x: 0, y: 0, width: 148, height: 34, fill: SKY }), ...children]);
const minis = {
  hague: mini([
    el("rect", { x: 0, y: 29, width: 148, height: 5, fill: NAVY }),
    el("rect", { x: 71, y: 5, width: 6, height: 22, fill: NAVY }),
    el("path", { d: "M40 10 H108 M74 10 V6", stroke: NAVY, strokeWidth: 3, fill: "none" }),
    el("path", { d: "M40 10 L30 22 H50 Z", fill: NAVY2 }),
    el("path", { d: "M108 10 L98 22 H118 Z", fill: NAVY2 }),
    el("rect", { x: 62, y: 27, width: 24, height: 3, fill: RED }),
  ]),
  brussels: mini([
    el("circle", { cx: 40, cy: 17, r: 13, fill: NAVY }),
    ...Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2;
      return el("circle", { cx: (40 + 8.5 * Math.cos(a)).toFixed(1), cy: (17 + 8.5 * Math.sin(a)).toFixed(1), r: 1.8, fill: GOLD });
    }),
    el("rect", { x: 84, y: 6, width: 40, height: 22, fill: "#fffdf4", stroke: NAVY, strokeWidth: 2 }),
    el("rect", { x: 91, y: 12, width: 26, height: 3.4, fill: MUT }),
    el("rect", { x: 91, y: 19, width: 18, height: 3.4, fill: MUT }),
    el("path", { d: "M88 26 L120 8", stroke: RED, strokeWidth: 3.4, fill: "none" }),
  ]),
  cucuta: mini([
    el("rect", { x: 0, y: 27, width: 148, height: 7, fill: NAVY }),
    el("rect", { x: 12, y: 18, width: 22, height: 9, fill: NAVY2 }),
    el("rect", { x: 44, y: 15, width: 18, height: 12, fill: NAVY2 }),
    el("rect", { x: 96, y: 19, width: 26, height: 8, fill: NAVY2 }),
    el("g", { transform: "translate(76 8)" }, [
      el("rect", { x: -8, y: -2.4, width: 16, height: 5, fill: RED }),
      el("circle", { cx: -11, cy: -4, r: 3.4, fill: "none", stroke: RED, strokeWidth: 1.8 }),
      el("circle", { cx: 11, cy: -4, r: 3.4, fill: "none", stroke: RED, strokeWidth: 1.8 }),
      el("path", { d: "M0 3 v5", stroke: RED, strokeWidth: 2 }),
    ]),
    el("path", { d: "M76 17 l-3 6 M84 17 l2 6", stroke: ORANGE, strokeWidth: 2, fill: "none" }),
  ]),
  iowa: mini([
    el("rect", { x: 0, y: 0, width: 148, height: 34, fill: PAPER2 }),
    el("g", { transform: "translate(38 17)" }, [
      el("rect", { x: -13, y: -10, width: 26, height: 20, rx: 4, fill: NAVY }),
      el("rect", { x: -13, y: -3, width: 26, height: 3.4, fill: GOLD }),
      el("rect", { x: -4, y: -14, width: 8, height: 5, fill: NAVY }),
    ]),
    el("g", { transform: "translate(102 17)" }, [
      el("path", { d: "M0 -12 L10.4 -6 V6 L0 12 L-10.4 6 V-6 Z", fill: RED }),
      el("rect", { x: -6.4, y: -2.2, width: 4.6, height: 4.6, fill: "#fffdf4" }),
      el("rect", { x: 1.8, y: -2.2, width: 4.6, height: 4.6, fill: "#fffdf4" }),
    ]),
  ]),
  cikande: mini([
    el("rect", { x: 0, y: 27, width: 148, height: 7, fill: NAVY }),
    el("rect", { x: 18, y: 13, width: 62, height: 14, fill: NAVY2 }),
    el("path", { d: "M18 13 L29 6 L40 13 L51 6 L62 13 L73 6 L80 13", stroke: NAVY, strokeWidth: 3, fill: "none" }),
    el("path", { d: "M40 13 C34 5 44 3 40 -4 C50 1 50 9 44 13 Z", fill: RED, transform: "translate(0 7)" }),
    el("path", { d: "M62 13 C57 7 65 5 62 -1 C70 3 69 10 65 13 Z", fill: ORANGE, transform: "translate(0 7)" }),
    el("circle", { cx: 108, cy: 11, r: 6, fill: "#9aa0a4", opacity: 0.7 }),
    el("circle", { cx: 119, cy: 6, r: 8, fill: "#a8adb0", opacity: 0.5 }),
    el("path", { d: "M96 27 l6 -8 6 8", stroke: RED, strokeWidth: 2.4, fill: "none" }),
  ]),
  riau: mini([
    el("rect", { x: 0, y: 0, width: 148, height: 34, fill: SKY }),
    el("rect", { x: 0, y: 20, width: 148, height: 14, fill: SEA }),
    el("path", { d: "M14 20 L28 11 L42 20 Z", fill: RED }),
    el("rect", { x: 19, y: 20, width: 18, height: 6, fill: NAVY2 }),
    el("path", { d: "M58 20 L74 9 L90 20 Z", fill: NAVY }),
    el("rect", { x: 65, y: 20, width: 18, height: 7, fill: NAVY2 }),
    el("path", { d: "M104 20 L116 13 L128 20 Z", fill: RED }),
    el("path", { d: "M6 26 h22 M44 29 h26 M96 26 h30 M116 30 h22", stroke: "#e8e2cd", strokeWidth: 1.8, fill: "none", opacity: 0.8 }),
  ]),
  jakarta: mini([
    el("rect", { x: 0, y: 0, width: 148, height: 34, fill: DEEP }),
    el("path", { d: "M28 20 a10 8 0 1 1 4 -15 a12 10 0 0 1 20 3 a8 7 0 0 1 -2 12 Z", fill: "#d7dee2" }),
    el("path", { d: "M34 24 l-2 5 M46 24 l-2 5 M58 24 l-2 5", stroke: "#7fb2d9", strokeWidth: 2.4, fill: "none" }),
    el("path", { d: "M118 6 a9 9 0 1 0 6 15 a11 11 0 0 1 -6 -15 Z", fill: GOLD }),
    el("circle", { cx: 96, cy: 8, r: 1.4, fill: "#fffdf4" }),
    el("circle", { cx: 134, cy: 22, r: 1.4, fill: "#fffdf4" }),
  ]),
  lahore: mini([
    el("rect", { x: 0, y: 0, width: 148, height: 34, fill: "#e6dfcd" }),
    el("circle", { cx: 124, cy: 9, r: 6.4, fill: ORANGE, opacity: 0.6 }),
    el("rect", { x: 8, y: 16, width: 13, height: 18, fill: NAVY, opacity: 0.8 }),
    el("rect", { x: 27, y: 9, width: 17, height: 25, fill: NAVY, opacity: 0.62 }),
    el("rect", { x: 50, y: 19, width: 11, height: 15, fill: NAVY, opacity: 0.85 }),
    el("rect", { x: 67, y: 12, width: 15, height: 22, fill: NAVY, opacity: 0.55 }),
    el("rect", { x: 0, y: 22, width: 148, height: 5, fill: "#b9b09a", opacity: 0.65 }),
    el("rect", { x: 0, y: 29, width: 148, height: 5, fill: "#a89e86", opacity: 0.85 }),
  ]),
  berlin: mini([
    el("rect", { x: 0, y: 28, width: 148, height: 6, fill: NAVY }),
    el("rect", { x: 22, y: 10, width: 46, height: 18, fill: NAVY2 }),
    el("path", { d: "M18 10 L45 2 L72 10 Z", fill: NAVY }),
    el("rect", { x: 41, y: 19, width: 8, height: 9, fill: PAPER }),
    el("rect", { x: 29, y: 14, width: 6, height: 6, fill: SKY }),
    el("rect", { x: 55, y: 14, width: 6, height: 6, fill: SKY }),
    el("g", { transform: "translate(104 17)" }, [
      el("rect", { x: -17, y: -10, width: 34, height: 20, fill: "#fffdf4", stroke: NAVY, strokeWidth: 2 }),
      el("path", { d: "M-17 -10 L0 3 L17 -10", stroke: NAVY, strokeWidth: 2, fill: "none" }),
      el("circle", { cx: 13, cy: -13, r: 6.4, fill: RED }),
      el("rect", { x: 11.8, y: -17.4, width: 2.4, height: 6, fill: "#fffdf4" }),
      el("circle", { cx: 13, cy: -9.2, r: 1.4, fill: "#fffdf4" }),
    ]),
  ]),
  delhi: mini([
    el("rect", { x: 0, y: 27, width: 148, height: 7, fill: NAVY }),
    el("path", { d: "M22 22 L96 22 L118 14 L124 14 L104 22 L126 22 L126 25 L20 25 Z", fill: NAVY2 }),
    el("path", { d: "M52 22 L62 12 L70 12 L64 22 Z", fill: RED }),
    el("circle", { cx: 44, cy: 27, r: 3.4, fill: DEEP }),
    el("circle", { cx: 100, cy: 27, r: 3.4, fill: DEEP }),
    el("path", { d: "M128 8 l8 8 M136 8 l-8 8", stroke: RED, strokeWidth: 2.6, fill: "none" }),
  ]),
  crypto: mini([
    el("rect", { x: 0, y: 0, width: 148, height: 34, fill: PAPER2 }),
    el("circle", { cx: 28, cy: 17, r: 12, fill: GOLD }),
    el("circle", { cx: 28, cy: 17, r: 12, fill: "none", stroke: NAVY, strokeWidth: 2 }),
    el("path", { d: "M24.5 9.5 V24.5 M24.5 10.5 H29 A3.4 3.4 0 0 1 29 17.3 H24.5 M24.5 17.3 H30 A3.4 3.4 0 0 1 30 24.1 H24.5", stroke: NAVY, strokeWidth: 2.2, fill: "none" }),
    el("path", { d: "M52 24 L72 27 L88 16 L104 20 L124 8", stroke: RED, strokeWidth: 2.6, fill: "none" }),
    el("path", { d: "M124 8 l-10 1 5 8 Z", fill: RED }),
    el("path", { d: "M52 30 H132", stroke: LINE, strokeWidth: 1.4, fill: "none" }),
  ]),
  tehran: mini([
    el("rect", { x: 0, y: 29, width: 148, height: 5, fill: NAVY }),
    el("path", { d: "M30 8 L74 2 L118 8 Z", fill: NAVY }),
    ...[40, 58, 76, 94].map((x) => el("rect", { x, y: 10, width: 7, height: 17, fill: NAVY2 })),
    el("rect", { x: 32, y: 27, width: 84, height: 3, fill: NAVY }),
    el("circle", { cx: 122, cy: 20, r: 10, fill: "none", stroke: RED, strokeWidth: 3 }),
    el("path", { d: "M115 27 L129 13", stroke: RED, strokeWidth: 3, fill: "none" }),
  ]),
};

// ---------- dotted world map (schematic, sampled from continent shapes) ----------
const inEllipse = (lon, lat, cLon, cLat, rLon, rLat) => ((lon - cLon) / rLon) ** 2 + ((lat - cLat) / rLat) ** 2 <= 1;
const LAND = [
  [-100, 49, 40, 13], [-84, 38, 20, 9], [-155, 64, 14, 7], [-92, 15, 11, 4], [-42, 74, 13, 6],
  [-62, -11, 11, 12], [-70, -27, 6, 10],
  [16, 51, 17, 7], [8, 44, 11, 5], [16, 64, 10, 6], [-2, 54, 3.5, 4], [28, 41, 7, 4],
  [20, 7, 18, 12], [23, -13, 12, 9], [47, -19, 3, 5],
  [47, 29, 15, 8], [78, 22, 10, 10], [104, 36, 21, 11], [62, 56, 26, 9], [100, 63, 34, 8],
  [102, 14, 6, 8], [113, -1, 11, 3], [122, -3, 6, 3], [138, 38, 4.5, 5], [128, 37, 3, 3.5],
  [134, -25, 12, 6], [172, -42, 3.5, 4],
];
const isLand = (lon, lat) => LAND.some(([a, b, c, d]) => inEllipse(lon, lat, a, b, c, d));
const MAP_W = 316, MAP_H = 148;
const PINS = [];
function worldMap() {
  const dots = [];
  for (let lon = -178; lon <= 178; lon += 5.1) {
    for (let lat = 80; lat >= -54; lat -= 5.4) {
      if (isLand(lon, lat)) {
        const x = ((lon + 180) / 360) * MAP_W, y = ((82 - lat) / 140) * MAP_H;
        dots.push(el("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: 1.7, fill: NAVY, opacity: 0.72 }));
      }
    }
  }
  const pinAt = (n, lon, lat, dx = 0, dy = 0) => {
    PINS.push({ n, x: ((lon + 180) / 360) * MAP_W + dx, y: ((82 - lat) / 140) * MAP_H + dy });
  };
  pinAt(1, 127, 37, 2, -2); // Seoul
  pinAt(2, 107, -6, 0, 2); // Jakarta
  pinAt(4, 5, 52, -4, -3); // The Hague
  pinAt(5, 4, 51, 5, 4); // Brussels
  pinAt(6, -72, 8); // Cucuta
  pinAt(7, -93, 43, -2, 0); // Iowa
  pinAt(8, 106, -6, 7, 5); // Cikande
  pinAt(11, 74, 32, 3, 0); // Lahore
  pinAt(15, 51, 35, 2, 2); // Tehran
  pinAt(16, 175, -41); // Wellington
  return svgEl(MAP_W, MAP_H, `0 0 ${MAP_W} ${MAP_H}`, dots);
}
// satori cannot draw SVG <text>, so the numbered pins are HTML badges
// absolutely positioned over the dotted map at the same coordinates.
const pinBadges = () =>
  PINS.map((p) =>
    div(
      {
        position: "absolute", left: p.x - 6.5, top: p.y - 6.5, width: 13, height: 13,
        borderRadius: 7, backgroundColor: RED, border: "1.4px solid #fffdf4",
        display: "flex", alignItems: "center", justifyContent: "center",
      },
      [span({ fontFamily: "Archivo", fontWeight: 800, fontSize: 7.5, color: "#fffdf4" }, String(p.n))],
    ));

// ---------- content (all facts cross-checked from live sources, see evidence/news-sources.md) ----------
const TOP = [
  {
    n: 1, kicker: "TOKYO · SEOUL · TAIPEI — MARKETS", ill: illAsia, chip: "ASIA'S BEST DAY SINCE JULY",
    headline: "Asia leaps as Huang's return revives the AI trade",
    summary: "Asian shares climbed 4.6% on Tuesday, their best day since July, after Nvidia reinstated Jensen Huang as chief executive on Monday and its stock leapt 31%, restoring $952bn in value. Seoul rose 7.5% and Taipei 9.1% as the battered AI trade roared back.",
    meta: "(Reuters)", tag: "REPORTED",
  },
  {
    n: 2, kicker: "JAKARTA — POLITICS", ill: illVP, chip: "TWO NAMES GO TO THE MPR",
    headline: "Prabowo names Amran and Sugiono to succeed Gibran",
    summary: "President Prabowo Subianto has formally sent the assembly two candidates to succeed Gibran Rakabuming Raka: agriculture minister Andi Amran Sulaiman and coordinating minister Sugiono. The MPR will sit to elect one of them on 11 December in Jakarta.",
    meta: "(Metrotoday, Industry.co.id)", tag: "REPORTED",
  },
  {
    n: 3, kicker: "JAKARTA — POLICE", ill: illPolice, chip: "THE CHIEF IS A SUSPECT",
    headline: "Police chief is named a treason suspect",
    summary: "Bareskrim investigators have named national police chief Listyo Sigit Prabowo and five other personnel as suspects in an alleged treason plot, describing a three-stage plan. Fourteen sites were raided, among them five posts in South Jakarta and Bogor.",
    meta: "(Bataviapos, Metrotoday)", tag: "REPORTED",
  },
];

const GRID = [
  { n: 4, mini: "hague", kicker: "THE HAGUE · COURT", headline: "Fourteen countries acknowledge the ruling", summary: "Britain and 13 others say Myanmar violated the Genocide Convention; London sanctions five officers. (France 24)" },
  { n: 5, mini: "brussels", kicker: "BRUSSELS · SANCTIONS", headline: "EU drafts a 22nd Russia package", summary: "Banks and crypto platforms targeted; Russian teams and athletes face a flag ban. (WH News)" },
  { n: 6, mini: "cucuta", kicker: "CÚCUTA · COLOMBIA", headline: "Drones strike a city police HQ", summary: "A first urban drone attack: 3 civilians hurt, one a baby; over 60 homes damaged. (AP)" },
  { n: 7, mini: "iowa", kicker: "IOWA · UNITED STATES", headline: "Court clears a blast Trump paused", summary: "Judges lifted the stay on detonating 68 barrels of lead azide; Wednesday waits. (Reuters)" },
  { n: 8, mini: "cikande", kicker: "CIKANDE · FIRE", headline: "The search at the factory goes on", summary: "Six more body bags brought out and 33 workers still sought, local reports say. (Lentera)" },
  { n: 9, mini: "riau", kicker: "RIAU · FLOODS", headline: "Floods leave 18,600 people affected", summary: "Water across Rohil, Rohul and Kuansing; the province weighs an alert status. (Newest ID)" },
  { n: 10, mini: "jakarta", kicker: "JAKARTA · WEATHER", headline: "11 provinces on heavy-rain alert", summary: "BMKG warns of flash floods and landslides; tonight's supermoon lifts tides. (BMKG)" },
  { n: 11, mini: "lahore", kicker: "LAHORE · AIR", headline: "Lahore's air is the world's worst again", summary: "AQI crossed 500 again; eight Pakistani cities sit among the worst ranked. (TOI)" },
  { n: 12, mini: "berlin", kicker: "BERLIN · SCHOOLS", headline: "Bomb threats emailed to 450 schools", summary: "Schools across Germany received the threats by email, the Times of India reports. (TOI)" },
  { n: 13, mini: "delhi", kicker: "DELHI · AVIATION", headline: "Pilots press Delhi over SpiceJet", summary: "The pilots' federation cites unpaid salaries, grounded jets and mounting debts. (Jagran)" },
  { n: 14, mini: "crypto", kicker: "CRYPTO · MARKETS", headline: "Bitcoin steadies near $61,000", summary: "A bounce from a two-year low; November ETF outflows hit $4.14bn, fear at 11. (CoinDesk)" },
  { n: 15, mini: "tehran", kicker: "WASHINGTON · IRAN", headline: "US sanctions Iran's shadow bankers", summary: "Two dozen exchange houses and front firms hit; $15bn of activity traced. (Reuters)" },
];

const ALSO = [
  [16, "Wellington", "NZ bat out 120 overs to draw; India's 720/9 is a record in NZ (Cricbuzz)"],
  [17, "Washington", "Trump targets Newsom in a DOJ speech on violent crime (SCMP)"],
  [18, "Jerusalem", "Eisenkot calls settler arson attacks 'Jewish terrorism' (WH News)"],
  [19, "Benghazi", "Ukraine claims the sinking; Albania denies hosting the drones (TASS)"],
  [20, "Beijing", "Official sentenced to death for leaking 100 intelligence reports (TOI)"],
  [21, "Jackson", "Ex-mayor gets 37 months in prison in a bribery scheme (AP)"],
  [22, "Denpasar", "Immigration foils two Indonesians bound for Russia's army (Newest ID)"],
  [23, "Sumedang", "Eight-vehicle pile-up kills six on the Bandung–Cirebon road (Lentera)"],
  [24, "Jakarta", "PUBG Mobile Flash passes 24.2m downloads in 11 days (Industry)"],
  [25, "Maranello", "Ferrari unveils the 296 Challenge Stradale and Evo (Jagran)"],
];

const STATS = [
  ["+31%", "Nvidia's leap as Huang returned; $952bn restored (CNN)"],
  ["+9.1%", "Taiwan shares' Tuesday jump in Asia's AI rebound"],
  ["14", "countries acknowledge the ICJ's Rohingya ruling"],
  ["11", "Indonesian provinces on heavy-rain alert (BMKG)"],
  ["18,600", "people affected by flooding across Riau"],
  ["$4.14bn", "of November outflows from spot bitcoin ETFs"],
];

const REGIONS = [["EUROPE", 4], ["MIDDLE EAST", 2], ["AMERICAS", 4], ["ASIA-PACIFIC", 12], ["AFRICA", 1], ["OCEANIA", 1], ["WORLD", 1]];

const TIMELINE = [
  ["TONIGHT", "Supermoon, Indonesia"],
  ["MEDAN", "Langkat trial opens"],
  ["WED", "Teachers' Day (ID)"],
  ["WED", "Iowa blast decision"],
  ["27 NOV", "2nd Test, Christchurch"],
  ["11 DEC", "MPR elects a VP"],
];

// ---------- layout ----------
const kick = (n, text, size = 10.5) =>
  div({ display: "flex", alignItems: "baseline" }, [
    span({ fontFamily: "Archivo", fontWeight: 900, fontSize: size + 3, color: RED, marginRight: 6 }, String(n)),
    span({ fontFamily: "Archivo", fontWeight: 700, fontSize: size, letterSpacing: 1.6, color: NAVY }, text),
  ]);

const tagChip = (t) =>
  span({ fontFamily: "Archivo", fontWeight: 800, fontSize: 8, letterSpacing: 1.2, color: RED, border: `1px solid ${RED}`, padding: "1px 4px" }, "■ " + t);

function topCard(s) {
  return div({ display: "flex", flexDirection: "column", width: 312 }, [
    div({ display: "flex", position: "relative" }, [
      s.ill,
      div({ position: "absolute", top: 6, left: 6, backgroundColor: NAVY, padding: "2px 6px" }, [
        span({ fontFamily: "Archivo", fontWeight: 800, fontSize: 8.5, letterSpacing: 1.2, color: "#fffdf4" }, s.chip),
      ]),
    ]),
    div({ marginTop: 5 }, [kick(s.n, s.kicker, 10)]),
    span({ fontFamily: "Playfair Display", fontWeight: 900, fontSize: 20.5, lineHeight: 1.12, color: NAVY, marginTop: 4 }, s.headline),
    span({ fontFamily: "Inter", fontWeight: 400, fontSize: 11, lineHeight: 1.38, color: INK, marginTop: 5 }, s.summary),
    div({ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }, [
      span({ fontFamily: "Inter", fontWeight: 500, fontSize: 9.5, color: MUT }, s.meta),
      tagChip(s.tag),
    ]),
  ]);
}

function gridCell(s) {
  return div({ display: "flex", flexDirection: "column", width: 151 }, [
    minis[s.mini],
    div({ marginTop: 4 }, [kick(s.n, s.kicker, 7.6)]),
    span({ fontFamily: "Archivo", fontWeight: 800, fontSize: 12.5, lineHeight: 1.16, color: NAVY, marginTop: 3 }, s.headline),
    span({ fontFamily: "Inter", fontWeight: 400, fontSize: 9.8, lineHeight: 1.32, color: INK, marginTop: 3 }, s.summary),
  ]);
}

const alsoItem = ([n, place, text]) =>
  div({ display: "flex", marginBottom: 3.5 }, [
    span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 10.5, color: RED, marginRight: 5 }, String(n)),
    span({ fontFamily: "Inter", fontWeight: 400, fontSize: 10, lineHeight: 1.24, color: INK }, [
      span({ fontFamily: "Inter", fontWeight: 600, fontSize: 10, color: NAVY }, place + " · "),
      text,
    ]),
  ]);

function poster() {
  return div(
    { display: "flex", flexDirection: "column", width: 1024, height: 1024, backgroundColor: PAPER, padding: "12px 0 0 0", fontFamily: "Inter" },
    [
      div({ display: "flex", flexDirection: "column", width: 976, height: 1012, marginLeft: 24 }, [
      // masthead line
      div({ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `2px solid ${NAVY}`, paddingBottom: 5 }, [
        span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 13, letterSpacing: 3, color: NAVY }, "THE WORLD IN ONE DAY"),
        span({ fontFamily: "Archivo", fontWeight: 700, fontSize: 10.5, letterSpacing: 2, color: MUT }, "25 STORIES · 7 REGIONS · EVERY ONE DATED TUESDAY 24 NOVEMBER 2026"),
      ]),
      // title
      span({ fontFamily: "Playfair Display", fontWeight: 900, fontSize: 43, lineHeight: 1.04, color: NAVY, marginTop: 5 }, "Tuesday 24 November 2026"),
      span({ fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: 800, fontSize: 15.5, color: INK, marginTop: 3 },
        "Asia's markets leap on the AI king's return · Prabowo picks two for the vice-presidency · Jakarta's police chief is a suspect"),
      // stat band
      div({ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, marginTop: 8, padding: "5px 2px 4px" },
        STATS.map(([n, label]) =>
          div({ display: "flex", flexDirection: "column", width: 152 }, [
            span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 29, lineHeight: 1, color: NAVY }, n),
            span({ fontFamily: "Inter", fontWeight: 500, fontSize: 9.3, lineHeight: 1.25, color: MUT, marginTop: 2 }, label),
          ]))),
      // region strip
      div({ display: "flex", justifyContent: "space-between", backgroundColor: NAVY, marginTop: 7, padding: "4px 12px" },
        REGIONS.map(([name, c]) =>
          div({ display: "flex", alignItems: "baseline" }, [
            span({ fontFamily: "Archivo", fontWeight: 700, fontSize: 11.5, letterSpacing: 1.5, color: "#fffdf4", marginRight: 5 }, name),
            span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 12.5, color: "#e8873a" }, String(c)),
          ]))),
      // timeline strip
      div({ display: "flex", alignItems: "center", backgroundColor: DEEP, marginTop: 5, padding: "4px 12px" }, [
        span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 9.5, letterSpacing: 1, color: "#e8b64c", marginRight: 12 }, "DAY AHEAD"),
        ...TIMELINE.map(([t, label], i) =>
          div({ display: "flex", alignItems: "baseline", marginRight: i < TIMELINE.length - 1 ? 12 : 0 }, [
            span({ fontFamily: "Archivo", fontWeight: 800, fontSize: 9.8, color: "#e8873a", marginRight: 5 }, t),
            span({ fontFamily: "Inter", fontWeight: 500, fontSize: 9.8, color: "#eef0ea" }, label),
          ])),
      ]),
      // top stories
      div({ display: "flex", justifyContent: "space-between", marginTop: 8 }, TOP.map(topCard)),
      // grid rows
      div({ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${LINE}`, marginTop: 7, paddingTop: 6 }, GRID.slice(0, 6).map(gridCell)),
      div({ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${LINE}`, marginTop: 6, paddingTop: 6 }, GRID.slice(6, 12).map(gridCell)),
      // bottom: map + also on
      div({ display: "flex", borderTop: `1px solid ${LINE}`, marginTop: 6, paddingTop: 5 }, [
        div({ display: "flex", flexDirection: "column", width: 330 }, [
          span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 11.5, letterSpacing: 2, color: NAVY }, "WHERE IT HAPPENED"),
          div({ position: "relative", width: MAP_W, height: MAP_H, marginTop: 4 }, [worldMap(), ...pinBadges()]),
        ]),
        div({ display: "flex", flexDirection: "column", flex: 1, marginLeft: 18 }, [
          span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 11.5, letterSpacing: 2, color: NAVY }, "ALSO ON TUESDAY 24 NOVEMBER — 10 MORE STORIES"),
          div({ display: "flex", marginTop: 5 }, [
            div({ display: "flex", flexDirection: "column", width: 306 }, ALSO.slice(0, 5).map(alsoItem)),
            div({ display: "flex", flexDirection: "column", width: 306, marginLeft: 14 }, ALSO.slice(5, 10).map(alsoItem)),
          ]),
        ]),
      ]),
      // date check
      div({ border: `1.5px solid ${RED}`, marginTop: 6, padding: "4px 10px", display: "flex", alignItems: "center" }, [
        span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 10.5, letterSpacing: 1.5, color: RED, marginRight: 10 }, "DATE CHECK"),
        span({ fontFamily: "Inter", fontWeight: 400, fontSize: 10.3, color: INK },
          "Left out as other days' news: the ICJ's Rohingya ruling itself (Thu) · Senegal migrant boat sinking (Wed) · Zanzibar's six-hotel fire (Sat) · Waymo's freeway ban (11 Nov)"),
      ]),
      // sources + certainty
      div({ display: "flex", flexDirection: "column", marginTop: 5 }, [
        span({ fontFamily: "Inter", fontWeight: 400, fontSize: 9.5, lineHeight: 1.3, color: MUT },
          "Sources: Reuters, AP, AFP via France 24, CNN, Al Jazeera, Arab News, CoinDesk, Times of India, Jagran Josh, Metrotoday, Bataviapos, Lentera Nusantara, Cricbuzz. Pictures drawn in code."),
        span({ fontFamily: "Inter", fontWeight: 600, fontSize: 9.5, color: NAVY, marginTop: 1 },
          "CERTAINTY: REPORTED = carried by the wires and cross-checked · CLAIM = one side's account, labelled as such · FORECAST = still to happen when drawn"),
      ]),
      // footer band
      div({ display: "flex", justifyContent: "space-between", backgroundColor: NAVY, marginTop: "auto", padding: "5px 12px" }, [
        span({ fontFamily: "Archivo", fontWeight: 900, fontSize: 10.5, letterSpacing: 2.5, color: "#fffdf4" }, "THE WORLD IN ONE DAY"),
        span({ fontFamily: "Archivo", fontWeight: 700, fontSize: 10.5, letterSpacing: 2, color: "#e8b64c" }, "TUESDAY 24 NOVEMBER 2026 · ONE PAGE"),
      ]),
      ]),
    ]);
}

const tree = poster();
const svg = await satori(tree, { width: 1024, height: 1024, fonts });
const png = new Resvg(svg, { fitTo: { mode: "width", value: 1024 } }).render().asPng();
const out = new URL("./entry.png", import.meta.url).pathname;
await writeFile(out, png);
console.log("wrote", out, png.length, "bytes");
