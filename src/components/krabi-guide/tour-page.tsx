/**
 * Tour landing pages: /touren (overview of all tours) and /touren/<slug> (one tour).
 * Same shell as the Insider Guide (GuideShell: header, floating dock, footer). All texts are German + English only
 * (`useGuideLang`), plain {de,en} objects from the content layer – no translate()/t() keys for zh/ko/ja.
 */
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, ChevronRight, Clock, Flag, MapPin, Sailboat, Sparkles, Users, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, TOURS, altFor, type L, type Tour } from "../secret-islands/content";
import { GlassCard, SectionTitle, btn } from "../secret-islands/fx";
import { keepLang } from "../secret-islands/lang-context";
import { formatTHB, useSI, waLink } from "../secret-islands/store";
import { BOAT_FACTS, MAX_GUESTS, formatHours, formatTime, getTourPage, stopName, tourFaq, tourStarts } from "../secret-islands/tour-pages";
import { TOUR_SLUGS } from "../secret-islands/tour-slugs";
import { SmartImage, WhatsAppIcon } from "../secret-islands/ui";
import { ARTICLES } from "./articles";
import { useGuideLang, type GuideLang } from "./guide-helpers";
import { ArticleCard, GuideShell } from "./guide-ui";

const bi = (l: L, lang: GuideLang) => l[lang];

/** Guide articles that point to this tour (their `tourIds` contain it), the ones where it is the lead tour first. Max. 4. */
function articlesForTour(tourId: string, max = 4) {
  return ARTICLES.filter((a) => a.tourIds.includes(tourId))
    .sort((a, b) => a.tourIds.indexOf(tourId) - b.tourIds.indexOf(tourId))
    .slice(0, max);
}

/* ───────── Breadcrumb ───────── */
function TourBreadcrumb({ tourName }: { tourName?: string }) {
  const lang = useGuideLang();
  return (
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
        <li>
          {tourName ? (
            <Link to="/touren" search={keepLang} className="inline-flex min-h-8 items-center rounded hover:text-white">
              {lang === "de" ? "Touren" : "Tours"}
            </Link>
          ) : (
            <span aria-current="page" className="text-cyan-200">
              {lang === "de" ? "Touren" : "Tours"}
            </span>
          )}
        </li>
        {tourName ? (
          <>
            <li aria-hidden>
              <ChevronRight className="size-3.5 text-slate-500" />
            </li>
            <li className="min-w-0">
              <span aria-current="page" className="text-cyan-200">
                {tourName}
              </span>
            </li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}

/* ───────── Shared cards ───────── */
/** Whole card is one real link to the tour page (crawlable, ≥ 44 px touch target). */
export function TourLinkCard({ tour }: { tour: Tour }) {
  const lang = useGuideLang();
  return (
    <GlassCard as="article" className="group h-full overflow-hidden">
      <Link to="/touren/$slug" params={{ slug: TOUR_SLUGS[tour.id] }} search={keepLang} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
          <SmartImage
            src={tour.image}
            alt={altFor(tour.image)[lang]}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="si-fallback size-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-si-navy/85 via-transparent to-transparent" />
          <span className="si-glass absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold">
            <Clock className="size-3.5 text-cyan-300" /> {bi(tour.duration, lang)}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-extrabold leading-snug text-white">{bi(tour.title, lang)}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{bi(tour.short, lang)}</p>
          <p className="mt-auto pt-4 text-sm text-slate-300">
            {lang === "de" ? "ab" : "from"} <span className="si-text-gradient text-xl font-extrabold">{formatTHB(tour.price)}</span>{" "}
            {lang === "de" ? "pro Boot" : "per boat"}
          </p>
          <span className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-cyan-300 transition group-hover:gap-2.5">
            {lang === "de" ? "Details & Ablauf" : "Details & itinerary"}
            <ArrowRight className="size-4" />
          </span>
        </div>
      </Link>
    </GlassCard>
  );
}

/* ───────── Tour page ───────── */
export function TourLandingPage({ slug }: { slug: string }) {
  return (
    <GuideShell>
      <TourView slug={slug} />
    </GuideShell>
  );
}

function SectionH2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
}

function TourView({ slug }: { slug: string }) {
  const lang = useGuideLang();
  const openBooking = useSI((s) => s.openBooking);
  const found = getTourPage(slug)!;
  const { tour, page } = found;
  const starts = tourStarts(tour);
  const faq = tourFaq(tour, page, lang);
  const related = page.related.map((id) => TOURS.find((t) => t.id === id)).filter((t): t is Tour => !!t);
  const articles = articlesForTour(tour.id);
  const title = bi(tour.title, lang);
  const paragraphs = bi(page.intro, lang).split("\n\n");
  const waText =
    lang === "de"
      ? `Hallo! Ich interessiere mich für die Tour „${tour.title.de}“ (${priceTextDe(tour.price)} pro Boot). Wunschdatum: … / Personen: …`
      : `Hi! I'm interested in the tour “${tour.title.en}” (from ${priceTextEn(tour.price)} per boat). Preferred date: … / Guests: …`;

  const priceBox = (
    <GlassCard glow className="p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{lang === "de" ? "Preis" : "Price"}</p>
      <p className="mt-1 leading-none">
        <span className="text-sm text-slate-300">{lang === "de" ? "ab " : "from "}</span>
        <span className="si-text-gradient text-4xl font-extrabold">{formatTHB(tour.price)}</span>
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-200">
        {lang === "de" ? `pro Boot · max. ${MAX_GUESTS} Gäste` : `per boat · max. ${MAX_GUESTS} guests`}
      </p>
      <dl className="mt-4 space-y-2.5 border-t border-white/10 pt-4 text-sm">
        <div className="flex items-start gap-2.5">
          <Clock className="mt-0.5 size-4 shrink-0 text-si-cyan" />
          <div>
            <dt className="sr-only">{lang === "de" ? "Dauer" : "Duration"}</dt>
            <dd>{lang === "de" ? "Dauer: " : "Duration: "}{formatHours(tour.hours, lang)}</dd>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Flag className="mt-0.5 size-4 shrink-0 text-si-cyan" />
          <div>
            <dt className="sr-only">{lang === "de" ? "Start" : "Start"}</dt>
            <dd>
              {lang === "de" ? "Start: " : "Start: "}
              {starts.map((s) => formatTime(s.time, lang)).join(" · ")}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Users className="mt-0.5 size-4 shrink-0 text-si-cyan" />
          <dd>{lang === "de" ? `Privat, maximal ${MAX_GUESTS} Gäste` : `Private, maximum ${MAX_GUESTS} guests`}</dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-col gap-3">
        <button type="button" onClick={() => openBooking({ tourId: tour.id })} className={cn(btn.primary, "w-full")}>
          <Sparkles className="size-4" />
          {lang === "de" ? "Tour anfragen" : "Request this tour"}
        </button>
        <a href={waLink(waText)} target="_blank" rel="noopener noreferrer" className={cn(btn.whatsapp, "w-full")}>
          <WhatsAppIcon className="size-5" />
          {lang === "de" ? "Per WhatsApp fragen" : "Ask on WhatsApp"}
        </a>
      </div>
    </GlassCard>
  );

  return (
    <article lang={lang}>
      <header className="relative px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <TourBreadcrumb tourName={title} />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_rgb(6_182_212/0.45)]">
            <SmartImage
              src={tour.image}
              alt={altFor(tour.image)[lang]}
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="si-fallback aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-si-navy via-si-navy/40 to-transparent" />
            {tour.badge ? (
              <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-si-gold to-amber-300 px-3 py-1 text-xs font-bold text-si-navy">
                {bi(tour.badge, lang)}
              </span>
            ) : null}
          </div>
          <div className="relative -mt-16 max-w-4xl px-1 sm:-mt-24 sm:px-8">
            <h1 className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_4px_24px_rgb(10_25_47/0.9)] sm:text-5xl">
              {bi(page.h1, lang)}
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-8 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <aside className="lg:order-last">
          <div className="lg:sticky lg:top-24">{priceBox}</div>
        </aside>

        <div className="min-w-0 max-w-3xl">
          <div className="space-y-4 text-base leading-[1.75] text-slate-200 sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <section className="pt-10" aria-labelledby="audience">
            <SectionH2 id="audience">{lang === "de" ? "Für wen ist die Tour geeignet?" : "Who is this tour for?"}</SectionH2>
            <p className="mt-4 text-base leading-[1.75] text-slate-300 sm:text-[17px]">{bi(page.audience, lang)}</p>
          </section>

          {/* Itinerary: rendered from the tour data (stops, duration, departures) – no invented times. */}
          <section className="pt-10" aria-labelledby="ablauf">
            <SectionH2 id="ablauf">{lang === "de" ? "Ablauf der Tour" : "Itinerary"}</SectionH2>
            <p className="mt-4 text-base leading-[1.75] text-slate-300 sm:text-[17px]">{bi(tour.description, lang)}</p>
            <ol className="mt-6 space-y-0">
              <TimelineItem
                icon={<Flag className="size-4" />}
                title={lang === "de" ? "Start ab Ao Nang" : "Start from Ao Nang"}
                text={
                  starts.length === 1
                    ? formatTime(starts[0].time, lang)
                    : starts.map((s) => `${bi(s.label, lang)} ${formatTime(s.time, lang)}`).join(" · ")
                }
              />
              {tour.stops.map((s, i) => (
                <TimelineItem
                  key={s}
                  icon={<MapPin className="size-4" />}
                  title={`${lang === "de" ? "Stopp" : "Stop"} ${i + 1}: ${stopName(s, lang)}`}
                />
              ))}
              <TimelineItem
                last
                icon={<Sailboat className="size-4" />}
                title={lang === "de" ? "Gesamtdauer der Tour" : "Total tour time"}
                text={`${formatHours(tour.hours, lang)} · ${bi(tour.duration, lang)}`}
              />
            </ol>
          </section>

          <section className="pt-10" aria-labelledby="inklusive">
            <SectionH2 id="inklusive">{lang === "de" ? "Im Preis enthalten" : "Included in the price"}</SectionH2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {tour.includes.map((inc) => (
                <li key={inc.de} className="flex gap-3 text-base leading-relaxed text-slate-200">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-si-cyan/20 text-si-cyan">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span>{bi(inc, lang)}</span>
                </li>
              ))}
            </ul>
            <GlassCard className="mt-6 p-5">
              <h3 className="text-base font-extrabold">{bi(BOAT_FACTS.title, lang)}</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-300">
                {BOAT_FACTS.items.map((it) => (
                  <li key={it.de} className="flex gap-2.5">
                    <Sailboat className="mt-0.5 size-4 shrink-0 text-si-cyan" />
                    <span>{bi(it, lang)}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </section>

          <section id="faq" className="scroll-mt-24 pt-12">
            <SectionH2>{lang === "de" ? "Häufige Fragen zu dieser Tour" : "Frequently asked questions about this tour"}</SectionH2>
            <div className="mt-5 space-y-3">
              {faq.map((f, i) => (
                <details key={f.q} className="si-glass group rounded-2xl" open={i === 0}>
                  <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-5 py-3 font-bold leading-snug [&::-webkit-details-marker]:hidden">
                    <h3 className="flex-1 text-base font-bold">{f.q}</h3>
                    <ChevronDown className="size-5 shrink-0 text-si-cyan transition group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <GlassCard glow className="mt-12 p-6 sm:p-8">
            <h2 className="text-xl font-extrabold sm:text-2xl">{lang === "de" ? "Diese Tour privat erleben" : "Experience this tour privately"}</h2>
            <p className="mt-2 text-slate-300">
              {lang === "de"
                ? `Anfragen sind jederzeit möglich. Nach Bestätigung genügt eine Anzahlung von 30 %, der Rest wird am Tourtag bezahlt. Der Preis gilt pro Boot für bis zu ${MAX_GUESTS} Gäste.`
                : `You can request any time. After confirmation, a 30% deposit secures the date and the rest is paid on tour day. The price is per boat for up to ${MAX_GUESTS} guests.`}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => openBooking({ tourId: tour.id })} className={btn.primary}>
                <Sparkles className="size-4" />
                {lang === "de" ? "Tour anfragen" : "Request this tour"}
              </button>
              <a href={waLink(waText)} target="_blank" rel="noopener noreferrer" className={btn.whatsapp}>
                <WhatsAppIcon className="size-5" />
                {lang === "de" ? "Per WhatsApp fragen" : "Ask on WhatsApp"}
              </a>
            </div>
          </GlassCard>
        </div>
      </div>

      {related.length ? (
        <section className="px-4 pt-20 sm:px-6" aria-labelledby="related-tours">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow={lang === "de" ? "Weitere Touren" : "More tours"}
              title={lang === "de" ? "Ähnliche private Touren" : "Similar private tours"}
            />
            <h2 id="related-tours" className="sr-only">
              {lang === "de" ? "Ähnliche Touren" : "Related tours"}
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourLinkCard key={t.id} tour={t} />
              ))}
            </div>
            <div className="mt-8">
              <Link to="/touren" search={keepLang} className={btn.glass}>
                {lang === "de" ? "Alle 15 Touren ansehen" : "See all 15 tours"}
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {articles.length ? (
        <section className="px-4 pt-20 sm:px-6" aria-labelledby="guide-articles">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow={lang === "de" ? "Insider Guide" : "Insider Guide"}
              title={lang === "de" ? "Mehr zu dieser Tour im Guide" : "More about this tour in the guide"}
              sub={lang === "de" ? "Hintergrundwissen zu den Orten, Gezeiten und Regeln dieser Tour." : "Background on the places, tides and rules of this tour."}
            />
            <h2 id="guide-articles" className="sr-only">
              {lang === "de" ? "Passende Artikel" : "Matching articles"}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}

function TimelineItem({ icon, title, text, last }: { icon: React.ReactNode; title: string; text?: string; last?: boolean }) {
  return (
    <li className="relative flex gap-4 pb-6 last:pb-0">
      {!last ? <span aria-hidden className="absolute left-[17px] top-9 h-[calc(100%-1.5rem)] w-px bg-white/15" /> : null}
      <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-si-cyan/20 text-si-cyan ring-1 ring-si-cyan/30">{icon}</span>
      <div className="min-w-0 pt-1">
        <p className="font-bold leading-snug text-white">{title}</p>
        {text ? <p className="mt-0.5 text-sm text-slate-300">{text}</p> : null}
      </div>
    </li>
  );
}

const priceTextDe = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} THB`;
const priceTextEn = (n: number) => `THB ${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

/* ───────── Overview /touren ───────── */
const HUB_INTRO: L = {
  de: "Alle unsere Touren fahren Sie privat: ein weißes Hardtop-Kabinenboot, höchstens fünf Gäste und ein Preis pro Boot statt pro Person. Hier finden Sie jede Tour mit Route, Ablauf, Inklusivleistungen und häufigen Fragen, von der Hong-Lagune über Phi Phi am frühen Morgen und James Bond Island bis zu Sunset-Dinner, leuchtendem Plankton und Angeltouren. Schnorchel-Equipment stellen wir kostenlos zur Verfügung, bitte bei der Buchung ankreuzen. Passt keine Tour genau, stellen Sie Ihre eigene im Tour-Baukasten zusammen.",
  en: "You travel on all our tours privately: a white hardtop cabin boat, a maximum of five guests and a price per boat instead of per person. Here you find every tour with route, itinerary, inclusions and frequently asked questions, from Hong Lagoon via Phi Phi in the early morning and James Bond Island to sunset dinner, glowing plankton and fishing trips. We provide snorkel gear free of charge, please tick it when booking. If no tour fits exactly, build your own in the tour builder.",
};

export function ToursHubPage() {
  return (
    <GuideShell>
      <HubView />
    </GuideShell>
  );
}

function HubView() {
  const lang = useGuideLang();
  const openBooking = useSI((s) => s.openBooking);
  const island = TOURS.filter((t) => t.kind === "island");
  const fishing = TOURS.filter((t) => t.kind === "fishing");
  const min = Math.min(...TOURS.map((t) => t.price));
  const groups: { id: string; title: string; tours: Tour[] }[] = [
    { id: "inseltouren", title: lang === "de" ? "Inseltouren und Sunset-Touren" : "Island and sunset tours", tours: island },
    { id: "angeltouren", title: lang === "de" ? "Angeltouren" : "Fishing trips", tours: fishing },
  ];
  return (
    <section lang={lang} className="px-4 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <TourBreadcrumb />
        <h1 className="max-w-4xl text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {lang === "de" ? "Private Bootstouren in Krabi: alle 15 Touren ab Ao Nang" : "Private Boat Tours in Krabi: All 15 Tours from Ao Nang"}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">{bi(HUB_INTRO, lang)}</p>
        <p className="mt-4 text-sm font-semibold text-slate-300">
          {lang === "de" ? "Preise ab " : "Prices from "}
          <span className="si-text-gradient text-lg font-extrabold">{formatTHB(min)}</span>{" "}
          {lang === "de" ? `pro Boot · max. ${MAX_GUESTS} Gäste · Start ab Ao Nang` : `per boat · max. ${MAX_GUESTS} guests · start from Ao Nang`}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => openBooking()} className={btn.primary}>
            <Sparkles className="size-4" />
            {lang === "de" ? "Tour anfragen" : "Request a tour"}
          </button>
          <button type="button" onClick={() => openBooking({ custom: true })} className={btn.glass}>
            <Wand2 className="size-4" />
            {lang === "de" ? "Eigene Tour bauen" : "Build your own tour"}
          </button>
          <a
            href={waLink(
              lang === "de"
                ? "Hallo Krabi Secret Islands! Ich interessiere mich für eine private Speedboat-Tour."
                : "Hi Krabi Secret Islands! I'm interested in a private speedboat tour.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={btn.whatsapp}
          >
            <WhatsAppIcon className="size-5" />
            {lang === "de" ? "Per WhatsApp fragen" : "Ask on WhatsApp"}
          </a>
        </div>

        {groups.map((g) => (
          <div key={g.id} id={g.id} className="scroll-mt-24 pt-14">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{g.title}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.tours.map((t) => (
                <TourLinkCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        ))}

        <p className="mt-12 text-sm text-slate-400">
          <Link to="/krabi-guide" search={keepLang} className="font-semibold text-cyan-300 hover:text-white">
            Krabi Insider Guide
          </Link>{" "}
          {lang === "de" ? "· Hintergrundwissen zu Inseln, Gezeiten und Reisezeit · " : "· background on islands, tides and best time to visit · "}
          {BRAND.name}
        </p>
      </div>
    </section>
  );
}
