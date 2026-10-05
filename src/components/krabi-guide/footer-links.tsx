import { Link } from "@tanstack/react-router";
import { TOURS } from "../secret-islands/content";
import { keepLang } from "../secret-islands/lang-context";
import { useTx } from "../secret-islands/store";
import { TOUR_SLUGS, TOURS_PATH } from "../secret-islands/tour-slugs";

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
