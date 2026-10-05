import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch A: cost pillar, national park fees, longtail vs speedboat.
 * Fact policy:
 *  - Our own prices come only from TOURS / booking-data.ts (always "ab" / per boat, Richtpreis for the tour builder).
 *  - No competitor prices. No national park fee amounts or inclusion claims on public pages.
 *  - No review quotes, no cancellation rates, no wave-height thresholds.
 */
export const NEW_ARTICLES_A: GuideArticleInput[] = [
  /* ───────────────────────── 1. Cost pillar ───────────────────────── */
  {
    slug: "private-boat-charter-krabi-cost",
    category: "pillar",
    short: { de: "Kosten privat", en: "Private charter cost" },
    primaryKeyword: "Private Bootstour Krabi Kosten",
    keywords: [
      "Private Bootstour Krabi Kosten",
      "Krabi Boot privat mieten Preis",
      "Bootscharter Ao Nang",
      "private Speedbootcharter Krabi pro Boot",
      "4 Islands privat Krabi Kosten",
      "Krabi Inselhopping privat lohnt sich",
      "private boat tour Krabi cost",
      "private boat charter Ao Nang price",
      "Krabi private speedboat price per boat",
      "how much to rent a boat in Krabi",
      "is a private boat tour worth it Krabi",
    ],
    title: {
      de: "Private Bootstour Krabi: Kosten & Preise 2026",
      en: "Krabi Private Boat Tour Price 2026",
    },
    metaDescription: {
      de: "Was kostet eine private Bootstour in Krabi? Longtail, Speedboot und Premium-Charter im Vergleich: Preis pro Boot, Nebenkosten und Leistungen.",
      en: "Krabi private boat tour price: what does it cost? Longtail, speedboat and premium charter compared: price per boat, extras and what is included.",
    },
    h1: {
      de: "Was kostet eine private Bootstour in Krabi?",
      en: "How much does a private boat tour in Krabi cost?",
    },
    intro: {
      de: "„Was kostet eine private Bootstour in Krabi?“ ist die Frage, die vor fast jeder Buchung steht – und die Antworten im Netz sind verwirrend, weil sie Äpfel mit Birnen vergleichen: Preise pro Person neben Preisen pro Boot, Angebote mit und ohne Nationalpark-Gebühr, Longtail neben Speedboot. Dieser Guide sortiert die Kosten einer privaten Bootstour in Krabi so, dass Sie am Ende wirklich vergleichen können. Wir nennen unsere eigenen Preise pro Boot exakt, erklären, welche Nebenkosten bei Angeboten häufig fehlen, und geben Ihnen eine Checkliste mit, mit der Sie jeden Anbieter prüfen – auch uns. Konkrete Preise anderer Anbieter nennen wir bewusst nicht: Sie schwanken stark nach Saison, Boot und Dauer und wären morgen schon veraltet.",
      en: "“How much does a private boat tour in Krabi cost?” is the question in front of almost every booking – and the answers online are confusing because they compare apples with oranges: prices per person next to prices per boat, offers with and without national park fees, longtails next to speedboats. This guide sorts out the Krabi private boat tour price so that you can genuinely compare. We state our own prices per boat exactly, explain which extras are often missing from offers, and give you a checklist for vetting any operator – including us. We deliberately do not quote other operators’ prices: they vary widely by season, boat and duration and would be outdated tomorrow.",
    },
    sections: [
      {
        h2: {
          de: "Kurzantwort: Preis pro Boot statt pro Person",
          en: "Short answer: price per boat, not per person",
        },
        body: {
          de: [
            "Der wichtigste Unterschied zwischen einer Gruppentour und einer privaten Charter steckt in der Preislogik. Bei der Gruppentour zahlen Sie pro Kopf und teilen sich das Boot mit Fremden. Bei einer privaten Charter mieten Sie das ganze Boot samt Kapitän und Crew für einen festen Zeitraum – der Preis gilt pro Boot, egal ob zwei oder fünf Gäste mitfahren.",
            "Bei uns liegen die Preise je nach Tour und Dauer zwischen ab 11.500 THB (Railay Escape, 4 Stunden) und ab 32.000 THB (Koh Rok Safari, 9 Stunden), jeweils pro Boot für maximal 5 Gäste. Die Spanne ist groß, weil Dauer, Entfernung und Leistungen stark variieren: Eine halbtägige Tour zu den nahen Inseln kostet deutlich weniger als ein Ganztag zu den weit entfernten Zielen.",
            "Rechnen Sie also nicht „Preis pro Person“, sondern „Preis pro Boot geteilt durch Ihre Gruppe“. Genau diese Rechnung machen wir in einem eigenen Abschnitt weiter unten.",
          ],
          en: [
            "The most important difference between a group tour and a private charter lies in the pricing logic. On a group tour you pay per head and share the boat with strangers. On a private charter you rent the whole boat including captain and crew for a fixed period – the price applies per boat, whether two or five guests come along.",
            "With us, prices range from 11,500 THB (Railay Escape, 4 hours) to 32,000 THB (Koh Rok Safari, 9 hours), depending on the tour, each per boat for a maximum of 5 guests. The range is wide because duration, distance and inclusions vary a lot: a half-day tour to the nearby islands costs far less than a full day to the distant destinations.",
            "So do not think “price per person” but “price per boat divided by your group”. We do exactly that calculation in a separate section below.",
          ],
        },
        tip: {
          de: "Beim Vergleich immer zuerst klären: Ist der genannte Preis pro Person oder pro Boot? Und wie viele Personen dürfen höchstens mit? Ohne diese beiden Angaben ist jede Zahl wertlos.",
          en: "When comparing, always clarify first: is the quoted price per person or per boat? And what is the maximum number of guests? Without those two facts, any number is worthless.",
        },
      },
      {
        h2: {
          de: "Drei Bootsklassen: Longtail, Standard-Speedboot, Premium-Charter",
          en: "Three boat classes: longtail, standard speedboat, premium charter",
        },
        body: {
          de: [
            "Wenn man in Ao Nang am Strand nach einem privaten Boot fragt, landet man grob in einer von drei Klassen. Das ist keine amtliche Einteilung, sondern eine praktische Orientierung.",
            "Das klassische Longtail-Boot ist das traditionelle Holzboot mit langem Propellerschaft. Es ist in der Regel die günstigste Möglichkeit, ein Boot für sich zu haben, und kommt auch in sehr flaches Wasser. Dafür ist es langsamer, offener und lauter – ausführlich beschrieben in unserem Vergleich Longtail oder Speedboot.",
            "Das Standard-Speedboot ist ein schneller Außenborder, oft mit Platz für größere Gruppen. Auf Sammeltouren sind es häufig 30 bis 40 Personen, als private Charter dagegen nur Ihre Gruppe. Die Ausstattung schwankt von Anbieter zu Anbieter stark: Schatten, Sitzkomfort, Sicherheitsausrüstung und Motorisierung unterscheiden sich.",
            "Zur dritten Klasse zählen wir unser Boot: ein weißes Hardtop-Kabinenboot mit zwei 300-PS-Motoren, Sitzbank und bequemen Bootssesseln, Heck-Cockpit und Schatten durch die Hardtop-Kabine, maximal 5 Gäste. Das ist ein Premium-Konzept mit Fokus auf Komfort und Ruhe statt auf Sitzplatzmaximierung – und es erklärt, warum der Preis pro Boot höher liegt als bei einem Longtail.",
          ],
          en: [
            "If you ask for a private boat on the beach in Ao Nang, you end up in roughly one of three classes. This is not an official classification but a practical guide.",
            "The classic longtail is the traditional wooden boat with a long propeller shaft. It is usually the cheapest way to have a boat to yourself and can get into very shallow water. In return it is slower, more open and louder – described in detail in our longtail vs speedboat comparison.",
            "The standard speedboat is a fast outboard boat, often with room for larger groups. On shared tours it is frequently 30 to 40 people; as a private charter it is just your group. Equipment varies a lot between operators: shade, seating comfort, safety gear and engine setup differ.",
            "Our boat belongs to the third class: a white hardtop cabin boat with two 300 hp engines, a bench seat and comfortable boat chairs, a rear cockpit and shade from the hardtop cabin, maximum 5 guests. It is a premium concept focused on comfort and calm rather than maximum seat count – and it explains why the price per boat is higher than for a longtail.",
          ],
        },
      },
      {
        h2: {
          de: "Preisspannen am Markt: warum wir keine Zahlen Dritter nennen",
          en: "Market price ranges: why we do not quote other operators’ numbers",
        },
        body: {
          de: [
            "In Suchergebnissen finden Sie für private Boote eine riesige Streuung. Das liegt an Bootsklasse, Dauer (halbtags, ganztags), Saison, Anzahl der Inseln und daran, was im Preis enthalten ist. Eine Zahl ohne diese Angaben sagt wenig, und Betreiberangaben im Netz ändern sich ständig.",
            "Wir halten uns deshalb an die Faustregel, die sich bei der Planung bewährt: Je kürzer die Fahrt, je langsamer das Boot und je weniger Leistungen enthalten sind, desto niedriger der Grundpreis – aber desto mehr Posten kommen später dazu. Ein sehr niedriger Preis ist deshalb nicht automatisch ein gutes Angebot, ein höherer nicht automatisch ein schlechtes.",
            "Vergleichen Sie darum nie nur die Hauptzahl, sondern die Gesamtkosten für Ihren Tag: Boot, Kapitän, Treibstoff, Nationalpark-Gebühren, Essen, Getränke, Schnorchelausrüstung und Transfer. Im nächsten Abschnitt steht, was dabei am häufigsten vergessen wird.",
          ],
          en: [
            "Search results show a huge spread for private boats. It comes down to boat class, duration (half day, full day), season, number of islands and what the price includes. A number without those details says little, and operator figures online keep changing.",
            "We therefore stick to a rule of thumb that works in planning: the shorter the trip, the slower the boat and the fewer inclusions, the lower the base price – but the more items get added later. A very low price is therefore not automatically a good offer, and a higher one not automatically a bad one.",
            "So never compare only the headline number but the total cost of your day: boat, captain, fuel, national park fees, food, drinks, snorkel gear and transfer. The next section covers what is most often forgotten.",
          ],
        },
      },
      {
        h2: {
          de: "Was im Preis oft fehlt: Nationalpark-Gebühr, Essen, Ausrüstung, Transfer",
          en: "What is often missing from the price: park fees, food, gear, transfer",
        },
        body: {
          de: [
            "Der typische Streitpunkt bei Angeboten ist der Unterschied zwischen „Boot gemietet“ und „Tag organisiert“. Vier Posten fehlen besonders oft im ersten Preis:",
            "Nationalpark-Gebühren werden pro Person erhoben und je nach Ziel unterschiedlich festgelegt. Manche Anbieter rechnen sie extra und lassen Sie vor Ort bar zahlen, andere schließen sie ein. Wie hoch sie ungefähr sind, beschreibt unser Artikel zu den Nationalpark-Gebühren in Krabi.",
            "Essen und Getränke sind der zweite Klassiker: Häufig gibt es nur Wasser, Mittagessen oder Obst kosten extra oder müssen selbst mitgebracht werden. Schnorchelausrüstung ist drittens bei manchen Angeboten kostenpflichtig oder nur in begrenzten Größen vorhanden. Und viertens der Transfer: Ob Sie am Pier starten oder am Hotel abgeholt werden, ändert die Planung und manchmal den Preis.",
            "Zusätzlich lohnt die Frage nach Kraftstoff und Überstunden. Bei vielen Charter-Modellen ist der Treibstoff im Preis, bei weiten Zielen oder Verlängerungen kann es Aufschläge geben. Lassen Sie sich diese Punkte vor der Buchung schriftlich bestätigen.",
          ],
          en: [
            "The typical sticking point with offers is the difference between “boat rented” and “day organised”. Four items are especially often missing from the first price:",
            "National park fees are charged per person and set differently depending on the destination. Some operators bill them separately and have you pay cash on site, others include them. Our article on national park fees in Krabi describes roughly how high they are.",
            "Food and drinks are the second classic: often only water is provided, while lunch or fruit costs extra or must be brought along. Third, snorkel gear is chargeable with some offers or only available in limited sizes. And fourth, the transfer: whether you start at the pier or are picked up at your hotel changes your planning and sometimes the price.",
            "It is also worth asking about fuel and overtime. With many charter models fuel is in the price, but distant destinations or extensions may carry surcharges. Have these points confirmed in writing before you book.",
          ],
        },
        tip: {
          de: "Fragen Sie in einer einzigen Nachricht: „Was ist im Gesamtpreis für 4 Personen enthalten – Park-Gebühren, Essen, Getränke, Schnorchelausrüstung, Transfer, Treibstoff?“ Die Art der Antwort verrät viel über den Anbieter.",
          en: "Ask in a single message: “What is included in the total price for 4 people – park fees, food, drinks, snorkel gear, transfer, fuel?” The way an operator answers tells you a lot.",
        },
      },
      {
        h2: {
          de: "Was bei uns enthalten ist: Touren, Preise pro Boot, Dauer",
          en: "What is included with us: tours, prices per boat, duration",
        },
        body: {
          de: [
            "Alle Preise gelten pro Boot für bis zu 5 Gäste. Zu den Standardleistungen unserer Touren gehören laut Leistungsliste das private Speedboat mit Kapitän, Zeit zum Schnorcheln, Schwimmen und Entspannen sowie der Hotel-Transfer Ao Nang/Krabi. Bei den meisten Inseltouren kommen Wasser, Softdrinks und Obst hinzu; Schnorchelausrüstung ist kostenlos und wird bei der Buchung angekreuzt. Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung.",
            "Eine Auswahl, jeweils ab-Preis pro Boot und Dauer laut Tourenliste:",
          ],
          en: [
            "All prices apply per boat for up to 5 guests. According to the inclusion list, the standard services of our tours are the private speedboat with captain, time to snorkel, swim and relax, and the hotel transfer Ao Nang/Krabi. Most island tours add water, soft drinks and fruit; snorkel gear is free and ticked when booking. Whether and how much of an entrance fee applies at your destination, you will learn when booking.",
            "A selection, each from-price per boat and duration as listed:",
          ],
        },
        list: {
          de: [
            "Railay Escape: ab 11.500 THB, 4 Std., flexible Startzeit",
            "Family Sandbars: ab 15.500 THB, 6 Std., ab 09:00",
            "Sunset Dinner: ab 16.500 THB, 4 Std., ab 15:30 (3-Gänge-Dinner an Bord)",
            "4-Islands VIP & Sunset Special: ab 18.500 THB, 6 Std., ab 13:00",
            "Hong Lagoons: ab 21.500 THB, 7 Std., ab 08:00",
            "James Bond Bay: ab 24.000 THB, 8 Std., ab 08:00",
            "Phang Nga Uncharted: ab 26.000 THB, 8,5 Std., ab 08:00",
            "Phi Phi Early Bird: ab 28.500 THB, 8 Std., ab 07:00",
            "Koh Rok Safari: ab 32.000 THB, 9 Std., ab 07:30 (Thai-Lunch an Bord inklusive)",
          ],
          en: [
            "Railay Escape: from 11,500 THB, 4 hrs, flexible start",
            "Family Sandbars: from 15,500 THB, 6 hrs, from 9 am",
            "Sunset Dinner: from 16,500 THB, 4 hrs, from 3:30 pm (3-course dinner on board)",
            "4-Islands VIP & Sunset Special: from 18,500 THB, 6 hrs, from 1 pm",
            "Hong Lagoons: from 21,500 THB, 7 hrs, from 8 am",
            "James Bond Bay: from 24,000 THB, 8 hrs, from 8 am",
            "Phang Nga Uncharted: from 26,000 THB, 8.5 hrs, from 8 am",
            "Phi Phi Early Bird: from 28,500 THB, 8 hrs, from 7 am",
            "Koh Rok Safari: from 32,000 THB, 9 hrs, from 7:30 am (Thai lunch on board included)",
          ],
        },
        tip: {
          de: "Wenn Sie Ihre Wunschroute selbst zusammenstellen, hilft der Tourkonfigurator beim Buchen. Als Richtpreise gelten dort ab 11.000 THB für einen Halbtag (4 Std.), ab 14.000 THB für Sunset (5 Std.), ab 19.000 THB ganztags (8 Std.) und ab 24.000 THB für die Expedition (10 Std.); für mittlere Ziele kommen 1.500 THB, für weite Ziele 4.000 THB Zuschlag dazu. Das endgültige Angebot bestätigen wir Ihnen individuell.",
          en: "If you want to build your own route, the tour builder helps when booking. Guide prices there start from 11,000 THB for a half day (4 hrs), 14,000 THB for sunset (5 hrs), 19,000 THB for a full day (8 hrs) and 24,000 THB for the expedition (10 hrs); a surcharge of 1,500 THB applies for mid-distance and 4,000 THB for far destinations. We confirm the final quote individually.",
        },
      },
      {
        h2: {
          de: "Gruppengröße rechnen: Ab wann ist privat sinnvoll?",
          en: "Doing the maths: when does a private boat make sense?",
        },
        body: {
          de: [
            "Teilen Sie den Preis pro Boot durch die Zahl der Gäste – so bekommen Sie einen ehrlichen Pro-Kopf-Wert. Beispiele mit unseren ab-Preisen: Die Hong Lagoons (ab 21.500 THB) ergeben bei 5 Gästen rechnerisch 4.300 THB pro Person, bei 4 Gästen 5.375 THB, bei 2 Gästen 10.750 THB. Die 4-Islands VIP & Sunset Special (ab 18.500 THB) liegen bei 5 Gästen bei 3.700 THB pro Person. Der Railay Escape (ab 11.500 THB) kommt bei 5 Gästen auf 2.300 THB pro Person.",
            "Zu zweit ist eine private Charter pro Kopf klar teurer als ein Platz auf einem Sammelboot. Der Preis kauft dann etwas anderes: einen eigenen Zeitplan, leere Buchten statt Gedränge, Ruhe für besondere Anlässe und kein Warten auf andere Gäste. Ob das den Aufpreis wert ist, ist eine ehrliche persönliche Entscheidung – für Flitterwochen, Jubiläen oder Fotofans oft ja, für ein knappes Budget nicht.",
            "Ab drei bis fünf Gästen, etwa Familien oder Freundesgruppen, verschiebt sich die Rechnung deutlich: Das Boot ist für alle voll nutzbar, und der Pro-Kopf-Wert liegt näher an dem, was Sie auf Sammeltouren zahlen würden, während Sie weit mehr Zeit an den Stopps haben. Vergleichen Sie dabei bitte immer die Leistungen, nicht nur die Zahl.",
          ],
          en: [
            "Divide the price per boat by the number of guests to get an honest per-head figure. Examples using our from-prices: Hong Lagoons (from 21,500 THB) works out at 4,300 THB per person with 5 guests, 5,375 THB with 4 guests and 10,750 THB with 2 guests. The 4-Islands VIP & Sunset Special (from 18,500 THB) is 3,700 THB per person with 5 guests. The Railay Escape (from 11,500 THB) comes to 2,300 THB per person with 5 guests.",
            "For two people a private charter is clearly more expensive per head than a seat on a shared boat. The price then buys something different: your own schedule, empty bays instead of crowds, calm for special occasions and no waiting for other guests. Whether that is worth the premium is an honest personal decision – often yes for honeymoons, anniversaries or photo fans, no for a tight budget.",
            "From three to five guests, for example families or groups of friends, the calculation shifts considerably: the boat is fully used by everyone and the per-head value comes closer to what you would pay on shared tours, while you get far more time at each stop. Always compare inclusions, not just the number.",
          ],
        },
        list: {
          de: [
            "Gruppe von 4–5: Privatcharter lohnt sich meist am deutlichsten",
            "Paare: eher bei besonderen Anlässen oder wenn Ruhe und Fotos im Vordergrund stehen",
            "Familien mit Kindern: eigener Zeitplan und Schatten sind ein echter Vorteil",
          ],
          en: [
            "Group of 4–5: a private charter usually pays off most clearly",
            "Couples: more for special occasions or when calm and photos matter most",
            "Families with children: your own schedule and shade are a real advantage",
          ],
        },
      },
      {
        h2: {
          de: "Saison, Anfragefrist und Verhandeln",
          en: "Season, booking lead time and haggling",
        },
        body: {
          de: [
            "Die Nachfrage ist nicht das ganze Jahr gleich. In der Hochsaison – in der Regel von November bis April – sind gute Boote und beliebte Abfahrtszeiten früher vergeben. In der Nebensaison sind Wetter und Seegang wechselhafter, dafür ist es leerer. Mehr dazu in unserem Artikel zur besten Reisezeit für Krabi.",
            "Wie früh sollten Sie anfragen? Je nach Saison und Wunschtermin reicht in ruhigen Wochen oft ein kurzer Vorlauf, zu Feiertagen und in der Hochsaison empfehlen wir deutlich früher. Bei uns erfolgt die Anfrage unverbindlich, die Antwort kommt meist innerhalb von 30 Minuten; ein Zeitfenster ist erst nach unserer Bestätigung reserviert.",
            "Verhandeln ist am Strand von Ao Nang verbreitet, bei einer Privatcharter aber nur begrenzt sinnvoll. Der Preis hängt an echten Kosten wie Treibstoff, Crew und Nationalpark, und ein sehr niedriger Preis spart meist an Sicherheit oder Leistungen. Sinnvoller ist es, über den Umfang zu sprechen: Dauer, Zahl der Stopps und enthaltene Extras.",
          ],
          en: [
            "Demand is not the same all year. In high season – usually from November to April – good boats and popular departure times are taken earlier. In low season weather and sea state are more changeable, but it is quieter. More in our article on the best time to visit Krabi.",
            "How early should you ask? Depending on season and date, a short lead time is often enough in quiet weeks, while around holidays and in high season we recommend booking much earlier. With us the enquiry is non-binding, the reply usually comes within 30 minutes, and a slot is only reserved once we confirm it.",
            "Haggling is common on the beach in Ao Nang, but only of limited use for a private charter. The price rests on real costs such as fuel, crew and national park, and a very low price usually saves on safety or inclusions. It makes more sense to talk about scope: duration, number of stops and included extras.",
          ],
        },
      },
      {
        h2: {
          de: "Checkliste: Diese Fragen sollten Sie jedem Anbieter stellen",
          en: "Checklist: questions to ask every operator",
        },
        body: {
          de: [
            "Ein günstiger Preis ist erst dann ein guter Preis, wenn die Sicherheit stimmt. Diese Fragen gelten für jeden Anbieter, nicht nur für uns:",
          ],
          en: [
            "A low price is only a good price if safety is right. These questions apply to every operator, not only to us:",
          ],
        },
        list: {
          de: [
            "Gilt der Preis pro Boot oder pro Person – und wie viele Gäste dürfen höchstens mit?",
            "Wie viele Motoren hat das Boot, gibt es Marine-Funk? (Unser Boot: zwei Motoren, Marine-Funk, Erste-Hilfe-Ausrüstung)",
            "Gibt es Rettungswesten in passenden Größen, auch für Kinder?",
            "Ist der Anbieter als Tourveranstalter registriert, und ist der Kapitän erfahren?",
            "Was passiert bei schlechtem Wetter: Verschiebung, Ersatzroute, Rückerstattung?",
            "Sind Nationalpark-Gebühren, Essen, Getränke, Schnorchelausrüstung, Treibstoff und Transfer enthalten?",
            "Wie lange ist die reine Zeit an den Stopps, nicht nur die Gesamtdauer?",
            "Gibt es eine schriftliche Bestätigung mit allen Leistungen?",
          ],
          en: [
            "Is the price per boat or per person – and what is the maximum number of guests?",
            "How many engines does the boat have, is there a marine radio? (Our boat: two engines, marine radio, first-aid kit)",
            "Are there life jackets in suitable sizes, including for children?",
            "Is the operator registered as a tour operator, and is the captain experienced?",
            "What happens in bad weather: rescheduling, alternative route, refund?",
            "Are national park fees, food, drinks, snorkel gear, fuel and transfer included?",
            "How long is the actual time at the stops, not just the total duration?",
            "Is there a written confirmation with all inclusions?",
          ],
        },
      },
      {
        h2: {
          de: "Zusatzoptionen: Catering, Getränke und 4K-Drohnenpaket",
          en: "Optional extras: catering, drinks and the 4K drone package",
        },
        body: {
          de: [
            "Alles Weitere ist optional und wird bei der Buchung gewählt. Die Verpflegung an Bord kostet 500 THB pro Person und umfasst zwei frisch zubereitete Mahlzeiten plus Getränke (Wasser, Cola, Cola Zero). Wer mehr möchte, kann aus weiteren Optionen wählen, etwa eine Obst- und Snackplatte (350 THB p. P.) oder ein Gourmet-Strandpicknick (1.200 THB p. P.). Einige Touren enthalten bereits eine Mahlzeit, dort entfällt der Aufpreis.",
            "Das 4K-Drohnenpaket kostet 4.500 THB pro Boot: Pilot, Reel und 40 Luftbilder, Lieferung am selben Abend. Es ist kostenpflichtig und kein Bestandteil der Standardtour. Dazu gibt es einen Angelstopp mit Ausrüstung (1.500 THB pro Boot, eine Stunde Riff-Angeln während der Inseltour).",
            "Planen Sie diese Posten gleich in Ihre Rechnung ein: Für eine Gruppe von vier Personen kommen allein durch das Catering 2.000 THB zusammen, mit Drohnenpaket 6.500 THB. So wissen Sie vorab, was der Tag wirklich kostet – und der Vergleich mit anderen Anbietern wird fair.",
          ],
          en: [
            "Everything else is optional and chosen when booking. Catering on board costs 500 THB per person and covers two freshly prepared meals plus drinks (water, Coke, Coke Zero). If you want more, you can choose further options such as a fruit and snack platter (350 THB p.p.) or a gourmet beach picnic (1,200 THB p.p.). Some tours already include a meal, in which case the surcharge does not apply.",
            "The 4K drone package costs 4,500 THB per boat: pilot, reel and 40 aerial photos, delivered the same evening. It is chargeable and not part of the standard tour. There is also a fishing stop with gear (1,500 THB per boat, one hour of reef fishing during the island tour).",
            "Build these items into your calculation right away: for a group of four, catering alone adds 2,000 THB, and 6,500 THB with the drone package. That way you know in advance what the day really costs – and the comparison with other operators becomes fair.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Was kostet eine private Bootstour in Krabi?",
          en: "How much does a private boat tour in Krabi cost?",
        },
        a: {
          de: "Das hängt von Bootsklasse, Dauer und Leistungen ab. Bei uns liegen die Preise pro Boot für maximal 5 Gäste zwischen ab 11.500 THB (Railay Escape, 4 Std.) und ab 32.000 THB (Koh Rok Safari, 9 Std.). Preise anderer Anbieter schwanken stark nach Saison und Boot; vergleichen Sie immer die Gesamtleistungen.",
          en: "It depends on boat class, duration and inclusions. With us, prices per boat for a maximum of 5 guests range from 11,500 THB (Railay Escape, 4 hrs) to 32,000 THB (Koh Rok Safari, 9 hrs). Other operators’ prices vary widely by season and boat; always compare the total inclusions.",
        },
      },
      {
        q: {
          de: "Ist eine private Longtail-Tour günstiger als ein Speedboot?",
          en: "Is a private longtail cheaper than a speedboat in Krabi?",
        },
        a: {
          de: "In der Regel ja: Ein Longtail ist meist die günstigere Variante für ein eigenes Boot. Dafür ist er langsamer, offener und lauter, und weite Ziele sind damit kaum an einem Tag machbar. Was das konkret bedeutet, erklärt unser Vergleich Longtail oder Speedboot.",
          en: "Usually yes: a longtail is typically the cheaper way to have a boat to yourself. In return it is slower, more open and louder, and distant destinations are hardly doable in a day. Our longtail vs speedboat comparison explains what that means in practice.",
        },
      },
      {
        q: {
          de: "Gilt der Preis pro Person oder pro Boot?",
          en: "Is the Krabi private boat price per person or per boat?",
        },
        a: {
          de: "Bei einer privaten Charter gilt der Preis pro Boot. Bei uns ist das für bis zu 5 Gäste, unabhängig davon, ob zwei oder fünf Personen mitfahren. Klären Sie das bei jedem Anbieter ausdrücklich, weil Sammeltouren pro Person abrechnen.",
          en: "On a private charter the price is per boat. With us it covers up to 5 guests, regardless of whether two or five people come along. Clarify this with every operator explicitly because shared tours are priced per person.",
        },
      },
      {
        q: {
          de: "Fällt bei einer Privatcharter eine Nationalpark-Gebühr an?",
          en: "Is a national park fee charged on a private boat charter?",
        },
        a: {
          de: "Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung. Mehr dazu im Artikel zu den Nationalpark-Gebühren.",
          en: "Whether and how much of an entrance fee applies at your destination, you will learn when booking. See the national park fees article for more.",
        },
      },
      {
        q: {
          de: "Lohnt sich ein privates Boot für 2 Personen?",
          en: "Is a private boat worth it for two people?",
        },
        a: {
          de: "Pro Kopf ist es teurer als eine Sammeltour. Sie bezahlen für Ruhe, einen eigenen Zeitplan und leere Buchten – oft sinnvoll bei Flitterwochen, Jubiläen oder wenn Fotos und Privatsphäre im Vordergrund stehen. Für ein knappes Budget ist eine Gruppentour die ehrlichere Wahl.",
          en: "Per head it is more expensive than a shared tour. You pay for calm, your own schedule and empty bays – often worthwhile for honeymoons, anniversaries or when photos and privacy matter most. For a tight budget a group tour is the more honest choice.",
        },
      },
      {
        q: {
          de: "Wie früh sollte ich eine private Bootstour in Krabi buchen?",
          en: "How far in advance should I book a private boat in Krabi?",
        },
        a: {
          de: "In der Hochsaison und zu Feiertagen empfehlen wir deutlich früher anzufragen, in ruhigen Wochen reicht oft ein kürzerer Vorlauf. Bei uns ist die Anfrage unverbindlich und wird meist innerhalb von 30 Minuten beantwortet; reserviert ist der Termin nach unserer Bestätigung.",
          en: "In high season and around holidays we recommend enquiring much earlier; in quiet weeks a shorter lead time is often enough. With us the enquiry is non-binding and usually answered within 30 minutes; the date is reserved once we confirm.",
        },
      },
    ],
    related: [
      "longtail-vs-speedboat-krabi",
      "krabi-national-park-fees-islands",
      "krabi-island-hopping-planner",
      "avoid-crowds-krabi-timing",
      "best-time-to-visit-krabi",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "railay-escape"],
    image: IMG.boat,
  },

  /* ───────────────────────── 2. National park fees ───────────────────────── */
  {
    slug: "krabi-national-park-fees-islands",
    category: "insider",
    short: { de: "Park-Gebühren", en: "Park fees" },
    primaryKeyword: "Nationalpark Gebühren Krabi",
    keywords: [
      "Nationalpark Gebühren Krabi",
      "Hong Island Eintritt",
      "Phi Phi Eintritt Nationalpark",
      "Nationalpark-Gebühr Phang Nga Bucht",
      "Eintritt Inseln Krabi Ausländer",
      "Nationalparkgebühr Bootstour",
      "Koh Rok Eintritt",
      "Krabi national park fees",
      "Hong Island national park fee",
      "Phi Phi park fee",
      "Phang Nga Bay park fee",
      "4 islands park fee Krabi",
      "Krabi national park fee boat tour",
    ],
    title: {
      de: "Nationalpark-Gebühren Krabi: So funktioniert der Inseleintritt",
      en: "Krabi National Park Fees: How Island Entry Works",
    },
    metaDescription: {
      de: "Was kosten die Nationalparks rund um Krabi? Gebühren für Hong, Phi Phi, Phang Nga und Co., wer sie zahlt und warum die Beträge abweichen können.",
      en: "What do the national parks around Krabi charge? Fees for Hong, Phi Phi, Phang Nga and more, who pays them and why the amounts can differ a lot.",
    },
    h1: {
      de: "Nationalpark-Gebühren in Krabi: Was Sie vor dem Inselbesuch wissen sollten",
      en: "Krabi national park fees: what to know before an island visit",
    },
    intro: {
      de: "Wer eine Bootstour bucht, sieht zuerst den Tourpreis – und fragt sich oft, ob für die Inseln zusätzlich Nationalpark-Gebühren in Krabi anfallen. Dieser Guide erklärt, welche Inseln zu welchem Schutzgebiet gehören, wie Eintrittsgebühren grundsätzlich funktionieren, wer sie festlegt, wie sie bezahlt werden und worauf Sie vor der Buchung achten sollten. Wichtig vorab: Die Gebühren und Regeln legt die Nationalparkbehörde fest, und sie ändern sich gelegentlich. Konkrete Beträge nennen wir deshalb bewusst nicht.",
      en: "When you book a boat tour you first see the tour price – and often wonder whether national park fees in Krabi apply to the islands on top. This guide explains which islands belong to which protected area, how entrance fees work in general, who sets them, how they are paid and what to check before booking. Important upfront: the fees and rules are set by the national park authority and change from time to time. We therefore deliberately do not state specific amounts.",
    },
    sections: [
      {
        h2: {
          de: "Kurzantwort: Es gibt keine einheitliche Gebühr",
          en: "Short answer: there is no single fee",
        },
        body: {
          de: [
            "Es gibt nicht „die“ Nationalpark-Gebühr für Krabi, sondern mehrere Regelungen je nach Schutzgebiet und Ziel. Wer auf einer Route mehrere Gebiete anläuft, zahlt unter Umständen mehrere Eintritte. Die Gebühr wird in der Regel pro Person erhoben; ausländische Erwachsene zahlen dabei meist mehr als Thais, und für Kinder gelten häufig andere Sätze.",
            "Festgelegt wird die Gebühr von der Nationalparkbehörde, nicht vom Tourveranstalter. Sie kann sich ändern, und Angaben in Blogs und Foren sind oft veraltet. Die verlässlichste Antwort ist deshalb immer die aktuelle Information der Behörde oder Ihres Anbieters kurz vor dem Termin.",
            "Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung.",
          ],
          en: [
            "There is no single national park fee for Krabi, but several arrangements depending on protected area and destination. If a route visits several areas, you may pay several entries. The fee is usually charged per person; foreign adults generally pay more than Thai nationals, and different rates often apply to children.",
            "The fee is set by the national park authority, not by the tour operator. It can change, and figures in blogs and forums are often out of date. The most reliable answer is therefore always the current information from the authority or your operator shortly before your date.",
            "Whether and how much of an entrance fee applies at your destination, you will learn when booking.",
          ],
        },
        tip: {
          de: "Behandeln Sie jede Zahl in Blogs und Foren als Momentaufnahme. Fragen Sie Ihren Anbieter nach dem Stand für Ihr konkretes Datum und Ihre Route.",
          en: "Treat every number in blogs and forums as a snapshot. Ask your operator for the current situation for your specific date and route.",
        },
      },
      {
        h2: {
          de: "Welche Inseln gehören zu welchem Nationalpark?",
          en: "Which islands belong to which national park?",
        },
        body: {
          de: [
            "Rund um Krabi liegen mehrere Schutzgebiete, die jeweils eigene Regeln haben. Die folgende Zuordnung ist die gängige; bei Randfällen entscheidet die Behörde oder Ihr Anbieter, welcher Eintritt für Ihre Route gilt.",
          ],
          en: [
            "Several protected areas lie around Krabi, each with its own rules. The following assignment is the common one; for borderline cases the authority or your operator decides which entry applies to your route.",
          ],
        },
        list: {
          de: [
            "Hong Island, Lao Lading, Pakbia: Gebiet des Hong-Archipels",
            "Poda, Chicken Island, Tup Sandbank (4 Islands): gängig dem Nationalpark Hat Noppharat Thara – Mu Ko Phi Phi zugeordnet",
            "Phi Phi Don, Phi Phi Leh mit Maya Bay: Nationalpark Hat Noppharat Thara – Mu Ko Phi Phi, mit besonderen Zugangsregeln",
            "James Bond Island und Phang Nga Bucht: Ao Phang Nga Nationalpark",
            "Koh Rok, Koh Haa: Mu Ko Lanta Nationalpark, saisonal eingeschränkt",
          ],
          en: [
            "Hong Island, Lao Lading, Pakbia: Hong archipelago area",
            "Poda, Chicken Island, Tup Sandbank (4 Islands): commonly assigned to Hat Noppharat Thara – Mu Ko Phi Phi National Park",
            "Phi Phi Don, Phi Phi Leh with Maya Bay: Hat Noppharat Thara – Mu Ko Phi Phi National Park, with special access rules",
            "James Bond Island and Phang Nga Bay: Ao Phang Nga National Park",
            "Koh Rok, Koh Haa: Mu Ko Lanta National Park, seasonally restricted",
          ],
        },
      },
      {
        h2: {
          de: "So funktioniert die Gebühr: pro Person, vor Ort, vom Park festgelegt",
          en: "How the fee works: per person, on site, set by the park",
        },
        body: {
          de: [
            "Nationalpark-Gebühren werden in der Regel pro Person und pro Besuch eines Schutzgebiets erhoben und vor Ort an die Ranger bzw. am Eingang des Parks bezahlt. Für Erwachsene, Kinder und für Ausländer und Thais können unterschiedliche Sätze gelten. Ab welchem Alter oder welcher Körpergröße ein Kinderpreis gilt, kann sich unterscheiden.",
            "Wir wollen hier keine Scheingenauigkeit erzeugen: Die Primärquelle ist die Nationalparkbehörde (Department of National Parks, Wildlife and Plant Conservation). Anbieter- und Reiseseiten im Netz sind nicht immer aktuell. Die Sätze gelten immer so, wie sie vor Ort ausgehängt sind.",
            "Für Ihre Planung heißt das: Rechnen Sie damit, dass je Schutzgebiet ein Eintritt pro Person anfallen kann, und fragen Sie bei der Buchung nach, was für Ihre Route gilt.",
          ],
          en: [
            "National park fees are usually charged per person and per visit to a protected area and are paid on site to the park rangers or at the park entrance. Different rates may apply to adults, children, foreigners and Thai nationals. From which age or height a child rate applies can differ.",
            "We do not want to create false precision here: the primary source is the national park authority (Department of National Parks, Wildlife and Plant Conservation). Operator and travel sites online are not always up to date. The rates that count are the ones posted on site.",
            "For your planning this means: expect that one entry per person may apply for each protected area, and ask when booking what applies to your route.",
          ],
        },
      },
      {
        h2: {
          de: "Warum Angaben abweichen: Gebiet, Status, Neufestsetzung",
          en: "Why information differs: area, status, revision",
        },
        body: {
          de: [
            "Es gibt mehrere Gründe, warum zwei Blogs für dieselbe Insel Unterschiedliches schreiben. Erstens wird die Zuordnung der Inseln zu Gebieten unterschiedlich beschrieben: Wer „4 Islands“ sagt, meint je nach Anbieter leicht verschiedene Stopps. Zweitens unterscheiden sich die Sätze für Ausländer, Thais, Erwachsene und Kinder, und viele Texte nennen nur einen davon.",
            "Drittens werden Gebühren neu festgesetzt, und alte Angaben bleiben jahrelang online. Und viertens hängt manches von Sonderregeln ab, etwa bei Maya Bay, wo Zugang und Regeln gesondert geregelt werden.",
            "Daraus ergibt sich die einfachste Regel: Verlassen Sie sich nicht auf eine einzelne Angabe aus dem Netz, sondern fragen Sie Ihren Anbieter, wie die Gebühr für Ihre Route gehandhabt wird.",
          ],
          en: [
            "There are several reasons why two blogs write different things about the same island. First, the assignment of islands to areas is described differently: whoever says “4 Islands” means slightly different stops depending on the operator. Second, rates differ for foreigners, Thais, adults and children, and many texts mention only one.",
            "Third, fees get revised and old information stays online for years. And fourth, some things depend on special rules, for example at Maya Bay, where access and rules are regulated separately.",
            "This leads to the simplest rule: do not rely on a single piece of information from the web, ask your operator how the fee is handled for your route.",
          ],
        },
      },
      {
        h2: {
          de: "Barzahlung, Beleg und wer zahlt",
          en: "Cash payment, receipts and who pays",
        },
        body: {
          de: [
            "Üblich ist, dass Nationalpark-Gebühren in bar an einem Ticketschalter oder bei den Rangern entrichtet werden, meist in Baht. Kartenzahlung ist auf den Inseln nicht verlässlich vorgesehen. Wenn Sie die Gebühr selbst zahlen müssen, haben Sie also am besten ausreichend Bargeld in Baht dabei, in möglichst kleinen Scheinen.",
            "Bewahren Sie das Ticket oder den Beleg während des Tages auf, denn es kann bei Kontrollen im Park verlangt werden. Die Gebühr dient dem Schutz der Gebiete, und ein Beleg schafft Klarheit.",
            "Fragen Sie vor der Buchung, wie die Gebühr bei Ihrer Tour gehandhabt wird, und lassen Sie sich Unklarheiten schriftlich bestätigen.",
          ],
          en: [
            "It is usual for national park fees to be paid in cash at a ticket counter or to the rangers, mostly in baht. Card payment is not reliably available on the islands. If you have to pay the fee yourself, bring enough baht in cash, ideally in small notes.",
            "Keep the ticket or receipt for the day, as it may be checked in the park. The fee funds the protection of the areas, and a receipt creates clarity.",
            "Ask before booking how the fee is handled on your tour, and have any open points confirmed in writing.",
          ],
        },
        tip: {
          de: "Nehmen Sie etwas Bargeld in kleinen Scheinen mit – auch für Snacks und Trinkgeld. Auf den Inseln gibt es keine Geldautomaten.",
          en: "Bring some cash in small notes – also for snacks and tips. There are no ATMs on the islands.",
        },
      },
      {
        h2: {
          de: "Eintritt bei unseren Touren: bei der Buchung klären",
          en: "Entry on our tours: clarified when booking",
        },
        body: {
          de: [
            "Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung. Sagen Sie uns in der Anfrage einfach, welche Route Sie interessiert, dann klären wir den Stand für Ihr Datum.",
            "Alle Tourpreise gelten pro Boot für bis zu 5 Gäste, etwa Hong Lagoons ab 21.500 THB oder Koh Rok Safari ab 32.000 THB.",
            "Praktisch: Weil unser Preis pro Boot gilt, bleibt die Rechnung übersichtlich. Sie vergleichen am Ende den Gesamtpreis Ihrer Gruppe, nicht Einzelposten.",
          ],
          en: [
            "Whether and how much of an entrance fee applies at your destination, you will learn when booking. Simply tell us in your enquiry which route interests you, and we will clarify the situation for your date.",
            "All tour prices apply per boat for up to 5 guests, for example Hong Lagoons from 21,500 THB or Koh Rok Safari from 32,000 THB.",
            "In practice: because our price applies per boat, the calculation stays clear. You compare your group’s total price, not individual items.",
          ],
        },
      },
      {
        h2: {
          de: "Sperrzeiten und Regeln: Maya Bay, Koh Rok und Co.",
          en: "Closures and rules: Maya Bay, Koh Rok and more",
        },
        body: {
          de: [
            "Nationalparks sind nicht immer zugänglich. Einzelne Gebiete sind saisonal eingeschränkt oder zeitweise gesperrt, etwa zum Schutz der Natur oder wegen des Wetters. Koh Rok und Koh Haa sind offiziell vom 16. Mai bis 15. November geschlossen (manche Quellen nennen Ende Oktober); die offene Saison liegt etwa zwischen Mitte November und Mitte Mai. Prüfen Sie die aktuellen Termine vor einer Buchung.",
            "Für Maya Bay gelten besondere Regeln für Besuchsdauer, Zugang und Verhalten. Sie ändern sich gelegentlich, deshalb behandeln wir sie nicht hier, sondern in unserem Beitrag zu Phi Phi und Maya Bay am frühen Morgen. Grundsätzlich gilt in den Parks: nichts mitnehmen, keine Tiere füttern, Korallen nicht berühren, Müll wieder mitbringen.",
            "Diese Regeln dienen dem Schutz der Gebiete, in denen unsere Touren stattfinden. Sie gehören für uns zu einer guten privaten Charter – ruhige Besuche, weniger Gedränge und keine Belastung für das Riff.",
          ],
          en: [
            "National parks are not always accessible. Some areas are seasonally restricted or temporarily closed, for example for nature protection or because of weather. Koh Rok and Koh Haa are officially closed from 16 May to 15 November (some sources say until the end of October); the open season runs roughly from mid-November to mid-May. Check the current dates before booking.",
            "Maya Bay has special rules on visit length, access and behaviour. They change from time to time, so we do not cover them here but in our article on Phi Phi and Maya Bay in the early morning. In general the rules in the parks are: take nothing, do not feed animals, do not touch corals, take your rubbish back with you.",
            "These rules protect the areas where our tours take place. For us they are part of a good private charter – calm visits, fewer crowds and no burden on the reef.",
          ],
        },
      },
      {
        h2: {
          de: "Kinder, Gruppen und mehrere Gebiete an einem Tag",
          en: "Children, groups and several areas in one day",
        },
        body: {
          de: [
            "Besucht eine Route mehrere Schutzgebiete, kann je Gebiet ein Eintritt anfallen. Bei Sammeltouren wird das oft erst am Pier sichtbar, weil zunächst nur ein Einstiegspreis genannt wird. Bei einer privaten Charter mit Preis pro Boot lässt sich dagegen sauber planen: Gesamtpreis der Gruppe, Essen und Getränke, und die Frage nach dem Eintritt, die Sie vorab klären.",
            "Auch Kinder lohnen einen Blick: Häufig gelten für sie andere Sätze. Ab welchem Alter oder welcher Körpergröße ein Kinderpreis gilt, kann sich unterscheiden. Fragen Sie das für Ihre Familie nach, bevor Sie Bargeld abheben.",
          ],
          en: [
            "If a route visits several protected areas, an entry may apply for each area. On shared tours this often only becomes visible at the pier because only an entry price is quoted at first. With a private charter priced per boat you can plan cleanly: the group’s total price, food and drinks, and the question about entry that you clarify in advance.",
            "Children are also worth a look: different rates often apply to them. From which age or height a child rate applies can differ. Ask about this for your family before you withdraw cash.",
          ],
        },
      },
      {
        h2: {
          de: "Wohin die Gebühr fließt und wie Sie sich im Park verhalten",
          en: "Where the fee goes and how to behave in the park",
        },
        body: {
          de: [
            "Nationalpark-Gebühren sind Teil des Schutzes dieser Gebiete: Sie sollen unter anderem Betrieb, Kontrolle und Pflege der Parks mittragen. Wie genau sie eingesetzt werden, entscheidet die Behörde. Sicher ist: Inseln wie die Hong-Lagune oder die Phang Nga Bucht bleiben nur schön, wenn Besucher sich rücksichtsvoll verhalten.",
            "Dazu gehören ein paar einfache Regeln. Lassen Sie keinen Müll zurück, auch keine kleinen Verpackungen. Berühren oder betreten Sie keine Korallen, benutzen Sie, wenn möglich, riffschonende Sonnencreme und füttern Sie keine Tiere. Halten Sie in Lagunen und Höhlen Abstand zu Felsen und Wasserlebewesen und beachten Sie die Anweisungen von Rangern und Ihrem Kapitän.",
            "Eine private Charter mit kleiner Gruppe macht das einfacher: Bei maximal fünf Gästen ist der Eindruck auf eine Bucht geringer als bei einem Boot mit dutzenden Menschen, und wir können Zeitpunkte wählen, an denen weniger los ist. Weitere Hinweise finden Sie in unserer Packliste und Etikette für den Bootstag.",
          ],
          en: [
            "National park fees are part of protecting these areas: among other things they are meant to help fund the running, monitoring and upkeep of the parks. How exactly they are used is for the authority to decide. What is certain: islands like the Hong lagoon or Phang Nga Bay stay beautiful only if visitors behave considerately.",
            "A few simple rules apply. Leave no rubbish behind, not even small wrappers. Do not touch or stand on corals, use reef-friendly sunscreen where possible and do not feed animals. In lagoons and caves keep your distance from rocks and marine life and follow the instructions of rangers and your captain.",
            "A private charter with a small group makes this easier: with a maximum of five guests the impact on a bay is lower than with a boat carrying dozens of people, and we can choose times when it is quieter. You will find more tips in our packing list and etiquette guide for your boat day.",
          ],
        },
      },
      {
        h2: {
          de: "Checkliste vor der Buchung",
          en: "Checklist before you book",
        },
        body: {
          de: [
            "Mit diesen Punkten vermeiden Sie Überraschungen bei den Nationalpark-Gebühren:",
          ],
          en: [
            "These points help you avoid surprises with national park fees:",
          ],
        },
        list: {
          de: [
            "Fragen Sie, ob und in welcher Form für Ihre Route eine Eintrittsgebühr anfällt, auch für Kinder",
            "Fragen Sie, wie bezahlt wird: meist bar in Baht vor Ort, Ticket aufbewahren, nicht auf Kartenzahlung verlassen",
            "Fragen Sie nach Sperrzeiten für Ihre Reisezeit, besonders bei Koh Rok und Koh Haa",
            "Fragen Sie nach Mehrfach-Eintritten: Wie viele Gebiete besucht die Route?",
            "Bargeld in kleinen Baht-Scheinen mitnehmen",
          ],
          en: [
            "Ask whether and in what form an entrance fee applies to your route, also for children",
            "Ask how it is paid: usually cash in baht on site, keep the ticket, do not rely on card payment",
            "Ask about closures for your travel dates, especially for Koh Rok and Koh Haa",
            "Ask about multiple entries: how many areas does the route visit?",
            "Bring cash in small baht notes",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Wer legt den Nationalpark-Eintritt auf den Inseln bei Krabi fest?",
          en: "Who sets the national park fee for the islands near Krabi?",
        },
        a: {
          de: "Die Nationalparkbehörde. Die Sätze hängen vom Gebiet ab, werden in der Regel pro Person erhoben und können sich ändern. Vor Ort gelten die ausgehängten aktuellen Sätze.",
          en: "The national park authority. The rates depend on the area, are usually charged per person and can change. The rates posted on site are the ones that apply.",
        },
      },
      {
        q: {
          de: "Muss man für Hong Island Eintritt bezahlen?",
          en: "Do you pay an entrance fee for Hong Island?",
        },
        a: {
          de: "Für Hong Island wird in der Regel eine Nationalpark-Gebühr pro Person erhoben, für Kinder gelten häufig andere Sätze. Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung.",
          en: "A national park fee per person is usually charged for Hong Island, and different rates often apply to children. Whether and how much of an entrance fee applies at your destination, you will learn when booking.",
        },
      },
      {
        q: {
          de: "Warum gelten für Phi Phi andere Regeln als für die 4 Islands?",
          en: "Why do different rules apply to Phi Phi than to the 4 Islands?",
        },
        a: {
          de: "Phi Phi und Maya Bay liegen in einem Gebiet mit besonderen Zugangsregeln. Warum sich Angaben im Netz widersprechen, erklärt der Abschnitt zu den Abweichungen; entscheidend sind die aktuellen Vorgaben der Nationalparkbehörde.",
          en: "Phi Phi and Maya Bay lie in an area with special access rules. The section on differences explains why information online contradicts itself; what counts are the current requirements of the national park authority.",
        },
      },
      {
        q: {
          de: "Wie und wo werden die Gebühren bezahlt?",
          en: "How and where are the fees paid?",
        },
        a: {
          de: "Die Gebühr wird von der Nationalparkbehörde festgelegt und vor Ort an die Ranger am Eingang des Parks bezahlt. Einzelheiten zu Ihrer Route erfahren Sie bei der Buchung.",
          en: "The fee is set by the national park authority and paid on site to the rangers at the park entrance. Details for your route you will learn when booking.",
        },
      },
      {
        q: {
          de: "Kann man mit Karte bezahlen?",
          en: "Can you pay national park fees by card?",
        },
        a: {
          de: "In der Regel wird bar in Baht bezahlt, Kartenzahlung ist auf den Inseln nicht verlässlich vorgesehen. Nehmen Sie ausreichend Bargeld in kleinen Scheinen mit und bewahren Sie das Ticket auf.",
          en: "Payment is usually in cash in baht; card payment is not reliably available on the islands. Bring enough cash in small notes and keep the ticket.",
        },
      },
      {
        q: { de: "Muss man auf den Inseln bei Krabi Eintritt bezahlen?", en: "Do you have to pay an entrance fee on the islands near Krabi?" },
        a: {
          de: "An vielen Inseln und Nationalpark-Zielen ja. Die Gebühr wird vor Ort direkt an die Ranger am Eingang des Parks bezahlt und ist nicht im Preis unserer Tour enthalten. Welche Gebühr für Ihre Route anfällt, erfahren Sie bei der Buchung.",
          en: "At many islands and national park destinations, yes. The fee is paid on site directly to the rangers at the park entrance and is not part of our tour price. Which fee applies to your route you will learn when booking.",
        },
      },
      {
        q: { de: "Können sich die Nationalpark-Gebühren ändern?", en: "Can the national park fees change?" },
        a: {
          de: "Ja. Die Gebühren legt die Nationalparkbehörde fest und kann sie ändern. Maßgeblich sind die Sätze, die vor Ort ausgehängt sind.",
          en: "Yes. The fees are set by the national park authority and can change. The rates posted on site are the ones that count.",
        },
      },
    ],
    related: [
      "private-boat-charter-krabi-cost",
      "phi-phi-maya-bay-early-morning",
      "hong-island-krabi",
      "boat-day-packing-list-etiquette",
      "james-bond-island-phang-nga-bay",
    ],
    tourIds: ["hong-lagoons", "phi-phi-early-bird", "james-bond-bay"],
    image: IMG.hong,
  },

  /* ───────────────────────── 3. Longtail vs speedboat ───────────────────────── */
  {
    slug: "longtail-vs-speedboat-krabi",
    category: "pillar",
    short: { de: "Longtail vs. Speedboot", en: "Longtail vs speedboat" },
    primaryKeyword: "Longtail oder Speedboot Krabi",
    keywords: [
      "Longtail oder Speedboot Krabi",
      "Longtail Boot Krabi Erfahrung",
      "Speedboot Krabi privat",
      "Krabi Bootstour Longtail Speedboat Unterschied",
      "Longtail Boot Krabi laut nass",
      "schnellstes Boot Krabi Inseln",
      "Krabi Boot Komfort Hardtop Kabine",
      "longtail vs speedboat Krabi",
      "Krabi longtail or speedboat which is better",
      "private longtail vs speedboat Krabi",
      "Krabi 4 islands speedboat or longtail",
      "Krabi speedboat noise",
      "Krabi boat for seasickness",
    ],
    title: {
      de: "Longtail oder Speedboot Krabi: Was passt zu Ihnen?",
      en: "Longtail vs Speedboat Krabi: Which One to Book?",
    },
    metaDescription: {
      de: "Longtail oder Speedboot in Krabi? Tempo, Lärm, Komfort, Seegang und Preis im Vergleich – und was eine private Charter für Ihren Tag verändert.",
      en: "Longtail or speedboat in Krabi? Speed, noise, comfort, rough water and price compared – and what a private charter changes for your whole day out.",
    },
    h1: {
      de: "Longtail oder Speedboot in Krabi: der ehrliche Vergleich",
      en: "Longtail or speedboat in Krabi: the honest comparison",
    },
    intro: {
      de: "Longtail oder Speedboot in Krabi – diese Frage taucht bei fast jeder Planung auf, und die Antworten sind oft eher Werbung als Beratung. Tatsächlich haben beide Boote echte Stärken. Das Longtail ist ein Stück Thailand, günstig und kommt in flaches Wasser. Das Speedboot ist schneller, erreicht mehr Inseln an einem Tag und ist je nach Ausstattung deutlich komfortabler. Dieser Guide vergleicht beide ehrlich: Tempo, Lärm, Nässe, Komfort, Seegang, Reichweite und Preis. Dazu zeigen wir, warum die Gruppengröße an Bord oft wichtiger ist als der Bootstyp – und was unser eigenes Boot ausmacht. Er vertieft die Kurzantworten aus dem Abschnitt „Warum unser Speedboat statt Longtail-Boot?“ auf unserer Startseite.",
      en: "Longtail or speedboat in Krabi – this question comes up in almost every plan, and the answers tend to be more advertising than advice. In fact both boats have real strengths. The longtail is a piece of Thailand, cheap and able to enter shallow water. The speedboat is faster, reaches more islands in a day and, depending on the equipment, is considerably more comfortable. This guide compares both honestly: speed, noise, spray, comfort, rough water, range and price. We also show why group size on board often matters more than the boat type – and what makes our own boat different. It deepens the short answers in the “Why our speedboat instead of a longtail boat?” section on our home page.",
    },
    sections: [
      {
        h2: {
          de: "Kurzantwort nach Reisetyp",
          en: "Short answer by type of traveller",
        },
        body: {
          de: [
            "Wenn Sie nur eine Zeile lesen wollen: Das beste Boot hängt davon ab, was Sie an Ihrem Tag erleben wollen. Nach Reisetyp gerechnet sieht es so aus:",
          ],
          en: [
            "If you only want to read one line: the best boat depends on what you want from your day. By type of traveller it looks like this:",
          ],
        },
        list: {
          de: [
            "Knappes Budget, kurze Strecke, Lust auf Atmosphäre: Longtail, am besten privat gemietet",
            "Weite Ziele wie Phi Phi, Koh Rok oder Phang Nga an einem Tag: Speedboot",
            "Paare mit Fokus auf Ruhe, Foto und Sunset: Speedboot als Privatcharter",
            "Familien mit kleinen Kindern: Boot mit Schatten, Platz und ruhigem Sitz, meist Speedboot-Charter",
            "Fans von flachen, versteckten Buchten: Longtail kann Vorteile haben",
            "Wenn Sie leicht seekrank werden: kein pauschaler Sieger, siehe eigener Abschnitt",
          ],
          en: [
            "Tight budget, short distance, appetite for atmosphere: longtail, ideally rented privately",
            "Distant destinations such as Phi Phi, Koh Rok or Phang Nga in a single day: speedboat",
            "Couples focused on calm, photos and sunset: speedboat as a private charter",
            "Families with small children: a boat with shade, space and calm seating, mostly a speedboat charter",
            "Fans of shallow, hidden coves: a longtail can have advantages",
            "If you get seasick easily: no blanket winner, see the separate section",
          ],
        },
      },
      {
        h2: {
          de: "Longtail: Stärken und Grenzen",
          en: "Longtail: strengths and limits",
        },
        body: {
          de: [
            "Das Longtail-Boot ist ein schlankes Holzboot, angetrieben von einem Motor auf einem langen, schwenkbaren Schaft. Es gehört zum Bild Südthailands, und viele Reisende wollen genau dieses Erlebnis.",
            "Stärken: Der Preis ist in der Regel niedriger als bei einem Speedboot, und das Boot kommt in sehr flaches Wasser und nahe an Strände heran, wo ein tiefer gehendes Boot ankern muss. Es ist unkompliziert, wendig und passt zur kurzen Fahrt zu nahen Inseln und nach Railay.",
            "Grenzen: Die Motoren sind offen und laut, Abgase und Vibration sind spürbar. Die Fahrt ist langsamer, was bei weiten Zielen den größten Teil der Zeit kostet. Das Boot liegt tief, bei Wellen kann Spritzwasser an Bord kommen, und die Sitze sind häufig einfache Holzbänke. Schatten gibt es oft nur durch ein Dach, das nicht immer zuverlässig ist.",
            "Das ist keine Wertung, sondern eine Beschreibung: Für kurze Strecken bei ruhigem Meer ist ein Longtail eine tolle, authentische Wahl. Die Nachteile wachsen mit der Dauer der Fahrt.",
          ],
          en: [
            "The longtail is a slender wooden boat driven by an engine on a long, swivelling shaft. It is part of the image of southern Thailand, and many travellers want exactly that experience.",
            "Strengths: the price is usually lower than for a speedboat, and the boat can enter very shallow water and get close to beaches where a deeper boat has to anchor. It is uncomplicated, manoeuvrable and suits the short ride to nearby islands and to Railay.",
            "Limits: the engines are open and loud, fumes and vibration are noticeable. The ride is slower, which eats most of your time on distant destinations. The boat sits low, spray can come aboard in waves, and seats are often simple wooden benches. Shade often comes only from a canopy that is not always reliable.",
            "This is not a judgement but a description: for short distances in calm seas a longtail is a great, authentic choice. The drawbacks grow with the length of the ride.",
          ],
        },
        tip: {
          de: "Wenn Sie ein Longtail wählen: Handy und Kamera in eine wasserdichte Tasche, ein Tuch gegen Gischt und Sonne und Ohrstöpsel, wenn Sie lärmempfindlich sind.",
          en: "If you choose a longtail: put phone and camera in a waterproof bag, bring a scarf against spray and sun, and earplugs if you are noise-sensitive.",
        },
      },
      {
        h2: {
          de: "Speedboot: Stärken und Grenzen",
          en: "Speedboat: strengths and limits",
        },
        body: {
          de: [
            "Ein Speedboot ist ein Außenborder-Boot mit mehreren Motoren, gebaut für Tempo. Stärken: Es ist deutlich schneller als ein Longtail, erreicht entferntere Inseln in überschaubarer Zeit und lässt mehr Stunden für Stopps. Moderne Viertakt-Außenborder sind leiser und sauberer als offene Dieselmotoren, und ein höherer Rumpf bringt weniger Spritzwasser an Bord.",
            "Grenzen: Bei Seegang muss ein Speedboot die Geschwindigkeit anpassen, und bei Wellen kann die Fahrt härter werden. Auf vielen Sammeltouren sitzen 30 bis 40 Personen an Bord, die Stopps sind eng getaktet, und die Buchten füllen sich zur gleichen Zeit – das beschreiben wir als eigene Beobachtung und nicht als Statistik. Der Preis pro Boot liegt in der Regel über dem eines Longtails.",
            "Wichtig: „Speedboot“ ist ein weiter Begriff. Ein volles Gruppenboot und ein privates Hardtop-Kabinenboot haben außer dem Motor wenig gemeinsam. Prüfen Sie deshalb Ausstattung, Platz und Gruppengröße, nicht nur den Namen.",
          ],
          en: [
            "A speedboat is an outboard boat with several engines, built for speed. Strengths: it is much faster than a longtail, reaches more distant islands in reasonable time and leaves more hours for stops. Modern four-stroke outboards are quieter and cleaner than open diesel engines, and a higher hull brings less spray on board.",
            "Limits: in rough water a speedboat must reduce speed, and in waves the ride can become harder. On many shared tours 30 to 40 people are on board, stops are tightly timed and the bays fill up at the same time – we describe this as our own observation, not as a statistic. The price per boat is usually higher than for a longtail.",
            "Important: “speedboat” is a broad term. A full group boat and a private hardtop cabin boat share little besides the engine. So check equipment, space and group size, not just the name.",
          ],
        },
      },
      {
        h2: {
          de: "Privat oder Gruppe: Die Gruppengröße zählt mehr als der Bootstyp",
          en: "Private or group: group size matters more than boat type",
        },
        body: {
          de: [
            "Die meisten Enttäuschungen auf Bootstouren entstehen nicht durch den Bootstyp, sondern durch die Gruppe: ein fester Zeitplan, viele Gäste, volle Buchten und kaum Zeit am Wasser. Das gilt für ein Longtail mit Sammelbus genauso wie für ein überfülltes Speedboot.",
            "Ein privates Longtail kann sich deshalb besser anfühlen als ein Gruppen-Speedboot – es gehört Ihnen, Sie bestimmen das Tempo. Umgekehrt ist ein privates Speedboot meist die ruhigste Variante, weil Sie Route, Startzeit und Dauer selbst steuern und gegen den Strom fahren können: früher los, später raus, andere Buchten.",
            "Wer die Entscheidung klären will, stellt sich zuerst die Frage privat oder Gruppe und erst danach Longtail oder Speedboot. Zu den Kosten privater Touren lesen Sie unseren Kostenguide für private Bootstouren in Krabi.",
          ],
          en: [
            "Most disappointments on boat tours do not come from the boat type but from the group: a fixed schedule, many guests, crowded bays and hardly any time in the water. This is as true for a longtail with a shuttle bus as for a packed speedboat.",
            "A private longtail can therefore feel better than a group speedboat – it belongs to you, you set the pace. Conversely a private speedboat is usually the calmest option because you control route, start time and duration and can go against the flow: out earlier, back later, different bays.",
            "To settle the decision, first ask private or group, and only then longtail or speedboat. For the costs of private tours read our cost guide for private boat tours in Krabi.",
          ],
        },
      },
      {
        h2: {
          de: "Unser Boot: Hardtop-Kabinenboot mit 2×300 PS, max. 5 Gäste",
          en: "Our boat: hardtop cabin boat with 2×300 hp, max. 5 guests",
        },
        body: {
          de: [
            "Unser Boot ist ein weißes Hardtop-Kabinenboot mit zwei 300-PS-Viertaktmotoren. Es gibt eine Sitzbank und bequeme Bootssessel, ein Heck-Cockpit und Schatten durch die Hardtop-Kabine. Es dürfen maximal 5 Gäste an Bord. Wir fahren privat: Ihr Boot, Ihr Kapitän, Ihr Zeitplan.",
            "An Bord sind außerdem Rettungswesten in Erwachsenen- und Kindergrößen, Erste-Hilfe-Ausrüstung und Marine-Funk. Dank zwei Motoren haben wir eine Reserve an Bord. Die Standardtouren enthalten Zeit zum Schnorcheln, Schwimmen und Entspannen; Schnorchelausrüstung ist kostenlos und wird bei der Buchung angekreuzt.",
            "Für Sie heißt das konkret: Sie können sich im Schatten unterhalten, ohne zu schreien, Ihre Sachen liegen trockener als auf einem tief liegenden Boot, und weite Ziele wie Phi Phi oder die Phang Nga Bucht sind an einem Tag möglich. Das ersetzt nicht jede Stärke eines Longtails – aber es macht den Tag ruhiger und gibt Ihnen mehr Zeit an den Stopps.",
          ],
          en: [
            "Our boat is a white hardtop cabin boat with two 300 hp four-stroke engines. It has a bench seat and comfortable boat chairs, a rear cockpit and shade from the hardtop cabin. A maximum of 5 guests are allowed on board. We run privately: your boat, your captain, your schedule.",
            "On board there are also life jackets in adult and children’s sizes, a first-aid kit and a marine radio. Thanks to two engines we have a backup on board. The standard tours include time to snorkel, swim and relax; snorkel gear is free and ticked when booking.",
            "In concrete terms: you can talk in the shade without shouting, your belongings stay drier than on a low-lying boat, and distant destinations such as Phi Phi or Phang Nga Bay are possible in a single day. It does not replace every strength of a longtail – but it makes the day calmer and gives you more time at the stops.",
          ],
        },
        tip: {
          de: "Möchten Sie wissen, wie sich ein Tag an Bord im Vergleich anfühlt? Auf unserer Startseite gibt es unter „Longtail vs. Speedboat“ einen Zeitverlauf der beiden Tage.",
          en: "Want to know how a day on board compares? On our home page, under “Longtail vs. speedboat”, there is a timeline of the two days.",
        },
      },
      {
        h2: {
          de: "Reichweite: Was geht mit dem Longtail, was nur mit dem Speedboot?",
          en: "Range: what works by longtail and what only by speedboat?",
        },
        body: {
          de: [
            "Die Reichweite ist der praktisch wichtigste Unterschied. Mit dem Longtail erreichen Sie nahe Ziele gut: Railay und Phra Nang ab Ao Nang, und je nach Anbieter und Seegang die klassischen 4 Islands mit Poda, Chicken Island und Tup. Für diese Strecken ist ein Longtail eine echte Option.",
            "Weite Ziele sind mit einem Longtail dagegen kaum an einem Tag sinnvoll. Phi Phi mit Maya Bay und Pileh Lagoon liegt rund 50 Minuten von Ao Nang entfernt (siehe unsere Tourplanung), die Hong-Inseln etwa 35 Minuten, die weit entfernten Ziele wie Koh Roi, Koh Kudu und Koh Nok rund eine Stunde, jeweils mit dem Speedboot. Mit einem langsameren Boot verlängern sich diese Fahrzeiten deutlich, und Ihre Zeit an den Stopps schrumpft.",
            "Die Frage, ob man mit einem Longtail von Krabi aus nach Phi Phi kommt, beantworten wir vorsichtig: Es ist je nach Anbieter und Wetter teils möglich, aber in der Regel eine lange, offene Überfahrt, und die meisten Phi-Phi-Touren laufen mit dem Speedboot. Fragen Sie Ihren Anbieter nach der tatsächlichen Fahrzeit und dem Wetterplan.",
          ],
          en: [
            "Range is the practically most important difference. With a longtail you reach nearby destinations well: Railay and Phra Nang from Ao Nang and, depending on the operator and sea state, the classic 4 Islands with Poda, Chicken Island and Tup. For these distances a longtail is a real option.",
            "Distant destinations, however, make little sense by longtail in one day. Phi Phi with Maya Bay and Pileh Lagoon is about 50 minutes from Ao Nang (per our tour planning), the Hong islands about 35 minutes, the far destinations such as Koh Roi, Koh Kudu and Koh Nok around one hour, each by speedboat. With a slower boat these travel times increase considerably and your time at the stops shrinks.",
            "As to whether you can reach Phi Phi by longtail from Krabi, we answer cautiously: depending on operator and weather it is partly possible, but usually a long, open crossing, and most Phi Phi tours run by speedboat. Ask your operator about the actual travel time and the weather plan.",
          ],
        },
        list: {
          de: [
            "Gut per Longtail: Railay, Phra Nang, Koh Poda, Chicken Island, Tup Sandbank",
            "Besser per Speedboot: Hong-Inseln, Phi Phi, Koh Roi, Koh Kudu, Koh Nok",
            "Ganztägige Kombis mit mehreren weiten Zielen: Speedboot",
          ],
          en: [
            "Good by longtail: Railay, Phra Nang, Koh Poda, Chicken Island, Tup Sandbank",
            "Better by speedboat: Hong islands, Phi Phi, Koh Roi, Koh Kudu, Koh Nok",
            "Full-day combinations with several distant destinations: speedboat",
          ],
        },
      },
      {
        h2: {
          de: "Lärm, Nässe und Komfort im Vergleich",
          en: "Noise, spray and comfort compared",
        },
        body: {
          de: [
            "Beim Lärm ist ein offener Dieselmotor am langen Schaft in der Regel deutlich präsenter als ein moderner Außenborder; Unterhaltung während der Fahrt ist auf dem Longtail oft nur mit erhobener Stimme möglich. Bei Nässe gilt: Ein tief liegendes Boot nimmt bei Wellen eher Wasser auf, ein Boot mit höherem Rumpf und Kabine bleibt trockener – ganz trocken wird aber niemand auf dem Meer, zumal Sie ja zum Baden hier sind.",
            "Beim Komfort zählen Sitz und Schatten. Holzbänke ohne Lehne sind auf Dauer anstrengend, besonders für Kinder und ältere Gäste. Ein Boot mit Sitzbank, bequemen Sesseln und Hardtop bietet mehr Auflagefläche für den Rücken und Schutz vor der Mittagssonne. Zur Ehrlichkeit gehört: Auch ein Speedboot ist nicht automatisch komfortabel, wenn 30 bis 40 Personen darauf sitzen.",
            "Stärken des Longtails bleiben seine Atmosphäre und die Nähe zum Wasser. Wenn Sie genau das suchen, ist Nässe und Lärm für Sie vielleicht ein Teil des Erlebnisses – und das ist legitim.",
          ],
          en: [
            "On noise, an open diesel engine on a long shaft is usually much more present than a modern outboard; conversation during the ride on a longtail is often only possible with a raised voice. On spray: a low-lying boat takes on water more readily in waves, a boat with a higher hull and cabin stays drier – but nobody stays completely dry at sea, especially as you are here to swim.",
            "On comfort, seat and shade count. Wooden benches without backrest become tiring, especially for children and older guests. A boat with a bench seat, comfortable chairs and a hardtop offers more back support and protection from the midday sun. In fairness: a speedboat is not automatically comfortable either when 30 to 40 people sit on it.",
            "The longtail’s strengths remain its atmosphere and closeness to the water. If that is what you are after, spray and noise may be part of the experience for you – and that is perfectly legitimate.",
          ],
        },
      },
      {
        h2: {
          de: "Seegang, Saison und Seekrankheit: Welches Boot ist besser?",
          en: "Rough water, season and seasickness: which boat is better?",
        },
        body: {
          de: [
            "Eine pauschale Antwort wäre unseriös. Ein Speedboot ist kürzer unterwegs, was bei Seekrankheit hilft, und bei ruhigem Meer fährt es gleichmäßig. Bei Wellenschlag kann die Fahrt härter und stoßiger werden. Ein Longtail liegt tiefer, schaukelt eher und ist langsamer – man ist dadurch länger auf dem Wasser.",
            "Was in der Praxis hilft, ist weniger der Bootstyp als die Vorbereitung: guter Sitzplatz in der Mitte des Bootes, Blick zum Horizont, leichte Mahlzeit, ausreichend trinken, frische Luft und – wenn Sie anfällig sind – ein vorher mit Arzt oder Apotheke abgestimmtes Mittel. Wir geben dazu keine medizinischen Versprechen ab.",
            "Die Saison wirkt stärker als das Boot: Von etwa November bis April sind Bedingungen in der Regel ruhiger, in der Regenzeit wechselhafter. Mehr dazu in unserem Artikel zur besten Reisezeit für Krabi. Ein seriöser Anbieter verschiebt oder ändert die Route, wenn die Bedingungen nicht passen.",
          ],
          en: [
            "A blanket answer would be unprofessional. A speedboat spends less time under way, which helps with seasickness, and in calm seas it rides evenly. In choppy water the ride can get harder and bumpier. A longtail sits lower, rocks more easily and is slower – so you are on the water longer.",
            "What helps in practice is less the boat type than preparation: a good seat in the middle of the boat, eyes on the horizon, a light meal, enough water, fresh air and – if you are prone to it – a remedy agreed beforehand with a doctor or pharmacist. We make no medical promises.",
            "Season has more effect than the boat: from about November to April conditions are generally calmer, in the rainy season more changeable. More in our article on the best time to visit Krabi. A reputable operator postpones or changes the route when conditions do not fit.",
          ],
        },
        tip: {
          de: "Wenn Sie seekrankheitsgefährdet sind, sagen Sie es bei der Buchung. Dann kann der Kapitän Route und Tempo darauf abstimmen, und Sie sitzen bei der Überfahrt dort, wo es am ruhigsten ist.",
          en: "If you are prone to seasickness, say so when booking. The captain can then adapt route and speed, and you sit where it is calmest during the crossing.",
        },
      },
      {
        h2: {
          de: "Preis: Was Longtail und Speedboot wirklich kosten",
          en: "Price: what longtail and speedboat really cost",
        },
        body: {
          de: [
            "Das Longtail ist in der Regel die günstigere Möglichkeit, ein Boot zu mieten, und genau deshalb bleibt es für viele Reisende erste Wahl. Konkrete Preise anderer Anbieter nennen wir nicht, weil sie sich schnell ändern. Bei uns gelten die Preise pro Boot für bis zu 5 Gäste, etwa ab 11.500 THB für den 4-stündigen Railay Escape und ab 18.500 THB für die 4-Islands VIP & Sunset Special.",
            "Der Vergleich pro Kopf hängt von der Gruppengröße ab. Zu fünft verteilen sich die Kosten, zu zweit nicht. Rechnen Sie außerdem den Zeitgewinn mit: Wer an einem Tag Ziele erreicht, die mit einem langsamen Boot nicht gingen, bekommt für sein Geld mehr Erlebnis, auch wenn die Zahl höher ist.",
            "Die detaillierte Kostenaufstellung, inklusive Nebenkosten und Checkliste, finden Sie im Artikel zu den Kosten einer privaten Bootstour in Krabi.",
          ],
          en: [
            "The longtail is usually the cheaper way to rent a boat, which is exactly why it remains the first choice for many travellers. We do not quote other operators’ prices because they change quickly. With us, prices apply per boat for up to 5 guests, for example from 11,500 THB for the 4-hour Railay Escape and from 18,500 THB for the 4-Islands VIP & Sunset Special.",
            "The per-head comparison depends on group size. With five the cost is spread, with two it is not. Also count the time gained: whoever reaches destinations in one day that a slow boat could not manage gets more experience for the money, even if the number is higher.",
            "You will find the detailed cost breakdown, including extras and a checklist, in the article on the cost of a private boat tour in Krabi.",
          ],
        },
      },
      {
        h2: {
          de: "Entscheidungshilfe: 5 Fragen",
          en: "Decision aid: 5 questions",
        },
        body: {
          de: [
            "Mit diesen fünf Fragen finden Sie in der Regel schnell Ihr Boot:",
          ],
          en: [
            "These five questions usually lead you quickly to your boat:",
          ],
        },
        list: {
          de: [
            "Wie weit soll es gehen? Nah (Railay, Poda): Longtail oder Speedboot. Weit (Phi Phi, Hong, Phang Nga): Speedboot.",
            "Wie wichtig sind Ruhe und Gesprächslautstärke? Sehr: Speedboot mit modernen Motoren.",
            "Wie viel Budget haben Sie pro Gruppe? Knapp: privates Longtail oder Sammeltour.",
            "Wer fährt mit? Kinder, ältere Gäste oder Paare mit Anlass: Schatten und Sitzkomfort sprechen für das Hardtop-Boot.",
            "Wie wichtig ist Ihnen Zeit an den Stopps statt auf der Fahrt? Sehr: Speedboot, privat.",
          ],
          en: [
            "How far do you want to go? Near (Railay, Poda): longtail or speedboat. Far (Phi Phi, Hong, Phang Nga): speedboat.",
            "How important are calm and conversation volume? Very: speedboat with modern engines.",
            "What is your budget per group? Tight: private longtail or a shared tour.",
            "Who is coming? Children, older guests or couples with an occasion: shade and seating comfort favour the hardtop boat.",
            "How important is time at the stops rather than under way? Very: speedboat, private.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Longtail oder Speedboot: was ist besser in Krabi?",
          en: "Is a longtail or speedboat better in Krabi?",
        },
        a: {
          de: "Das hängt von Ziel, Budget und Gruppe ab. Das Longtail ist günstiger und gut für nahe Ziele und flaches Wasser. Das Speedboot ist schneller, erreicht weite Inseln wie Phi Phi oder die Phang Nga Bucht an einem Tag und ist je nach Ausstattung komfortabler. Oft zählt die Gruppengröße mehr als der Bootstyp.",
          en: "It depends on destination, budget and group. The longtail is cheaper and good for nearby destinations and shallow water. The speedboat is faster, reaches distant islands such as Phi Phi or Phang Nga Bay in a day and, depending on equipment, is more comfortable. Group size often matters more than boat type.",
        },
      },
      {
        q: {
          de: "Sind Speedboote in Krabi laut und unbequem?",
          en: "Are speedboats in Krabi loud and uncomfortable?",
        },
        a: {
          de: "Nicht pauschal. Moderne Viertakt-Außenborder sind in der Regel leiser als offene Dieselmotoren. Komfort hängt von Ausstattung und Gruppengröße ab: Bei 30 bis 40 Personen an Bord ist es eng, ein privates Boot mit Sitzbank, Sesseln und Hardtop-Schatten ist ruhiger.",
          en: "Not across the board. Modern four-stroke outboards are generally quieter than open diesel engines. Comfort depends on equipment and group size: with 30 to 40 people on board it is tight, a private boat with bench seat, chairs and hardtop shade is calmer.",
        },
      },
      {
        q: {
          de: "Wird man auf einem Longtail-Boot nass?",
          en: "Do you get wet on a longtail boat in Krabi?",
        },
        a: {
          de: "Häufig ja, vor allem bei Wellen, weil das Boot tief liegt und Gischt über die Bordwand kommt. Bei ruhigem Meer bleibt es oft trocken. Eine wasserdichte Tasche für Handy und Kamera ist auf einem Longtail eine gute Idee.",
          en: "Often yes, especially in waves, because the boat sits low and spray comes over the side. In calm seas it often stays dry. A waterproof bag for phone and camera is a good idea on a longtail.",
        },
      },
      {
        q: {
          de: "Welches Boot ist besser bei Seekrankheit?",
          en: "Which boat is better if you get seasick?",
        },
        a: {
          de: "Es gibt keinen pauschalen Gewinner. Ein Speedboot ist kürzer unterwegs, kann aber bei Wellen stoßiger sein; ein Longtail schaukelt eher und ist länger auf dem Wasser. Wichtiger sind Saison, ein guter Sitzplatz, Blick zum Horizont und Vorbereitung. Sagen Sie bei der Buchung Bescheid.",
          en: "There is no blanket winner. A speedboat spends less time under way but can be bumpier in waves; a longtail rocks more and is on the water longer. Season, a good seat, a view of the horizon and preparation matter more. Tell the operator when booking.",
        },
      },
      {
        q: {
          de: "Wie schnell ist ein Speedboot im Vergleich zum Longtail?",
          en: "How much faster is a speedboat than a longtail in Krabi?",
        },
        a: {
          de: "Ein Speedboot ist deutlich schneller, was bei weiten Zielen den Unterschied macht: Nach unserer Tourplanung liegen Hong rund 35 Minuten, Phi Phi rund 50 Minuten und die weiten Ziele rund eine Stunde von Ao Nang entfernt. Mit einem langsameren Boot verlängert sich die Fahrtzeit entsprechend, genaue Werte hängen von Boot und Bedingungen ab.",
          en: "A speedboat is considerably faster, which makes the difference on distant destinations: according to our tour planning Hong is about 35 minutes, Phi Phi about 50 minutes and the far destinations about one hour from Ao Nang. With a slower boat the travel time grows accordingly; exact values depend on boat and conditions.",
        },
      },
      {
        q: {
          de: "Kann man mit einem Longtail nach Phi Phi fahren?",
          en: "Can you go to Phi Phi by longtail from Krabi?",
        },
        a: {
          de: "Je nach Anbieter und Wetter teils möglich, aber in der Regel eine lange, offene Überfahrt. Die meisten Phi-Phi-Touren fahren mit Speedbooten. Fragen Sie Ihren Anbieter nach Fahrzeit, Wetterplan und Sicherheitsausrüstung.",
          en: "Depending on operator and weather it is partly possible, but usually a long, open crossing. Most Phi Phi tours use speedboats. Ask your operator about travel time, weather plan and safety equipment.",
        },
      },
    ],
    related: [
      "private-boat-charter-krabi-cost",
      "krabi-island-hopping-planner",
      "avoid-crowds-krabi-timing",
      "best-time-to-visit-krabi",
      "krabi-with-kids",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phang-nga-uncharted"],
    image: IMG.droneAerial,
  },
];
