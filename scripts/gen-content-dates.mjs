#!/usr/bin/env node
/**
 * Writes src/generated/content-dates.json: the date a page's CONTENT last really changed.
 * Used for sitemap <lastmod>, article:modified_time and JSON-LD dateModified.
 *
 * A date only moves when the content itself changes: every article block / content file is hashed (whitespace-normalised) and
 * compared with the hash stored in the previous content-dates.json. Same hash → previous date is kept; new hash → today.
 * Design, layout and component edits therefore never touch <lastmod>. (Vercel builds have no git history, so the dates are
 * committed with the hashes.) Run `npm run dates` after changing content, then commit the JSON.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const OUT = join(root, "src/generated/content-dates.json");
const today = new Date().toISOString().slice(0, 10);
const prev = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const prevHashes = prev.hashes ?? {};
const hashes = {};

const norm = (t) => t.replace(/\s+/g, " ").trim();
const hash = (t) => createHash("sha256").update(norm(t)).digest("hex").slice(0, 16);
const read = (rel) => readFileSync(join(root, rel), "utf8");

/** Date for a content key: keep the old date while the hash is unchanged. */
function dateFor(key, text, prevDate) {
  const h = hash(text);
  hashes[key] = h;
  if (prevHashes[key] === h && prevDate) return prevDate;
  if (!prevHashes[key] && prevDate) return prevDate; // first run with hashes: keep the existing date, record the hash
  return today;
}
const max = (dates) => dates.sort().at(-1);

// --- articles: one hash per article block --------------------------------------------------------------------------------
const guideDir = "src/components/krabi-guide";
const dataFiles = readdirSync(join(root, guideDir)).filter((f) => /^data-.*\.ts$/.test(f));
const slugs = {};
for (const f of dataFiles) {
  const src = read(`${guideDir}/${f}`);
  const marks = [...src.matchAll(/\n {4}slug: "([^"]+)"/g)];
  marks.forEach((m, i) => {
    const block = src.slice(m.index, marks[i + 1]?.index ?? src.length);
    slugs[m[1]] = dateFor(`slug:${m[1]}`, block, prev.slugs?.[m[1]]);
  });
}

// --- page types: content files only (no layout / component files) --------------------------------------------------------
const si = "src/components/secret-islands";
const group = (key, files, prevDate) => dateFor(key, files.map(read).join("\n"), prevDate);
const landing = group("landing", [`${si}/content.ts`, `${si}/longtail-faq.ts`, `${si}/booking-data.ts`], prev.landing);
const tours = group("tours", [`${si}/content.ts`, `${si}/tour-pages.ts`, `${si}/tour-pages-a.ts`, `${si}/tour-pages-b.ts`], prev.tours);
const info = group("info", [`${guideDir}/info-content.ts`], prev.info);
const hub = max(Object.values(slugs));

writeFileSync(OUT, JSON.stringify({ landing, hub, tours, info, slugs, hashes }, null, 2) + "\n");
console.log("content-dates.json written:", { landing, hub, tours, articles: Object.keys(slugs).length });
