import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { TOURS } from "../secret-islands/content";
import { btn } from "../secret-islands/fx";
import { keepLang } from "../secret-islands/lang-context";
import { useSI } from "../secret-islands/store";
import { TOUR_SLUGS } from "../secret-islands/tour-slugs";
import { INFO_META, INFO_SECTIONS, type InfoLink } from "./info-content";
import { useGuideLang } from "./guide-helpers";
import { GuideShell } from "./guide-ui";

const linkCls = "inline-flex min-h-11 items-center gap-1.5 font-bold text-cyan-200 transition hover:text-white";

function InfoLinkItem({ link, lang }: { link: InfoLink; lang: "de" | "en" }) {
  const label = link.label[lang];
  const arrow = <ArrowRight className="size-4" aria-hidden />;
  if (link.kind === "tours") {
    return (
      <Link to="/touren" search={keepLang} className={linkCls}>
        {label}
        {arrow}
      </Link>
    );
  }
  if (link.kind === "tour") {
    const tour = TOURS.find((t) => t.id === link.tourId);
    const slug = tour ? TOUR_SLUGS[tour.id] : undefined;
    if (!slug) return null;
    return (
      <Link to="/touren/$slug" params={{ slug }} search={keepLang} className={linkCls}>
        {label}
        {arrow}
      </Link>
    );
  }
  if (!link.slug) return null;
  return (
    <Link to="/krabi-guide/$slug" params={{ slug: link.slug }} search={keepLang} className={linkCls}>
      {label}
      {arrow}
    </Link>
  );
}

export function InfoPage() {
  return (
    <GuideShell>
      <InfoView />
    </GuideShell>
  );
}

function InfoView() {
  const lang = useGuideLang();
  const openBooking = useSI((s) => s.openBooking);
  return (
    <article lang={lang} className="px-4 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        <nav aria-label={lang === "de" ? "Brotkrümelnavigation" : "Breadcrumb"} className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-[13px] font-semibold text-slate-300">
            <li>
              <Link to="/" search={keepLang} className="inline-flex min-h-8 items-center rounded hover:text-white">
                {lang === "de" ? "Startseite" : "Home"}
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5 text-slate-500" />
            </li>
            <li aria-current="page" className="text-cyan-200">
              {lang === "de" ? "Gäste-Info" : "Guest info"}
            </li>
          </ol>
        </nav>
        <h1 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl">{INFO_META.h1[lang]}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-200">{INFO_META.intro[lang]}</p>
        <nav aria-label={lang === "de" ? "Inhalt" : "Contents"} className="mt-6">
          <ul className="flex flex-wrap gap-2 text-sm">
            {INFO_SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-4 font-semibold text-slate-100 hover:border-white/30">
                  {s.h2[lang]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {INFO_SECTIONS.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24 pt-12">
            <h2 id={`${s.id}-h`} className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {s.h2[lang]}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-[1.75] text-slate-300 sm:text-[17px]">
              {s.body[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {s.list ? (
              <ul className="mt-5 space-y-2.5">
                {s.list[lang].map((li, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed text-slate-200">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-si-cyan/20 text-si-cyan">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {s.table ? (
              <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm sm:text-[15px]">
                  <thead className="bg-white/[0.06] text-xs uppercase tracking-wide text-cyan-200">
                    <tr>
                      {s.table.head.map((h, i) => (
                        <th key={i} scope="col" className="px-3 py-3 font-bold">
                          {h[lang]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-200">
                    {s.table.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row" className="px-3 py-3 font-bold text-white">
                              {cell[lang]}
                            </th>
                          ) : (
                            <td key={c} className="px-3 py-3 align-top">
                              {cell[lang]}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            <div className="mt-5 flex flex-col">
              {s.links.map((l, i) => (
                <InfoLinkItem key={i} link={l} lang={lang} />
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {s.faq.map((f, i) => (
                <details key={i} className="group rounded-2xl border border-white/10 bg-white/[0.04] open:bg-white/[0.06]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-white [&::-webkit-details-marker]:hidden">
                    <span>{f.q[lang]}</span>
                    <ChevronDown className={cn("size-5 shrink-0 text-cyan-200 transition group-open:rotate-180")} aria-hidden />
                  </summary>
                  <p className="px-4 pb-4 leading-relaxed text-slate-300">{f.a[lang]}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
          <p className="text-xl font-extrabold sm:text-2xl">
            {lang === "de" ? "Bereit für Ihre private Bootstour?" : "Ready for your private boat tour?"}
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => openBooking()} className={btn.primary}>
              <Sparkles className="size-4" />
              {lang === "de" ? "Tour anfragen" : "Request a tour"}
            </button>
            <Link to="/touren" search={keepLang} className={btn.glass}>
              {lang === "de" ? "Alle Touren ansehen" : "View all tours"}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
