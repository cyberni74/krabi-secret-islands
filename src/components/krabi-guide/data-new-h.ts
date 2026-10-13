import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch H: inspirational overview pillar "Inselhopping Krabi" (island groups, season,
 * boat choice, tips). Complements the practical planner (krabi-island-hopping-planner).
 * Fact policy:
 *  - Our own prices come only from TOURS (content.ts), always "ab" / per boat for up to 5 guests.
 *  - Travel times come only from existing site content (booking-data.ts ISLANDS, tour pages), always "about / ca.".
 *  - National park: only the general sentence that an entrance fee may be charged on site and is not included. No amounts.
 *  - Closures: Maya Bay as stated in the maya-bay-open-closed-dates article; Koh Rok / Koh Haa per park authority.
 *  - No ratings, review claims, third-party prices or tide tables.
 */
export const NEW_ARTICLES_H: GuideArticleInput[] = [
  {
    slug: "inselhopping-krabi-guide-andamanensee",
    category: "pillar",
    short: { de: "Inselhopping-Guide", en: "Island hopping guide" },
    primaryKeyword: "Inselhopping Krabi",
    keywords: [
      "Inselhopping Krabi",
      "Bootstour Krabi",
      "Andamanensee Boot",
      "Krabi Inseln Bootstour privat",
      "Krabi Inselhopping beste Reisezeit",
      "Krabi island hopping guide",
      "Krabi island tours",
      "Andaman Sea boat tour",
      "Krabi private speedboat island hopping",
      "best time island hopping Krabi",
    ],
    title: {
      de: "Inselhopping Krabi: Der große Guide für Ihre Bootstour",
      en: "Krabi Island Hopping Guide: Andaman Sea Boat Tour",
    },
    metaDescription: {
      de: "Inselhopping Krabi im Überblick: warum die Inseln so aussehen, beste Reisezeit, die Inselgruppen, Bootswahl und Insider-Tipps für Ihre private Bootstour.",
      en: "Krabi island hopping guide: why the islands look like this, best season, the island groups, how to choose your boat and insider tips for a private boat tour.",
    },
    h1: {
      de: "Inselhopping Krabi: Inselgruppen, Reisezeit und das richtige Boot",
      en: "Krabi island hopping guide: island groups, season and the right boat",
    },
    intro: {
      de: "Inselhopping Krabi bedeutet, von der Küste aus in eine Landschaft aus senkrechten Kalksteinfelsen, kleinen Stränden und flachen Lagunen zu fahren – und jeden Tag ein anderes Stück davon zu entdecken. Dieser Guide ist der Überblick: Warum die Inseln der Andamanensee so aussehen, wann die Bootstour Krabi am angenehmsten ist, welche Inselgruppen es gibt und wie sie sich unterscheiden, welches Boot zu welchem Tag passt und mit welchen Tipps der Tag gelingt. Wenn Sie danach konkret planen möchten, führt Sie unser Inselhopping-Planer durch Routen, Zeiten und Reihenfolge der Stopps. Alle Zeiten sind Orientierungswerte, denn Wetter, Wellengang und Gezeiten bestimmen den Ablauf jedes einzelnen Tages.",
      en: "Krabi island hopping means leaving the coast for a landscape of sheer limestone cliffs, small beaches and shallow lagoons – and discovering a different piece of it every day. This guide is the overview: why the islands of the Andaman Sea look the way they do, when a boat tour in Krabi is most pleasant, which island groups there are and how they differ, which boat suits which day and which tips make the day work. If you then want to plan in detail, our island hopping planner walks you through routes, timing and the order of stops. All times are rough guides, because weather, swell and tides shape every single day.",
    },
    sections: [
      {
        id: "why-islands-look-like-this",
        h2: {
          de: "Warum die Inseln vor Krabi so aussehen",
          en: "Why the islands off Krabi look like this",
        },
        body: {
          de: [
            "Die Küste um Krabi und die Bucht von Phang Nga ist von Kalkstein geprägt. Die steilen Felstürme, die direkt aus dem Wasser ragen, nennt man Karst. Kalkstein löst sich über sehr lange Zeiträume in Regenwasser und Meerwasser auf, und genau dadurch entstehen Überhänge, Höhlen, ausgewaschene Felsfüße und Nischen, in denen kleine Strände liegen.",
            "Der Kalkstein selbst geht nach allgemeinem geologischem Wissen auf alte Meeresablagerungen zurück, unter anderem auf Riffe, die vor sehr langer Zeit im flachen Meer wuchsen. Später hob sich das Land, der Meeresspiegel stieg wieder, und aus den Höhenzügen wurden Inseln. Was Sie heute vom Boot aus sehen, ist also im Kern ein altes Riff, das Wind, Regen und Wellen über lange Zeit zu Türmen, Buchten und Lagunen geformt haben.",
            "Für Ihre Bootstour hat das praktische Folgen. Viele Inseln haben kaum Strand, dafür steile Felswände, an denen sich schnorcheln lässt. Manche Buchten liegen hinter engen Durchfahrten und sind nur bei passendem Wasserstand gut erreichbar. Und weil die Felsen Schatten werfen, verändert sich das Licht im Tagesverlauf stark. Deshalb lohnt es sich, nicht nur das Ziel, sondern auch die Uhrzeit bewusst zu wählen.",
          ],
          en: [
            "The coast around Krabi and Phang Nga Bay is shaped by limestone. The steep rock towers that rise straight out of the water are called karst. Over very long periods limestone dissolves in rainwater and seawater, and that is exactly what creates overhangs, caves, undercut rock bases and the niches where small beaches sit.",
            "According to general geological knowledge, the limestone itself goes back to ancient marine deposits, among them reefs that grew in shallow seas a very long time ago. Later the land rose, sea levels climbed again and the ridges turned into islands. What you see from the boat today is, at its core, an old reef that wind, rain and waves have carved into towers, bays and lagoons over a long time.",
            "This has practical consequences for your boat tour. Many islands have hardly any beach but steep rock walls where you can snorkel. Some bays lie behind narrow passages and are only easy to reach at the right water level. And because the cliffs cast shade, the light changes strongly through the day. That is why it pays to choose not just the destination but also the time of day on purpose.",
          ],
        },
      },
      {
        id: "best-time-island-hopping",
        h2: {
          de: "Beste Reisezeit für Inselhopping in Krabi",
          en: "Best time for island hopping in Krabi",
        },
        body: {
          de: [
            "Grob gesagt gibt es zwei Jahreszeiten. In der Trockenzeit von etwa November bis April ist das Meer in der Regel ruhiger und das Wetter stabiler, die Sicht unter Wasser ist häufig besser. Das ist auch die Zeit, in der die meisten Gäste kommen. Von Mai bis Oktober herrscht der Monsun: Es regnet öfter, die See ist je nach Tag rauer, dafür sind viele Orte deutlich leerer. Bootstouren sind in dieser Zeit möglich, hängen aber stärker von Wind und Wellen ab und können kurzfristig verschoben werden.",
            "Dazu kommen Schließzeiten der Nationalparks, die Sie bei der Planung kennen sollten. Die Maya Bay ist nach den zuletzt veröffentlichten Terminen jährlich etwa vom 1. August bis 30. September geschlossen und öffnet danach wieder; prüfen Sie vor der Buchung, ob für Ihr Datum eine neue Mitteilung vorliegt. Die Inselgruppe Koh Rok und Koh Haa ist nach den Angaben der Nationalparkbehörde in der Regel vom 16. Mai bis 15. November für Besucher gesperrt. Schon deshalb ändert sich die Auswahl der möglichen Ziele mit der Jahreszeit.",
            "Welche Variante die richtige ist, hängt von Ihrem Reisetermin ab, nicht von einer „besten“ Jahreszeit für alle. Wer flexibel ist und Ruhe schätzt, kann auch in der Nebensaison einen schönen Inseltag erleben. Wer fest an einem Datum hängt, plant am besten einen Puffertag ein.",
          ],
          en: [
            "Broadly speaking there are two seasons. In the dry season, roughly November to April, the sea is usually calmer and the weather more stable, and visibility under water is often better. It is also when most visitors come. From May to October the monsoon sets in: more rain, a rougher sea depending on the day, but many places are much emptier. Boat tours are possible in these months, but depend more on wind and waves and can be moved at short notice.",
            "On top of that there are national park closures to know about when planning. According to the most recently published dates, Maya Bay is closed each year from about 1 August to 30 September and then reopens; before booking, check whether a newer notice exists for your date. According to the national park authority, the Koh Rok and Koh Haa group is usually closed to visitors from 16 May to 15 November. This alone changes the choice of possible destinations with the season.",
            "Which option is right depends on your travel dates, not on one “best” season for everyone. If you are flexible and value quiet, you can have a lovely island day in the low season too. If you are tied to one date, it is wise to plan a buffer day.",
          ],
        },
        list: {
          de: [
            "November bis April: in der Regel ruhigere See, mehr Andrang, frühes Starten lohnt besonders",
            "Mai bis Oktober: Monsun, wechselhafter, oft leerer; mit Puffertag und flexibler Planung gut machbar",
            "Maya Bay: jährliche Schließzeit, Stand siehe unser Artikel zu den Öffnungszeiten",
            "Koh Rok und Koh Haa: in der Regel 16. Mai bis 15. November geschlossen",
          ],
          en: [
            "November to April: usually calmer sea, more visitors, starting early pays off most",
            "May to October: monsoon, changeable, often emptier; very doable with a buffer day and flexible plans",
            "Maya Bay: annual closure, see our article on opening dates for the current status",
            "Koh Rok and Koh Haa: usually closed 16 May to 15 November",
          ],
        },
        tip: {
          de: "Ein Blick in unseren Artikel zu Bootstouren in der Regenzeit lohnt sich, wenn Sie zwischen Mai und Oktober reisen: Er erklärt, wie wir mit Wetter und Wellengang umgehen.",
          en: "If you travel between May and October, our article on boat tours in the rainy season is worth a look: it explains how we deal with weather and swell.",
        },
      },
      {
        id: "island-groups",
        h2: {
          de: "Die Inselgruppen im Überblick: 4 Islands, Hong, Phi Phi",
          en: "The island groups at a glance: 4 Islands, Hong, Phi Phi",
        },
        figure: {
          src: "/images/krabi-boat-tour-karte-krabi-ao-nang-bucht-inseln-uebersicht.webp",
          width: 1254,
          height: 1254,
          alt: {
            de: "Illustrierte Karte der Küste von Krabi mit Ao Nang, Railay, Hong Island, Phi Phi und Phang-Nga-Bucht",
            en: "Illustrated map of the Krabi coast with Ao Nang, Railay, Hong Island, Phi Phi and Phang Nga Bay",
          },
          caption: { de: "Illustrierte Übersichtskarte, nicht maßstabsgetreu. Fahrzeiten nennen die Tourseiten.", en: "Illustrated overview map, not to scale. Travel times are given on the tour pages." },
        },
        body: {
          de: [
            "Rund um Krabi gibt es mehr Inseln, als ein Urlaub abdeckt. Für den Überblick hilft es, in drei Gruppen zu denken, die ab Ao Nang jeweils einen eigenen Charakter und eine eigene Fahrzeit haben. Die Minutenangaben stammen aus unseren Tourdaten und gelten als Richtwert bei ruhiger See.",
            "Die 4 Islands sind die nahe Gruppe. Koh Poda, Chicken Island und die Tup-Sandbank liegen dicht beieinander, Phra Nang und Railay sind nur wenige Bootsminuten entfernt. Die Sandbank erscheint nur bei Niedrigwasser, mehr dazu im Gezeiten-Guide. Die Hong-Gruppe liegt etwas weiter draußen und ist die ruhigere Wahl für Lagunen, Schwimmen und Schnorcheln. Phi Phi ist die weiteste dieser drei Gruppen, mit Maya Bay (nur Ansehen, kein Schwimmen), Pileh Lagoon, Viking Cave und Bamboo Island.",
          ],
          en: [
            "Around Krabi there are more islands than one holiday can cover. For an overview it helps to think in three groups, each with its own character and travel time from Ao Nang. The minute figures come from our tour data and are a guide in calm seas.",
            "The 4 Islands are the near group. Koh Poda, Chicken Island and the Tup sandbar lie close together, and Phra Nang and Railay are only a few boat minutes away. The sandbar only appears at low tide; see the tides guide for more. The Hong group lies a little further out and is the quieter choice for lagoons, swimming and snorkelling. Phi Phi is the furthest of these three groups, with Maya Bay (viewing only, no swimming), Pileh Lagoon, Viking Cave and Bamboo Island.",
          ],
        },
        table: {
          caption: {
            de: "Die drei Inselgruppen ab Ao Nang im Vergleich (Richtwerte bei ruhiger See)",
            en: "The three island groups from Ao Nang compared (guide values in calm seas)",
          },
          head: [
            { de: "Gruppe", en: "Group" },
            { de: "Stationen", en: "Stops" },
            { de: "Ab Ao Nang per Speedboat", en: "From Ao Nang by speedboat" },
            { de: "Gut für", en: "Good for" },
            { de: "Passende Tour", en: "Matching tour" },
          ],
          rows: [
            [
              { de: "4 Islands", en: "4 Islands" },
              { de: "Koh Poda, Chicken Island, Tup-Sandbank, Phra Nang Cave", en: "Koh Poda, Chicken Island, Tup sandbar, Phra Nang Cave" },
              { de: "ca. 15 bis 30 Minuten", en: "about 15 to 30 minutes" },
              { de: "Sandbank bei Ebbe, Schnorcheln, Abendlicht", en: "Sandbar at low tide, snorkelling, evening light" },
              { de: "4-Islands VIP & Sunset Special (ab 13:00)", en: "4-Islands VIP & Sunset Special (from 1 pm)" },
            ],
            [
              { de: "Hong-Gruppe", en: "Hong group" },
              { de: "Koh Hong, Koh Lao Lading, Koh Pakbia", en: "Koh Hong, Koh Lao Lading, Koh Pakbia" },
              { de: "ca. 30 bis 45 Minuten", en: "about 30 to 45 minutes" },
              { de: "Lagune, Schwimmen, langes Schnorchelpicknick", en: "Lagoon, swimming, long snorkel picnic" },
              { de: "Hong Island Secret Lagoons (ab 08:00)", en: "Hong Island Secret Lagoons (from 8 am)" },
            ],
            [
              { de: "Phi Phi", en: "Phi Phi" },
              { de: "Maya Bay (kein Schwimmen), Pileh Lagoon, Viking Cave, Bamboo Island", en: "Maya Bay (no swimming), Pileh Lagoon, Viking Cave, Bamboo Island" },
              { de: "ca. 45 bis 60 Minuten", en: "about 45 to 60 minutes" },
              { de: "Der große Name, früher Start, Ganztagesausflug", en: "The big name, early start, full-day trip" },
              { de: "Phi Phi Early Bird (ab 07:00)", en: "Phi Phi Early Bird (from 7 am)" },
            ],
          ],
        },
        tip: {
          de: "Wenn Sie nur einen Tag haben: Die 4 Islands sind am kürzesten, Hong bietet mehr Ruhe, Phi Phi braucht den längsten Tag. Eine ausführliche Entscheidungshilfe finden Sie im Vergleich Hong Island, 4 Islands oder Phi Phi.",
          en: "If you only have one day: the 4 Islands are the shortest trip, Hong offers more calm, Phi Phi needs the longest day. For a detailed decision aid see the comparison of Hong Island, 4 Islands or Phi Phi.",
        },
      },
      {
        id: "stops-in-detail",
        h2: {
          de: "Was Sie an den einzelnen Stationen erwartet",
          en: "What to expect at the individual stops",
        },
        body: {
          de: [
            "Auf der 4-Islands-Route steht Koh Poda für Strand und Kalksteinfelsen, Chicken Island für Schnorcheln an einer markanten Felsspitze und die Tup-Sandbank für den Spaziergang durch flaches Wasser, solange Niedrigwasser ist. Phra Nang Cave Beach rundet die Route mit Felswänden und Abendlicht ab. Wie die Stationen zueinander liegen, erklärt der Artikel zu Namen, Karte und Sandbank-Timing der 4 Islands.",
            "In der Hong-Gruppe stehen die Lagune von Koh Hong, die kleine Bucht von Koh Lao Lading und die zwei Strände von Koh Pakbia im Mittelpunkt. Die Landschaft ist weniger auf einen einzelnen Fotopunkt ausgelegt, sondern auf Zeit im Wasser. Wer beide Gruppen an einem Tag sehen möchte, findet im Artikel zu Hong und den 4 Islands an einem Tag eine Einordnung.",
            "Bei Phi Phi bestimmt der Zeitpunkt, wie sich der Besuch anfühlt. Maya Bay darf nur angesehen werden, Schwimmen ist dort nicht erlaubt. Die Pileh Lagoon, die Viking Cave und Bamboo Island sorgen für Abwechslung. Zu Bamboo Island haben wir einen eigenen Artikel, zur Maya Bay den aktuellen Stand der Schließzeiten.",
          ],
          en: [
            "On the 4 Islands route, Koh Poda stands for beach and limestone rock, Chicken Island for snorkelling at a striking rock pinnacle and the Tup sandbar for a walk through shallow water as long as it is low tide. Phra Nang Cave Beach rounds off the route with cliffs and evening light. How the stops lie relative to each other is explained in the article on names, map and sandbar timing of the 4 Islands.",
            "In the Hong group the focus is on the Koh Hong lagoon, the small cove of Koh Lao Lading and the two beaches of Koh Pakbia. The scenery is less about one photo spot and more about time in the water. If you want to see both groups in one day, the article on Hong and the 4 Islands in one day puts it into perspective.",
            "At Phi Phi the timing decides how the visit feels. Maya Bay may only be looked at, swimming is not allowed there. Pileh Lagoon, Viking Cave and Bamboo Island add variety. We have a separate article on Bamboo Island, and one on Maya Bay with the current status of the closure periods.",
          ],
        },
      },
      {
        id: "choose-your-boat",
        h2: {
          de: "Welches Boot passt zu Ihrer Bootstour in Krabi?",
          en: "Which boat suits your boat tour in Krabi?",
        },
        body: {
          de: [
            "Wir sind ehrlich: Es gibt in Krabi mehr als eine Art, die Inseln zu erreichen. Das klassische Longtail ist ein traditionelles Holzboot, langsamer und lauter, das sich vor allem für kurze Strecken eignet, etwa nach Railay oder zu den nahen Inseln. Dazu kommen große Gruppenboote mit festem Fahrplan. Wir selbst fahren ausschließlich privat mit einem Speedboat und bieten weder Longtail-Touren noch Katamaran- oder Yachttouren an. Einen ausführlichen Vergleich finden Sie im Guide zu Longtail und Speedboot.",
            "Unser Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren zu je 300 PS. Es bietet Platz für höchstens 5 Gäste, eine Sitzbank, bequeme Bootssessel und Schatten. Weil das Boot nur Ihnen gehört, bestimmen Sie gemeinsam mit dem Kapitän das Tempo, die Reihenfolge der Stopps und die Zeit an jedem Ort. Das ist vor allem dann wertvoll, wenn Gezeiten und Wellengang den Ablauf des Tages mitbestimmen.",
            "Der Preis gilt pro Boot, nicht pro Person. Bei einer Gruppe von fünf Gästen teilen sich also fünf Personen denselben Betrag. Wie sich das im Vergleich zu Gruppentouren rechnet, erklärt der Kostenguide zur privaten Bootscharter in Krabi.",
          ],
          en: [
            "To be honest, there is more than one way to reach the islands in Krabi. The classic longtail is a traditional wooden boat, slower and louder, best suited to short hops such as Railay or the nearby islands. Then there are large group boats on a fixed schedule. We run only private trips on a speedboat and do not offer longtail, catamaran or yacht tours. A detailed comparison is in the guide on longtail versus speedboat.",
            "Our boat is a white hardtop cabin boat with twin 300 hp engines. It takes a maximum of 5 guests and has a bench seat, comfortable boat chairs and shade. Because the boat is yours alone, you decide together with the captain on the pace, the order of stops and the time at each place. That is especially valuable when tides and swell influence the day.",
            "The price is per boat, not per person. With a group of five guests, five people share the same amount. How this compares with group tours is explained in the cost guide to private boat charters in Krabi.",
          ],
        },
        list: {
          de: [
            "Longtail: traditionell, langsamer und lauter, für kurze Strecken",
            "Gruppenboot: fester Fahrplan, geteilte Stopps, in der Regel günstiger pro Person",
            "Privates Speedboat (unser Angebot): eigene Route und Zeiten, maximal 5 Gäste, Preis pro Boot",
          ],
          en: [
            "Longtail: traditional, slower and louder, for short hops",
            "Group boat: fixed schedule, shared stops, usually cheaper per person",
            "Private speedboat (our offer): your own route and timing, maximum 5 guests, price per boat",
          ],
        },
      },
      {
        id: "why-go-by-boat",
        h2: {
          de: "Warum mit dem Boot? Strände, Schnorcheln, Freiheit",
          en: "Why go by boat? Beaches, snorkelling, freedom",
        },
        body: {
          de: [
            "Viele der schönsten Orte rund um Krabi haben keine Straße. Kleine Buchten unter Felswänden, Strände ohne Infrastruktur und Lagunen hinter Felsdurchfahrten erreichen Sie nur über das Wasser. Das Boot ist hier nicht nur Verkehrsmittel, sondern der Weg, auf dem die Landschaft überhaupt zugänglich wird.",
            "Dazu kommt das Schnorcheln. Schnorchelausrüstung ist bei uns kostenlos, Sie können sie bei der Buchung einfach ankreuzen. Was Sie unter Wasser sehen, hängt von Ort, Sicht und Tagesform des Meeres ab, versprechen können wir keine bestimmten Tiere. Sicher ist dagegen, dass Sie bei einem privaten Boot dort länger bleiben können, wo es Ihnen gefällt.",
            "Der dritte Punkt ist die Freiheit: früher aufbrechen, später zurückkommen, eine Bucht auslassen, in einer anderen länger bleiben. Genau das ist bei einer Gruppentour mit festem Plan schwer, bei einer privaten Fahrt aber normal.",
          ],
          en: [
            "Many of the most beautiful places around Krabi have no road. Small coves beneath rock walls, beaches without infrastructure and lagoons behind rock passages can only be reached by water. Here the boat is not just transport but the way the landscape becomes accessible at all.",
            "Then there is snorkelling. Snorkel gear is free with us, and you simply tick it when booking. What you see under water depends on the place, visibility and the sea’s mood that day; we cannot promise particular animals. What is certain is that on a private boat you can stay longer where you like it.",
            "The third point is freedom: set off earlier, come back later, skip one cove, stay longer in another. That is hard on a group tour with a fixed plan, but normal on a private trip.",
          ],
        },
      },
      {
        id: "insider-tips",
        h2: {
          de: "Insider-Tipps für Ihren Inseltag",
          en: "Insider tips for your island day",
        },
        body: {
          de: [
            "Mit wenigen Entscheidungen wird aus einem guten Inseltag ein sehr guter. Die wichtigsten Punkte haben wir aus unserer Erfahrung zusammengefasst.",
          ],
          en: [
            "A few decisions turn a good island day into a very good one. We have gathered the most important points from our experience.",
          ],
        },
        list: {
          de: [
            "Früh starten oder spät: Unsere Hong-Tour beginnt um 08:00 Uhr, die Phi-Phi-Tour um 07:00 Uhr. Die 4 Islands starten um 13:00 Uhr und enden mit dem Sonnenuntergang, wenn die Gruppenboote zurückfahren.",
            "Eine wasserdichte Tasche (Dry Bag) schützt Handy, Kamera und Papiere beim Ein- und Aussteigen im flachen Wasser.",
            "Riffschonende Sonnencreme, Hut und leichtes Langarmshirt: auf dem Wasser gibt es wenig Schatten, und das Riff dankt es Ihnen.",
            "Respektieren Sie die Regeln der Nationalparks: nichts mitnehmen, nichts hinterlassen, keine Korallen berühren, keine Tiere füttern.",
            "Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr; sie ist nicht im Tourpreis enthalten und wird vor Ort bei den Rangern bezahlt.",
            "Wasserschuhe sind bei Sandbänken und felsigen Einstiegen hilfreich.",
          ],
          en: [
            "Start early or late: our Hong tour begins at 8 am, our Phi Phi tour at 7 am. The 4 Islands start at 1 pm and end with the sunset, as the group boats head back.",
            "A waterproof bag (dry bag) protects phone, camera and papers when getting in and out in shallow water.",
            "Reef-safe sunscreen, a hat and a light long-sleeved shirt: there is little shade on the water, and the reef will thank you.",
            "Respect the national park rules: take nothing, leave nothing, do not touch coral, do not feed animals.",
            "Some islands or national parks charge an entrance fee; it is not included in the tour price and is paid on site to the rangers.",
            "Water shoes help on sandbars and rocky entry points.",
          ],
        },
        tip: {
          de: "Fragen Sie vor der Buchung nach den Gezeiten Ihres Tages. Sie entscheiden, ob die Tup-Sandbank zu sehen ist und in welcher Reihenfolge die Stopps sinnvoll sind.",
          en: "Ask about the tides on your day before booking. They decide whether the Tup sandbar is visible and in which order the stops make sense.",
        },
      },
      {
        id: "start-and-booking",
        h2: {
          de: "Start, Treffpunkt und Buchung",
          en: "Start point, meeting place and booking",
        },
        body: {
          de: [
            "Die Touren starten wahlweise in Ao Nang oder in Krabi Town; der Treffpunkt wird nach Absprache festgelegt. Einen Hotel-Transfer bieten wir nicht an. Innerhalb von Ao Nang und nach Krabi Town sind Taxis vor Ort in der Regel günstig und unkompliziert, sodass die Anreise zum Treffpunkt selten ein Problem ist.",
            "Unsere drei Touren für den Einstieg sind die „4-Islands VIP & Sunset Special“ (6 Std., ab 13:00 Uhr, ab 18.500 THB pro Boot), die „Hong Island Secret Lagoons & Hidden Bays“ (7 Std., ab 08:00 Uhr, ab 21.500 THB pro Boot) und der „Phi Phi Early Bird“ (8 Std., ab 07:00 Uhr, ab 28.500 THB pro Boot). Alle Preise gelten für bis zu 5 Gäste. Die Anfrage ist unverbindlich, ein Termin ist erst nach unserer Bestätigung reserviert.",
          ],
          en: [
            "Tours start in either Ao Nang or Krabi Town; the meeting place is agreed with you. We do not offer hotel transfers. Within Ao Nang and to Krabi Town, local taxis are usually cheap and straightforward, so getting to the meeting place is rarely a problem.",
            "Our three tours to start with are the “4-Islands VIP & Sunset Special” (6 hrs, from 1 pm, from 18,500 THB per boat), the “Hong Island Secret Lagoons & Hidden Bays” (7 hrs, from 8 am, from 21,500 THB per boat) and the “Phi Phi Early Bird” (8 hrs, from 7 am, from 28,500 THB per boat). All prices are for up to 5 guests. The enquiry is non-binding, and a date is only reserved once we confirm it.",
          ],
        },
        tip: {
          de: "Wer Routen, Dauer und Reihenfolge der Stopps im Detail planen möchte, findet alles im Inselhopping-Planer für Krabi.",
          en: "If you want to plan routes, duration and order of stops in detail, you will find everything in the Krabi island hopping planner.",
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Was ist die beste Zeit für Inselhopping in Krabi?",
          en: "What is the best time for island hopping in Krabi?",
        },
        a: {
          de: "In der Regel die Trockenzeit von etwa November bis April: ruhigere See und stabileres Wetter, dafür mehr Besucher. Von Mai bis Oktober ist Monsun, es ist wechselhafter, oft aber leerer. Bootstouren sind dann möglich, hängen aber stärker von Wind und Wellen ab.",
          en: "Usually the dry season from about November to April: calmer sea and more stable weather, but more visitors. May to October is monsoon, more changeable but often emptier. Boat tours are possible then but depend more on wind and waves.",
        },
      },
      {
        q: {
          de: "Welche Inseln kann man ab Ao Nang besuchen?",
          en: "Which islands can you visit from Ao Nang?",
        },
        a: {
          de: "Drei Gruppen sind besonders gefragt: die 4 Islands (Koh Poda, Chicken Island, Tup-Sandbank, Phra Nang), die Hong-Gruppe (Koh Hong, Koh Lao Lading, Koh Pakbia) und Phi Phi mit Maya Bay, Pileh Lagoon, Viking Cave und Bamboo Island. Nach unseren Tourdaten sind es ca. 10 bis 15, ca. 30 bis 35 und ca. 50 Minuten per Speedboat.",
          en: "Three groups are especially popular: the 4 Islands (Koh Poda, Chicken Island, Tup sandbar, Phra Nang), the Hong group (Koh Hong, Koh Lao Lading, Koh Pakbia) and Phi Phi with Maya Bay, Pileh Lagoon, Viking Cave and Bamboo Island. According to our tour data these are about 10 to 15, about 30 to 35 and about 50 minutes by speedboat.",
        },
      },
      {
        q: {
          de: "Longtail oder Speedboot für eine Bootstour in Krabi?",
          en: "Longtail or speedboat for a boat tour in Krabi?",
        },
        a: {
          de: "Das Longtail ist ein traditionelles, langsameres und lauteres Boot, das sich für kurze Strecken eignet. Ein Speedboat ist schneller und erreicht auch weiter entfernte Ziele zügig. Wir fahren ausschließlich mit einem privaten Speedboat für maximal 5 Gäste. Mehr dazu im Guide zu Longtail und Speedboot.",
          en: "The longtail is a traditional, slower and louder boat that suits short hops. A speedboat is faster and reaches more distant destinations quickly. We run only a private speedboat for a maximum of 5 guests. More in the guide on longtail versus speedboat.",
        },
      },
      {
        q: {
          de: "Was kostet eine private Bootstour in Krabi?",
          en: "How much does a private boat tour in Krabi cost?",
        },
        a: {
          de: "Bei uns ab 18.500 THB pro Boot für die 4 Islands, ab 21.500 THB für Hong Island und ab 28.500 THB für Phi Phi Early Bird, jeweils für bis zu 5 Gäste und nicht pro Person. Eine Eintrittsgebühr, falls fällig, wird vor Ort bezahlt und ist nicht enthalten.",
          en: "With us from 18,500 THB per boat for the 4 Islands, from 21,500 THB for Hong Island and from 28,500 THB for Phi Phi Early Bird, each for up to 5 guests and not per person. An entrance fee, if due, is paid on site and is not included.",
        },
      },
      {
        q: {
          de: "Ist die Maya Bay offen und darf man dort schwimmen?",
          en: "Is Maya Bay open and can you swim there?",
        },
        a: {
          de: "Schwimmen ist in der Maya Bay nicht erlaubt, Besucher dürfen sie nur ansehen. Nach den zuletzt veröffentlichten Terminen ist sie jährlich etwa vom 1. August bis 30. September geschlossen. Prüfen Sie vor der Buchung, ob eine neue Mitteilung vorliegt; Details im Artikel zu den Öffnungszeiten.",
          en: "Swimming is not allowed in Maya Bay; visitors may only look at it. According to the most recently published dates it is closed each year from about 1 August to 30 September. Check for a newer notice before booking; details are in the article on opening dates.",
        },
      },
    ],
    related: [
      "krabi-island-hopping-planner",
      "private-boat-charter-krabi-cost",
      "longtail-vs-speedboat-krabi",
      "krabi-tides-guide",
      "4-islands-krabi-names-map-sandbar-timing",
      "hong-island-vs-4-islands-vs-phi-phi",
      "krabi-9-islands-hong-and-4-islands-one-day",
      "bamboo-island-krabi",
      "maya-bay-open-closed-dates",
      "krabi-boat-tours-rainy-season",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phi-phi-early-bird"],
    image: IMG.karstAerial,
  },
];
