import type { GuideArticleInput } from "./types";
import { IMG } from "../secret-islands/content";

/**
 * New guide articles (batch B): honeymoon & proposal, private sunset tour, seasickness tips.
 * Fact policy: prices only from TOURS / booking-data.ts; no third-party prices, no review quotes (REVIEWS_VERIFIED=false),
 * no medical claims (no active ingredients or doses), sunset times only as rough ranges, no sea-state thresholds.
 */
export const NEW_ARTICLES_B: GuideArticleInput[] = [
  /* ───────────────────────── Honeymoon & proposal ───────────────────────── */
  {
    slug: "krabi-honeymoon-proposal-private-boat",
    category: "insider",
    short: { de: "Flitterwochen & Antrag", en: "Honeymoon & proposal" },
    primaryKeyword: "Flitterwochen Krabi Bootstour",
    keywords: [
      "Flitterwochen Krabi Bootstour",
      "Heiratsantrag Krabi Boot",
      "romantische Bootstour Krabi",
      "Krabi Sunset Dinner privat",
      "Krabi Paare Tipps",
      "Krabi leuchtendes Plankton romantisch",
      "Krabi honeymoon private boat",
      "Krabi proposal ideas",
      "propose on a boat Thailand",
      "private sunset dinner Krabi",
      "Krabi couples boat tour",
    ],
    title: {
      de: "Flitterwochen Krabi: Romantische Bootstour & Antrag",
      en: "Krabi Honeymoon Boat Trip: Romantic Private Charter",
    },
    metaDescription: {
      de: "Flitterwochen oder Heiratsantrag in Krabi: Sunset-Dinner an Bord, leuchtendes Plankton und Drohnenfotos – so planen Sie Ihren privaten Speedboot-Tag.",
      en: "Honeymoon or proposal in Krabi: sunset dinner on board, glowing plankton and 4K drone photos – how to plan your private speedboat day for two.",
    },
    h1: {
      de: "Flitterwochen und Heiratsantrag in Krabi: Ihr privates Boot für zwei",
      en: "Honeymoon and proposal in Krabi: your private boat for two",
    },
    intro: {
      de: "Krabi hat alles, was Flitterwochen besonders macht: Kalksteinfelsen, die im Abendlicht glühen, türkisfarbenes Wasser und Nächte, in denen das Meer leuchten kann. Was oft fehlt, ist Ruhe. Auf einem Gruppenboot teilen Sie den schönsten Moment mit dreißig Fremden. Eine Bootstour für Flitterwochen in Krabi funktioniert deshalb am besten privat: ein Boot, höchstens fünf Gäste, Ihr eigener Zeitplan. Dieser Guide zeigt, welche unserer Touren zu Paaren passen, wie Sie einen Heiratsantrag auf dem Boot organisatorisch gut vorbereiten, was an Bord möglich ist und worauf Sie bei Kleidung, Mond und Wetter achten sollten. Ehrlich vorab: Wir können Wetter, Wolken und Plankton nicht bestellen – wir können nur dafür sorgen, dass Sie den Tag ohne Hektik und ohne Publikum erleben.",
      en: "Krabi has everything that makes a honeymoon special: limestone cliffs glowing in the evening light, turquoise water and nights when the sea itself can glow. What is often missing is peace and quiet. On a group boat you share the most beautiful moment with thirty strangers. A honeymoon boat trip in Krabi therefore works best as a private charter: one boat, no more than five guests, your own schedule. This guide shows which of our tours suit couples, how to prepare a proposal on a boat from an organisational point of view, what is possible on board and what to consider regarding clothing, moon and weather. Honest note up front: we cannot order weather, clouds or plankton – we can only make sure you enjoy the day without rush and without an audience.",
    },
    sections: [
      {
        h2: {
          de: "Warum ein privates Boot für Flitterwochen in Krabi",
          en: "Why a private boat for a honeymoon in Krabi",
        },
        body: {
          de: [
            "Die meisten Bootstouren rund um Krabi sind für Gruppen gebaut: feste Abfahrtszeit, feste Stopps, dreißig bis vierzig Gäste an Bord. Für Paare, die Zeit für sich suchen, ist das die falsche Ausgangslage. Auf einem privaten Boot bestimmen Sie den Ablauf: Wann ankern wir, wie lange bleiben wir an einer Bucht, wann gibt es das Dinner? Es gibt keine Gruppe, auf die jemand warten muss, und niemanden, der Ihnen im Bild steht.",
            "Unser Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren à 300 PS und Platz für höchstens fünf Gäste. Für zwei Personen bedeutet das: reichlich Raum, eine Sitzbank und bequeme Bootssessel, Schatten durch die Hardtop-Kabine und ein Heck-Cockpit, in dem das Dinner und der Sekt serviert werden. Hotel-Transfer in Ao Nang und Krabi gehört bei den Touren zur Leistung, sodass Sie vom Hotel aus ohne Umwege starten.",
            "Auch Ihre Gäste müssen nicht zu zweit sein: Wer die Flitterwochen mit Trauzeugen, Eltern oder Freunden verbindet, kann bis zu fünf Personen mitnehmen. Der Preis gilt pro Boot, nicht pro Person – bei kleinen Gruppen ein Vorteil.",
          ],
          en: [
            "Most boat tours around Krabi are built for groups: fixed departure time, fixed stops, thirty to forty guests on board. For couples looking for time to themselves, that is the wrong starting point. On a private boat you decide the flow: when do we anchor, how long do we stay in a bay, when is dinner served? There is no group anyone has to wait for, and nobody standing in your photo.",
            "Our boat is a white hardtop cabin boat with two 300 hp engines and room for no more than five guests. For two people that means plenty of space, a bench seat and comfortable boat chairs, shade from the hardtop cabin and a rear cockpit where dinner and sparkling wine are served. Hotel transfer in Ao Nang and Krabi is part of the tours, so you start from your hotel without detours.",
            "You do not have to be just two, either: if you combine the honeymoon with witnesses, parents or friends, you can bring up to five people. The price is per boat, not per person – an advantage for small groups.",
          ],
        },
        tip: {
          de: "Schreiben Sie uns den Anlass schon bei der Buchung, am besten mit Wunsch-Datum und Ausweichtermin. Dann können wir Uhrzeit, Ankerplatz und Ablauf darauf abstimmen, statt es am Pier zu improvisieren.",
          en: "Tell us the occasion when you book, ideally with a preferred date and a back-up date. Then we can match departure time, anchoring spot and schedule to it instead of improvising at the pier.",
        },
      },
      {
        h2: {
          de: "Die drei romantischen Touren im Überblick",
          en: "The three romantic tours at a glance",
        },
        body: {
          de: [
            "Für Paare kommen drei unserer Touren in Frage. Sie unterscheiden sich vor allem im Zeitpunkt und in der Länge, nicht im Anspruch: Alle sind privat, alle enden nach Sonnenuntergang, und bei allen können Sie Zusatzoptionen wie Romantik-Deko oder das Drohnenpaket dazubuchen. Die Preise gelten pro Boot für bis zu fünf Gäste.",
            "Wenn Sie den Antrag oder die erste Flasche Champagner vor allem mit Dinner verbinden wollen, ist Sunset Romance & Dinner an Bord die direkte Wahl. Wer lieber erst baden und dann den Abend erleben möchte, nimmt die Kombi mit Plankton. Und wer das Dinner bereits im Hotel plant, aber einen besonderen Abend auf dem Wasser sucht, findet in der reinen Night-Glow-Tour eine ruhige Alternative.",
          ],
          en: [
            "Three of our tours are a natural fit for couples. They differ mainly in timing and length, not in ambition: all are private, all end after sunset, and on all of them you can add extras such as romance decor or the drone package. Prices are per boat for up to five guests.",
            "If you want to connect the proposal or the first bottle of champagne with dinner, Sunset Romance & Dinner on Board is the direct choice. If you would rather swim first and then enjoy the evening, choose the combo with plankton. And if dinner is already planned at your hotel but you want a special evening on the water, the pure Night Glow tour is a quiet alternative.",
          ],
        },
        list: {
          de: [
            "Sunset Romance & Dinner an Bord (sunset-dinner): 16.500 THB pro Boot, 4 Std. ab 15:30, Stopps Koh Poda und Phra Nang Bay; inklusive Flasche Champagner und 3-Gänge-Dinner",
            "Sunset & Night Glow Kombi (sunset-glow-combo): 19.500 THB pro Boot, 6 Std. ab 15:30; Baden an Koh Poda, Sonnenuntergang mit Prosecco vor Phra Nang, danach Schwimmen im leuchtenden Plankton",
            "Night Glow – Leuchtendes Plankton per Speedboat (plankton-night): 14.500 THB pro Boot, 4 Std. ab 18:00; abgelegene dunkle Bucht, Motor und Lichter aus, am eindrucksvollsten rund um Neumond",
          ],
          en: [
            "Sunset Romance & Dinner on Board (sunset-dinner): 16,500 THB per boat, 4 hrs from 3:30 pm, stops at Koh Poda and Phra Nang Bay; includes a bottle of champagne and a 3-course dinner",
            "Sunset & Night Glow Combo (sunset-glow-combo): 19,500 THB per boat, 6 hrs from 3:30 pm; swim at Koh Poda, sunset with prosecco off Phra Nang, then a swim in glowing plankton",
            "Night Glow – Bioluminescent Plankton by Speedboat (plankton-night): 14,500 THB per boat, 4 hrs from 6 pm; secluded dark bay, engine and lights off, most intense around new moon",
          ],
        },
      },
      {
        h2: {
          de: "Heiratsantrag auf dem Boot: Timing und Ort",
          en: "Proposing on a boat: timing and place",
        },
        body: {
          de: [
            "Ja, ein Heiratsantrag auf einem privaten Boot in Krabi ist möglich – und bei uns kein ungewöhnlicher Wunsch. Die Sunset-Romance-Tour ist ausdrücklich für Anträge und Jahrestage gedacht. Wichtig ist, dass Sie den Moment so planen, dass er nicht vom Zufall abhängt: Wo steht das Boot, wie liegt das Licht, wer hält die Kamera?",
            "Für viele Paare ist das Heck-Cockpit der natürliche Ort. Es ist ruhig, die Gäste sitzen sich gegenüber, und hinter dem Boot liegt freie Sicht auf Wasser und Felsen. Wenn wir vor Phra Nang vor Anker liegen, steht die Sonne tief über dem Meer, die Felsen färben sich warm, und das Boot schaukelt sanft statt zu fahren. Das ist in der Regel der ruhigste Zeitpunkt des Tages.",
            "Planen Sie den Antrag nicht auf die letzte Minute der Sonne. Ein Sonnenuntergang dauert in den Tropen nicht lange, und Wolken können die Sonnenscheibe verdecken, während das Licht davor und danach oft schöner ist. Ein Puffer von zwanzig bis dreißig Minuten vor dem Sonnenuntergang gibt Ihnen und der Crew Spielraum. Ob die Sonne am Ende sichtbar ist, kann niemand garantieren; das Abendlicht und die Stimmung auf dem Wasser sind aber auch bei Wolken da.",
          ],
          en: [
            "Yes, a proposal on a private boat in Krabi is possible – and not an unusual request for us. The Sunset Romance tour is explicitly meant for proposals and anniversaries. What matters is planning the moment so it does not depend on chance: where is the boat, how does the light fall, who holds the camera?",
            "For many couples the rear cockpit is the natural place. It is quiet, you sit facing each other, and behind the boat there is an open view of water and rocks. When we are at anchor off Phra Nang, the sun hangs low over the sea, the cliffs turn warm, and the boat rocks gently instead of running. That is usually the calmest moment of the day.",
            "Do not schedule the proposal for the very last minute of the sun. A tropical sunset does not last long, and clouds can hide the sun disc while the light before and after is often prettier. A buffer of twenty to thirty minutes before sunset gives you and the crew room to manoeuvre. Nobody can guarantee that the sun will be visible in the end; the evening light and the mood on the water are there even with clouds.",
          ],
        },
        tip: {
          de: "Überlegen Sie sich vorab ein Zeichen für die Crew, zum Beispiel ein Wort im Chat vor der Abfahrt. Dann weiß der Kapitän, wann das Boot ruhig liegen und wann die Musik leiser sein soll – und Ihr Partner oder Ihre Partnerin merkt nichts.",
          en: "Agree a signal with the crew in advance, for example a word in a chat before departure. Then the captain knows when the boat should lie still and when the music should be turned down – and your partner notices nothing.",
        },
      },
      {
        h2: {
          de: "Ring, Crew und Absprache: So organisieren Sie die Überraschung",
          en: "Ring, crew and arrangements: how to organise the surprise",
        },
        body: {
          de: [
            "Der größte Fehler bei einem Antrag auf dem Wasser ist ein Ring, der nicht sicher aufbewahrt ist. Auf einem Boot gilt: Was auf Deck liegt, kann rutschen; was in der Hosentasche steckt, kann beim Einsteigen oder Schwimmen verloren gehen. Tragen Sie die Schachtel in einer geschlossenen Tasche mit Reißverschluss und halten Sie sie bis zum Moment nicht lose in der Hand. Wenn Sie sie der Crew zur Aufbewahrung geben möchten, sprechen Sie das ausdrücklich ab.",
            "Eingecremte, nasse Hände sind rutschig. Wer nach dem Schwimmen oder nach Sonnencreme den Ring übergibt, sollte die Hände abtrocknen. Eigene Ringe legen Sie vor dem Schwimmen besser ab und verstauen sie sicher. Aus dem gleichen Grund empfiehlt es sich, Verlobungs- oder Eheringe erst nach dem Wasserteil anzustecken.",
            "Sprechen Sie Uhrzeit, Ort und Ablauf mit uns ab, bevor Sie den Tag buchen: Wann soll das Dinner starten, soll es Musik geben, möchten Sie Blumen oder Deko, soll fotografiert oder gefilmt werden? Die Romantik-Deko mit Blumen kostet laut Buchungsoptionen 2.500 THB pro Boot und ist für Antrag, Jahrestag und Flitterwochen gedacht. Wir sagen Ihnen dann ehrlich, was zeitlich und technisch passt. Garantien für Wetter, Lichtstimmung oder Gefühle gibt es nicht – dafür einen Zeitplan ohne Zeitdruck.",
          ],
          en: [
            "The biggest mistake with a proposal on the water is a ring that is not stored safely. On a boat, what lies on deck can slide; what sits in a trouser pocket can get lost while boarding or swimming. Carry the box in a closed bag with a zip and do not hold it loose in your hand until the moment. If you would like the crew to look after it, agree that explicitly.",
            "Sun-creamed, wet hands are slippery. If you hand over the ring after swimming or after applying sunscreen, dry your hands first. Take off rings you already wear before swimming and stow them safely. For the same reason it makes sense to put on engagement or wedding rings only after the water part is done.",
            "Agree time, place and schedule with us before you book the day: When should dinner start, should there be music, would you like flowers or decor, should anyone take photos or film? According to the booking options, romance decor and flowers cost 2,500 THB per boat and are intended for proposals, anniversaries and honeymoons. We will tell you honestly what fits in terms of time and logistics. There are no guarantees for weather, light or feelings – but there is a schedule without time pressure.",
          ],
        },
        list: {
          de: [
            "Ring in geschlossener Tasche, nicht lose in der Hosentasche",
            "Crew vorab einweihen, nur das Nötige und nur den Kapitän",
            "Uhrzeit mit Puffer vor dem Sonnenuntergang wählen",
            "Rutschfeste Schuhe oder barfuß, keine glatten Sohlen",
            "Handy oder Kamera griffbereit, aber nicht im Wasser",
            "Plan B für Wolken oder Regen: Dinner und Sekt funktionieren auch ohne sichtbare Sonne",
          ],
          en: [
            "Ring in a closed bag, not loose in a trouser pocket",
            "Brief the crew in advance, only what is necessary and only the captain",
            "Pick a time with a buffer before sunset",
            "Non-slip shoes or barefoot, no slick soles",
            "Phone or camera at hand, but not near the water",
            "Plan B for clouds or rain: dinner and sparkling wine work without a visible sun, too",
          ],
        },
      },
      {
        h2: {
          de: "Drohnenpaket in 4K: Die Überraschung festhalten",
          en: "4K drone package: capturing the surprise",
        },
        body: {
          de: [
            "Viele Paare möchten den Moment festhalten, ohne dass einer von beiden hinter einer Kamera steht. Genau dafür gibt es unser 4K-Drohnenpaket: ein Pilot, ein kurzes Video (Reel) und 40 Luftbilder, geliefert am selben Abend. Es kostet laut Buchungsoptionen 4.500 THB pro Boot und ist optional.",
            "Was sich dabei sinnvoll filmen lässt: das Boot vor den Felsen von Phra Nang, die Ankunft im Abendlicht, die Bucht von oben, das Dinner im Heck von etwas Abstand. Für den Antrag selbst arbeiten viele Paare lieber ohne Drohne im Nahbereich und nehmen Handy oder Kamera in die Hand – das ist eine Frage des Geschmacks. Sprechen Sie vorab mit uns, was Sie sich wünschen.",
            "Wichtig sind die Regeln: Drohnen sind in Thailand registrierungspflichtig, und in Nationalparks gelten oft zusätzliche Bestimmungen. Flüge werden deshalb vorab mit dem Kapitän abgestimmt, damit Start und Landung sicher klappen. Weitere Hinweise finden Sie in unserem Guide zu Foto- und Drohnenspots. Ob und wo ein Drohnenflug im Einzelfall möglich ist, hängt von Ort, Wetter und Wind ab und lässt sich nicht pauschal zusagen.",
          ],
          en: [
            "Many couples want to capture the moment without one of them standing behind a camera. That is exactly what our 4K drone package is for: a pilot, a short video (reel) and 40 aerial photos, delivered the same evening. According to the booking options it costs 4,500 THB per boat and is optional.",
            "What makes sense to film: the boat in front of the Phra Nang cliffs, the arrival in evening light, the bay from above, dinner in the stern from a distance. For the proposal itself, many couples prefer no drone nearby and hold a phone or camera instead – a matter of taste. Tell us beforehand what you have in mind.",
            "The rules matter: drones must be registered in Thailand, and national parks often have additional regulations. Flights are therefore agreed with the captain in advance so that take-off and landing are safe. You will find more notes in our photo and drone spots guide. Whether and where a drone flight is possible in an individual case depends on location, weather and wind and cannot be promised in general.",
          ],
        },
        tip: {
          de: "Bitten Sie die Crew, ein paar Handyfotos mit Ihrer Kamera zu machen, falls die Drohne nicht fliegt. Ein zweites Gerät als Plan B entspannt den Abend.",
          en: "Ask the crew to take a few photos with your phone in case the drone does not fly. A second device as plan B relaxes the evening.",
        },
      },
      {
        h2: {
          de: "Beste Zeit für Flitterwochen in Krabi: Saison und Mondphase",
          en: "Best time for a honeymoon in Krabi: season and moon phase",
        },
        body: {
          de: [
            "Die ruhigere Saison ist in der Regel die Trockenzeit von etwa November bis April. In dieser Zeit sind Meer und Himmel meist verlässlicher, und Sunset-Touren profitieren davon. In den übrigen Monaten gibt es Schauer, Wind und manchmal unruhigeres Wasser, je nach Tag. Das heißt nicht, dass nichts geht, aber der Zeitplan braucht mehr Flexibilität. Mehr zur Reisezeit lesen Sie in unserem Guide zur besten Reisezeit für Krabi.",
            "Für Plankton kommt die Mondphase hinzu. Biolumineszenz ist am eindrucksvollsten in mondlosen Nächten rund um Neumond; bei Vollmond ist das Leuchten oft noch zu sehen, wirkt aber schwächer. Wie stark es an einem bestimmten Abend leuchtet, hängt außerdem von Wassertemperatur, Strömung und Jahreszeit ab. Es lässt sich nicht garantieren. Wenn Sie Plankton in Ihre Flitterwochen einplanen, schauen Sie in den Mondkalender und halten Sie mehrere Abende offen.",
            "Wer flexibel ist, plant die Hochzeitsreise so, dass der Sunset-Tag in die Nähe von Neumond fällt. Dann sitzen Sie am Heck beim Dinner, und nach Einbruch der Dunkelheit sind Sterne und Plankton die Zugabe.",
          ],
          en: [
            "The calmer season is usually the dry season from about November to April. During that period sea and sky are generally more reliable, and sunset tours benefit from that. In the remaining months there are showers, wind and sometimes rougher water, depending on the day. That does not mean nothing works, but the schedule needs more flexibility. You can read more about timing in our guide to the best time to visit Krabi.",
            "For plankton, the moon phase comes on top. Bioluminescence is most impressive on moonless nights around new moon; at full moon the glow can often still be seen but looks weaker. How strongly it glows on a particular evening also depends on water temperature, currents and season. It cannot be guaranteed. If you plan plankton into your honeymoon, check the moon calendar and keep several evenings open.",
            "If you are flexible, plan the honeymoon so that the sunset day falls near new moon. Then you sit in the stern at dinner, and after dark the stars and the plankton are the encore.",
          ],
        },
      },
      {
        h2: {
          de: "Dinner, Sekt und Deko an Bord: was möglich ist",
          en: "Dinner, sparkling wine and decor on board: what is possible",
        },
        body: {
          de: [
            "Bei Sunset Romance & Dinner an Bord sind eine Flasche Champagner und ein 3-Gänge-Dinner Teil der Tour. Serviert wird im Heck-Cockpit; wir ankern vor Phra Nang, während die Sonne untergeht. Die Tour ist vier Stunden lang und startet um 15:30 Uhr.",
            "Wenn Sie mehr wünschen, gibt es Zusatzoptionen, die Sie bei der Buchung auswählen: 2 Flaschen gekühlter Sekt mit Gläsern für Paare für 2.200 THB pro Boot, Premium-Champagner (Moët & Chandon Impérial, 0,75 l) für 6.500 THB pro Boot und Romantik-Deko mit Blumen für 2.500 THB pro Boot. Das Catering-Paket mit zwei frisch zubereiteten Mahlzeiten und Getränken liegt bei 500 THB pro Person.",
            "Wenn Sie Allergien haben, bestimmte Speisen nicht essen oder den Anlass vorab melden wollen, schreiben Sie uns das bitte bei der Buchung. Dann können wir Wünsche einplanen, statt sie an Bord zu klären. Die Kombi-Tour enthält Prosecco zum Sonnenuntergang und Getränke, die Plankton-Tour Handtücher, Snacks und Getränke; das 3-Gänge-Dinner gehört nur zur Dinner-Tour.",
          ],
          en: [
            "On Sunset Romance & Dinner on Board a bottle of champagne and a 3-course dinner are part of the tour. Dinner is served in the rear cockpit; we anchor off Phra Nang while the sun goes down. The tour lasts four hours and starts at 3:30 pm.",
            "If you want more, there are extras you select when booking: 2 bottles of chilled sparkling wine with glasses for couples for 2,200 THB per boat, premium champagne (Moët & Chandon Impérial, 0.75 l) for 6,500 THB per boat and romance decor with flowers for 2,500 THB per boat. The catering package with two freshly prepared meals and drinks is 500 THB per person.",
            "If you have allergies, do not eat certain foods or want to announce the occasion in advance, please tell us when booking. Then we can plan wishes in instead of sorting them out on board. The combo tour includes prosecco at sunset and drinks, the plankton tour towels, snacks and drinks; the 3-course dinner is only part of the dinner tour.",
          ],
        },
        tip: {
          de: "Kerzen und Wind vertragen sich auf dem Wasser schlecht. Fragen Sie nach windgeschützten Lösungen für die Tischdeko, statt sich auf offene Flammen zu verlassen.",
          en: "Candles and wind do not mix well on the water. Ask for wind-protected solutions for the table decor instead of relying on open flames.",
        },
      },
      {
        h2: {
          de: "Praktisches: Kleidung, Rutschfestes und Wetter-Plan B",
          en: "Practical: clothing, grip and a weather plan B",
        },
        body: {
          de: [
            "Auf dem Boot ist es abends oft windiger, als man denkt. Wer in einem leichten Kleid oder Hemd startet, sollte eine dünne Jacke oder ein Tuch mitnehmen. Nach Sonnenuntergang kann es auf See merklich kühler wirken, besonders nach dem Schwimmen. Ein trockenes Handtuch für die Rückfahrt ist eine gute Idee; bei der Plankton-Tour stellen wir Handtücher zur Verfügung.",
            "Schuhe: Bootsdeck ist bei Gischt rutschig. Barfuß oder mit rutschfesten Sohlen sind sicherer als glatte Ledersohlen oder hohe Absätze. Auch der Einstieg an Land und die Badeleiter verlangen sicheren Tritt. Kleidung, die nicht nass werden soll, gehört in eine Tasche; Sonnencreme und Insektenschutz am besten vor der Abfahrt auftragen und die Hände vor dem Ring-Moment abtrocknen.",
            "Plan B: Wolken nehmen dem Sonnenuntergang manchmal die Sonnenscheibe, aber nicht die Stimmung. Bei starkem Regen oder rauem Wasser entscheidet die Crew nach Sicherheitslage, ob und wie wir fahren. Wie Termine verschoben werden, besprechen wir mit Ihnen bei der Buchung; nennen Sie uns deshalb am besten einen Ausweichtag.",
          ],
          en: [
            "It is often windier on a boat in the evening than you think. If you start in a light dress or shirt, bring a thin jacket or a wrap. After sunset it can feel noticeably cooler at sea, especially after swimming. A dry towel for the ride back is a good idea; on the plankton tour we provide towels.",
            "Shoes: a boat deck is slippery with spray. Barefoot or non-slip soles are safer than smooth leather soles or high heels. Boarding from land and the swim ladder also need secure footing. Clothes that should stay dry belong in a bag; apply sunscreen and insect repellent before departure and dry your hands before the ring moment.",
            "Plan B: clouds sometimes take the sun disc out of a sunset, but not the mood. In heavy rain or rough water the crew decides based on the safety situation whether and how we go. How dates are moved we discuss with you when booking; that is why it is best to name a back-up day.",
          ],
        },
      },
      {
        h2: {
          de: "Flitterwochen-Ablauf in Krabi: Ein Boots-Highlight in drei Tagen",
          en: "Honeymoon itinerary in Krabi: one boat highlight in three days",
        },
        body: {
          de: [
            "Sie müssen nicht jeden Tag auf dem Wasser verbringen. Für Flitterwochen funktioniert oft ein Rhythmus aus Ankommen, Strand und einem Boots-Highlight. Ein Vorschlag, den Sie nach Wetter und Laune verschieben können.",
            "Tag 1: Ankommen, Pool, Strand und früher Abend, ohne Pflichtprogramm. Tag 2: das Boots-Highlight, zum Beispiel Sunset Romance & Dinner an Bord, oder die Kombi mit Plankton, wenn Neumond nah ist. Vormittags ausschlafen, mittags leicht essen, um 15:30 Uhr geht es los. Tag 3: Pausentag oder Landprogramm, am Abend ein ruhiges Dinner im Hotel oder am Strand.",
            "Wenn Ihnen zwei Boots-Tage gefallen, können Sie mit einer Tagestour kombinieren: etwa die 4-Islands-VIP- und Sunset-Tour mit Sonnenuntergang vor Phra Nang und gekühltem Prosecco, die um 13:00 Uhr startet und sechs Stunden dauert. Welche Route für welches Datum passt, hängt von Gezeiten und Wetter ab. Mehr dazu im Guide zu Phra Nang und im Plankton-Guide.",
          ],
          en: [
            "You do not have to spend every day on the water. For a honeymoon, a rhythm of arrival, beach and one boat highlight often works well. A suggestion you can shift according to weather and mood.",
            "Day 1: arrive, pool, beach and an early evening, no compulsory programme. Day 2: the boat highlight, for example Sunset Romance & Dinner on Board, or the combo with plankton if new moon is near. Sleep in, a light lunch, and at 3:30 pm we set off. Day 3: rest day or a land programme, in the evening a quiet dinner at the hotel or on the beach.",
            "If you like the idea of two boat days, you can combine with a day tour: for example the 4-Islands VIP & Sunset tour with a sunset off Phra Nang and chilled prosecco, which starts at 1 pm and lasts six hours. Which route suits which date depends on tides and weather. More in the Phra Nang guide and the plankton guide.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Wo kann man in Krabi einen Heiratsantrag machen?",
          en: "Where can you propose in Krabi?",
        },
        a: {
          de: "Beliebt sind Orte mit ruhiger Kulisse und gutem Licht: Strände wie Phra Nang oder Railay zum Sonnenuntergang, Inselbuchten und ein privates Boot, bei dem Sie Zeit und Ort selbst bestimmen. Wer Ruhe vor Publikum möchte, ist auf dem Wasser meist besser aufgehoben als an einem überfüllten Aussichtspunkt.",
          en: "Popular places combine a calm setting with good light: beaches such as Phra Nang or Railay at sunset, island bays and a private boat where you decide time and place yourself. If you want peace and no audience, the water is usually a better choice than a crowded viewpoint.",
        },
      },
      {
        q: {
          de: "Kann ich auf einem privaten Boot in Krabi einen Antrag machen?",
          en: "Can I propose on a private boat in Krabi?",
        },
        a: {
          de: "Ja. Die Tour Sunset Romance & Dinner an Bord ist ausdrücklich für Anträge und Jahrestage gedacht. Sprechen Sie Anlass, Wunsch-Uhrzeit und Deko vorab mit uns ab; Garantien für Wetter und Sonnenschein gibt es nicht, aber einen privaten Rahmen ohne fremde Gäste.",
          en: "Yes. The Sunset Romance & Dinner on Board tour is explicitly meant for proposals and anniversaries. Agree occasion, preferred time and decor with us beforehand; there are no guarantees for weather and sunshine, but you get a private setting without other guests.",
        },
      },
      {
        q: {
          de: "Was ist die romantischste Tour in Krabi für Paare?",
          en: "What is the most romantic tour in Krabi for couples?",
        },
        a: {
          de: "Das ist Geschmackssache. Wer Dinner und Champagner zum Sonnenuntergang möchte, wählt Sunset Romance & Dinner an Bord. Wer zusätzlich Plankton erleben will, nimmt die Sunset-&-Night-Glow-Kombi. Reine Plankton-Abende sind etwas für Paare, die es dunkler und stiller mögen.",
          en: "That is a matter of taste. If you want dinner and champagne at sunset, choose Sunset Romance & Dinner on Board. If you also want to experience plankton, take the Sunset & Night Glow combo. Pure plankton evenings suit couples who like it darker and quieter.",
        },
      },
      {
        q: {
          de: "Wann ist die beste Zeit für Flitterwochen in Krabi?",
          en: "When is the best time for a honeymoon in Krabi?",
        },
        a: {
          de: "In der Regel die Trockenzeit von etwa November bis April, mit verlässlicherem Wetter und ruhigerem Meer. Außerhalb dieser Monate sind Reisen möglich, brauchen aber mehr Flexibilität beim Termin. Wer Plankton möchte, achtet zusätzlich auf Neumond.",
          en: "Usually the dry season from about November to April, with more reliable weather and calmer seas. Outside those months travel is possible but needs more flexibility with dates. If you want plankton, also look at new moon.",
        },
      },
      {
        q: {
          de: "Kann man in Krabi leuchtendes Plankton sehen?",
          en: "Can you see glowing plankton in Krabi?",
        },
        a: {
          de: "Ja, in dunklen Buchten ohne Lichtverschmutzung, am besten in mondlosen Nächten rund um Neumond. Die Intensität schwankt natürlich mit Wassertemperatur, Strömung und Jahreszeit und ist nicht garantiert. Wir fahren per Speedboat in eine dunkle Bucht und schalten Motor und Lichter aus.",
          en: "Yes, in dark bays without light pollution, best on moonless nights around new moon. Intensity naturally varies with water temperature, currents and season and is not guaranteed. We take the speedboat to a dark bay and switch off engine and lights.",
        },
      },
      {
        q: {
          de: "Gibt es Dinner an Bord bei Sonnenuntergang?",
          en: "Is there dinner on board at sunset?",
        },
        a: {
          de: "Ja, bei der Tour Sunset Romance & Dinner an Bord: Flasche Champagner und 3-Gänge-Dinner im Heck-Cockpit, Start um 15:30 Uhr. Zusätzlich lässt sich Catering für 500 THB pro Person buchen. Allergien und Wünsche geben Sie bitte vorab an.",
          en: "Yes, on the Sunset Romance & Dinner on Board tour: a bottle of champagne and a 3-course dinner in the rear cockpit, starting at 3:30 pm. You can also add catering for 500 THB per person. Please let us know allergies and wishes in advance.",
        },
      },
    ],
    related: [
      "krabi-bioluminescent-plankton-night-boat-tour",
      "koh-poda-guide",
      "krabi-photo-drone-spots",
      "railay-phra-nang-cave",
    ],
    tourIds: ["sunset-dinner", "sunset-glow-combo", "plankton-night"],
    image: IMG.dinner,
  },
  /* ───────────────────────── Private sunset tour ───────────────────────── */
  {
    slug: "krabi-sunset-boat-tour-private",
    category: "insider",
    short: { de: "Sunset-Tour privat", en: "Private sunset tour" },
    primaryKeyword: "Sunset Tour Krabi privat",
    keywords: [
      "Sunset Tour Krabi privat",
      "Sonnenuntergang Krabi Boot",
      "Sunset Cruise Krabi",
      "Ao Nang Sonnenuntergang Boot",
      "Krabi Sunset Dinner Boot",
      "Sonnenuntergang Railay Phra Nang",
      "Krabi Abendtour Speedboot",
      "Krabi sunset boat tour private",
      "Krabi sunset cruise",
      "Ao Nang sunset boat tour",
      "best sunset spot Krabi",
      "Krabi sunset dinner cruise",
    ],
    title: {
      de: "Sunset-Tour Krabi: Privat mit dem Speedboot",
      en: "Krabi Sunset Boat Tour: Private Speedboat Guide",
    },
    metaDescription: {
      de: "Sonnenuntergang vom Wasser: Beste Zeiten, Routen und Spots für eine private Sunset-Tour ab Ao Nang – mit Dinner an Bord und Plankton-Option.",
      en: "Watch the sunset from the water: best times, routes and spots for a private sunset tour from Ao Nang – with dinner on board and plankton option.",
    },
    h1: {
      de: "Sunset-Tour in Krabi: Der Sonnenuntergang vom privaten Speedboot",
      en: "Krabi sunset boat tour: the sunset from a private speedboat",
    },
    intro: {
      de: "Krabi liegt an der Andamanensee, und wer abends aufs Meer blickt, schaut nach Westen – genau dorthin, wo die Sonne untergeht. Vom Strand aus ist das schön, vom Wasser aus ist es etwas anderes: Sie sehen die Kalksteinfelsen als Silhouetten, das Licht färbt Wasser und Wolken, und niemand steht zwischen Ihnen und dem Horizont. Eine private Sunset-Tour in Krabi ab Ao Nang bringt Sie genau dorthin, mit eigenem Boot, höchstens fünf Gästen und einem Zeitplan, der nach der Sonne richtet und nicht nach dem Fahrplan einer Gruppe. Dieser Guide erklärt die besten Spots, unsere drei Sunset-Touren mit Startzeiten, wie Gezeiten und Jahreszeit den Abend beeinflussen, was Dinner an Bord und Plankton danach bedeuten und wie Sie auch bei Wolken einen guten Abend haben.",
      en: "Krabi sits on the Andaman Sea, and when you look out over the water in the evening you look west – exactly where the sun goes down. From the beach that is lovely; from the water it is something else: you see the limestone cliffs as silhouettes, the light colours water and clouds, and nobody stands between you and the horizon. A private sunset boat tour in Krabi from Ao Nang takes you right there, with your own boat, no more than five guests and a schedule that follows the sun rather than a group timetable. This guide explains the best spots, our three sunset tours with departure times, how tides and season shape the evening, what dinner on board and plankton afterwards mean, and how to have a good evening even with clouds.",
    },
    sections: [
      {
        h2: {
          de: "Warum der Sonnenuntergang vom Wasser anders ist",
          en: "Why a sunset from the water is different",
        },
        body: {
          de: [
            "Krabis Küste blickt nach Westen auf die Andamanensee. Das bedeutet: Der Tag endet hier mit einem freien Blick auf den Horizont, oft mit Inseln davor. Vom Strand sehen Sie ein Stück Meer. Vom Boot sehen Sie das Ganze – die Felsen, die sich dunkel vor dem Himmel abzeichnen, das Wasser, das von Gold zu Rosa zu Blaugrau wechselt, und je nach Standort die Silhouetten von Inseln, die tagsüber nur Kulisse sind.",
            "Hinzu kommt Ruhe. Strände wie Ao Nang oder Railay West sind am Abend gut besucht, an manchen Tagen sehr. Auf dem Boot sind Sie vom Trubel getrennt, weil Sie ein Stück hinausfahren und dort ankern, wo die Sicht stimmt und das Wasser ruhig liegt. Wir entscheiden vor Ort nach Wind, Licht und Gezeiten, wo das ist.",
            "Und ein Punkt, der oft vergessen wird: Auf einer Sunset-Tour sehen Sie nicht nur den Moment des Untergangs, sondern die ganze Stunde davor und danach. Das weiche Licht am späten Nachmittag und das Nachglühen nach der Sonne sind oft schöner als die Sonnenscheibe selbst.",
          ],
          en: [
            "Krabi’s coast faces west over the Andaman Sea. That means the day ends here with a free view of the horizon, often with islands in front of it. From the beach you see a slice of sea. From a boat you see the whole picture – the cliffs standing dark against the sky, the water shifting from gold to pink to blue-grey and, depending on where you are, the silhouettes of islands that are only scenery by day.",
            "Then there is quiet. Beaches such as Ao Nang or Railay West are well visited in the evening, on some days very busy. On the boat you are separated from the bustle because you go a little way out and anchor where the view is right and the water lies calm. We decide on site according to wind, light and tides where that is.",
            "And a point that is often forgotten: on a sunset tour you do not only see the moment of sunset, but the entire hour before and after. The soft light in the late afternoon and the afterglow once the sun has gone are often more beautiful than the sun disc itself.",
          ],
        },
        tip: {
          de: "Planen Sie nicht nur den Sonnenuntergang, sondern das Zeitfenster davor und danach. Wer eine halbe Stunde früher ankert, sieht den Farbwechsel von Anfang an und muss nicht hetzen.",
          en: "Plan not only the sunset itself but the window before and after. If you anchor half an hour earlier, you see the colour change from the start and do not have to rush.",
        },
      },
      {
        h2: {
          de: "Beste Spots für den Sonnenuntergang rund um Ao Nang",
          en: "Best sunset spots around Ao Nang",
        },
        body: {
          de: [
            "Es gibt keinen einen besten Platz, denn der Sonnenuntergang wandert im Jahresverlauf ein Stück am Horizont und die Gezeiten verändern, wo ein Boot gut liegt. Es gibt aber ein paar Orte, die sich in der Region bewährt haben.",
            "Ao Nang: der Strand selbst, mit Blick aufs Wasser und den Inseln davor. Gut zu erreichen, aber an schönen Abenden voll. Railay West und Phra Nang: Die Felsen von Phra Nang stehen im Abendlicht besonders eindrucksvoll, und die Bucht ist der Ort, vor dem wir bei der Sunset-Tour in der Regel ankern. Koh Poda: Die flache Insel mit ihren Stränden ist ein beliebter Stopp am späten Nachmittag, bevor es in Richtung Phra Nang zum Sonnenuntergang geht. Wie gut die Sicht an einem Abend ist, hängt von Wetter und Wind ab.",
            "Mehr zu den einzelnen Orten finden Sie in unseren Guides zu Phra Nang und Koh Poda. Wer ohnehin Fotos plant, findet im Guide zu Foto- und Drohnenspots weitere Hinweise zum Licht.",
          ],
          en: [
            "There is no single best place, because over the year the sunset moves along the horizon and the tides change where a boat sits well. But a few places have proven themselves in the region.",
            "Ao Nang: the beach itself, with a view over the water and the islands in front. Easy to reach but busy on nice evenings. Railay West and Phra Nang: the Phra Nang cliffs look especially impressive in evening light, and the bay is where we usually anchor on the sunset tour. Koh Poda: the flat island with its beaches is a popular stop in the late afternoon before heading towards Phra Nang for the sunset. How good the view is on a given evening depends on weather and wind.",
            "You can read more about the individual places in our guides to Phra Nang and Koh Poda. If you plan photos anyway, our guide to photo and drone spots has further notes on the light.",
          ],
        },
        list: {
          de: [
            "Phra Nang Bay: Kalksteinfelsen im Abendlicht, Ankerplatz unserer Sunset-Touren",
            "Koh Poda: Badestopp am späten Nachmittag, bevor es zum Sonnenuntergang geht",
            "Ao Nang Bay: guter Blick zurück zur Küste, wenn die Lichter angehen",
            "Dunkle Bucht für Plankton: ruhiger Abschluss nach dem Sonnenuntergang (Kombi-Tour)",
          ],
          en: [
            "Phra Nang Bay: limestone cliffs in evening light, anchoring spot of our sunset tours",
            "Koh Poda: swim stop in the late afternoon before the sunset",
            "Ao Nang Bay: good view back to the coast when the lights come on",
            "Dark bay for plankton: calm finale after the sunset (combo tour)",
          ],
        },
      },
      {
        h2: {
          de: "Startzeiten und Ablauf unserer Sunset-Touren",
          en: "Departure times and schedule of our sunset tours",
        },
        body: {
          de: [
            "Wir bieten drei Touren an, bei denen der Sonnenuntergang eingeplant ist. Alle sind privat, alle gelten pro Boot für bis zu fünf Gäste, alle enthalten den Hotel-Transfer in Ao Nang und Krabi. Die Startzeiten sind so gewählt, dass Sie vor dem Sonnenuntergang genug Zeit zum Baden und Ankommen haben.",
            "Wann Sie zurück sind, ergibt sich aus Startzeit und Dauer: Bei 15:30 Uhr plus vier Stunden sind das grob 19:30 Uhr, bei der Kombi mit sechs Stunden grob 21:30 Uhr. Bei der Plankton-Tour mit Start 18:00 Uhr und vier Stunden Dauer sind Sie gegen 22 Uhr zurück. Das sind Richtwerte; der genaue Ablauf richtet sich nach Wetter, Wind und Ihrem Tempo.",
            "Ein gemeinsames Muster: früh genug starten, am späten Nachmittag baden oder schnorcheln, zum Sonnenuntergang ankern, dann entweder Dinner, Rückfahrt oder Plankton. Bei allen Touren können Sie auf Wunsch das 4K-Drohnenpaket und Catering (500 THB pro Person) dazubuchen.",
          ],
          en: [
            "We offer three tours in which the sunset is built in. All are private, all apply per boat for up to five guests, all include hotel transfer in Ao Nang and Krabi. The start times are chosen so that you have enough time to swim and settle in before the sunset.",
            "When you are back follows from start time and duration: 3:30 pm plus four hours means roughly 7:30 pm, the combo with six hours roughly 9:30 pm. On the plankton tour, starting at 6 pm with four hours, you are back around 10 pm. These are guidelines; the exact schedule depends on weather, wind and your pace.",
            "A common pattern: start early enough, swim or snorkel in the late afternoon, anchor for the sunset, then either dinner, the ride back or plankton. On all tours you can add the 4K drone package and catering (500 THB per person) if you like.",
          ],
        },
        list: {
          de: [
            "4-Islands VIP & Sunset Special (4islands-sunset): 18.500 THB pro Boot, 6 Std. ab 13:00; Koh Poda, Chicken Island, Tup Sandbank, Phra Nang Cave; Sunset-Prosecco an Bord",
            "Sunset Romance & Dinner an Bord (sunset-dinner): 16.500 THB pro Boot, 4 Std. ab 15:30; Koh Poda, Phra Nang Bay; Flasche Champagner und 3-Gänge-Dinner",
            "Sunset & Night Glow Kombi (sunset-glow-combo): 19.500 THB pro Boot, 6 Std. ab 15:30; Koh Poda, Phra Nang Bay, dunkle Bucht mit Plankton; Sunset-Prosecco",
          ],
          en: [
            "4-Islands VIP & Sunset Special (4islands-sunset): 18,500 THB per boat, 6 hrs from 1 pm; Koh Poda, Chicken Island, Tup Sandbar, Phra Nang Cave; sunset prosecco on board",
            "Sunset Romance & Dinner on Board (sunset-dinner): 16,500 THB per boat, 4 hrs from 3:30 pm; Koh Poda, Phra Nang Bay; bottle of champagne and 3-course dinner",
            "Sunset & Night Glow Combo (sunset-glow-combo): 19,500 THB per boat, 6 hrs from 3:30 pm; Koh Poda, Phra Nang Bay, dark bay with plankton; sunset prosecco",
          ],
        },
      },
      {
        h2: {
          de: "Wann geht die Sonne in Krabi unter? Saison und Gezeiten",
          en: "What time is sunset in Krabi? Season and tides",
        },
        body: {
          de: [
            "Krabi liegt nahe am Äquator, deshalb schwankt die Tageslänge im Jahresverlauf nur wenig. Als grobe Orientierung geht die Sonne ganzjährig etwa zwischen 18 und 19 Uhr unter. Im Winterhalbjahr ist es eher früher, in den Sommermonaten eher später. Die Dämmerung ist in den Tropen kurz: Nach dem Untergang wird es innerhalb von etwa einer halben Stunde dunkel. Wenn Sie es genau wissen wollen, prüfen Sie den Tag Ihrer Tour in einer Sonnenzeiten-App oder auf einer Wetterseite.",
            "Die Gezeiten spielen eine Rolle, weil sie Bademöglichkeiten und Ankerplätze beeinflussen. Die Tup-Sandbank im Rahmen der 4-Islands-Tour zeigt sich bei Ebbe, bei Flut ist sie überspült. Auch die Bucht vor Phra Nang verändert sich: Wie nah ein Boot an den Strand kommt, hängt vom Wasserstand ab. Wir planen Reihenfolge und Zeiten deshalb nach der Tide des Tages. Wie Gezeiten funktionieren, steht in unserem Gezeiten-Guide.",
            "Praktisch: Nennen Sie uns bei der Buchung einen Wunschtag und einen Ausweichtag. Dann können wir den Tag wählen, an dem Gezeiten und Wetter am besten zusammenpassen.",
          ],
          en: [
            "Krabi is close to the equator, so day length varies only a little over the year. As a rough guide the sun sets year-round between about 6 and 7 pm. In the winter half-year it tends to be earlier, in the summer months later. Twilight is short in the tropics: after sunset it gets dark within about half an hour. If you want to know exactly, check the day of your tour in a sun-times app or a weather site.",
            "Tides play a role because they affect swim options and anchoring spots. The Tup sandbar on the 4-Islands tour shows itself at low tide and is covered at high tide. The bay in front of Phra Nang changes too: how close a boat gets to the beach depends on the water level. We therefore plan order and timing according to the tide of the day. How tides work is explained in our tides guide.",
            "Practical: give us a preferred day and a back-up day when booking. Then we can choose the day on which tides and weather fit together best.",
          ],
        },
        tip: {
          de: "Prüfen Sie am Tag vorher Mond und Gezeiten. Bei Neumond ist der Abend nach dem Sonnenuntergang besonders dunkel, was für die Kombi-Tour mit Plankton ein Vorteil ist.",
          en: "Check moon and tides the day before. At new moon the evening after sunset is especially dark, which is an advantage for the combo tour with plankton.",
        },
      },
      {
        h2: {
          de: "Sunset mit Dinner an Bord oder mit Plankton danach",
          en: "Sunset with dinner on board or with plankton afterwards",
        },
        body: {
          de: [
            "Wer den Abend nicht nur mit dem Sonnenuntergang beenden möchte, hat zwei Möglichkeiten. Erstens das Dinner an Bord: Bei Sunset Romance & Dinner an Bord ankern wir vor Phra Nang, Sie haben eine Flasche Champagner und ein 3-Gänge-Dinner im Heck-Cockpit. Das ist die ruhigste Variante, gut für Paare, Jahrestage oder einfach für alle, die gern lange sitzen.",
            "Zweitens Plankton danach: Bei der Kombi fahren wir nach dem Sonnenuntergang in eine dunkle Bucht ohne Lichtverschmutzung. Wir schalten Motor und Lichter aus, und wer ins warme Wasser gleitet, sieht bei Bewegung blaues Leuchten. Der Effekt ist am stärksten rund um Neumond, wie stark er an einem Abend ist, hängt von Wassertemperatur, Strömung und Jahreszeit ab und lässt sich nicht garantieren. Mehr dazu im Plankton-Guide.",
            "Ein Dinner und Plankton lassen sich in einer Tour nicht beliebig verbinden: Die Dinner-Tour hat vier Stunden, die Kombi sechs. Wenn Sie beides wollen, sprechen Sie uns an – dann klären wir, was zeitlich und logistisch passt.",
          ],
          en: [
            "If you do not want to end the evening with just the sunset, you have two options. First, dinner on board: on Sunset Romance & Dinner on Board we anchor off Phra Nang, and you have a bottle of champagne and a 3-course dinner in the rear cockpit. This is the calmest variant, good for couples, anniversaries or anyone who likes to sit for a long time.",
            "Second, plankton afterwards: on the combo we go to a dark bay without light pollution after sunset. We switch off engine and lights, and anyone who slips into the warm water sees a blue glow with every movement. The effect is strongest around new moon; how strong it is on a given evening depends on water temperature, currents and season and cannot be guaranteed. More in the plankton guide.",
            "Dinner and plankton cannot be combined in one tour at will: the dinner tour is four hours, the combo six. If you want both, talk to us – then we will clarify what fits in terms of time and logistics.",
          ],
        },
      },
      {
        h2: {
          de: "Gruppen-Sunset-Cruise oder privat: ein ehrlicher Vergleich",
          en: "Group sunset cruise or private: an honest comparison",
        },
        body: {
          de: [
            "Gruppen-Sunset-Cruises gibt es in vielen Formen. Je nach Anbieter sind es größere Boote mit Buffet, feste Routen und einem Fahrplan, der sich an alle richtet. Das ist günstiger pro Kopf und für manche genau richtig. Wir behaupten nicht, dass jede Gruppentour schlecht ist; wir sagen nur, was bei einem privaten Boot anders ist.",
            "Auf einem Gruppenboot teilen Sie den Sonnenuntergang mit vielen Fremden. Bei uns sind es höchstens fünf Gäste, die Sie selbst mitbringen. Sie bestimmen Zeit und Ort mit, Sie können länger an einem Platz bleiben oder früher weiterfahren. In unseren Vergleichstabellen sprechen wir bei Gruppen-Speedbooten von 30 bis 40 Fremden an Bord, starrem Zeitplan und überfüllten Buchten zur Hauptzeit; das ist unsere Beobachtung und kein Urteil über einzelne Anbieter.",
            "Dafür kostet ein privates Boot mehr in der Summe. Der Preis gilt aber pro Boot, nicht pro Person. Ab einer Gruppe von drei bis fünf Personen relativiert sich der Unterschied oft. Wer zu zweit fährt und den Abend für sich sucht, bekommt Ruhe, Platz und einen Zeitplan, der sich nach dem Licht richtet.",
          ],
          en: [
            "Group sunset cruises come in many forms. Depending on the operator they are larger boats with a buffet, fixed routes and a schedule aimed at everyone. That is cheaper per head and exactly right for some. We do not claim that every group tour is bad; we only say what is different on a private boat.",
            "On a group boat you share the sunset with many strangers. With us it is no more than five guests, whom you bring yourself. You help decide time and place, you can stay longer in one spot or move on earlier. In our comparison tables we describe group speedboats as having 30 to 40 strangers on board, a rigid schedule and crowded bays at peak time; that is our observation and not a judgement of individual operators.",
            "On the other hand a private boat costs more in total. But the price is per boat, not per person. With a group of three to five people the difference often shrinks. If you travel as a couple and want the evening to yourselves, you get quiet, space and a schedule that follows the light.",
          ],
        },
      },
      {
        h2: {
          de: "Wetter, Wolken und Plan B: wann der Sonnenuntergang ausfällt",
          en: "Weather, clouds and plan B: when the sunset does not show",
        },
        body: {
          de: [
            "Eine Sunset-Tour hängt vom Wetter ab, und das sollte man ehrlich sagen. Wolken am Horizont können die Sonnenscheibe verdecken, Regenschauer können einen Abend verändern, und bei rauem Wasser oder starkem Wind entscheidet die Crew nach Sicherheitslage, ob und wohin gefahren wird. Eine Garantie für einen sichtbaren Sonnenuntergang gibt es nicht.",
            "Gleichzeitig sind Wolken nicht automatisch schlecht: Locker verteilte Wolken am Horizont sorgen oft für die intensivsten Farben, und das Licht nach dem Untergang färbt den Himmel häufig kräftiger als der eigentliche Moment. Wer nur auf die Sonnenscheibe fixiert ist, übersieht das.",
            "Plan B: Nennen Sie uns bei der Buchung einen Ausweichtag. Wie wir Termine bei schlechtem Wetter verschieben, klären wir mit Ihnen vor der Buchung, damit Sie keine Überraschung erleben. Wichtig ist uns, dass Sie die Fahrt erst dann antreten, wenn sie sicher und angenehm ist.",
          ],
          en: [
            "A sunset tour depends on the weather, and that should be said honestly. Clouds on the horizon can hide the sun disc, showers can change an evening, and in rough water or strong wind the crew decides based on the safety situation whether and where to go. There is no guarantee of a visible sunset.",
            "At the same time clouds are not automatically bad: loosely scattered clouds on the horizon often produce the most intense colours, and the light after sunset often tints the sky more strongly than the moment itself. Anyone fixated only on the sun disc misses that.",
            "Plan B: name a back-up day when booking. How we move dates in bad weather we clarify with you before booking so there are no surprises. What matters to us is that you set off only when the trip is safe and pleasant.",
          ],
        },
      },
      {
        h2: {
          de: "Fotografieren: Goldene Stunde und 4K-Drohne",
          en: "Photography: golden hour and the 4K drone",
        },
        body: {
          de: [
            "Das beste Licht für Fotos liegt nicht im Augenblick des Untergangs, sondern etwa in der Stunde davor (goldene Stunde) und kurz danach (blaue Stunde). Gegenlicht gibt Silhouetten, seitliches Licht färbt Felsen und Haut warm. Wenn Sie ein Foto mit den Karstfelsen und dem Boot wollen, ist die Zeit vor dem Sonnenuntergang besser als die Minute, in der die Sonne im Meer verschwindet.",
            "Unser 4K-Drohnenpaket enthält einen Piloten, ein Reel und 40 Luftbilder, geliefert am selben Abend. Es kostet laut Buchungsoptionen 4.500 THB pro Boot und ist optional. Drohnen sind in Thailand registrierungspflichtig, und in Nationalparks können zusätzliche Regeln gelten; Flüge sprechen wir deshalb vorab mit dem Kapitän ab. Ob geflogen werden kann, hängt auch von Wind und Standort ab.",
            "Telefone und Kameras gehören bei Fahrt in eine wasserdichte Tasche, weil Gischt bis weit ins Boot gelangen kann. Mehr zu Fotospots und Licht in unserem Foto- und Drohnen-Guide.",
          ],
          en: [
            "The best light for photos is not at the instant of sunset but roughly in the hour before (golden hour) and shortly after (blue hour). Backlight gives silhouettes, side light tints rocks and skin warm. If you want a photo with the karst cliffs and the boat, the time before sunset is better than the minute the sun disappears into the sea.",
            "Our 4K drone package includes a pilot, a reel and 40 aerial photos, delivered the same evening. According to the booking options it costs 4,500 THB per boat and is optional. Drones must be registered in Thailand, and additional rules can apply in national parks; we therefore agree flights with the captain in advance. Whether a flight is possible also depends on wind and location.",
            "Phones and cameras belong in a waterproof bag while the boat is moving, because spray can reach well into the boat. More about photo spots and light in our photo and drone guide.",
          ],
        },
      },
      {
        h2: {
          de: "Was Sie für den Abend mitnehmen sollten",
          en: "What to bring for the evening",
        },
        body: {
          de: [
            "Eine Sunset-Tour ist kein langer Ausflug, aber ein paar Dinge machen den Abend angenehmer. Dazu gehören eine leichte Jacke oder ein Tuch, weil der Fahrtwind abends kühler wirken kann, Badekleidung, falls Sie am späten Nachmittag baden, ein Handtuch für die Rückfahrt und Sonnenschutz für die erste Hälfte des Nachmittags. Schnorchelausrüstung stellen wir kostenlos zur Verfügung, bitte bei der Buchung ankreuzen.",
            "Bei der 4-Islands-Sunset-Tour und der Kombi sind Wasser, Softdrinks und Obst dabei, dazu Prosecco zum Sonnenuntergang; die Dinner-Tour bringt Champagner und das 3-Gänge-Dinner mit. Wer mehr essen möchte, bucht das Catering mit zwei frisch zubereiteten Mahlzeiten für 500 THB pro Person dazu.",
            "Und: Kommen Sie entspannt an. Der Plan ist einfach – raus aufs Wasser, ankern, schauen. Mehr braucht ein guter Sonnenuntergang nicht.",
          ],
          en: [
            "A sunset tour is not a long outing, but a few things make the evening more pleasant. They include a light jacket or wrap because the wind of the ride can feel cooler in the evening, swimwear if you swim in the late afternoon, a towel for the ride back and sun protection for the first half of the afternoon. We provide snorkel gear free of charge; please tick it when booking.",
            "The 4-Islands Sunset tour and the combo include water, soft drinks and fruit plus prosecco at sunset; the dinner tour brings champagne and the 3-course dinner. If you want more food, book the catering with two freshly prepared meals for 500 THB per person.",
            "And arrive relaxed. The plan is simple – out on the water, anchor, watch. A good sunset needs nothing more.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Wo sieht man in Krabi den schönsten Sonnenuntergang?",
          en: "Where is the best sunset in Krabi?",
        },
        a: {
          de: "Beliebt sind Ao Nang, Railay West und die Bucht vor Phra Nang mit ihren Kalksteinfelsen. Vom Wasser aus sehen Sie die Felsen als Silhouetten und sind vom Strandtrubel getrennt. Welcher Platz am besten ist, hängt von Jahreszeit, Wolken und Gezeiten ab.",
          en: "Popular choices are Ao Nang, Railay West and the bay in front of Phra Nang with its limestone cliffs. From the water you see the cliffs as silhouettes and are separated from the beach bustle. Which spot is best depends on season, clouds and tides.",
        },
      },
      {
        q: {
          de: "Wann geht die Sonne in Krabi unter?",
          en: "What time is sunset in Krabi?",
        },
        a: {
          de: "Grob zwischen 18 und 19 Uhr; im Winterhalbjahr eher früher, in den Sommermonaten eher später. Die genaue Zeit für Ihren Tag finden Sie in einer Sonnenzeiten-App. Nach dem Untergang wird es in den Tropen schnell dunkel.",
          en: "Roughly between 6 and 7 pm; in the winter half-year more towards the earlier end, in the summer months later. You will find the exact time for your day in a sun-times app. After sunset it gets dark quickly in the tropics.",
        },
      },
      {
        q: {
          de: "Lohnt sich eine Sunset-Bootstour in Krabi?",
          en: "Is a sunset boat tour in Krabi worth it?",
        },
        a: {
          de: "Wenn Ihnen Ruhe, Platz und ein eigener Zeitplan wichtig sind, ja. Auf einem privaten Boot sehen Sie die Felsen und das Licht ohne Gedränge. Wer ein günstigeres Gruppenformat bevorzugt, kann das tun; es ist ein anderes Erlebnis.",
          en: "If quiet, space and your own schedule matter to you, yes. On a private boat you see the cliffs and the light without crowds. If you prefer a cheaper group format, you can do that; it is a different experience.",
        },
      },
      {
        q: {
          de: "Kann man Sonnenuntergang und leuchtendes Plankton kombinieren?",
          en: "Can you combine sunset and bioluminescent plankton in Krabi?",
        },
        a: {
          de: "Ja, mit unserer Sunset & Night Glow Kombi: Start 15:30 Uhr, Baden an Koh Poda, Sonnenuntergang vor Phra Nang, danach Schwimmen im leuchtenden Plankton. Das Leuchten ist am stärksten um Neumond und nicht garantiert.",
          en: "Yes, with our Sunset & Night Glow Combo: start 3:30 pm, swim at Koh Poda, sunset off Phra Nang, then a swim in glowing plankton. The glow is strongest around new moon and not guaranteed.",
        },
      },
      {
        q: {
          de: "Wie lange dauert eine Sunset-Tour ab Ao Nang?",
          en: "How long is a sunset tour from Ao Nang?",
        },
        a: {
          de: "Bei uns je nach Tour vier bis sechs Stunden: Sunset Romance & Dinner startet um 15:30 Uhr und dauert vier Stunden, die Kombi dauert ab 15:30 Uhr sechs Stunden, die 4-Islands-Sunset-Tour startet um 13:00 Uhr und dauert sechs Stunden.",
          en: "With us it is four to six hours depending on the tour: Sunset Romance & Dinner starts at 3:30 pm and lasts four hours, the combo lasts six hours from 3:30 pm, the 4-Islands Sunset tour starts at 1 pm and lasts six hours.",
        },
      },
    ],
    related: [
      "koh-poda-guide",
      "railay-phra-nang-cave",
      "krabi-bioluminescent-plankton-night-boat-tour",
      "krabi-tides-guide",
    ],
    tourIds: ["4islands-sunset", "sunset-dinner", "sunset-glow-combo"],
    image: IMG.railay,
  },
  /* ───────────────────────── Seasickness tips ───────────────────────── */
  {
    slug: "krabi-boat-seasickness-tips",
    category: "insider",
    short: { de: "Seekrank-Tipps", en: "Seasickness tips" },
    primaryKeyword: "Seekrank Bootstour Krabi",
    keywords: [
      "Seekrank Bootstour Krabi",
      "Seekrankheit Speedboot Thailand",
      "Seekrank Phi Phi Tour",
      "was hilft gegen Seekrankheit Bootstour",
      "bester Sitzplatz Speedboot",
      "Seekrankheit Kinder Bootstour",
      "seasick Krabi boat tour",
      "Krabi speedboat motion sickness",
      "best seat on a speedboat seasickness",
      "seasickness kids boat trip Thailand",
      "will I get seasick on a Krabi island tour",
    ],
    title: {
      de: "Seekrank in Krabi? Tipps für Speedboot-Touren",
      en: "Seasick on a Krabi Boat Tour? Practical Tips",
    },
    metaDescription: {
      de: "Seekrank auf der Bootstour in Krabi? Bester Sitzplatz, Timing, Essen und Ausrüstung – plus warum ein ruhiges, privates Boot den Unterschied macht.",
      en: "Seasick on a boat tour in Krabi? Best seat, timing, food and gear – plus how a private boat with your own pace, route and timing can make the ride easier.",
    },
    h1: {
      de: "Seekrank auf der Bootstour in Krabi? So bleibt der Tag entspannt",
      en: "Seasick on a Krabi boat tour? How to keep the day relaxed",
    },
    intro: {
      de: "Fast jeder, der eine Bootstour in Krabi plant, stellt sich irgendwann dieselbe Frage: Werde ich seekrank? Die ehrliche Antwort lautet: Das lässt sich nicht für jeden vorhersagen. Manche Menschen spüren auf dem Wasser nie etwas, andere werden schon bei leichtem Seegang blass. Entscheidend sind Seegang, Gewöhnung, Tagesform und ein paar Dinge, die Sie beeinflussen können. Dieser Guide bündelt die gängigen, vorsichtig formulierten Tipps für Speedboot-Touren rund um Krabi: was Sie vor der Fahrt essen und lassen sollten, wo Sie am besten sitzen, wie Sie Route und Uhrzeit wählen, was Sie über Medikamente wissen sollten und warum ein privates Boot mit eigenem Tempo helfen kann. Er ersetzt keine ärztliche Beratung und verspricht keine Heilung – er soll Ihnen helfen, den Tag gut vorzubereiten.",
      en: "Almost everyone planning a boat tour in Krabi asks the same question at some point: will I get seasick? The honest answer is that it cannot be predicted for everyone. Some people never feel anything on the water, others turn pale at even a light swell. What counts is sea state, getting used to it, how you feel on the day and a few things you can influence. This guide gathers the common, carefully worded tips for speedboat tours around Krabi: what to eat and avoid before the ride, where to sit, how to choose route and time, what you should know about medication and why a private boat with its own pace can help. It does not replace medical advice and promises no cure – it is meant to help you prepare the day well.",
    },
    sections: [
      {
        h2: {
          de: "Wann Seekrankheit wahrscheinlicher ist",
          en: "When seasickness is more likely",
        },
        body: {
          de: [
            "Seekrankheit entsteht, vereinfacht gesagt, wenn Augen und Gleichgewichtsorgan widersprüchliche Signale an das Gehirn senden: Das Auge sieht ein ruhiges Boot, das Ohr spürt Bewegung. Das ist keine Schwäche, sondern eine normale Reaktion. Manche reagieren stärker, manche kaum, und die Tagesform spielt mit.",
            "Wahrscheinlicher wird es bei Wellengang, bei längeren Überfahrten, bei Müdigkeit, Hunger oder zu schwerem Essen und bei Blick auf ein Handy oder Buch. Auch die Saison spielt hinein: In der trockeneren Jahreshälfte, in der Regel von etwa November bis April, ist das Meer meist ruhiger; in den übrigen Monaten sind Wind und Wellen je nach Tag stärker. Das sind Erfahrungswerte, keine Garantie, und das Wetter kann sich von Tag zu Tag ändern.",
            "Zur Bootsgröße lässt sich nichts Pauschales sagen. Wie stark ein Boot schaukelt, hängt von Rumpf, Gewicht, Fahrweise und Wellenrichtung ab. Wir können nur sagen, dass unser Boot ein Hardtop-Kabinenboot mit zwei Motoren à 300 PS ist und dass wir das Tempo an Seegang und Gäste anpassen.",
          ],
          en: [
            "Seasickness occurs, in simple terms, when eyes and balance organ send contradictory signals to the brain: the eye sees a steady boat, the ear feels movement. It is not a weakness but a normal reaction. Some react strongly, some barely, and how you feel on the day plays a part.",
            "It becomes more likely with swell, on longer crossings, when tired, hungry or after a heavy meal, and when looking at a phone or book. Season plays in, too: in the drier half of the year, usually from about November to April, the sea is mostly calmer; in the other months wind and waves are stronger depending on the day. These are rules of thumb, not guarantees, and weather can change from day to day.",
            "Nothing general can be said about boat size. How much a boat rocks depends on hull, weight, handling and wave direction. All we can say is that our boat is a hardtop cabin boat with two 300 hp engines and that we adapt the pace to sea state and guests.",
          ],
        },
      },
      {
        h2: {
          de: "Vor der Tour: Frühstück, Alkohol und Schlaf",
          en: "Before the tour: breakfast, alcohol and sleep",
        },
        body: {
          de: [
            "Die Vorbereitung beginnt am Abend davor. Viele Menschen werden eher seekrank, wenn sie wenig geschlafen oder am Vorabend viel Alkohol getrunken haben. Ein ruhiger Abend und ausreichend Schlaf sind eine einfache, oft unterschätzte Maßnahme. Das gilt besonders, wenn Sie am Morgen früh starten.",
            "Am Morgen selbst: nicht nüchtern fahren, aber auch nicht schwer essen. Ein leichtes Frühstück mit etwas Brot, Reis oder Obst ist für viele besser als ein üppiges, fettiges Buffet oder gar nichts. Trinken Sie ausreichend Wasser. Starken Kaffee, Alkohol und sehr fettiges Essen meiden viele vor einer Bootsfahrt; wie gut Sie das vertragen, ist individuell.",
            "Auch Gerüche zählen: starker Parfümgeruch, Sonnencreme-Dämpfe und Abgase können empfindlichen Menschen aufstoßen. Cremen Sie sich am besten schon im Hotel ein, nicht erst eng gedrängt im Boot.",
          ],
          en: [
            "Preparation starts the evening before. Many people are more likely to get seasick if they have slept little or drunk a lot the evening before. A calm evening and enough sleep are a simple, often underrated measure. This is especially true if you start early in the morning.",
            "On the morning itself: do not travel on an empty stomach, but do not eat heavily either. A light breakfast with some bread, rice or fruit is better for many than a rich, greasy buffet or nothing at all. Drink enough water. Strong coffee, alcohol and very fatty food are things many avoid before a boat ride; how well you tolerate them is individual.",
            "Smells matter too: strong perfume, sunscreen fumes and exhaust can bother sensitive people. Ideally apply sunscreen at the hotel, not crowded together in the boat.",
          ],
        },
        list: {
          de: [
            "Am Vorabend wenig Alkohol, ausreichend Schlaf",
            "Leichtes Frühstück statt nüchtern oder schwer",
            "Genug Wasser trinken, aber nicht auf einmal",
            "Sonnencreme vor der Abfahrt auftragen",
            "Kein langes Lesen oder Scrollen am Handy während der Fahrt",
          ],
          en: [
            "Little alcohol the evening before, enough sleep",
            "Light breakfast instead of empty or heavy",
            "Drink enough water, but not all at once",
            "Apply sunscreen before departure",
            "No long reading or scrolling on the phone while underway",
          ],
        },
      },
      {
        h2: {
          de: "Sitzplatz und Blick: Wo Sie bei Seekrankheit am besten sitzen",
          en: "Seat and view: where to sit if you get seasick",
        },
        body: {
          de: [
            "Der Sitzplatz macht einen Unterschied. Auf einem Boot bewegt sich der vordere Teil bei Wellen meist am stärksten, der mittlere Bereich am wenigsten. Wer empfindlich ist, setzt sich deshalb eher mittig und möglichst tief, nicht ganz vorn. Auf unserem Boot gibt es eine Sitzbank und bequeme Bootssessel; sagen Sie der Crew, wenn Sie einen bestimmten Platz bevorzugen.",
            "Genauso wichtig ist der Blick. Fixieren Sie den Horizont oder einen weit entfernten Punkt, statt auf die Bootswand, ein Display oder das aufgewühlte Wasser direkt neben dem Rumpf zu starren. Das hilft vielen, weil Auge und Gleichgewichtssinn dann wieder besser zusammenpassen. Ob es bei Ihnen wirkt, ist individuell.",
            "Frische Luft ist für viele hilfreich. Schatten gibt die Hardtop-Kabine, doch wer sich flau fühlt, sitzt oft besser dort, wo Fahrtwind spürbar ist, als in einer geschlossenen Ecke. Auch ein kalter Lappen im Nacken oder ein Schluck Wasser kann angenehm sein.",
          ],
          en: [
            "Where you sit makes a difference. On a boat the front part usually moves most in waves, the middle least. If you are sensitive, sit more in the middle and as low as possible, not right at the front. On our boat there is a bench seat and comfortable boat chairs; tell the crew if you prefer a particular spot.",
            "The view is just as important. Fix on the horizon or a distant point instead of staring at the boat wall, a display or the churned water right beside the hull. That helps many people because eyes and balance sense then fit together better again. Whether it works for you is individual.",
            "Fresh air helps many people. The hardtop cabin gives shade, but if you feel queasy you often sit better where the wind of the ride is noticeable than in a closed corner. A cool cloth on the neck or a sip of water can also feel pleasant.",
          ],
        },
        tip: {
          de: "Sagen Sie es früh. Wer schon am Pier merkt, dass er empfindlich ist, sollte das der Crew sagen, bevor die Fahrt beginnt. Dann können wir Tempo, Sitzplatz und Pausen darauf abstimmen.",
          en: "Say so early. If you already notice at the pier that you are sensitive, tell the crew before the ride starts. Then we can adapt pace, seat and breaks.",
        },
      },
      {
        h2: {
          de: "Mittel gegen Seekrankheit: nur allgemeine Hinweise",
          en: "Remedies for seasickness: general notes only",
        },
        body: {
          de: [
            "Es gibt rezeptfreie und rezeptpflichtige Mittel gegen Reisekrankheit. Welches für Sie geeignet ist, kann Ihnen eine Apotheke oder Ihr Arzt sagen, auch in Thailand: Apotheken sind in Ao Nang in der Regel leicht zu finden, und das Personal kann beraten. Wir geben hier bewusst weder Wirkstoffe noch Dosierungen an, denn das gehört in ärztliche Hände.",
            "Allgemein gilt: Manche Präparate müssen vor der Abfahrt eingenommen werden, nicht erst, wenn es einem schlecht geht; lesen Sie die Packungsbeilage. Manche können Nebenwirkungen wie Müdigkeit haben, und nicht jedes passt zu jeder Person. Bei Schwangerschaft, Vorerkrankungen, regelmäßiger Medikamenteneinnahme und bei Kindern sollten Sie ärztlichen Rat einholen, bevor Sie etwas einnehmen.",
            "Probieren Sie nichts erstmals am Tag der Bootstour aus, wenn Sie es vermeiden können. Und bedenken Sie: Kein Mittel ersetzt die anderen Maßnahmen – ruhiger Vorabend, leichtes Frühstück, guter Sitzplatz und Horizont im Blick.",
          ],
          en: [
            "There are over-the-counter and prescription remedies for motion sickness. Which one suits you is something a pharmacy or your doctor can tell you, even in Thailand: pharmacies are usually easy to find in Ao Nang and the staff can advise. We deliberately give neither active ingredients nor doses here, because that belongs in medical hands.",
            "In general: some products must be taken before departure, not only once you feel unwell; read the package leaflet. Some can have side effects such as drowsiness, and not every product suits every person. In case of pregnancy, existing conditions, regular medication and with children, seek medical advice before taking anything.",
            "If you can avoid it, do not try anything for the first time on the day of the boat tour. And remember: no remedy replaces the other measures – a calm evening before, a light breakfast, a good seat and the horizon in view.",
          ],
        },
      },
      {
        h2: {
          de: "Route und Timing: früh starten, kurze Überfahrten, geschützte Buchten",
          en: "Route and timing: start early, short crossings, sheltered bays",
        },
        body: {
          de: [
            "Wer empfindlich ist, kann viel über die Planung gewinnen. In vielen Küstenregionen ist das Meer am Morgen oft ruhiger als am Nachmittag, wenn der Wind auffrischt; auch rund um Krabi ist früh am Morgen meist die angenehmste Zeit. Das ist eine Faustregel, kein Versprechen, denn jeder Tag ist anders.",
            "Eine Route mit kurzen Überfahrten und geschützten Buchten ist leichter zu vertragen als eine lange Fahrt über offenes Wasser. Strecken wie die nahe Küste rund um Railay, Phra Nang und Koh Poda liegen näher am Land als manche Ziele weiter draußen. Sagen Sie uns vorab, dass Seekrankheit ein Thema ist; dann wählen wir bei der Planung die kürzeren Etappen und legen mehr Badestopps ein.",
            "Wer unsicher ist, startet mit einer kurzen Halbtagestour. Die Railay & Phra Nang Half-Day Escape dauert vier Stunden und kostet 11.500 THB pro Boot für bis zu fünf Gäste; sie führt zu Railay West, der Phra Nang Cave und Koh Poda. So sehen Sie, wie Sie auf dem Wasser reagieren, bevor Sie einen längeren Tag buchen.",
          ],
          en: [
            "If you are sensitive, planning can gain you a lot. In many coastal regions the sea is often calmer in the morning than in the afternoon when the wind freshens; around Krabi, too, early in the morning is usually the most pleasant time. That is a rule of thumb, not a promise, because every day is different.",
            "A route with short crossings and sheltered bays is easier to tolerate than a long ride over open water. Stretches such as the nearby coast around Railay, Phra Nang and Koh Poda are closer to land than some destinations further out. Tell us in advance that seasickness is an issue; then we choose shorter legs when planning and add more swim stops.",
            "If you are unsure, start with a short half-day tour. The Railay & Phra Nang Half-Day Escape lasts four hours and costs 11,500 THB per boat for up to five guests; it goes to Railay West, Phra Nang Cave and Koh Poda. That way you see how you react on the water before you book a longer day.",
          ],
        },
      },
      {
        h2: {
          de: "Warum ein privates Boot helfen kann",
          en: "Why a private boat can help",
        },
        body: {
          de: [
            "Ein privates Boot ersetzt keine Medizin, aber es verändert ein paar Dinge, die bei Seekrankheit zählen. Sie bestimmen mit, wie schnell wir fahren, wann wir Pause machen und wo wir ankern. Wer sich flau fühlt, kann sagen: Wir halten kurz an. Das ist auf einem vollen Gruppenboot mit festem Zeitplan kaum möglich.",
            "Hinzu kommt der Platz. Bei höchstens fünf Gästen müssen Sie nicht zwischen dreißig Fremden sitzen, Sie haben freie Sicht zum Horizont, und niemand drängt Sie auf einen Platz, den Sie nicht wollen. Die Hardtop-Kabine sorgt für Schatten, das Heck-Cockpit für frische Luft. Das sind Bedingungen, die vielen Gästen entgegenkommen; garantieren können wir sie als Mittel gegen Seekrankheit nicht.",
            "Auch die Route ist flexibel. Wir können bei rauem Wasser eher eine geschütztere Bucht wählen oder ein Ziel verschieben, statt starr nach Fahrplan zu fahren. Welche Entscheidung sicher und angenehm ist, trifft die Crew vor Ort.",
          ],
          en: [
            "A private boat does not replace medicine, but it changes a few things that matter with seasickness. You help decide how fast we go, when we take a break and where we anchor. If you feel queasy you can say: let’s stop for a moment. That is hardly possible on a full group boat with a fixed schedule.",
            "Then there is space. With no more than five guests you do not have to sit between thirty strangers, you have a free view of the horizon, and nobody pushes you into a seat you do not want. The hardtop cabin gives shade, the rear cockpit fresh air. These are conditions that suit many guests; we cannot guarantee them as a remedy for seasickness.",
            "The route is flexible too. In rough water we can choose a more sheltered bay or move a destination instead of sticking rigidly to a timetable. Which decision is safe and pleasant is made by the crew on site.",
          ],
        },
        tip: {
          de: "Nennen Sie uns bei der Buchung, wer im Boot empfindlich ist. Das kostet nichts und hilft uns, Route und Tempo passend zu planen.",
          en: "Tell us when booking who on board is sensitive. It costs nothing and helps us plan route and pace accordingly.",
        },
      },
      {
        h2: {
          de: "Kinder und Senioren: Seekrankheit bei der Familie",
          en: "Children and seniors: seasickness in the family",
        },
        body: {
          de: [
            "Kinder reagieren sehr unterschiedlich: manche sind vollkommen unempfindlich, andere werden schnell unruhig oder müde. Wichtig sind Pausen, leichtes Essen, Wasser und Ablenkung mit Blick nach draußen statt aufs Tablet. Medikamente für Kinder gehören immer in ärztliche oder apothekerliche Beratung; geben Sie nichts auf eigene Faust.",
            "Für Familien haben wir die Tour Family Fun Day: Sandbänke und Schildkröten mit kurzen Fahrten, flachen Buchten und viel Schatten, Start um 9:00 Uhr, sechs Stunden, 15.500 THB pro Boot. Die vorgeschriebenen Schwimmwesten sind an Bord, Schnorchelmasken stellen wir kostenlos zur Verfügung (bitte bei der Buchung ankreuzen), und wir planen Pausen nach Ihrem Rhythmus. Mehr zum Thema Familien im Guide zu Krabi mit Kindern.",
            "Auch ältere Gäste profitieren von Ruhe und Planung: feste Griffe beim Einsteigen, ein stabiler Sitzplatz, Pausen auf Wunsch. Wer Gleichgewichtsprobleme oder Vorerkrankungen hat, sollte vorab ärztlichen Rat einholen. Sagen Sie uns, worauf wir achten sollen; wir passen Tempo und Ablauf an.",
          ],
          en: [
            "Children react very differently: some are completely unaffected, others quickly become restless or tired. What matters are breaks, light food, water and distraction with a view outside instead of a tablet. Medication for children always belongs in medical or pharmacist advice; do not give anything on your own.",
            "For families we have the Family Fun Day tour: sandbars and turtles with short rides, shallow bays and lots of shade, start 9:00 am, six hours, 15,500 THB per boat. The mandatory life jackets are on board, snorkel masks are provided free of charge (please tick them when booking), and we plan breaks to your rhythm. More about families in our guide to Krabi with kids.",
            "Older guests also benefit from calm and planning: firm handholds when boarding, a stable seat, breaks on request. If you have balance problems or existing conditions, seek medical advice in advance. Tell us what we should pay attention to; we adapt pace and schedule.",
          ],
        },
      },
      {
        h2: {
          de: "Was tun, wenn es Ihnen schlecht wird",
          en: "What to do if you start feeling sick",
        },
        body: {
          de: [
            "Wenn Sie merken, dass Ihnen übel wird, sagen Sie es sofort. Je früher wir es wissen, desto leichter ist es, etwas zu ändern. Wir können das Tempo drosseln, an einer geschützten Stelle stoppen oder im Windschatten eine kurze Pause machen. Ein Stopp zum Baden hilft manchen Gästen ebenfalls.",
            "Frische Luft, Blick zum Horizont, kleine Schlucke Wasser und eine ruhige Position sind die üblichen ersten Schritte. Vermeiden Sie in diesem Moment Lesen, Telefonieren und Blick aufs Handy. Wer sich übergeben muss, tut das am besten an der Seite im Windschatten, nicht gegen den Wind, und mit der Crew an der Seite.",
            "Nach einer kurzen Pause geht es vielen besser. Reden Sie dann mit uns, ob Sie das Programm verkürzen oder die Route ändern möchten. Wir wollen, dass Sie den Tag genießen und nicht durchstehen.",
          ],
          en: [
            "If you notice nausea setting in, say so immediately. The earlier we know, the easier it is to change something. We can slow down, stop in a sheltered spot or take a short break in the lee. A swim stop also helps some guests.",
            "Fresh air, eyes on the horizon, small sips of water and a calm position are the usual first steps. At that moment avoid reading, phoning and looking at your phone. If you have to vomit, it is best done at the side in the lee, not into the wind, with the crew beside you.",
            "After a short break many people feel better. Then talk to us about whether you want to shorten the programme or change the route. We want you to enjoy the day, not endure it.",
          ],
        },
      },
      {
        h2: {
          de: "Longtail oder Speedboot: Was ist bei Seekrankheit besser?",
          en: "Longtail or speedboat: which is better for seasickness?",
        },
        body: {
          de: [
            "Das lässt sich nicht pauschal beantworten. Beide Bootstypen bewegen sich im Wellengang, nur auf unterschiedliche Art. Ein langsameres Boot braucht länger für dieselbe Strecke, ein schnelleres ist rascher am Ziel; beide reagieren auf Wellen unterschiedlich. Was Ihnen besser bekommt, kann nur Ihr Körper beantworten.",
            "Entscheidend sind meist andere Faktoren: Seegang, Strecke, Sitzplatz und Gruppengröße. In unserem Vergleich Longtail oder Speedboot gehen wir ausführlicher darauf ein, was die Bootstypen unterscheidet. Für empfindliche Gäste ist oft wichtiger, dass die Strecke kurz, das Wetter ruhig und der Zeitplan flexibel ist, als der Bootstyp allein.",
            "Wenn Sie unsicher sind, besprechen Sie Ihre Situation mit uns vor der Buchung. Wir sagen Ihnen ehrlich, welche Tour und welche Route wir für Sie sinnvoll finden, und ob wir bei Ihrem Wunschtermin eher zu einem anderen Tag raten.",
          ],
          en: [
            "That cannot be answered in general. Both boat types move in swell, just in different ways. A slower boat needs longer for the same distance, a faster one reaches the destination sooner; both react to waves differently. What suits you better only your body can say.",
            "Other factors usually decide: sea state, distance, seat and group size. In our comparison of longtail and speedboat we go into more detail about what distinguishes the boat types. For sensitive guests it is often more important that the distance is short, the weather calm and the schedule flexible than the boat type alone.",
            "If you are unsure, discuss your situation with us before booking. We will tell you honestly which tour and route we find sensible for you, and whether for your desired date we would rather suggest another day.",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Wird man auf einer Speedboot-Tour in Krabi seekrank?",
          en: "Will I get seasick on a speedboat tour in Krabi?",
        },
        a: {
          de: "Das kann niemand für Sie vorhersagen. Es hängt von Seegang, Tagesform und Ihrer persönlichen Empfindlichkeit ab. Viele Gäste spüren nichts, andere sind empfindlich. Mit leichtem Frühstück, gutem Sitzplatz, Horizontblick und früher Abfahrt lässt sich das Risiko für viele senken.",
          en: "Nobody can predict that for you. It depends on sea state, how you feel on the day and your personal sensitivity. Many guests feel nothing, others are sensitive. With a light breakfast, a good seat, eyes on the horizon and an early start the risk can be lowered for many.",
        },
      },
      {
        q: {
          de: "Wo sitzt man am besten bei Seekrankheit?",
          en: "Where is the best place to sit on a boat if I get seasick?",
        },
        a: {
          de: "Meist mittig und möglichst tief, weil der vordere Bootsbereich Wellen am stärksten spürt. Sitzen Sie dort, wo Sie frische Luft bekommen und den Horizont sehen. Sagen Sie der Crew, welchen Platz Sie bevorzugen.",
          en: "Usually in the middle and as low as possible, because the front of the boat feels waves most. Sit where you get fresh air and can see the horizon. Tell the crew which seat you prefer.",
        },
      },
      {
        q: {
          de: "Was hilft gegen Seekrankheit auf der Bootstour?",
          en: "What helps against seasickness on a boat trip?",
        },
        a: {
          de: "Häufig genannt werden ausreichend Schlaf, ein leichtes Frühstück, wenig Alkohol am Vorabend, Blick zum Horizont und frische Luft. Zu Medikamenten fragen Sie bitte Ihre Apotheke oder Ihren Arzt; wir geben keine Dosierungen oder Wirkstoffe an.",
          en: "Commonly mentioned are enough sleep, a light breakfast, little alcohol the evening before, eyes on the horizon and fresh air. For medication please ask your pharmacy or doctor; we give no doses or active ingredients.",
        },
      },
      {
        q: {
          de: "Ist Longtail besser gegen Seekrankheit als Speedboot?",
          en: "Is a longtail better than a speedboat for seasickness?",
        },
        a: {
          de: "Das lässt sich nicht pauschal sagen. Beide Typen bewegen sich im Seegang, nur unterschiedlich. Oft zählen Strecke, Wetter, Sitzplatz und Gruppengröße mehr als der Bootstyp. Besprechen Sie Ihre Situation vorab mit uns.",
          en: "That cannot be said in general. Both types move in swell, just differently. Distance, weather, seat and group size often matter more than the boat type. Discuss your situation with us beforehand.",
        },
      },
      {
        q: {
          de: "Kann ich mit Kindern Inselhopping in Krabi machen, wenn sie leicht seekrank werden?",
          en: "Can I go island hopping in Krabi with kids if they get seasick?",
        },
        a: {
          de: "Ja, mit Planung: kurze Strecken, flache Buchten, Pausen, leichtes Essen und Platz mit frischer Luft. Unser Family Fun Day ist dafür gedacht. Medikamente für Kinder bitte nur nach ärztlicher oder apothekerlicher Beratung.",
          en: "Yes, with planning: short stretches, shallow bays, breaks, light food and a seat with fresh air. Our Family Fun Day is designed for that. Please give medication to children only after medical or pharmacist advice.",
        },
      },
    ],
    related: [
      "longtail-vs-speedboat-krabi",
      "krabi-with-kids",
      "boat-day-packing-list-etiquette",
      "best-time-to-visit-krabi",
    ],
    tourIds: ["family-sandbars", "railay-escape", "4islands-sunset"],
    image: IMG.boat,
  },
];
