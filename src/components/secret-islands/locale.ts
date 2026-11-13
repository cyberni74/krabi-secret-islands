/**
 * Path-based locales. German stays on the unprefixed URLs that are already indexed
 * (`/`, `/krabi-guide/…`, `/touren/…`). Every other language lives under a prefix
 * (`/en`, `/ja/krabi-guide/…`). `/de/…` is not a second German URL: it 301s to the
 * unprefixed page. Detail pages exist only in German and English, so zh/ko/ja on
 * those paths fold to English in the same redirect.
 */
export type LocaleId = "de" | "en" | "zh" | "ko" | "ja";

const LOCALES = new Set<string>(["de", "en", "zh", "ko", "ja"]);

export function isLocaleId(value: string | null | undefined): value is LocaleId {
  return !!value && LOCALES.has(value.toLowerCase()) && (value.toLowerCase() as LocaleId) === value.toLowerCase();
}

/** Pages that have a translated URL. Everything else (assets, admin, sitemap) never gets a locale prefix. */
export function isContentPath(pathname: string): boolean {
  return pathname === "/" || /^\/(krabi-guide|touren|info|impressum|datenschutz)(\/|$)/.test(pathname);
}

/** Insider Guide, tours, guest info and the legal pages are German + English only. */
export function foldsToEnglish(pathname: string): boolean {
  return isContentPath(pathname) && pathname !== "/";
}

export function normalizeLocale(raw: string | null | undefined, barePath: string): LocaleId {
  const value = raw?.toLowerCase() ?? "de";
  if (!LOCALES.has(value)) return "de";
  const lang = value as LocaleId;
  if (foldsToEnglish(barePath) && lang !== "de" && lang !== "en") return "en";
  return lang;
}

export function splitLocalePrefix(pathname: string): { prefix: LocaleId | null; bare: string } {
  const match = pathname.match(/^\/(de|en|zh|ko|ja)(?=\/|$)/i);
  if (!match) return { prefix: null, bare: pathname || "/" };
  const prefix = match[1].toLowerCase() as LocaleId;
  const rest = pathname.slice(match[1].length + 1);
  const bare = rest === "" ? "/" : rest.startsWith("/") ? rest : `/${rest}`;
  return { prefix, bare };
}

/** Public path for a language. German has no prefix, matching the URLs already in the index. */
export function localizedPath(path: string, lang: LocaleId): string {
  const bare = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (lang === "de") return bare;
  return bare === "/" ? `/${lang}` : `/${lang}${bare}`;
}

function searchWithoutLang(search: string): URLSearchParams {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  params.delete("lang");
  return params;
}

function withSearch(pathname: string, params: URLSearchParams): string {
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

/**
 * One-hop target for a request that is not already canonical, or null when the URL should stay.
 * Trailing slashes are removed in the same redirect as a `?lang=` or `/de` move.
 */
export function localeRedirectTarget(pathname: string, search: string): string | null {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, "") || "/" : pathname;
  // Old /secret-islands URLs are rewritten by their own route so the language move stays one hop.
  if (trimmed === "/secret-islands" || trimmed.startsWith("/secret-islands/")) return null;

  const { prefix, bare } = splitLocalePrefix(trimmed);
  const params = searchWithoutLang(search);
  const queryLang = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search).get("lang");

  if (!isContentPath(bare)) {
    const target = withSearch(bare, params);
    const current = `${pathname}${search}`;
    return target !== current ? target : null;
  }

  const lang = normalizeLocale(queryLang ?? prefix ?? "de", bare);
  const target = withSearch(localizedPath(bare, lang), params);
  const current = `${pathname}${search}`;
  return target !== current ? target : null;
}

/** Router input: public `/en/touren` becomes the existing route `/touren?lang=en`. */
export function rewriteLocaleInput({ url }: { url: URL }): URL {
  const { prefix, bare } = splitLocalePrefix(url.pathname);
  if (!prefix) return url;
  if (!isContentPath(bare)) return url;
  const lang = normalizeLocale(prefix, bare);
  url.pathname = bare;
  if (lang === "de") url.searchParams.delete("lang");
  else url.searchParams.set("lang", lang);
  return url;
}

/** Router output: internal `/touren?lang=en` becomes the public `/en/touren`. Does not mutate `url`. */
export function rewriteLocaleOutput({ url }: { url: URL }): URL {
  const next = new URL(url.href);
  const { prefix, bare } = splitLocalePrefix(next.pathname);
  if (prefix) {
    next.searchParams.delete("lang");
    return next;
  }
  const raw = next.searchParams.get("lang");
  if (!raw || !isContentPath(next.pathname)) {
    if (raw) next.searchParams.delete("lang");
    return next;
  }
  const lang = normalizeLocale(raw, bare);
  next.searchParams.delete("lang");
  next.pathname = localizedPath(next.pathname, lang);
  return next;
}
