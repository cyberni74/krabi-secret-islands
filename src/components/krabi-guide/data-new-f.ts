import type { Bi, GuideArticleInput } from "./types";
import { IMG } from "../secret-islands/content";
import SUN from "../../generated/sunset-times.json";

/**
 * New guide articles (batch F): sunset times in Krabi by month.
 * Fact policy: ALL times come from src/generated/sunset-times.json (NOAA algorithm, Ao Nang, UTC+7, 2026) and are
 * built programmatically below – never typed by hand. Prices only from TOURS in content.ts. No amounts for park fees.
 */

type SunRow = { month: number; day: number; sunrise: string; sunset: string; civilDusk: string };
const ROWS = SUN.rows as SunRow[];

const MONTHS_DE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const row = (m: number, d: number): SunRow => {
  const r = ROWS.find((x) => x.month === m && x.day === d);
  if (!r) throw new Error(`sunset-times.json: missing row ${m}/${d}`);
  return r;
};
const mins = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
const to12 = (t: string) => {
  const h = Number(t.slice(0, 2));
  return `${h > 12 ? h - 12 : h}:${t.slice(3, 5)} pm`;
};
const same = (t: string): Bi => ({ de: `${t} Uhr`, en: to12(t) });

const bySunset = [...ROWS].sort((a, b) => mins(a.sunset) - mins(b.sunset));
const EARLIEST = bySunset[0];
const LATEST = bySunset[bySunset.length - 1];
const SPAN = mins(LATEST.sunset) - mins(EARLIEST.sunset);
const DUSKS = [...ROWS].sort((a, b) => mins(a.civilDusk) - mins(b.civilDusk));
const DUSK_MIN = DUSKS[0].civilDusk;
const DUSK_MAX = DUSKS[DUSKS.length - 1].civilDusk;
const MIN = EARLIEST.sunset;
const MAX = LATEST.sunset;
const mname = (r: SunRow): Bi => ({ de: MONTHS_DE[r.month - 1], en: MONTHS_EN[r.month - 1] });
const R_NOV15 = row(11, 15);
const R_DEC15 = row(12, 15);
const R_JAN15 = row(1, 15);
const R_MAR15 = row(3, 15);
const R_JUL15 = row(7, 15);
const R_OCT15 = row(10, 15);

const TABLE_ROWS: Bi[][] = MONTHS_DE.map((de, i) => {
  const a = row(i + 1, 1);
  const b = row(i + 1, 15);
  return [
    { de, en: MONTHS_EN[i] },
    same(a.sunset),
    same(b.sunset),
    same(b.civilDusk),
  ];
});

export const NEW_ARTICLES_F: GuideArticleInput[] = [
  {
    slug: "krabi-sunset-time-by-month",
    category: "insider",
    short: { de: "Sonnenuntergang Krabi", en: "Krabi sunset times" },
    primaryKeyword: "Sonnenuntergang Krabi Uhrzeiten pro Monat",
    keywords: [
      "Sonnenuntergang Krabi Uhrzeiten pro Monat",
      "wann geht die Sonne unter Krabi",
      "Sonnenuntergang Ao Nang Uhrzeit",
      "Krabi sunset time by month",
      "sunset time Ao Nang",
      "golden hour Krabi",
      "Krabi Sonnenuntergang Bootstour",
    ],
    title: {
      de: "Sonnenuntergang Krabi: Uhrzeiten pro Monat 2026",
      en: "Krabi Sunset Time by Month (Ao Nang, 2026)",
    },
    metaDescription: {
      de: `Wann geht die Sonne unter Krabi? Tabelle für Ao Nang mit Uhrzeiten pro Monat (${MIN}–${MAX} Uhr), Golden Hour, Blue Hour und wann Sie aufs Boot sollten.`,
      en: `Krabi sunset time by month for Ao Nang: table of all 12 months (${to12(MIN)}–${to12(MAX)}), golden hour, blue hour and when to start your boat trip.`,
    },
    h1: {
      de: "Sonnenuntergang Krabi: Uhrzeiten pro Monat und die beste Startzeit fürs Boot",
      en: "Krabi sunset time by month: when the sun sets in Ao Nang and when to board",
    },
    intro: {
      de: `Wann geht die Sonne unter Krabi? Das ganze Jahr über zwischen ${MIN} und ${MAX} Uhr Ortszeit – Krabi liegt nah am Äquator, die Tage sind also fast immer gleich lang. Diese Seite zeigt den Sonnenuntergang in Ao Nang für jeden Monat, berechnet statt geschätzt, und erklärt, was die Zahlen für Ihren Abend auf dem Boot bedeuten: wann die Golden Hour beginnt, wie lange es danach hell bleibt und ab wann das Plankton leuchtet.`,
      en: `What time is sunset in Krabi? All year round between ${to12(MIN)} and ${to12(MAX)} local time – Krabi sits close to the equator, so day length hardly changes. This page shows the sunset time in Ao Nang for every month, calculated rather than guessed, and explains what the numbers mean for your evening on the boat: when golden hour starts, how long it stays light afterwards and when the plankton glows.`,
    },
    sections: [
      {
        id: "sunset-time-by-month",
        h2: {
          de: "Sonnenuntergang Krabi pro Monat: Tabelle für Ao Nang",
          en: "Krabi sunset time by month: table for Ao Nang",
        },
        body: {
          de: [
            "Die Tabelle zeigt für jeden Monat den Sonnenuntergang am 1. und am 15. sowie das Ende der bürgerlichen Dämmerung am 15. Das ist der Moment, in dem die Sonne 6 Grad unter dem Horizont steht und der Himmel noch einen Hauch Licht hat, die hellsten Sterne aber schon sichtbar werden. Alle Zeiten sind Ortszeit (UTC+7) und gelten für das Jahr 2026.",
            "Für Tage zwischen dem 1. und 15. können Sie einfach interpolieren; die Werte ändern sich im Lauf eines Monats nur um wenige Minuten.",
          ],
          en: [
            "The table shows the sunset on the 1st and the 15th of each month, plus the end of civil twilight on the 15th. That is the moment the sun is 6 degrees below the horizon: the sky still holds a hint of light, but the brightest stars are already visible. All times are local time (UTC+7) and apply to the year 2026.",
            "For days between the 1st and the 15th you can simply interpolate; values change by only a few minutes over a month.",
          ],
        },
        table: {
          caption: {
            de: "Sonnenuntergang und Ende der bürgerlichen Dämmerung in Ao Nang, Krabi (2026, berechnet)",
            en: "Sunset and end of civil twilight in Ao Nang, Krabi (2026, calculated)",
          },
          head: [
            { de: "Monat", en: "Month" },
            { de: "Sonnenuntergang 1.", en: "Sunset on the 1st" },
            { de: "Sonnenuntergang 15.", en: "Sunset on the 15th" },
            { de: "Ende Dämmerung 15.", en: "End of twilight, 15th" },
          ],
          rows: TABLE_ROWS,
        },
        tip: {
          de: "Wie genau sind die Werte? Berechnet nach dem NOAA-Algorithmus für Meereshöhe mit freiem Horizont, Genauigkeit etwa ±2 Minuten. Inseln, Kalksteinfelsen und Wolken am Horizont verändern, wie lange Sie die Sonne wirklich sehen. Von Jahr zu Jahr verschieben sich die Zeiten um wenige Minuten.",
          en: "How accurate are the values? Calculated with the NOAA algorithm for sea level with an open horizon, accuracy about ±2 minutes. Islands, limestone cliffs and clouds on the horizon change how long you actually see the sun. From year to year the times shift by a few minutes.",
        },
      },
      {
        id: "earliest-and-latest-sunset",
        h2: {
          de: "Früh oder spät? Wie stark sich der Sonnenuntergang übers Jahr ändert",
          en: "Early or late? How much the sunset moves through the year",
        },
        body: {
          de: [
            `In unseren Daten ist der Sonnenuntergang am frühesten im ${mname(EARLIEST).de} (am ${EARLIEST.day}. um ${EARLIEST.sunset} Uhr) und am spätesten im ${mname(LATEST).de} (am ${LATEST.day}. um ${LATEST.sunset} Uhr). Der Unterschied über das ganze Jahr beträgt nur rund ${SPAN} Minuten. Zum Vergleich: In Mitteleuropa schwankt der Sonnenuntergang um mehrere Stunden.`,
            `Für die Planung heißt das: Egal wann Sie reisen, die Sonne geht kurz nach 18 Uhr bis kurz vor 19 Uhr unter. Von November bis Januar liegt sie am unteren Ende (Mitte Dezember ${R_DEC15.sunset} Uhr, Mitte Januar ${R_JAN15.sunset} Uhr), im Hochsommer am oberen Ende (Mitte Juli ${R_JUL15.sunset} Uhr). Im März liegt der Wert bei ${R_MAR15.sunset} Uhr, im Oktober Mitte des Monats bei ${R_OCT15.sunset} Uhr.`,
            `Die Dämmerung gibt Ihnen zusätzlich Spielraum: Das Ende der bürgerlichen Dämmerung liegt über das Jahr zwischen ${DUSK_MIN} und ${DUSK_MAX} Uhr. Nahe dem Äquator sinkt die Sonne steil, deshalb dauert der Übergang nur etwa 20 bis 25 Minuten, deutlich kürzer als in nördlichen Breiten.`,
          ],
          en: [
            `In our data the sunset is earliest in ${mname(EARLIEST).en} (on the ${EARLIEST.day}th at ${to12(EARLIEST.sunset)}) and latest in ${mname(LATEST).en} (on the ${LATEST.day}th at ${to12(LATEST.sunset)}). Over the whole year the difference is only about ${SPAN} minutes. By comparison, in central Europe the sunset moves by several hours.`,
            `For planning this means: whenever you travel, the sun sets shortly after 6 pm to shortly before 7 pm. From November to January it sits at the lower end (mid-December ${to12(R_DEC15.sunset)}, mid-January ${to12(R_JAN15.sunset)}), in high summer at the upper end (mid-July ${to12(R_JUL15.sunset)}). In March it is ${to12(R_MAR15.sunset)}, and in mid-October ${to12(R_OCT15.sunset)}.`,
            `Twilight gives you extra room: the end of civil twilight falls between ${to12(DUSK_MIN)} and ${to12(DUSK_MAX)} over the year. Close to the equator the sun drops steeply, so the transition lasts only about 20 to 25 minutes, much shorter than at northern latitudes.`,
          ],
        },
        list: {
          de: [
            `Frühester Sonnenuntergang: ${R_NOV15.sunset} Uhr (Mitte November)`,
            `Spätester Sonnenuntergang: ${R_JUL15.sunset} Uhr (Mitte Juli)`,
            `Ende der bürgerlichen Dämmerung: ${DUSK_MIN} bis ${DUSK_MAX} Uhr`,
          ],
          en: [
            `Earliest sunset: ${to12(R_NOV15.sunset)} (mid-November)`,
            `Latest sunset: ${to12(R_JUL15.sunset)} (mid-July)`,
            `End of civil twilight: ${to12(DUSK_MIN)} to ${to12(DUSK_MAX)}`,
          ],
        },
      },
      {
        id: "golden-hour-blue-hour",
        h2: {
          de: "Golden Hour und Blue Hour in Krabi",
          en: "Golden hour and blue hour in Krabi",
        },
        body: {
          de: [
            "Die Golden Hour ist die Zeit, in der die Sonne tief steht und das Licht warm und weich wird. Als Faustregel beginnt sie etwa eine Stunde vor Sonnenuntergang; am Äquator geht es nachher schneller als anderswo. Wer fotografiert, hat in der letzten halben Stunde vor Sonnenuntergang das schönste Licht auf den Kalksteinfelsen.",
            "Die Blue Hour folgt nach Sonnenuntergang. Der Himmel färbt sich von Orange über Rosa zu tiefem Blau, die Wasserfläche wird glatt und spiegelnd. Sie endet ungefähr mit dem Ende der bürgerlichen Dämmerung aus der Tabelle. Für Drohnenaufnahmen ist die Zeit kurz vor und nach Sonnenuntergang besonders reizvoll; Tipps dazu finden Sie in unserem Guide zu Foto- und Drohnen-Spots in Krabi.",
            "Wolken sind kein Problem, sondern oft ein Gewinn: Ein klarer, wolkenloser Himmel wirkt manchmal flach, während Wolken das Licht färben. Garantieren kann niemand, dass die Sonnenscheibe sichtbar bleibt.",
          ],
          en: [
            "Golden hour is the time when the sun is low and the light turns warm and soft. As a rule of thumb it begins about an hour before sunset; near the equator it passes faster than elsewhere. If you take photos, the last half hour before sunset gives the best light on the limestone cliffs.",
            "Blue hour follows after sunset. The sky shifts from orange through pink to deep blue, and the water turns smooth and reflective. It ends roughly with the end of civil twilight in the table. For drone shots, the time just before and after sunset is especially rewarding; you will find tips in our guide to photo and drone spots in Krabi.",
            "Clouds are not a problem, they are often a gain: a perfectly clear sky can look flat, while clouds catch and colour the light. Nobody can guarantee that the sun disc stays visible.",
          ],
        },
      },
      {
        id: "when-to-start-boat-tour",
        h2: {
          de: "Wann aufs Boot? Startzeit für den Sonnenuntergang planen",
          en: "When to board: planning your start time for sunset",
        },
        body: {
          de: [
            "Faustregel: Seien Sie etwa 30 bis 45 Minuten vor Sonnenuntergang am Aussichtspunkt oder am Ankerplatz. So haben Sie Zeit, anzukommen, ein Getränk in die Hand zu nehmen und den Platz am Boot zu wählen, ohne zu hetzen. Ziehen Sie diese Zeit vom Wert aus der Tabelle ab.",
            `Beispiel: Geht die Sonne um ${R_NOV15.sunset} Uhr unter (Mitte November), sollten Sie ab etwa 17:15 bis 17:30 Uhr am Ziel sein. Im Juli (${R_JUL15.sunset} Uhr) verschiebt sich das um rund 45 Minuten nach hinten. Unsere Sunset-Touren starten in der Regel ab 15:30 Uhr, damit vorher noch Zeit zum Baden oder für einen Stopp bleibt; die genaue Route stimmen wir mit Ihnen ab.`,
            "Bei Gezeiten und Seegang entscheidet der Kapitän vor Ort. Wie Ebbe und Flut die Auswahl der Strände und Lagunen beeinflussen, erklärt unser Gezeiten-Guide. Unser Beitrag zum privaten Sunset-Boot beschreibt den Ablauf eines Abends an Bord im Detail.",
          ],
          en: [
            "Rule of thumb: be at the viewpoint or anchorage about 30 to 45 minutes before sunset. That gives you time to arrive, pick up a drink and choose your spot on deck without rushing. Subtract this time from the value in the table.",
            `Example: if the sun sets at ${to12(R_NOV15.sunset)} (mid-November), you want to be at your spot from about 5:15 to 5:30 pm. In July (${to12(R_JUL15.sunset)}) that shifts back by roughly 45 minutes. Our sunset tours usually start from 3:30 pm, which leaves time for a swim or a stop beforehand; we agree the exact route with you.`,
            "For tides and sea conditions the captain decides on the day. How ebb and flood affect the choice of beaches and lagoons is explained in our tides guide. Our article on the private sunset boat describes an evening on board in detail.",
          ],
        },
        list: {
          de: [
            "Sunset-Zeit aus der Tabelle ablesen",
            "30 bis 45 Minuten abziehen: Ankunft am Aussichtspunkt",
            "Rückfahrt in der Dämmerung einplanen, nicht erst im Dunkeln losfahren",
            "Jacke oder dünnes Tuch für den Fahrtwind einpacken",
          ],
          en: [
            "Read the sunset time from the table",
            "Subtract 30 to 45 minutes: arrival at the viewpoint",
            "Plan the return during twilight, not after full dark",
            "Pack a light jacket or scarf for the wind on the way back",
          ],
        },
      },
      {
        id: "sunset-and-plankton-night",
        h2: {
          de: "Nach dem Sonnenuntergang: wann das Plankton leuchtet",
          en: "After sunset: when the plankton glows",
        },
        body: {
          de: [
            `Leuchtendes Plankton sieht man erst, wenn es richtig dunkel ist, also nach dem Ende der bürgerlichen Dämmerung aus der Tabelle (je nach Monat zwischen ${DUSK_MIN} und ${DUSK_MAX} Uhr). Mondlicht und Wetter beeinflussen, wie gut das Leuchten sichtbar ist; mehr dazu in unserem Plankton-Guide.`,
            "Wer beides erleben will, bucht die Kombi: erst Sonnenuntergang, dann Schwimmen im leuchtenden Meer. Alle drei Touren können Sie unverbindlich anfragen. Preise gelten pro Boot für bis zu 5 Gäste.",
          ],
          en: [
            `Glowing plankton is only visible when it is properly dark, that is after the end of civil twilight in the table (between ${to12(DUSK_MIN)} and ${to12(DUSK_MAX)} depending on the month). Moonlight and weather affect how well the glow shows; more in our plankton guide.`,
            "If you want both, book the combo: sunset first, then a swim in the glowing sea. You can request all three tours without obligation. Prices are per boat for up to 5 guests.",
          ],
        },
        list: {
          de: [
            "Sunset Romance & Dinner an Bord (sunset-dinner): 16.500 THB pro Boot, 4 Std. ab 15:30",
            "Sunset & Night Glow Kombi (sunset-glow-combo): 19.500 THB pro Boot, 6 Std. ab 15:30",
            "Night Glow – Leuchtendes Plankton (plankton-night): 14.500 THB pro Boot, 4 Std. ab 18:00",
          ],
          en: [
            "Sunset Romance & Dinner on Board (sunset-dinner): 16,500 THB per boat, 4 hrs from 3:30 pm",
            "Sunset & Night Glow Combo (sunset-glow-combo): 19,500 THB per boat, 6 hrs from 3:30 pm",
            "Night Glow – Bioluminescent Plankton (plankton-night): 14,500 THB per boat, 4 hrs from 6 pm",
          ],
        },
      },
      {
        id: "season-and-light",
        h2: {
          de: "Jahreszeit und Licht: Trockenzeit gegen Regenzeit",
          en: "Season and light: dry season versus rainy season",
        },
        body: {
          de: [
            `Die Sonnenuntergangszeit ist die gleiche, die Stimmung ist es nicht. In der Trockenzeit (etwa November bis April) ist der Horizont am Abend häufig klarer, und der Sonnenuntergang fällt mit ${R_NOV15.sunset} bis ${row(4, 15).sunset} Uhr in einen engen Bereich. In der Regenzeit (etwa Mai bis Oktober) sind Wolken und Schauer häufiger, das Licht kann dramatisch sein, die Sonne aber auch hinter einer Wolkenwand verschwinden.`,
            "Wie sich das auf Bootstouren auswirkt und was Sie in der Regenzeit beachten sollten, lesen Sie in unserem Guide zu Bootstouren in der Regenzeit. Allgemein zur Reisezeit hilft unser Guide zur besten Reisezeit für Krabi. Wir entscheiden gemeinsam am Tag selbst, ob und wann ausgelaufen wird.",
          ],
          en: [
            `The sunset time is the same, the mood is not. In the dry season (about November to April) the evening horizon is often clearer, and sunset falls into a narrow range of ${to12(R_NOV15.sunset)} to ${to12(row(4, 15).sunset)}. In the rainy season (about May to October) clouds and showers are more frequent; the light can be dramatic, but the sun may also vanish behind a wall of cloud.`,
            "How this affects boat tours and what to keep in mind in the rainy season is covered in our guide to boat tours in the rainy season. For general timing see our guide to the best time to visit Krabi. We decide together on the day whether and when to set out.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Um wie viel Uhr geht in Krabi die Sonne unter?",
          en: "What time does the sun set in Krabi?",
        },
        a: {
          de: `Über das Jahr zwischen ${MIN} Uhr (Mitte November) und ${MAX} Uhr (Mitte Juli) Ortszeit, nach unserer Berechnung für Ao Nang (Genauigkeit etwa ±2 Minuten). Die genaue Zeit für Ihren Monat finden Sie in der Tabelle oben.`,
          en: `Over the year between ${to12(MIN)} (mid-November) and ${to12(MAX)} (mid-July) local time, according to our calculation for Ao Nang (accuracy about ±2 minutes). The exact time for your month is in the table above.`,
        },
      },
      {
        q: {
          de: "Wie früh sollte ich zum Sonnenuntergang am Strand oder auf dem Boot sein?",
          en: "How early should I be in place for the sunset?",
        },
        a: {
          de: "Faustregel: 30 bis 45 Minuten vor Sonnenuntergang am Aussichtspunkt. Die schönste Farbe zeigt der Himmel oft in den Minuten vor und nach dem Verschwinden der Sonne.",
          en: "Rule of thumb: 30 to 45 minutes before sunset at the viewpoint. The sky often shows its best colours in the minutes before and after the sun disappears.",
        },
      },
      {
        q: {
          de: "Wie lange bleibt es nach Sonnenuntergang in Krabi hell?",
          en: "How long does it stay light after sunset in Krabi?",
        },
        a: {
          de: "Die bürgerliche Dämmerung endet nach unseren Daten rund 20 bis 25 Minuten nach Sonnenuntergang. Danach ist es für Plankton und Sterne dunkel genug. Hohe Wolken oder Inseln am Horizont können das Gefühl von Helligkeit verändern.",
          en: "According to our data civil twilight ends roughly 20 to 25 minutes after sunset. After that it is dark enough for plankton and stars. High clouds or islands on the horizon can change how bright it feels.",
        },
      },
      {
        q: {
          de: "Ist der Sonnenuntergang im Sommer in Krabi später als im Winter?",
          en: "Is sunset later in summer than in winter in Krabi?",
        },
        a: {
          de: `Ja, aber nur wenig: Mitte Juli ${R_JUL15.sunset} Uhr, Mitte Dezember ${R_DEC15.sunset} Uhr. Der Unterschied über das ganze Jahr liegt bei rund ${SPAN} Minuten.`,
          en: `Yes, but only slightly: ${to12(R_JUL15.sunset)} in mid-July, ${to12(R_DEC15.sunset)} in mid-December. The difference across the whole year is about ${SPAN} minutes.`,
        },
      },
      {
        q: {
          de: "Kann ich eine private Sunset-Tour in Krabi anfragen?",
          en: "Can I request a private sunset tour in Krabi?",
        },
        a: {
          de: "Ja. Sunset Romance & Dinner, die Sunset & Night Glow Kombi und die Plankton-Tour sind private Touren für bis zu 5 Gäste und können unverbindlich angefragt werden. Wir stimmen Startzeit und Route auf den Sonnenuntergang Ihres Reisemonats ab.",
          en: "Yes. Sunset Romance & Dinner, the Sunset & Night Glow Combo and the plankton tour are private tours for up to 5 guests and can be requested without obligation. We tune start time and route to the sunset of your travel month.",
        },
      },
    ],
    related: [
      "krabi-sunset-boat-tour-private",
      "krabi-bioluminescent-plankton-night-boat-tour",
      "krabi-boat-tours-rainy-season",
      "krabi-tides-guide",
      "krabi-photo-drone-spots",
      "best-time-to-visit-krabi",
    ],
    tourIds: ["sunset-dinner", "sunset-glow-combo", "plankton-night"],
    image: IMG.dinner,
  },
];
