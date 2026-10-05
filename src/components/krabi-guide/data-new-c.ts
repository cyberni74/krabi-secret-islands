import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles (batch C): Maya Bay status, boat tours in the rainy season, 3/5/7-day itinerary.
 * Fact policy: closure dates and park rules are phrased as "most recently announced" and must be re-checked;
 * no third-party prices, no cancellation rates; own prices come from TOURS in content.ts.
 */
export const NEW_ARTICLES_C: GuideArticleInput[] = [
  /* ───────────────────────── Maya Bay: open or closed ───────────────────────── */
  {
    slug: "maya-bay-open-closed-dates",
    category: "insider",
    short: { de: "Maya Bay: offen?", en: "Maya Bay open?" },
    primaryKeyword: "Ist Maya Bay offen",
    keywords: [
      "Ist Maya Bay offen",
      "is Maya Bay open",
      "Maya Bay Schließzeit",
      "Maya Bay Wiedereröffnung 1. Oktober",
      "Maya Bay Regeln Schwimmen",
      "Maya Bay Eintritt",
      "Maya Bay von Krabi aus",
      "Maya Bay closure dates",
      "Maya Bay reopening date",
      "what to do when Maya Bay is closed",
    ],
    title: {
      de: "Ist Maya Bay offen? Schließzeit, Regeln, Tipps",
      en: "Is Maya Bay Open? Closure Dates, Rules & Tips",
    },
    metaDescription: {
      de: "Maya Bay offen oder geschlossen? Schließzeit 1. Aug.–30. Sep., aktuelle Regeln, Anlegestelle und was Sie während der Sperre stattdessen tun können.",
      en: "Is Maya Bay open or closed? Annual closure 1 Aug to 30 Sep, current rules, the back-bay jetty and what to do instead while the bay is closed.",
    },
    h1: {
      de: "Ist Maya Bay offen? Schließzeit, Regeln und Tipps ab Krabi",
      en: "Is Maya Bay open? Closure dates, rules and tips from Krabi",
    },
    intro: {
      de: "Ist Maya Bay offen? Diese Frage stellen fast alle, die eine Phi-Phi-Tour planen – und die ehrliche Antwort lautet: Es kommt auf das Datum an. Die Bucht auf Koh Phi Phi Leh ist seit ihrer Wiedereröffnung im Jahr 2022 nicht mehr rund ums Jahr zugänglich. In den letzten Jahren wurde sie regelmäßig vom 1. August bis 30. September geschlossen und am 1. Oktober wieder geöffnet, damit sich Korallen, Strand und Riffhaie erholen können. Dazu kommen Regeln für den Besuch selbst: Anlegen an einem Steg auf der Rückseite, kein Schwimmen in der Bucht, begrenzte Aufenthaltsdauer. In diesem Guide ordnen wir ein, was feststeht, was sich ändern kann, wie Sie den aktuellen Stand prüfen und was Sie ab Krabi tun, wenn die Bucht gerade zu ist.",
      en: "Is Maya Bay open? Almost everyone planning a Phi Phi trip asks this, and the honest answer is: it depends on the date. Since reopening in 2022, the bay on Koh Phi Phi Leh is no longer accessible all year round. In recent years it has been closed every year from 1 August to 30 September and reopened on 1 October, so that coral, beach and reef sharks can recover. On top of that there are rules for the visit itself: docking at a jetty on the back side, no swimming in the bay and a limited length of stay. In this guide we sort out what is settled, what can change, how to check the current status and what to do from Krabi while the bay is closed.",
    },
    sections: [
      {
        h2: {
          de: "Status auf einen Blick: offen oder geschlossen?",
          en: "Status at a glance: open or closed?",
        },
        body: {
          de: [
            "Die kurze Faustregel: Außerhalb der jährlichen Erholungspause ist Maya Bay in der Regel für Besucher geöffnet, innerhalb dieser Pause nicht. Nach den zuletzt veröffentlichten Terminen fällt die Pause auf die Monate August und September, die Wiedereröffnung ist am 1. Oktober.",
            "Wichtig: Wir können Ihnen an dieser Stelle keinen tagesaktuellen Status garantieren. Die Nationalparkbehörde legt Zeiträume und Regeln fest und passt sie gelegentlich an. Termine und Regeln können sich von Jahr zu Jahr ändern, und kurzfristige Anpassungen sind nicht ausgeschlossen. Betrachten Sie die Angaben in diesem Artikel deshalb als Orientierung und prüfen Sie vor der Buchung den aktuellen Stand bei der Nationalparkbehörde oder bei Ihrem Veranstalter.",
            "Wenn Sie bei uns anfragen, nennen wir Ihnen den Stand, der zu Ihrem Reisedatum bekannt ist. Das Boot und der Kapitän sind dann ohnehin flexibel: Ist Maya Bay am Tag selbst nicht zugänglich, bleibt der Rest von Phi Phi trotzdem ein lohnendes Ziel (mehr dazu weiter unten).",
          ],
          en: [
            "The short rule of thumb: outside the annual recovery break, Maya Bay is usually open to visitors, and inside that break it is not. According to the most recently published dates, the break covers August and September, with reopening on 1 October.",
            "Important: we cannot guarantee a same-day status here. The national park authority sets periods and rules and adjusts them from time to time. Dates and rules can change from year to year, and short-notice adjustments cannot be ruled out. Treat the details in this article as orientation, and check the current status with the national park authority or your operator before you book.",
            "If you contact us, we will tell you the status known for your travel date. The boat and captain are flexible anyway: if Maya Bay is not accessible on the day, the rest of Phi Phi is still a rewarding destination (more on that below).",
          ],
        },
        tip: {
          de: "Stand dieses Artikels: zuletzt veröffentlichte Termine 1. August bis 30. September, Wiedereröffnung 1. Oktober. Prüfen Sie vor jeder Buchung, ob für Ihr Datum eine neue Mitteilung der Nationalparkbehörde vorliegt.",
          en: "Status of this article: most recently published dates 1 August to 30 September, reopening on 1 October. Before any booking, check whether the national park authority has issued a newer notice for your date.",
        },
      },
      {
        h2: {
          de: "Jährliche Schließzeit: 1. August bis 30. September",
          en: "Annual closure: 1 August to 30 September",
        },
        body: {
          de: [
            "Um die Geschichte kurz zu machen: Nach dem Film The Beach wurde Maya Bay zum Massenziel. Zeitweise kamen nach Berichten täglich mehrere tausend Besucher, Boote ankerten auf dem Riff. Im Juni 2018 wurde die Bucht geschlossen, danach auf unbestimmte Zeit verlängert und am 1. Januar 2022 mit strengen Regeln wieder geöffnet. Die ausführliche Geschichte finden Sie in unserem Guide zu den Film-Drehorten.",
            "Seit der Wiedereröffnung gibt es zusätzlich eine jährliche Pause. Sie liegt in den Monaten des Südwestmonsuns, wenn ohnehin weniger Boote fahren, und soll dem Ökosystem eine Ruhephase geben. Für die letzten Jahre wurde sie als 1. August bis 30. September angekündigt, mit Wiedereröffnung am 1. Oktober.",
            "Warum die Pause sinnvoll ist, sieht man in der Bucht: Korallenfragmente wurden gerettet und neu angepflanzt, und Schwarzspitzen-Riffhaie kehrten in die flachen Gewässer zurück. Dieser Erfolg hängt von Ruhezeiten ab. Wenn Sie in diesen Monaten kommen, ist das also keine Schikane, sondern Teil des Schutzkonzepts.",
          ],
          en: [
            "To keep the story short: after the film The Beach, Maya Bay became a mass-tourism target. At times, according to reports, several thousand visitors came per day, and boats anchored on the reef. In June 2018 the bay was closed, the closure was then extended indefinitely, and it reopened on 1 January 2022 under strict rules. You can read the full story in our guide to the film locations.",
            "Since the reopening there has also been an annual break. It falls in the months of the southwest monsoon, when fewer boats run anyway, and is meant to give the ecosystem a rest. For recent years it was announced as 1 August to 30 September, with reopening on 1 October.",
            "Why the break makes sense is visible in the bay: coral fragments were rescued and replanted, and blacktip reef sharks returned to the shallow water. That success depends on rest periods. So if you travel in these months, it is not harassment but part of the protection concept.",
          ],
        },
        list: {
          de: [
            "Zuletzt angekündigter Zeitraum: 1. August bis 30. September, Wiedereröffnung 1. Oktober",
            "Die Termine setzt die Nationalparkbehörde fest und kann sie ändern",
            "Bei Unwetter oder Pflegearbeiten sind auch kurzfristige Sperrungen möglich",
            "Prüfen Sie den Stand vor der Buchung – und noch einmal vor der Abreise",
          ],
          en: [
            "Most recently announced period: 1 August to 30 September, reopening on 1 October",
            "The dates are set by the national park authority and can change",
            "Short-notice closures are also possible during storms or maintenance work",
            "Check the status before booking – and again before you set off",
          ],
        },
      },
      {
        h2: {
          de: "Aktuelle Regeln: Steg, kein Schwimmen, begrenzte Zeit",
          en: "Current rules: jetty, no swimming, limited time",
        },
        body: {
          de: [
            "Wenn Maya Bay offen ist, gelten klare Regeln. Boote dürfen nicht mehr in die Bucht fahren. Stattdessen legen sie an einem Steg auf der Rückseite der Insel an, und Sie gehen von dort über einen kurzen Weg zur Bucht. Schwimmen in der Bucht ist nicht erlaubt, damit Korallen und Haie Ruhe haben. Das passt zu dem, was wir auch in unserem Phi-Phi-Guide beschreiben.",
            "Die Aufenthaltsdauer ist begrenzt, und auch die Zahl der gleichzeitigen Besucher wird gesteuert. Die genauen Zahlen unterscheiden sich je nach Quelle: Genannt werden etwa eine Stunde Aufenthalt und eine Quote von mehreren hundert Personen zur selben Zeit. Wir nennen bewusst keine exakten Werte, weil die Behörde sie anpassen kann. Verlassen Sie sich auf die Angaben vor Ort und die Hinweise Ihrer Crew.",
            "Weitere Regeln im Nationalpark sind schnell zusammengefasst: Nichts mitnehmen, nichts hinterlassen, Korallen und Tiere nicht berühren, Abstand zu den Haien halten und den Hinweisen der Rangers folgen. Riffschonende Sonnencreme ist gern gesehen.",
          ],
          en: [
            "When Maya Bay is open, clear rules apply. Boats may no longer enter the bay. Instead they dock at a jetty on the back side of the island, and you walk a short path to the bay from there. Swimming in the bay is not allowed, so that coral and sharks are left in peace. This matches what we describe in our Phi Phi guide.",
            "The length of stay is limited, and the number of simultaneous visitors is controlled too. The exact numbers differ by source: roughly one hour of stay and a quota of several hundred people at the same time are mentioned. We deliberately give no exact figures because the authority can adjust them. Rely on the information on site and the advice of your crew.",
            "Other national park rules are quickly summarised: take nothing, leave nothing, do not touch coral or animals, keep your distance from the sharks and follow the rangers’ instructions. Reef-safe sunscreen is welcome.",
          ],
        },
        tip: {
          de: "Baden Sie in der Pileh Lagoon statt in Maya Bay: Dort können Sie vom Boot ins Wasser, sofern die aktuellen Parkregeln es an dem Tag erlauben. Ihr Kapitän weiß, wie der Stand ist.",
          en: "Swim in Pileh Lagoon instead of Maya Bay: you can get into the water from the boat there, provided the current park rules allow it that day. Your captain knows the status.",
        },
      },
      {
        h2: {
          de: "Eintritt und Öffnungszeiten: was wir wissen und was nicht",
          en: "Entry fee and opening hours: what we know and what we do not",
        },
        body: {
          de: [
            "Für Maya Bay wird eine Gebühr für den Nationalpark erhoben. Gebühren und Regeln legt die Nationalparkbehörde fest, und sie können sich ändern.",
            "Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung.",
            "Zu den Öffnungszeiten: Maya Bay ist tagsüber zugänglich, genannt werden in Quellen meist Zeiten zwischen dem frühen Morgen und dem späten Nachmittag, teils 07:00 bis 18:00 Uhr. Eine verbindliche Uhrzeit können wir nicht zusagen, da sie sich ändern kann. Für Sie ist vor allem relevant: Je früher Sie ankommen, desto leerer ist es, und desto eher fällt der Besuch in eine ruhige Zeit.",
          ],
          en: [
            "A national park fee is charged for Maya Bay. Fees and rules are set by the national park authority and can change.",
            "Whether and how much of an entrance fee applies at your destination, you will learn when booking.",
            "On opening hours: Maya Bay is accessible during the day, and sources mostly mention times between early morning and late afternoon, partly 7 am to 6 pm. We cannot promise a binding time because it can change. What matters most for you: the earlier you arrive, the emptier it is, and the more likely your visit falls into a calm time.",
          ],
        },
      },
      {
        h2: {
          de: "Maya Bay ab Krabi: Fahrzeit und warum früh morgens",
          en: "Maya Bay from Krabi: travel time and why early morning",
        },
        body: {
          de: [
            "Ja, Maya Bay lässt sich ab Krabi besuchen, und zwar als Tagestour ab Ao Nang. Mit dem Speedboat dauert die Überfahrt bei ruhiger See etwa 45 bis 60 Minuten, mit Fähren oder langsameren Booten länger. Maya Bay gehört zur Provinz Krabi, die Fahrt führt also nicht über Phuket.",
            "Der große Hebel ist die Uhrzeit. Die großen Ausflugsboote und Fähren aus Phuket, Krabi und Koh Lanta treffen meist ab dem späten Vormittag ein. Unsere Phi Phi Early Bird Tour startet um 07:00 Uhr, damit wir am Steg sind, bevor es voll wird: Das Licht ist weich, die Bucht ruhig, und Sie haben mehr von Ihrer begrenzten Aufenthaltszeit. Danach folgen die Pileh Lagoon, die Viking Cave (von außen) und eine Mittagspause auf Bamboo Island.",
            "Einen ausführlichen Ablauf, mehr zur Reihenfolge der Stopps und zur Wetterabhängigkeit der Überfahrt finden Sie in unserem Guide Phi Phi und Maya Bay früh morgens.",
          ],
          en: [
            "Yes, Maya Bay can be visited from Krabi, as a day trip from Ao Nang. By speedboat the crossing takes roughly 45 to 60 minutes in calm seas, longer by ferry or slower boats. Maya Bay belongs to Krabi province, so the trip does not run via Phuket.",
            "The big lever is the time of day. The large excursion boats and ferries from Phuket, Krabi and Koh Lanta mostly arrive from late morning. Our Phi Phi Early Bird tour leaves at 7 am so that we are at the jetty before it gets busy: the light is soft, the bay quiet, and you get more out of your limited stay. Pileh Lagoon, Viking Cave (from outside) and a lunch break on Bamboo Island follow.",
            "For a detailed schedule, more on the order of stops and on how weather affects the crossing, see our guide Phi Phi and Maya Bay early in the morning.",
          ],
        },
        list: {
          de: [
            "Phi Phi Early Bird: ab 07:00 Uhr, rund 8 Stunden, 28.500 THB pro Boot (max. 5 Gäste)",
            "Optional: Catering an Bord für 500 THB pro Person",
          ],
          en: [
            "Phi Phi Early Bird: from 7 am, about 8 hours, 28,500 THB per boat (max. 5 guests)",
            "Optional: catering on board for 500 THB per person",
          ],
        },
      },
      {
        h2: {
          de: "Was tun, wenn Maya Bay geschlossen ist?",
          en: "What to do when Maya Bay is closed",
        },
        body: {
          de: [
            "Eine geschlossene Maya Bay muss Ihren Urlaub nicht ruinieren. Rund um Phi Phi Leh gibt es genug zu sehen: Die Pileh Lagoon, ein smaragdgrünes Becken zwischen Felswänden, die Viking Cave als Anblick von außen und Bamboo Island mit weißem Strand. Die Bucht selbst lässt sich in der Regel aus der Entfernung vom Wasser sehen. Ob und wo Baden erlaubt ist, hängt vom Stand des Tages ab.",
            "Wenn Sie lieber ganz auf Phi Phi verzichten, bietet Krabi in den Monaten August und September viele Alternativen, die weniger stark von Sperrungen betroffen sind: Die Hong-Lagunen mit Koh Lao Lading und Koh Pakbia, die Inseln vor Ao Nang mit Koh Poda, Chicken Island, Tup-Sandbank und Phra Nang oder die Phang Nga Bucht mit Koh Roi und Koh Kudu. Gerade die geschützte Bucht im Norden eignet sich in der Nebensaison oft gut, je nach Tag und Wind.",
            "Ob und wie wir die Phi-Phi-Tour während der Sperrzeit anpassen, klären wir bei der Anfrage mit Ihnen. Wir sagen Ihnen offen, was an Ihrem Datum möglich ist, statt Ihnen eine Bucht zu versprechen, die gerade nicht zugänglich ist.",
          ],
          en: [
            "A closed Maya Bay does not have to ruin your holiday. Around Phi Phi Leh there is plenty to see: Pileh Lagoon, an emerald basin between cliffs, Viking Cave as a view from outside and Bamboo Island with its white beach. The bay itself can usually be seen from the water at a distance. Whether and where swimming is allowed depends on the status of the day.",
            "If you would rather skip Phi Phi altogether, Krabi offers many alternatives in August and September that are less affected by closures: the Hong lagoons with Koh Lao Lading and Koh Pakbia, the islands off Ao Nang with Koh Poda, Chicken Island, Tup sandbar and Phra Nang, or Phang Nga Bay with Koh Roi and Koh Kudu. The sheltered bay in the north in particular often works well in the low season, depending on the day and the wind.",
            "Whether and how we adapt the Phi Phi tour during the closure, we clarify with you when you enquire. We tell you openly what is possible on your date instead of promising a bay that is currently not accessible.",
          ],
        },
        list: {
          de: [
            "Pileh Lagoon, Viking Cave (von außen) und Bamboo Island rund um Phi Phi Leh",
            "Hong-Lagunen: Koh Hong, Koh Lao Lading, Koh Pakbia (Tour Hong Island Secret Lagoons)",
            "Poda, Chicken Island, Tup-Sandbank, Phra Nang (Tour 4-Islands VIP & Sunset)",
            "Phang Nga Bucht: Koh Roi, Koh Kudu, Koh Nok (Tour Uncharted Phang Nga)",
          ],
          en: [
            "Pileh Lagoon, Viking Cave (from outside) and Bamboo Island around Phi Phi Leh",
            "Hong lagoons: Koh Hong, Koh Lao Lading, Koh Pakbia (Hong Island Secret Lagoons tour)",
            "Poda, Chicken Island, Tup sandbar, Phra Nang (4-Islands VIP & Sunset tour)",
            "Phang Nga Bay: Koh Roi, Koh Kudu, Koh Nok (Uncharted Phang Nga tour)",
          ],
        },
      },
      {
        h2: {
          de: "Wie Sie Gedränge vermeiden: Timing nach der Wiedereröffnung",
          en: "How to avoid crowds: timing after the reopening",
        },
        body: {
          de: [
            "Direkt nach der Wiedereröffnung am 1. Oktober ist das Interesse an Maya Bay groß. Wer die Bucht ohne Gedränge sehen will, plant strategisch: früh am Morgen, an einem Wochentag und nicht an den bekannten Spitzentagen rund um Feiertage.",
            "Hilfreich ist außerdem, flexibel zu bleiben. Mit einem privaten Boot müssen Sie sich nicht an Fahrpläne halten. Wenn die Bucht um 08:00 Uhr noch ruhig ist, sind Sie dort; wenn Sie sehen, dass der Steg voll wird, fahren wir zuerst in die Pileh Lagoon und kommen später zurück. Diese Reihenfolge entscheidet der Kapitän nach Lage vor Ort.",
            "Allgemeine Strategien gegen Gedränge – Uhrzeit, Wochentag, Gezeiten und Routenwahl – haben wir im Guide Krabi ohne Touristenmassen zusammengestellt.",
          ],
          en: [
            "Right after the reopening on 1 October, interest in Maya Bay is high. If you want to see the bay without a crush, plan strategically: early in the morning, on a weekday and not on the well-known peak days around public holidays.",
            "It also helps to stay flexible. With a private boat you do not have to follow timetables. If the bay is still quiet at 8 am, you are there; if we see the jetty filling up, we go to Pileh Lagoon first and return later. The captain decides this order based on the situation on site.",
            "General strategies against crowds – time of day, weekday, tides and route choice – are collected in our guide Krabi without the tourist crowds.",
          ],
        },
      },
      {
        h2: {
          de: "Häufige Irrtümer rund um Maya Bay",
          en: "Common misconceptions about Maya Bay",
        },
        body: {
          de: [
            "Irrtum 1: „Man darf gar nicht mehr hin.“ Das stimmt nicht. Die Bucht war von 2018 bis 2021 für Besucher gesperrt und ist seit 2022 wieder zugänglich, abgesehen von der jährlichen Pause und den genannten Regeln.",
            "Irrtum 2: „Maya Bay ist der Strand aus dem Film, den man frei erkunden kann.“ Ja, der Film The Beach wurde dort gedreht, aber der Besuch ist heute reglementiert: Steg, kein Baden, begrenzte Zeit. Wer mit der Erwartung eines freien Strandtags kommt, wird enttäuscht. Als Fotostopp mit Panorama ist sie dennoch eine der eindrucksvollsten Buchten der Andamanensee.",
            "Irrtum 3: „Wenn Maya Bay zu ist, lohnt sich Phi Phi nicht.“ Auch das ist falsch. Pileh Lagoon, Bamboo Island und die Felslandschaft von Phi Phi Leh gehören zu den Höhepunkten, und zwar unabhängig von der Bucht.",
            "Irrtum 4: „Die Daten stehen fest.“ Termine, Quoten und Gebühren können sich ändern. Wir empfehlen daher, vor der Buchung aktuell zu prüfen, statt sich auf einen älteren Blogbeitrag zu verlassen – auch auf diesen.",
          ],
          en: [
            "Misconception 1: “You are no longer allowed to go.” That is not true. The bay was closed to visitors from 2018 to 2021 and has been accessible again since 2022, apart from the annual break and the rules mentioned.",
            "Misconception 2: “Maya Bay is the beach from the film that you can explore freely.” Yes, the film The Beach was shot there, but visits are regulated today: jetty, no swimming, limited time. If you come expecting a free beach day, you will be disappointed. As a photo stop with a panorama, though, it is still one of the most impressive bays in the Andaman Sea.",
            "Misconception 3: “If Maya Bay is closed, Phi Phi is not worth it.” Also wrong. Pileh Lagoon, Bamboo Island and the rock scenery of Phi Phi Leh are highlights regardless of the bay.",
            "Misconception 4: “The dates are fixed.” Dates, quotas and fees can change. We therefore recommend checking the current status before booking rather than relying on an older blog post – including this one.",
          ],
        },
        tip: {
          de: "Möchten Sie die Landschaft von The Beach, aber ohne Phi-Phi-Logistik? Unser Film-Drehorte-Guide zeigt Alternativen in der Phang Nga Bucht.",
          en: "Want the scenery of The Beach without the Phi Phi logistics? Our film-locations guide shows alternatives in Phang Nga Bay.",
        },
      },
    ],
    faq: [
      {
        q: { de: "Ist Maya Bay offen?", en: "Is Maya Bay open right now?" },
        a: {
          de: "Außerhalb der jährlichen Schließzeit in der Regel ja. Zuletzt wurde die Pause als 1. August bis 30. September angekündigt, mit Wiedereröffnung am 1. Oktober. Termine und Regeln legt die Nationalparkbehörde fest und kann sie ändern – prüfen Sie den aktuellen Stand vor der Buchung.",
          en: "Outside the annual closure period, usually yes. Most recently the break was announced as 1 August to 30 September, with reopening on 1 October. Dates and rules are set by the national park authority and can change – check the current status before booking.",
        },
      },
      {
        q: { de: "Wann schließt Maya Bay jedes Jahr?", en: "When does Maya Bay close every year?" },
        a: {
          de: "Jedes Jahr für rund zwei Monate während des Südwestmonsuns, zuletzt vom 1. August bis 30. September. Die Daten können sich ändern, daher bitte aktuell prüfen.",
          en: "Every year for around two months during the southwest monsoon, most recently from 1 August to 30 September. The dates can change, so please check the current ones.",
        },
      },
      {
        q: { de: "Darf man in Maya Bay schwimmen?", en: "Can you swim in Maya Bay?" },
        a: {
          de: "Nein. Seit der Wiedereröffnung ist Schwimmen in der Bucht nicht erlaubt, damit sich Korallen und Haie erholen. Baden ist an anderen Stellen wie der Pileh Lagoon möglich, sofern die aktuellen Parkregeln es erlauben.",
          en: "No. Since reopening, swimming in the bay is not allowed so that coral and sharks can recover. Swimming is possible elsewhere, such as in Pileh Lagoon, as long as the current park rules allow it.",
        },
      },
      {
        q: { de: "Wie viel kostet der Eintritt in Maya Bay?", en: "How much is the Maya Bay entrance fee?" },
        a: {
          de: "Die Gebühr legt die Nationalparkbehörde fest und kann sich ändern. Ob und in welcher Höhe an Ihrem Ziel eine Eintrittsgebühr anfällt, erfahren Sie bei der Buchung.",
          en: "The fee is set by the national park authority and can change. Whether and how much of an entrance fee applies at your destination, you will learn when booking.",
        },
      },
      {
        q: { de: "Kann man Maya Bay ab Krabi besuchen?", en: "Can you visit Maya Bay from Krabi?" },
        a: {
          de: "Ja, als Tagestour ab Ao Nang. Mit dem Speedboat dauert die Überfahrt bei ruhiger See etwa 45 bis 60 Minuten. Unsere Phi Phi Early Bird Tour startet um 07:00 Uhr, damit Sie vor den großen Booten ankommen.",
          en: "Yes, as a day trip from Ao Nang. By speedboat the crossing takes about 45 to 60 minutes in calm seas. Our Phi Phi Early Bird tour leaves at 7 am so you arrive before the big boats.",
        },
      },
      {
        q: { de: "Was kann man machen, wenn Maya Bay geschlossen ist?", en: "What can you do if Maya Bay is closed?" },
        a: {
          de: "Pileh Lagoon, Viking Cave von außen und Bamboo Island sind weiterhin einen Besuch wert. Alternativ bieten die Hong-Lagunen, die Poda-Inseln mit Tup-Sandbank oder die Phang Nga Bucht in Krabi schöne Tage auf dem Wasser, je nach Wetter und Wind.",
          en: "Pileh Lagoon, Viking Cave from outside and Bamboo Island are still worth a visit. Alternatively, the Hong lagoons, the Poda islands with the Tup sandbar or Phang Nga Bay offer lovely days on the water around Krabi, depending on weather and wind.",
        },
      },
      {
        q: { de: "Wann ist die beste Zeit für einen Besuch in Maya Bay?", en: "What is the best time to visit Maya Bay?" },
        a: {
          de: "Am besten früh am Morgen, bevor die großen Ausflugsboote eintreffen. Unsere Phi Phi Early Bird Tour startet deshalb um 07:00 Uhr. Außerhalb der jährlichen Schließzeit (zuletzt 1. August bis 30. September) ist die Bucht in der Regel zugänglich.",
          en: "Early in the morning, before the big excursion boats arrive. That is why our Phi Phi Early Bird tour leaves at 7 am. Outside the annual closure period (most recently 1 August to 30 September) the bay is usually accessible.",
        },
      },
      {
        q: { de: "Kann man Maya Bay mit einem Privatboot besuchen?", en: "Can you visit Maya Bay by private boat?" },
        a: {
          de: "Ja, ab Ao Nang als privater Speedboat-Ausflug mit flexibler Startzeit. Es gelten dieselben Regeln wie für alle Boote: Termine und Zugangsregeln legt die Nationalparkbehörde fest und kann sie ändern, und Schwimmen in der Bucht ist nicht erlaubt.",
          en: "Yes, from Ao Nang as a private speedboat trip with a flexible start time. The same rules apply as for all boats: dates and access rules are set by the national park authority and can change, and swimming in the bay is not allowed.",
        },
      },
    ],
    related: [
      "phi-phi-maya-bay-early-morning",
      "krabi-movie-locations-james-bond-the-beach",
      "avoid-crowds-krabi-timing",
      "best-time-to-visit-krabi",
    ],
    tourIds: ["phi-phi-early-bird"],
    image: IMG.maya,
  },
  /* ───────────────────────── Boat tours in the rainy season ───────────────────────── */
  {
    slug: "krabi-boat-tours-rainy-season",
    category: "insider",
    short: { de: "Bootstour Regenzeit", en: "Rainy-season boats" },
    primaryKeyword: "Krabi Bootstour Regenzeit",
    keywords: [
      "Krabi Bootstour Regenzeit",
      "Krabi boat tour rainy season",
      "Krabi Monsun Bootstour",
      "Inselhopping Krabi Nebensaison",
      "Bootstour abgesagt Krabi Wetter",
      "Nationalpark Sperrung Krabi Mai Oktober",
      "Krabi boat tours monsoon",
      "Krabi island hopping low season",
      "Krabi weather October boat",
    ],
    title: {
      de: "Bootstour Krabi in der Regenzeit: Geht das?",
      en: "Krabi Boat Tours in Rainy Season: Safe & Worth It?",
    },
    metaDescription: {
      de: "Krabi Bootstouren zwischen Mai und Oktober: Wellen, Absagen, Park-Sperrungen und wann sich eine private Tour lohnt – ehrlich und mit Praxistipps.",
      en: "Krabi boat tours between May and October: waves, cancellations, park closures and when a private tour makes sense – honest, practical advice.",
    },
    h1: {
      de: "Bootstour in Krabi während der Regenzeit: Was geht, was nicht?",
      en: "Boat tours in Krabi in the rainy season: what works and what does not",
    },
    intro: {
      de: "Kann man eine Bootstour in Krabi in der Regenzeit machen? Ja, an vielen Tagen sogar sehr gut, aber mit anderen Spielregeln als in der Hauptsaison. Die Regenzeit dauert in der Regel etwa von Mai bis Oktober, geprägt vom Südwestmonsun. Sie bringt Schauer, mehr Wolken und an manchen Tagen deutlich mehr Wellen. Sie bringt aber auch leere Buchten, grüne Felsen und oft ruhige Vormittage. Dieser Guide trennt Mythos und Praxis: Wie unterscheiden sich Schauer und Seegang, wann fallen Touren aus, welche Nationalpark-Gebiete sind zu, welche Ziele funktionieren in der Nebensaison oft gut und warum eine private Charter mit flexiblem Termin gerade jetzt Vorteile hat. Alle Angaben sind Spannen und Erfahrungswerte, keine Zusagen: Das Meer hält sich nicht an Kalender.",
      en: "Can you take a boat tour in Krabi in the rainy season? Yes, on many days even very well, but with different rules than in high season. The rainy season usually runs from about May to October and is shaped by the southwest monsoon. It brings showers, more cloud and, on some days, noticeably bigger waves. It also brings empty bays, green cliffs and often calm mornings. This guide separates myth from practice: how showers and rough seas differ, when tours are cancelled, which national park areas are closed, which destinations often work well in the low season and why a private charter with a flexible date has advantages right now. All statements are ranges and experience, not promises: the sea does not follow calendars.",
    },
    sections: [
      {
        h2: {
          de: "Regenzeit heißt nicht Dauerregen: Schauer und Seegang",
          en: "Rainy season does not mean constant rain: showers versus swell",
        },
        body: {
          de: [
            "Zwei Dinge werden in der Regenzeit gern verwechselt: Regen und Seegang. Für eine Bootstour zählt vor allem der Seegang. Ein tropischer Schauer, der nach einer Weile durchzieht, ist unangenehm, aber harmlos; ein Tag mit kräftigem Wind und langer Dünung ist dagegen ein echter Faktor für Komfort und Sicherheit.",
            "Typisch für die Andamanenküste: Schauer kommen oft am Nachmittag oder nachts, viele Vormittage sind ruhig und sonnig. In den nassesten Monaten, in der Regel September und Oktober, verschiebt sich das Verhältnis, und es gibt mehr bedeckte Tage und mehr Wind. Das heißt nicht, dass jeder Tag verloren ist.",
            "Wie sich die Monate grob unterscheiden, beschreibt unser Guide zur besten Reisezeit für Krabi. Hier schauen wir auf die Boote: Wann ist es machbar, wann nicht, und woran erkennen Sie, ob ein Tag gut wird?",
          ],
          en: [
            "Two things are often confused in the rainy season: rain and swell. For a boat trip, swell matters most. A tropical shower that passes after a while is unpleasant but harmless; a day with strong wind and long swell, on the other hand, is a real factor for comfort and safety.",
            "Typical for the Andaman coast: showers often come in the afternoon or at night, and many mornings are calm and sunny. In the wettest months, usually September and October, the balance shifts, with more overcast days and more wind. That does not mean every day is lost.",
            "How the months differ roughly is described in our guide to the best time to visit Krabi. Here we look at the boats: when is it feasible, when not, and how can you tell whether a day will be good?",
          ],
        },
        tip: {
          de: "Fragen Sie sich nicht „Regnet es?“, sondern „Wie sind Wind und Wellen?“. Ein bedeckter Tag mit ruhigem Wasser ist oft angenehmer als ein sonniger mit Dünung.",
          en: "Do not ask “Is it raining?” but “How are wind and waves?”. An overcast day with calm water is often more pleasant than a sunny one with swell.",
        },
      },
      {
        h2: {
          de: "Wann Touren in der Regel abgesagt werden",
          en: "When tours are usually cancelled",
        },
        body: {
          de: [
            "Seriöse Anbieter sagen eine Tour aus Sicherheitsgründen ab, wenn die Bedingungen es verlangen. Typische Auslöser sind kräftiger Wind, hoher Seegang oder eine behördliche Warnung, etwa vor einem Sturm. Einen festen Grenzwert, ab dem „nie gefahren wird“, nennen wir bewusst nicht: Die Entscheidung hängt von Boot, Route, Windrichtung und Erfahrung des Kapitäns ab, und Zahlen aus Blogs sind selten belegt.",
            "Bei uns gilt: Sicherheit geht vor. Bei einer Sturmwarnung verschieben wir kostenlos auf einen anderen Tag oder erstatten 100 %. Leichter Regen allein ist kein Grund zur Absage, denn er ist in den Tropen oft nach kurzer Zeit vorbei, und wir passen die Route flexibel an.",
            "Wie oft Touren ausfallen, hängt stark vom Jahr ab. Wir nennen deshalb keine Quote. Planen Sie einfach so, dass ein Ausfalltag verkraftbar ist, und buchen Sie wichtige Tage nicht auf den allerletzten Urlaubstag.",
          ],
          en: [
            "Reputable operators cancel a tour for safety reasons when conditions require it. Typical triggers are strong wind, heavy swell or an official warning, for example for a storm. We deliberately name no fixed threshold above which “we never go”: the decision depends on the boat, route, wind direction and the captain’s experience, and figures from blogs are rarely documented.",
            "With us: safety comes first. In case of a storm warning we reschedule free of charge or refund 100%. Light rain alone is no reason to cancel, because in the tropics it is often over after a short time, and we adjust the route flexibly.",
            "How often tours are cancelled depends heavily on the year. We therefore give no rate. Simply plan so that a lost day is manageable, and do not book important days on your very last holiday day.",
          ],
        },
        list: {
          de: [
            "Gründe für Verschiebungen: kräftiger Wind, hoher Seegang, behördliche Sturm- oder Monsunwarnungen",
            "Kein Grund allein: leichter Regen, bedeckter Himmel, einzelne Schauer",
            "Bei Sturmwarnung: kostenlose Verschiebung auf einen anderen Tag oder 100 % Erstattung",
            "Der Kapitän entscheidet, meist am Morgen nach einem Blick auf Wind und Wellen",
          ],
          en: [
            "Reasons for postponing: strong wind, heavy swell, official storm or monsoon warnings",
            "Not a reason on its own: light rain, overcast skies, single showers",
            "In case of a storm warning: free rescheduling to another day or a 100% refund",
            "The captain decides, usually in the morning after checking wind and waves",
          ],
        },
      },
      {
        h2: {
          de: "Nationalpark-Sperrungen: Maya Bay, Koh Rok und Koh Haa",
          en: "National park closures: Maya Bay, Koh Rok and Koh Haa",
        },
        body: {
          de: [
            "In der Regenzeit sind einige Ziele ganz oder teilweise nicht zugänglich. Das hat nichts mit unserer Tour zu tun, sondern mit dem Schutzkonzept der Nationalparks. Wichtig sind zwei Fälle, die Sie vor der Buchung kennen sollten.",
            "Maya Bay auf Phi Phi Leh war in den letzten Jahren jeweils vom 1. August bis 30. September geschlossen und öffnete am 1. Oktober wieder. Details finden Sie in unserem Guide Ist Maya Bay offen? Die Termine legt die Nationalparkbehörde fest.",
            "Koh Rok und Koh Haa im Mu-Ko-Lanta-Nationalpark sind nach Angaben mehrerer Quellen in der Monsunzeit zeitweise gesperrt, offiziell vom 16. Mai bis 15. November (manche Quellen nennen Ende Oktober). Die Hauptsaison liegt etwa zwischen Mitte November und Mitte Mai. Die Zeiträume können sich ändern. Deshalb ist unsere Tour Koh Rok & Koh Haa Schnorchel-Safari saisonal: Sie ist vor allem in der Trockenzeit sinnvoll, und wir klären den Stand für Ihr Datum bei der Anfrage.",
          ],
          en: [
            "In the rainy season some destinations are fully or partly inaccessible. This has nothing to do with our tours but with the protection concept of the national parks. Two cases are important to know before you book.",
            "Maya Bay on Phi Phi Leh was closed from 1 August to 30 September in recent years and reopened on 1 October. You can find details in our guide Is Maya Bay open? The dates are set by the national park authority.",
            "According to several sources, Koh Rok and Koh Haa in Mu Ko Lanta National Park are temporarily closed during the monsoon, officially from 16 May to 15 November (some sources say until the end of October). The open season runs roughly from mid-November to mid-May. The periods can change. That is why our Koh Rok & Koh Haa Snorkel Safari is seasonal: it makes most sense in the dry season, and we clarify the status for your date when you enquire.",
          ],
        },
        list: {
          de: [
            "Maya Bay: zuletzt 1. August bis 30. September geschlossen, Wiedereröffnung 1. Oktober",
            "Koh Rok und Koh Haa: offiziell 16. Mai bis 15. November gesperrt (manche Quellen: bis Ende Oktober); geöffnet etwa Mitte November bis Mitte Mai",
            "Die Tour Koh Rok & Koh Haa Schnorchel-Safari (32.000 THB pro Boot) ist saisonal",
            "Alle Termine gelten als Orientierung, die Nationalparkbehörde kann sie ändern",
          ],
          en: [
            "Maya Bay: most recently closed 1 August to 30 September, reopening 1 October",
            "Koh Rok and Koh Haa: officially closed 16 May to 15 November (some sources: until the end of October); open roughly mid-November to mid-May",
            "The Koh Rok & Koh Haa Snorkel Safari tour (32,000 THB per boat) is seasonal",
            "All dates are orientation only, the national park authority can change them",
          ],
        },
      },
      {
        h2: {
          de: "Welche Ziele in der Nebensaison oft gut gehen",
          en: "Which destinations often work well in the low season",
        },
        body: {
          de: [
            "Die Faustregel: Je geschützter ein Ziel liegt, desto eher ist es auch bei Monsunwetter erreichbar. Besonders die Phang Nga Bucht im Norden liegt hinter Inseln und Festland und bietet oft ruhigere Verhältnisse als das offene Meer Richtung Phi Phi oder Koh Rok. Ob es an Ihrem Tag klappt, hängt trotzdem von Wind und Welle ab.",
            "Auch die Buchten vor Ao Nang können gut gehen, etwa die Hong-Lagunen oder die Inseln der Poda-Gruppe. Je nach Windrichtung finden sich dort geschützte Seiten, und die Kapitäne wählen die Route nach dem Tag. Das ist der Vorteil kurzer Wege: Sie verlieren wenig Zeit auf dem Wasser, und ein Wechsel der Route ist leichter.",
            "Offene Gewässer sind dagegen am stärksten wetterabhängig. Phi Phi, Koh Rok und Tiefseeangeln auf den Außenriffen sind an ruhigen Tagen ein Genuss und an bewegten Tagen keine gute Idee. Wer seinen Urlaub rund um genau diese Ziele plant, sollte Puffertage einplanen oder in die Hauptsaison ausweichen.",
          ],
          en: [
            "The rule of thumb: the more sheltered a destination, the more likely it is reachable even in monsoon weather. Phang Nga Bay in the north in particular lies behind islands and mainland and often offers calmer conditions than the open sea towards Phi Phi or Koh Rok. Whether it works on your day still depends on wind and waves.",
            "The bays off Ao Nang can also work well, such as the Hong lagoons or the islands of the Poda group. Depending on the wind direction there are sheltered sides, and captains choose the route according to the day. That is the advantage of short distances: you lose little time on the water, and changing the route is easier.",
            "Open waters, on the other hand, are the most weather-dependent. Phi Phi, Koh Rok and deep-sea fishing on the outer reefs are a pleasure on calm days and a poor idea on rough days. If you plan your holiday around exactly these destinations, build in buffer days or move to the high season.",
          ],
        },
        list: {
          de: [
            "Hong-Lagunen (Koh Hong, Koh Lao Lading, Koh Pakbia): Tour Hong Island Secret Lagoons, 21.500 THB pro Boot, 7 Std. ab 08:00",
            "Poda, Chicken Island, Tup-Sandbank, Phra Nang: 4-Islands VIP & Sunset, 18.500 THB pro Boot, 6 Std. ab 13:00",
            "Flache Buchten mit kurzen Wegen: Family Fun Day, 15.500 THB pro Boot, 6 Std. ab 09:00",
            "Phang Nga Bucht: Uncharted Phang Nga (26.000 THB) oder James Bond Island & Phang Nga Bay Privat (24.000 THB), je nach Tag",
          ],
          en: [
            "Hong lagoons (Koh Hong, Koh Lao Lading, Koh Pakbia): Hong Island Secret Lagoons tour, 21,500 THB per boat, 7 hrs from 8 am",
            "Poda, Chicken Island, Tup sandbar, Phra Nang: 4-Islands VIP & Sunset, 18,500 THB per boat, 6 hrs from 1 pm",
            "Shallow bays with short distances: Family Fun Day, 15,500 THB per boat, 6 hrs from 9 am",
            "Phang Nga Bay: Uncharted Phang Nga (26,000 THB) or James Bond Island & Phang Nga Bay Private (24,000 THB), depending on the day",
          ],
        },
        tip: {
          de: "Die Tup-Sandbank hängt von den Gezeiten ab, nicht vom Monsun. Wenn Sie sie sehen wollen, prüfen Sie den Niedrigwasser-Zeitpunkt – unser Gezeiten-Guide erklärt, wie.",
          en: "The Tup sandbar depends on the tides, not on the monsoon. If you want to see it, check the low-water time – our tide guide explains how.",
        },
      },
      {
        h2: {
          de: "Vorteil privater Charter: Termin-Flexibilität und Entscheidung am Morgen",
          en: "Advantage of a private charter: flexible dates and a morning decision",
        },
        body: {
          de: [
            "In der Regenzeit zeigt ein privates Boot seine Stärken. Anders als bei Gruppentouren mit festem Fahrplan richten wir uns nach Ihnen und nach dem Wetter. Der Kapitän prüft morgens Wind und Wellen und entscheidet, ob und wohin es geht. Wenn der Vormittag ruhig ist, aber Schauer für den Nachmittag in Sicht sind, fahren wir früher los.",
            "Maximal fünf Gäste auf einem weißen Hardtop-Kabinenboot mit zwei 300-PS-Motoren, Sitzbank und bequemen Bootssesseln: Das Hardtop spendet Schatten und bietet bei einem Schauer Schutz. Eine ganze Gruppe muss nicht mitentscheiden, es geht nur um Ihre Pläne.",
            "Praktisch heißt das auch: Sie können Ihren Tag flexibel verschieben, wenn Vorhersage und Realität am Morgen nicht zusammenpassen. Wie die Verschiebung genau abläuft, klären Sie mit uns bei der Buchung. Bei Sturmwarnung gilt unsere kostenlose Umbuchung bzw. Rückerstattung.",
          ],
          en: [
            "In the rainy season a private boat shows its strengths. Unlike group tours with fixed timetables, we follow you and the weather. The captain checks wind and waves in the morning and decides whether and where to go. If the morning is calm but showers are expected in the afternoon, we leave earlier.",
            "A maximum of five guests on a white hardtop cabin boat with two 300 hp engines, a bench and comfortable boat seats: the hardtop provides shade and cover during a shower. A whole group does not have to take part in the decision, it is only about your plans.",
            "In practice this also means: you can move your day flexibly if forecast and reality do not match in the morning. How the rescheduling works exactly, you clarify with us when booking. In case of a storm warning our free rescheduling or refund applies.",
          ],
        },
      },
      {
        h2: {
          de: "Praktisch: Regenjacke, wasserdichte Taschen, Plan B",
          en: "Practical: rain jacket, waterproof bags, plan B",
        },
        body: {
          de: [
            "Wer in der Nebensaison aufs Wasser geht, packt anders. Eine leichte, wasserdichte Jacke gehört dazu, denn auch bei Sonne kann die schnelle Fahrt kühl und nass sein. Handy, Kamera und Papiere schützen Sie in einer wasserdichten Tasche oder einem Dry Bag. Badesachen, ein Handtuch und riffschonende Sonnencreme sind sowieso Pflicht, und selbst bei bedecktem Himmel kann die Sonne stark sein.",
            "Der Plan B ist wichtig: Legen Sie Boottage nicht auf die letzten Tage, lassen Sie einen Puffer, und haben Sie eine Alternative an Land parat, zum Beispiel ein Café, ein Spa oder einen Tempelbesuch. Eine ausführliche Liste, was auf einen Bootstag gehört, finden Sie in unserer Packliste und Etikette für Bootstage.",
          ],
          en: [
            "If you go out on the water in the low season, you pack differently. A light waterproof jacket is part of it, because even in sunshine the fast ride can be cool and wet. Protect your phone, camera and documents in a waterproof bag or dry bag. Swimwear, a towel and reef-safe sunscreen are mandatory anyway, and even under an overcast sky the sun can be strong.",
            "Plan B matters: do not place boat days on your last days, leave a buffer and have an alternative on land ready, for example a café, a spa or a temple visit. A detailed list of what belongs on a boat day can be found in our packing list and etiquette guide.",
          ],
        },
        list: {
          de: [
            "Leichte wasserdichte Jacke und Wechselshirt",
            "Dry Bag für Handy, Kamera und Papiere",
            "Riffschonende Sonnencreme, Hut, Sonnenbrille",
            "Schnorchelausrüstung stellen wir kostenlos, bitte bei der Buchung ankreuzen",
            "Einen Puffertag im Reiseplan",
          ],
          en: [
            "Light waterproof jacket and a spare shirt",
            "Dry bag for phone, camera and documents",
            "Reef-safe sunscreen, hat, sunglasses",
            "We provide snorkel gear free of charge, please tick it when booking",
            "A buffer day in your itinerary",
          ],
        },
      },
      {
        h2: {
          de: "Plankton und Sunset in der Nebensaison",
          en: "Plankton and sunset in the low season",
        },
        body: {
          de: [
            "Abendtouren sind in der Nebensaison eine Frage der Wolken. Ein Sonnenuntergang vor Phra Nang oder Koh Poda lebt von freiem Horizont. Bei dichter Bewölkung fehlt das Farbspektakel, bei aufgelockertem Himmel kann es besonders dramatisch werden. Planen Sie deshalb nicht mit einer Garantie, sondern mit einem Versuch, und buchen Sie, wenn möglich, mit einem Ausweichtermin.",
            "Bei der Plankton-Tour sind vor allem dunkle Nächte wichtig, am intensivsten rund um Neumond. Bewölkung stört weniger als Mondlicht, allerdings muss die See ruhig genug sein, damit wir sicher in die Bucht fahren und schwimmen können. Ob das in der Regenzeit klappt, entscheidet der Abend; wir sprechen mit Ihnen vorher offen darüber, was realistisch ist.",
            "Wenn Sie Tag und Nacht kombinieren möchten, ist die Sunset & Night Glow Kombi (19.500 THB pro Boot, ab 15:30 Uhr) eine gute Wahl. Sie ist als Doppelchance konzipiert: Wenn der Sonnenuntergang flach ausfällt, bleibt das Plankton, und umgekehrt.",
          ],
          en: [
            "Evening tours in the low season are a matter of clouds. A sunset off Phra Nang or Koh Poda depends on a clear horizon. With dense cloud the colour show is missing; with broken cloud it can be especially dramatic. Do not plan with a guarantee but with an attempt, and book with a fallback date if possible.",
            "For the plankton tour, dark nights matter most, with the strongest effect around new moon. Cloud cover disturbs less than moonlight, but the sea has to be calm enough for us to enter the bay and swim safely. Whether that works in the rainy season is decided by the evening; we talk openly with you beforehand about what is realistic.",
            "If you want to combine day and night, the Sunset & Night Glow Combo (19,500 THB per boat, from 3:30 pm) is a good choice. It is designed as a double chance: if the sunset turns out flat, the plankton remains, and vice versa.",
          ],
        },
      },
      {
        h2: {
          de: "Wann Sie besser nicht buchen und wie wir bei Absage kommunizieren",
          en: "When you had better not book, and how we communicate a cancellation",
        },
        body: {
          de: [
            "Ehrlich gesagt gibt es Konstellationen, in denen wir eher abraten: wenn Sie nur einen einzigen Tag haben und genau ein offenes Meerziel wie Phi Phi sehen wollen, wenn Sie sehr leicht seekrank werden und eine ruhige Fahrt erwarten, oder wenn Ihre Reise an einem exakten Datum hängt, das Sie nicht verschieben können. In diesen Fällen sind Puffertage oder ein anderes Ziel die bessere Wahl.",
            "Wenn eine Tour witterungsbedingt nicht stattfinden kann, melden wir uns so früh wie möglich, sobald die Lage klar ist. Wir bieten Ihnen dann einen anderen Termin an oder erstatten, wie oben beschrieben. Eine Entscheidung gegen die Fahrt ist bei uns nie eine Frage der Auslastung, sondern der Sicherheit.",
            "Fragen Sie uns bei der Buchung nach der aktuellen Lage für Ihr Datum.",
          ],
          en: [
            "Honestly, there are constellations where we tend to advise against it: if you have only a single day and want to see exactly one open-sea destination like Phi Phi, if you get seasick very easily and expect a smooth ride, or if your trip hinges on an exact date you cannot move. In these cases buffer days or a different destination are the better choice.",
            "If a tour cannot take place because of the weather, we get in touch as early as possible, once the situation is clear. We then offer you another date or a refund, as described above. A decision against going is never a question of occupancy with us, but of safety.",
            "Ask us about the current situation for your date when you book.",
          ],
        },
        tip: {
          de: "Faustregel: Planen Sie für Phi Phi und andere offene Ziele zwei mögliche Tage ein, für geschützte Buchten reicht oft einer.",
          en: "Rule of thumb: plan two possible days for Phi Phi and other open-sea destinations; for sheltered bays one is often enough.",
        },
      },
    ],
    faq: [
      {
        q: { de: "Kann man in der Regenzeit in Krabi Bootstouren machen?", en: "Can you take boat tours in Krabi in the rainy season?" },
        a: {
          de: "Ja, an vielen Tagen. Wichtig sind Flexibilität und geschützte Routen, etwa in der Phang Nga Bucht oder an den Inseln vor Ao Nang. Bei Sturmwarnung werden Fahrten aus Sicherheitsgründen verschoben, bei uns kostenlos oder mit 100 % Erstattung.",
          en: "Yes, on many days. Flexibility and sheltered routes matter, for example in Phang Nga Bay or at the islands off Ao Nang. In case of a storm warning trips are postponed for safety, with us free of charge or with a 100% refund.",
        },
      },
      {
        q: { de: "Wann ist das Meer in Krabi am wildesten?", en: "When are the seas roughest in Krabi?" },
        a: {
          de: "In der Regel in den Monsunmonaten, besonders in den nassesten Monaten September und Oktober. Auch dann gibt es ruhige Tage, vor allem am Vormittag. Feste Prognosen sind nicht möglich, entscheidend sind Wind und Welle am Tag selbst.",
          en: "Usually in the monsoon months, especially in the wettest months of September and October. Even then there are calm days, particularly in the morning. Fixed forecasts are not possible; wind and waves on the day itself decide.",
        },
      },
      {
        q: { de: "Werden Bootstouren bei Regen abgesagt?", en: "Are boat tours cancelled when it rains?" },
        a: {
          de: "Nicht bei jedem Regen. Leichter Regen oder einzelne Schauer sind kein Grund zur Absage, wir passen die Route an. Anders sieht es bei starkem Wind, hohem Seegang oder einer Sturmwarnung aus: Dann geht Sicherheit vor.",
          en: "Not for every rain. Light rain or single showers are no reason to cancel, we adjust the route. It is different with strong wind, heavy swell or a storm warning: then safety comes first.",
        },
      },
      {
        q: { de: "Welche Inseln sind in der Regenzeit gesperrt?", en: "Which islands are closed in the rainy season?" },
        a: {
          de: "Maya Bay war zuletzt vom 1. August bis 30. September geschlossen. Koh Rok und Koh Haa sind offiziell vom 16. Mai bis 15. November gesperrt (geöffnet etwa Mitte November bis Mitte Mai). Termine ändern sich, bitte vor der Buchung aktuell prüfen.",
          en: "Maya Bay was most recently closed from 1 August to 30 September. Koh Rok and Koh Haa are officially closed from 16 May to 15 November (open roughly mid-November to mid-May). Dates change, so please check the current ones before booking.",
        },
      },
      {
        q: { de: "Ist Krabi im Oktober eine gute Reisezeit?", en: "Is October a good time to visit Krabi?" },
        a: {
          de: "Der Oktober ist ein Übergangsmonat: Er gehört meist noch zu den regenreichen Monaten, die Saison nimmt aber gegen Ende des Monats Fahrt auf. Planen Sie Puffertage ein und bevorzugen Sie geschützte Ziele. Dafür sind die Strände leerer.",
          en: "October is a transition month: it usually still counts among the rainy months, but the season picks up towards the end of the month. Plan buffer days and prefer sheltered destinations. In return the beaches are emptier.",
        },
      },
      {
        q: { de: "Wann ist die beste Zeit für eine Bootstour in Krabi?", en: "When is the best time for a boat tour in Krabi?" },
        a: {
          de: "In der Regel außerhalb der Regenzeit, also etwa von November bis April, wenn die See meist ruhiger ist. Koh Rok und Koh Haa sind etwa von Mitte November bis Mitte Mai geöffnet. In der Regenzeit (etwa Mai bis Oktober) sind Touren an vielen Tagen trotzdem möglich.",
          en: "Usually outside the rainy season, roughly November to April, when the sea is mostly calmer. Koh Rok and Koh Haa are open from about mid-November to mid-May. In the rainy season (about May to October) tours are still possible on many days.",
        },
      },
      {
        q: { de: "Was passiert, wenn das Wetter schlecht ist?", en: "What happens if the weather is bad?" },
        a: {
          de: "Bei Schlechtwetter bieten wir eine kostenlose Umbuchung an. Bei Sturmwarnung, starkem Wind oder hohem Seegang geht Sicherheit vor, dann wird die Fahrt verschoben.",
          en: "In bad weather we offer free rebooking. With a storm warning, strong wind or heavy swell, safety comes first and the trip is postponed.",
        },
      },
      {
        q: { de: "Wird man in der Regenzeit leichter seekrank?", en: "Do you get seasick more easily in the rainy season?" },
        a: {
          de: "Bei mehr Wellen kann das vorkommen. Wählen Sie geschützte Routen und den Vormittag, wenn die See oft ruhiger ist. Praktische Tipps finden Sie in unserem Guide zu Seekrankheit auf Bootstouren.",
          en: "With bigger waves it can happen. Choose sheltered routes and the morning, when the sea is often calmer. You will find practical tips in our guide to seasickness on boat tours.",
        },
      },
    ],
    related: [
      "best-time-to-visit-krabi",
      "koh-rok-koh-haa",
      "phi-phi-maya-bay-early-morning",
      "boat-day-packing-list-etiquette",
      "maya-bay-open-closed-dates",
    ],
    tourIds: ["hong-lagoons", "4islands-sunset", "family-sandbars"],
    image: IMG.hong,
  },
  /* ───────────────────────── Itinerary 3 / 5 / 7 days ───────────────────────── */
  {
    slug: "krabi-itinerary-3-5-7-days",
    category: "pillar",
    short: { de: "Reiseplan 3/5/7 Tage", en: "3/5/7-day itinerary" },
    primaryKeyword: "Krabi Reiseplan 5 Tage",
    keywords: [
      "Krabi Reiseplan 5 Tage",
      "Krabi itinerary 5 days",
      "Krabi 3 Tage Route",
      "Krabi 7 Tage Reiseplan",
      "Krabi wie viele Tage",
      "Krabi Rundreise Ao Nang Railay Inseln",
      "Krabi 3 days itinerary",
      "Krabi 7 days itinerary",
      "how many days in Krabi",
      "Krabi first time itinerary",
    ],
    title: {
      de: "Krabi Reiseplan: 3, 5 oder 7 Tage – mit Boottagen",
      en: "Krabi Itinerary: 3, 5 or 7 Days with Boat Days",
    },
    metaDescription: {
      de: "Krabi in 3, 5 oder 7 Tagen: Tag-für-Tag-Reiseplan mit Strand-, Land- und Boottagen, Reihenfolge und Tipps, wann sich eine private Inseltour lohnt.",
      en: "Krabi in 3, 5 or 7 days: a day-by-day plan with beach, land and boat days, the right order and when a private island tour is worth booking for you.",
    },
    h1: {
      de: "Krabi Reiseplan für 3, 5 oder 7 Tage",
      en: "Krabi itinerary for 3, 5 or 7 days",
    },
    intro: {
      de: "Ein guter Krabi Reiseplan für 5 Tage sieht anders aus als einer für 3 oder 7 Tage, und er beginnt nicht mit einer Liste von Sehenswürdigkeiten, sondern mit einer Frage: Wie verteilen Sie Ihre Boottage? Die Inseln und Lagunen vor Krabi sind der Hauptgrund für die Reise, aber Wetter, Gezeiten und Ihr Energielevel entscheiden, wann sie sich lohnen. Dieser Guide zeigt drei Tag-für-Tag-Pläne mit Strand-, Land- und Boottagen, erklärt, in welcher Reihenfolge Sie die Ziele planen, und verknüpft jeden Boottag mit einer passenden privaten Speedboat-Tour ab Ao Nang. Er ist als Verteilerseite gedacht: Zu jeder Station finden Sie vertiefende Guides. Preise von Dritten, Öffnungszeiten von Attraktionen und Fahrpläne nennen wir bewusst nicht, denn sie ändern sich. Bei den eigenen Touren stehen die Preise pro Boot (max. 5 Gäste).",
      en: "A good Krabi itinerary for 5 days looks different from one for 3 or 7 days, and it does not start with a list of sights but with a question: how do you distribute your boat days? The islands and lagoons off Krabi are the main reason for the trip, but weather, tides and your energy level decide when they are worthwhile. This guide shows three day-by-day plans with beach, land and boat days, explains in which order to plan the destinations and links every boat day with a suitable private speedboat tour from Ao Nang. It is meant as a hub page: you will find in-depth guides for each stop. We deliberately give no third-party prices, attraction opening hours or timetables because they change. For our own tours, prices are per boat (max. 5 guests).",
    },
    sections: [
      {
        h2: {
          de: "Wie viele Tage brauchen Sie in Krabi?",
          en: "How many days do you need in Krabi?",
        },
        body: {
          de: [
            "Die kurze Antwort: Drei Tage reichen für einen guten ersten Eindruck, fünf Tage für ein entspanntes Programm mit zwei Boottagen, sieben Tage, wenn Sie neben den Inseln auch die Phang Nga Bucht, Phi Phi und ein paar Abendtouren erleben und dazwischen Ruhe haben möchten.",
            "Entscheidend ist weniger die Zahl der Tage als die Zahl der guten Boottage. Rechnen Sie mit Wetterreserven, besonders in der Nebensaison. Ein Tag, der ausfällt, soll Ihren Plan nicht sprengen. Die Pläne unten haben deshalb absichtlich Pausentage, die Sie bei Bedarf gegen einen Boottag tauschen können.",
            "Bleiben Sie in Ao Nang oder in Railay? Ao Nang bietet die meisten Restaurants, Läden und Abfahrtspunkte für Touren, Railay ist ruhiger und nur per Boot erreichbar. Beide Orte haben ihren Reiz, und die Lage zum Wasser spielt für die Planung eine große Rolle.",
          ],
          en: [
            "The short answer: three days are enough for a good first impression, five days for a relaxed programme with two boat days, seven days if you want to experience Phang Nga Bay, Phi Phi and a few evening tours in addition to the islands and still have time to rest.",
            "What matters is less the number of days than the number of good boat days. Allow for weather reserves, especially in the low season. A cancelled day should not blow up your plan. The plans below therefore deliberately include rest days that you can swap for a boat day if needed.",
            "Stay in Ao Nang or in Railay? Ao Nang offers the most restaurants, shops and departure points for tours, while Railay is quieter and reachable only by boat. Both have their charm, and the location relative to the water plays a big role in planning.",
          ],
        },
      },
      {
        h2: {
          de: "Grundprinzip: Boottage nach Wetter und Gezeiten planen",
          en: "Basic principle: plan boat days by weather and tides",
        },
        body: {
          de: [
            "Planen Sie die Boottage nicht fest nach Kalender, sondern flexibel. Zwei Faktoren geben den Takt vor: das Wetter und die Gezeiten. Das Meer ist morgens oft am ruhigsten, nachmittags frischt der Wind häufiger auf. Offene Ziele wie Phi Phi sind wetterabhängiger als geschützte Buchten.",
            "Bei den Gezeiten zählt vor allem die Tup-Sandbank, die nur bei Niedrigwasser sichtbar wird. Wer sie sehen will, legt den Boottag auf einen Tag mit passender Ebbe. Unser Gezeiten-Guide erklärt, wie Sie das herausfinden. Für Abendtouren mit Plankton spielt die Mondphase eine Rolle: Rund um Neumond ist das Leuchten am intensivsten.",
            "Praktischer Tipp: Legen Sie den wichtigsten und wetterabhängigsten Boottag früh in Ihren Aufenthalt. Fällt er aus, bleibt noch Zeit für einen Ersatztermin. Das gilt besonders für Phi Phi und Koh Rok.",
          ],
          en: [
            "Do not fix boat days by calendar but plan them flexibly. Two factors set the rhythm: weather and tides. The sea is often calmest in the morning, and the wind picks up more often in the afternoon. Open destinations like Phi Phi are more weather-dependent than sheltered bays.",
            "For tides, the Tup sandbar matters most, as it is only visible at low water. If you want to see it, put the boat day on a day with suitable low tide. Our tide guide explains how to find out. For evening tours with plankton the moon phase plays a role: around new moon the glow is most intense.",
            "Practical tip: place the most important and most weather-dependent boat day early in your stay. If it is cancelled, there is still time for a replacement date. This applies especially to Phi Phi and Koh Rok.",
          ],
        },
        tip: {
          de: "Buchen Sie Ihren Wunschtag zuerst und füllen Sie den Rest um ihn herum. Mit einem privaten Boot lässt sich ein Tag meist leichter verschieben als bei Gruppentouren.",
          en: "Book your must-have day first and fill the rest around it. With a private boat a day can usually be moved more easily than with group tours.",
        },
      },
      {
        h2: {
          de: "3 Tage Krabi: Ankommen, Railay und ein Boots-Highlight",
          en: "3 days in Krabi: arrive, Railay and one boat highlight",
        },
        body: {
          de: [
            "Mit drei Tagen konzentrieren Sie sich auf das Wesentliche. Der Plan setzt auf einen sanften Start, einen freien Tag und einen großen Boottag.",
            "Tag 1, Ankunft und Railay: Wenn Sie vormittags oder mittags ankommen, ist die Railay & Phra Nang Half-Day Escape (4 Std., flexibel, 11.500 THB pro Boot) ideal. Sie ist kurz und intensiv: Kletterfelsen von Railay, Höhle von Phra Nang und ein Badestopp an Koh Poda. Auch am Nachmittag oder zum Sonnenuntergang lässt sie sich einplanen. Ein Boottag am Anreisetag ist ein guter Weg, um den Jetlag in der frischen Luft abzuschütteln.",
            "Tag 2, Strand und Land: Ein bewusst ruhiger Tag. Bummeln Sie durch Ao Nang, gönnen Sie sich Strand, Massage oder ein Café. Wer Landprogramm sucht, findet rund um Krabi Tempel, Dschungelpfade und Thermalquellen; Öffnungszeiten und Preise prüfen Sie bitte vor Ort, wir nennen sie hier nicht.",
            "Tag 3, großer Boottag: Je nach Geschmack entweder die Hong-Lagunen (7 Std., ab 08:00, 21.500 THB pro Boot) mit smaragdgrüner Lagune und Buchten oder die 4-Islands VIP & Sunset Tour (6 Std., ab 13:00, 18.500 THB pro Boot) mit Koh Poda, Chicken Island, Tup-Sandbank und Sonnenuntergang vor Phra Nang.",
          ],
          en: [
            "With three days you concentrate on the essentials. The plan relies on a gentle start, a free day and one big boat day.",
            "Day 1, arrival and Railay: if you arrive in the morning or at midday, the Railay & Phra Nang Half-Day Escape (4 hrs, flexible, 11,500 THB per boat) is ideal. It is short and intense: Railay’s climbing cliffs, Phra Nang cave and a swim stop at Koh Poda. It can also be scheduled for the afternoon or sunset. A boat day on arrival day is a good way to shake off jet lag in the fresh air.",
            "Day 2, beach and land: a deliberately quiet day. Stroll through Ao Nang, treat yourself to a beach, a massage or a café. If you want land activities, you will find temples, jungle trails and hot springs around Krabi; please check opening hours and prices locally, we do not list them here.",
            "Day 3, big boat day: depending on taste, either the Hong lagoons (7 hrs, from 8 am, 21,500 THB per boat) with an emerald lagoon and bays, or the 4-Islands VIP & Sunset tour (6 hrs, from 1 pm, 18,500 THB per boat) with Koh Poda, Chicken Island, Tup sandbar and a sunset off Phra Nang.",
          ],
        },
      },
      {
        h2: {
          de: "5 Tage Krabi: zwei Boottage, ein Landtag, ein Pausentag",
          en: "5 days in Krabi: two boat days, one land day, one rest day",
        },
        body: {
          de: [
            "Für einen Krabi Reiseplan über 5 Tage empfehlen wir diesen Rhythmus: eine kurze Tour zum Ankommen, einen Landtag, einen Boottag in der Nähe, einen Pausentag und einen Boottag in der Ferne. So haben Sie Wetterreserven und genügend Zeit zum Erholen.",
            "Tag 1, Railay-Halbtagestour: kurz, schön und ohne Stress (11.500 THB pro Boot, 4 Std.).",
            "Tag 2, Landtag: Tempel, Dschungel oder Thermalquellen im Umland, mit Mietwagen oder Fahrer. Planen Sie realistische Strecken ein. Und sparen Sie sich Programm, das Sie nicht interessiert: Ein halber Tag am Strand ist keine verlorene Zeit.",
            "Tag 3, naher Boottag: die 4-Islands VIP & Sunset Tour (6 Std., ab 13:00, 18.500 THB pro Boot) oder der Family Fun Day mit Sandbänken und flachen Buchten (6 Std., ab 09:00, 15.500 THB pro Boot), wenn Kinder dabei sind.",
            "Tag 4, Pausentag: Schlafen, Strand, Massage, Reserve für einen Wettertausch. Abends passt ein Sunset Romance & Dinner an Bord (4 Std., ab 15:30, 16.500 THB pro Boot), wenn Sie zu zweit reisen.",
            "Tag 5, ferner Boottag: entweder Phi Phi Early Bird (8 Std., ab 07:00, 28.500 THB pro Boot) für Maya Bay, Pileh Lagoon und Bamboo Island, oder Uncharted Phang Nga (8,5 Std., ab 08:00, 26.000 THB pro Boot) für Koh Roi, Koh Kudu und Koh Nok. Fällt der Wunschtag aus, schieben Sie ihn auf Tag 4.",
          ],
          en: [
            "For a Krabi itinerary over 5 days we recommend this rhythm: a short tour to arrive, a land day, a nearby boat day, a rest day and a far boat day. That gives you weather reserves and enough time to recover.",
            "Day 1, Railay half-day tour: short, beautiful and stress-free (11,500 THB per boat, 4 hrs).",
            "Day 2, land day: temples, jungle or hot springs in the surroundings, by rental car or with a driver. Plan realistic distances. And skip programme that does not interest you: half a day on the beach is not wasted time.",
            "Day 3, nearby boat day: the 4-Islands VIP & Sunset tour (6 hrs, from 1 pm, 18,500 THB per boat) or the Family Fun Day with sandbars and shallow bays (6 hrs, from 9 am, 15,500 THB per boat) if children are along.",
            "Day 4, rest day: sleep, beach, massage, reserve for a weather swap. In the evening a Sunset Romance & Dinner on Board (4 hrs, from 3:30 pm, 16,500 THB per boat) suits you if you travel as a couple.",
            "Day 5, far boat day: either Phi Phi Early Bird (8 hrs, from 7 am, 28,500 THB per boat) for Maya Bay, Pileh Lagoon and Bamboo Island, or Uncharted Phang Nga (8.5 hrs, from 8 am, 26,000 THB per boat) for Koh Roi, Koh Kudu and Koh Nok. If the preferred day is cancelled, shift it to day 4.",
          ],
        },
        tip: {
          de: "Wenn Sie nur einen großen Boottag möchten, wählen Sie ihn nach Interesse: Film-Landschaften und Phi Phi (Phi Phi Early Bird), Lagunen und Stille (Phang Nga) oder berühmte Felsen (James Bond Island).",
          en: "If you only want one big boat day, choose by interest: film landscapes and Phi Phi (Phi Phi Early Bird), lagoons and quiet (Phang Nga) or famous rocks (James Bond Island).",
        },
      },
      {
        h2: {
          de: "7 Tage Krabi: Phang Nga, Phi Phi früh und ein Abend auf dem Wasser",
          en: "7 days in Krabi: Phang Nga, early Phi Phi and an evening on the water",
        },
        body: {
          de: [
            "Mit sieben Tagen können Sie die drei großen Welten rund um Krabi verbinden: die Inseln vor Ao Nang, die Phang Nga Bucht und Phi Phi. Dazu bleiben Abendprogramme und zwei Ruhetage. Der Plan ist locker gesetzt und lässt sich je nach Wetter tauschen.",
            "Tag 1: Ankunft und Railay & Phra Nang Half-Day Escape. Tag 2: Pause oder Landtag. Tag 3: 4-Islands VIP & Sunset oder Hong-Lagunen. Tag 4: Phang Nga mit Koh Roi, Koh Kudu und Koh Nok (Uncharted Phang Nga) oder James Bond Island & Phang Nga Bay Privat. Tag 5: Pausentag und Reserve. Tag 6: Phi Phi Early Bird. Tag 7: ein Abend auf dem Wasser, bevor es nach Hause geht.",
            "Für den Abend haben Sie die Wahl: Sunset Romance & Dinner an Bord, Sunset & Night Glow Kombi (6 Std., ab 15:30, 19.500 THB pro Boot) oder die reine Night-Glow-Tour mit Plankton (4 Std., ab 18:00, 14.500 THB pro Boot). Wer gern angelt, findet bei den Angeltouren (Halbtags-Riff-Angeln, Catch & Cook Sunset BBQ oder Nacht-Tintenfischangeln) schöne Alternativen zu klassischen Island-Touren.",
            "In der Trockenzeit können Sie auch die Koh Rok & Koh Haa Schnorchel-Safari einbauen. Sie ist saisonal und in der Monsunzeit meist nicht möglich.",
          ],
          en: [
            "With seven days you can combine the three big worlds around Krabi: the islands off Ao Nang, Phang Nga Bay and Phi Phi. Evening programmes and two rest days remain. The plan is loosely set and can be swapped depending on the weather.",
            "Day 1: arrival and Railay & Phra Nang Half-Day Escape. Day 2: rest or land day. Day 3: 4-Islands VIP & Sunset or Hong lagoons. Day 4: Phang Nga with Koh Roi, Koh Kudu and Koh Nok (Uncharted Phang Nga) or James Bond Island & Phang Nga Bay Private. Day 5: rest day and reserve. Day 6: Phi Phi Early Bird. Day 7: an evening on the water before you fly home.",
            "For the evening you can choose: Sunset Romance & Dinner on Board, Sunset & Night Glow Combo (6 hrs, from 3:30 pm, 19,500 THB per boat) or the pure Night Glow tour with plankton (4 hrs, from 6 pm, 14,500 THB per boat). If you like fishing, our fishing tours (half-day reef fishing, Catch & Cook Sunset BBQ or night squid fishing) are nice alternatives to classic island tours.",
            "In the dry season you can also add the Koh Rok & Koh Haa Snorkel Safari. It is seasonal and usually not possible during the monsoon.",
          ],
        },
      },
      {
        h2: {
          de: "Welche Tour an welchem Tag: Übersicht",
          en: "Which tour on which day: overview",
        },
        body: {
          de: [
            "Diese Übersicht ordnet unsere Touren den Plänen zu. Preise gelten pro Boot für bis zu 5 Gäste; Catering an Bord ist für 500 THB pro Person buchbar, das 4K-Drohnenpaket kostet extra.",
          ],
          en: [
            "This overview assigns our tours to the plans. Prices are per boat for up to 5 guests; Catering on board can be booked for 500 THB per person, the 4K drone package costs extra.",
          ],
        },
        list: {
          de: [
            "Anreise- oder Halbtag: Railay & Phra Nang Half-Day Escape (railay-escape), 4 Std., 11.500 THB",
            "Nahe Inseln: 4-Islands VIP & Sunset (4islands-sunset), 6 Std. ab 13:00, 18.500 THB",
            "Lagunen früh am Morgen: Hong Island Secret Lagoons (hong-lagoons), 7 Std. ab 08:00, 21.500 THB",
            "Phang Nga Bucht: Uncharted Phang Nga (phang-nga-uncharted), 26.000 THB, oder James Bond Island & Phang Nga Bay Privat (james-bond-bay), 24.000 THB",
            "Phi Phi: Phi Phi Early Bird (phi-phi-early-bird), 8 Std. ab 07:00, 28.500 THB",
            "Familien: Family Fun Day (family-sandbars), 6 Std. ab 09:00, 15.500 THB",
            "Abend: Sunset Romance & Dinner (sunset-dinner) 16.500 THB, Night Glow (plankton-night) 14.500 THB, Sunset & Night Glow Kombi (sunset-glow-combo) 19.500 THB",
            "Saisonal: Koh Rok & Koh Haa Schnorchel-Safari (koh-rok-safari), 9 Std. ab 07:30, 32.000 THB",
          ],
          en: [
            "Arrival or half day: Railay & Phra Nang Half-Day Escape (railay-escape), 4 hrs, 11,500 THB",
            "Nearby islands: 4-Islands VIP & Sunset (4islands-sunset), 6 hrs from 1 pm, 18,500 THB",
            "Lagoons early in the morning: Hong Island Secret Lagoons (hong-lagoons), 7 hrs from 8 am, 21,500 THB",
            "Phang Nga Bay: Uncharted Phang Nga (phang-nga-uncharted), 26,000 THB, or James Bond Island & Phang Nga Bay Private (james-bond-bay), 24,000 THB",
            "Phi Phi: Phi Phi Early Bird (phi-phi-early-bird), 8 hrs from 7 am, 28,500 THB",
            "Families: Family Fun Day (family-sandbars), 6 hrs from 9 am, 15,500 THB",
            "Evening: Sunset Romance & Dinner (sunset-dinner) 16,500 THB, Night Glow (plankton-night) 14,500 THB, Sunset & Night Glow Combo (sunset-glow-combo) 19,500 THB",
            "Seasonal: Koh Rok & Koh Haa Snorkel Safari (koh-rok-safari), 9 hrs from 7:30 am, 32,000 THB",
          ],
        },
      },
      {
        h2: {
          de: "Wo übernachten: Ao Nang oder Railay?",
          en: "Where to stay: Ao Nang or Railay?",
        },
        body: {
          de: [
            "Für die meisten Reisenden ist Ao Nang die praktische Basis: viele Unterkünfte, Restaurants, Läden und kurze Wege zu den Abfahrtsorten der Boote. Railay ist ruhiger und landschaftlich beeindruckend, mit Kletterfelsen und Stränden, aber nur per Boot erreichbar, was die Logistik etwas komplizierter macht.",
            "Aus Boot-Sicht hat beides Vorteile. Von Ao Nang aus erreichen Sie fast alle unsere Ziele ohne Umweg, und der Hotel-Transfer Ao Nang/Krabi ist bei unseren Touren inklusive. Railay-Gäste starten bequem in Richtung Phra Nang und Poda. Entscheiden Sie nach Ihrem Reisetyp: Wer abends Auswahl sucht, wählt Ao Nang; wer Ruhe mag, Railay.",
            "Eine eigene Gegenüberstellung der beiden Orte planen wir als separaten Guide. Wenn Sie Fragen zur Lage haben, beraten wir Sie gern bei der Buchung.",
          ],
          en: [
            "For most travellers Ao Nang is the practical base: plenty of accommodation, restaurants, shops and short distances to the boat departure points. Railay is quieter and scenically impressive, with climbing cliffs and beaches, but reachable only by boat, which makes logistics a little more complicated.",
            "From a boat perspective both have advantages. From Ao Nang you reach almost all our destinations without a detour, and the hotel transfer Ao Nang/Krabi is included with our tours. Railay guests start conveniently towards Phra Nang and Poda. Decide by your travel type: if you want choice in the evening, pick Ao Nang; if you like quiet, Railay.",
            "We plan a dedicated comparison of the two places as a separate guide. If you have questions about the location, we are happy to advise you when booking.",
          ],
        },
      },
      {
        h2: {
          de: "Reisezeit-Anpassung: Regen und Sperrungen",
          en: "Adjusting for the season: rain and closures",
        },
        body: {
          de: [
            "Der beste Plan hängt von der Jahreszeit ab. In der Trockenzeit, grob November bis April, ist das Meer meist ruhig, und alle Ziele sind erreichbar. In der Regenzeit, grob Mai bis Oktober, empfehlen wir mehr Reserve und geschützte Routen, vor allem in der Phang Nga Bucht und an den Inseln vor Ao Nang.",
            "Beachten Sie die Sperrungen: Maya Bay war zuletzt vom 1. August bis 30. September geschlossen, Koh Rok und Koh Haa sind offiziell vom 16. Mai bis 15. November gesperrt (geöffnet etwa Mitte November bis Mitte Mai). Das sind Orientierungswerte, die sich ändern können. Mehr dazu in unseren Guides zur Regenzeit und zu Maya Bay.",
            "In der Regenzeit planen Sie am besten zwei Puffertage statt einem und setzen offene Ziele wie Phi Phi an den Anfang. Und halten Sie Abendtouren als flexible Option: Wenn der Himmel aufklart, nutzen Sie ihn.",
          ],
          en: [
            "The best plan depends on the season. In the dry season, roughly November to April, the sea is usually calm and all destinations are accessible. In the rainy season, roughly May to October, we recommend more reserve and sheltered routes, especially in Phang Nga Bay and at the islands off Ao Nang.",
            "Note the closures: Maya Bay was most recently closed from 1 August to 30 September, and Koh Rok and Koh Haa are officially closed from 16 May to 15 November (open roughly mid-November to mid-May). These are orientation values that can change. More in our guides on the rainy season and on Maya Bay.",
            "In the rainy season it is best to plan two buffer days instead of one and to put open-sea destinations like Phi Phi at the beginning. And keep evening tours as a flexible option: when the sky clears, use it.",
          ],
        },
      },
      {
        h2: {
          de: "Mit Kindern, als Paar, mit Senioren: Abwandlungen",
          en: "With kids, as a couple, with seniors: variations",
        },
        body: {
          de: [
            "Mit Kindern lohnen sich kürzere Boottage und flache Buchten. Der Family Fun Day und die Railay-Halbtagestour sind dafür gemacht; die vorgeschriebenen Schwimmwesten sind an Bord, Schnorchelmasken stellen wir kostenlos zur Verfügung (bei der Buchung ankreuzen). Planen Sie Pausen nach dem Rhythmus der Kinder und Schattenplätze ein. Das Hardtop-Kabinenboot bietet Schatten und Sitzbank bzw. bequeme Bootssessel.",
            "Als Paar passen Sunset Romance & Dinner, die Sunset & Night Glow Kombi und die Plankton-Tour. Ein längerer Phi-Phi-Tag oder der Phang-Nga-Tag lassen sich mit einem ruhigen Abend kombinieren. Wenn Sie Erinnerungen von oben möchten, gibt es das 4K-Drohnenpaket gegen Aufpreis.",
            "Für Senioren oder Gäste mit weniger Ausdauer sind kürzere, nahe Touren und feste Pausen entscheidend. Lassen Sie lange Tage mit früher Abfahrt aus, setzen Sie auf Halbtags-Touren und nutzen Sie den Hotel-Transfer. Sprechen Sie uns bei der Buchung auf Mobilitätswünsche an, damit wir das Boot und die Route darauf abstimmen können.",
          ],
          en: [
            "With children, shorter boat days and shallow bays are worthwhile. The Family Fun Day and the Railay half-day tour are made for this; the mandatory life jackets are on board, and we provide snorkel masks free of charge (tick them when booking). Plan breaks to the children’s rhythm and shaded spots. The hardtop cabin boat offers shade as well as a bench and comfortable boat seats.",
            "As a couple, Sunset Romance & Dinner, the Sunset & Night Glow Combo and the plankton tour fit. A longer Phi Phi day or the Phang Nga day can be combined with a quiet evening. If you want memories from above, the 4K drone package is available for an extra fee.",
            "For seniors or guests with less stamina, shorter, nearby tours and set breaks are decisive. Skip long days with an early departure, rely on half-day tours and use the hotel transfer. Tell us about mobility wishes when booking so we can adapt the boat and route.",
          ],
        },
      },
    ],
    faq: [
      {
        q: { de: "Wie viele Tage braucht man in Krabi?", en: "How many days do you need in Krabi?" },
        a: {
          de: "Für einen ersten Eindruck reichen drei Tage, für ein entspanntes Programm mit Inselhopping fünf, und sieben Tage geben Raum für Phang Nga, Phi Phi und Abendtouren. Wichtig ist, Puffertage für Wetter einzuplanen.",
          en: "Three days are enough for a first impression, five for a relaxed programme with island hopping, and seven give room for Phang Nga, Phi Phi and evening tours. What matters is to include buffer days for weather.",
        },
      },
      {
        q: { de: "Reichen 3 Tage in Krabi?", en: "Is 3 days in Krabi enough?" },
        a: {
          de: "Ja, wenn Sie Ihre Erwartungen anpassen: ein Ankunftstag mit Railay, ein Strand- oder Landtag und ein großer Boottag mit den Highlights. Mehr als einen Boottag sollten Sie in drei Tagen nicht erzwingen.",
          en: "Yes, if you adjust your expectations: an arrival day with Railay, a beach or land day and one big boat day with the highlights. You should not force more than one boat day into three days.",
        },
      },
      {
        q: { de: "Was sollte man in Krabi unbedingt gesehen haben?", en: "What are the must-see things in Krabi?" },
        a: {
          de: "Die Inseln vor Ao Nang mit Koh Poda, Chicken Island und Tup-Sandbank, die Hong-Lagunen, Railay mit Phra Nang und die Phang Nga Bucht. Phi Phi mit Maya Bay ist für viele ein Muss, aber wetter- und saisonabhängig.",
          en: "The islands off Ao Nang with Koh Poda, Chicken Island and the Tup sandbar, the Hong lagoons, Railay with Phra Nang and Phang Nga Bay. Phi Phi with Maya Bay is a must for many, but depends on weather and season.",
        },
      },
      {
        q: { de: "Wie viele Inselhopping-Tage sind sinnvoll?", en: "How many island-hopping days should I plan in Krabi?" },
        a: {
          de: "Als Faustregel ein Boottag pro zwei bis drei Urlaubstage, mindestens zwei bei fünf Tagen. Dazwischen Pausen- oder Landtage, damit Sie Wetterreserven haben und nicht erschöpft sind.",
          en: "As a rule of thumb one boat day per two to three holiday days, at least two on a five-day trip. In between, rest or land days so you have weather reserves and are not exhausted.",
        },
      },
      {
        q: { de: "Kann man Krabi im Sommer bereisen?", en: "Can you visit Krabi in summer or the rainy season?" },
        a: {
          de: "Ja. Die Regenzeit dauert grob von Mai bis Oktober, mit weniger Besuchern und grüner Landschaft. Für Bootstouren sind mehr Flexibilität und geschützte Routen nötig, und einige Ziele wie Maya Bay oder Koh Rok sind zeitweise gesperrt.",
          en: "Yes. The rainy season runs roughly from May to October, with fewer visitors and green landscapes. Boat tours require more flexibility and sheltered routes, and some destinations such as Maya Bay or Koh Rok are temporarily closed.",
        },
      },
    ],
    related: [
      "krabi-islands-insider-guide",
      "krabi-island-hopping-planner",
      "best-time-to-visit-krabi",
      "krabi-with-kids",
      "krabi-boat-tours-rainy-season",
    ],
    tourIds: ["4islands-sunset", "phang-nga-uncharted", "phi-phi-early-bird"],
    image: IMG.railay,
  },
];
