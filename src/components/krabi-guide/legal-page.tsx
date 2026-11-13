import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { BRAND, UI } from "../secret-islands/content";
import { keepLang } from "../secret-islands/lang-context";
import { useTx } from "../secret-islands/store";
import { useGuideLang } from "./guide-helpers";
import { GuideShell } from "./guide-ui";

export type LegalKind = "imprint" | "privacy";

export function LegalPage({ kind }: { kind: LegalKind }) {
  return (
    <GuideShell>
      <LegalView kind={kind} />
    </GuideShell>
  );
}

function LegalView({ kind }: { kind: LegalKind }) {
  const lang = useGuideLang();
  const { t } = useTx();
  const title = t(kind === "imprint" ? UI.imprint : UI.privacy);
  const home = lang === "de" ? "Startseite" : "Home";
  return (
    <article lang={lang} className="px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <nav aria-label={lang === "de" ? "Brotkrümelnavigation" : "Breadcrumb"} className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-[13px] font-semibold text-slate-300">
            <li>
              <Link to="/" search={keepLang} className="inline-flex min-h-8 items-center rounded hover:text-white">
                {home}
              </Link>
            </li>
            <li aria-current="page" className="inline-flex items-center gap-1 text-cyan-200">
              <ChevronRight aria-hidden className="size-3.5 text-slate-500" />
              {title}
            </li>
          </ol>
        </nav>
        <h1 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl">{title}</h1>
        {kind === "imprint" ? <Imprint lang={lang} /> : <Privacy lang={lang} />}
      </div>
    </article>
  );
}

function Imprint({ lang }: { lang: "de" | "en" }) {
  const rows = [
    ["Krabi Secret Islands Co., Ltd.", lang === "de" ? "Anbieter" : "Operator"],
    ["Pak Nam, Mueang Krabi District, Krabi 81000, Thailand", lang === "de" ? "Adresse" : "Address"],
    [BRAND.email, "E-Mail"],
    [BRAND.whatsappDisplay, "WhatsApp"],
    [lang === "de" ? "Anfragen jederzeit · Antwort meist in 30 Minuten" : "Requests any time · reply usually within 30 minutes", lang === "de" ? "Erreichbarkeit" : "Availability"],
    [lang === "de" ? "Abfahrten ab Ao Nang und Krabi Town" : "Departures from Ao Nang and Krabi Town", lang === "de" ? "Tourstart" : "Departures"],
  ];
  return (
    <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-200">
      <p>
        {lang === "de"
          ? "Krabi Secret Islands betreibt private Speedboat-Touren ab Ao Nang und Krabi Town. Die folgenden Angaben sind die Kontaktdaten, die auf dieser Website genannt werden."
          : "Krabi Secret Islands runs private speedboat tours from Ao Nang and Krabi Town. The details below are the contact facts published on this website."}
      </p>
      <dl className="space-y-3">
        {rows.map(([value, label]) => (
          <div key={label}>
            <dt className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{label}</dt>
            <dd className="mt-1">{label === "E-Mail" ? <a className="hover:text-white" href={`mailto:${value}`}>{value}</a> : label === "WhatsApp" ? <a className="hover:text-white" href={`https://wa.me/${BRAND.whatsapp}`}>{value}</a> : value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Privacy({ lang }: { lang: "de" | "en" }) {
  const paragraphs =
    lang === "de"
      ? [
          "Wenn Sie eine Buchungsanfrage senden, speichern wir Ihre Angaben (Name, Kontaktdaten, Tourwünsche) in unserer Datenbank und erhalten sie per E-Mail, um Ihre Anfrage zu bearbeiten (Art. 6 Abs. 1 lit. b DSGVO).",
          "Zum Schutz vor Spam speichern wir Ihre IP-Adresse nur als nicht rückrechenbaren Hash. Über WhatsApp geht die Nachricht nur, wenn Sie sie selbst absenden.",
          "Wir löschen Anfragen, sobald sie nicht mehr benötigt werden. Auskunft oder Löschung jederzeit per E-Mail an " + BRAND.email + ". Ihre Spracheinstellung bleibt lokal in Ihrem Browser.",
        ]
      : [
          "When you send a booking request, we store your details (name, contact details, tour wishes) in our database and receive them by e-mail in order to process your request (Art. 6(1)(b) GDPR).",
          "To prevent spam we only keep a non-reversible hash of your IP address. A WhatsApp message is only sent if you send it yourself.",
          "We delete requests once they are no longer needed. Ask us any time by e-mail at " + BRAND.email + " for access or deletion. Your language preference stays locally in your browser.",
        ];
  return (
    <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-200">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </div>
  );
}
