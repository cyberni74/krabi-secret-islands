import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch I: one-day island hopping for solo travellers / small parties, with how-to steps.
 * Fact policy as in batch H: own prices only "ab" per boat for up to 5 guests, travel times only from existing site content,
 * park fee = general sentence only (no amounts, not included), no longtail/hotel-transfer offers, no tide tables.
 */
export const NEW_ARTICLES_I: GuideArticleInput[] = [
  {
    slug: "krabi-island-hopping-tour-solo-ein-tag",
    category: "insider",
    short: { de: "Island Hopping an einem Tag", en: "Island hopping in one day" },
    primaryKeyword: "Krabi Island Hopping Tour",
    keywords: [
      "Krabi Island Hopping Tour",
      "Krabi Inselhopping",
      "Krabi 4 Islands Tour",
      "Krabi allein reisen",
      "Krabi Island Hopping allein",
      "Krabi island hopping tour one day",
      "Krabi 4 Islands tour solo traveller",
      "Krabi island hopping alone",
    ],
    title: {
      de: "Krabi Island Hopping Tour an einem Tag: Allein & zu zweit",
      en: "Krabi Island Hopping Tour in One Day: Solo & Couples",
    },
    metaDescription: {
      de: "Krabi Island Hopping Tour an einem Tag: Ablauf der 4 Islands ab Ao Nang, Tipps für Alleinreisende, Packliste, Wetter und Schritt-für-Schritt-Anleitung.",
      en: "Krabi island hopping tour in one day: how the 4 Islands trip from Ao Nang works, tips for solo travellers, packing list, weather and a step-by-step how-to.",
    },
    h1: {
      de: "Krabi Island Hopping Tour an einem Tag: So klappt es auch allein",
      en: "Krabi island hopping tour in one day: how it works even if you travel alone",
    },
    intro: {
      de: "Klares Wasser, heller Sand und senkrechte Kalksteinfelsen: Eine Krabi Island Hopping Tour ist die einfachste Art, die Küste Südthailands in einem Tag kennenzulernen. Auch allein oder zu zweit müssen Sie nichts selbst organisieren. Die 4 Islands ab Ao Nang sind dafür der Klassiker: Poda Island, Chicken Island, die Tup-Sandbank und Phra Nang Cave Beach. Dieser Guide zeigt, wie der Tag abläuft, worauf Alleinreisende achten sollten, was in die Tasche gehört und wie Sie die Tour in sechs Schritten planen. Die genaue Route hängt von Wetter und Gezeiten ab.",
      en: "Clear water, pale sand and sheer limestone cliffs: a Krabi island hopping tour is the easiest way to get to know the coast of southern Thailand in a single day. Even if you travel alone or as a couple you do not have to organise anything yourself. The 4 Islands from Ao Nang are the classic: Poda Island, Chicken Island, the Tup sandbar and Phra Nang Cave Beach. This guide shows how the day runs, what solo travellers should consider, what goes in your bag and how to plan the tour in six steps. The exact route depends on weather and tides.",
    },
    sections: [
      {
        id: "island-hopping-one-day",
        h2: { de: "Krabi Island Hopping an einem Tag", en: "Krabi island hopping in one day" },
        body: {
          de: [
            "Ein Tag reicht, um die Höhepunkte der Küste vor Ao Nang zu sehen. Die beliebteste Strecke sind die 4 Islands: Poda Island mit dem markanten Felsen, Chicken Island, die Tup-Sandbank und Phra Nang Cave Beach. Nach unseren Tourdaten liegen diese Ziele nur etwa 10 bis 15 Minuten per Speedboot von Ao Nang entfernt, sodass mehr Zeit zum Baden und Schnorcheln bleibt als auf der Fahrt.",
            "Die genaue Reihenfolge der Stopps kann variieren. Wind, Wellengang und Wasserstand entscheiden, welche Bucht zuerst sinnvoll ist. Wer lieber Lagunen sehen möchte, wählt stattdessen die Hong-Inseln; die Unterschiede erklärt der Vergleich von Hong, 4 Islands und Phi Phi.",
          ],
          en: [
            "One day is enough to see the highlights of the coast off Ao Nang. The most popular route is the 4 Islands: Poda Island with its striking rock, Chicken Island, the Tup sandbar and Phra Nang Cave Beach. According to our tour data these places are only about 10 to 15 minutes by speedboat from Ao Nang, so there is more time for swimming and snorkelling than for travelling.",
            "The exact order of the stops can vary. Wind, swell and water level decide which bay makes sense first. If you prefer lagoons, choose the Hong Islands instead; the comparison of Hong, 4 Islands and Phi Phi explains the differences.",
          ],
        },
        figure: {
          src: "/images/krabi-boat-tour-tup-sandbank-chicken-island-krabi-luftblick.webp",
          width: 1672,
          height: 941,
          alt: {
            de: "Tup-Sandbank mit Chicken Island im Hintergrund: weißer Sandstreifen durch türkises Wasser bei Krabi",
            en: "Tup sandbar with Chicken Island in the background: white sand strip through turquoise water near Krabi",
          },
        },
      },
      {
        id: "day-schedule",
        h2: { de: "So könnte Ihr Island-Hopping-Tag aussehen", en: "What your island hopping day could look like" },
        body: {
          de: [
            "Sie starten in Ao Nang oder Krabi Town, je nach Wunsch. Taxis dorthin sind in Krabi günstig. Vom Pier aus geht es mit dem privaten Speedboat hinaus, ohne Wartezeit auf eine Gruppe.",
            "Auf den Inseln bleibt Zeit zum Schwimmen, Schnorcheln und Entspannen am Strand. Bei Ebbe kann sich zwischen Tup Island und Chicken Island eine Sandbank zeigen, die beide Inseln zu verbinden scheint. An Phra Nang Beach sorgen Höhle und steile Felsen für eine besonders eindrucksvolle Kulisse.",
            "Am späten Nachmittag sind Sie zurück. Planen Sie den Abend entspannt und vermeiden Sie eine knappe Anschlussverbindung, denn Routen und Zeiten können sich wetterbedingt ändern.",
          ],
          en: [
            "You start in Ao Nang or Krabi Town, as you prefer. Taxis there are cheap in Krabi. From the pier you head out on the private speedboat, with no waiting for a group.",
            "On the islands there is time for swimming, snorkelling and relaxing on the beach. At low tide a sandbar can appear between Tup Island and Chicken Island that seems to join the two islands. At Phra Nang Beach the cave and the steep cliffs make an especially impressive backdrop.",
            "You are back in the late afternoon. Plan the evening relaxed and avoid a tight onward connection, because routes and times can change with the weather.",
          ],
        },
        tip: {
          de: "Wer das Licht für Fotos nutzen möchte, wählt die Sunset-Variante. Die Details stehen im Guide zur Tup-Sandbank und zu Chicken Island.",
          en: "If you want the light for photos, choose the sunset variant. Details are in the guide to the Tup sandbar and Chicken Island.",
        },
      },
      {
        id: "travelling-alone",
        h2: { de: "Allein unterwegs: Was Sie wissen sollten", en: "Travelling alone: what to know" },
        body: {
          de: [
            "Für Alleinreisende ist ein privates Boot bequem: Route, Tempo und Stopps richten sich nach Ihnen. Der Preis gilt pro Boot für bis zu 5 Gäste, nicht pro Person. Allein zahlen Sie damit mehr pro Kopf als zu mehreren. Rechnen Sie Ihre Reisegruppe deshalb vorher durch: Bei uns beginnt die 4 Islands Tour ab 18.500 THB pro Boot.",
            "Wer sich das Boot teilen möchte, kann die Plätze mit Mitreisenden füllen, zum Beispiel aus dem Hotel oder einem Hostel. Fragen Sie vor der Buchung, was enthalten ist, etwa Mittagessen, Getränke und Schnorchelausrüstung. Einige Inseln und Nationalparks verlangen eine Eintrittsgebühr, die nicht im Tourpreis enthalten ist und vor Ort direkt an den Rangern bezahlt wird.",
          ],
          en: [
            "A private boat is comfortable for solo travellers: route, pace and stops follow you. The price is per boat for up to 5 guests, not per person. Travelling alone, you therefore pay more per head than in a group. Work it out for your party beforehand: with us the 4 Islands tour starts from 18,500 THB per boat.",
            "If you want to share the boat you can fill the seats with other travellers, for example from your hotel or hostel. Ask before booking what is included, such as lunch, drinks and snorkel gear. Some islands and national parks charge an entrance fee that is not included in the tour price and is paid on site directly to the rangers.",
          ],
        },
      },
      {
        id: "what-to-bring",
        h2: { de: "Was Sie mitnehmen sollten", en: "What to bring" },
        body: {
          de: ["Eine kleine, wasserfeste Tasche reicht. Packen Sie möglichst wenig ein und bewahren Sie Wertsachen sicher auf. Folgen Sie den Anweisungen der Crew, besonders beim Ein- und Aussteigen."],
          en: ["A small waterproof bag is enough. Pack as little as possible and keep valuables safe. Follow the crew's instructions, especially when getting on and off the boat."],
        },
        list: {
          de: [
            "Sonnencreme und Sonnenhut",
            "Badebekleidung und Handtuch",
            "Trinkwasser",
            "wasserdichte Hülle für Handy und Wertsachen",
            "etwas Bargeld für mögliche Extras und die Eintrittsgebühr vor Ort",
            "leichte Kleidung zum Überziehen",
          ],
          en: [
            "Sunscreen and a sun hat",
            "Swimwear and a towel",
            "Drinking water",
            "Waterproof pouch for phone and valuables",
            "Some cash for possible extras and the entrance fee on site",
            "Light clothing to pull on",
          ],
        },
      },
      {
        id: "weather-season",
        h2: { de: "Beste Reisezeit und Wetter", en: "Best time to go and weather" },
        body: {
          de: [
            "In der Regel ist die Trockenzeit von etwa November bis April am angenehmsten: ruhigere See und stabileres Wetter. Von Mai bis Oktober ist Monsun, es ist wechselhafter, oft aber leerer. Prüfen Sie vor der Buchung die Vorhersage. Bei starkem Wind oder hohem Wellengang können Routen geändert oder Touren abgesagt werden, planen Sie deshalb flexibel.",
            "Koh Rok und Koh Haa sind vom 16. Mai bis 15. November gesperrt. Die 4 Islands sind davon nicht betroffen.",
          ],
          en: [
            "As a rule the dry season from about November to April is the most pleasant: calmer sea and more stable weather. May to October is monsoon, more changeable but often emptier. Check the forecast before booking. In strong wind or high swell routes can be changed or tours cancelled, so plan flexibly.",
            "Koh Rok and Koh Haa are closed from 16 May to 15 November. The 4 Islands are not affected.",
          ],
        },
      },
      {
        id: "how-to-plan-island-hopping",
        h2: { de: "Anleitung: Island Hopping in Krabi in 6 Schritten", en: "How to: Krabi island hopping in 6 steps" },
        body: {
          de: ["So gehen Sie vor, wenn Sie Ihre Krabi Island Hopping Tour planen."],
          en: ["This is how to go about planning your Krabi island hopping tour."],
        },
        steps: [
          {
            name: { de: "Tour wählen.", en: "Choose a tour." },
            text: {
              de: "4 Islands für Strand und Sandbank, Sunset für das Abendlicht, Hong für Lagunen.",
              en: "4 Islands for beach and sandbar, Sunset for the evening light, Hong for lagoons.",
            },
          },
          {
            name: { de: "Startort und Datum festlegen.", en: "Set start point and date." },
            text: {
              de: "Ao Nang oder Krabi Town. Prüfen Sie Wetter und Gezeiten für den Tag.",
              en: "Ao Nang or Krabi Town. Check weather and tides for the day.",
            },
          },
          {
            name: { de: "Leistungen klären.", en: "Clarify what is included." },
            text: {
              de: "Mittagessen, Getränke und Schnorchelausrüstung abstimmen. Die Eintrittsgebühr einiger Inseln zahlen Sie vor Ort bei den Rangern.",
              en: "Agree lunch, drinks and snorkel gear. The entrance fee of some islands is paid on site to the rangers.",
            },
          },
          {
            name: { de: "Packen.", en: "Pack." },
            text: {
              de: "Sonnencreme, Hut, Badekleidung, Handtuch, Wasser, wasserdichte Hülle, Bargeld, leichte Kleidung.",
              en: "Sunscreen, hat, swimwear, towel, water, waterproof pouch, cash, light clothing.",
            },
          },
          {
            name: { de: "Am Tourtag.", en: "On the day." },
            text: {
              de: "Pünktlich am Pier sein, den Anweisungen der Crew folgen und Wertsachen sicher verstauen.",
              en: "Be at the pier on time, follow the crew's instructions and stow valuables safely.",
            },
          },
          {
            name: { de: "Abend planen.", en: "Plan the evening." },
            text: {
              de: "Sie sind am späten Nachmittag zurück. Planen Sie keine knappe Anschlussverbindung.",
              en: "You are back in the late afternoon. Do not plan a tight onward connection.",
            },
          },
        ],
      },
    ],
    faq: [
      {
        q: { de: "Wie lange dauert eine Krabi Island Hopping Tour?", en: "How long does a Krabi island hopping tour take?" },
        a: {
          de: "Einen Tag. Die Tour startet am Morgen und endet am späten Nachmittag. Es gibt auch eine Sunset-Variante, die ab dem frühen Nachmittag startet.",
          en: "One day. The tour starts in the morning and ends in the late afternoon. There is also a sunset variant that starts in the early afternoon.",
        },
      },
      {
        q: { de: "Welche Inseln gehören zur 4 Islands Tour?", en: "Which islands are part of the 4 Islands tour?" },
        a: {
          de: "Meist Poda Island, Chicken Island, Tup Island und Phra Nang Cave Beach. Die Route hängt von Wetter, Gezeiten und Anbieter ab.",
          en: "Usually Poda Island, Chicken Island, Tup Island and Phra Nang Cave Beach. The route depends on weather, tides and operator.",
        },
      },
      {
        q: { de: "Ist die Tour auch allein sinnvoll?", en: "Does the tour make sense if I travel alone?" },
        a: {
          de: "Ja. Bei einem privaten Boot müssen Sie Route und Transport nicht selbst organisieren. Der Preis gilt pro Boot für bis zu 5 Gäste, allein zahlen Sie also mehr pro Person als zu mehreren.",
          en: "Yes. With a private boat you do not have to organise route and transport yourself. The price is per boat for up to 5 guests, so alone you pay more per person than in a group.",
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
        q: { de: "Was ist im Preis enthalten und was kostet extra?", en: "What is included and what costs extra?" },
        a: {
          de: "Das hängt vom Anbieter ab. Klären Sie vor der Buchung Mittagessen, Getränke und Schnorchelausrüstung. Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr. Diese ist nicht im Tourpreis enthalten und wird vor Ort direkt bei den Rangern bezahlt.",
          en: "That depends on the operator. Clarify lunch, drinks and snorkel gear before booking. Some islands and national parks charge an entrance fee. It is not included in the tour price and is paid on site directly to the rangers.",
        },
      },
      {
        q: { de: "Wann zeigt sich die Sandbank zwischen Tup und Chicken Island?", en: "When does the sandbar between Tup and Chicken Island appear?" },
        a: {
          de: "Bei Ebbe. Die Zeiten ändern sich täglich. Fragen Sie vor der Tour nach dem Gezeitenverlauf für Ihren Tag.",
          en: "At low tide. The times change daily. Ask about the tide pattern for your day before the tour.",
        },
      },
      {
        q: { de: "Was soll ich zur Bootstour mitnehmen?", en: "What should I bring on the boat tour?" },
        a: {
          de: "Sonnencreme, Hut, Badekleidung, Handtuch, Trinkwasser, eine wasserdichte Hülle fürs Handy und etwas Bargeld.",
          en: "Sunscreen, hat, swimwear, towel, drinking water, a waterproof pouch for your phone and some cash.",
        },
      },
      {
        q: { de: "Fällt die Tour bei schlechtem Wetter aus?", en: "Is the tour cancelled in bad weather?" },
        a: {
          de: "Bei starkem Wind oder hohem Wellengang kann die Route geändert oder die Tour abgesagt werden. Planen Sie flexibel und prüfen Sie vorher die Vorhersage.",
          en: "In strong wind or high swell the route can be changed or the tour cancelled. Plan flexibly and check the forecast beforehand.",
        },
      },
    ],
    related: [
      "4-islands-krabi-names-map-sandbar-timing",
      "chicken-island-tup-sandbar",
      "inselhopping-krabi-guide-andamanensee",
      "krabi-island-hopping-planner",
      "hong-island-vs-4-islands-vs-phi-phi",
      "boat-day-packing-list-etiquette",
      "krabi-boat-tours-rainy-season",
      "best-time-to-visit-krabi",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phi-phi-early-bird"],
    image: IMG.tupChicken,
  },
];
