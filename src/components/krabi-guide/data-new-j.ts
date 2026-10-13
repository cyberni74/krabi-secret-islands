import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch J: informational search intent – best beaches in Krabi, Ao Nang away from the crowds.
 * Fact policy as in batch H/I: no prices or ratings, no tide tables, travel times only "about" and from site content,
 * park fee = general sentence only. Beach characteristics are described in general terms and hedged where they vary.
 */
export const NEW_ARTICLES_J: GuideArticleInput[] = [
  {
    slug: "best-beaches-krabi-ao-nang-railay-islands",
    category: "insider",
    short: { de: "Die besten Strände", en: "Best beaches" },
    primaryKeyword: "beste Strände Krabi",
    keywords: [
      "beste Strände Krabi",
      "schönste Strände Krabi",
      "Krabi Strände Ao Nang",
      "Railay Strand",
      "Phra Nang Beach",
      "Krabi Strand Insel",
      "best beaches in Krabi",
      "Krabi beaches Ao Nang Railay",
      "most beautiful beaches Krabi",
    ],
    title: {
      de: "Die besten Strände in Krabi: Ao Nang, Railay & Inseln",
      en: "The Best Beaches in Krabi: Ao Nang, Railay & Islands",
    },
    metaDescription: {
      de: "Die besten Strände in Krabi im Überblick: Ao Nang, Railay, Phra Nang, Noppharat Thara sowie Inselstrände wie Koh Poda und die Tup-Sandbank, mit Tipps zu Gezeiten und Anreise.",
      en: "The best beaches in Krabi at a glance: Ao Nang, Railay, Phra Nang, Noppharat Thara plus island beaches such as Koh Poda and the Tup sandbar, with tips on tides and getting there.",
    },
    h1: {
      de: "Die besten Strände in Krabi: Welcher passt zu Ihnen?",
      en: "The best beaches in Krabi: which one suits you?",
    },
    intro: {
      de: "Die schönsten Strände in Krabi liegen an drei Orten: an der Küste um Ao Nang, auf der Halbinsel Railay und auf den vorgelagerten Inseln. Jeder Strand hat einen eigenen Charakter. Manche sind bequem zu erreichen, aber belebt, andere liegen hinter Kalksteinfelsen und kommen nur über das Wasser infrage. Dieser Guide ordnet die wichtigsten Strände nach Lage und Typ ein und sagt, wann sie am besten aussehen. Das Wasser und der Strand verändern sich mit den Gezeiten stark, deshalb gelten alle Angaben als Orientierung.",
      en: "The best beaches in Krabi are found in three places: along the coast around Ao Nang, on the Railay peninsula and on the islands offshore. Each beach has its own character. Some are easy to reach but lively, others lie behind limestone cliffs and are practical only from the water. This guide sorts the main beaches by location and type and says when they look their best. Water and sand change a lot with the tides, so all details are rough guides.",
    },
    sections: [
      {
        id: "ao-nang-coast",
        h2: { de: "An der Küste: Ao Nang und Umgebung", en: "On the coast: Ao Nang and around" },
        body: {
          de: [
            "Der Ao Nang Beach ist der zentrale Strand und liegt direkt an der Promenade mit Restaurants, Läden und dem Pier. Er ist der bequemste Strand, aber auch der belebteste. Bei Flut ist der Strand schmal, bei Ebbe zieht sich das Wasser weit zurück. Zum Schwimmen ist die Flut meist angenehmer.",
            "Nördlich von Ao Nang liegt Noppharat Thara, ein langer, ruhigerer Küstenstrand. Weiter nördlich folgen Klong Muang und Tubkaek, die vor allem von Resorts geprägt sind. Wer morgens früh kommt, hat die Strände oft fast für sich.",
          ],
          en: [
            "Ao Nang Beach is the central beach, right on the promenade with restaurants, shops and the pier. It is the most convenient beach but also the busiest. At high tide the beach is narrow, at low tide the water retreats far. For swimming, high tide is usually more pleasant.",
            "North of Ao Nang lies Noppharat Thara, a long, quieter coastal beach. Further north come Klong Muang and Tubkaek, which are shaped mainly by resorts. If you arrive early in the morning you often have the beaches almost to yourself.",
          ],
        },
      },
      {
        id: "railay-phra-nang",
        h2: { de: "Railay und Phra Nang: Strände zwischen Felsen", en: "Railay and Phra Nang: beaches between cliffs" },
        body: {
          de: [
            "Die Halbinsel Railay ist vom Festland durch Kalksteinfelsen abgeschnitten und nur über das Wasser erreichbar. Railay West ist der klassische Sonnenuntergangsstrand, Railay East liegt auf der Seite zur Bucht. Phra Nang Beach gehört zu den bekanntesten Stränden der Region: weißer Sand, türkises Wasser, steile Felswände und die Phra Nang Cave.",
            "Bei Ebbe wird das Wasser vor Phra Nang flach, bei Flut ist der Strand schmaler. Mehr zu Anreise und Höhle steht im Guide zu Railay und der Phra Nang Cave. Ob Sie in Ao Nang oder auf Railay wohnen, vergleicht der Artikel zu Ao Nang und Railay.",
          ],
          en: [
            "The Railay peninsula is cut off from the mainland by limestone cliffs and reachable only over the water. Railay West is the classic sunset beach, Railay East faces the bay. Phra Nang Beach is among the best-known beaches in the region: white sand, turquoise water, steep cliffs and the Phra Nang Cave.",
            "At low tide the water in front of Phra Nang becomes shallow, at high tide the beach is narrower. More on getting there and the cave is in the guide to Railay and the Phra Nang Cave. Whether to stay in Ao Nang or on Railay is compared in the article on Ao Nang versus Railay.",
          ],
        },
        figure: {
          src: "/images/krabi-boat-tour-railay-strand-kalksteinfelsen-boote-krabi.webp",
          width: 1672,
          height: 941,
          alt: {
            de: "Strand bei Railay und Phra Nang mit hohen Kalksteinfelsen, weißem Sand und türkisem Wasser",
            en: "Beach at Railay and Phra Nang with tall limestone cliffs, white sand and turquoise water",
          },
        },
      },
      {
        id: "island-beaches",
        h2: { de: "Inselstrände: Poda, Tup-Sandbank und Hong", en: "Island beaches: Poda, the Tup sandbar and Hong" },
        body: {
          de: [
            "Die schönsten Strände liegen auf den Inseln. Koh Poda hat einen langen, hellen Strand mit dem markanten Felsen davor. Die Tup-Sandbank ist bei Ebbe ein weißer Sandstreifen, der Tup Island und Chicken Island zu verbinden scheint. In der Hong-Gruppe liegt die Lagune von Koh Hong, in der das Wasser auffallend grün wirkt.",
            "Diese Strände erreichen Sie per Boot. Nach unseren Tourdaten sind die 4 Islands etwa 10 bis 15 Minuten per Speedboat von Ao Nang entfernt, die Hong-Gruppe etwa 30 bis 35 Minuten. Einige Inseln und Nationalparks verlangen eine Eintrittsgebühr, die nicht im Tourpreis enthalten ist und vor Ort direkt bei den Rangern bezahlt wird.",
          ],
          en: [
            "The most beautiful beaches are on the islands. Koh Poda has a long, pale beach with the striking rock in front of it. At low tide the Tup sandbar is a white strip of sand that seems to join Tup Island and Chicken Island. The Hong group contains the lagoon of Koh Hong, where the water looks strikingly green.",
            "You reach these beaches by boat. According to our tour data the 4 Islands are about 10 to 15 minutes by speedboat from Ao Nang, the Hong group about 30 to 35 minutes. Some islands and national parks charge an entrance fee that is not included in the tour price and is paid on site directly to the rangers.",
          ],
        },
        tip: {
          de: "Für Inselstrände ohne Gedränge zählt die Uhrzeit mehr als der Strand: früh am Morgen oder am späten Nachmittag. Mehr dazu im Guide zu den Tageszeiten.",
          en: "For island beaches without the crowds the time of day matters more than the beach: early morning or late afternoon. More in the guide on timing.",
        },
      },
      {
        id: "which-beach-for-whom",
        h2: { de: "Welcher Strand passt zu wem?", en: "Which beach suits whom?" },
        body: {
          de: ["Die Tabelle ordnet die Strände nach Lage und Charakter ein. Die Angaben sind allgemein gehalten, denn Gezeiten, Wetter und Jahreszeit verändern jeden Strand."],
          en: ["The table sorts the beaches by location and character. The details are general, because tides, weather and season change every beach."],
        },
        table: {
          caption: { de: "Strände in Krabi im Vergleich", en: "Krabi beaches compared" },
          head: [
            { de: "Strand", en: "Beach" },
            { de: "Lage", en: "Location" },
            { de: "Charakter", en: "Character" },
            { de: "Anreise", en: "Getting there" },
          ],
          rows: [
            [
              { de: "Ao Nang Beach", en: "Ao Nang Beach" },
              { de: "Küste", en: "Coast" },
              { de: "belebt, Promenade, Sonnenuntergang", en: "lively, promenade, sunset" },
              { de: "zu Fuß oder Taxi", en: "on foot or by taxi" },
            ],
            [
              { de: "Noppharat Thara", en: "Noppharat Thara" },
              { de: "Küste, nördlich", en: "Coast, north" },
              { de: "lang, ruhiger", en: "long, quieter" },
              { de: "Taxi", en: "taxi" },
            ],
            [
              { de: "Railay West / Phra Nang", en: "Railay West / Phra Nang" },
              { de: "Halbinsel Railay", en: "Railay peninsula" },
              { de: "Felsen, weißer Sand, Höhle", en: "cliffs, white sand, cave" },
              { de: "über das Wasser", en: "over the water" },
            ],
            [
              { de: "Koh Poda", en: "Koh Poda" },
              { de: "Insel, 4 Islands", en: "Island, 4 Islands" },
              { de: "langer heller Strand, Felsen", en: "long pale beach, rock" },
              { de: "per Boot", en: "by boat" },
            ],
            [
              { de: "Tup-Sandbank", en: "Tup sandbar" },
              { de: "zwischen Tup und Chicken Island", en: "between Tup and Chicken Island" },
              { de: "bei Ebbe sichtbar", en: "visible at low tide" },
              { de: "per Boot", en: "by boat" },
            ],
            [
              { de: "Koh Hong", en: "Koh Hong" },
              { de: "Hong-Gruppe", en: "Hong group" },
              { de: "Lagune, grünes Wasser", en: "lagoon, green water" },
              { de: "per Boot", en: "by boat" },
            ],
          ],
        },
      },
    ],
    faq: [
      {
        q: { de: "Welcher ist der schönste Strand in Krabi?", en: "Which is the most beautiful beach in Krabi?" },
        a: {
          de: "Das ist Geschmackssache. Phra Nang Beach auf Railay gilt als eine der bekanntesten Kulissen, die Inselstrände wie Koh Poda und die Tup-Sandbank liegen weiter draußen und wirken oft ruhiger.",
          en: "That is a matter of taste. Phra Nang Beach on Railay is considered one of the best-known settings, while island beaches such as Koh Poda and the Tup sandbar lie further out and often feel quieter.",
        },
      },
      {
        q: { de: "Kann man am Ao Nang Beach schwimmen?", en: "Can you swim at Ao Nang Beach?" },
        a: {
          de: "Ja, bei Flut ist es meist angenehmer. Bei Ebbe zieht sich das Wasser weit zurück und der Strand ist breit und flach. Beachten Sie Flaggen und Hinweise vor Ort.",
          en: "Yes, high tide is usually more pleasant. At low tide the water retreats far and the beach is wide and shallow. Follow flags and signs on site.",
        },
      },
      {
        q: { de: "Wie komme ich zu Strand und Inseln ohne Gedränge?", en: "How do I reach beaches and islands without the crowds?" },
        a: {
          de: "Mit einem frühen Start oder am späten Nachmittag. Ein privates Speedboat startet in Ao Nang oder Krabi Town und richtet sich nach Ihrem Zeitplan.",
          en: "With an early start or in the late afternoon. A private speedboat starts in Ao Nang or Krabi Town and follows your schedule.",
        },
      },
      {
        q: { de: "Wann ist die Tup-Sandbank zu sehen?", en: "When is the Tup sandbar visible?" },
        a: {
          de: "Bei Ebbe. Die Zeiten ändern sich täglich. Fragen Sie vor der Tour nach dem Gezeitenverlauf für Ihren Tag.",
          en: "At low tide. The times change daily. Ask about the tide pattern for your day before the tour.",
        },
      },
      {
        q: { de: "Ist für die Inselstrände ein Eintritt nötig?", en: "Is an entrance fee needed for island beaches?" },
        a: {
          de: "Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr. Diese ist nicht im Tourpreis enthalten und wird vor Ort direkt bei den Rangern bezahlt.",
          en: "Some islands and national parks charge an entrance fee. It is not included in the tour price and is paid on site directly to the rangers.",
        },
      },
    ],
    related: [
      "secret-beaches-lagoons-krabi",
      "railay-phra-nang-cave",
      "ao-nang-vs-railay-where-to-stay",
      "koh-poda-guide",
      "chicken-island-tup-sandbar",
      "hong-island-krabi",
      "avoid-crowds-krabi-timing",
      "krabi-tides-guide",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phi-phi-early-bird"],
    image: IMG.railayBeach,
  },
  {
    slug: "ao-nang-without-mass-tourism",
    category: "insider",
    short: { de: "Ao Nang ohne Massen", en: "Ao Nang without crowds" },
    primaryKeyword: "Ao Nang ohne Massentourismus",
    keywords: [
      "Ao Nang ohne Massentourismus",
      "Ao Nang ruhig",
      "Ao Nang Geheimtipps",
      "Ao Nang Tipps abseits der Touristen",
      "Ao Nang Insel ruhig",
      "Ao Nang quiet",
      "Ao Nang away from crowds",
      "Ao Nang off the beaten path",
    ],
    title: {
      de: "Ao Nang ohne Massentourismus: Ruhige Orte & Tipps",
      en: "Ao Nang Without the Crowds: Quiet Spots & Tips",
    },
    metaDescription: {
      de: "Ao Nang ohne Massentourismus erleben: ruhige Uhrzeiten, stille Strände in der Nähe und Inseln, die Sie mit einem privaten Speedboat abseits der Gruppen besuchen.",
      en: "Experience Ao Nang without the crowds: quiet times of day, calm beaches nearby and islands you can visit by private speedboat away from the groups.",
    },
    h1: {
      de: "Ao Nang ohne Massentourismus erleben: so finden Sie die ruhigen Seiten",
      en: "Experience Ao Nang without mass tourism: how to find the quiet side",
    },
    intro: {
      de: "Ao Nang ist der Ausgangspunkt für fast jeden Krabi-Urlaub und entsprechend lebhaft: Promenade, Restaurants, Piers und viele Touren, die zur gleichen Zeit starten. Trotzdem gibt es ruhige Seiten, wenn Sie Uhrzeit, Strand und Ziel bewusst wählen. Dieser Guide zeigt, wann Ao Nang am angenehmsten ist, wohin Sie in der Nähe ausweichen und wie Sie die Inseln besuchen, ohne in einer Gruppe zu stehen. Alle Angaben sind Orientierungswerte.",
      en: "Ao Nang is the starting point for almost every Krabi holiday and is lively accordingly: promenade, restaurants, piers and many tours that leave at the same time. Still, there are quiet sides if you choose time, beach and destination deliberately. This guide shows when Ao Nang is most pleasant, where to go nearby instead and how to visit the islands without standing in a group. All details are rough guides.",
    },
    sections: [
      {
        id: "timing-in-ao-nang",
        h2: { de: "Die richtige Tageszeit in Ao Nang", en: "The right time of day in Ao Nang" },
        body: {
          de: [
            "Am ruhigsten ist Ao Nang früh am Morgen, bevor die Touren ablegen, und am späten Nachmittag, wenn viele Gruppen zurück sind. Mittags füllen sich Strand, Pier und Promenade. Wer die Gegend zu Fuß erkundet, geht morgens an den Strand und verlegt Restaurant und Einkäufe auf die Abendstunden.",
            "Zum Sonnenuntergang kommen viele Besucher an den Strand. Die genaue Sonnenuntergangszeit wechselt über das Jahr, die Übersicht steht im Guide zu den Sonnenuntergangszeiten nach Monat.",
          ],
          en: [
            "Ao Nang is quietest early in the morning, before the tours set off, and in the late afternoon, when many groups are back. At midday beach, pier and promenade fill up. If you explore the area on foot, go to the beach in the morning and keep restaurants and shopping for the evening.",
            "Around sunset many visitors come to the beach. The exact sunset time changes through the year; the overview is in the guide to sunset times by month.",
          ],
        },
      },
      {
        id: "quiet-beaches-nearby",
        h2: { de: "Ruhige Strände in der Nähe", en: "Quiet beaches nearby" },
        body: {
          de: [
            "Nördlich von Ao Nang liegt Noppharat Thara, ein langer Küstenstrand, der meist ruhiger ist. Noch weiter nördlich folgen Klong Muang und Tubkaek mit Resorts und weniger Betrieb. Alle erreichen Sie mit dem Taxi, die Fahrt ist in Krabi günstig.",
            "Wer die ruhigsten Strände sucht, findet sie meist nicht an der Küste, sondern auf den Inseln. Welche das sind, steht im Guide zu den besten Stränden in Krabi und zu versteckten Lagunen.",
          ],
          en: [
            "North of Ao Nang lies Noppharat Thara, a long coastal beach that is usually quieter. Further north follow Klong Muang and Tubkaek with resorts and less going on. You reach all of them by taxi, and the ride is cheap in Krabi.",
            "The quietest beaches are usually found not on the coast but on the islands. Which ones is covered in the guide to the best beaches in Krabi and to hidden lagoons.",
          ],
        },
      },
      {
        id: "islands-without-groups",
        h2: { de: "Inseln ohne Gruppen: das private Speedboat", en: "Islands without groups: the private speedboat" },
        body: {
          de: [
            "Viele Touren legen zur gleichen Zeit ab und erreichen dieselben Buchten, deshalb sind Poda, Chicken Island und Hong mittags oft voll. Mit einem privaten Speedboat bestimmen Sie den Zeitpunkt. Sie fahren früh, wenn die Buchten noch leer sind, oder am Nachmittag, wenn die Gruppen schon zurück sind.",
            "Das Boot gehört für den Tag Ihnen und bis zu 4 weiteren Gästen, die Route richtet sich nach Wetter, Wellengang und Wasserstand. Bei uns startet es in Ao Nang oder Krabi Town. Der Preis gilt pro Boot, nicht pro Person.",
          ],
          en: [
            "Many tours set off at the same time and reach the same bays, so Poda, Chicken Island and Hong are often full at midday. With a private speedboat you choose the time. You go early when the bays are still empty, or in the afternoon when the groups are already back.",
            "The boat is yours for the day together with up to 4 other guests, and the route follows weather, swell and water level. With us it starts in Ao Nang or Krabi Town. The price is per boat, not per person.",
          ],
        },
        tip: {
          de: "Wer wirklich Ruhe sucht, wählt eine Insel abseits der Standardroute. Beispiele sind Koh Roi und Koh Kudu im Guide zu den versteckten Lagunen.",
          en: "If you really want peace, choose an island off the standard route. Examples are Koh Roi and Koh Kudu in the guide to hidden lagoons.",
        },
        figure: {
          src: "/images/krabi-boat-tour-tuerkise-bucht-luftaufnahme-kalksteinfelsen-krabi.webp",
          width: 1672,
          height: 941,
          alt: {
            de: "Luftaufnahme einer türkisen Bucht mit weißem Strand zwischen Kalksteinfelsen bei Krabi",
            en: "Aerial view of a turquoise bay with a white beach between limestone cliffs near Krabi",
          },
        },
      },
      {
        id: "season-and-weather",
        h2: { de: "Jahreszeit und Wetter", en: "Season and weather" },
        body: {
          de: [
            "In der Trockenzeit von etwa November bis April ist am meisten los, die See ist dann ruhiger. Von Mai bis Oktober ist Monsun: wechselhafter, aber oft leerer. Bootstouren sind dann möglich, hängen aber stärker von Wind und Wellen ab. Mehr dazu im Guide zu Bootstouren in der Regenzeit.",
          ],
          en: [
            "The dry season from about November to April is the busiest, and the sea is calmer then. May to October is monsoon: more changeable but often emptier. Boat tours are possible then but depend more on wind and waves. More in the guide to boat tours in the rainy season.",
          ],
        },
      },
    ],
    faq: [
      {
        q: { de: "Wann ist Ao Nang am ruhigsten?", en: "When is Ao Nang quietest?" },
        a: {
          de: "Früh am Morgen und am späten Nachmittag. Mittags sind Strand, Pier und Promenade am vollsten.",
          en: "Early in the morning and in the late afternoon. At midday beach, pier and promenade are fullest.",
        },
      },
      {
        q: { de: "Gibt es ruhige Strände in der Nähe von Ao Nang?", en: "Are there quiet beaches near Ao Nang?" },
        a: {
          de: "Ja, zum Beispiel Noppharat Thara, Klong Muang und Tubkaek nördlich von Ao Nang. Sie erreichen sie mit dem Taxi. Die ruhigsten Strände liegen meist auf den Inseln.",
          en: "Yes, for example Noppharat Thara, Klong Muang and Tubkaek north of Ao Nang. You reach them by taxi. The quietest beaches are usually on the islands.",
        },
      },
      {
        q: { de: "Wie besuche ich die Inseln ohne Gruppe?", en: "How do I visit the islands without a group?" },
        a: {
          de: "Mit einem privaten Speedboat. Sie legen früh oder am späten Nachmittag ab und bestimmen Route und Tempo. Das Boot fasst bis zu 5 Gäste, der Preis gilt pro Boot.",
          en: "With a private speedboat. You set off early or in the late afternoon and decide route and pace. The boat takes up to 5 guests, and the price is per boat.",
        },
      },
      {
        q: { de: "Wo startet die Tour?", en: "Where does the tour start?" },
        a: {
          de: "In Ao Nang oder Krabi Town, je nach Wunsch. Taxis dorthin sind günstig.",
          en: "In Ao Nang or Krabi Town, as you prefer. Taxis there are cheap.",
        },
      },
      {
        q: { de: "In welcher Jahreszeit ist Ao Nang weniger voll?", en: "In which season is Ao Nang less busy?" },
        a: {
          de: "In der Regenzeit von etwa Mai bis Oktober ist es oft leerer. Dafür ist das Wetter wechselhafter und Bootstouren hängen stärker von Wind und Wellen ab.",
          en: "In the rainy season from about May to October it is often emptier. In return the weather is more changeable and boat tours depend more on wind and waves.",
        },
      },
    ],
    related: [
      "avoid-crowds-krabi-timing",
      "best-beaches-krabi-ao-nang-railay-islands",
      "secret-beaches-lagoons-krabi",
      "koh-roi-hidden-lagoon",
      "krabi-sunset-time-by-month",
      "krabi-boat-tours-rainy-season",
      "ao-nang-vs-railay-where-to-stay",
      "private-boat-charter-krabi-cost",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phi-phi-early-bird"],
    image: IMG.turquoiseBay,
  },
];
