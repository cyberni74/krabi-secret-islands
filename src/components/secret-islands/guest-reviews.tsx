import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useId, useRef, useState, type FormEvent, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import { submitGuestReview, type PublicReviews } from "@/lib/server/guest-reviews";
import { SectionTitle, btn } from "./fx";
import { useTx } from "./store";

/** Number with one decimal in the visitor's language (4,5 / 4.5). */
function fmt(n: number, lang: string) {
  return n.toLocaleString(lang === "de" ? "de-DE" : "en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

/** Read-only stars with half-star precision: a gold star clipped to the fractional width over a grey one. */
export function StarDisplay({ value, className }: { value: number; className?: string }) {
  return (
    <span className="inline-flex" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block">
            <Star className={cn("text-slate-600", className)} />
            <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={cn("fill-si-gold text-si-gold", className)} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

/**
 * Star picker in half-star steps. Pointer: the left half of a star = x.5, the right half = full star.
 * Keyboard / screen reader: a slider (arrow keys, Home/End).
 */
function StarInput({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  const { lang } = useTx();
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value;
  const at = (e: PointerEvent) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return value;
    const x = Math.max(0, Math.min(1, (e.clientX - box.left) / box.width));
    return Math.max(0.5, Math.ceil(x * 10) / 2);
  };
  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowUp" ? 0.5 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.5 : 0;
    if (step) {
      e.preventDefault();
      onChange(Math.max(0.5, Math.min(5, (value || 0) + step)));
    } else if (e.key === "Home") onChange(0.5);
    else if (e.key === "End") onChange(5);
  };
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-valuemin={0.5}
        aria-valuemax={5}
        aria-valuenow={value || undefined}
        aria-valuetext={value ? `${fmt(value, lang)} / 5` : undefined}
        onKeyDown={onKey}
        onPointerMove={(e) => e.pointerType === "mouse" && setHover(at(e))}
        onPointerLeave={() => setHover(null)}
        onClick={(e) => onChange(at(e as unknown as PointerEvent))}
        className="inline-flex min-h-11 cursor-pointer touch-manipulation items-center rounded-xl px-1 outline-none focus-visible:ring-2 focus-visible:ring-si-cyan"
      >
        <StarDisplay value={shown} className="size-9 sm:size-10" />
      </div>
      <span className="min-w-14 text-lg font-extrabold text-white" aria-live="polite">
        {value ? `${fmt(value, lang)} / 5` : "– / 5"}
      </span>
    </div>
  );
}

function ReviewForm() {
  const { t, lang } = useTx();
  const qc = useQueryClient();
  const nameId = useId();
  const textId = useId();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState<string | null>(null);
  const send = useMutation({
    mutationFn: () => submitGuestReview({ data: { name, rating, text, lang, website } }),
    onSuccess: (res) => {
      if (res.ok) void qc.invalidateQueries({ queryKey: ["public-reviews"] });
      else setError(res.error);
    },
    onError: () => setError("store-failed"),
  });

  if (send.data?.ok) {
    return (
      <div role="status" className="si-glass rounded-3xl p-6 text-center">
        <p className="text-xl font-extrabold">{t({ de: "Vielen Dank für Ihre Bewertung!", en: "Thank you for your review!" })}</p>
        <p className="mt-2 text-slate-300">{t({ de: "Sie erscheint nach einer kurzen Prüfung auf dieser Seite.", en: "It will appear on this page after a short check." })}</p>
      </div>
    );
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (name.trim().length < 2) return setError("name");
    if (!rating) return setError("rating");
    send.mutate();
  };
  const msg: Record<string, string> = {
    name: t({ de: "Bitte geben Sie Ihren Namen ein.", en: "Please enter your name." }),
    rating: t({ de: "Bitte wählen Sie Ihre Sterne.", en: "Please choose your stars." }),
    "rate-limited": t({ de: "Zu viele Bewertungen. Bitte versuchen Sie es morgen erneut.", en: "Too many reviews. Please try again tomorrow." }),
    "no-links": t({ de: "Bitte ohne Links schreiben.", en: "Please write without links." }),
    "store-failed": t({ de: "Das Senden hat nicht geklappt. Bitte versuchen Sie es erneut.", en: "Sending failed. Please try again." }),
  };

  return (
    <form onSubmit={onSubmit} className="si-glass mx-auto max-w-xl space-y-5 rounded-3xl p-6 sm:p-8" noValidate>
      <h3 className="text-xl font-extrabold">{t({ de: "Ihre Bewertung", en: "Your review" })}</h3>
      <div>
        <label htmlFor={nameId} className="text-sm font-bold text-slate-200">
          {t({ de: "Name", en: "Name" })}
        </label>
        <input
          id={nameId}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={60}
          autoComplete="given-name"
          className="mt-1.5 min-h-12 w-full rounded-2xl bg-white/5 px-4 text-base text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan"
        />
      </div>
      <div>
        <span className="text-sm font-bold text-slate-200">{t({ de: "Sterne", en: "Stars" })}</span>
        <div className="mt-1">
          <StarInput value={rating} onChange={setRating} label={t({ de: "Bewertung in Sternen", en: "Rating in stars" })} />
        </div>
      </div>
      <div>
        <label htmlFor={textId} className="text-sm font-bold text-slate-200">
          {t({ de: "Ihre Erfahrung (optional)", en: "Your experience (optional)" })}
        </label>
        <textarea
          id={textId}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={800}
          rows={4}
          className="mt-1.5 w-full rounded-2xl bg-white/5 px-4 py-3 text-base text-white outline-none ring-1 ring-white/10 focus:ring-si-cyan"
        />
      </div>
      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>
      {error ? (
        <p role="alert" className="text-sm font-semibold text-rose-300">
          {msg[error] ?? msg["store-failed"]}
        </p>
      ) : null}
      <button type="submit" disabled={send.isPending} className={cn(btn.primary, "w-full")}>
        {send.isPending ? t({ de: "Sende …", en: "Sending …" }) : t({ de: "Bewertung abschicken", en: "Submit review" })}
      </button>
      <p className="text-xs text-slate-400">{t({ de: "Ohne Anmeldung. Wir speichern nur Name, Sterne und Text.", en: "No sign-up. We only store name, stars and text." })}</p>
    </form>
  );
}

/** Guest reviews: summary with half stars, approved reviews and the review form (no sign-up). */
export function GuestReviews({ data }: { data: PublicReviews }) {
  const { t, lang } = useTx();
  return (
    <section id="reviews" className="relative scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow={t({ de: "Gästestimmen", en: "Guest reviews" })} title={t({ de: "Was unsere Gäste sagen", en: "What our guests say" })} />
        {data.count > 0 ? (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="si-text-gradient text-6xl font-black leading-none">{fmt(data.average, lang)}</span>
            <div>
              <StarDisplay value={data.average} className="size-6" />
              <p className="mt-1 text-sm font-semibold text-slate-300">
                {t({ de: "Bewertungen:", en: "Reviews:" })} {data.count}
              </p>
            </div>
          </div>
        ) : null}
        {data.items.length ? (
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.items.map((r) => (
              <li key={r.id} className="si-glass rounded-3xl p-5">
                <div className="flex items-center justify-between gap-3">
                  <StarDisplay value={r.rating} className="size-5" />
                  <span className="text-sm font-bold text-slate-300">{fmt(r.rating, lang)} / 5</span>
                </div>
                {r.text ? <p className="mt-3 text-[15px] leading-relaxed text-slate-200">{r.text}</p> : null}
                <p className="mt-3 text-sm font-bold text-white">
                  {r.name} <span className="font-normal text-slate-400">· {r.date}</span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-slate-300">{t({ de: "Seien Sie der Erste und bewerten Sie uns.", en: "Be the first to review us." })}</p>
        )}
        <div className="mt-10">
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}
