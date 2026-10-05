import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/components/secret-islands/seo";

/** robots.txt – everything public stays crawlable (pages + /bilder and /images pictures); only the private booking inbox is excluded. */
const BODY = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /anfragen",
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
