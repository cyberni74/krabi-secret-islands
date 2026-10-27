import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/components/secret-islands/seo";

/**
 * robots.txt – everything stays crawlable. The private booking inbox /anfragen is NOT blocked here on purpose: it is kept out of the
 * index with `noindex` (meta robots + X-Robots-Tag), and Google can only see a noindex on a URL it is allowed to crawl.
 */
const BODY = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  "",
].join("\n");

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(BODY, {
          headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
        }),
    },
  },
});
