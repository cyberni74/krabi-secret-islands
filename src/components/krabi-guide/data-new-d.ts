import type { GuideArticleInput } from "./types";
import { IMG } from "../secret-islands/content";

/**
 * New guide articles (batch D): Ao Nang vs Railay, Phi Phi Don vs Phi Phi Leh.
 * Fact policy: only widely documented geography and character of places; no third-party prices, ferry times or hotel names.
 * Maya Bay rules and park fees are phrased as "most recently / can change". No customer quotes.
 */
export const NEW_ARTICLES_D: GuideArticleInput[] = [
  /* ───────────────────────── Ao Nang vs Railay ───────────────────────── */
  {
    slug: "ao-nang-vs-railay-where-to-stay",
    category: "insider",
    short: { de: "Ao Nang oder Railay", en: "Ao Nang vs Railay" },
    primaryKeyword: "Ao Nang oder Railay",
    keywords: [
      "Ao Nang oder Railay",
      "Krabi wo übernachten",
      "Railay Beach Unterkunft",
      "Ao Nang Hotels Lage",
      "Krabi Unterkunft für Inselhopping",
      "Railay nur per Boot erreichbar",
      "Ao Nang vs Railay",
      "where to stay in Krabi",
      "Railay or Ao Nang for first time",
      "Krabi best area to stay",
    ],
    title: {
      de: "Ao Nang oder Railay: Wo übernachten in Krabi?",
      en: "Ao Nang or Railay: Where to Stay in Krabi",
    },
    metaDescription: {
      de: "Ao Nang oder Railay? Strand, Ruhe, Restaurants und Bootszugang im Vergleich – so wählen Sie die passende Unterkunft für Ihre Krabi-Reise aus.",
      en: "Ao Nang or Railay? Beach, quiet, restaurants and boat access compared – how to choose the right base for your Krabi trip and your boat days.",
    },
    h1: {
      de: "Ao Nang oder Railay: Wo wohnen Sie in Krabi am besten?",
      en: "Ao Nang or Railay: where to stay in Krabi",
    },
    intro: {
      de: "Fast jede Krabi-Planung stößt früher oder später auf dieselbe Frage: Ao Nang oder Railay? Beide Orte liegen nur wenige Bootsminuten voneinander entfernt, fühlen sich aber völlig verschieden an. Ao Nang ist der lebendige Strand- und Restaurantort mit Läden, Massagen und dem Treiben der Boote. Railay ist eine Halbinsel, die Kalksteinwände vom Festland trennen und die Sie nur per Boot erreichen: ruhiger, landschaftlich spektakulär, aber mit mehr Aufwand beim Gepäck. Dieser Guide vergleicht beide ohne Hotelempfehlungen und ohne erfundene Zahlen, dafür mit Blick auf das, was uns täglich beschäftigt: Wie wirkt sich Ihre Unterkunft auf Ihre Inseltage mit dem Boot aus? Wir sind ein privater Speedboat-Charter ab Ao Nang und kennen beide Seiten aus der Bootsperspektive.",
      en: "Sooner or later almost every Krabi plan runs into the same question: Ao Nang or Railay? The two places are only a few minutes apart by boat, yet they feel completely different. Ao Nang is the lively beach and restaurant town with shops, massage places and the comings and goings of boats. Railay is a peninsula cut off from the mainland by limestone cliffs, reachable only by boat: quieter and scenically spectacular, but with more effort when it comes to luggage. This guide compares the two without hotel recommendations and without invented numbers, but with a view of what occupies us every day: how does your base affect your island days by boat? We are a private speedboat charter from Ao Nang and know both sides from the boat’s point of view.",
    },
    sections: [
      {
        h2: {
          de: "Kurzantwort: Ao Nang oder Railay nach Reisetyp",
          en: "Short answer: Ao Nang or Railay by type of traveller",
        },
        body: {
          de: [
            "Wenn Sie nur eine Zeile lesen wollen: Ao Nang ist die praktische Wahl, Railay die atmosphärische. Ao Nang bietet mehr Auswahl bei Essen, Läden und Unterkünften und ist ohne Bootstransfer erreichbar. Railay bietet Ruhe, Felsenkulisse und das Gefühl, mitten in einer Postkarte zu schlafen, verlangt dafür aber, dass Sie Ihr Gepäck per Boot transportieren und abends mit weniger Auswahl auskommen.",
            "Keine der beiden Optionen ist objektiv besser. Die Frage ist, was Sie von Ihrer Reise erwarten: Alltagskomfort und Flexibilität oder Landschaft und Stille. Die folgende Übersicht hilft bei der ersten Einordnung; die Abschnitte danach erklären die Gründe.",
          ],
          en: [
            "If you only want to read one line: Ao Nang is the practical choice, Railay the atmospheric one. Ao Nang offers more choice in food, shops and accommodation and can be reached without a boat transfer. Railay offers quiet, a backdrop of cliffs and the feeling of sleeping inside a postcard, but it requires you to transport your luggage by boat and to make do with less choice in the evening.",
            "Neither option is objectively better. The question is what you expect from your trip: everyday comfort and flexibility, or scenery and stillness. The overview below helps with a first classification; the sections after it explain the reasons.",
          ],
        },
        list: {
          de: [
            "Erste Krabi-Reise, viele Ausflüge geplant: eher Ao Nang",
            "Ruhe, Felsen, Strandspaziergänge, Klettern: eher Railay",
            "Mit kleinen Kindern oder viel Gepäck: eher Ao Nang, weil kein Bootstransfer nötig ist",
            "Als Paar, das Atmosphäre sucht und wenig Gepäck hat: Railay ist eine Überlegung wert",
            "Viele verschiedene Restaurants und Abendprogramm: Ao Nang",
            "Unentschieden: einige Nächte in Ao Nang, einige in Railay (siehe unten)",
          ],
          en: [
            "First Krabi trip with many excursions planned: more likely Ao Nang",
            "Quiet, cliffs, beach walks, climbing: more likely Railay",
            "With small children or lots of luggage: more likely Ao Nang, because no boat transfer is needed",
            "As a couple looking for atmosphere with little luggage: Railay is worth considering",
            "Many different restaurants and an evening scene: Ao Nang",
            "Undecided: a few nights in Ao Nang, a few in Railay (see below)",
          ],
        },
        tip: {
          de: "Die Wahl ist weniger endgültig, als sie wirkt. Die beiden Orte liegen so nah beieinander, dass Sie Railay auch als Halbtagesausflug oder als Teil einer Bootstour erleben können, ohne dort zu wohnen.",
          en: "The choice is less final than it feels. The two places are so close that you can experience Railay as a half-day trip or as part of a boat tour without staying there.",
        },
      },
      {
        h2: {
          de: "Ao Nang: Lage, Restaurants und Boote ab Strand und Pier",
          en: "Ao Nang: location, restaurants and boats from the beach and pier",
        },
        body: {
          de: [
            "Ao Nang ist der touristische Hauptort an der Küste von Krabi: eine Strandpromenade mit Restaurants, Bars, Läden, Massagestudios und Reisebüros, dazu ein Strand, an dem zahlreiche Boote liegen. Der Charakter ist lebhaft und praktisch. Man kann zu Fuß essen gehen, ohne sich vorher zu entscheiden, wohin, und man findet jederzeit etwas, wenn man etwas braucht.",
            "Für Gäste, die auf Inseln wollen, ist Ao Nang der natürliche Ausgangspunkt. Von hier starten viele Longtail-Boote und Speedboote zu den umliegenden Stränden und Inseln; auch die Anleger, an denen Nationalpark-Touren beginnen, liegen in der Nähe. Der Weg von der Unterkunft zum Boot ist kurz, und morgens ist keine zusätzliche Überfahrt nötig, um überhaupt zum Startpunkt zu kommen.",
            "Der Preis für diese Bequemlichkeit ist Betrieb. In der Hauptsaison ist die Promenade belebt, der Strand von Ao Nang ist je nach Gezeit und Seegang nicht immer der schönste Badestrand, und wer absolute Stille sucht, wird sie am Hauptstrand abends nicht finden. Das ist kein Mangel, sondern die Natur eines Ortes, der von seiner Lebendigkeit lebt.",
            "Praktisch ist außerdem, dass Ao Nang die Verbindung zu allem anderen schafft: Flughafen, Krabi Town und die Strände in der Umgebung erreichen Sie über Straßen, ohne Boot. Das macht Ao Nang zu einer verlässlichen Basis, wenn Sie Landausflüge und Bootstage kombinieren möchten.",
          ],
          en: [
            "Ao Nang is the main tourist town on the Krabi coast: a beachfront strip with restaurants, bars, shops, massage studios and travel agencies, plus a beach lined with boats. The character is lively and practical. You can walk out for dinner without deciding in advance where, and you can find whatever you need at any time.",
            "For guests who want to get to the islands, Ao Nang is the natural starting point. Many longtail boats and speedboats leave from here for the surrounding beaches and islands, and the piers where national park tours begin are nearby too. The way from your accommodation to the boat is short, and in the morning no extra crossing is needed just to reach the starting point.",
            "The price of this convenience is activity. In high season the promenade is busy, Ao Nang’s beach is not always the nicest swimming beach depending on tide and swell, and anyone looking for absolute stillness will not find it on the main beach in the evening. That is not a flaw but the nature of a place that lives from its liveliness.",
            "Another practical point is that Ao Nang connects you to everything else: the airport, Krabi Town and the beaches in the surroundings can be reached by road, without a boat. That makes Ao Nang a reliable base if you want to combine land excursions and boat days.",
          ],
        },
        list: {
          de: [
            "Stärken: Restaurantauswahl, kurze Wege, Straßenanbindung, viele Anbieter für Ausflüge",
            "Schwächen: mehr Trubel, Strand nicht bei jedem Wasserstand ideal zum Baden",
            "Geeignet für: erste Krabi-Reise, Familien, Gäste mit vielen Ausflugstagen",
            "Boote: Longtails und Speedboote starten in der Umgebung; unsere privaten Touren beginnen in Ao Nang",
          ],
          en: [
            "Strengths: restaurant choice, short distances, road connections, many tour providers",
            "Weaknesses: more bustle, beach not ideal for swimming at every water level",
            "Suited to: first Krabi trip, families, guests with many excursion days",
            "Boats: longtails and speedboats leave from the area; our private tours start in Ao Nang",
          ],
        },
      },
      {
        h2: {
          de: "Railay: Ruhe, Landschaft und die Lage nur per Boot",
          en: "Railay: quiet, scenery and being reachable only by boat",
        },
        body: {
          de: [
            "Railay ist eine Halbinsel, die sich wie eine Insel anfühlt. Hohe Kalksteinwände schneiden sie vom Festland ab, Straßen gibt es keine, und Sie kommen nur per Boot dorthin. Genau das prägt den Ort: Es gibt keinen Durchgangsverkehr, abends ist es deutlich ruhiger als in Ao Nang, und die Felsen sind überall sichtbar. Wer Railay zum ersten Mal sieht, versteht meist sofort, warum der Ort einen eigenen Ruf hat.",
            "Railay besteht aus mehreren Abschnitten. Railay West ist der breite Sandstrand mit Blick aufs offene Meer, an dem viele Boote aus Ao Nang ankommen und an dem der Sonnenuntergang besonders schön ist. Railay East ist eher eine Mangrovenküste mit Bootsanleger; hier ist Baden bei Ebbe nicht möglich. Beide sind zu Fuß in wenigen Minuten verbunden. Am Südende liegt Phra Nang Beach mit der Höhle der Meeresprinzessin, eingerahmt von Felswänden und vorgelagerten Inseln. Mehr dazu in unserem Guide zu Railay und Phra Nang.",
            "Railay ist außerdem ein bekanntes Kletterrevier für Sportklettern an Kalkstein. Das gibt dem Ort eine eigene Mischung aus Naturkulisse und aktiven Reisenden. Wer nicht klettert, muss sich davon nicht abschrecken lassen: Die Spaziergänge zwischen den Stränden, die Aussicht und die Stille am Morgen reichen vielen vollkommen aus.",
            "Die Kehrseite ist die geringere Auswahl. Das Angebot an Restaurants und Läden ist kleiner als in Ao Nang, und wer etwas Bestimmtes braucht, muss häufiger planen oder per Boot übersetzen. Wenn Sie Railay als Basis wählen, wählen Sie bewusst die ruhigere, begrenztere Variante.",
          ],
          en: [
            "Railay is a peninsula that feels like an island. High limestone walls cut it off from the mainland, there are no roads, and you only get there by boat. That is exactly what shapes the place: there is no through traffic, evenings are clearly quieter than in Ao Nang, and the cliffs are visible everywhere. Most people who see Railay for the first time understand immediately why the place has a reputation of its own.",
            "Railay consists of several sections. Railay West is the wide sandy beach facing the open sea, where many boats from Ao Nang arrive and where the sunset is especially beautiful. Railay East is more of a mangrove shore with a boat pier; swimming is not possible there at low tide. The two are connected by a few minutes’ walk. At the southern end lies Phra Nang Beach with the sea princess cave, framed by cliffs and offshore islands. More in our guide to Railay and Phra Nang.",
            "Railay is also a well-known area for sport climbing on limestone. That gives the place its own mix of natural backdrop and active travellers. If you do not climb, there is no need to be put off: the walks between the beaches, the views and the stillness of the morning are enough for many people.",
            "The flip side is less choice. The range of restaurants and shops is smaller than in Ao Nang, and if you need something specific you have to plan more often or cross by boat. If you choose Railay as your base, you consciously choose the quieter, more limited option.",
          ],
        },
        tip: {
          de: "Der Moment, in dem Railay am meisten überzeugt, ist früh am Morgen und am späten Nachmittag, wenn die Tagesboote fort sind. Wer dort übernachtet, hat diese Stunden ganz für sich.",
          en: "The moment when Railay is most convincing is early in the morning and late in the afternoon, when the day boats have left. If you stay there, you have those hours all to yourself.",
        },
      },
      {
        h2: {
          de: "Gepäck, Zugang und Gezeiten: der Boots-Transfer nach Railay",
          en: "Luggage, access and tides: the boat transfer to Railay",
        },
        body: {
          de: [
            "Dass Railay nur per Boot erreichbar ist, ist der wichtigste praktische Punkt des Vergleichs. Üblicherweise fahren Longtail-Boote vom Strand in Ao Nang nach Railay West; die Fahrt ist kurz. Wie genau der Zugang aussieht, hängt vom Wasserstand ab: Bei höherem Wasser legen die Boote näher am Strand an, bei niedrigem Wasser kann es sein, dass Sie ein Stück durchs flache Wasser waten oder am Anleger von Railay East aussteigen. Konkrete Abläufe und Preise ändern sich und sollten Sie vor Ort oder bei Ihrer Unterkunft erfragen.",
            "Für Ihr Gepäck bedeutet das: Ein Rollkoffer ist am Strand nicht ideal. Wer mit leichtem Rucksack oder weichem Gepäck reist, hat es deutlich einfacher. Wer viel dabei hat, sollte vorab bei der Unterkunft fragen, wie die Ankunft abläuft und ob Hilfe beim Transport angeboten wird.",
            "Auch die Abreise lohnt einen Gedanken. Ein früher Flug heißt, dass Sie zuvor mit dem Boot ans Festland müssen und dabei auf die Verfügbarkeit der Boote und auf Wetter und Gezeiten Rücksicht nehmen. Planen Sie am letzten Tag einen Puffer ein.",
            "Mehr zum Zusammenspiel von Ebbe und Flut an der Küste finden Sie in unserem Gezeiten-Guide. Er erklärt auch, warum manche Stellen zu bestimmten Zeiten gut und zu anderen kaum zugänglich sind.",
          ],
          en: [
            "That Railay can only be reached by boat is the most important practical point of the comparison. Longtail boats usually run from the beach in Ao Nang to Railay West; the ride is short. Exactly how access works depends on the water level: at higher water the boats land closer to the beach, at low water you may have to wade a little through shallow water or get off at the Railay East pier. Concrete procedures and prices change, and you should ask on the spot or at your accommodation.",
            "For your luggage this means that a rolling suitcase is not ideal on the beach. If you travel with a light backpack or soft luggage, it is much easier. If you bring a lot, ask your accommodation in advance how arrival works and whether help with transport is offered.",
            "Departure deserves some thought as well. An early flight means that you have to reach the mainland by boat beforehand, taking account of boat availability, weather and tides. Plan a buffer on your last day.",
            "You will find more on how ebb and flood work along the coast in our tide guide. It also explains why some places are accessible at certain times and hardly at others.",
          ],
        },
        list: {
          de: [
            "Leichtes, weiches Gepäck erleichtert den Boots-Transfer",
            "Zugang hängt vom Wasserstand ab: Ablauf und Preise vorab erfragen",
            "Frühe Abreise: Pufferzeit für Boot, Wetter und Gezeiten einplanen",
            "Wertsachen und Elektronik für die Überfahrt wasserdicht verpacken",
          ],
          en: [
            "Light, soft luggage makes the boat transfer easier",
            "Access depends on the water level: ask about procedure and prices beforehand",
            "Early departure: plan buffer time for boat, weather and tides",
            "Pack valuables and electronics waterproof for the crossing",
          ],
        },
      },
      {
        h2: {
          de: "Als Paar, mit Kindern, als Senioren: wer wo besser aufgehoben ist",
          en: "As a couple, with kids, as seniors: who is better off where",
        },
        body: {
          de: [
            "Paare finden in Railay oft die gesuchte Atmosphäre: Felsen im Abendlicht, ein Strandspaziergang ohne Straßenverkehr, ruhige Abende. Das gilt besonders, wenn Sie wenig Gepäck haben und sich auf ein kleineres Restaurantangebot einlassen. Wer lieber jeden Abend woanders essen und das Nachtleben in Reichweite haben möchte, ist in Ao Nang besser aufgehoben.",
            "Mit Kindern sprechen praktische Gründe für Ao Nang: kürzere Wege, kein Bootstransfer mit Kinderwagen oder viel Gepäck, mehr Auswahl beim Essen. Das heißt nicht, dass Railay ausgeschlossen ist. Der ruhige Strand von Railay West kann für Familien sehr schön sein; entscheidend ist die Frage, ob Sie den Transfer entspannt meistern. Für weitere Familientipps lesen Sie unseren Guide zu Krabi mit Kindern.",
            "Für ältere Reisende oder alle, die nicht gut zu Fuß sind, ist der Boots-Zugang nach Railay und das Waten bei niedrigem Wasser eine Hürde, und auch die Wege rund um die Strände enthalten Treppen und unebenen Boden. In Ao Nang ist die Infrastruktur flacher und leichter nutzbar. Prüfen Sie bei einer konkreten Unterkunft immer individuell, wie Zugang und Wege aussehen.",
            "Eine Besonderheit bei Railay: Der Pfad zum Viewpoint und zur versteckten Lagune ist steil, teils mit Seilen, und bei Nässe rutschig. Das ist ein Ausflug für trittsichere Gäste, nichts für Flip-Flops. Diese Wege müssen Sie aber nicht gehen, um Railay zu genießen.",
          ],
          en: [
            "Couples often find the atmosphere they are looking for in Railay: cliffs in evening light, a beach walk without road traffic, quiet evenings. That is especially true if you have little luggage and are happy with a smaller choice of restaurants. If you prefer to eat somewhere different every evening and have nightlife within reach, you are better off in Ao Nang.",
            "With children, practical reasons favour Ao Nang: shorter distances, no boat transfer with a pushchair or lots of luggage, more choice in food. That does not mean Railay is out of the question. The quiet beach at Railay West can be very nice for families; the decisive question is whether you can manage the transfer calmly. For more family tips read our guide to Krabi with kids.",
            "For older travellers or anyone who does not walk easily, boat access to Railay and wading at low water is an obstacle, and the paths around the beaches contain steps and uneven ground. In Ao Nang the infrastructure is flatter and easier to use. For any specific accommodation, always check individually what access and paths look like.",
            "One specific note on Railay: the trail to the viewpoint and the hidden lagoon is steep, partly with ropes, and slippery when wet. That is an excursion for sure-footed guests, nothing for flip-flops. You do not have to walk these trails to enjoy Railay, though.",
          ],
        },
      },
      {
        h2: {
          de: "Wie Ihre Unterkunft die Bootstour beeinflusst: Treffpunkt, Abholung, Startzeit",
          en: "How your base affects your boat tour: meeting point, pickup, start time",
        },
        body: {
          de: [
            "Für uns ist diese Frage die wichtigste im Vergleich. Unsere privaten Speedboat-Touren starten ab Ao Nang. In den Tourdaten ist ein Hotel-Transfer für Ao Nang und Krabi aufgeführt. Wenn Sie in Ao Nang wohnen, ist der Weg zum Boot deshalb kurz und unkompliziert: Sie müssen morgens nicht erst eine Überfahrt organisieren, bevor Ihr Inseltag beginnt.",
            "Wenn Sie in Railay wohnen, sieht es anders aus. Ob und wo wir Sie dort aufnehmen können, hängt von Wasserstand, Wetter und der gewünschten Route ab und ist keine Selbstverständlichkeit. Sprechen Sie das bitte bei der Anfrage an, nennen Sie Ihre Unterkunft und Ihren Wunschtermin, und wir klären gemeinsam, wie der Treffpunkt aussehen kann. Versprechen können wir einen Railay-Start nicht ohne Rückfrage.",
            "Die Startzeit ist der zweite Punkt. Frühe Touren wie Phi Phi Early Bird starten um 07:00 Uhr. Wer in Railay wohnt, muss für einen solchen Termin eventuell vorher mit einem Boot zum Festland, und das spricht in der Praxis für Ao Nang, wenn Sie vor allem frühe Touren planen. Nachmittagstouren oder der Sunset-Slot sind flexibler.",
            "Umgekehrt gilt: Wer in Ao Nang wohnt, kann Railay unkompliziert als Teil einer Bootstour besuchen. Unsere Railay & Phra Nang Half-Day Escape dauert vier Stunden mit flexiblem Start, und die 4-Islands-Tour endet mit dem Sonnenuntergang vor den Felsen von Phra Nang. Sie erleben Railay, ohne dort wohnen zu müssen.",
          ],
          en: [
            "For us this is the most important question in the comparison. Our private speedboat tours start from Ao Nang. In the tour data a hotel transfer for Ao Nang and Krabi is listed. If you stay in Ao Nang, the way to the boat is therefore short and uncomplicated: you do not first have to arrange a crossing in the morning before your island day begins.",
            "If you stay in Railay, things look different. Whether and where we can pick you up there depends on water level, weather and the route you want, and is not a given. Please raise it when you enquire, tell us your accommodation and preferred date, and we will work out together what the meeting point can look like. We cannot promise a start from Railay without checking first.",
            "Start time is the second point. Early tours such as Phi Phi Early Bird leave at 7 am. If you stay in Railay, you might need to cross to the mainland by boat beforehand for such an appointment, and in practice that favours Ao Nang if you mainly plan early tours. Afternoon tours or the sunset slot are more flexible.",
            "Conversely, if you stay in Ao Nang you can easily visit Railay as part of a boat tour. Our Railay & Phra Nang Half-Day Escape lasts four hours with a flexible start, and the 4-Islands tour ends with sunset in front of the cliffs of Phra Nang. You experience Railay without having to live there.",
          ],
        },
        tip: {
          de: "Nennen Sie uns bei der Anfrage Ihre Unterkunft und den geplanten Tourtag. Dann können wir Treffpunkt und Startzeit gleich passend zu Wasserstand und Wetter vorschlagen.",
          en: "When you enquire, tell us your accommodation and the planned tour day. Then we can suggest the meeting point and start time to suit water level and weather right away.",
        },
      },
      {
        h2: {
          de: "Alternativen: Klong Muang, Tubkaek und Krabi Town kurz eingeordnet",
          en: "Alternatives: Klong Muang, Tubkaek and Krabi Town in brief",
        },
        body: {
          de: [
            "Die Frage Ao Nang oder Railay blendet aus, dass es weitere Optionen gibt. Wir erwähnen sie nur kurz und nur dort, wo wir sicher sind, damit Sie die Landkarte im Kopf haben.",
            "Klong Muang und Tubkaek sind Strandabschnitte nördlich von Ao Nang, die als ruhiger und weitläufiger gelten. Sie liegen nicht direkt am Trubel, brauchen für Ausflüge aber meist ein Fahrzeug oder einen Transfer. Wenn Ihnen Ao Nang zu geschäftig ist, Railay aber zu umständlich, können sie einen Mittelweg darstellen.",
            "Krabi Town ist die Provinzhauptstadt am Fluss, mit Märkten und einem anderen, eher alltäglichen Charakter. Sie ist keine Strandbasis und eignet sich vor allem als Zwischenstopp oder für Gäste, die Stadtleben bevorzugen. Für Inselausflüge ist die Anreise zu den Anlegern weiter.",
            "Wenn Sie eine dieser Alternativen erwägen, fragen Sie vorab bei uns nach dem Transfer zum Boot. Unser Transfer ist für Ao Nang und Krabi ausgewiesen; Einzelheiten besprechen wir bei der Anfrage.",
          ],
          en: [
            "The question of Ao Nang or Railay hides the fact that there are other options. We mention them only briefly and only where we are sure, so that you have the map in your head.",
            "Klong Muang and Tubkaek are beach areas north of Ao Nang that are considered quieter and more spread out. They are not right in the bustle, but for excursions they usually need a vehicle or a transfer. If Ao Nang is too busy for you but Railay too awkward, they can be a middle path.",
            "Krabi Town is the provincial capital on the river, with markets and a different, more everyday character. It is not a beach base and suits above all as a stopover or for guests who prefer town life. For island trips the journey to the piers is longer.",
            "If you are considering one of these alternatives, ask us about the transfer to the boat in advance. Our transfer is listed for Ao Nang and Krabi; we discuss details when you enquire.",
          ],
        },
      },
      {
        h2: {
          de: "Beides kombinieren: geteilter Aufenthalt oder Tagesausflug nach Railay",
          en: "Combining both: a split stay or a day trip to Railay",
        },
        body: {
          de: [
            "Wer sich nicht entscheiden kann, muss es nicht. Es gibt zwei Wege, beide Orte zu erleben. Der erste ist ein geteilter Aufenthalt: einige Nächte in Ao Nang für Ausflüge, Essen und Beweglichkeit, danach einige Nächte in Railay für Ruhe und Landschaft. So fahren Sie nur einmal mit Gepäck per Boot, und die Bootstage fallen in die Zeit in Ao Nang.",
            "Der zweite ist ein Tagesausflug: Sie wohnen in Ao Nang und besuchen Railay per Boot, entweder als eigene Halbtagestour oder als Teil einer Inseltour. Auf diese Weise sehen Sie Phra Nang bei gutem Licht, schwimmen und gehen wieder zurück in Ihre Unterkunft. Das ist die einfachste Variante für alle, die Railay kennenlernen, aber nicht darin wohnen möchten.",
            "Beide Wege haben denselben Vorteil: Sie müssen sich nicht vorab auf einen Charakter festlegen. Beobachten Sie in den ersten Tagen, was Ihnen gefällt, und entscheiden Sie dann.",
          ],
          en: [
            "If you cannot decide, you do not have to. There are two ways to experience both places. The first is a split stay: a few nights in Ao Nang for excursions, food and mobility, then a few nights in Railay for quiet and scenery. That way you only travel by boat with luggage once, and the boat days fall in the time in Ao Nang.",
            "The second is a day trip: you stay in Ao Nang and visit Railay by boat, either as a half-day tour of its own or as part of an island tour. This way you see Phra Nang in good light, swim and return to your accommodation. It is the simplest option for anyone who wants to get to know Railay but not live there.",
            "Both ways have the same advantage: you do not have to commit to one character in advance. Watch in the first days what you like, then decide.",
          ],
        },
      },
      {
        h2: { de: "Unsere Empfehlung", en: "Our recommendation" },
        body: {
          de: [
            "Aus der Sicht eines Bootscharters ab Ao Nang: Für die erste Krabi-Reise und für alle, die mehrere Inseltage planen, ist Ao Nang die einfachere Basis. Kurze Wege, Straßenanbindung, viel Auswahl und ein kurzer Weg zum Boot. Railay lässt sich von dort aus jederzeit als Halbtagesausflug oder als Sunset-Stopp erleben.",
            "Wer bewusst Ruhe und Kulisse sucht, wenig Gepäck hat und mit einem kleineren Angebot zufrieden ist, wird Railay lieben. Planen Sie dann frühe Startzeiten und den Zugang zum Boot mit etwas Puffer, und sprechen Sie uns auf einen möglichen Treffpunkt an.",
            "Ein ehrlicher Hinweis zum Schluss: Wir vermitteln keine Unterkünfte und nennen deshalb keine Namen. Prüfen Sie Lage, Zugang und aktuelle Bewertungen selbst. Wenn Sie uns Ihre Unterkunft nennen, planen wir Ihren Bootstag darum herum.",
          ],
          en: [
            "From the point of view of a boat charter from Ao Nang: for a first Krabi trip and for anyone planning several island days, Ao Nang is the simpler base. Short distances, road connections, plenty of choice and a short way to the boat. Railay can be experienced from there at any time as a half-day trip or a sunset stop.",
            "If you deliberately want quiet and scenery, have little luggage and are happy with a smaller offering, you will love Railay. Then plan early start times and boat access with some buffer, and ask us about a possible meeting point.",
            "One honest note at the end: we do not broker accommodation and therefore name no hotels. Check location, access and current reviews yourself. If you tell us your accommodation, we plan your boat day around it.",
          ],
        },
      },
    ],
    faq: [
      {
        q: { de: "Ao Nang oder Railay: wo ist es schöner?", en: "Is Ao Nang or Railay better to stay?" },
        a: {
          de: "Das hängt vom Reisetyp ab. Railay ist landschaftlich spektakulärer und ruhiger, Ao Nang ist praktischer, lebendiger und bietet mehr Auswahl bei Restaurants und Ausflügen. Für die erste Krabi-Reise mit mehreren Ausflugstagen ist Ao Nang meist die einfachere Wahl; wer Ruhe und Felsenkulisse sucht, ist in Railay oft glücklicher.",
          en: "That depends on the type of traveller. Railay is scenically more spectacular and quieter; Ao Nang is more practical, livelier and offers more choice in restaurants and excursions. For a first Krabi trip with several excursion days Ao Nang is usually the simpler choice; if you look for quiet and cliff scenery, you are often happier in Railay.",
        },
      },
      {
        q: { de: "Ist Railay nur mit dem Boot erreichbar?", en: "Can you only reach Railay by boat?" },
        a: {
          de: "Ja. Railay ist eine Halbinsel, von der Kalksteinwände das Festland abtrennen, und es gibt keine Straßenverbindung. Üblicherweise fahren Longtail-Boote vom Strand in Ao Nang nach Railay, die Überfahrt ist kurz. Ablauf und Preise ändern sich, daher vorab bei der Unterkunft erfragen.",
          en: "Yes. Railay is a peninsula cut off from the mainland by limestone cliffs, and there is no road connection. Longtail boats usually run from the beach in Ao Nang to Railay, and the crossing is short. Procedures and prices change, so ask your accommodation beforehand.",
        },
      },
      {
        q: { de: "Wo übernachtet man am besten bei der ersten Krabi-Reise?", en: "Where should I stay in Krabi on my first trip?" },
        a: {
          de: "Die meisten Erstbesucher sind in Ao Nang gut aufgehoben: kurze Wege, viele Restaurants, Straßenanbindung und ein kurzer Weg zu den Booten. Railay können Sie bequem als Halbtagesausflug oder als Teil einer Bootstour besuchen, ohne dort zu wohnen.",
          en: "Most first-time visitors are well served in Ao Nang: short distances, many restaurants, road connections and a short way to the boats. You can easily visit Railay as a half-day trip or as part of a boat tour without staying there.",
        },
      },
      {
        q: { de: "Kann man von Railay Bootstouren starten?", en: "Can you start a private boat tour from Railay?" },
        a: {
          de: "Unsere Touren starten ab Ao Nang; ein Hotel-Transfer ist für Ao Nang und Krabi ausgewiesen. Ob wir Sie in Railay aufnehmen können, hängt von Wasserstand, Wetter und Route ab. Bitte nennen Sie uns bei der Anfrage Ihre Unterkunft und Ihren Wunschtermin, dann klären wir den Treffpunkt.",
          en: "Our tours start from Ao Nang; a hotel transfer is listed for Ao Nang and Krabi. Whether we can pick you up in Railay depends on water level, weather and route. When you enquire, please tell us your accommodation and preferred date, and we will clarify the meeting point.",
        },
      },
      {
        q: { de: "Ist Railay etwas für Familien mit kleinen Kindern?", en: "Is Railay suitable for families with small children?" },
        a: {
          de: "Es kann gehen, ist aber mit mehr Aufwand verbunden: Der Zugang erfolgt per Boot, bei niedrigem Wasser kann Waten nötig sein, und die Wege enthalten Treppen. Ao Nang ist für Familien meist praktischer. Eine Railay-Halbtagestour per Boot ist eine einfache Alternative.",
          en: "It can work but involves more effort: access is by boat, wading may be necessary at low water, and the paths include steps. Ao Nang is usually more practical for families. A half-day Railay tour by boat is a simple alternative.",
        },
      },
    ],
    related: [
      "railay-phra-nang-cave",
      "krabi-islands-insider-guide",
      "krabi-with-kids",
      "best-time-to-visit-krabi",
      "krabi-tides-guide",
    ],
    tourIds: ["railay-escape", "4islands-sunset"],
    image: IMG.railay,
  },

  /* ───────────────────────── Phi Phi Don vs Phi Phi Leh ───────────────────────── */
  {
    slug: "phi-phi-don-vs-phi-phi-leh",
    category: "island",
    short: { de: "Phi Phi Don oder Leh", en: "Phi Phi Don vs Leh" },
    primaryKeyword: "Phi Phi Don oder Leh",
    keywords: [
      "Phi Phi Don oder Leh",
      "Phi Phi Unterschied Don Leh",
      "Phi Phi Tagesausflug ab Krabi",
      "Ton Sai Bay Loh Dalum",
      "Pileh Lagoon Viking Cave",
      "Phi Phi Übernachten oder Tagestour",
      "Monkey Beach Phi Phi",
      "Phi Phi Don vs Phi Phi Leh",
      "which Phi Phi island to visit",
      "Phi Phi day trip from Krabi",
      "Maya Bay on Phi Phi Leh",
    ],
    title: {
      de: "Phi Phi Don oder Leh: Welche Insel lohnt sich?",
      en: "Phi Phi Don vs Phi Phi Leh: Which to Visit?",
    },
    metaDescription: {
      de: "Phi Phi Don oder Phi Phi Leh? Bewohnte Hauptinsel gegen Maya Bay und Pileh Lagoon: was Sie wo erwartet und wie Sie beides ab Krabi kombinieren.",
      en: "Phi Phi Don or Phi Phi Leh? Inhabited main island versus Maya Bay and Pileh Lagoon: what to expect and how to combine both on a day from Krabi.",
    },
    h1: {
      de: "Phi Phi Don oder Phi Phi Leh: der Unterschied und welche Insel Sie besuchen sollten",
      en: "Phi Phi Don vs Phi Phi Leh: the difference and which to visit",
    },
    intro: {
      de: "Wer Phi Phi plant, stolpert schnell über zwei Namen, die fast gleich klingen: Phi Phi Don und Phi Phi Leh. Viele Reisende wissen nicht, dass es sich um zwei verschiedene Inseln mit völlig unterschiedlichem Charakter handelt. Phi Phi Don ist die bewohnte Hauptinsel mit Hafen, Hotels und Restaurants. Phi Phi Leh ist die kleinere, unbewohnte Felseninsel, auf der Maya Bay, die Pileh-Lagune und die Viking Cave liegen. Dieser Guide erklärt den Unterschied, hilft bei der Entscheidung zwischen Tagesausflug und Übernachtung und zeigt, wie sich beide Inseln an einem privaten Tag ab Ao Nang kombinieren lassen. Die Fahrt dauert bei ruhiger See grob eine Stunde, genaue Zeiten hängen von Boot und Seegang ab.",
      en: "Anyone planning Phi Phi quickly stumbles over two names that sound almost the same: Phi Phi Don and Phi Phi Leh. Many travellers do not realise that these are two different islands with completely different characters. Phi Phi Don is the inhabited main island with a harbour, hotels and restaurants. Phi Phi Leh is the smaller, uninhabited rocky island where Maya Bay, Pileh Lagoon and Viking Cave are found. This guide explains the difference, helps you decide between a day trip and an overnight stay and shows how to combine both islands on one private day from Ao Nang. In calm seas the ride takes roughly an hour; exact times depend on the boat and sea state.",
    },
    sections: [
      {
        h2: {
          de: "Kurzantwort: zwei Inseln, zwei Zwecke",
          en: "Short answer: two islands, two purposes",
        },
        body: {
          de: [
            "Phi Phi Don ist die Insel, auf der Menschen wohnen, übernachten, essen und ankommen. Phi Phi Leh ist die Insel, die man ansieht, besucht und wieder verlässt. Beide gehören zur Phi-Phi-Gruppe in der Provinz Krabi und liegen so nah beieinander, dass sie sich an einem Tag verbinden lassen.",
            "Das häufigste Missverständnis betrifft Maya Bay. Die berühmte Bucht aus dem Film The Beach liegt nicht auf Phi Phi Don, sondern auf Phi Phi Leh. Wer also Maya Bay sehen will, plant keinen Aufenthalt auf der Hauptinsel, sondern eine Bootsfahrt zur unbewohnten Nachbarinsel.",
          ],
          en: [
            "Phi Phi Don is the island where people live, stay, eat and arrive. Phi Phi Leh is the island you look at, visit and leave again. Both belong to the Phi Phi group in Krabi province and lie so close together that they can be combined in one day.",
            "The most common misunderstanding concerns Maya Bay. The famous bay from the film The Beach is not on Phi Phi Don but on Phi Phi Leh. So if you want to see Maya Bay, you are not planning a stay on the main island but a boat trip to the uninhabited neighbouring island.",
          ],
        },
        list: {
          de: [
            "Phi Phi Don: bewohnt, Hafen Ton Sai, Strände, Aussicht, Unterkünfte und Restaurants",
            "Phi Phi Leh: unbewohnt, felsig, Maya Bay, Pileh-Lagune, Viking Cave",
            "Maya Bay liegt auf Phi Phi Leh, nicht auf Phi Phi Don",
            "Beide Inseln lassen sich an einem Tag per Boot verbinden",
          ],
          en: [
            "Phi Phi Don: inhabited, Ton Sai pier, beaches, viewpoint, accommodation and restaurants",
            "Phi Phi Leh: uninhabited, rocky, Maya Bay, Pileh Lagoon, Viking Cave",
            "Maya Bay is on Phi Phi Leh, not on Phi Phi Don",
            "Both islands can be combined in one day by boat",
          ],
        },
        tip: {
          de: "Merken Sie sich: Don ist die Insel zum Bleiben, Leh die Insel zum Ansehen. Wenn Sie in Anbietertexten nur von Phi Phi lesen, lohnt die Nachfrage, welche der beiden Inseln und welche Stopps gemeint sind.",
          en: "Remember: Don is the island to stay on, Leh the island to look at. If provider texts only say Phi Phi, it is worth asking which of the two islands and which stops are meant.",
        },
      },
      {
        h2: {
          de: "Phi Phi Don: Ton Sai, Strände und Aussicht auf der bewohnten Insel",
          en: "Phi Phi Don: Ton Sai, beaches and views on the inhabited island",
        },
        body: {
          de: [
            "Phi Phi Don ist die Hauptinsel der Gruppe und der einzige Ort, an dem Sie übernachten können. Ihr Zentrum ist die Ton Sai Bay mit dem Hafen, an dem Fähren und Boote ankommen. Dahinter liegt ein schmaler Landstreifen, der die Insel in zwei Hälften teilt und an dessen anderer Seite sich die Bucht Loh Dalum öffnet. Zwischen diesen beiden Buchten befinden sich Läden, Restaurants, Bars und Unterkünfte. Der Ort ist belebt und touristisch; die Insel ist klein und weitgehend zu Fuß erkundbar.",
            "Landschaftlich punktet Phi Phi Don mit Kalksteinfelsen, Stränden und Buchten. Zu den bekannten Zielen gehört der Viewpoint oberhalb von Ton Sai, von dem aus man auf die beiden Buchten und die Landenge blickt. Der Weg dorthin führt über Treppen und ist je nach Wetter anstrengend; früh am Morgen oder spät am Nachmittag ist es angenehmer. Weitere Strände und Buchten an der Küste der Insel lassen sich per Boot ansteuern, darunter Monkey Beach, der für seine Affen bekannt ist. Wer die Tiere sieht, sollte sie nicht füttern und Abstand halten.",
            "Phi Phi Don hat einen eigenen Rhythmus. Tagsüber kommen viele Tagesgäste mit Fähren und Ausflugsbooten, in den Abendstunden wird es für diejenigen ruhiger, die dort übernachten. Das macht die Insel für Reisende interessant, die den Tagesausflug bewusst hinter sich lassen und mehr Zeit vor Ort verbringen wollen.",
          ],
          en: [
            "Phi Phi Don is the main island of the group and the only place where you can stay overnight. Its centre is Ton Sai Bay with the pier where ferries and boats arrive. Behind it lies a narrow strip of land that divides the island into two halves and on whose other side the bay of Loh Dalum opens. Between these two bays you find shops, restaurants, bars and accommodation. The place is lively and touristy; the island is small and can largely be explored on foot.",
            "Scenically Phi Phi Don scores with limestone cliffs, beaches and coves. Among the well-known targets is the viewpoint above Ton Sai, from which you look over the two bays and the isthmus. The way up leads over steps and can be strenuous depending on the weather; early in the morning or late in the afternoon is more pleasant. Further beaches and coves along the island’s coast can be reached by boat, including Monkey Beach, which is known for its monkeys. If you see the animals, do not feed them and keep your distance.",
            "Phi Phi Don has a rhythm of its own. During the day many day guests arrive by ferry and excursion boat; in the evening it becomes quieter for those who stay overnight. That makes the island interesting for travellers who deliberately want to leave the day trip behind and spend more time on the spot.",
          ],
        },
        list: {
          de: [
            "Ton Sai Bay: Hafen, Läden, Restaurants und Unterkünfte",
            "Loh Dalum: die Bucht auf der anderen Seite der Landenge",
            "Viewpoint über Ton Sai: Treppen, früh morgens oder spät nachmittags angenehmer",
            "Monkey Beach: per Boot erreichbar, Affen nicht füttern",
          ],
          en: [
            "Ton Sai Bay: pier, shops, restaurants and accommodation",
            "Loh Dalum: the bay on the other side of the isthmus",
            "Viewpoint above Ton Sai: steps, more pleasant early morning or late afternoon",
            "Monkey Beach: reachable by boat, do not feed the monkeys",
          ],
        },
      },
      {
        h2: {
          de: "Phi Phi Leh: Maya Bay, Pileh-Lagune und Viking Cave auf der unbewohnten Insel",
          en: "Phi Phi Leh: Maya Bay, Pileh Lagoon and Viking Cave on the uninhabited island",
        },
        body: {
          de: [
            "Phi Phi Leh ist die kleinere der beiden Inseln und unbewohnt. Es gibt dort keine Unterkünfte und keinen Ort, nur steile Kalksteinwände, die direkt aus dem Wasser aufsteigen. Genau das macht den Reiz aus: Phi Phi Leh ist reine Kulisse. Zu den bekannten Zielen gehören Maya Bay, die Pileh-Lagune und die Viking Cave.",
            "Maya Bay ist eine kleine, fast kreisrunde Bucht, die von hohen Kalksteinwänden auf drei Seiten umschlossen wird. Weltberühmt wurde sie durch den Film The Beach aus dem Jahr 2000. Nach Jahren des starken Andrangs war die Bucht zeitweise geschlossen, damit sich Natur und Korallen erholen konnten, und ist inzwischen wieder zugänglich, mit klaren Regeln. Mehr zur Geschichte lesen Sie in unserem Guide zu Filmen in Krabi.",
            "Die Pileh-Lagune ist eine geschützte Bucht mit auffallend grünem, ruhigem Wasser, die von Felswänden umgeben ist. Sie gilt als eines der schönsten Badeziele rund um Phi Phi. Die Viking Cave ist eine Höhle an der Küste der Insel, die ihren Namen von alten Zeichnungen an den Wänden haben soll. Berichten zufolge werden dort essbare Nester gesammelt; das Betreten ist in der Regel nicht vorgesehen, man sieht sie vom Boot aus.",
            "Weil Phi Phi Leh unbewohnt ist, erleben Sie die Insel nur tagsüber und nur per Boot. Das ist der Grund, warum die Tageszeit hier so wichtig ist: Alle Boote kommen zur gleichen Zeit, und wer früh oder spät kommt, erlebt die Insel deutlich ruhiger.",
          ],
          en: [
            "Phi Phi Leh is the smaller of the two islands and uninhabited. There is no accommodation and no town, only steep limestone walls rising straight out of the water. That is exactly the appeal: Phi Phi Leh is pure backdrop. Well-known targets include Maya Bay, Pileh Lagoon and Viking Cave.",
            "Maya Bay is a small, almost circular bay enclosed by tall limestone walls on three sides. It became world famous through the 2000 film The Beach. After years of heavy crowds the bay was closed for a time so that nature and coral could recover, and it is now accessible again with clear rules. You can read more of the history in our guide to movies in Krabi.",
            "Pileh Lagoon is a sheltered bay with strikingly green, calm water surrounded by cliffs. It counts as one of the most beautiful swimming spots around Phi Phi. Viking Cave is a cave on the island’s coast that is said to take its name from old drawings on its walls. According to reports, edible nests are collected there; entering is usually not intended, and you see it from the boat.",
            "Because Phi Phi Leh is uninhabited, you only experience the island during the day and only by boat. That is why the time of day matters so much here: all boats arrive at the same time, and if you come early or late you experience the island far more quietly.",
          ],
        },
        list: {
          de: [
            "Maya Bay: Bucht mit Felswänden, Regeln der Nationalparkbehörde, jährliche Schließzeit",
            "Pileh-Lagune: geschützte Badebucht mit grünem Wasser",
            "Viking Cave: Höhle an der Küste, Besichtigung vom Boot",
            "Keine Unterkünfte, nur Tagesbesuch per Boot",
          ],
          en: [
            "Maya Bay: bay with cliffs, national park authority rules, annual closure period",
            "Pileh Lagoon: sheltered swimming bay with green water",
            "Viking Cave: cave on the coast, viewed from the boat",
            "No accommodation, day visits by boat only",
          ],
        },
      },
      {
        h2: {
          de: "Tagestour oder Übernachten: wie lange bleiben auf Phi Phi?",
          en: "Day trip or overnight: how long to stay on Phi Phi?",
        },
        body: {
          de: [
            "Das ist die eigentliche Entscheidung hinter der Don-oder-Leh-Frage. Übernachten können Sie nur auf Phi Phi Don. Phi Phi Leh bleibt ein Ziel für Bootsausflüge. Wer auf Phi Phi übernachtet, wählt die Hauptinsel als Basis und erreicht Phi Phi Leh von dort per Boot.",
            "Für die meisten Krabi-Reisenden ist ein Tagesausflug die bessere Lösung. Er verbindet beide Inseln, vermeidet das Umziehen mit Gepäck und lässt Sie am Abend zurück in Ihrer Unterkunft in Ao Nang. Zudem lassen sich Highlights wie Maya Bay und Pileh-Lagune mit einem frühen Start vor den Fähren erreichen. Das ist ein wesentlicher Vorteil eines Privatboots.",
            "Eine Übernachtung auf Phi Phi Don lohnt sich, wenn Sie bewusst den Abend und den frühen Morgen auf der Insel erleben möchten und Ton Sai als Basis akzeptieren. Das hat seinen eigenen Reiz, bedeutet aber mehr Planung bei Anreise und Gepäck. Zeiten und Preise für Fähren ändern sich, wir nennen deshalb keine Zahlen; prüfen Sie den aktuellen Stand bei den Anbietern.",
            "Unser Rat: Wenn Phi Phi für Sie vor allem Maya Bay, Pileh-Lagune und Schnorcheln heißt, planen Sie einen Tagesausflug ab Ao Nang. Wenn Sie ein paar Nächte Inselatmosphäre wollen, ist Phi Phi Don eine eigene Reise und keine Fortsetzung des Krabi-Programms.",
          ],
          en: [
            "This is the real decision behind the Don-or-Leh question. You can only stay overnight on Phi Phi Don. Phi Phi Leh remains a destination for boat trips. If you stay on Phi Phi, you choose the main island as your base and reach Phi Phi Leh from there by boat.",
            "For most Krabi travellers a day trip is the better solution. It combines both islands, avoids moving with luggage and brings you back to your accommodation in Ao Nang in the evening. Highlights such as Maya Bay and Pileh Lagoon can also be reached with an early start ahead of the ferries. That is a major advantage of a private boat.",
            "An overnight stay on Phi Phi Don is worthwhile if you deliberately want to experience the evening and early morning on the island and accept Ton Sai as your base. That has its own charm but means more planning for arrival and luggage. Ferry times and prices change, so we give no numbers; check the current status with the providers.",
            "Our advice: if Phi Phi mainly means Maya Bay, Pileh Lagoon and snorkelling for you, plan a day trip from Ao Nang. If you want a few nights of island atmosphere, Phi Phi Don is a trip of its own and not a continuation of your Krabi programme.",
          ],
        },
      },
      {
        h2: {
          de: "Anfahrt ab Krabi: Fahrzeit nur grob, Weg und Wetter",
          en: "Getting there from Krabi: travel time only roughly, route and weather",
        },
        body: {
          de: [
            "Die Phi-Phi-Inseln liegen vor der Küste und sind nur per Boot erreichbar. Ab Ao Nang dauert die Fahrt mit einem Speedboot bei ruhiger See grob eine Stunde, je nach Boot, Route und Seegang kann es kürzer oder länger sein. Fähren und Longtails haben andere Zeiten; Fahrpläne und Preise ändern sich, wir treffen dazu keine Aussagen. Bitte aktuell bei den Anbietern prüfen.",
            "Das Seegebiet zwischen Festland und Phi Phi ist offener als die geschützten Buchten der Küste. Bei rauer See kann die Fahrt unangenehmer oder nicht möglich sein; in der Regenzeit sind Ausflüge deshalb wetterabhängig. Details zu den Jahreszeiten finden Sie in unserem Guide zur besten Reisezeit für Krabi.",
            "Beachten Sie auch, dass die Phi-Phi-Inseln zu einem Nationalpark gehören. Eine Eintrittsgebühr wird in der Regel erhoben; Höhe und Regeln legt die Nationalparkbehörde fest und kann sie ändern. Bei unseren Phi-Phi-Touren sind die Nationalpark-Gebühren laut Tourdaten im Leistungsumfang enthalten.",
          ],
          en: [
            "The Phi Phi islands lie off the coast and can only be reached by boat. From Ao Nang the ride by speedboat takes roughly an hour in calm seas; depending on boat, route and sea state it can be shorter or longer. Ferries and longtails have different times; schedules and prices change, and we make no statements about them. Please check the current status with the providers.",
            "The stretch of sea between the mainland and Phi Phi is more open than the sheltered bays along the coast. In rough seas the ride can be uncomfortable or not possible; in the rainy season trips are therefore weather-dependent. For details on the seasons see our guide to the best time to visit Krabi.",
            "Note also that the Phi Phi islands belong to a national park. An entrance fee is usually charged; the amount and rules are set by the national park authority and can change. On our Phi Phi tours, national park fees are included in the service according to the tour data.",
          ],
        },
        tip: {
          de: "Planen Sie für Phi Phi einen Wetter-Puffertag ein. Wenn die See an einem Tag zu rau ist, lässt sich ein Ausflug oft auf den Folgetag verschieben, sofern Ihr Reiseplan es erlaubt.",
          en: "Plan a weather buffer day for Phi Phi. If the sea is too rough on one day, a trip can often be moved to the next day, provided your itinerary allows it.",
        },
      },
      {
        h2: {
          de: "Regeln und Sperrzeiten: Maya Bay und Nationalpark",
          en: "Rules and closure periods: Maya Bay and the national park",
        },
        body: {
          de: [
            "Maya Bay unterliegt strengeren Regeln als die meisten anderen Orte der Region. Zuletzt galten unter anderem: Boote legen nicht mehr in der Bucht an, sondern an einem Steg auf der Rückseite der Insel, Schwimmen in der Bucht ist nicht erlaubt, die Aufenthaltsdauer ist begrenzt, und die Bucht ist jedes Jahr für rund zwei Monate geschlossen, zuletzt im August und September. Die Nationalparkbehörde legt Regeln und Termine fest und ändert sie gelegentlich. Prüfen Sie den aktuellen Stand vor Ihrer Reise.",
            "Warum es diese Regeln gibt, zeigt die Geschichte der Bucht: Nach Jahren des Massenandrangs wurde sie 2018 geschlossen, damit sich die Korallen und das Ökosystem erholen konnten. Die Regeln schützen genau diese Erholung. Wer sie beachtet, trägt dazu bei, dass die Bucht dauerhaft besucht werden kann. Eine ausführliche Übersicht planen wir in einem eigenen Artikel zu Öffnungs- und Schließzeiten.",
            "Auch auf Phi Phi Leh insgesamt gilt: Nichts mitnehmen, nichts anfassen, keine Tiere füttern, keinen Müll hinterlassen. Das ist selbstverständlich, aber an stark besuchten Orten besonders wichtig.",
          ],
          en: [
            "Maya Bay is subject to stricter rules than most other places in the region. Most recently these included: boats no longer dock in the bay but at a jetty on the back of the island, swimming in the bay is not allowed, the length of stay is limited, and the bay closes for around two months every year, most recently in August and September. The national park authority sets rules and dates and changes them occasionally. Check the current status before you travel.",
            "Why these rules exist is shown by the bay’s history: after years of mass crowds it was closed in 2018 so that the coral and the ecosystem could recover. The rules protect exactly that recovery. Anyone who follows them helps ensure that the bay can be visited in the long term. We are planning a detailed overview in a separate article on opening and closing dates.",
            "On Phi Phi Leh as a whole the same applies: take nothing, touch nothing, do not feed animals, leave no rubbish. That goes without saying, but it matters most at heavily visited places.",
          ],
        },
        list: {
          de: [
            "Regeln und Termine ändern sich: aktuell bei der Nationalparkbehörde prüfen",
            "Maya Bay: zuletzt Steg auf der Rückseite, kein Schwimmen in der Bucht, begrenzte Aufenthaltsdauer",
            "Jährliche Schließzeit von rund zwei Monaten, zuletzt August und September",
            "Auch bei Schließung bleiben Pileh-Lagune und andere Stopps oft möglich",
          ],
          en: [
            "Rules and dates change: check the current status with the national park authority",
            "Maya Bay: most recently jetty at the back, no swimming in the bay, limited length of stay",
            "Annual closure of around two months, most recently August and September",
            "Even during the closure, Pileh Lagoon and other stops often remain possible",
          ],
        },
      },
      {
        h2: {
          de: "Timing gegen Menschenmassen: wann Phi Phi leer ist",
          en: "Timing against the crowds: when Phi Phi is quiet",
        },
        body: {
          de: [
            "Phi Phi ist eines der meistbesuchten Ziele der Andamanensee. Die Hauptmenge der Ausflugsboote und Fähren trifft in der Regel am Vormittag und um die Mittagszeit ein. Wer früh dort ist, sieht Maya Bay und die Pileh-Lagune in weichem Licht und mit deutlich weniger Menschen. Das ist unser wichtigster Rat für jeden Phi-Phi-Tag.",
            "Ein früher Start bedeutet für Sie: früh aufstehen, aber dafür die Highlights vor den Fähren genießen. Unsere Phi Phi Early Bird Tour startet um 07:00 Uhr aus genau diesem Grund. Wer lieber später aufbricht, kann den späten Nachmittag nutzen, wenn viele Boote bereits zurückfahren. Mittags ist es am vollsten und das Licht am härtesten.",
            "Auch die Wochentage und die Jahreszeit spielen eine Rolle. In der Hauptsaison ist mehr los, in den Randzeiten ruhiger, dafür wetterabhängiger. Mehr dazu in unserem Guide zu Krabi ohne Touristenmassen.",
            "Ein ehrlicher Hinweis: Wir versprechen keine leeren Strände. Berühmte Orte bleiben berühmt. Aber mit frühem Start, guter Planung und einem kleinen Boot sehen Sie sie anders als die meisten Besucher.",
          ],
          en: [
            "Phi Phi is one of the most visited destinations in the Andaman Sea. The main mass of excursion boats and ferries usually arrives in the morning and around midday. If you are there early, you see Maya Bay and Pileh Lagoon in soft light and with far fewer people. That is our most important advice for every Phi Phi day.",
            "An early start means getting up early but enjoying the highlights ahead of the ferries. Our Phi Phi Early Bird tour leaves at 7 am for exactly this reason. If you prefer to set out later, you can use the late afternoon, when many boats are already heading back. Midday is busiest and the light harshest.",
            "Weekdays and season also play a role. In high season more is going on, in the shoulder periods it is quieter but more weather-dependent. More in our guide to Krabi without the tourist crowds.",
            "One honest note: we do not promise empty beaches. Famous places stay famous. But with an early start, good planning and a small boat you will see them differently from most visitors.",
          ],
        },
        tip: {
          de: "Wenn Sie nur einen Phi-Phi-Termin haben, wählen Sie den frühen Morgen. Er verändert den Eindruck von Maya Bay und Pileh-Lagune stärker als jede andere Entscheidung.",
          en: "If you only have one Phi Phi slot, choose early morning. It changes the impression of Maya Bay and Pileh Lagoon more than any other decision.",
        },
      },
      {
        h2: {
          de: "Beide Inseln an einem privaten Tag kombinieren",
          en: "Combining both islands on one private day",
        },
        body: {
          de: [
            "Mit einem privaten Boot müssen Sie sich nicht zwischen Don und Leh entscheiden. Unsere Phi Phi Early Bird Tour startet um 07:00 Uhr und dauert etwa acht Stunden. Die Stopps sind Maya Bay, die Pileh-Lagune, die Viking Cave und Bamboo Island mit Mittagspause am weißen Strand. Sie erleben also Phi Phi Leh mit seinen Highlights und eine der kleineren Inseln der Gruppe, ohne auf Phi Phi Don übernachten zu müssen.",
            "Schnorcheln, Schwimmen und Entspannen sind Teil der Tour. Schnorchelausrüstung ist bei uns kostenlos und wird bei der Buchung angekreuzt. Wünsche zum Ablauf, zum Beispiel ein Halt in der Nähe von Phi Phi Don oder Monkey Beach, besprechen wir bei Ihrer Anfrage; ob und wie sie sich einfügen, hängt von Wetter, Seegang und Parkregeln ab.",
            "Wer zusätzlich Fotos aus der Luft möchte, kann das 4K-Drohnenpaket dazubuchen. Beachten Sie, dass in Nationalparks Regeln für Drohnen gelten und Flüge nicht überall erlaubt sind; Ihr Kapitän klärt das vor Ort.",
            "Das Boot ist ein weißes Hardtop-Kabinenboot mit zwei Motoren zu je 300 PS, mit Sitzbank und bequemen Bootssesseln für höchstens fünf Gäste. Das Hardtop spendet Schatten. Wer Verpflegung wünscht, kann bei uns Catering für 500 THB pro Person dazubuchen.",
          ],
          en: [
            "With a private boat you do not have to choose between Don and Leh. Our Phi Phi Early Bird tour leaves at 7 am and lasts about eight hours. The stops are Maya Bay, Pileh Lagoon, Viking Cave and Bamboo Island with a lunch break on the white beach. So you experience Phi Phi Leh with its highlights and one of the smaller islands of the group without having to stay overnight on Phi Phi Don.",
            "Snorkelling, swimming and relaxing are part of the tour. Snorkel gear is free with us and is ticked when you book. Wishes about the programme, for example a stop near Phi Phi Don or Monkey Beach, we discuss when you enquire; whether and how they fit depends on weather, sea state and park rules.",
            "If you also want aerial photos, you can add the 4K drone package. Note that rules for drones apply in national parks and flights are not allowed everywhere; your captain clarifies this on the spot.",
            "The boat is a white hardtop cabin boat with two 300 hp engines, with a bench seat and comfortable boat seats for a maximum of five guests. The hardtop provides shade. If you want food, you can add catering for 500 THB per person.",
          ],
        },
        list: {
          de: [
            "Phi Phi Early Bird: Start 07:00 Uhr, rund 8 Stunden, private Tour für bis zu 5 Gäste",
            "Stopps: Maya Bay, Pileh-Lagune, Viking Cave, Bamboo Island",
            "Schnorchelausrüstung kostenlos, bei der Buchung ankreuzen",
            "Nationalpark-Gebühren laut Tourdaten im Leistungsumfang",
            "Optional: 4K-Drohnenpaket (kostenpflichtig), Catering 500 THB pro Person",
          ],
          en: [
            "Phi Phi Early Bird: start 7 am, around 8 hours, private tour for up to 5 guests",
            "Stops: Maya Bay, Pileh Lagoon, Viking Cave, Bamboo Island",
            "Snorkel gear free, tick it when booking",
            "National park fees included in the service according to the tour data",
            "Optional: 4K drone package (extra charge), catering 500 THB per person",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Was ist der Unterschied zwischen Phi Phi Don und Phi Phi Leh?",
          en: "What is the difference between Phi Phi Don and Phi Phi Leh?",
        },
        a: {
          de: "Phi Phi Don ist die bewohnte Hauptinsel mit Hafen Ton Sai, Stränden, Hotels und Restaurants. Phi Phi Leh ist die kleinere, unbewohnte Felseninsel mit Maya Bay, Pileh-Lagune und Viking Cave. Übernachten können Sie nur auf Phi Phi Don; Phi Phi Leh besucht man per Boot.",
          en: "Phi Phi Don is the inhabited main island with Ton Sai pier, beaches, hotels and restaurants. Phi Phi Leh is the smaller, uninhabited rocky island with Maya Bay, Pileh Lagoon and Viking Cave. You can only stay overnight on Phi Phi Don; Phi Phi Leh is visited by boat.",
        },
      },
      {
        q: { de: "Auf welcher Insel liegt Maya Bay?", en: "Which Phi Phi island is Maya Bay on?" },
        a: {
          de: "Maya Bay liegt auf Phi Phi Leh, der unbewohnten kleineren Insel der Phi-Phi-Gruppe, nicht auf Phi Phi Don. Regeln und jährliche Schließzeiten legt die Nationalparkbehörde fest und ändert sie gelegentlich, bitte aktuell prüfen.",
          en: "Maya Bay is on Phi Phi Leh, the uninhabited smaller island of the Phi Phi group, not on Phi Phi Don. Rules and annual closure periods are set by the national park authority and occasionally changed, so please check the current status.",
        },
      },
      {
        q: { de: "Lohnt sich eine Phi-Phi-Tagestour ab Krabi?", en: "Is a Phi Phi day trip from Krabi worth it?" },
        a: {
          de: "Für die meisten Reisenden ja. Ein Tagesausflug verbindet Maya Bay, Pileh-Lagune und weitere Stopps, ohne Gepäckwechsel. Entscheidend ist der Zeitpunkt: Mit frühem Start erreichen Sie die Highlights vor den Fähren. Die Fahrt dauert ab Ao Nang bei ruhiger See grob eine Stunde, je nach Boot und Seegang.",
          en: "For most travellers, yes. A day trip combines Maya Bay, Pileh Lagoon and further stops without moving luggage. Timing is decisive: with an early start you reach the highlights ahead of the ferries. The ride from Ao Nang takes roughly an hour in calm seas, depending on boat and sea state.",
        },
      },
      {
        q: { de: "Kann man auf Phi Phi Leh übernachten?", en: "Can you stay overnight on Phi Phi Leh?" },
        a: {
          de: "Nein, Phi Phi Leh ist unbewohnt, und es gibt dort keine Unterkünfte. Übernachten können Sie auf Phi Phi Don. Phi Phi Leh erleben Sie auf einem Tagesausflug per Boot.",
          en: "No, Phi Phi Leh is uninhabited and there is no accommodation there. You can stay overnight on Phi Phi Don. You experience Phi Phi Leh on a day trip by boat.",
        },
      },
      {
        q: { de: "Kann man beide Inseln an einem Tag sehen?", en: "Can you see both islands in one day?" },
        a: {
          de: "Ja, die beiden Inseln liegen nah beieinander und lassen sich per Boot an einem Tag verbinden. Unsere Phi Phi Early Bird Tour führt zu Maya Bay, Pileh-Lagune, Viking Cave und Bamboo Island. Wünsche für zusätzliche Stopps besprechen wir bei der Anfrage, abhängig von Wetter und Parkregeln.",
          en: "Yes, the two islands lie close together and can be combined by boat in one day. Our Phi Phi Early Bird tour goes to Maya Bay, Pileh Lagoon, Viking Cave and Bamboo Island. We discuss wishes for additional stops when you enquire, depending on weather and park rules.",
        },
      },
    ],
    related: [
      "phi-phi-maya-bay-early-morning",
      "krabi-movie-locations-james-bond-the-beach",
      "avoid-crowds-krabi-timing",
      "krabi-island-hopping-planner",
      "maya-bay-open-closed-dates",
    ],
    tourIds: ["phi-phi-early-bird"],
    image: IMG.maya,
  },
];
