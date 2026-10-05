/**
 * Content of the guest-info page (/info, DE + EN). Four SEO topics, each with H2, text, optional list and FAQ.
 * Facts only from TOURS / BOAT_FACTS / the Insider Guide. No fee amounts (park fees: general sentence only),
 * no invented pier names, parking or pick-up promises (those are "confirmed on request").
 */
import type { Bi } from "./types";

export type InfoLink = { kind: "tour" | "guide" | "tours" | "guideHub"; slug?: string; tourId?: string; label: Bi };

export type InfoSection = {
  id: string;
  h2: Bi;
  body: { de: string[]; en: string[] };
  list?: { de: string[]; en: string[] };
  table?: { head: Bi[]; rows: Bi[][] };
  links: InfoLink[];
  faq: { q: Bi; a: Bi }[];
};

export const INFO_META = {
  title: {
    de: "Krabi Bootstour Infos: Treffpunkt, Preise, privat vs. Gruppe",
    en: "Krabi Private Boat Tour Info: Meeting Point, What's Included, Private vs Group",
  },
  description: {
    de: "Treffpunkt Ao Nang, was im Preis einer privaten Bootstour enthalten ist, privat oder Gruppentour und eine Tagesroute 4 Islands + Sunset – alle Infos vor der Buchung.",
    en: "Meeting point Ao Nang, what a private boat tour price includes, private vs group tour and a one-day route 4 Islands + sunset – everything to know before you book.",
  },
  h1: {
    de: "Krabi Bootstour: Infos vor der Buchung",
    en: "Krabi private boat tour: info before you book",
  },
  intro: {
    de: "Wo startet die Tour, was ist im Preis enthalten, lohnt sich ein privates Boot gegenüber einer Gruppentour und wie sieht ein Tag mit den 4 Islands und Sonnenuntergang aus? Hier finden Sie die vier Antworten, die uns vor der Buchung am häufigsten gestellt werden. Alle Touren fahren wir privat ab Ao Nang, mit höchstens fünf Gästen und einem Preis pro Boot.",
    en: "Where does the tour start, what is included in the price, is a private boat worth it compared with a group tour, and what does a day with the 4 Islands and sunset look like? Here are the four answers we are asked most often before booking. We run all tours privately from Ao Nang, with a maximum of five guests and a price per boat.",
  },
} as const;

export const INFO_SECTIONS: InfoSection[] = [
  /* 1 ─────────────────────────── Meeting point */
  {
    id: "treffpunkt-ao-nang",
    h2: { de: "Krabi Bootstour Treffpunkt: Start in Ao Nang", en: "Krabi boat tour meeting point: start in Ao Nang" },
    body: {
      de: [
        "Alle unsere Touren starten in Ao Nang. Sie müssen sich nicht selbst zum Boot durchschlagen: Der Hotel-Transfer Ao Nang/Krabi ist bei unseren Touren in der Leistungsliste aufgeführt, und die Abholung vom Hotel ist flexibel. Das ist ein wesentlicher Unterschied zu Gruppentouren, bei denen Sie am Pier warten, bis der Sammelbus weitere Hotels abgeklappert hat.",
        "Den genauen Treffpunkt, die Abholzeit und eine Wegbeschreibung schicken wir Ihnen nach Ihrer Anfrage per WhatsApp oder E-Mail, abgestimmt auf Ihr Hotel und Ihre Tour. Die Startzeiten sind je nach Tour unterschiedlich: früh am Morgen um 07:00 oder 08:00 Uhr (zum Beispiel Phi Phi und die Inseltouren), um 13:00 Uhr bei der 4-Islands-Tour und am späten Nachmittag bzw. Abend bei Sunset- und Plankton-Touren.",
        "Wie es mit Parkplätzen für den eigenen Mietwagen oder Roller aussieht, bestätigen wir Ihnen bei der Anfrage. Nennen Sie uns dazu einfach Ihr Hotel und den gewünschten Tag.",
      ],
      en: [
        "All our tours start in Ao Nang. You do not have to find your own way to the boat: the hotel transfer Ao Nang/Krabi is listed in the inclusions of our tours, and the hotel pick-up is flexible. That is a key difference from group tours, where you wait at the pier until the shuttle has collected other hotels.",
        "We send you the exact meeting point, pick-up time and directions by WhatsApp or e-mail after your inquiry, tailored to your hotel and your tour. Start times differ by tour: early in the morning at 7 or 8 am (for example Phi Phi and the island tours), at 1 pm on the 4 Islands tour and late afternoon or evening on sunset and plankton tours.",
        "How parking works for your own rental car or scooter, we confirm when you inquire. Just tell us your hotel and the day you have in mind.",
      ],
    },
    list: {
      de: [
        "Start: Ao Nang, privates Speedboat, max. 5 Gäste",
        "Hotel-Transfer Ao Nang/Krabi laut Leistungsliste der Tour",
        "Treffpunkt und Zeit bestätigen wir nach der Anfrage per WhatsApp oder E-Mail",
        "Parken mit Mietwagen oder Roller: Bestätigung bei der Anfrage",
      ],
      en: [
        "Start: Ao Nang, private speedboat, max. 5 guests",
        "Hotel transfer Ao Nang/Krabi according to the tour inclusions",
        "We confirm meeting point and time after your inquiry by WhatsApp or e-mail",
        "Parking with a rental car or scooter: confirmed when you inquire",
      ],
    },
    links: [
      { kind: "tours", label: { de: "Alle Touren ab Ao Nang", en: "All tours from Ao Nang" } },
      { kind: "guide", slug: "ao-nang-vs-railay-where-to-stay", label: { de: "Ao Nang oder Railay: Wo wohnen?", en: "Ao Nang vs Railay: where to stay" } },
    ],
    faq: [
      {
        q: { de: "Wo ist der Treffpunkt für die Bootstour in Ao Nang?", en: "Where is the meeting point for the boat tour in Ao Nang?" },
        a: {
          de: "Die Touren starten in Ao Nang, und der Hotel-Transfer Ao Nang/Krabi gehört zur Leistungsliste. Den genauen Treffpunkt und die Abholzeit bestätigen wir Ihnen nach der Anfrage per WhatsApp oder E-Mail.",
          en: "The tours start in Ao Nang, and the hotel transfer Ao Nang/Krabi is part of the inclusions. We confirm the exact meeting point and pick-up time after your inquiry by WhatsApp or e-mail.",
        },
      },
      {
        q: { de: "Werde ich vom Hotel abgeholt?", en: "Will I be picked up from my hotel?" },
        a: {
          de: "Ja, bei Hotels in Ao Nang und Krabi ist der Hotel-Transfer in der Leistungsliste der Touren enthalten.",
          en: "Yes, for hotels in Ao Nang and Krabi the hotel transfer is part of the tour inclusions.",
        },
      },
    ],
  },

  /* 2 ─────────────────────────── What is included */
  {
    id: "was-ist-im-preis-enthalten",
    h2: { de: "Was ist im Preis einer privaten Bootstour enthalten?", en: "What is included in the price of a private boat tour?" },
    body: {
      de: [
        "Unsere Preise gelten pro Boot für bis zu fünf Gäste, nicht pro Person. Das bedeutet: Je mehr Gäste mitfahren, desto günstiger wird die Tour pro Kopf. Im Tourpreis enthalten sind laut Leistungsliste das private Speedboat mit Kapitän, Zeit zum Schnorcheln, Schwimmen und Entspannen, Wasser, Softdrinks und Obst sowie der Hotel-Transfer Ao Nang/Krabi. Die genaue Liste steht auf der Seite jeder Tour.",
        "Schnorchel-Equipment stellen wir kostenlos zur Verfügung, es muss bei der Buchung angekreuzt werden. Zusätzliche Wünsche wie Catering an Bord, weitere Getränke oder Drohnenaufnahmen können Sie bei der Buchung ergänzen. Bei Sunset- und Romantik-Touren sind Prosecco oder Champagner und bei Angeltouren Ruten, Köder und Guide enthalten, auch das steht in der jeweiligen Leistungsliste.",
        "Nationalpark-Eintritt: Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr. Diese ist nicht im Tourpreis enthalten und wird vor Ort direkt am Eingang bei den Rangern bezahlt. Bitte halten Sie dafür Bargeld in Baht bereit.",
      ],
      en: [
        "Our prices apply per boat for up to five guests, not per person. The more guests join, the cheaper the tour becomes per head. According to the inclusions, the tour price covers the private speedboat with captain, time to snorkel, swim and relax, water, soft drinks and fruit, and the hotel transfer Ao Nang/Krabi. The exact list is on the page of each tour.",
        "We provide snorkel gear free of charge; please tick it when booking. Extra wishes such as catering on board, more drinks or drone shots can be added when you book. On sunset and romance tours prosecco or champagne is included, on fishing trips rods, bait and guide; this too is in the inclusions of each tour.",
        "National park entrance: some islands and national parks charge an entrance fee. This is not included in the tour price and is paid on site directly to the rangers at the entrance. Please have cash in baht ready.",
      ],
    },
    list: {
      de: [
        "Enthalten: privates Speedboat mit Kapitän, Wasser, Softdrinks & Obst, Zeit zum Schnorcheln, Schwimmen & Entspannen, Hotel-Transfer Ao Nang/Krabi",
        "Kostenlos, bei der Buchung ankreuzen: Schnorchel-Equipment",
        "Je nach Tour: Prosecco/Champagner, Dinner, Angelausrüstung, Thai-Lunch an Bord",
        "Nicht im Tourpreis: Eintrittsgebühr einzelner Inseln bzw. Nationalparks, vor Ort bei den Rangern",
        "Optional zubuchbar: Catering, weitere Getränke, Drohnenaufnahmen",
      ],
      en: [
        "Included: private speedboat with captain, water, soft drinks & fruit, time to snorkel, swim & relax, hotel transfer Ao Nang/Krabi",
        "Free, tick when booking: snorkel gear",
        "Depending on the tour: prosecco/champagne, dinner, fishing gear, Thai lunch on board",
        "Not in the tour price: entrance fee of some islands or national parks, paid on site to the rangers",
        "Optional extras: catering, more drinks, drone shots",
      ],
    },
    links: [
      { kind: "guide", slug: "private-boat-charter-krabi-cost", label: { de: "Was kostet eine private Bootstour in Krabi?", en: "How much does a private boat tour in Krabi cost?" } },
      { kind: "guide", slug: "krabi-national-park-fees-islands", label: { de: "Nationalpark-Gebühren: So funktioniert der Inseleintritt", en: "National park fees: how island entry works" } },
    ],
    faq: [
      {
        q: { de: "Was ist im Preis einer privaten Bootstour in Krabi enthalten?", en: "What is included in the price of a private boat tour in Krabi?" },
        a: {
          de: "Laut Leistungsliste das private Speedboat mit Kapitän, Zeit zum Schnorcheln, Schwimmen und Entspannen, Wasser, Softdrinks und Obst sowie der Hotel-Transfer Ao Nang/Krabi. Schnorchel-Equipment ist kostenlos und wird bei der Buchung angekreuzt. Je nach Tour kommen Prosecco, Dinner oder Angelausrüstung dazu.",
          en: "According to the inclusions: the private speedboat with captain, time to snorkel, swim and relax, water, soft drinks and fruit, and the hotel transfer Ao Nang/Krabi. Snorkel gear is free and ticked when booking. Depending on the tour, prosecco, dinner or fishing gear are added.",
        },
      },
      {
        q: { de: "Ist die Nationalpark-Gebühr im Tourpreis enthalten?", en: "Is the national park fee included in the tour price?" },
        a: {
          de: "Nein. Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr. Diese ist nicht im Tourpreis enthalten und wird vor Ort direkt am Eingang bei den Rangern bezahlt.",
          en: "No. Some islands and national parks charge an entrance fee. This is not included in the tour price and is paid on site directly to the rangers at the entrance.",
        },
      },
      {
        q: { de: "Gilt der Preis pro Person oder pro Boot?", en: "Is the price per person or per boat?" },
        a: {
          de: "Pro Boot für bis zu fünf Gäste, nicht pro Person.",
          en: "Per boat for up to five guests, not per person.",
        },
      },
    ],
  },

  /* 3 ─────────────────────────── Private vs group */
  {
    id: "privat-oder-gruppentour",
    h2: { de: "Krabi Ausflüge buchen: privat oder Gruppentour?", en: "Booking Krabi excursions: private or group tour?" },
    body: {
      de: [
        "Gruppentouren sind für viele der günstigste Einstieg: Sie zahlen pro Person, fahren mit vielen anderen Gästen und folgen einem festen Fahrplan mit Sammel-Pickups und festem Mittagessen. Das funktioniert, hat aber einen Preis in Zeit und Ruhe. Bei einem privaten Boot gehört das Boot Ihrer Gruppe, und Sie entscheiden gemeinsam mit dem Kapitän über Tempo, Stopps und Zeitfenster.",
        "Rechnerisch lohnt sich ein privates Boot besonders ab zwei bis drei Personen, weil der Preis pro Boot gilt und sich auf bis zu fünf Gäste verteilt. Für Familien, Paare und kleine Freundesgruppen kommt dazu, dass wir antizyklisch fahren, also früher oder später als die Gruppenboote, und damit Orte oft dann erreichen, wenn dort wenig los ist.",
      ],
      en: [
        "Group tours are the cheapest entry for many: you pay per person, travel with many other guests and follow a fixed schedule with shared pick-ups and a fixed lunch. That works, but it costs time and peace. On a private boat the boat belongs to your group, and you decide together with the captain about pace, stops and time window.",
        "In terms of numbers a private boat pays off especially from two or three people, because the price applies per boat and is shared by up to five guests. For families, couples and small groups of friends it also helps that we go against the flow, that is earlier or later than the group boats, and so often reach places when little is going on.",
      ],
    },
    table: {
      head: [
        { de: "Kriterium", en: "Criterion" },
        { de: "Private Bootstour (wir)", en: "Private boat tour (us)" },
        { de: "Gruppentour", en: "Group tour" },
      ],
      rows: [
        [
          { de: "Preisbasis", en: "Price basis" },
          { de: "Pro Boot, bis 5 Gäste", en: "Per boat, up to 5 guests" },
          { de: "Pro Person", en: "Per person" },
        ],
        [
          { de: "Gäste an Bord", en: "Guests on board" },
          { de: "Nur Ihre Gruppe, max. 5", en: "Only your group, max. 5" },
          { de: "Viele fremde Gäste", en: "Many other guests" },
        ],
        [
          { de: "Zeitplan", en: "Schedule" },
          { de: "Abstimmung mit dem Kapitän, antizyklische Startzeiten", en: "Agreed with the captain, off-peak start times" },
          { de: "Fester Fahrplan, feste Stopps", en: "Fixed timetable, fixed stops" },
        ],
        [
          { de: "Abholung", en: "Pick-up" },
          { de: "Hotel-Transfer Ao Nang/Krabi, flexibel", en: "Hotel transfer Ao Nang/Krabi, flexible" },
          { de: "Meist Sammel-Pickup", en: "Usually shared pick-up" },
        ],
        [
          { de: "Gut für", en: "Good for" },
          { de: "Familien, Paare, kleine Gruppen, Fotografen", en: "Families, couples, small groups, photographers" },
          { de: "Reisende mit kleinem Budget, Solo-Reisende", en: "Budget travellers, solo travellers" },
        ],
      ],
    },
    links: [
      { kind: "tours", label: { de: "Alle privaten Touren ansehen", en: "View all private tours" } },
      { kind: "guide", slug: "longtail-vs-speedboat-krabi", label: { de: "Longtail oder Speedboot?", en: "Longtail or speedboat?" } },
      { kind: "guide", slug: "hong-island-vs-4-islands-vs-phi-phi", label: { de: "Hong Island, 4 Islands oder Phi Phi?", en: "Hong Island, 4 Islands or Phi Phi?" } },
    ],
    faq: [
      {
        q: { de: "Lohnt sich ein privates Boot gegenüber einer Gruppentour?", en: "Is a private boat worth it compared with a group tour?" },
        a: {
          de: "Das hängt von Gruppengröße und Wünschen ab. Ein privates Boot wird pro Boot für bis zu fünf Gäste berechnet und lohnt sich ab etwa zwei bis drei Personen, wenn Ihnen Ruhe, flexible Zeiten und Hotel-Transfer wichtig sind. Wer vor allem das niedrigste Budget pro Person sucht, fährt mit einer Gruppentour günstiger.",
          en: "It depends on group size and wishes. A private boat is priced per boat for up to five guests and pays off from about two or three people if peace, flexible times and hotel transfer matter to you. If the lowest budget per person is your main aim, a group tour is cheaper.",
        },
      },
      {
        q: { de: "Wie viele Gäste fahren auf einem privaten Boot mit?", en: "How many guests travel on a private boat?" },
        a: {
          de: "Höchstens fünf, und ausschließlich Ihre eigene Gruppe.",
          en: "A maximum of five, and only your own group.",
        },
      },
    ],
  },

  /* 4 ─────────────────────────── One-day route */
  {
    id: "tagesroute-4-islands-sunset",
    h2: { de: "Ein-Tages-Route: 4 Islands und Sunset", en: "One-day route: 4 Islands and sunset" },
    body: {
      de: [
        "Die beliebteste Tagesroute ist unsere 4-Islands-Tour mit Sonnenuntergang: Wir legen um 13:00 Uhr in Ao Nang ab, wenn die Gruppenboote bereits auf dem Rückweg sind, und fahren sechs Stunden lang über die vier berühmten Stopps. Je nach Seegang und Gezeiten kann der Kapitän die Reihenfolge anpassen.",
        "Die Tour endet am Abend, wenn die Sonne über den Kalksteinfelsen untergeht. Prosecco zum Sonnenuntergang ist in der Leistungsliste enthalten. Möchten Sie den Abend verlängern, schauen Sie sich unsere Sunset-Touren mit Dinner oder leuchtendem Plankton an. Zu welcher Uhrzeit die Sonne in welchem Monat untergeht, steht in unserer berechneten Übersicht im Guide.",
      ],
      en: [
        "The most popular one-day route is our 4 Islands tour with sunset: we leave Ao Nang at 1 pm, when the group boats are already heading home, and spend six hours on the four famous stops. Depending on sea and tides the captain can adjust the order.",
        "The tour ends in the evening when the sun sets over the limestone cliffs. Prosecco at sunset is part of the inclusions. If you want to extend the evening, look at our sunset tours with dinner or glowing plankton. At what time the sun sets in which month is in our calculated overview in the guide.",
      ],
    },
    list: {
      de: [
        "13:00 Uhr: Start in Ao Nang, Hotel-Transfer Ao Nang/Krabi",
        "Nachmittag: Koh Poda, Chicken Island, Tup-Sandbank (bei Niedrigwasser begehbar) und Bucht von Phra Nang, Reihenfolge nach Seegang und Gezeiten",
        "Zwischendurch: Zeit zum Schnorcheln, Schwimmen und Entspannen",
        "Abend: Sonnenuntergang mit Prosecco, Rückfahrt nach Ao Nang",
      ],
      en: [
        "1 pm: start in Ao Nang, hotel transfer Ao Nang/Krabi",
        "Afternoon: Koh Poda, Chicken Island, the Tup sandbar (walkable at low tide) and the bay of Phra Nang, order depending on sea and tides",
        "In between: time to snorkel, swim and relax",
        "Evening: sunset with prosecco, return to Ao Nang",
      ],
    },
    links: [
      { kind: "tour", tourId: "4islands-sunset", label: { de: "4-Islands VIP & Sunset Special ansehen", en: "View the 4-Islands VIP & Sunset Special" } },
      { kind: "tour", tourId: "sunset-dinner", label: { de: "Sunset Dinner", en: "Sunset dinner" } },
      { kind: "tour", tourId: "sunset-glow-combo", label: { de: "Sunset & Plankton Kombi", en: "Sunset & plankton combo" } },
      { kind: "guide", slug: "4-islands-krabi-names-map-sandbar-timing", label: { de: "4 Islands Krabi: Namen, Karte, Sandbank", en: "4 Islands Krabi: names, map, sandbar" } },
      { kind: "guide", slug: "krabi-sunset-time-by-month", label: { de: "Sonnenuntergang Krabi: Uhrzeiten pro Monat", en: "Krabi sunset time by month" } },
    ],
    faq: [
      {
        q: { de: "Wie lange dauert die 4-Islands-Tour mit Sonnenuntergang?", en: "How long does the 4 Islands tour with sunset take?" },
        a: {
          de: "Sechs Stunden ab 13:00 Uhr in Ao Nang. Der Preis gilt pro Boot für bis zu fünf Gäste.",
          en: "Six hours from 1 pm in Ao Nang. The price applies per boat for up to five guests.",
        },
      },
      {
        q: { de: "Welche Inseln besucht die 4-Islands-Tour?", en: "Which islands does the 4 Islands tour visit?" },
        a: {
          de: "Koh Poda, Chicken Island, die Tup-Sandbank und die Bucht von Phra Nang. Die Reihenfolge richtet sich nach Seegang und Gezeiten.",
          en: "Koh Poda, Chicken Island, the Tup sandbar and the bay of Phra Nang. The order depends on sea conditions and tides.",
        },
      },
    ],
  },
];

/** All FAQ entries (visible on the page and emitted as FAQPage JSON-LD), in page order. */
export function infoFaq(lang: "de" | "en"): { q: string; a: string }[] {
  return INFO_SECTIONS.flatMap((s) => s.faq.map((f) => ({ q: f.q[lang], a: f.a[lang] })));
}
