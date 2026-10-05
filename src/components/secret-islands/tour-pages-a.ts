import type { TourPageContent } from "./tour-pages";

/**
 * Landing-page copy for the tours, part 1 (island tours). Facts come from TOURS (content.ts) and the Insider Guide articles
 * (docs: see tour-pages.ts). Do not add prices, times or place details that are not in those sources.
 * Paragraphs in `intro` are separated by a blank line.
 */
export const TOUR_PAGES_A: Record<string, TourPageContent> = {
  "4islands-sunset": {
    title: { de: "4 Islands privat ab Ao Nang: Sunset-Tour ab 13 Uhr", en: "Private 4 Islands Tour Krabi: Sunset Trip from 1 pm" },
    description: {
      de: "Private 4-Islands-Tour ab Ao Nang: Koh Poda, Chicken Island, Tup-Sandbank und Phra Nang zum Sonnenuntergang. Eigenes Speedboot für max. 5 Gäste, mit Prosecco.",
      en: "Private 4 Islands tour from Ao Nang: Koh Poda, Chicken Island, Tup sandbar and Phra Nang at sunset. Your own speedboat for max. 5 guests, prosecco included.",
    },
    h1: { de: "4 Islands privat: VIP- und Sunset-Tour ab Ao Nang", en: "Private 4 Islands Tour from Ao Nang: VIP & Sunset Special" },
    intro: {
      de: "Die vier Stopps der klassischen 4-Islands-Tour kennt fast jeder Krabi-Besucher. Bei uns ist vor allem die Uhrzeit anders: Wir legen um 13:00 Uhr ab, wenn die Gruppenboote bereits auf dem Rückweg sind, und besuchen Koh Poda, Chicken Island, die Tup-Sandbank und die Bucht von Phra Nang am Nachmittag. Sie fahren in einem weißen Hardtop-Kabinenboot mit zwei Motoren à 300 PS. Sitzbank und bequeme Bootssessel bieten Platz für höchstens fünf Gäste, das Hardtop spendet Schatten.\n\nBei Ebbe laufen Sie über die Tup-Sandbank von Insel zu Insel. Ob und wie weit das an Ihrem Tag geht, entscheidet das Niedrigwasser, das wir bei der Planung berücksichtigen. An Chicken Island und Koh Poda schnorcheln Sie mit kostenloser Ausrüstung (bitte bei der Buchung ankreuzen) oder schwimmen in flachem Wasser. Den Abschluss bildet der Sonnenuntergang vor den Kalksteinfelsen von Phra Nang, mit gekühltem Sunset-Prosecco an Bord. Wasser, Softdrinks, Obst und der Hotel-Transfer in Ao Nang/Krabi sind inklusive. Der Preis gilt pro Boot, nicht pro Person.",
      en: "Almost every Krabi visitor knows the four stops of the classic 4 Islands tour. What is different with us is the timing: we leave at 1 pm, when the group boats are already heading home, and visit Koh Poda, Chicken Island, the Tup sandbar and the bay of Phra Nang in the afternoon. You travel in a white hardtop cabin boat with twin 300 hp engines. A bench seat and comfortable boat chairs offer room for a maximum of five guests, and the hardtop gives shade.\n\nAt low tide you walk across the Tup sandbar from island to island. Whether and how far that works on your day depends on the low water, which we take into account when planning. At Chicken Island and Koh Poda you snorkel with free gear (please tick it when booking) or simply swim in shallow water. The finale is the sunset in front of Phra Nang's limestone cliffs, with chilled sunset prosecco on board. Water, soft drinks, fruit and the hotel transfer in Ao Nang/Krabi are included. The price is per boat, not per person.",
    },
    audience: {
      de: "Für alle, die die berühmten Inseln sehen möchten, ohne mit dem Mittagsandrang zu fahren: Paare, Familien und kleine Freundesgruppen bis fünf Personen. Auch für Erstbesucher in Krabi, die einen Nachmittag mit Schwimmen, Sandbank und Sonnenuntergang suchen.",
      en: "For everyone who wants to see the famous islands without joining the midday rush: couples, families and small groups of friends up to five people. Also for first-time visitors to Krabi who want one afternoon of swimming, sandbar and sunset.",
    },
    faq: [
      {
        q: { de: "Wann ist die Tup-Sandbank bei der 4-Islands-Tour begehbar?", en: "When can you walk the Tup sandbar on the 4 Islands tour?" },
        a: {
          de: "Rund um das Niedrigwasser, das sich jeden Tag verschiebt. Am deutlichsten ist die Sandbank bei Springtiden um Neumond und Vollmond, bei Flut ist sie überspült. Nennen Sie uns Ihr Wunschdatum in der Anfrage, dann berücksichtigen wir das Niedrigwasser bei der Planung.",
          en: "Around low tide, which shifts every day. The sandbar is most visible at spring tides around new and full moon, and it is covered at high tide. Give us your preferred date in the inquiry and we take low water into account when planning.",
        },
      },
      {
        q: { de: "Warum startet die private 4-Islands-Tour erst um 13:00 Uhr?", en: "Why does the private 4 Islands tour start at 1 pm?" },
        a: {
          de: "Wir starten, wenn die Gruppenboote zurückfahren. So erleben Sie die Inseln am Nachmittag mit mehr Ruhe und kommen zum Sonnenuntergang vor Phra Nang an.",
          en: "We depart as the group boats head home. That way you experience the islands in the afternoon with more calm and arrive at Phra Nang in time for the sunset.",
        },
      },
      {
        q: { de: "Kann man bei der 4-Islands-Tour schnorcheln?", en: "Can you snorkel on the 4 Islands tour?" },
        a: {
          de: "Ja, zum Beispiel an Chicken Island. Schnorchel-Equipment stellen wir kostenlos zur Verfügung, bitte bei der Buchung ankreuzen.",
          en: "Yes, for example at Chicken Island. We provide snorkel gear free of charge, please tick it when booking.",
        },
      },
      {
        q: { de: "Ist die Tour für Kinder geeignet?", en: "Is the tour suitable for children?" },
        a: {
          de: "Ja. Die Tup-Sandbank ist flach und kinderfreundlich, Wasserschuhe, Sonnenschutz und ein Auge auf die steigende Flut sind aber wichtig. Rettungswesten sind an Bord, auch in Kindergrößen; nennen Sie uns bei der Buchung Alter und Größe.",
          en: "Yes. The Tup sandbar is shallow and child-friendly, but water shoes, sun protection and an eye on the rising tide matter. Life jackets are on board, including kids' sizes; tell us age and size when booking.",
        },
      },
    ],
    related: ["family-sandbars", "sunset-dinner", "railay-escape"],
  },

  "plankton-night": {
    title: { de: "Leuchtendes Plankton Krabi: Night-Glow-Tour privat", en: "Glowing Plankton Krabi: Private Night Glow Boat Tour" },
    description: {
      de: "Leuchtendes Plankton in Krabi per privatem Speedboot ab Ao Nang: abends in eine dunkle Bucht, Schwimmstopp im glitzernden Meer. Für max. 5 Gäste, 4 Stunden.",
      en: "Glowing plankton in Krabi by private speedboat from Ao Nang: an evening trip to a dark bay and a swim stop in the sparkling sea. Max. 5 guests, 4 hours.",
    },
    h1: { de: "Leuchtendes Plankton in Krabi: Night Glow per Speedboat", en: "Bioluminescent Plankton in Krabi: Night Glow by Speedboat" },
    intro: {
      de: "Biolumineszentes Plankton ist kein Programmpunkt, den man hinter Glas erlebt: Sie schwimmen mittendrin. Unsere Night-Glow-Tour startet um 18:00 Uhr ab Ao Nang und führt per privatem Speedboot über die Ao Nang Bay und eine dunkle Bucht bei Koh Poda bis nach Koh Hong (Krabi). Nach Einbruch der Dunkelheit ankern wir in einer abgelegenen Bucht ohne Lichtverschmutzung und schalten Motor und Lichter aus. Sobald Sie vom Boot ins warme Wasser gleiten, leuchtet das Plankton bei jeder Bewegung blau auf, über Ihnen der Sternenhimmel.\n\nDas Leuchten ist am stärksten in mondlosen Nächten rund um Neumond. Die Intensität schwankt natürlich und kann nicht garantiert werden, bei Wind oder Wellen findet der Schwimmstopp nicht statt. Für den Stopp bringen wir Rettungswesten mit Licht und eine Badeleiter mit; Handtücher, Snacks und Getränke sowie der Hotel-Transfer sind inklusive. Das Boot ist ein weißes Hardtop-Kabinenboot mit Sitzbank und bequemen Bootssesseln für höchstens fünf Gäste. Der Preis gilt pro Boot, die Tour dauert vier Stunden.",
      en: "Bioluminescent plankton is not something you watch from behind glass: you swim right in it. Our Night Glow tour leaves Ao Nang at 6 pm by private speedboat and runs via Ao Nang Bay and a dark bay near Koh Poda to Koh Hong (Krabi). After dark we anchor in a remote bay free of light pollution and switch off engine and lights. As soon as you slip from the boat into the warm water, the plankton glows blue with every movement, with the stars above you.\n\nThe glow is strongest on moonless nights around new moon. The intensity varies naturally and cannot be guaranteed, and if it is windy or choppy the swim stop does not take place. For the stop we bring life vests with lights and a boarding ladder; towels, snacks and drinks as well as the hotel transfer are included. The boat is a white hardtop cabin boat with a bench seat and comfortable boat chairs for a maximum of five guests. The price is per boat, and the tour takes four hours.",
    },
    audience: {
      de: "Für Paare, Familien und Gruppen, die einen besonderen Abend auf dem Wasser suchen und gern im Meer schwimmen. Wer Wert auf ein sicheres Gefühl legt: Die Crew beaufsichtigt den Schwimmstopp, Rettungswesten sind an Bord.",
      en: "For couples, families and groups looking for a special evening on the water who enjoy swimming in the sea. If you want to feel safe: the crew supervises the swim stop and life vests are on board.",
    },
    faq: [
      {
        q: { de: "Wann sieht man leuchtendes Plankton in Krabi?", en: "When can you see glowing plankton in Krabi?" },
        a: {
          de: "Nach Einbruch der Dunkelheit, am besten in mondlosen Nächten rund um Neumond und fernab von künstlichem Licht. Die Intensität schwankt natürlich und ist nicht garantiert.",
          en: "After dark, best on moonless nights around new moon and away from artificial light. The intensity varies naturally and is not guaranteed.",
        },
      },
      {
        q: { de: "Ist Schwimmen in der Nacht sicher?", en: "Is swimming at night safe?" },
        a: {
          de: "Sie schwimmen in einer ruhigen Bucht direkt am Boot, mit Schwimmweste auf Wunsch und unter Aufsicht der Crew. Rettungswesten mit Licht und eine Badeleiter sind an Bord. Bei Wind oder Wellen findet der Schwimmstopp nicht statt.",
          en: "You swim in a calm bay right next to the boat, with a life vest if you wish and under the crew's supervision. Life vests with lights and a boarding ladder are on board. If it is windy or choppy, the swim stop does not take place.",
        },
      },
      {
        q: { de: "Kann man das Plankton fotografieren?", en: "Can you photograph the plankton?" },
        a: {
          de: "Nur sehr eingeschränkt. Das Leuchten ist schwach und kurz, mit dem Handy gelingt es selten. Am schönsten ist es mit den eigenen Augen.",
          en: "Only to a very limited extent. The glow is faint and brief, and it rarely works with a phone. It is most beautiful with your own eyes.",
        },
      },
      {
        q: { de: "Kann ich die Plankton-Tour mit dem Sonnenuntergang kombinieren?", en: "Can I combine the plankton tour with the sunset?" },
        a: {
          de: "Ja, mit der Sunset & Night Glow Kombi: Sie starten am Nachmittag, sehen den Sonnenuntergang vor Phra Nang und schwimmen danach im leuchtenden Plankton. Die Kombi finden Sie unter den verwandten Touren.",
          en: "Yes, with the Sunset & Night Glow Combo: you start in the afternoon, watch the sunset off Phra Nang and then swim in the glowing plankton. You find the combo under the related tours.",
        },
      },
    ],
    related: ["sunset-glow-combo", "sunset-dinner", "4islands-sunset"],
  },

  "sunset-glow-combo": {
    title: { de: "Sunset & leuchtendes Plankton Krabi: Kombi-Tour privat", en: "Sunset & Glowing Plankton Krabi: Private Combo Tour" },
    description: {
      de: "Sonnenuntergang vor Phra Nang und danach Schwimmen im leuchtenden Plankton: private Kombi-Tour ab Ao Nang, 6 Stunden ab 15:30 Uhr, max. 5 Gäste, mit Prosecco.",
      en: "Sunset off Phra Nang followed by a swim in glowing plankton: private combo tour from Ao Nang, 6 hours from 3:30 pm, max. 5 guests, prosecco included.",
    },
    h1: { de: "Sunset & Night Glow Kombi: Sonnenuntergang und leuchtendes Plankton", en: "Sunset & Night Glow Combo: Sunset and Glowing Plankton" },
    intro: {
      de: "Diese Tour verbindet zwei Dinge, die sonst getrennte Abende brauchen: den Sonnenuntergang vor den Felsen von Phra Nang und das Schwimmen im leuchtenden Plankton. Wir starten um 15:30 Uhr ab Ao Nang. Am späten Nachmittag baden Sie an Koh Poda, dann ankern wir in der Phra Nang Bay und stoßen mit Sunset-Prosecco auf das Abendlicht an. Der Sonnenuntergang liegt grob zwischen 18 und 19 Uhr, die genaue Zeit hängt von der Jahreszeit ab.\n\nNach Einbruch der Dunkelheit fahren wir in eine dunkle Bucht, in der es keine Lichtverschmutzung gibt, und schalten Motor und Lichter aus. Beim Schwimm- und Schnorchelstopp leuchtet biolumineszentes Plankton bei jeder Bewegung blau auf, nur Sie und Ihre Gruppe sind dabei. Das Leuchten ist am stärksten um Neumond und nicht garantiert; bei Wind oder Wellen entfällt der Schwimmstopp. Wasser, Softdrinks, Obst und der Hotel-Transfer sind inklusive. An Bord sind Sie in einem weißen Hardtop-Kabinenboot mit zwei Motoren à 300 PS, mit Sitzbank und bequemen Bootssesseln für höchstens fünf Gäste. Der Preis gilt pro Boot.",
      en: "This tour joins two things that otherwise need separate evenings: the sunset in front of Phra Nang's cliffs and a swim in glowing plankton. We leave Ao Nang at 3:30 pm. In the late afternoon you swim at Koh Poda, then we anchor in Phra Nang Bay and toast the evening light with sunset prosecco. Sunset falls roughly between 6 and 7 pm, depending on the season.\n\nAfter dark we head to a dark bay without light pollution and switch off engine and lights. At the swim and snorkel stop, bioluminescent plankton glows blue with every movement, with just you and your group there. The glow is strongest around new moon and not guaranteed; if it is windy or choppy the swim stop is skipped. Water, soft drinks, fruit and the hotel transfer are included. On board you are in a white hardtop cabin boat with twin 300 hp engines, with a bench seat and comfortable boat chairs for a maximum of five guests. The price is per boat.",
    },
    audience: {
      de: "Für Paare und Freundesgruppen, die Tag und Nacht in einer Tour erleben möchten, etwa zu Hochzeitstag oder Flitterwochen. Sie sollten gern abends im Meer schwimmen und sich auf einen langen, aber ruhigen Tag einlassen.",
      en: "For couples and groups of friends who want to experience day and night in one tour, for example for an anniversary or honeymoon. You should enjoy swimming in the sea in the evening and be happy with a long but relaxed day.",
    },
    faq: [
      {
        q: { de: "Wie läuft die Sunset-&-Night-Glow-Kombi ab?", en: "How does the Sunset & Night Glow Combo work?" },
        a: {
          de: "Start 15:30 Uhr, Baden an Koh Poda, Sonnenuntergang mit Prosecco vor Phra Nang und nach Einbruch der Dunkelheit der Schwimm- und Schnorchelstopp im leuchtenden Plankton. Die Tour dauert sechs Stunden.",
          en: "Start at 3:30 pm, swim at Koh Poda, sunset with prosecco off Phra Nang and, after dark, the swim and snorkel stop in the glowing plankton. The tour takes six hours.",
        },
      },
      {
        q: { de: "Ist das Plankton garantiert?", en: "Is the plankton guaranteed?" },
        a: {
          de: "Nein. Das Leuchten ist am stärksten in mondlosen Nächten rund um Neumond, die Intensität schwankt natürlich. Bei Wind oder Wellen findet der Schwimmstopp nicht statt.",
          en: "No. The glow is strongest on moonless nights around new moon, and the intensity varies naturally. If it is windy or choppy, the swim stop does not take place.",
        },
      },
      {
        q: { de: "Wann geht die Sonne in Krabi unter?", en: "When does the sun set in Krabi?" },
        a: {
          de: "Grob zwischen 18 und 19 Uhr; im Winterhalbjahr eher früher, in den Sommermonaten eher später. Die genaue Zeit für Ihren Tag finden Sie in einer Sonnenzeiten-App.",
          en: "Roughly between 6 and 7 pm; earlier in the winter months, later in summer. You can find the exact time for your day in a sunrise and sunset app.",
        },
      },
      {
        q: { de: "Ist Sekt oder Prosecco dabei?", en: "Is prosecco included?" },
        a: {
          de: "Ja, Sunset-Prosecco ist Teil der Leistung. Dazu gibt es Wasser, Softdrinks und Obst.",
          en: "Yes, sunset prosecco is part of the package, together with water, soft drinks and fruit.",
        },
      },
    ],
    related: ["plankton-night", "sunset-dinner", "4islands-sunset"],
  },

  "hong-lagoons": {
    title: { de: "Hong Island privat ab Ao Nang: Lagunen & Buchten", en: "Private Hong Island Tour from Ao Nang: Lagoons & Bays" },
    description: {
      de: "Hong Island privat ab Ao Nang: früh zur Hong-Lagune, dann Koh Lao Lading und Koh Pakbia. Eigenes Speedboot, max. 5 Gäste, 7 Std.",
      en: "Private Hong Island tour from Ao Nang: early to Hong Lagoon, then Koh Lao Lading and Koh Pakbia. Own speedboat, max. 5 guests, 7 hrs.",
    },
    h1: { de: "Hong Island privat: Secret Lagoons und Hidden Bays", en: "Private Hong Island Tour: Secret Lagoons & Hidden Bays" },
    intro: {
      de: "Die Hong-Lagune gehört zu den schönsten Motiven bei Krabi, und früh am Morgen gehört sie Ihnen. Wir starten um 08:00 Uhr ab Ao Nang; mit dem Speedboat dauert die Überfahrt nach Hong etwa 30 bis 45 Minuten, je nach Seegang. Danach geht es zur winzigen Bucht von Koh Lao Lading und zu den Doppelstränden von Koh Pakbia, die eine Sandzunge verbindet. Hier lassen sich ein langes Schwimm- und Schnorchelpicknick und viel Zeit im Wasser planen, ohne dass ein Gruppenzeitplan Sie weitertreibt.\n\nZur Orientierung: Es gibt zwei Inseln namens Koh Hong. Unsere Tour fährt die Insel im Than Bok Khorani Nationalpark vor Krabi an, nicht die in der Phang Nga Bucht. Die Lagune wird vor allem mit dem Boot erkundet, ob und wo Baden erlaubt ist, richtet sich nach den Nationalparkregeln; zum Schwimmen und Schnorcheln sind die Strände und Riffe der Nachbarinseln die bessere Wahl. Im Preis enthalten sind kostenloses Schnorchel-Equipment (bei der Buchung ankreuzen), Wasser, Softdrinks, Obst und der Hotel-Transfer. Das Boot ist ein weißes Hardtop-Kabinenboot für höchstens fünf Gäste, der Preis gilt pro Boot.",
      en: "Hong Lagoon is one of the most beautiful sights near Krabi, and early in the morning it belongs to you. We leave Ao Nang at 8 am; by speedboat the crossing to Hong takes about 30 to 45 minutes, depending on the sea. Then it goes on to the tiny cove of Koh Lao Lading and the twin beaches of Koh Pakbia, joined by a sand spit. Here you can plan a long swim and snorkel picnic and plenty of time in the water, without a group schedule pushing you on.\n\nFor orientation: there are two islands called Koh Hong. Our tour visits the island in Than Bok Khorani National Park off Krabi, not the one in Phang Nga Bay. The lagoon is mostly explored by boat, and whether and where swimming is allowed depends on the national park rules; for swimming and snorkelling the beaches and reefs of the neighbouring islands are the better choice. Included are free snorkel gear (tick it when booking), water, soft drinks, fruit and the hotel transfer. The boat is a white hardtop cabin boat for a maximum of five guests, and the price is per boat.",
    },
    audience: {
      de: "Für Paare, Familien und Fotofreunde, die Lagunen und kleine Buchten lieber früh und in Ruhe sehen. Geeignet auch für Familien mit Kindern, die gern schnorcheln und am Strand picknicken.",
      en: "For couples, families and photo fans who prefer to see lagoons and small bays early and in peace. Also suitable for families with children who like to snorkel and picnic on the beach.",
    },
    faq: [
      {
        q: { de: "Wie weit ist Hong Island von Ao Nang entfernt?", en: "How far is Hong Island from Ao Nang?" },
        a: {
          de: "Mit dem Speedboat etwa 30 bis 45 Minuten, je nach Seegang. Mit dem Longtail dauert die Fahrt deutlich länger.",
          en: "About 30 to 45 minutes by speedboat, depending on the sea. By longtail the trip takes much longer.",
        },
      },
      {
        q: { de: "Ist Hong Island Krabi dasselbe wie Hong Island in Phang Nga?", en: "Is Hong Island Krabi the same as Hong Island in Phang Nga?" },
        a: {
          de: "Nein, es gibt zwei Inseln namens Koh Hong. Unsere Tour führt zur Insel im Than Bok Khorani Nationalpark vor Krabi. Die andere liegt in der Phang Nga Bucht.",
          en: "No, there are two islands called Koh Hong. Our tour goes to the island in Than Bok Khorani National Park off Krabi. The other one is in Phang Nga Bay.",
        },
      },
      {
        q: { de: "Kann man in der Hong-Lagune schwimmen?", en: "Can you swim in the Hong lagoon?" },
        a: {
          de: "Die Lagune wird vor allem mit dem Boot erkundet. Ob und wo Baden erlaubt ist, kann sich nach den Nationalparkregeln richten. Zum Schwimmen eignen sich die Strände und Schnorchelspots der Nachbarinseln besser.",
          en: "The lagoon is mostly explored by boat. Whether and where swimming is allowed can depend on the national park rules. The beaches and snorkel spots of the neighbouring islands are better for swimming.",
        },
      },
      {
        q: { de: "Wann ist die beste Zeit für Hong Island?", en: "When is the best time for Hong Island?" },
        a: {
          de: "Früh am Tag und bei höherem Wasserstand für die Lagune. Die Trockenzeit von etwa November bis April bietet die ruhigste See.",
          en: "Early in the day and at a higher water level for the lagoon. The dry season from about November to April has the calmest sea.",
        },
      },
    ],
    related: ["phang-nga-uncharted", "family-sandbars", "4islands-sunset"],
  },

  "phang-nga-uncharted": {
    title: { de: "Koh Roi & Phang Nga Bucht privat: Geheime Inseln", en: "Private Koh Roi & Phang Nga Bay Tour: Secret Islands" },
    description: {
      de: "Koh Roi, Koh Kudu und Koh Nok privat ab Ao Nang: versteckte Lagune und einsame Strände der Phang Nga Bucht. Eigenes Speedboot für max. 5 Gäste, 8,5 Stunden.",
      en: "Koh Roi, Koh Kudu and Koh Nok privately from Ao Nang: a hidden lagoon and lonely beaches in Phang Nga Bay. Your own speedboat for max. 5 guests, 8.5 hours.",
    },
    h1: { de: "Koh Roi, Koh Kudu & Koh Nok: Uncharted Phang Nga privat", en: "Koh Roi, Koh Kudu & Koh Nok: Uncharted Phang Nga Private Tour" },
    intro: {
      de: "Das ist unsere Expedition in die nördliche Phang Nga Bucht, zu Inseln, an denen die meisten Boote einfach vorbeifahren. Wir starten um 08:00 Uhr ab Ao Nang und sind mit dem Speedboat je nach Route und Seegang etwa 45 bis 75 Minuten bis Koh Roi unterwegs. Von außen wirkt Koh Roi wie einer von vielen bewachsenen Kalksteinfelsen. Hinter einer schmalen Öffnung in der Felswand liegt eine stille grüne Lagune, und bei Flut schwimmen Sie durch den Felstunnel hinein, während das Boot draußen ankert.\n\nDer Durchgang ist gezeitenabhängig: bei zu hohem Wasser kaum passierbar, bei zu niedrigem felsig. Ihr Kapitän plant das passende Fenster ein, empfohlen ist die Tour für sichere Schwimmer. Danach entdecken Sie das Kudu-Hong, eine zum Himmel offene Höhle, und picknicken allein am Strand von Koh Nok. Im Preis enthalten sind Wasser, Softdrinks, Obst, Zeit zum Schwimmen und Entspannen sowie der Hotel-Transfer. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS und Platz für höchstens fünf Gäste. Der Preis gilt pro Boot, die Tour dauert 8,5 Stunden.",
      en: "This is our expedition into northern Phang Nga Bay, to islands that most boats simply pass by. We leave Ao Nang at 8 am and, depending on route and sea, are under way for about 45 to 75 minutes by speedboat to Koh Roi. From outside, Koh Roi looks like one of many overgrown limestone cliffs. Behind a narrow opening in the rock wall lies a quiet green lagoon, and at high tide you swim in through the rock tunnel while the boat anchors outside.\n\nThe passage depends on the tide: hardly passable when the water is too high, rocky when it is too low. Your captain plans the right window, and the tour is recommended for confident swimmers. Afterwards you explore the Kudu hong, a cave chamber open to the sky, and picnic alone on Koh Nok's beach. Included are water, soft drinks, fruit, time to swim and relax and the hotel transfer. The boat is a white hardtop cabin boat with twin 300 hp engines and room for a maximum of five guests. The price is per boat, and the tour takes 8.5 hours.",
    },
    audience: {
      de: "Für Entdecker, Paare und Fotofreunde, die abseits der Standardroute unterwegs sein möchten und sicher schwimmen. Für kleine Kinder ist der Zugang zur Koh-Roi-Lagune zu anspruchsvoll, für ältere Kinder, die sicher schwimmen, ist er mit Schwimmweste und Begleitung meist machbar.",
      en: "For explorers, couples and photo fans who want to go beyond the standard route and are confident swimmers. Access to the Koh Roi lagoon is too demanding for small children; for older children who swim well it is usually doable with a life jacket and company.",
    },
    faq: [
      {
        q: { de: "Wie kommt man in die Koh-Roi-Lagune?", en: "How do you get into the Koh Roi lagoon?" },
        a: {
          de: "Durch einen schmalen Durchgang im Fels, je nach Wasserstand schwimmend, watend oder über ein kurzes Felsstück. Das Boot ankert draußen. Der Durchgang ist gezeitenabhängig, Ihr Kapitän plant das passende Fenster ein.",
          en: "Through a narrow passage in the rock, swimming, wading or over a short stretch of rock depending on the water level. The boat anchors outside. The passage depends on the tide, and your captain plans the right window.",
        },
      },
      {
        q: { de: "Wie lange dauert die Fahrt nach Koh Roi?", en: "How long does it take to get to Koh Roi?" },
        a: {
          de: "Ab Ao Nang mit dem Speedboat etwa 45 bis 75 Minuten, abhängig von Route und Seegang.",
          en: "From Ao Nang by speedboat about 45 to 75 minutes, depending on route and sea.",
        },
      },
      {
        q: { de: "Ist die Tour für Kinder geeignet?", en: "Is the tour suitable for children?" },
        a: {
          de: "Für ältere Kinder, die sicher schwimmen, mit Schwimmweste und Begleitung meist ja. Für kleine Kinder ist der Zugang zur Lagune zu anspruchsvoll. Familien mit kleinen Kindern fahren besser eine Tour mit flachen Buchten.",
          en: "For older children who swim confidently, with a life jacket and company, usually yes. For small children the access to the lagoon is too demanding. Families with small children are better off with a tour that uses shallow bays.",
        },
      },
      {
        q: { de: "Kann man Koh Roi in der Regenzeit besuchen?", en: "Can you visit Koh Roi in the rainy season?" },
        a: {
          de: "Oft ja, weil die Phang Nga Bucht geschützt liegt. Bei Unwetter oder Warnungen werden Fahrten aber verschoben; bei Sturmwarnung verschieben wir kostenlos oder erstatten 100 %.",
          en: "Often yes, because Phang Nga Bay is sheltered. In bad weather or warnings, trips are rescheduled; with a storm warning we reschedule free of charge or refund 100%.",
        },
      },
    ],
    related: ["james-bond-bay", "hong-lagoons", "phi-phi-early-bird"],
  },

  "phi-phi-early-bird": {
    title: { de: "Phi Phi früh morgens privat ab Krabi: Maya Bay Tour", en: "Phi Phi Early Morning Private Tour from Krabi: Maya Bay" },
    description: {
      de: "Phi Phi privat ab Ao Nang um 07:00 Uhr: Maya Bay, Pileh-Lagune, Viking Cave und Bamboo Island vor den Fähren. Eigenes Speedboat für max. 5 Gäste, 8 Stunden.",
      en: "Private Phi Phi tour from Ao Nang at 7 am: Maya Bay, Pileh Lagoon, Viking Cave and Bamboo Island before the ferries. Own speedboat, max. 5 guests, 8 hours.",
    },
    h1: { de: "Phi Phi Early Bird: Maya Bay, Pileh-Lagune und Bamboo Island vor allen anderen", en: "Phi Phi Early Bird: Maya Bay, Pileh Lagoon and Bamboo Island Before Everyone Else" },
    intro: {
      de: "Phi Phi ist spektakulär und deshalb voll, entscheidend ist also, nicht zur selben Zeit wie alle anderen dort zu sein. Wir fahren um 07:00 Uhr ab Ao Nang los. Mit dem Speedboat dauert die Überfahrt bei ruhiger See etwa 45 bis 60 Minuten, sodass wir Maya Bay erreichen, bevor die Fähren ankommen. Danach schwimmen Sie in der türkisfarbenen Pileh-Lagune, fahren an der Viking Cave vorbei und machen Mittagspause am weißen Strand von Bamboo Island.\n\nWichtig zu wissen: In Maya Bay ist Schwimmen seit der Wiedereröffnung nicht erlaubt, damit sich Korallen und Haie erholen können. Sie können den Strand betreten und fotografieren, zum Baden nutzen wir die Pileh-Lagune. Außerdem ist die Bucht jedes Jahr rund zwei Monate während des Südwestmonsuns geschlossen, zuletzt vom 1. August bis 30. September; Termine und Regeln legt die Nationalparkbehörde fest und kann sie ändern. Im Preis enthalten sind kostenloses Schnorchel-Equipment (bei der Buchung ankreuzen), Wasser, Softdrinks, Obst und der Hotel-Transfer. Das Boot ist ein weißes Hardtop-Kabinenboot für höchstens fünf Gäste, der Preis gilt pro Boot.",
      en: "Phi Phi is spectacular and therefore busy, so what matters is not being there at the same time as everyone else. We leave Ao Nang at 7 am. By speedboat the crossing takes about 45 to 60 minutes in calm seas, so we reach Maya Bay before the ferries arrive. After that you swim in turquoise Pileh Lagoon, pass Viking Cave and take a lunch break on Bamboo Island's white beach.\n\nGood to know: swimming in Maya Bay has not been allowed since the reopening, so that corals and sharks can recover. You can walk onto the beach and take photos; for swimming we use Pileh Lagoon. The bay is also closed for about two months every year during the southwest monsoon, most recently from 1 August to 30 September; dates and rules are set by the national park authority and can change. Included are free snorkel gear (tick it when booking), water, soft drinks, fruit and the hotel transfer. The boat is a white hardtop cabin boat for a maximum of five guests, and the price is per boat.",
    },
    audience: {
      de: "Für Paare, Familien mit älteren Kindern und Fotografen, die die Phi-Phi-Highlights an einem langen Tag mit frühem Start sehen möchten. Wer nicht gern früh aufsteht, ist mit einer späteren Tour besser bedient.",
      en: "For couples, families with older children and photographers who want to see the Phi Phi highlights on one long day with an early start. If you do not like getting up early, a later tour suits you better.",
    },
    faq: [
      {
        q: { de: "Kann man in Maya Bay schwimmen?", en: "Can you swim in Maya Bay?" },
        a: {
          de: "Nein. Seit der Wiedereröffnung ist Schwimmen in der Bucht nicht erlaubt. Sie können den Strand betreten und fotografieren, geschwommen wird an anderen Stellen wie der Pileh-Lagune, sofern die aktuellen Parkregeln es erlauben.",
          en: "No. Swimming in the bay has not been allowed since the reopening. You can walk onto the beach and take photos, and swimming happens at other places such as Pileh Lagoon, as far as the current park rules allow.",
        },
      },
      {
        q: { de: "Wann ist Maya Bay geschlossen?", en: "When is Maya Bay closed?" },
        a: {
          de: "Jedes Jahr für rund zwei Monate während des Südwestmonsuns, zuletzt vom 1. August bis 30. September, Wiedereröffnung am 1. Oktober. Die Nationalparkbehörde legt die Daten fest und kann sie ändern, prüfen Sie den Stand für Ihr Datum vor der Buchung.",
          en: "Every year for about two months during the southwest monsoon, most recently from 1 August to 30 September, reopening on 1 October. The national park authority sets the dates and can change them, so check the status for your date before booking.",
        },
      },
      {
        q: { de: "Wie lange braucht man von Ao Nang nach Phi Phi?", en: "How long does it take from Ao Nang to Phi Phi?" },
        a: {
          de: "Mit dem Speedboat etwa 45 bis 60 Minuten bei ruhiger See. Fähren sind langsamer und fahren zu festen Zeiten.",
          en: "About 45 to 60 minutes by speedboat in calm seas. Ferries are slower and run at fixed times.",
        },
      },
      {
        q: { de: "Lohnt sich Phi Phi trotz der vielen Touristen?", en: "Is Phi Phi worth it despite the crowds?" },
        a: {
          de: "Ja, wenn Sie früh starten und flexibel sind. Die Landschaft ist spektakulär, entscheidend ist, nicht zur selben Zeit wie alle anderen dort zu sein. Genau dafür starten wir um 07:00 Uhr.",
          en: "Yes, if you start early and stay flexible. The scenery is spectacular, and what matters is not being there at the same time as everyone else. That is exactly why we leave at 7 am.",
        },
      },
    ],
    related: ["phang-nga-uncharted", "koh-rok-safari", "james-bond-bay"],
  },

  "koh-rok-safari": {
    title: { de: "Koh Rok & Koh Haa Schnorcheln: Private Speedboat-Tour", en: "Koh Rok & Koh Haa Snorkelling: Private Speedboat Tour" },
    description: {
      de: "Koh Rok und Koh Haa schnorcheln, privat ab Ao Nang: klare Riffe, Thai-Lunch an Bord. Eigenes Speedboat, max. 5 Gäste, 9 Stunden.",
      en: "Snorkel Koh Rok and Koh Haa privately from Ao Nang: clear reefs, Thai lunch on board. Own speedboat, max. 5 guests, 9 hours.",
    },
    h1: { de: "Koh Rok & Koh Haa Schnorchel-Safari: die klarsten Riffe der Andamanensee", en: "Koh Rok & Koh Haa Snorkel Safari: the Clearest Reefs of the Andaman Sea" },
    intro: {
      de: "Wer in Krabi richtig gut schnorcheln will, kommt an Koh Rok und Koh Haa kaum vorbei. Die Inseln liegen weit draußen südlich von Koh Lanta im Mu Ko Lanta Nationalpark, und die Sichtweite erreicht laut unserer Tourbeschreibung bis zu 25 Meter. Deshalb ist die Anfahrt lang: Rechnen Sie mit etwa anderthalb bis zwei Stunden Fahrt pro Strecke. Wir starten um 07:30 Uhr ab Ao Nang, die Tour dauert neun Stunden.\n\nAn den Zwillingsinseln Koh Rok Nai und Koh Rok Nok erwarten Sie Korallengärten, Clownfische und mit Glück Schildkröten; garantieren kann das niemand. Koh Haa besteht aus Kalksteintürmen im offenen Meer, mit einer Unterwasser-Lagune. Ein Thai-Lunch an Bord ist im Preis enthalten, ebenso kostenloses Schnorchel-Equipment (bei der Buchung ankreuzen), Zeit zum Schnorcheln, Schwimmen und Entspannen sowie der Hotel-Transfer. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS, Sitzbank und bequemen Bootssesseln für höchstens fünf Gäste; für die lange Fahrt sitzen Sie im Schatten des Hardtops. Der Preis gilt pro Boot. Koh Rok ist nur in der Saison zugänglich, die Termine legt die Nationalparkbehörde fest.",
      en: "If you want to snorkel really well in Krabi, you can hardly avoid Koh Rok and Koh Haa. The islands lie far out south of Koh Lanta in Mu Ko Lanta National Park, and visibility reaches up to 25 metres according to our tour description. That is why the ride is long: expect about one and a half to two hours each way. We leave Ao Nang at 7:30 am, and the tour takes nine hours.\n\nAt the twin islands of Koh Rok Nai and Koh Rok Nok, coral gardens, clownfish and, with luck, turtles await you; nobody can guarantee that. Koh Haa consists of limestone towers in the open sea, with an underwater lagoon. A Thai lunch on board is included, as are free snorkel gear (tick it when booking), time to snorkel, swim and relax and the hotel transfer. The boat is a white hardtop cabin boat with twin 300 hp engines, a bench seat and comfortable boat chairs for a maximum of five guests; on the long ride you sit in the shade of the hardtop. The price is per boat. Koh Rok is only accessible in season, and the dates are set by the national park authority.",
    },
    audience: {
      de: "Für Schnorchel-Fans, Paare und Familien mit älteren Kindern, denen klares Wasser und intakte Riffe wichtiger sind als kurze Anfahrt. Wer schnell seekrank wird, plant den Tag besser bei ruhiger See und mit einem Ersatztag.",
      en: "For snorkel fans, couples and families with older children who care more about clear water and healthy reefs than a short ride. If you get seasick easily, plan the day for calm seas and keep a spare day free.",
    },
    faq: [
      {
        q: { de: "Wann ist Koh Rok geöffnet?", en: "When is Koh Rok open?" },
        a: {
          de: "In der Regel von Mitte November bis Mitte Mai; vom 16. Mai bis 15. November sperrt der Nationalpark die Inseln offiziell (Südwestmonsun). Die genauen Termine legt die Nationalparkbehörde fest, bitte lassen Sie sich Ihr Datum in der Anfrage bestätigen.",
          en: "Usually from mid-November to mid-May; from 16 May to 15 November the national park officially closes the islands (southwest monsoon). The exact dates are set by the national park authority, so please have your date confirmed in the inquiry.",
        },
      },
      {
        q: { de: "Ist Koh Rok als Tagesausflug ab Krabi machbar?", en: "Is Koh Rok doable as a day trip from Krabi?" },
        a: {
          de: "Ja, mit dem Speedboat als Ganztagesausflug. Rechnen Sie mit etwa anderthalb bis zwei Stunden Fahrt pro Strecke. Unsere Tour startet um 07:30 Uhr und dauert neun Stunden.",
          en: "Yes, as a full-day trip by speedboat. Expect about one and a half to two hours each way. Our tour starts at 7:30 am and takes nine hours.",
        },
      },
      {
        q: { de: "Sieht man an Koh Rok Schildkröten?", en: "Can you see turtles at Koh Rok?" },
        a: {
          de: "Mit Glück ja, Schildkröten werden dort immer wieder beobachtet. Garantieren kann das aber niemand.",
          en: "With luck, yes, turtles are seen there again and again. Nobody can guarantee it, though.",
        },
      },
      {
        q: { de: "Ist Verpflegung dabei?", en: "Is food included?" },
        a: {
          de: "Ja, ein Thai-Lunch an Bord ist im Tourpreis enthalten. Bitte nennen Sie uns Unverträglichkeiten in der Anfrage.",
          en: "Yes, a Thai lunch on board is included in the tour price. Please tell us about any food intolerances in the inquiry.",
        },
      },
    ],
    related: ["phi-phi-early-bird", "hong-lagoons", "4islands-sunset"],
  },

  "james-bond-bay": {
    title: { de: "James Bond Island privat ab Krabi: Phang Nga Bay Tour", en: "Private James Bond Island Tour from Krabi: Phang Nga Bay" },
    description: {
      de: "James Bond Island privat ab Ao Nang: Mangroven, Koh Panyee und Khao Phing Kan ohne Touristenschlange. Eigenes Speedboot, max. 5 Gäste, 8 Stunden.",
      en: "Private James Bond Island tour from Ao Nang: mangroves, Koh Panyee and Khao Phing Kan, no tourist queue. Own speedboat, max. 5 guests, 8 hrs.",
    },
    h1: { de: "James Bond Island & Phang Nga Bay privat ab Krabi", en: "James Bond Island & Phang Nga Bay: Private Tour from Krabi" },
    intro: {
      de: "Die nadelförmige Felsnadel Koh Tapu vor Khao Phing Kan ist eines der berühmtesten Motive Thailands, bekannt seit dem Bond-Film „Der Mann mit dem goldenen Colt“ von 1974. Die meisten Gruppen kommen dort an, wenn es am vollsten ist. Wir fahren entgegen der Gruppenroute: Wir starten um 08:00 Uhr ab Ao Nang, erkunden zuerst die Mangrovenküste, besuchen dann das schwimmende Dorf Koh Panyee, ein Dorf auf Stelzen, und kommen am Nachmittag nach James Bond Island, wenn es ruhiger wird. Die Fahrt von Ao Nang dauert mit dem Speedboat je nach Route und Seegang etwa eine bis anderthalb Stunden.\n\nZum Schutz der Felsnadel dürfen Boote nicht nah an Koh Tapu heranfahren, und Klettern ist nicht erlaubt; das schönste Foto gelingt oft vom Boot aus mit etwas Abstand. Die Bucht ist meist ruhig und die Wege an Land sind kurz, deshalb ist die Tour auch mit Kindern gut machbar. Im Preis enthalten sind Wasser, Softdrinks, Obst, Zeit zum Schwimmen und Entspannen und der Hotel-Transfer. Sie fahren in einem weißen Hardtop-Kabinenboot für höchstens fünf Gäste, der Preis gilt pro Boot, die Tour dauert acht Stunden.",
      en: "The needle-shaped rock Koh Tapu off Khao Phing Kan is one of Thailand's most famous sights, known since the 1974 Bond film “The Man with the Golden Gun”. Most groups arrive there when it is busiest. We run the route in reverse: we leave Ao Nang at 8 am, explore the mangrove coast first, then visit the floating village of Koh Panyee, a village on stilts, and reach James Bond Island in the afternoon when it gets quieter. By speedboat the ride from Ao Nang takes roughly one to one and a half hours, depending on route and sea.\n\nTo protect the rock needle, boats may not go close to Koh Tapu and climbing is not allowed; the best photo often comes from the boat with a little distance. The bay is mostly calm and the walks on land are short, so the tour works well with children too. Included are water, soft drinks, fruit, time to swim and relax and the hotel transfer. You travel in a white hardtop cabin boat for a maximum of five guests, the price is per boat and the tour takes eight hours.",
    },
    audience: {
      de: "Für Familien, Paare und Filmfans, die den Klassiker der Phang Nga Bucht sehen, aber nicht in der Schlange stehen möchten. Die Tour ist ein ruhiger Ganztag mit kurzen Wegen an Land.",
      en: "For families, couples and film fans who want to see the classic of Phang Nga Bay without standing in a queue. The tour is a relaxed full day with short walks on land.",
    },
    faq: [
      {
        q: { de: "Wie lange dauert die Fahrt von Krabi zu James Bond Island?", en: "How long does it take from Krabi to James Bond Island?" },
        a: {
          de: "Mit dem Speedboat ab Ao Nang je nach Route und Seegang etwa eine bis anderthalb Stunden.",
          en: "By speedboat from Ao Nang roughly one to one and a half hours, depending on route and sea.",
        },
      },
      {
        q: { de: "Kann man auf Koh Tapu klettern oder nah heranfahren?", en: "Can you climb Koh Tapu or get close to it?" },
        a: {
          de: "Nein. Zum Schutz der Felsnadel dürfen Boote nicht nah heranfahren, und Klettern ist nicht erlaubt.",
          en: "No. To protect the rock needle, boats may not go close and climbing is not allowed.",
        },
      },
      {
        q: { de: "Wie umgehen Sie den Andrang an James Bond Island?", en: "How do you avoid the crowds at James Bond Island?" },
        a: {
          de: "Wir fahren die Route entgegen der Gruppenroute: zuerst Mangrovenküste und Koh Panyee, am Nachmittag James Bond Island, wenn es ruhig wird.",
          en: "We run the route in reverse: mangrove coast and Koh Panyee first, James Bond Island in the afternoon when it gets quiet.",
        },
      },
      {
        q: { de: "Ist die Tour für Kinder geeignet?", en: "Is the trip suitable for children?" },
        a: {
          de: "Ja. Die Bucht ist meist ruhig, die Wege an Land sind kurz, und das Stelzendorf begeistert viele Kinder.",
          en: "Yes. The bay is mostly calm, the walks on land are short, and many children love the stilt village.",
        },
      },
    ],
    related: ["phang-nga-uncharted", "family-sandbars", "phi-phi-early-bird"],
  },
};
