// world-in-one-day-24nov — make.fun entry for bounty news-image-20261124.
//
// The poster (entry.png, committed in this repo) is a one-page newspaper of
// Tuesday 24 November 2026: 25 dated stories in the cream-and-navy broadsheet
// format of this series' winning editions, drawn entirely in code from
// cross-checked wire reporting (see render.mjs for the drawing and README.md
// for the story list). This entrypoint delivers the committed image to the
// judge's output path byte for byte, then verifies what landed there, so the
// run is fully deterministic, works offline, and fails loudly rather than
// handing the judge a bad file.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1_048_576; // kit gate: whole image at most 1 MiB
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const dst = process.env.OUTPUT_PATH ?? "/output/entry.png";

mkdirSync(dirname(dst), { recursive: true });
copyFileSync(src, dst);

const head = readFileSync(dst).subarray(0, PNG_MAGIC.length);
const isPng = PNG_MAGIC.every((b, i) => head[i] === b);
if (!isPng) throw new Error("delivered file is not a PNG");
const bytes = statSync(dst).size;
if (bytes > MAX_BYTES) throw new Error(`poster too large: ${bytes} bytes`);
console.log(`poster written to ${dst} (${bytes} bytes, PNG verified)`);
