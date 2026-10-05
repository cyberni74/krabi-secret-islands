/**
 * Global Nitro middleware (auto-registered via `serverDir: "./server"` in vite.config.ts):
 * 1. Trailing-slash URLs get a permanent 308 redirect to the slash-less canonical URL (no 307, no duplicate pages).
 * 2. Public HTML pages (landing, Insider Guide, tour pages) get CDN-friendly cache headers, so Vercel serves them from the
 *    edge instead of rendering on every request. `s-maxage` = edge cache 1 h, `stale-while-revalidate` = serve stale for 24 h
 *    while a fresh copy renders in the background. Browsers always revalidate (max-age=0). Every deploy starts with an empty cache.
 *    The admin inbox (/anfragen) and server functions are never cached.
 */
interface SeoEvent {
  url: URL;
  req: { method: string };
}

const CACHEABLE = /^\/($|krabi-guide($|\/)|touren($|\/))/;

export default async function seoMiddleware(event: SeoEvent, next: () => unknown | Promise<unknown>): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const { pathname, search } = event.url;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const target = pathname.replace(/\/+$/, "") || "/";
    return new Response(null, { status: 308, headers: { location: `${target}${search}`, "cache-control": "public, max-age=3600" } });
  }

  const result = await next();
  if (
    CACHEABLE.test(pathname) &&
    result instanceof Response &&
    result.status === 200 &&
    String(result.headers.get("content-type") ?? "").includes("text/html")
  ) {
    const headers = new Headers(result.headers);
    headers.set("cache-control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
    return new Response(result.body, { status: result.status, statusText: result.statusText, headers });
  }
  return result;
}
