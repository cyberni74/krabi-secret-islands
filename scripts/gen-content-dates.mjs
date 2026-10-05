#!/usr/bin/env node
/**
 * Writes src/generated/content-dates.json: the real last-change date (git commit date, or today for uncommitted edits)
 * of the content files behind each page type. Used for sitemap <lastmod>, article:modified_time and JSON-LD dateModified.
 * Run `npm run dates` before committing content changes (Vercel builds have no git history, so it cannot be computed there).
 */
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const today = new Date().toISOString().slice(0, 10);
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

function dateOf(rel) {
  try {
    if (git("status", "--porcelain", "--", rel)) return today; // uncommitted change = changed today
    return git("log", "-1", "--format=%cs", "--", rel) || today;
  } catch {
    return today;
  }
}
const max = (dates) => dates.sort().at(-1);

const guideDir = "src/components/krabi-guide";
const dataFiles = readdirSync(join(root, guideDir)).filter((f) => /^data-.*\.ts$/.test(f));
const slugs = {};
for (const f of dataFiles) {
  const rel = `${guideDir}/${f}`;
  const d = dateOf(rel);
  for (const m of readFileSync(join(root, rel), "utf8").matchAll(/\n {4}slug: "([^"]+)"/g)) slugs[m[1]] = d;
}
const si = "src/components/secret-islands";
const landing = max(["content.ts", "longtail-faq.ts", "booking-data.ts", "sections-top.tsx", "sections-mid.tsx", "sections-bottom.tsx", "page.tsx"].map((f) => dateOf(`${si}/${f}`)));
const tours = max(["content.ts", "tour-pages.ts", "tour-pages-a.ts", "tour-pages-b.ts", "tour-seo.ts"].map((f) => dateOf(`${si}/${f}`)).concat(dateOf("src/components/krabi-guide/tour-page.tsx")));
const hub = max(Object.values(slugs));
writeFileSync(join(root, "src/generated/content-dates.json"), JSON.stringify({ landing, hub, tours, slugs }, null, 2) + "\n");
console.log("content-dates.json written:", { landing, hub, tours, articles: Object.keys(slugs).length });
