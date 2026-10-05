import { Link } from "@tanstack/react-router";
import { TOURS } from "../secret-islands/content";
import { keepLang } from "../secret-islands/lang-context";
import { useTx } from "../secret-islands/store";
import { TOUR_SLUGS, TOURS_PATH } from "../secret-islands/tour-slugs";
import { GUIDE_PATH } from "../secret-islands/seo";
import type { Bi } from "./guide-meta";
import { useGuideNav } from "./guide-nav-context";

/**
 * Crawlable internal links to ALL tour landing pages for the footers (landing page + Insider Guide).
 * Lives under krabi-guide/ so its bilingual labels do not need zh/ko/ja dictionary entries (tour titles are translated already).
 */
export function FooterTourLinks({ className }: { className?: string }) {
  const { t, lang } = useTx();
  const all = lang === "de" ? "Alle Touren ansehen" : "View all tours";
  const heading = lang === "de" ? "Touren" : "Tours";
  return (
    <nav aria-label={heading} className={className}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{heading}</p>
      <ul className="gap-x-8 text-sm sm:columns-2 lg:columns-3">
        {TOURS.filter((x) => TOUR_SLUGS[x.id]).map((tour) => (
          <li key={tour.id} className="break-inside-avoid">
            <Link
              to="/touren/$slug"
              params={{ slug: TOUR_SLUGS[tour.id] }}
              search={keepLang}
              className="inline-flex min-h-9 items-center py-1 leading-snug text-slate-300 transition hover:text-white"
            >
              {tour.kind === "fishing" ? "🎣 " : ""}
              {t(tour.title)}
            </Link>
          </li>
        ))}
        <li className="break-inside-avoid">
          <Link to={TOURS_PATH} search={keepLang} className="inline-flex min-h-9 items-center py-1 font-bold text-cyan-200 hover:text-white">
            {all} →
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const GUIDE_GROUPS: { category: "pillar" | "island" | "insider"; title: Bi }[] = [
  { category: "pillar", title: { de: "Grundlagen", en: "Essentials" } },
  { category: "island", title: { de: "Inseln", en: "Islands" } },
  { category: "insider", title: { de: "Insider-Wissen", en: "Insider know-how" } },
];

/**
 * Crawlable links to ALL Insider Guide articles (landing-page footer + guide footer). Data comes from the root loader
 * (`useGuideNav`), so no article text is bundled. Labels are bilingual via ternaries (no new dictionary keys).
 */
export function FooterGuideLinks({ className, showHeading = true }: { className?: string; showHeading?: boolean }) {
  const { lang } = useTx();
  const nav = useGuideNav();
  const de = lang === "de";
  const heading = "Krabi Insider Guide";
  return (
    <nav aria-label={heading} className={className}>
      {showHeading ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{heading}</p> : null}
      <div className="grid gap-x-8 gap-y-6 text-sm sm:grid-cols-3">
        {GUIDE_GROUPS.map((g) => (
          <div key={g.category}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">{de ? g.title.de : g.title.en}</p>
            <ul>
              {nav
                .filter((a) => a.category === g.category)
                .map((a) => (
                  <li key={a.slug} className="break-inside-avoid">
                    <Link
                      to="/krabi-guide/$slug"
                      params={{ slug: a.slug }}
                      search={keepLang}
                      className="inline-flex min-h-9 items-center py-1 leading-snug text-slate-300 transition hover:text-white"
                    >
                      {de ? a.short.de : a.short.en}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to={GUIDE_PATH} search={keepLang} className="mt-4 inline-flex min-h-11 items-center font-bold text-cyan-200 hover:text-white">
        {de ? "Alle Artikel im Insider Guide" : "All articles in the Insider Guide"} →
      </Link>
    </nav>
  );
}

const TEASER_SLUGS = [
  "private-boat-charter-krabi-cost",
  "krabi-itinerary-3-5-7-days",
  "hong-island-krabi",
  "phi-phi-maya-bay-early-morning",
  "koh-rok-koh-haa",
  "best-snorkeling-spots-krabi",
  "krabi-boat-tours-rainy-season",
  "krabi-with-kids",
];

/** Visible landing-page block with 8 key guide articles as real links (server HTML). */
export function GuideTeaser() {
  const { lang } = useTx();
  const nav = useGuideNav();
  const de = lang === "de";
  const items = TEASER_SLUGS.map((s) => nav.find((a) => a.slug === s)).filter((a): a is NonNullable<typeof a> => Boolean(a));
  if (!items.length) return null;
  return (
    <section aria-labelledby="guide-teaser" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 id="guide-teaser" className="text-2xl font-extrabold text-white sm:text-3xl">
        {de ? "Krabi-Guide: Wissen für Ihren Tag auf dem Wasser" : "Krabi Guide: know-how for your day on the water"}
      </h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a) => (
          <li key={a.slug}>
            <Link
              to="/krabi-guide/$slug"
              params={{ slug: a.slug }}
              search={keepLang}
              className="flex h-full min-h-16 items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold leading-snug text-slate-100 transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              {de ? a.short.de : a.short.en}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={GUIDE_PATH} search={keepLang} className="mt-5 inline-flex min-h-11 items-center font-bold text-cyan-200 hover:text-white">
        {de ? "Alle Artikel im Insider Guide" : "All articles in the Insider Guide"} →
      </Link>
    </section>
  );
}

/** Footer link to the guest-info page (/info). */
export function FooterInfoLink({ className }: { className?: string }) {
  const { lang } = useTx();
  return (
    <p className={className}>
      <Link to="/info" search={keepLang} className="inline-flex min-h-11 items-center font-bold text-cyan-200 hover:text-white">
        {lang === "de" ? "Gäste-Info: Treffpunkt, Preise, privat vs. Gruppe" : "Guest info: meeting point, what's included, private vs group"} →
      </Link>
    </p>
  );
}
