/**
 * Global Nitro middleware (auto-registered via `serverDir: "./server"` in vite.config.ts):
 * 1. Old `?lang=` URLs, `/de/…` duplicates and trailing slashes 301 in one hop to the path-based canonical URL.
 * 2. Public HTML pages get CDN-friendly cache headers. `s-maxage` = edge cache 1 h, `stale-while-revalidate` = 24 h.
 *    Browsers always revalidate (max-age=0). The admin inbox (/anfragen) and server functions are never cached.
 */
import { LEGACY_LOCAL_IMAGES, RENAMED_IMAGES } from "../../src/components/secret-islands/image-map";
import { isContentPath, localeRedirectTarget, splitLocalePrefix } from "../../src/components/secret-islands/locale";

interface SeoEvent {
  url: URL;
  req: { method: string };
}

const CACHEABLE = /^\/($|krabi-guide($|\/)|touren($|\/)|info$|impressum$|datenschutz$)/;

/** Old image filenames 301 straight to the current file, even if a `?lang=` came along. */
function imageRedirect(pathname: string): string | null {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const images = trimmed.match(/^\/images\/([^/]+)$/);
  if (images) {
    const next = LEGACY_LOCAL_IMAGES[images[1]];
    return next && next !== images[1] ? `/images/${next}` : null;
  }
  const bilder = trimmed.match(/^\/bilder\/([^/]+)$/);
  if (bilder) {
    const next = RENAMED_IMAGES[bilder[1]];
    return next && next !== bilder[1] ? `/bilder/${next}` : null;
  }
  return null;
}

export default async function seoMiddleware(event: SeoEvent, next: () => unknown | Promise<unknown>): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const { pathname, search } = event.url;
  const target = imageRedirect(pathname) ?? localeRedirectTarget(pathname, search);
  if (target) {
    return new Response(null, { status: 301, headers: { location: target, "cache-control": "public, max-age=3600" } });
  }

  const bare = splitLocalePrefix(pathname).bare;
  const result = await next();
  if (
    isContentPath(bare) &&
    CACHEABLE.test(bare) &&
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
