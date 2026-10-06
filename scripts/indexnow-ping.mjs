#!/usr/bin/env node
/**
 * IndexNow ping (Bing, Yandex, Seznam, Naver – Google does not use IndexNow).
 * Usage:
 *   npm run indexnow                      -> submits every <loc> URL of the live sitemap
 *   npm run indexnow -- <url> [<url> …]   -> submits only the given URLs
 * Run manually after relevant deploys; deliberately not part of the build.
 */
const HOST = "krabi-secret-islands.com";
const KEY = "d31281f4467e48fa90d777628d119336";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap ${SITEMAP} -> HTTP ${res.status}`);
  const xml = await res.text();
  return [...new Set([...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => decode(m[1])))];
}

const args = process.argv.slice(2).filter((a) => /^https?:\/\//.test(a));
const urlList = args.length ? args : await urlsFromSitemap();
const foreign = urlList.filter((u) => new URL(u).host !== HOST);
if (foreign.length) throw new Error(`URLs outside ${HOST}: ${foreign.slice(0, 3).join(", ")}`);
if (!urlList.length) throw new Error("No URLs to submit");

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});
const body = (await res.text()).slice(0, 300);
console.log(`IndexNow: ${urlList.length} URLs submitted -> HTTP ${res.status}${body ? ` ${body}` : ""}`);
console.log(res.status === 200 || res.status === 202 ? "OK" : "Not OK (200/202 expected)");
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
