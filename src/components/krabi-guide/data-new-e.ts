import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch E: 4 Islands explained (names, geography, sandbar timing, price) and the
 * Hong vs 4 Islands vs Phi Phi decision guide.
 * Fact policy:
 *  - Our own prices come only from TOURS (content.ts), always "ab" / per boat for up to 5 guests.
 *  - Travel times come only from existing site content (tour pages / guide articles).
 *  - National park: only the general sentence that an entrance fee is charged on site and is not included in the tour price. No amounts.
 *  - No tide tables, no ratings or review claims, no third-party prices.
 */
export const NEW_ARTICLES_E: GuideArticleInput[] = [
  /* ───────────── 1. 4 Islands Krabi: names, map, sandbar timing, price ───────────── */
  {
    slug: "4-islands-krabi-names-map-sandbar-timing",
    category: "island",
    short: { de: "4 Islands Krabi", en: "4 Islands Krabi" },
    primaryKeyword: "4 islands krabi names",
    keywords: [
      "4 Islands Krabi Namen Karte Sandbank Preise",
      "4 Islands Krabi",
      "4 Islands Tour Krabi Karte",
      "Krabi 4 Islands Namen",
      "4 Islands Krabi privat",
      "Tup Sandbank Uhrzeit",
      "4 islands krabi names",
      "4 island tour krabi map",
      "krabi 4 island tour",
      "4 islands krabi sandbar time",
      "4 islands krabi private speedboat price",
    ],
    title: {
      de: "4 Islands Krabi: Namen, Karte, Sandbank, Preise",
      en: "4 Islands Krabi: Names, Map, Sandbar Timing, Price",
    },
    metaDescription: {
      de: "4 Islands Krabi erklärt: Namen der vier Inseln, ihre Lage, Reihenfolge, Tup-Sandbank und Gezeiten, Andrang vermeiden und was eine private Tour pro Boot kostet.",
      en: "4 islands Krabi names explained: Koh Poda, Chicken Island, Tup and Phra Nang, how they lie, when the sandbar shows and what a private tour costs per boat.",
    },
    h1: {
      de: "4 Islands Krabi: Namen, Karte in Worten, Sandbank-Timing und Preise",
      en: "4 Islands Krabi: names, the map in words, sandbar timing and price",
    },
    intro: {
      de: "Die „4 Islands“ gehören zu den meistgebuchten Touren in Krabi – und trotzdem ist selten klar, welche vier Inseln überhaupt gemeint sind, wie sie zueinander liegen und warum der Zeitpunkt über Ihren Tag entscheidet. Dieser Guide beantwortet genau das: die Namen der vier Inseln (Koh Poda, Chicken Island, Tup Island und Phra Nang/Railay), eine Karte in Worten statt als Bild, die typische Reihenfolge, das Timing der Tup-Sandbank im Verhältnis zu den Gezeiten und die Frage, wann es voll wird und wann nicht. Am Ende stehen die Eckdaten unserer privaten Variante, der „4-Islands VIP & Sunset Special“, samt Preis pro Boot. Alle Angaben sind als Orientierung gedacht: Wasserstand, Wetter und Andrang ändern sich von Tag zu Tag.",
      en: "The “4 Islands” are among the most booked tours in Krabi – yet it is rarely clear which four islands are meant, how they sit relative to each other and why timing decides your day. This guide answers exactly that: the names of the four islands (Koh Poda, Chicken Island, Tup Island and Phra Nang/Railay), a map in words instead of a picture, the typical order of stops, the timing of the Tup sandbar in relation to the tides and the question of when it gets busy and when it does not. At the end you will find the key facts of our private version, the “4-Islands VIP & Sunset Special”, including the price per boat. Everything here is meant as orientation: water level, weather and crowds change from day to day.",
    },
    sections: [
      {
        id: "four-islands-names",
        h2: {
          de: "Die 4 Islands Krabi: Namen auf einen Blick",
          en: "The 4 islands Krabi names at a glance",
        },
        body: {
          de: [
            "Die Bezeichnung „4 Islands“ ist keine amtliche Einteilung, sondern ein Tourname. Anbieter fassen darunter eine Gruppe von Zielen vor Ao Nang zusammen, und die genaue Auswahl kann leicht abweichen. Die klassische Zusammenstellung, auch bei unserer Tour, besteht aus diesen vier Stationen:",
            "Die Tabelle zeigt, was jede Station ausmacht. Die Hinweise zum Wasserstand sind allgemeine Faustregeln, keine Tagesprognose.",
          ],
          en: [
            "“4 Islands” is not an official classification but a tour name. Operators bundle a group of destinations off Ao Nang under it, and the exact selection can differ slightly. The classic set, including on our tour, consists of these four stops:",
            "The table shows what makes each stop special. The notes on water level are general rules of thumb, not a forecast for any given day.",
          ],
        },
        table: {
          caption: {
            de: "Die vier Stationen der 4-Islands-Tour im Überblick",
            en: "The four stops of the 4 Islands tour at a glance",
          },
          head: [
            { de: "Station", en: "Stop" },
            { de: "Was es ist", en: "What it is" },
            { de: "Highlight", en: "Highlight" },
            { de: "Wasserstand", en: "Water level" },
          ],
          rows: [
            [
              { de: "Koh Poda", en: "Koh Poda" },
              { de: "Kleine, naturbelassene Insel südwestlich von Ao Nang", en: "Small, largely natural island southwest of Ao Nang" },
              { de: "Strand mit freistehendem Kalksteinfelsen, Schnorcheln an den Felsen am Strandrand", en: "Beach with a free-standing limestone rock, snorkelling around the rocks at the edge of the beach" },
              { de: "Vor allem eine Lichtfrage (früh oder spät)", en: "Mostly a question of light (early or late)" },
            ],
            [
              { de: "Chicken Island (Koh Kai)", en: "Chicken Island (Koh Kai)" },
              { de: "Langgezogene Kalksteininsel mit markanter Felsspitze", en: "Long limestone island with a striking rock pinnacle" },
              { de: "Felsen in Hühnerform, Riffe zum Schnorcheln", en: "Chicken-shaped rock, reefs for snorkelling" },
              { de: "Schnorcheln eher bei höherem Wasser angenehm", en: "Snorkelling is often nicer at higher water" },
            ],
            [
              { de: "Tup Island (Koh Tup)", en: "Tup Island (Koh Tup)" },
              { de: "Kleine Insel, an der die Sandbank auftaucht", en: "Small island where the sandbar appears" },
              { de: "Sandbank zwischen den Inseln, nur bei Ebbe sichtbar", en: "Sandbar between the islands, visible only at low tide" },
              { de: "Braucht Niedrigwasser", en: "Needs low water" },
            ],
            [
              { de: "Phra Nang / Railay", en: "Phra Nang / Railay" },
              { de: "Kalksteinhalbinsel mit Phra Nang Cave Beach", en: "Limestone peninsula with Phra Nang Cave Beach" },
              { de: "Felswände, Strand, Abendlicht", en: "Cliffs, beach, evening light" },
              { de: "Railay East bei Ebbe nicht zum Baden", en: "Railay East is not for swimming at low tide" },
            ],
          ],
        },
      },
      {
        id: "map-in-words",
        h2: {
          de: "Die 4 Island Tour Krabi Karte – in Worten erklärt",
          en: "The 4 island tour Krabi map – explained in words",
        },
        body: {
          de: [
            "Statt einer Bildkarte hier die Geografie so, wie Sie sie vom Boot aus erleben. Ausgangspunkt ist Ao Nang. Von dort liegen alle vier Stationen im Süden und Südwesten, also in Richtung Railay und offenes Meer. Die Poda-Gruppe liegt nach unseren Tourdaten nur 15 bis 30 Minuten von Ao Nang entfernt. Das ist der Grund, warum die 4 Islands auch mit einem Start am frühen Nachmittag funktionieren.",
            "Koh Poda liegt südwestlich von Ao Nang und ist die am weitesten „draußen“ gelegene der vier Stationen. Chicken Island und die Tup-Sandbank liegen von Koh Poda nur wenige Bootsminuten entfernt, und zwar so dicht beieinander, dass Sie beide in einem Zug erleben. Die Sandbank verläuft zwischen den kleinen Inseln Koh Tup und Koh Kai, und die Felsspitze von Chicken Island ragt direkt daneben auf. Phra Nang Cave Beach und Railay liegen ebenfalls nur wenige Bootsminuten von dieser Gruppe entfernt, an der Kalksteinhalbinsel mit den großen Felswänden.",
            "Im Kopf lässt sich das als Dreieck merken: Ao Nang und Railay als Küstenpunkte, Koh Poda mit Chicken Island und Tup als Inselgruppe davor. Weil die Abstände zwischen den Inseln kurz sind, verbringen Sie wenig Zeit mit Fahren und viel Zeit im Wasser oder am Strand.",
          ],
          en: [
            "Instead of a picture map, here is the geography as you experience it from the boat. The starting point is Ao Nang. From there all four stops lie to the south and southwest, towards Railay and the open sea. According to our tour data the Poda group is only 15 to 30 minutes from Ao Nang. That is why the 4 Islands also work with a start in the early afternoon.",
            "Koh Poda lies southwest of Ao Nang and is the stop furthest “out” of the four. Chicken Island and the Tup sandbar are only a few boat minutes from Koh Poda, and so close to each other that you experience both in one go. The sandbar runs between the small islands of Koh Tup and Koh Kai, and the rock pinnacle of Chicken Island rises right next to it. Phra Nang Cave Beach and Railay are also only a few boat minutes from this group, on the limestone peninsula with the big cliffs.",
            "You can remember it as a triangle: Ao Nang and Railay as coastal points, with Koh Poda, Chicken Island and Tup as the island group in front of them. Because the distances between the islands are short, you spend little time travelling and a lot of time in the water or on the beach.",
          ],
        },
        tip: {
          de: "Fahren Sie ruhig dicht an der Sandbank vorbei, bevor Sie anlegen: Von der Seite sehen Sie am besten, wo Chicken Island seinen „Kopf“ hat und wie der Sandstreifen zwischen den Inseln verläuft.",
          en: "Cruise slowly past the sandbar before you land: from the side you see best where Chicken Island has its “head” and how the sand strip runs between the islands.",
        },
      },
      {
        id: "typical-order",
        h2: {
          de: "Typische Reihenfolge der Stopps",
          en: "Typical order of the stops",
        },
        body: {
          de: [
            "Die meisten Gruppentouren laufen nach einem festen Muster: erst Koh Poda, dann Chicken Island zum Schnorcheln, dann die Tup-Sandbank, zum Schluss Phra Nang oder Railay. Das ist auch die Reihenfolge, in der wir die Stopps in unserer Tourbeschreibung nennen: Koh Poda, Chicken Island, Tup-Sandbank, Phra Nang Cave.",
            "Die Reihenfolge ist aber nicht in Stein gemeißelt. Entscheidend ist der Wasserstand an Ihrem Tag. Liegt das Niedrigwasser früh im Zeitfenster, spricht vieles dafür, die Sandbank vorzuziehen. Liegt es später, kommt sie später. Bei einer Gruppentour mit festem Ablauf geht das kaum, bei einer privaten Charter schon.",
            "Als grobe Orientierung für die Tageszeiten, nach unseren Insel-Guides:",
          ],
          en: [
            "Most group tours follow a fixed pattern: first Koh Poda, then Chicken Island for snorkelling, then the Tup sandbar, and finally Phra Nang or Railay. This is also the order in which we list the stops in our tour description: Koh Poda, Chicken Island, Tup sandbar, Phra Nang Cave.",
            "The order is not set in stone, though. What matters is the water level on your day. If low water falls early in the window, there is a good case for taking the sandbar first. If it falls later, the sandbar comes later. With a group tour on a fixed schedule that is hardly possible; with a private charter it is.",
            "As rough orientation for the time of day, based on our island guides:",
          ],
        },
        list: {
          de: [
            "Koh Poda: früh oder am späten Nachmittag ruhig, mittags voll und mit hartem Licht",
            "Chicken Island: Schnorcheln, am ruhigsten etwas abseits der Stellen, an denen viele Boote halten",
            "Tup-Sandbank: rund um das Niedrigwasser, bei Flut nicht sichtbar",
            "Phra Nang / Railay: weiches Abendlicht vor den Kalksteinfelsen, gut als Schlussstopp",
          ],
          en: [
            "Koh Poda: calm early or in the late afternoon, busy at midday with harsh light",
            "Chicken Island: snorkelling, quietest a little away from the spots where many boats stop",
            "Tup sandbar: around low water, not visible at high tide",
            "Phra Nang / Railay: soft evening light in front of the limestone cliffs, a good final stop",
          ],
        },
      },
      {
        id: "tup-sandbar-timing-tide",
        h2: {
          de: "Tup-Sandbank: Timing und Gezeiten",
          en: "Tup sandbar: timing and tides",
        },
        body: {
          de: [
            "Die Tup-Sandbank ist der Grund, warum der Zeitpunkt bei den 4 Islands so wichtig ist. Sie taucht zwischen Koh Tup und den Nachbarinseln nur bei Ebbe auf, bei Flut ist sie überspült. In der Andamanensee gibt es in der Regel zwei Niedrigwasser pro Tag, und die Zeiten verschieben sich von Tag zu Tag um knapp eine Stunde nach hinten.",
            "Das bedeutet für Ihre Planung: Es gibt keine feste Uhrzeit für „die Sandbank“. Wann sie sichtbar ist, hängt vom Tag ab, und wie groß sie wird, auch vom Mond. Um Neumond und Vollmond (Springtiden) fällt das Niedrigwasser besonders tief aus, und die Sandbank wird breit und lang; um Halbmond (Nipptiden) kann sie nur teilweise auftauchen. Konkrete Zeiten nennen wir hier bewusst nicht, weil jede Tabelle nur für einen bestimmten Tag stimmt.",
            "Als Fenster gilt in unseren Guides etwa eine Stunde vor bis eine Stunde nach dem Niedrigwasser. Eine ausführliche Erklärung, wie Sie eine Gezeitentabelle lesen und welche Ziele Ebbe oder Flut brauchen, steht in unserem Gezeiten-Guide. Details zur Sandbank selbst, zu Schnorchelstellen und Fotos finden Sie im Guide zu Chicken Island und Tup-Sandbank.",
          ],
          en: [
            "The Tup sandbar is the reason why timing matters so much on the 4 Islands. It only appears between Koh Tup and the neighbouring islands at low tide and is submerged at high tide. The Andaman Sea usually has two low waters a day, and the times shift later by almost an hour from one day to the next.",
            "For your planning this means there is no fixed time for “the sandbar”. When it is visible depends on the day, and how big it gets also depends on the moon. Around new moon and full moon (spring tides) low water falls especially low and the sandbar becomes wide and long; around half moon (neap tides) it may only partly emerge. We deliberately give no specific times here, because any table is only valid for one particular day.",
            "In our guides the window is roughly an hour before to an hour after low water. A detailed explanation of how to read a tide table and which destinations need low or high tide is in our tides guide. Details on the sandbar itself, snorkel spots and photos are in the guide to Chicken Island and the Tup sandbar.",
          ],
        },
        tip: {
          de: "Nennen Sie uns bei der Anfrage Ihr Wunschdatum und ein Ausweichdatum. Wir sagen Ihnen ehrlich, wie sich der Wasserstand an diesen Tagen auf die Sandbank auswirkt, statt Ihnen einen Termin zu verkaufen, der nicht passt.",
          en: "Give us your preferred date and a fallback date when you enquire. We tell you honestly how the water level on those days affects the sandbar, instead of selling you a date that does not fit.",
        },
      },
      {
        id: "avoid-crowds",
        h2: {
          de: "Wann ist es voll? Andrang bei den 4 Islands vermeiden",
          en: "When is it busy? Avoiding the crowds on the 4 Islands",
        },
        body: {
          de: [
            "Die 4 Islands sind klein und nah, deshalb steuern viele Boote sie im selben Zeitfenster an. Nach unseren Insel-Guides erreichen die meisten Tagesausflüge aus Ao Nang Koh Poda zwischen dem späteren Vormittag und dem frühen Nachmittag. Fällt zusätzlich das Niedrigwasser in die späten Vormittagsstunden, drängt sich alles an der Sandbank.",
            "Zwei Zeitfenster sind in der Regel deutlich ruhiger: der frühe Morgen und der späte Nachmittag. Wenn die Gruppenboote zurück nach Ao Nang fahren, legt sich Ruhe über die Inseln, und das Licht wird weich.",
            "Genau darauf ist unsere Tour gebaut: Wir starten um 13:00 Uhr, wenn die Gruppenboote zurückfahren, und enden mit dem Sonnenuntergang vor den Kalksteinfelsen von Phra Nang. Ob die Sonne am Ende sichtbar ist, kann niemand garantieren; das Abendlicht ist aber auch bei Wolken da. Mehr zum Thema Timing steht in unserem Guide zu Orten und Zeiten ohne Menschenmassen.",
          ],
          en: [
            "The 4 Islands are small and close together, so many boats head for them in the same time window. According to our island guides, most day trips from Ao Nang reach Koh Poda between late morning and early afternoon. If low water also falls in the late morning, everything crowds onto the sandbar.",
            "Two windows are usually much calmer: early morning and late afternoon. When the group boats head back to Ao Nang, calm settles over the islands and the light turns soft.",
            "That is exactly what our tour is built around: we depart at 1 pm, as the group boats head home, and end with the sunset in front of Phra Nang’s limestone cliffs. Nobody can guarantee that the sun will be visible in the end, but the evening light is there even with clouds. More on timing is in our guide to places and times without the crowds.",
          ],
        },
        list: {
          de: [
            "Früh am Tag: ruhig, aber dann liegt Ihr Niedrigwasser nur zufällig im Fenster",
            "Später Nachmittag: Gruppenboote fahren zurück, weiches Licht, gut für Sandbank und Sunset",
            "Mittag: der Hauptandrang, auch wegen des Niedrigwassers an vielen Tagen",
          ],
          en: [
            "Early in the day: quiet, but then your low water only happens to fall in the window",
            "Late afternoon: group boats head back, soft light, good for sandbar and sunset",
            "Midday: the main rush, also because of low water on many days",
          ],
        },
      },
      {
        id: "private-4-islands-price",
        h2: {
          de: "Unsere private 4-Islands-Tour: Ablauf und Preis pro Boot",
          en: "Our private 4 Islands tour: itinerary and price per boat",
        },
        body: {
          de: [
            "Die „4-Islands VIP & Sunset Special“ ist unsere private Variante der Tour: Koh Poda, Chicken Island, Tup-Sandbank und Phra Nang Cave. Sie dauert 6 Stunden und startet um 13:00 Uhr. Sie laufen bei Ebbe über die Tup-Sandbank, schnorcheln an Chicken Island und genießen den Sonnenuntergang vor Phra Nang, mit gekühltem Prosecco an Bord.",
            "Der Preis liegt bei ab 18.500 THB pro Boot für bis zu 5 Gäste, nicht pro Person. Bei zwei Personen teilen Sie sich diesen Betrag also zu zweit, bei fünf Personen zu fünft. Im Preis sind laut Leistungsliste das private Speedboat mit Kapitän, Zeit zum Entspannen, Wasser und Softdrinks, der Sunset-Prosecco, die Schnorchelausrüstung und der Hotel-Transfer enthalten.",
            "Eine Eintrittsgebühr fällt vor Ort an und ist nicht im Tourpreis enthalten. Ob und in welcher Höhe sie an Ihrem Ziel erhoben wird, erfahren Sie bei der Buchung; den Hintergrund erklärt unser Artikel zu den Nationalpark-Gebühren in Krabi. Die Anfrage ist unverbindlich, ein Termin ist erst nach unserer Bestätigung reserviert.",
          ],
          en: [
            "The “4-Islands VIP & Sunset Special” is our private version of the tour: Koh Poda, Chicken Island, Tup sandbar and Phra Nang Cave. It lasts 6 hours and starts at 1 pm. You walk the Tup sandbar at low tide, snorkel at Chicken Island and enjoy the sunset in front of Phra Nang, with chilled prosecco on board.",
            "The price is from 18,500 THB per boat for up to 5 guests, not per person. With two people you split that amount between two, with five between five. According to the inclusion list the price covers the private speedboat with captain, time to relax, water and soft drinks, the sunset prosecco, snorkel gear and the hotel transfer.",
            "An entrance fee is charged on site and is not included in the tour price. Whether and how much applies at your destination, you will learn when booking; our article on national park fees in Krabi explains the background. The enquiry is non-binding, and a date is only reserved once we confirm it.",
          ],
        },
        tip: {
          de: "Auf der Tourseite /touren/4-islands-sunset finden Sie Ablauf, Leistungen und das Anfrageformular. Wer lieber morgens startet, spricht uns auf eine andere Zeitplanung an.",
          en: "On the tour page /touren/4-islands-sunset you will find the itinerary, inclusions and the enquiry form. If you would rather start in the morning, ask us about a different schedule.",
        },
      },
      {
        id: "what-to-bring",
        h2: {
          de: "Was Sie für die 4 Islands mitbringen sollten",
          en: "What to bring on the 4 Islands",
        },
        body: {
          de: [
            "Die Inseln sind klein und es gibt wenig Infrastruktur, deshalb lohnt eine kurze Packliste. Das meiste davon gilt für jede Bootstour, die wichtigsten Punkte für diese Route:",
          ],
          en: [
            "The islands are small and there is little infrastructure, so a short packing list is worthwhile. Most of it applies to any boat tour; the key points for this route:",
          ],
        },
        list: {
          de: [
            "Wasserschuhe für die Sandbank: im Wasser liegen scharfe Steine, Muscheln und gelegentlich Seeigel",
            "Hut und riffschonende Sonnencreme, denn auf der Sandbank gibt es keinen Schatten",
            "Wasserdichte Tasche und Handy-Schutz für das Ein- und Aussteigen im flachen Wasser",
            "Auf die steigende Flut achten: Das Wasser kommt schneller zurück, als man denkt",
            "Nichts mitnehmen, nichts hinterlassen: Muscheln und Korallen bleiben im Park",
          ],
          en: [
            "Water shoes for the sandbar: there are sharp stones, shells and occasionally sea urchins in the water",
            "A hat and reef-safe sunscreen, because there is no shade on the sandbar",
            "A waterproof bag and phone protection for getting in and out in shallow water",
            "Watch the rising tide: the water comes back faster than you think",
            "Take nothing, leave nothing: shells and coral stay in the park",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Welche Inseln gehören zur 4-Islands-Tour in Krabi?",
          en: "Which islands are part of the 4 Islands tour in Krabi?",
        },
        a: {
          de: "Klassisch sind es Koh Poda, Chicken Island (Koh Kai), Tup Island mit der Sandbank und Phra Nang/Railay. Weil „4 Islands“ ein Tourname und keine amtliche Einteilung ist, kann die Auswahl je nach Anbieter leicht abweichen.",
          en: "The classic set is Koh Poda, Chicken Island (Koh Kai), Tup Island with its sandbar and Phra Nang/Railay. Because “4 Islands” is a tour name and not an official classification, the selection can differ slightly between operators.",
        },
      },
      {
        q: {
          de: "Wann ist die Tup-Sandbank sichtbar?",
          en: "When is the Tup sandbar visible?",
        },
        a: {
          de: "Rund um das Niedrigwasser, das sich jeden Tag um knapp eine Stunde verschiebt. Bei Flut ist sie überspült. Am deutlichsten zeigt sie sich bei Springtiden um Neumond und Vollmond. Welche Zeit an Ihrem Tag gilt, sagt die Gezeitentabelle für Krabi oder Ao Nang; in unserem Gezeiten-Guide erklären wir, wie man sie liest.",
          en: "Around low water, which shifts by almost an hour every day. At high tide it is submerged. It shows most clearly during spring tides around new moon and full moon. Which time applies on your day is shown by the tide table for Krabi or Ao Nang; our tides guide explains how to read it.",
        },
      },
      {
        q: {
          de: "Wie lange dauert die Fahrt von Ao Nang zu den 4 Islands?",
          en: "How long does it take to get from Ao Nang to the 4 Islands?",
        },
        a: {
          de: "Nach unseren Tourdaten liegt die Poda-Gruppe mit Koh Poda, Chicken Island, Tup-Sandbank und Phra Nang Cave Beach 15 bis 30 Minuten von Ao Nang entfernt. Zwischen den Inseln sind es nur wenige Bootsminuten.",
          en: "According to our tour data the Poda group with Koh Poda, Chicken Island, Tup sandbar and Phra Nang Cave Beach is 15 to 30 minutes from Ao Nang. Between the islands it is only a few boat minutes.",
        },
      },
      {
        q: {
          de: "Was kostet eine private 4-Islands-Tour in Krabi?",
          en: "What does a private 4 Islands tour in Krabi cost?",
        },
        a: {
          de: "Unsere „4-Islands VIP & Sunset Special“ kostet ab 18.500 THB pro Boot für bis zu 5 Gäste, nicht pro Person. Eine Eintrittsgebühr fällt vor Ort an und ist nicht im Tourpreis enthalten.",
          en: "Our “4-Islands VIP & Sunset Special” costs from 18,500 THB per boat for up to 5 guests, not per person. An entrance fee is charged on site and is not included in the tour price.",
        },
      },
      {
        q: {
          de: "Was ist die beste Zeit für die 4 Islands, um Menschenmassen zu vermeiden?",
          en: "What is the best time for the 4 Islands to avoid crowds?",
        },
        a: {
          de: "In der Regel der frühe Morgen und der späte Nachmittag. Die meisten Tagesausflüge erreichen die Inseln zwischen dem späteren Vormittag und dem frühen Nachmittag. Unsere Tour startet um 13:00 Uhr, wenn die Gruppenboote zurückfahren, und endet mit dem Sonnenuntergang bei Phra Nang.",
          en: "Usually early morning and late afternoon. Most day trips reach the islands between late morning and early afternoon. Our tour starts at 1 pm, as the group boats head back, and ends with the sunset at Phra Nang.",
        },
      },
    ],
    related: ["krabi-tides-guide", "chicken-island-tup-sandbar", "koh-poda-guide", "railay-phra-nang-cave"],
    tourIds: ["4islands-sunset"],
    image: IMG.tup,
  },

  /* ───────────── 2. Hong vs 4 Islands vs Phi Phi ───────────── */
  {
    slug: "hong-island-vs-4-islands-vs-phi-phi",
    category: "insider",
    short: { de: "Hong, 4 Islands oder Phi Phi?", en: "Hong vs 4 Islands vs Phi Phi" },
    primaryKeyword: "Hong Island vs 4 Islands vs Phi Phi",
    keywords: [
      "Hong Island oder 4 Islands oder Phi Phi",
      "Hong Island vs 4 Islands",
      "welche Inseltour Krabi ist die beste",
      "Phi Phi oder 4 Islands",
      "Hong Island oder Phi Phi",
      "beste Inseltour Krabi",
      "Hong Island vs 4 Islands vs Phi Phi",
      "which Krabi island tour is best",
      "Phi Phi or 4 Islands from Krabi",
      "Hong Island or Phi Phi",
      "best island tour from Ao Nang",
    ],
    title: {
      de: "Hong Island, 4 Islands oder Phi Phi? Der Vergleich",
      en: "Hong Island vs 4 Islands vs Phi Phi: Which Is Best?",
    },
    metaDescription: {
      de: "Hong Island, 4 Islands oder Phi Phi ab Krabi? Fahrzeit, Highlights, Schnorcheln, Saison und Preis pro Boot im Vergleich, plus Empfehlung nach Reisetyp.",
      en: "Hong Island vs 4 Islands vs Phi Phi from Krabi: travel time, highlights, snorkelling, season and price per boat compared, with picks by traveller type.",
    },
    h1: {
      de: "Hong Island, 4 Islands oder Phi Phi: Welche Inseltour ab Krabi passt zu Ihnen?",
      en: "Hong Island vs 4 Islands vs Phi Phi: which Krabi island tour is best for you?",
    },
    intro: {
      de: "Wer drei Tage in Ao Nang hat, aber nur einen für das Meer, steht vor einer klassischen Frage: Hong Island, 4 Islands oder Phi Phi? Alle drei sind berühmt, alle drei lassen sich ab Ao Nang als Tagestour fahren, und trotzdem sind sie sehr unterschiedlich. Dieser Guide beantwortet die Frage „welche Inseltour ab Krabi ist die beste“ nicht mit einer Rangliste, sondern mit einem Vergleich: Fahrzeit, Highlights, Schnorcheln, Saison und Preis pro Boot in einer Tabelle, danach eine Empfehlung nach Reisetyp. Die Angaben zu Fahrzeiten und Saison stammen aus unseren eigenen Tourdaten und Insel-Guides und sind Orientierungswerte; je nach Seegang und Wetter weichen sie ab.",
      en: "If you have three days in Ao Nang but only one for the sea, you face a classic question: Hong Island, 4 Islands or Phi Phi? All three are famous, all three can be done as a day trip from Ao Nang, and yet they are very different. This guide does not answer “which Krabi island tour is best” with a ranking but with a comparison: travel time, highlights, snorkelling, season and price per boat in one table, followed by a recommendation by traveller type. The details on travel times and season come from our own tour data and island guides and are orientation values; they vary with sea state and weather.",
    },
    sections: [
      {
        id: "short-answer",
        h2: {
          de: "Kurzantwort: Welche Inseltour ist die beste?",
          en: "Short answer: which island tour is best?",
        },
        body: {
          de: [
            "Die ehrliche Antwort ist: Es hängt davon ab, was Sie vom Tag wollen. Die 4 Islands sind der kürzeste Weg zu den bekanntesten Bildern (Sandbank, Chicken Island, Phra Nang) und eignen sich gut für Einsteiger und Familien. Hong Island ist die ruhigere, landschaftliche Variante mit Lagunen und Buchten. Phi Phi ist der große Name mit Maya Bay und der Pileh-Lagune, dafür mit längerer Fahrt und einem langen Tag.",
            "Wenn Sie nur eine Entscheidungsregel mitnehmen: kurze Wege und Sandbank gleich 4 Islands, Lagunen und Schwimmpicknick gleich Hong, großer Name und Abenteuer gleich Phi Phi. Die Details dazu stehen unten.",
          ],
          en: [
            "The honest answer is: it depends on what you want from the day. The 4 Islands are the shortest route to the best-known pictures (sandbar, Chicken Island, Phra Nang) and suit beginners and families well. Hong Island is the calmer, scenic option with lagoons and bays. Phi Phi is the big name with Maya Bay and Pileh Lagoon, but with a longer ride and a long day.",
            "If you take away only one rule: short distances and sandbar means 4 Islands, lagoons and a swim picnic means Hong, big name and adventure means Phi Phi. The details follow below.",
          ],
        },
      },
      {
        id: "comparison-table",
        h2: {
          de: "Der Vergleich: Fahrzeit, Highlights, Schnorcheln, Saison",
          en: "The comparison: travel time, highlights, snorkelling, season",
        },
        body: {
          de: [
            "Die Tabelle fasst die drei Touren zusammen. Fahrzeiten gelten für das Speedboot ab Ao Nang bei ruhiger See. Der Preis ist in jedem Fall pro Boot für bis zu 5 Gäste, nicht pro Person.",
          ],
          en: [
            "The table summarises the three tours. Travel times apply to a speedboat from Ao Nang in calm seas. In each case the price is per boat for up to 5 guests, not per person.",
          ],
        },
        table: {
          caption: {
            de: "Hong Island, 4 Islands und Phi Phi ab Ao Nang im Vergleich",
            en: "Hong Island, 4 Islands and Phi Phi from Ao Nang compared",
          },
          head: [
            { de: "Tour / Gebiet", en: "Tour / area" },
            { de: "Fahrzeit ab Ao Nang (Speedboot)", en: "Travel time from Ao Nang (speedboat)" },
            { de: "Highlights", en: "Highlights" },
            { de: "Schnorcheln", en: "Snorkelling" },
            { de: "Ideal für", en: "Best for" },
            { de: "Saison", en: "Season" },
          ],
          rows: [
            [
              { de: "Hong Island (Tour „Hong Island Secret Lagoons“): ab 21.500 THB pro Boot, 7 Std.", en: "Hong Island (tour “Hong Island Secret Lagoons”): from 21,500 THB per boat, 7 hrs" },
              { de: "ca. 30 bis 45 Minuten, je nach Seegang", en: "approx. 30 to 45 minutes, depending on the sea" },
              { de: "Smaragdgrüne Hong-Lagune, Koh Lao Lading, Doppelstrände von Koh Pakbia", en: "Emerald Hong lagoon, Koh Lao Lading, the twin beaches of Koh Pakbia" },
              { de: "Langes Schwimm- und Schnorchelpicknick; Ausrüstung inklusive", en: "Long swim and snorkel picnic; gear included" },
              { de: "Paare, Fotografen, alle, die Landschaft und Ruhe wollen", en: "Couples, photographers, anyone who wants scenery and calm" },
              { de: "Lagune am besten bei höherem Wasserstand, bei Ebbe teils zu flach; Trockenzeit meist ruhiger", en: "Lagoon best at higher water, partly too shallow at low tide; dry season usually calmer" },
            ],
            [
              { de: "4 Islands (Tour „4-Islands VIP & Sunset Special“): ab 18.500 THB pro Boot, 6 Std.", en: "4 Islands (tour “4-Islands VIP & Sunset Special”): from 18,500 THB per boat, 6 hrs" },
              { de: "Poda-Gruppe 15 bis 30 Minuten; zwischen den Inseln wenige Bootsminuten", en: "Poda group 15 to 30 minutes; a few boat minutes between the islands" },
              { de: "Koh Poda, Chicken Island, Tup-Sandbank, Phra Nang Cave, Sunset", en: "Koh Poda, Chicken Island, Tup sandbar, Phra Nang Cave, sunset" },
              { de: "Riffe an Chicken Island, Korallen an Koh Poda (für Einsteiger); Ausrüstung inklusive", en: "Reefs at Chicken Island, coral at Koh Poda (for beginners); gear included" },
              { de: "Familien, Erstbesucher, Sandbank-Fans, Sunset", en: "Families, first-timers, sandbar fans, sunset" },
              { de: "Sandbank hängt vom Niedrigwasser des Tages ab, nicht von der Saison; Trockenzeit meist ruhiger", en: "Sandbar depends on the day’s low water, not on the season; dry season usually calmer" },
            ],
            [
              { de: "Phi Phi (Tour „Phi Phi Early Bird“): ab 28.500 THB pro Boot, 8 Std.", en: "Phi Phi (tour “Phi Phi Early Bird”): from 28,500 THB per boat, 8 hrs" },
              { de: "ca. 45 bis 60 Minuten bei ruhiger See", en: "approx. 45 to 60 minutes in calm seas" },
              { de: "Maya Bay, Pileh Lagoon, Viking Cave, Bamboo Island", en: "Maya Bay, Pileh Lagoon, Viking Cave, Bamboo Island" },
              { de: "Baden in der Pileh Lagoon und an Bamboo Island; in Maya Bay nicht erlaubt; Ausrüstung inklusive", en: "Swimming in Pileh Lagoon and at Bamboo Island; not allowed in Maya Bay; gear included" },
              { de: "Wer „den großen Namen“ will und einen langen Tag nicht scheut", en: "Anyone who wants “the big name” and does not mind a long day" },
              { de: "Maya Bay zuletzt angekündigt 1. Aug. bis 30. Sep. geschlossen, Wiedereröffnung 1. Okt.; Trockenzeit meist ruhiger", en: "Maya Bay most recently announced closed 1 Aug to 30 Sep, reopening 1 Oct; dry season usually calmer" },
            ],
          ],
        },
        tip: {
          de: "Die Saison- und Schließzeiten setzt die Nationalparkbehörde fest. Prüfen Sie vor der Buchung den aktuellen Stand, besonders für Maya Bay (Details im Guide „Ist Maya Bay offen?“).",
          en: "The seasonal and closure dates are set by the national park authority. Check the current status before booking, especially for Maya Bay (details in the guide “Is Maya Bay open?”).",
        },
      },
      {
        id: "hong-island",
        h2: {
          de: "Hong Island: Lagunen, Ruhe und Landschaft",
          en: "Hong Island: lagoons, calm and scenery",
        },
        body: {
          de: [
            "Koh Hong liegt nordwestlich von Ao Nang und gehört zum Than Bok Khorani Nationalpark. Das Herzstück ist die Lagune: Boote fahren durch einen engen Eingang hinein, und Sie sind von bewachsenen Felswänden umgeben, das Wasser smaragdgrün. Der Zugang hängt stark von den Gezeiten ab, bei Flut ist die Lagune gut befahrbar, bei Niedrigwasser wird sie flach.",
            "Unsere Tour startet früh um 08:00 Uhr, damit die Lagune möglichst ruhig ist. Danach geht es zur winzigen Bucht von Koh Lao Lading und zu den Doppelstränden von Koh Pakbia, ideal für ein langes Schwimm- und Schnorchelpicknick. Mehr dazu im Guide zu Hong Island.",
            "Hong ist die Wahl, wenn Sie Landschaft und Zeit im Wasser über „Sehenswürdigkeiten abhaken“ stellen. Es ist ein Tag mit wenig Programm und viel Atmosphäre.",
          ],
          en: [
            "Koh Hong lies northwest of Ao Nang and is part of Than Bok Khorani National Park. The heart of it is the lagoon: boats glide through a narrow entrance and you are surrounded by overgrown cliffs, the water emerald green. Access depends heavily on the tides: at high tide the lagoon is easily navigable, at low water it becomes shallow.",
            "Our tour starts early at 8 am so that the lagoon is as calm as possible. Then it goes on to the tiny cove of Koh Lao Lading and the twin beaches of Koh Pakbia, perfect for a long swim and snorkel picnic. More in our Hong Island guide.",
            "Hong is the choice if you value scenery and time in the water over “ticking off sights”. It is a day with little programme and a lot of atmosphere.",
          ],
        },
      },
      {
        id: "four-islands",
        h2: {
          de: "4 Islands: kurze Wege, Sandbank und Sunset",
          en: "4 Islands: short hops, sandbar and sunset",
        },
        body: {
          de: [
            "Die 4 Islands sind die kompakteste der drei Touren. Die Poda-Gruppe liegt nach unseren Tourdaten nur 15 bis 30 Minuten von Ao Nang entfernt, zwischen den Inseln sind es wenige Bootsminuten. Das heißt: viel Zeit im Wasser, wenig Zeit auf dem Boot. Die Stationen sind Koh Poda, Chicken Island, die Tup-Sandbank und Phra Nang.",
            "Der Haken ist der Andrang: Die Inseln sind klein und werden von vielen Gruppentouren in demselben Zeitfenster angefahren. Unsere private Variante startet deshalb um 13:00 Uhr, wenn die Gruppenboote zurückfahren, und endet mit dem Sonnenuntergang vor Phra Nang. Wie Sandbank und Gezeiten zusammenhängen, erklärt unser Guide zu den 4 Islands mit Namen, Lage und Timing.",
            "Für Erstbesucher ist das oft die beste Wahl: Sie sehen die bekanntesten Motive, die Fahrt ist kurz, und der Tag lässt sich leicht an Kinder oder Einsteiger anpassen.",
          ],
          en: [
            "The 4 Islands are the most compact of the three tours. According to our tour data the Poda group is only 15 to 30 minutes from Ao Nang, with a few boat minutes between the islands. That means a lot of time in the water and little time on the boat. The stops are Koh Poda, Chicken Island, the Tup sandbar and Phra Nang.",
            "The catch is the crowds: the islands are small and are visited by many group tours in the same time window. Our private version therefore starts at 1 pm, as the group boats head back, and ends with the sunset in front of Phra Nang. How sandbar and tides relate is explained in our guide to the 4 Islands with names, layout and timing.",
            "For first-timers this is often the best choice: you see the best-known motifs, the ride is short, and the day is easy to adapt to children or beginners.",
          ],
        },
      },
      {
        id: "phi-phi",
        h2: {
          de: "Phi Phi: der große Name mit langem Tag",
          en: "Phi Phi: the big name with a long day",
        },
        body: {
          de: [
            "Phi Phi besteht aus der bewohnten Hauptinsel Phi Phi Don und der unbewohnten, felsigen Phi Phi Leh mit Maya Bay, Pileh Lagoon und Viking Cave. Mit dem Speedboat dauert die Überfahrt ab Ao Nang bei ruhiger See etwa 45 bis 60 Minuten, deshalb ist es der längste der drei Tage: Unsere Early-Bird-Tour dauert 8 Stunden und startet um 07:00 Uhr.",
            "Der frühe Start ist der Kern des Konzepts: Wir erreichen Maya Bay, bevor die großen Ausflugsboote und Fähren ankommen. Danach folgen die türkise Pileh Lagoon, die Viking Cave und eine Mittagspause am weißen Strand von Bamboo Island.",
            "Wichtig sind zwei Hinweise. Erstens ist das Schwimmen in Maya Bay seit der Wiedereröffnung nicht erlaubt, gebadet wird zum Beispiel in der Pileh Lagoon. Zweitens ist die Bucht nach den zuletzt veröffentlichten Terminen vom 1. August bis 30. September geschlossen; auch kurzfristige Änderungen sind möglich. Beides erklären wir in unseren Guides zu Maya Bay und zu Phi Phi früh morgens.",
          ],
          en: [
            "Phi Phi consists of the inhabited main island of Phi Phi Don and the uninhabited, rocky Phi Phi Leh with Maya Bay, Pileh Lagoon and Viking Cave. By speedboat the crossing from Ao Nang takes about 45 to 60 minutes in calm seas, which is why it is the longest of the three days: our Early Bird tour lasts 8 hours and starts at 7 am.",
            "The early start is the core of the concept: we reach Maya Bay before the big excursion boats and ferries arrive. Then come the turquoise Pileh Lagoon, Viking Cave and a lunch break on Bamboo Island’s white beach.",
            "Two notes matter. First, swimming in Maya Bay has not been allowed since the reopening; you swim in Pileh Lagoon, for example. Second, according to the most recently published dates the bay is closed from 1 August to 30 September; short-notice changes are possible too. We explain both in our guides to Maya Bay and to Phi Phi early in the morning.",
          ],
        },
      },
      {
        id: "by-traveller-type",
        h2: {
          de: "Empfehlung nach Reisetyp",
          en: "Recommendation by traveller type",
        },
        body: {
          de: [
            "Aus den Eigenschaften der drei Touren ergibt sich eine einfache Zuordnung. Sie ist eine Orientierung, kein Gesetz, und lässt sich bei einer privaten Charter oft individuell anpassen:",
          ],
          en: [
            "The characteristics of the three tours give a simple mapping. It is guidance, not a law, and with a private charter it can often be adapted individually:",
          ],
        },
        list: {
          de: [
            "Familien mit Kindern: 4 Islands. Kurze Fahrt, flaches Wasser an der Sandbank und kinderfreundliche Strände (Details im Guide Krabi mit Kindern)",
            "Paare: Hong Island für Ruhe und Lagunen, oder die 4 Islands mit Sonnenuntergang und Prosecco an Bord",
            "Schnorchler: Hong (langes Schwimm- und Schnorchelpicknick) oder 4 Islands (Chicken Island). Für die klarsten Riffe der Andamanensee bietet unsere Koh-Rok-Tour mit rund 9 Stunden einen eigenen Tag",
            "Fotografen: Hong früh am Morgen für die Lagune, die 4 Islands am späten Nachmittag für Sandbank und Abendlicht, Phi Phi für Maya Bay im ersten Licht. Unser Drohnen-Paket passt zu allen dreien",
            "Erstbesucher: 4 Islands als kompakter Einstieg, Phi Phi, wenn Sie sich den langen Tag zutrauen",
            "Wenig Zeit: 4 Islands mit nur 6 Stunden inklusive Sunset",
          ],
          en: [
            "Families with children: 4 Islands. Short ride, shallow water at the sandbar and child-friendly beaches (details in the Krabi with kids guide)",
            "Couples: Hong Island for calm and lagoons, or the 4 Islands with sunset and prosecco on board",
            "Snorkellers: Hong (long swim and snorkel picnic) or 4 Islands (Chicken Island). For the clearest reefs of the Andaman Sea, our Koh Rok tour of about 9 hours is a day of its own",
            "Photographers: Hong early in the morning for the lagoon, the 4 Islands in the late afternoon for sandbar and evening light, Phi Phi for Maya Bay in the first light. Our drone package suits all three",
            "First-timers: 4 Islands as a compact introduction, Phi Phi if you are up for the long day",
            "Short on time: 4 Islands with only 6 hours including sunset",
          ],
        },
      },
      {
        id: "park-fee-booking",
        h2: {
          de: "Kosten, Nationalpark und Buchung",
          en: "Costs, national park and booking",
        },
        body: {
          de: [
            "Alle drei Touren sind private Charter, der Preis gilt also pro Boot für bis zu 5 Gäste: ab 18.500 THB für die 4 Islands, ab 21.500 THB für Hong Island und ab 28.500 THB für Phi Phi. Die Preisunterschiede spiegeln vor allem Dauer und Entfernung. Eine Einordnung der Kosten pro Person und der Posten, die bei Angeboten oft fehlen, steht in unserem Kostenguide.",
            "Eine Eintrittsgebühr fällt vor Ort an und ist nicht im Tourpreis enthalten. Ob und in welcher Höhe sie an Ihrem Ziel erhoben wird, erfahren Sie bei der Buchung.",
            "Unsicher, welche Tour zu Ihrem Datum passt? Schreiben Sie uns Wunschdatum, Gruppengröße und Interessen. Wir sagen Ihnen ehrlich, welche Tour an diesem Tag wegen Wasserstand, Wetter und Saison am sinnvollsten ist. Die Anfrage ist unverbindlich, ein Termin ist erst nach unserer Bestätigung reserviert.",
          ],
          en: [
            "All three tours are private charters, so the price applies per boat for up to 5 guests: from 18,500 THB for the 4 Islands, from 21,500 THB for Hong Island and from 28,500 THB for Phi Phi. The price differences mainly reflect duration and distance. A breakdown of the cost per person and of the items often missing from offers is in our cost guide.",
            "An entrance fee is charged on site and is not included in the tour price. Whether and how much applies at your destination, you will learn when booking.",
            "Not sure which tour fits your date? Send us your preferred date, group size and interests. We will tell you honestly which tour makes the most sense on that day given water level, weather and season. The enquiry is non-binding, and a date is only reserved once we confirm it.",
          ],
        },
        tip: {
          de: "Wenn Sie mehrere Tage haben, legen Sie die wetterabhängigste Tour (meist Phi Phi) früh in Ihren Aufenthalt. Fällt sie aus, bleibt Zeit für einen Ersatztermin.",
          en: "If you have several days, put the most weather-dependent tour (usually Phi Phi) early in your stay. If it falls through, there is time for a replacement date.",
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Welche Inseltour ab Krabi ist die beste?",
          en: "Which island tour from Krabi is the best?",
        },
        a: {
          de: "Das hängt von Ihren Prioritäten ab: Die 4 Islands sind kompakt und familienfreundlich, Hong Island ist ruhig und landschaftlich, Phi Phi ist der große Name mit dem längsten Tag. Eine feste „beste“ Tour gibt es nicht, nur die passende zu Ihrem Datum und Ihrer Gruppe.",
          en: "It depends on your priorities: the 4 Islands are compact and family-friendly, Hong Island is calm and scenic, Phi Phi is the big name with the longest day. There is no single “best” tour, only the one that fits your date and your group.",
        },
      },
      {
        q: {
          de: "Ist Hong Island oder Phi Phi besser?",
          en: "Is Hong Island or Phi Phi better?",
        },
        a: {
          de: "Hong Island liegt nach unseren Tourdaten etwa 30 bis 45 Minuten von Ao Nang entfernt und punktet mit Lagunen und Ruhe. Phi Phi braucht etwa 45 bis 60 Minuten und bietet Maya Bay und die Pileh Lagoon. Wer Landschaft und Schwimmpicknick will, ist bei Hong gut aufgehoben; wer den großen Namen will, bei Phi Phi.",
          en: "According to our tour data Hong Island is about 30 to 45 minutes from Ao Nang and scores with lagoons and calm. Phi Phi takes about 45 to 60 minutes and offers Maya Bay and Pileh Lagoon. If you want scenery and a swim picnic, Hong is a good fit; if you want the big name, Phi Phi.",
        },
      },
      {
        q: {
          de: "Kann ich Hong Island, 4 Islands und Phi Phi an einem Tag kombinieren?",
          en: "Can I combine Hong Island, 4 Islands and Phi Phi in one day?",
        },
        a: {
          de: "Wir raten davon ab. Die Gebiete liegen in verschiedenen Richtungen, und jede Tour braucht Zeit an den Stopps. Besser sind zwei getrennte Tage, oder Sie lassen sich bei einer privaten Charter eine individuelle Route zusammenstellen und sprechen offen über das, was in der Zeit realistisch ist.",
          en: "We advise against it. The areas lie in different directions, and each tour needs time at the stops. Two separate days are better, or you can have an individual route put together on a private charter and talk openly about what is realistic in the time.",
        },
      },
      {
        q: {
          de: "Ist Maya Bay immer geöffnet?",
          en: "Is Maya Bay always open?",
        },
        a: {
          de: "Nein. Nach den zuletzt veröffentlichten Terminen ist die Bucht vom 1. August bis 30. September geschlossen und öffnet am 1. Oktober wieder. Die Nationalparkbehörde legt die Termine fest und kann sie ändern, prüfen Sie den Stand also vor der Buchung. Schwimmen in der Bucht ist ohnehin nicht erlaubt.",
          en: "No. According to the most recently published dates the bay is closed from 1 August to 30 September and reopens on 1 October. The national park authority sets the dates and can change them, so check the status before you book. Swimming in the bay is not allowed anyway.",
        },
      },
      {
        q: {
          de: "Was kosten die Touren, und ist die Nationalpark-Gebühr enthalten?",
          en: "What do the tours cost, and is the national park fee included?",
        },
        a: {
          de: "Unsere Preise gelten pro Boot für bis zu 5 Gäste: ab 18.500 THB (4 Islands), ab 21.500 THB (Hong Island), ab 28.500 THB (Phi Phi). Eine Eintrittsgebühr fällt vor Ort an und ist nicht im Tourpreis enthalten.",
          en: "Our prices apply per boat for up to 5 guests: from 18,500 THB (4 Islands), from 21,500 THB (Hong Island), from 28,500 THB (Phi Phi). An entrance fee is charged on site and is not included in the tour price.",
        },
      },
    ],
    related: ["hong-island-krabi", "phi-phi-maya-bay-early-morning", "chicken-island-tup-sandbar", "maya-bay-open-closed-dates"],
    tourIds: ["hong-lagoons", "4islands-sunset", "phi-phi-early-bird"],
    image: IMG.hong,
  },
];
