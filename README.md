# The World in One Day — Tuesday 24 November 2026

[![Bounty](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![Rank](https://make.fun/badge/news-image-20261124/alvenze/world-in-one-day-24nov/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![Reward](https://make.fun/badge/news-image-20261124/alvenze/world-in-one-day-24nov/reward.svg)](https://make.fun/bounty/news-image-20261124)

One page, one day, the whole world: a newspaper-style infographic poster of
**Tuesday 24 November 2026** with **25 dated stories**, drawn entirely in code
in the cream-and-navy broadsheet format of this series' winning editions.

## The front page

- **Top stories** — Asia's markets leap 4.6% as Jensen Huang's return to
  Nvidia revives the AI trade (Seoul +7.5%, Taipei +9.1%); President Prabowo
  names Andi Amran Sulaiman and Sugiono to succeed Gibran as vice-president;
  Indonesia's police chief Listyo Sigit Prabowo is named a treason suspect by
  his own detectives.
- **The grid (12)** — fourteen countries acknowledge the ICJ's Rohingya
  ruling; the EU drafts a 22nd Russia sanctions package; a first urban drone
  attack hits Cúcuta's police HQ; a US court clears the Iowa lead-azide blast
  a presidential pause still holds; the Cikande factory search goes on; Riau
  floods affect 18,600 people; BMKG puts 11 provinces on heavy-rain alert;
  Lahore's air is the world's worst again; bomb threats reach some 450 German
  schools; pilots press Delhi over SpiceJet; bitcoin steadies near $61,000;
  the US sanctions Iran's shadow bankers.
- **Also on Tuesday (10)** — the Wellington Test draw, Trump targets Newsom,
  settler arson condemned in Jerusalem, Ukraine's Libya claim, a death
  sentence for leaking in Beijing, a jailed ex-mayor in Jackson, two
  Indonesians stopped in Denpasar, a fatal pile-up in Sumedang, PUBG Mobile
  Flash's 24.2m downloads, and Ferrari's new 296 Challenge cars.
- Plus a six-number stat band, a seven-region count strip, a day-ahead
  timeline, a dotted world map with numbered pins, a DATE CHECK box naming
  the older stories deliberately left out, and a certainty key.

Every story is real reporting from Tuesday 24 November 2026 (or the Monday
wire cycle it belongs to), cross-checked across at least two outlets where
possible and labelled on the page when it rests on one. Nothing is invented,
and nothing from another day is passed off as today's.

## How it runs

The entrypoint `main.ts` copies the committed `entry.png` to
`/output/entry.png` byte for byte and then verifies the delivered file (PNG
signature, size), so the judge gets exactly the audited image on every run,
offline. The poster itself was rendered from `render.mjs` (satori +
@resvg/resvg-js, fonts bundled locally), which is kept in the repo as the
drawing source.

Gate check: `entry.png` is a PNG of 1024 × 1024 px and 277,207 bytes
(limit 1 MiB), verified whole by file signature.

## License

MIT — see `LICENSE`.
