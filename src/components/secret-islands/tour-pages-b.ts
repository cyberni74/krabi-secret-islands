import type { TourPageContent } from "./tour-pages";

/**
 * Landing-page copy for the tours, part 2 (half-day, sunset, family and fishing tours).
 * Same fact discipline as part 1: only what TOURS (content.ts) and the Insider Guide articles state.
 */
export const TOUR_PAGES_B: Record<string, TourPageContent> = {
  "railay-escape": {
    title: { de: "Railay & Phra Nang Bootstour privat: Halbtagestour", en: "Private Railay & Phra Nang Tour from Ao Nang by Speedboat" },
    description: {
      de: "Railay und Phra Nang privat per Speedboat ab Ao Nang: 4 Stunden mit Höhle, Kletterfelsen und Badestopp an Koh Poda. Flexible Startzeit, max. 5 Gäste.",
      en: "Railay and Phra Nang privately by speedboat from Ao Nang: 4 hours with the cave, climbing cliffs and a swim stop at Koh Poda. Flexible start, max. 5 guests.",
    },
    h1: { de: "Railay & Phra Nang Half-Day Escape: Halbtagestour privat", en: "Railay & Phra Nang Half-Day Escape: Private Half-Day Boat Tour" },
    intro: {
      de: "Railay ist keine Insel, sondern eine Halbtagsfahrt wert: Weil Felswände die Halbinsel von der Straße trennen, erreichen Sie Railay nur per Boot. Unsere Halbtagestour packt in vier Stunden die Highlights: die Kletterfelsen von Railay West, die Höhle von Phra Nang und einen Badestopp an Koh Poda. Die Startzeit ist flexibel; Sie können am Vormittag, am Mittag oder zum Sonnenuntergang starten. Das macht die Tour zum idealen Einstieg oder zur Lösung für den Anreisetag.\n\nPhra Nang ist am leersten früh am Morgen und am späten Nachmittag, zwischen späterem Vormittag und frühem Nachmittag kommen die meisten Tourboote. Mit einem privaten Boot legen Sie Ihren Start selbst nach diesem Rhythmus. Der Weg zur Phra Nang Lagoon ist steil, teils an Seilen und bei Nässe rutschig; er ist für kleine Kinder und nach Regen nicht empfehlenswert. Am Strand genügt es dagegen, einfach anzukommen und zu baden. Im Preis enthalten sind Wasser, Softdrinks und Obst, kostenloses Schnorchel-Equipment (bei der Buchung ankreuzen), Zeit zum Schnorcheln, Schwimmen und Entspannen sowie der Hotel-Transfer. Das Boot ist ein weißes Hardtop-Kabinenboot für höchstens fünf Gäste, der Preis gilt pro Boot.",
      en: "Railay is not an island, but it is worth a half-day trip: because rock walls separate the peninsula from the road, you can only reach Railay by boat. Our half-day tour packs the highlights into four hours: Railay's climbing cliffs, the Phra Nang cave and a swim stop at Koh Poda. The start time is flexible; you can leave in the morning, at midday or for the sunset. That makes the tour an ideal first taste or the answer for your arrival day.\n\nPhra Nang is emptiest early in the morning and in the late afternoon, and most tour boats arrive between late morning and early afternoon. With a private boat you set your start time around that rhythm. The trail to Phra Nang Lagoon is steep, partly on ropes and slippery when wet; it is not recommended for small children or after rain. On the beach, by contrast, you simply arrive and swim. Included are water, soft drinks and fruit, free snorkel gear (tick it when booking), time to snorkel, swim and relax and the hotel transfer. The boat is a white hardtop cabin boat for a maximum of five guests, and the price is per boat.",
    },
    audience: {
      de: "Für Familien mit Kindern, Paare und alle, die nur einen halben Tag Zeit haben oder die Tour zum Einstieg in einen Krabi-Urlaub nutzen. Wer zusätzlich zur Bootstour klettern oder wandern will, plant dafür einen eigenen Tag ein.",
      en: "For families with children, couples and anyone who only has half a day or wants to use the tour as an introduction to a Krabi holiday. If you also want to climb or hike, plan a separate day for that.",
    },
    faq: [
      {
        q: { de: "Ist Railay eine Insel?", en: "Is Railay an island?" },
        a: {
          de: "Nein, Railay ist eine Halbinsel. Wegen der Felswände gibt es aber keine Straßenverbindung, daher erreichen Sie Railay nur per Boot.",
          en: "No, Railay is a peninsula. Because of the rock walls there is no road connection, so you can only reach Railay by boat.",
        },
      },
      {
        q: { de: "Wann ist Phra Nang Beach am leersten?", en: "When is Phra Nang Beach least crowded?" },
        a: {
          de: "Früh am Morgen und am späten Nachmittag. Zwischen späterem Vormittag und frühem Nachmittag kommen die meisten Tourboote. Bei dieser Tour wählen Sie die Startzeit flexibel.",
          en: "Early in the morning and in the late afternoon. Most tour boats arrive between late morning and early afternoon. On this tour you choose the start time flexibly.",
        },
      },
      {
        q: { de: "Ist der Weg zur Phra Nang Lagoon gefährlich?", en: "Is the trail to Phra Nang Lagoon dangerous?" },
        a: {
          de: "Er ist steil, teils an Seilen und bei Nässe rutschig. Für geübte, trittsichere Wanderer ist er machbar, für kleine Kinder und nach Regen nicht empfehlenswert.",
          en: "It is steep, partly on ropes and slippery when wet. It is doable for experienced, sure-footed hikers, but not recommended for small children or after rain.",
        },
      },
      {
        q: { de: "Zu welchen Zeiten kann die Halbtagestour starten?", en: "At what times can the half-day tour start?" },
        a: {
          de: "Möglich sind ein früher Start, ein Start am Mittag oder zum Sonnenuntergang; die Startzeiten finden Sie im Abschnitt „Ablauf“. Nennen Sie Ihren Wunsch in der Anfrage.",
          en: "An early start, a midday start or a sunset start are possible; you find the start times in the “Itinerary” section. Tell us your wish in the inquiry.",
        },
      },
    ],
    related: ["family-sandbars", "4islands-sunset", "sunset-dinner"],
  },

  "sunset-dinner": {
    title: { de: "Sunset Dinner Krabi: Romantische Bootstour privat", en: "Private Sunset Dinner Tour from Ao Nang by Speedboat" },
    description: {
      de: "Sunset Dinner an Bord in Krabi: Champagner zum Sonnenuntergang, 3-Gänge-Dinner vor Phra Nang. Private Bootstour für Paare ab Ao Nang, 4 Stunden ab 15:30 Uhr.",
      en: "Sunset dinner on board in Krabi: champagne at sunset and a 3-course dinner off Phra Nang. Private boat tour for couples from Ao Nang, 4 hours from 3:30 pm.",
    },
    h1: { de: "Sunset Romance & Dinner an Bord: Candle-Light-Dinner auf dem Meer", en: "Sunset Romance & Dinner on Board: Candle-Light Dinner at Sea" },
    intro: {
      de: "Das ist die romantischste Art, Krabi zu erleben, und sie ist bewusst klein gehalten: ein privates Boot, zwei oder bis zu fünf Gäste, kein Gedränge. Wir starten um 15:30 Uhr ab Ao Nang und fahren nach Koh Poda und in die Phra Nang Bay. Dort ankern wir vor den Kalksteinfelsen, die zum Sonnenuntergang als Silhouetten stehen, öffnen die im Preis enthaltene Flasche Champagner und servieren ein 3-Gänge-Dinner. Der Sonnenuntergang liegt grob zwischen 18 und 19 Uhr, danach wird es in den Tropen schnell dunkel, das Dinner findet unter Sternen statt.\n\nDie Tour ist laut Beschreibung perfekt für Anträge und Jahrestage. Schreiben Sie uns den Anlass in der Anfrage, damit wir den Ablauf mit Ihnen abstimmen. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS; Sitzbank, bequeme Bootssessel und das Heck-Cockpit bieten den Rahmen für den Abend, das Hardtop spendet am Nachmittag Schatten. Im Preis enthalten sind außerdem Zeit zum Schwimmen und Entspannen und der Hotel-Transfer in Ao Nang/Krabi. Der Preis gilt pro Boot, nicht pro Person, die Tour dauert vier Stunden.",
      en: "This is the most romantic way to experience Krabi, and it is deliberately kept small: a private boat, two or up to five guests, no crowds. We leave Ao Nang at 3:30 pm and head for Koh Poda and Phra Nang Bay. There we anchor in front of the limestone cliffs that stand as silhouettes at sunset, open the bottle of champagne included in the price and serve a 3-course dinner. Sunset falls roughly between 6 and 7 pm, and after that it gets dark quickly in the tropics, so dinner is served under the stars.\n\nAccording to the description the tour is perfect for proposals and anniversaries. Tell us the occasion in the inquiry so that we can agree the details with you. The boat is a white hardtop cabin boat with twin 300 hp engines; the bench seat, comfortable boat chairs and the rear cockpit set the scene for the evening, and the hardtop gives shade in the afternoon. Also included are time to swim and relax and the hotel transfer in Ao Nang/Krabi. The price is per boat, not per person, and the tour takes four hours.",
    },
    audience: {
      de: "Für Paare, Flitterwöchler und alle, die einen Jahrestag oder Antrag feiern. Auch kleine Gruppen bis fünf Gäste können den Abend teilen, der Preis bleibt pro Boot.",
      en: "For couples, honeymooners and anyone celebrating an anniversary or proposal. Small groups of up to five guests can also share the evening, and the price stays per boat.",
    },
    faq: [
      {
        q: { de: "Kann ich auf dem Boot einen Heiratsantrag machen?", en: "Can I propose to my partner on the boat?" },
        a: {
          de: "Die Tour ist laut Beschreibung für Anträge und Jahrestage gedacht. Schreiben Sie uns den Anlass in der Anfrage, dann stimmen wir den Ablauf mit Ihnen ab.",
          en: "According to the description the tour is meant for proposals and anniversaries. Tell us the occasion in the inquiry and we will agree the details with you.",
        },
      },
      {
        q: { de: "Was gehört zum Dinner an Bord?", en: "What does the dinner on board include?" },
        a: {
          de: "Im Preis enthalten sind eine Flasche Champagner und ein 3-Gänge-Dinner. Eine Wunschliste zu Speisen besprechen wir bei der Anfrage.",
          en: "The price includes a bottle of champagne and a 3-course dinner. We discuss any wishes about the food when you inquire.",
        },
      },
      {
        q: { de: "Wann geht die Sonne in Krabi unter?", en: "When does the sun set in Krabi?" },
        a: {
          de: "Grob zwischen 18 und 19 Uhr; im Winterhalbjahr eher früher, in den Sommermonaten eher später. Die Tour startet um 15:30 Uhr und dauert vier Stunden.",
          en: "Roughly between 6 and 7 pm; earlier in the winter months, later in summer. The tour starts at 3:30 pm and takes four hours.",
        },
      },
      {
        q: { de: "Wo sieht man in Krabi den schönsten Sonnenuntergang?", en: "Where is the best sunset in Krabi?" },
        a: {
          de: "Beliebt sind Ao Nang, Railay West und die Bucht vor Phra Nang mit ihren Kalksteinfelsen. Vom Wasser aus sehen Sie die Felsen als Silhouetten und sind vom Strandtrubel getrennt. Welcher Platz am besten ist, hängt von Jahreszeit, Wolken und Gezeiten ab.",
          en: "Popular spots are Ao Nang, Railay West and the bay off Phra Nang with its limestone cliffs. From the water you see the cliffs as silhouettes, away from the beach bustle. Which spot is best depends on season, clouds and tides.",
        },
      },
    ],
    related: ["sunset-glow-combo", "plankton-night", "4islands-sunset"],
  },

  "family-sandbars": {
    title: { de: "Familien-Bootstour Krabi privat: Sandbänke & Inseln", en: "Private Family Boat Tour from Ao Nang by Speedboat" },
    description: {
      de: "Familien-Bootstour in Krabi privat ab Ao Nang: Tup-Sandbank, Chicken Island und Koh Poda mit kurzen Fahrten, flachen Buchten und Schatten. Max. 5 Gäste.",
      en: "Private family boat tour in Krabi from Ao Nang: Tup sandbar, Chicken Island and Koh Poda with short rides, shallow bays and shade. Max. 5 guests, 6 hours.",
    },
    h1: { de: "Family Fun Day: Sandbänke und Inseln mit Kindern in Krabi", en: "Family Fun Day: Sandbars and Islands with Kids in Krabi" },
    intro: {
      de: "Mit Kindern zählt vor allem, dass der Tag nach Ihrem Rhythmus läuft. Der Family Fun Day verbindet die Tup-Sandbank, Chicken Island und Koh Poda, alles Ziele mit kurzer Anfahrt, flachem Wasser und viel zu entdecken. Die Tour dauert sechs Stunden und startet morgens um 09:00 Uhr oder am Mittag. Wir wählen Buchten mit flachem Einstieg und planen Pausen nach Ihrem Tempo, ohne Gruppenzeitplan.\n\nDie vorgeschriebenen Schwimmwesten sind an Bord, auch in Kindergrößen. Nennen Sie uns bei der Buchung Alter und Größe der Kinder, damit die passenden Westen bereitliegen. Schnorchelmasken stellen wir kostenlos zur Verfügung, bitte ebenfalls bei der Buchung ankreuzen. Die Tup-Sandbank ist bei Ebbe flach und kinderfreundlich; Wasserschuhe, Sonnenschutz und ein Auge auf die steigende Flut sind wichtig. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren, Sitzbank, bequemen Bootssesseln und stabiler Einstiegsleiter; das Hardtop spendet Schatten. Wasser, Softdrinks, Obst und der Hotel-Transfer sind inklusive. Es sind maximal fünf Gäste an Bord, der Preis gilt pro Boot, nicht pro Person.",
      en: "With children what matters most is that the day runs to your rhythm. The Family Fun Day combines the Tup sandbar, Chicken Island and Koh Poda, all destinations with a short ride, shallow water and plenty to discover. The tour takes six hours and starts at 9 am or at midday. We choose bays with a shallow entry and plan breaks at your pace, with no group schedule.\n\nThe mandatory life jackets are on board, including kids' sizes. Tell us the children's age and size when booking so that the right vests are ready. We provide snorkel masks free of charge, please also tick them when booking. At low tide the Tup sandbar is shallow and child-friendly; water shoes, sun protection and an eye on the rising tide matter. The boat is a white hardtop cabin boat with twin engines, a bench seat, comfortable boat chairs and a sturdy boarding ladder; the hardtop gives shade. Water, soft drinks, fruit and the hotel transfer are included. A maximum of five guests are on board, and the price is per boat, not per person.",
    },
    audience: {
      de: "Für Familien mit Kindern, die kurze Fahrten, flaches Wasser und Schatten wollen. Kurze Fahrten in die Poda-Gruppe sind mit passender Schwimmweste schon mit kleinen Kindern machbar; für Koh Rok oder Koh Roi sind Kinder eher älter und sichere Schwimmer.",
      en: "For families with children who want short rides, shallow water and shade. Short trips to the Poda group are doable with small children when they wear a suitable life jacket; for Koh Rok or Koh Roi, children should be older and confident swimmers.",
    },
    faq: [
      {
        q: { de: "Gibt es Kinderschwimmwesten an Bord?", en: "Are there children's life jackets on board?" },
        a: {
          de: "Ja. Teilen Sie uns bei der Buchung Alter und Größe der Kinder mit, damit die passenden Westen bereitliegen.",
          en: "Yes. Tell us the children's age and size when booking so that the right vests are ready.",
        },
      },
      {
        q: { de: "Ist die Tup-Sandbank für Kinder geeignet?", en: "Is the Tup sandbar suitable for children?" },
        a: {
          de: "Ja, das flache Wasser ist ideal. Wasserschuhe, Sonnenschutz und ein Auge auf die steigende Flut sind aber wichtig. Wann die Sandbank begehbar ist, hängt vom Niedrigwasser ab.",
          en: "Yes, the shallow water is ideal. Water shoes, sun protection and an eye on the rising tide matter, though. When the sandbar can be walked depends on low water.",
        },
      },
      {
        q: { de: "Ab welchem Alter sind Bootstouren sinnvoll?", en: "From what age do boat trips make sense?" },
        a: {
          de: "Kurze Fahrten in die Poda-Gruppe sind mit passender Schwimmweste schon mit kleinen Kindern machbar. Lange Fahrten wie nach Koh Rok passen eher für ältere Kinder.",
          en: "Short trips to the Poda group are doable with small children and a suitable life jacket. Long rides such as to Koh Rok suit older children better.",
        },
      },
      {
        q: { de: "Gibt es Schatten an Bord?", en: "Is there shade on board?" },
        a: {
          de: "Ja, das Hardtop der Kabine spendet Schatten. Sitzbank und bequeme Bootssessel sind unter dem Dach.",
          en: "Yes, the hardtop of the cabin gives shade. The bench seat and comfortable boat chairs are under the roof.",
        },
      },
    ],
    related: ["railay-escape", "fishing-reef-half", "4islands-sunset"],
  },

  "fishing-reef-half": {
    title: { de: "Angeln Krabi: Riff-Angeltour halbtags privat", en: "Private Reef Fishing Tour from Ao Nang by Speedboat" },
    description: {
      de: "Angeltour in Krabi halbtags und privat ab Ao Nang: Riff-Angeln auf Zackenbarsch, Snapper und Makrele, inkl. Ruten, Köder und Guide. Max. 5 Gäste, 4 Stunden.",
      en: "Private half-day fishing trip in Krabi from Ao Nang: reef fishing for grouper, snapper and mackerel, rods, bait and guide included. Max. 5 guests, 4 hours.",
    },
    h1: { de: "Riff-Angeln halbtags: Angeltour ab Ao Nang für Einsteiger und Familien", en: "Half-Day Reef Fishing: Fishing Trip from Ao Nang for Beginners and Families" },
    intro: {
      de: "Die Riff-Angeltour ist der unkomplizierte Einstieg ins Angeln vor Krabi. Gefischt wird an fischreichen Riffen, laut Tourbeschreibung keine 30 Minuten vom Hafen entfernt, mit Bottom-Fishing und leichtem Jiggen. Typische Fänge sind Zackenbarsch, Snapper und Makrele, garantieren kann einen Fang allerdings niemand. Ihre Stopps sind Koh Yawasam und das Koh-Dam-Riff. Die Tour dauert vier Stunden, die Startzeit ist flexibel (morgens oder mittags), sodass Sie sie in Ihren Urlaubsrhythmus einpassen können.\n\nSie brauchen keine Angelerfahrung: Ausrüstung und Anleitung stellt die Crew, unser Guide zeigt Ihnen jeden Handgriff. Im Preis enthalten sind Angelruten, Köder und Guide, ein Badestopp zum Schwimmen und Abkühlen, Wasser, Softdrinks und Obst sowie der Hotel-Transfer in Ao Nang/Krabi. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS, Sitzbank und bequemen Bootssesseln für höchstens fünf Gäste; das Hardtop spendet Schatten, das Heck-Cockpit bietet Platz zum Angeln. Der Preis gilt pro Boot, nicht pro Person. Wer lieber eine Mahlzeit aus dem Fang möchte, findet die Catch-&-Cook-Tour unter den verwandten Touren.",
      en: "The reef fishing trip is the uncomplicated introduction to fishing off Krabi. You fish rich reefs, according to the tour description less than 30 minutes from the pier, with bottom fishing and light jigging. Typical catches are grouper, snapper and mackerel, though nobody can guarantee a catch. Your stops are Koh Yawasam and the Koh Dam reef. The tour takes four hours, and the start time is flexible (morning or midday) so you can fit it into your holiday rhythm.\n\nYou do not need any fishing experience: the crew provides gear and instruction, and our guide shows you every move. Included are fishing rods, bait and guide, a swim stop to cool off, water, soft drinks and fruit and the hotel transfer in Ao Nang/Krabi. The boat is a white hardtop cabin boat with twin 300 hp engines, a bench seat and comfortable boat chairs for a maximum of five guests; the hardtop gives shade, and the rear cockpit offers room for fishing. The price is per boat, not per person. If you would rather have a meal from your catch, you find the Catch & Cook tour under the related tours.",
    },
    audience: {
      de: "Für Einsteiger, Familien mit Kindern und alle, die einen kurzen, entspannten Angelvormittag suchen. Riff- und Tintenfischangeln gelten als besonders einsteigerfreundlich, Halbtagestouren passen mit Kindern meist am besten.",
      en: "For beginners, families with children and anyone looking for a short, relaxed fishing morning. Reef and squid fishing are especially beginner-friendly, and half-day tours usually suit children best.",
    },
    faq: [
      {
        q: { de: "Brauche ich Angelerfahrung?", en: "Do I need fishing experience?" },
        a: {
          de: "Nein. Ausrüstung und Anleitung stellt die Crew, unser Guide zeigt Ihnen jeden Handgriff. Riffangeln ist besonders einsteigerfreundlich.",
          en: "No. The crew provides gear and instruction, and our guide shows you every move. Reef fishing is especially beginner-friendly.",
        },
      },
      {
        q: { de: "Welche Fische kann man beim Riff-Angeln fangen?", en: "Which fish can you catch when reef fishing?" },
        a: {
          de: "Laut Tourbeschreibung sind Zackenbarsch, Snapper und Makrele typisch. Ob und was beißt, kann niemand garantieren.",
          en: "According to the tour description, grouper, snapper and mackerel are typical. Nobody can guarantee whether and what will bite.",
        },
      },
      {
        q: { de: "Ist Angeln für Kinder geeignet?", en: "Is fishing suitable for children?" },
        a: {
          de: "Ja, vor allem Riff- und Tintenfischangeln. Kurze Halbtagestouren wie diese passen mit Kindern meist am besten.",
          en: "Yes, especially reef and squid fishing. Short half-day tours like this one usually suit children best.",
        },
      },
      {
        q: { de: "Wie weit ist das Riff vom Hafen entfernt?", en: "How far is the reef from the pier?" },
        a: {
          de: "Laut Tourbeschreibung liegen die fischreichen Riffe keine 30 Minuten vom Hafen entfernt. Ihre Stopps sind Koh Yawasam und das Koh-Dam-Riff.",
          en: "According to the tour description, the rich reefs are less than 30 minutes from the pier. Your stops are Koh Yawasam and the Koh Dam reef.",
        },
      },
    ],
    related: ["fishing-night-squid", "fishing-catch-cook", "family-sandbars"],
  },

  "fishing-deep-sea": {
    title: { de: "Hochseeangeln Krabi: Deep-Sea-Tour privat ab Ao Nang", en: "Private Deep Sea Fishing Tour from Ao Nang by Speedboat" },
    description: {
      de: "Hochseeangeln ab Ao Nang ganztags und privat: Trolling auf Königsmakrele, Barrakuda und Thun an Phi Phis Außenriffen. Thai-Lunch, Profi-Ausrüstung, 5 Gäste.",
      en: "Private full-day deep sea fishing from Ao Nang: trolling for king mackerel, barracuda and tuna on Phi Phi's outer reefs. Thai lunch, pro gear, max. 5 guests.",
    },
    h1: { de: "Deep Sea & Trolling Ganztags: Big-Game-Angeln in der Andamanensee", en: "Full-Day Deep Sea & Trolling: Big-Game Fishing in the Andaman Sea" },
    intro: {
      de: "Diese Ganztagestour ist für alle, die in der Andamanensee auf größere Fische angeln wollen. Mit Trolling-Ausrüstung und Popping-Ruten fahren wir zu den Außenriffen von Phi Phi, zu Hin Klang und entlang der Trolling-Route. Als Zielfische nennt die Tourbeschreibung Königsmakrele, Barrakuda und Thun; ob und was anbeißt, kann niemand garantieren. Wir starten um 07:00 Uhr ab Ao Nang, die Tour dauert neun Stunden, genug Zeit, ohne dass Sie nach der Uhr angeln müssen.\n\nIm Preis enthalten sind Profi-Trolling-Ausrüstung, Angelruten, Köder und Guide, ein Badestopp zum Schwimmen und Abkühlen, ein Thai-Lunch an Bord und der Hotel-Transfer in Ao Nang/Krabi. Sie entscheiden, ob Sie Catch & Release angeln oder Ihren Fang mitnehmen, dann freut sich Ihr Hotelkoch. Der Tag findet auf offenem Wasser statt, das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS, Sitzbank, bequemen Bootssesseln und Heck-Cockpit für die Ruten; das Hardtop spendet Schatten. Es sind höchstens fünf Gäste an Bord, der Preis gilt pro Boot. Bei Sturmwarnung verschieben wir kostenlos auf einen anderen Tag oder erstatten 100 %.",
      en: "This full-day tour is for everyone who wants to fish for bigger fish in the Andaman Sea. With trolling gear and popping rods we head to Phi Phi's outer reefs, to Hin Klang and along the trolling route. The tour description names king mackerel, barracuda and tuna as target fish; nobody can guarantee whether and what bites. We leave Ao Nang at 7 am, and the tour takes nine hours, enough time that you do not have to fish by the clock.\n\nIncluded are pro trolling gear, fishing rods, bait and guide, a swim stop to cool off, a Thai lunch on board and the hotel transfer in Ao Nang/Krabi. You decide whether to catch and release or to take your catch with you, and your hotel chef will be delighted. The day takes place on open water, and the boat is a white hardtop cabin boat with twin 300 hp engines, a bench seat, comfortable boat chairs and a rear cockpit for the rods; the hardtop gives shade. A maximum of five guests are on board, and the price is per boat. With a storm warning we reschedule free of charge or refund 100%.",
    },
    audience: {
      de: "Für Angler und sportlich interessierte Gäste, die einen langen Tag auf offenem Wasser mögen. Mit Erfahrung oder ohne: Ausrüstung und Anleitung stellt die Crew. Für kleine Kinder ist ein neunstündiger Tag auf See eher lang.",
      en: "For anglers and sporty guests who like a long day on open water. With experience or without: the crew provides gear and instruction. For small children a nine-hour day at sea is rather long.",
    },
    faq: [
      {
        q: { de: "Welche Fische sind beim Deep-Sea-Angeln das Ziel?", en: "Which fish do you target on the deep sea trip?" },
        a: {
          de: "Laut Tourbeschreibung Königsmakrele, Barrakuda und Thun. Einen Fang kann niemand garantieren.",
          en: "According to the tour description, king mackerel, barracuda and tuna. Nobody can guarantee a catch.",
        },
      },
      {
        q: { de: "Kann ich meinen Fang mitnehmen?", en: "Can I take my catch home?" },
        a: {
          de: "Ja. Sie können Catch & Release angeln oder Ihren Fang mitnehmen, so die Tourbeschreibung.",
          en: "Yes. You can catch and release or take your catch with you, as the tour description says.",
        },
      },
      {
        q: { de: "Brauche ich Angelerfahrung?", en: "Do I need fishing experience?" },
        a: {
          de: "Nein. Profi-Trolling-Ausrüstung, Ruten, Köder und Guide gehören zur Tour, die Crew zeigt Ihnen, was zu tun ist.",
          en: "No. Pro trolling gear, rods, bait and guide are part of the tour, and the crew shows you what to do.",
        },
      },
      {
        q: { de: "Ist Verpflegung an Bord dabei?", en: "Is food provided on board?" },
        a: {
          de: "Ja, ein Thai-Lunch an Bord ist im Tourpreis enthalten. Bitte nennen Sie uns Unverträglichkeiten in der Anfrage.",
          en: "Yes, a Thai lunch on board is included in the tour price. Please tell us about any food intolerances in the inquiry.",
        },
      },
    ],
    related: ["fishing-reef-half", "fishing-catch-cook", "fishing-night-squid"],
  },

  "fishing-night-squid": {
    title: { de: "Tintenfisch angeln Krabi: Nachttour privat ab Ao Nang", en: "Private Night Squid Fishing Tour from Ao Nang by Speedboat" },
    description: {
      de: "Nacht-Tintenfischangeln in Krabi privat ab 18:00 Uhr: Handleinen unter grünen Lampen, Fang wird an Bord gegrillt. Ruten, Köder, Guide inklusive, max. 5 Gäste.",
      en: "Private night squid fishing in Krabi from 6 pm: hand lines under green lamps, your catch grilled on board. Rods, bait, guide included, max. 5 guests, 4 hours.",
    },
    h1: { de: "Nacht-Tintenfischangeln: Thai-Tradition unter Lampen auf dem Meer", en: "Night Squid Fishing: a Thai Tradition Under Lamps at Sea" },
    intro: {
      de: "Tintenfischangeln bei Nacht ist eine Thai-Tradition zum Mitmachen, und sie ist vor allem eines: einfach. Wir starten um 18:00 Uhr ab Ao Nang und fahren in die Ao Nang Bay. Sobald es dunkel wird, locken grüne Lampen die Tintenfische an. Mit einfachen Handleinen fangen Sie Ihr Abendessen, das wir direkt an Bord für Sie grillen. Die Tour dauert vier Stunden und ist damit ein kompakter Abend, der sich gut an einen Strandtag anschließt.\n\nSie brauchen keine Vorkenntnisse; Angelruten, Köder und Guide sind im Preis enthalten, ebenso die Zubereitung Ihres Fangs, Wasser, Softdrinks, Obst und der Hotel-Transfer in Ao Nang/Krabi. Tintenfisch- und Riffangeln gelten als besonders einsteigerfreundlich und eignen sich auch für Kinder. Einen Fang kann niemand garantieren; die Tour ist deshalb als Abend auf dem Wasser gedacht, bei dem Sie ausprobieren, wie viel das Meer an diesem Tag hergibt. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS, Sitzbank, bequemen Bootssesseln und Heck-Cockpit zum Angeln für höchstens fünf Gäste. Der Preis gilt pro Boot, nicht pro Person.",
      en: "Night squid fishing is a Thai tradition you can join, and above all it is simple. We leave Ao Nang at 6 pm and head into Ao Nang Bay. As soon as it gets dark, green lamps attract the squid. With simple hand lines you catch your dinner, which we grill for you right on board. The tour takes four hours, a compact evening that follows a beach day well.\n\nYou need no prior knowledge; fishing rods, bait and guide are included in the price, as are the preparation of your catch, water, soft drinks, fruit and the hotel transfer in Ao Nang/Krabi. Squid and reef fishing are considered especially beginner-friendly and also suit children. Nobody can guarantee a catch, so the tour is meant as an evening on the water where you try out how much the sea gives that day. The boat is a white hardtop cabin boat with twin 300 hp engines, a bench seat, comfortable boat chairs and a rear cockpit for fishing, for a maximum of five guests. The price is per boat, not per person.",
    },
    audience: {
      de: "Für Familien, Paare und neugierige Einsteiger, die abends etwas Besonderes auf dem Wasser erleben möchten. Kinder sind meist begeistert, wenn die Lampen die Tintenfische anlocken.",
      en: "For families, couples and curious beginners who want to experience something special on the water in the evening. Children are usually thrilled when the lamps attract the squid.",
    },
    faq: [
      {
        q: { de: "Wie funktioniert das Tintenfischangeln bei Nacht?", en: "How does night squid fishing work?" },
        a: {
          de: "Wenn es dunkel wird, locken grüne Lampen die Tintenfische an. Mit einfachen Handleinen fangen Sie sie, Ruten, Köder und Guide gehören zur Tour.",
          en: "When it gets dark, green lamps attract the squid. You catch them with simple hand lines, and rods, bait and guide are part of the tour.",
        },
      },
      {
        q: { de: "Wird der Fang zubereitet?", en: "Is the catch cooked?" },
        a: {
          de: "Ja, wir grillen Ihren Fang direkt an Bord für Sie. Die Zubereitung ist Teil der Leistung.",
          en: "Yes, we grill your catch for you right on board. The preparation is part of the package.",
        },
      },
      {
        q: { de: "Brauche ich Angelerfahrung?", en: "Do I need fishing experience?" },
        a: {
          de: "Nein. Ausrüstung und Anleitung stellt die Crew. Tintenfisch- und Riffangeln sind besonders einsteigerfreundlich.",
          en: "No. The crew provides gear and instruction. Squid and reef fishing are especially beginner-friendly.",
        },
      },
      {
        q: { de: "Ist Angeln für Kinder geeignet?", en: "Is fishing suitable for children?" },
        a: {
          de: "Ja, vor allem Riff- und Tintenfischangeln. Die Tour dauert vier Stunden und startet um 18:00 Uhr.",
          en: "Yes, especially reef and squid fishing. The tour takes four hours and starts at 6 pm.",
        },
      },
    ],
    related: ["fishing-catch-cook", "fishing-reef-half", "plankton-night"],
  },

  "fishing-catch-cook": {
    title: { de: "Catch & Cook Krabi: Angeln und Sunset BBQ privat", en: "Private Catch & Cook Sunset BBQ Tour from Ao Nang by Speedboat" },
    description: {
      de: "Catch & Cook in Krabi: nachmittags angeln, abends Strand-BBQ zum Sonnenuntergang. Private Tour ab Ao Nang, 6 Stunden ab 13:00 Uhr, max. 5 Gäste.",
      en: "Catch & Cook in Krabi: fish in the afternoon, beach BBQ at sunset. Private tour from Ao Nang, 6 hours from 1 pm, max. 5 guests, price per boat.",
    },
    h1: { de: "Catch & Cook Sunset BBQ: Angeln am Nachmittag, Grillen am Strand", en: "Catch & Cook Sunset BBQ: Fishing in the Afternoon, Grilling on the Beach" },
    intro: {
      de: "Sie angeln, wir kochen: Diese Tour verbindet einen Angelnachmittag mit einem Abendessen am Strand. Wir starten um 13:00 Uhr ab Ao Nang und fischen am Koh-Dam-Riff; ein Badestopp zum Schwimmen und Abkühlen gehört dazu. Am Abend fahren wir zu einem privaten Strand, wo unsere Crew Ihren Fang mit Thai-Kräutern grillt, dazu Reis, Salate und Dips, während die Sonne hinter den Inseln versinkt. Speisefische können bei einer Catch-&-Cook-Tour direkt zubereitet werden, untermaßige Fische und nicht benötigte Arten werden zurückgesetzt.\n\nSie brauchen keine Angelerfahrung, denn Angelruten, Köder und Guide stellt die Crew. Einen Fang kann niemand garantieren, deshalb ist das Strand-BBQ mit Beilagen ein fester Bestandteil der Tour. Im Preis enthalten sind außerdem der Hotel-Transfer in Ao Nang/Krabi und der Badestopp. Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS, Sitzbank, bequemen Bootssesseln und Heck-Cockpit; das Hardtop spendet Schatten, und es sind höchstens fünf Gäste an Bord. Der Preis gilt pro Boot, nicht pro Person, die Tour dauert sechs Stunden. Der Sonnenuntergang liegt grob zwischen 18 und 19 Uhr, den Rest des Abends verbringen Sie am Strand.",
      en: "You fish, we cook: this tour combines a fishing afternoon with dinner on the beach. We leave Ao Nang at 1 pm and fish at the Koh Dam reef; a swim stop to cool off is part of the tour. In the evening we go to a private beach, where our crew grills your catch with Thai herbs, with rice, salads and dips, as the sun sinks behind the islands. Edible fish can be prepared right away on a catch-and-cook tour, and undersized fish and species you do not need are released.\n\nYou need no fishing experience, because the crew provides rods, bait and guide. Nobody can guarantee a catch, which is why the beach BBQ with sides is a fixed part of the tour. Also included are the hotel transfer in Ao Nang/Krabi and the swim stop. The boat is a white hardtop cabin boat with twin 300 hp engines, a bench seat, comfortable boat chairs and a rear cockpit; the hardtop gives shade, and a maximum of five guests are on board. The price is per boat, not per person, and the tour takes six hours. Sunset falls roughly between 6 and 7 pm, and you spend the rest of the evening on the beach.",
    },
    audience: {
      de: "Für Paare, Familien und Freundesgruppen, die gern selbst angeln und danach am Strand essen. Die Tour ist ein Erlebnis-Nachmittag mit Sonnenuntergang, nicht nur eine Angelfahrt.",
      en: "For couples, families and groups of friends who like to fish themselves and eat on the beach afterwards. The tour is an experience afternoon with a sunset, not just a fishing trip.",
    },
    faq: [
      {
        q: { de: "Was passiert mit dem Fang?", en: "What happens to the catch?" },
        a: {
          de: "Speisefische werden bei dieser Catch-&-Cook-Tour direkt am Strand für Sie gegrillt. Untermaßige Fische und nicht benötigte Arten werden zurückgesetzt.",
          en: "On this catch-and-cook tour, edible fish are grilled for you right on the beach. Undersized fish and species you do not need are released.",
        },
      },
      {
        q: { de: "Was gehört zum Strand-BBQ?", en: "What does the beach BBQ include?" },
        a: {
          de: "Die Crew grillt Ihren Fang mit Thai-Kräutern, dazu gibt es Reis, Salate und Dips. Das Strand-BBQ mit Beilagen ist im Preis enthalten.",
          en: "The crew grills your catch with Thai herbs, with rice, salads and dips. The beach BBQ with sides is included in the price.",
        },
      },
      {
        q: { de: "Brauche ich Angelerfahrung?", en: "Do I need fishing experience?" },
        a: {
          de: "Nein. Ausrüstung und Anleitung stellt die Crew. Ruten, Köder und Guide gehören zur Tour.",
          en: "No. The crew provides gear and instruction. Rods, bait and guide are part of the tour.",
        },
      },
      {
        q: { de: "Wann startet die Tour und wie lange dauert sie?", en: "When does the tour start and how long does it take?" },
        a: {
          de: "Die Tour startet um 13:00 Uhr und dauert sechs Stunden. Am Abend grillen wir am Strand, während die Sonne untergeht.",
          en: "The tour starts at 1 pm and takes six hours. In the evening we grill on the beach as the sun goes down.",
        },
      },
    ],
    related: ["fishing-night-squid", "fishing-reef-half", "sunset-dinner"],
  },
};
