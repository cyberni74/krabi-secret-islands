import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch G: the "9 Islands" combination (Hong group + 4 Islands in one private day) and
 * Bamboo Island as part of the Phi Phi Early Bird tour.
 * Fact policy:
 *  - Prices only from TOURS (content.ts) and DURATIONS / ZONE_SURCHARGE (booking-data.ts), always "ab" / per boat for up to 5 guests.
 *  - Travel minutes only from ISLANDS (booking-data.ts) and the tour pages (tour-pages-a.ts).
 *  - National park: only the general sentence that an entrance fee is paid on site to the rangers and is not included. No amounts.
 *  - Lunch only as a bookable extra (Thai lunch box / catering package), because phi-phi-early-bird does not list a meal.
 *  - Inclusions of a custom (tour builder) tour are not listed in the data, so the copy says we confirm them with the quote.
 *  - No tide tables, no clock times beyond the published departures, no ratings or review claims, no third-party prices.
 */
export const NEW_ARTICLES_G: GuideArticleInput[] = [
  /* ───────────── 1. 9 Islands: Hong + 4 Islands in one day ───────────── */
  {
    slug: "krabi-9-islands-hong-and-4-islands-one-day",
    category: "insider",
    short: { de: "9 Islands: Hong + 4 Islands", en: "9 Islands: Hong + 4 Islands" },
    primaryKeyword: "krabi 9 islands tour",
    keywords: [
      "9 Inseln Tour Krabi",
      "Hong Island und 4 Islands an einem Tag",
      "9 Islands Tour Krabi privat",
      "Hong Island 4 Islands Kombination",
      "Krabi Inselhopping Ganztag",
      "krabi 9 islands tour",
      "Krabi 9 Islands tour Hong and 4 Islands",
      "Hong Island and 4 Islands in one day",
      "private 9 islands tour krabi",
      "krabi full day island hopping speedboat",
    ],
    title: {
      de: "9 Inseln Tour Krabi: Hong Island & 4 Islands an einem Tag",
      en: "Krabi 9 Islands Tour: Hong and 4 Islands in One Day",
    },
    metaDescription: {
      de: "9 Inseln Tour Krabi privat: Hong Island und 4 Islands an einem Tag kombinieren, welche Stopps passen, warum die Gezeiten zählen und was es pro Boot kostet.",
      en: "Krabi 9 Islands tour done privately: combine Hong Island and the 4 Islands in one day, which stops fit, why tides matter and what it costs per boat.",
    },
    h1: {
      de: "9 Inseln Tour Krabi: Hong Island und 4 Islands an einem Tag – privat geplant",
      en: "Krabi 9 Islands tour: Hong Island and the 4 Islands in one day – planned privately",
    },
    intro: {
      de: "Wer in Ao Nang nach einer 9 Inseln Tour Krabi sucht, meint fast immer dasselbe: Hong Island und die 4 Islands an einem Tag. Unter Namen wie „9 Islands“ oder „Hong + 4 Islands“ verbinden viele Anbieter die Hong-Gruppe mit der Poda-Gruppe vor Ao Nang. Bei uns gibt es dafür keine feste Gruppentour, sondern eine private Wunschtour, die Sie im Tourkonfigurator zusammenstellen: Ganztags mit bis zu 5 Stopps oder als Expedition mit bis zu 7 Stopps, auf Ihrem eigenen Speedboat für höchstens 5 Gäste. Dieser Guide erklärt ehrlich, was an einem Tag realistisch ist, welche Inseln dazugehören, warum Tup-Sandbank und Hong-Lagune unterschiedliche Wasserstände mögen und was die Kombination pro Boot kostet. Zum Vergleich stehen die beiden festen Alternativen daneben: die Hong-Island-Tour und die 4-Islands-Sunset-Tour.",
      en: "If you search for a Krabi 9 Islands tour in Ao Nang, you almost always mean the same thing: Hong Island and the 4 Islands in one day. Under names such as “9 Islands” or “Hong + 4 Islands”, many operators combine the Hong group with the Poda group off Ao Nang. With us there is no fixed group tour for this, but a private custom tour that you put together in the tour builder: a full day with up to 5 stops or an expedition with up to 7 stops, on your own speedboat for a maximum of 5 guests. This guide explains honestly what is realistic in one day, which islands belong to it, why the Tup sandbar and the Hong lagoon like different water levels and what the combination costs per boat. For comparison, the two fixed alternatives sit alongside: the Hong Island tour and the 4 Islands sunset tour.",
    },
    sections: [
      {
        id: "what-is-a-9-islands-tour",
        h2: {
          de: "Was ist eine 9 Islands Tour in Krabi?",
          en: "What is a Krabi 9 Islands tour?",
        },
        body: {
          de: [
            "„9 Islands“ ist ein Tourname, keine amtliche Bezeichnung. Gezählt werden meist alle Inseln, Felsen und Strände, an denen das Boot hält oder vorbeifährt, und zwar aus zwei Gruppen: der Hong-Gruppe nordwestlich von Ao Nang und den 4 Islands im Süden Richtung Railay. Welche neun es genau sind, unterscheidet sich von Anbieter zu Anbieter. Manche zählen Chicken Island und Tup getrennt, andere nehmen einen Felsen am Wegrand mit dazu.",
            "Für Ihren Tag ist die Zahl deshalb wenig aussagekräftig. Wichtiger ist die Frage, an wie vielen Orten Sie wirklich aussteigen, schwimmen oder schnorcheln und wie viel Zeit Sie dort haben. Bei einer Gruppentour mit vielen Stopps bleibt pro Insel oft wenig Zeit, weil der Zeitplan für alle gleich ist.",
            "Bei uns zählen wir deshalb Stopps statt Inseln. Im Tourkonfigurator wählen Sie, welche Inseln angefahren werden, und die Dauer bestimmt, wie viele Stopps möglich sind. Aus der Hong-Gruppe und der Poda-Gruppe stehen insgesamt sieben Ziele zur Auswahl, die wir im nächsten Abschnitt vorstellen.",
          ],
          en: [
            "“9 Islands” is a tour name, not an official designation. Usually every island, rock and beach the boat stops at or passes is counted, from two groups: the Hong group northwest of Ao Nang and the 4 Islands to the south towards Railay. Exactly which nine they are differs from operator to operator. Some count Chicken Island and Tup separately, others add a rock along the way.",
            "For your day the number therefore says little. The more important question is at how many places you actually get off, swim or snorkel, and how much time you have there. On a group tour with many stops there is often little time per island, because the schedule is the same for everyone.",
            "That is why we count stops instead of islands. In the tour builder you choose which islands to visit, and the duration determines how many stops are possible. From the Hong group and the Poda group there are seven destinations in total to choose from, which we introduce in the next section.",
          ],
        },
      },
      {
        id: "islands-hong-group-and-4-islands",
        h2: {
          de: "Die Inseln: Hong-Gruppe und 4 Islands im Überblick",
          en: "The islands: Hong group and 4 Islands at a glance",
        },
        body: {
          de: [
            "Die beiden Gruppen liegen in unterschiedlichen Richtungen von Ao Nang. Die 4 Islands gehören in unserem Tourkonfigurator zur nahen Zone (bis etwa 20 Minuten Fahrt), die Hong-Gruppe zur mittleren Zone (etwa 30 bis 45 Minuten). Die Minutenangaben unten sind die Richtwerte aus dem Konfigurator für die einfache Strecke ab Ao Nang mit dem Speedboat; Seegang und Route können sie verändern.",
            "Hinweis zum Namen: Es gibt zwei Inseln namens Koh Hong. Gemeint ist hier die Insel im Than Bok Khorani Nationalpark vor Krabi, nicht die in der Phang Nga Bucht.",
          ],
          en: [
            "The two groups lie in different directions from Ao Nang. In our tour builder the 4 Islands belong to the near zone (up to about 20 minutes’ ride), the Hong group to the mid zone (about 30 to 45 minutes). The minutes below are the guide values from the builder for one way from Ao Nang by speedboat; sea state and route can change them.",
            "A note on the name: there are two islands called Koh Hong. This is the island in Than Bok Khorani National Park off Krabi, not the one in Phang Nga Bay.",
          ],
        },
        list: {
          de: [
            "Phra Nang & Railay (ca. 10 Min.): Höhle, Kletterfelsen, Strand vor Kalksteinwänden",
            "Koh Poda (ca. 15 Min.): weißer Sand, Kalksteinturm, gutes Badewasser",
            "Chicken Island (ca. 15 Min.): Riffe am markanten Hühnerkopf-Felsen, zum Schnorcheln",
            "Tup-Sandbank (ca. 15 Min.): zu Fuß zwischen zwei Inseln, nur bei Ebbe",
            "Koh Hong (ca. 35 Min.): smaragdgrüne Lagune, umringt von Felswänden",
            "Koh Lao Lading (ca. 35 Min.): winzige Bucht mit Schatten unter Klippen",
            "Koh Pakbia (ca. 35 Min.): zwei Strände, verbunden durch eine Sandzunge",
          ],
          en: [
            "Phra Nang & Railay (approx. 10 min): cave, climbing cliffs, a beach in front of limestone walls",
            "Koh Poda (approx. 15 min): white sand, limestone tower, good swimming",
            "Chicken Island (approx. 15 min): reefs by the striking chicken-head rock, for snorkelling",
            "Tup sandbar (approx. 15 min): walk between two islands, low tide only",
            "Koh Hong (approx. 35 min): emerald lagoon ringed by rock walls",
            "Koh Lao Lading (approx. 35 min): tiny cove with shade under the cliffs",
            "Koh Pakbia (approx. 35 min): two beaches joined by a sand spit",
          ],
        },
        tip: {
          de: "Mehr zu den einzelnen Zielen finden Sie in unseren Insel-Guides zu Hong Island und zu den 4 Islands mit Namen, Karte in Worten und Sandbank-Timing.",
          en: "You will find more on each destination in our island guides to Hong Island and to the 4 Islands, with names, a map in words and sandbar timing.",
        },
      },
      {
        id: "hong-and-4-islands-one-day-private",
        h2: {
          de: "Hong Island und 4 Islands an einem Tag: so geht es privat",
          en: "Hong Island and the 4 Islands in one day: how it works privately",
        },
        body: {
          de: [
            "Die Kombination stellen Sie im Tourkonfigurator beim Buchen zusammen. Für einen Tag mit beiden Inselgruppen kommen zwei Dauern infrage, beide mit Start am Morgen:",
            "Ganztags (8 Stunden, bis zu 5 Stopps): Sie wählen fünf der sieben Ziele. Ein typisches Beispiel wäre Koh Hong und Koh Pakbia aus der Hong-Gruppe, dazu Koh Poda, die Tup-Sandbank und Phra Nang. Chicken Island sehen Sie auf dem Weg zur Sandbank ohnehin aus nächster Nähe. Der Richtpreis liegt bei 19.000 THB pro Boot plus 1.500 THB Zuschlag für die mittlere Zone, also ab 20.500 THB pro Boot für bis zu 5 Gäste.",
            "Expedition (10 Stunden, bis zu 7 Stopps): Hier passen rechnerisch alle sieben Ziele beider Gruppen in den Tag. Der Richtpreis liegt bei 24.000 THB pro Boot plus 1.500 THB Zuschlag für die mittlere Zone, also ab 25.500 THB pro Boot. Ehrlich gesagt: Sieben Stopps an einem Tag bedeuten kürzere Aufenthalte. Viele Gäste nehmen lieber sechs Ziele und dafür mehr Zeit an der Lagune oder auf der Sandbank. Die Entscheidung liegt bei Ihnen.",
            "Der Preis gilt pro Boot, nicht pro Person. Zu zweit teilen Sie ihn durch zwei, zu fünft durch fünf. Extras wie Verpflegung oder das Drohnen-Paket kommen gegebenenfalls dazu, Schnorchel-Ausrüstung ist kostenlos und wird bei der Buchung angekreuzt. Welche weiteren Leistungen in Ihrer Wunschtour enthalten sind, bestätigen wir Ihnen mit dem Angebot. Das endgültige Angebot erhalten Sie individuell, die Anfrage ist unverbindlich.",
          ],
          en: [
            "You put the combination together in the tour builder when booking. For a day with both island groups, two durations are possible, both with a morning start:",
            "Full day (8 hours, up to 5 stops): you choose five of the seven destinations. A typical example would be Koh Hong and Koh Pakbia from the Hong group, plus Koh Poda, the Tup sandbar and Phra Nang. You see Chicken Island up close on the way to the sandbar anyway. The guide price is 19,000 THB per boat plus a 1,500 THB mid-zone surcharge, so from 20,500 THB per boat for up to 5 guests.",
            "Expedition (10 hours, up to 7 stops): here all seven destinations of both groups fit into the day on paper. The guide price is 24,000 THB per boat plus the 1,500 THB mid-zone surcharge, so from 25,500 THB per boat. To be honest: seven stops in one day mean shorter stays. Many guests prefer six destinations and more time at the lagoon or on the sandbar instead. The choice is yours.",
            "The price is per boat, not per person. For two you split it by two, for five by five. Extras such as food or the drone package are added if you choose them; snorkel gear is free and is ticked when booking. We confirm which further services are included in your custom tour with the quote. You receive the final quote individually, and the enquiry is non-binding.",
          ],
        },
        table: {
          caption: {
            de: "4 Islands, Hong Island oder beides: die Optionen im Vergleich (Preise pro Boot, bis 5 Gäste)",
            en: "4 Islands, Hong Island or both: the options compared (prices per boat, up to 5 guests)",
          },
          head: [
            { de: "Option", en: "Option" },
            { de: "Dauer & Start", en: "Duration & start" },
            { de: "Stopps", en: "Stops" },
            { de: "Preisbasis", en: "Price basis" },
            { de: "Gut für", en: "Good for" },
          ],
          rows: [
            [
              { de: "4-Islands VIP & Sunset Special (feste Tour)", en: "4-Islands VIP & Sunset Special (fixed tour)" },
              { de: "6 Std., ab 13:00", en: "6 hrs, from 1 pm" },
              { de: "Koh Poda, Chicken Island, Tup-Sandbank, Phra Nang Cave", en: "Koh Poda, Chicken Island, Tup sandbar, Phra Nang Cave" },
              { de: "ab 18.500 THB, inkl. Sunset-Prosecco", en: "from 18,500 THB, incl. sunset prosecco" },
              { de: "Sandbank, Schnorcheln und Sonnenuntergang ohne Mittagsandrang", en: "Sandbar, snorkelling and sunset without the midday rush" },
            ],
            [
              { de: "Hong Island Secret Lagoons & Hidden Bays (feste Tour)", en: "Hong Island Secret Lagoons & Hidden Bays (fixed tour)" },
              { de: "7 Std., ab 08:00", en: "7 hrs, from 8 am" },
              { de: "Koh Hong, Koh Lao Lading, Koh Pakbia", en: "Koh Hong, Koh Lao Lading, Koh Pakbia" },
              { de: "ab 21.500 THB", en: "from 21,500 THB" },
              { de: "Lagune früh am Morgen, viel Zeit zum Schwimmen und Schnorcheln", en: "The lagoon early in the morning, lots of time to swim and snorkel" },
            ],
            [
              { de: "Wunschtour Ganztags „Hong + 4 Islands“", en: "Custom full day “Hong + 4 Islands”" },
              { de: "8 Std., Start am Morgen", en: "8 hrs, morning start" },
              { de: "bis zu 5 Stopps aus beiden Gruppen", en: "up to 5 stops from both groups" },
              { de: "ab 20.500 THB (19.000 THB + 1.500 THB Zuschlag mittlere Zone)", en: "from 20,500 THB (19,000 THB + 1,500 THB mid-zone surcharge)" },
              { de: "Die Highlights beider Gruppen an einem Tag", en: "The highlights of both groups in one day" },
            ],
            [
              { de: "Wunschtour Expedition „Hong + 4 Islands“", en: "Custom expedition “Hong + 4 Islands”" },
              { de: "10 Std., Start am Morgen", en: "10 hrs, morning start" },
              { de: "bis zu 7 Stopps, alle sieben Ziele möglich", en: "up to 7 stops, all seven destinations possible" },
              { de: "ab 25.500 THB (24.000 THB + 1.500 THB Zuschlag mittlere Zone)", en: "from 25,500 THB (24,000 THB + 1,500 THB mid-zone surcharge)" },
              { de: "Die volle 9-Islands-Idee, mit Zeit für die Gezeiten", en: "The full 9 Islands idea, with time to work around the tides" },
            ],
          ],
        },
      },
      {
        id: "tides-tup-sandbar-hong-lagoon",
        h2: {
          de: "Gezeiten: Tup-Sandbank und Hong-Lagune am selben Tag",
          en: "Tides: the Tup sandbar and the Hong lagoon on the same day",
        },
        body: {
          de: [
            "Hier liegt die eigentliche Herausforderung einer 9-Islands-Tour, über die selten jemand spricht: Die beiden bekanntesten Ziele mögen unterschiedliche Wasserstände. Die Tup-Sandbank taucht nur rund um das Niedrigwasser auf und ist bei Flut überspült. Die Hong-Lagune dagegen ist bei höherem Wasser am schönsten; bei Ebbe wird sie flach, Teile fallen trocken und größere Boote kommen nicht hinein.",
            "In der Andamanensee gibt es in der Regel zwei Hoch- und zwei Niedrigwasser pro Tag, und die Zeiten verschieben sich von Tag zu Tag um knapp eine Stunde nach hinten. Zwischen Niedrig- und Hochwasser liegen grob sechs Stunden. Für einen langen Tag ist das eine gute Nachricht: In acht oder zehn Stunden lassen sich beide Ziele meist so legen, dass jedes seinen passenden Wasserstand bekommt. Garantieren lässt sich das nicht für jedes Datum, und bei Nipptiden um Halbmond kann die Sandbank auch nur teilweise auftauchen.",
            "Deshalb planen wir die Reihenfolge der Stopps nach dem Wasserstand Ihres Tages, nicht nach einem festen Schema. Liegt das Niedrigwasser am Vormittag, kommt die Sandbank eher früh und die Lagune später. Liegt es am Nachmittag, ist es umgekehrt. Wie Sie eine Gezeitentabelle selbst lesen, erklärt unser Gezeiten-Guide.",
          ],
          en: [
            "This is the real challenge of a 9 Islands tour that rarely anyone talks about: the two best-known destinations like different water levels. The Tup sandbar only appears around low water and is submerged at high tide. The Hong lagoon, on the other hand, is at its best at higher water; at low tide it becomes shallow, parts dry out and larger boats cannot get in.",
            "The Andaman Sea usually has two high and two low waters a day, and the times shift later by almost an hour from one day to the next. Roughly six hours lie between low and high water. For a long day that is good news: in eight or ten hours both destinations can usually be placed so that each gets its suitable water level. This cannot be guaranteed for every date, and at neap tides around half moon the sandbar may only partly emerge.",
            "That is why we plan the order of stops around the water level on your day, not around a fixed pattern. If low water falls in the morning, the sandbar comes earlier and the lagoon later. If it falls in the afternoon, it is the other way round. Our tides guide explains how to read a tide table yourself.",
          ],
        },
        tip: {
          de: "Nennen Sie uns bei der Anfrage Ihr Wunschdatum und ein Ausweichdatum. Wir sagen Ihnen offen, an welchem Tag Sandbank und Lagune besser zusammenpassen, und schlagen die Reihenfolge vor.",
          en: "Give us your preferred date and a fallback date when you enquire. We tell you openly on which day the sandbar and the lagoon fit together better, and suggest the order of stops.",
        },
      },
      {
        id: "full-day-or-expedition",
        h2: {
          de: "Ganztags oder Expedition: was passt zu Ihnen?",
          en: "Full day or expedition: which suits you?",
        },
        body: {
          de: [
            "Beide Varianten verbinden Hong Island und die 4 Islands an einem Tag. Der Unterschied liegt in der Zeit pro Stopp und in der Zahl der Ziele. Als Faustregel aus der Planung:",
          ],
          en: [
            "Both versions combine Hong Island and the 4 Islands in one day. The difference lies in the time per stop and the number of destinations. As a rule of thumb from planning:",
          ],
        },
        list: {
          de: [
            "Ganztags (8 Std., bis 5 Stopps): gut für Familien mit Kindern und alle, die lieber länger an einem Strand bleiben als viele Orte abzuhaken",
            "Expedition (10 Std., bis 7 Stopps): gut für alle, die wirklich beide Gruppen komplett sehen möchten und einen langen Tag auf dem Wasser genießen",
            "Nur eine Gruppe: Wer vor allem die Lagune will, ist mit der Hong-Island-Tour gut bedient; wer Sandbank und Sonnenuntergang sucht, mit der 4-Islands-Sunset-Tour",
            "Zwei Halbtage statt einem langen Tag: ebenfalls möglich, wenn Sie mehrere Tage in Ao Nang sind und lieber kürzer unterwegs sind",
          ],
          en: [
            "Full day (8 hrs, up to 5 stops): good for families with children and anyone who would rather stay longer at one beach than tick off many places",
            "Expedition (10 hrs, up to 7 stops): good for anyone who really wants to see both groups completely and enjoys a long day on the water",
            "One group only: if the lagoon is your priority, the Hong Island tour suits you; if you want sandbar and sunset, the 4 Islands sunset tour",
            "Two half days instead of one long day: also possible if you are in Ao Nang for several days and prefer shorter trips",
          ],
        },
      },
      {
        id: "food-fees-what-to-bring",
        h2: {
          de: "Verpflegung, Gebühren und was Sie mitbringen sollten",
          en: "Food, fees and what to bring",
        },
        body: {
          de: [
            "Ein ganzer Tag auf dem Wasser braucht eine Mittagspause. Verpflegung buchen Sie als Extra dazu, zum Beispiel die Thai-Lunchbox (450 THB pro Person) oder das Verpflegungspaket mit zwei frisch zubereiteten Mahlzeiten und Getränken (500 THB pro Person). Ein ruhiger Strand wie Koh Pakbia oder Koh Lao Lading eignet sich gut als Ort für die Pause.",
            "Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr; sie ist nicht im Tourpreis enthalten und wird vor Ort bei den Rangern bezahlt. Den Hintergrund erklärt unser Artikel zu den Nationalpark-Gebühren in Krabi.",
          ],
          en: [
            "A whole day on the water needs a lunch break. You add food as an extra, for example the Thai lunch box (450 THB per person) or the catering package with two freshly prepared meals and drinks (500 THB per person). A quiet beach such as Koh Pakbia or Koh Lao Lading works well as a spot for the break.",
            "Some islands or national parks charge an entrance fee; it is not included in the tour price and is paid on site to the rangers. Our article on national park fees in Krabi explains the background.",
          ],
        },
        list: {
          de: [
            "Wasserschuhe für die Sandbank und steinige Einstiege",
            "Hut, UV-Shirt und riffschonende Sonnencreme, denn auf der Sandbank gibt es keinen Schatten",
            "Wasserdichte Tasche für Handy und Kamera",
            "Bargeld für mögliche Eintrittsgebühren vor Ort",
          ],
          en: [
            "Water shoes for the sandbar and stony entry points",
            "A hat, rash guard and reef-safe sunscreen, because there is no shade on the sandbar",
            "A dry bag for phone and camera",
            "Cash for any entrance fees on site",
          ],
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Welche Inseln gehören zu einer 9 Islands Tour in Krabi?",
          en: "Which islands are part of a Krabi 9 Islands tour?",
        },
        a: {
          de: "Meist eine Kombination aus der Hong-Gruppe und den 4 Islands. Die genaue Zählung unterscheidet sich je nach Anbieter. Bei uns stehen sieben Ziele zur Auswahl: Koh Hong, Koh Lao Lading, Koh Pakbia, Koh Poda, Chicken Island, Tup-Sandbank sowie Phra Nang & Railay.",
          en: "Usually a combination of the Hong group and the 4 Islands. The exact count differs between operators. With us there are seven destinations to choose from: Koh Hong, Koh Lao Lading, Koh Pakbia, Koh Poda, Chicken Island, the Tup sandbar and Phra Nang & Railay.",
        },
      },
      {
        q: {
          de: "Kann man Hong Island und die 4 Islands an einem Tag besuchen?",
          en: "Can you visit Hong Island and the 4 Islands in one day?",
        },
        a: {
          de: "Ja, als private Wunschtour: ganztags mit bis zu 5 Stopps oder als Expedition mit bis zu 7 Stopps. Mit sieben Stopps lassen sich alle Ziele beider Gruppen anfahren, dann allerdings mit kürzeren Aufenthalten.",
          en: "Yes, as a private custom tour: a full day with up to 5 stops or an expedition with up to 7 stops. With seven stops all destinations of both groups can be visited, though with shorter stays.",
        },
      },
      {
        q: {
          de: "Was kostet eine private Tour mit Hong Island und 4 Islands?",
          en: "How much does a private Hong Island and 4 Islands tour cost?",
        },
        a: {
          de: "Als Richtpreis ab 20.500 THB pro Boot ganztags (8 Std.) und ab 25.500 THB als Expedition (10 Std.), jeweils für bis zu 5 Gäste und inklusive 1.500 THB Zuschlag für die mittlere Zone. Extras und mögliche Eintrittsgebühren vor Ort kommen dazu.",
          en: "As a guide price from 20,500 THB per boat for a full day (8 hrs) and from 25,500 THB as an expedition (10 hrs), each for up to 5 guests and including the 1,500 THB mid-zone surcharge. Extras and any entrance fees on site come on top.",
        },
      },
      {
        q: {
          de: "Klappen Tup-Sandbank und Hong-Lagune am selben Tag?",
          en: "Do the Tup sandbar and the Hong lagoon work on the same day?",
        },
        a: {
          de: "Meist ja, weil zwischen Niedrig- und Hochwasser grob sechs Stunden liegen. Die Sandbank braucht Ebbe, die Lagune eher höheres Wasser. Wir legen die Reihenfolge nach dem Wasserstand Ihres Tages fest; garantieren lässt sich das perfekte Timing nicht für jedes Datum.",
          en: "Usually yes, because roughly six hours lie between low and high water. The sandbar needs low tide, the lagoon rather higher water. We set the order according to the water level on your day; perfect timing cannot be guaranteed for every date.",
        },
      },
      {
        q: {
          de: "Ist eine 9 Islands Tour mit Kindern machbar?",
          en: "Is a 9 Islands tour doable with children?",
        },
        a: {
          de: "Ja, wir empfehlen Familien aber eher die Ganztagsvariante mit weniger Stopps und längeren Pausen. Die Tup-Sandbank ist flach, Wasserschuhe, Sonnenschutz und ein Auge auf die steigende Flut sind aber wichtig.",
          en: "Yes, but for families we recommend the full-day version with fewer stops and longer breaks. The Tup sandbar is shallow, but water shoes, sun protection and an eye on the rising tide matter.",
        },
      },
    ],
    related: ["krabi-tides-guide", "hong-island-krabi", "4-islands-krabi-names-map-sandbar-timing", "hong-island-vs-4-islands-vs-phi-phi"],
    tourIds: ["hong-lagoons", "4islands-sunset"],
    image: IMG.hong,
  },

  /* ───────────── 2. Bamboo Island Krabi ───────────── */
  {
    slug: "bamboo-island-krabi",
    category: "island",
    short: { de: "Bamboo Island", en: "Bamboo Island" },
    primaryKeyword: "Bamboo Island Krabi",
    keywords: [
      "Bamboo Island Krabi",
      "Bootstour Phi Phi Maya Bay Bamboo Island",
      "Bamboo Island ab Krabi",
      "Bamboo Island Phi Phi",
      "Bamboo Island Schnorcheln",
      "Krabi Bamboo Island tour",
      "Bamboo Island from Krabi",
      "Phi Phi Maya Bay Bamboo Island tour from Krabi",
      "Bamboo Island private speedboat",
      "Koh Mai Phai",
    ],
    title: {
      de: "Bamboo Island Krabi: Bootstour mit Phi Phi & Maya Bay",
      en: "Bamboo Island Krabi: Phi Phi & Maya Bay Boat Tour",
    },
    metaDescription: {
      de: "Bamboo Island ab Krabi: Lage bei Phi Phi, weißer Strand, Schnorcheln, Mittagspause und wie Sie Maya Bay, Pileh-Lagune und Bamboo Island privat verbinden.",
      en: "Bamboo Island from Krabi: where it lies near Phi Phi, its white beach, snorkelling, a lunch stop and how to combine it with Maya Bay on a private tour.",
    },
    h1: {
      de: "Bamboo Island Krabi: weißer Strand bei Phi Phi – und wie Sie ihn mit Maya Bay verbinden",
      en: "Bamboo Island Krabi: a white beach near Phi Phi – and how to combine it with Maya Bay",
    },
    intro: {
      de: "Bamboo Island ist der entspannte Gegenpol zu einem Phi-Phi-Tag voller großer Namen. Nach Maya Bay, der Pileh-Lagune und der Viking Cave wartet hier ein weißer Strand mit flachem Wasser, an dem Sie schwimmen, schnorcheln und Mittagspause machen. Wer „Bamboo Island Krabi“ sucht, meint meist genau diese Kombination: eine Bootstour ab Ao Nang mit Phi Phi, Maya Bay und Bamboo Island an einem Tag. Dieser Guide erklärt, wo Bamboo Island liegt, was Sie dort erwartet, wie die Insel in unsere private Tour „Phi Phi Early Bird“ passt, was Sie zur Mittagspause wissen sollten und welche Regeln rund um Maya Bay gelten. Wir halten uns dabei an das, was wir sicher wissen: Wie voll ein Strand ist und wie das Wasser aussieht, ändert sich mit Tag, Wetter und Saison.",
      en: "Bamboo Island is the relaxed counterpart to a Phi Phi day full of big names. After Maya Bay, Pileh Lagoon and Viking Cave, a white beach with shallow water awaits, where you swim, snorkel and take a lunch break. Anyone searching for “Bamboo Island Krabi” usually means exactly this combination: a boat tour from Ao Nang with Phi Phi, Maya Bay and Bamboo Island in one day. This guide explains where Bamboo Island lies, what to expect there, how the island fits into our private “Phi Phi Early Bird” tour, what to know about the lunch break and which rules apply around Maya Bay. We stick to what we know for sure: how busy a beach is and how the water looks change with the day, the weather and the season.",
    },
    sections: [
      {
        id: "where-is-bamboo-island",
        h2: {
          de: "Wo liegt Bamboo Island? Lage ab Krabi",
          en: "Where is Bamboo Island? Location from Krabi",
        },
        body: {
          de: [
            "Bamboo Island, auf Thai Koh Mai Phai, ist eine kleine Insel der Phi-Phi-Gruppe. Die Gruppe besteht aus der bewohnten Hauptinsel Phi Phi Don mit Hotels, Restaurants und dem Hafen Ton Sai, der unbewohnten, felsigen Phi Phi Leh mit Maya Bay, Pileh Lagoon und Viking Cave sowie kleineren Inseln wie Bamboo Island und Mosquito Island im Norden.",
            "Das Gebiet gehört zum Nationalpark Hat Noppharat Thara–Mu Ko Phi Phi. Von Ao Nang aus fahren Sie mit dem Speedboat bei ruhiger See etwa 45 bis 60 Minuten bis Phi Phi. Bamboo Island ist also kein Ziel für einen kurzen Nachmittag, sondern Teil eines Tagesausflugs, bei dem sich die Fahrt lohnt, weil Sie mehrere Highlights verbinden.",
            "Wer nach Bamboo Island ab Krabi sucht, landet deshalb fast immer bei einer Phi-Phi-Tour. Eine Fähre zu den großen Häfen bringt Sie nicht direkt an diesen Strand; dafür brauchen Sie ein Boot, das dort anlegt.",
          ],
          en: [
            "Bamboo Island, Koh Mai Phai in Thai, is a small island of the Phi Phi group. The group consists of the inhabited main island of Phi Phi Don with hotels, restaurants and Ton Sai pier, the uninhabited, rocky Phi Phi Leh with Maya Bay, Pileh Lagoon and Viking Cave, and smaller islands such as Bamboo Island and Mosquito Island to the north.",
            "The area belongs to Hat Noppharat Thara–Mu Ko Phi Phi National Park. From Ao Nang the speedboat ride to Phi Phi takes about 45 to 60 minutes in calm seas. Bamboo Island is therefore not a destination for a short afternoon but part of a day trip, where the ride is worthwhile because you combine several highlights.",
            "That is why anyone looking for Bamboo Island from Krabi almost always ends up with a Phi Phi tour. A ferry to the big piers does not take you straight to this beach; for that you need a boat that stops there.",
          ],
        },
      },
      {
        id: "what-to-expect",
        h2: {
          de: "Was Sie auf Bamboo Island erwartet",
          en: "What to expect on Bamboo Island",
        },
        body: {
          de: [
            "Bamboo Island ist vor allem ein Strandstopp. Statt hoher Felswände wie an Phi Phi Leh erwartet Sie ein weißer Sandstrand mit flachem Wasser, in dem sich gut baden lässt, auch für Kinder, die noch nicht sicher schwimmen, solange ein Erwachsener dabei ist. Schatten finden Sie unter den Bäumen im Inselinneren, nicht direkt am Wasser.",
            "Zum Schnorcheln eignen sich die Bereiche rund um die Insel, an denen das flache Wasser in tieferes Riff übergeht. Was Sie dort sehen, hängt von Sicht, Wetter und Glück ab; versprechen können wir einzelne Tiere nicht. Schnorchel-Ausrüstung stellen wir kostenlos, bitte kreuzen Sie sie bei der Buchung an.",
          ],
          en: [
            "Bamboo Island is above all a beach stop. Instead of high cliffs as at Phi Phi Leh, you find a white sand beach with shallow water that is good for swimming, also for children who cannot yet swim confidently, as long as an adult is with them. Shade is under the trees inland, not directly by the water.",
            "For snorkelling, the areas around the island where shallow water drops into deeper reef are a good choice. What you see there depends on visibility, weather and luck; we cannot promise particular animals. We provide snorkel gear free of charge, please tick it when booking.",
          ],
        },
        list: {
          de: [
            "Weißer Sandstrand mit flachem Wasser zum Baden",
            "Schnorcheln dort, wo das flache Wasser in tieferes Riff übergeht",
            "Schatten unter den Bäumen im Inselinneren",
            "Ruhiger Ausgleich nach den Felslandschaften von Phi Phi Leh",
          ],
          en: [
            "White sand beach with shallow water for swimming",
            "Snorkelling where the shallow water drops into deeper reef",
            "Shade under the trees inland",
            "A calm counterpart to the rock scenery of Phi Phi Leh",
          ],
        },
      },
      {
        id: "phi-phi-maya-bay-bamboo-island-tour",
        h2: {
          de: "Bootstour Phi Phi, Maya Bay und Bamboo Island an einem Tag",
          en: "Phi Phi, Maya Bay and Bamboo Island boat tour in one day",
        },
        body: {
          de: [
            "Unsere private Tour „Phi Phi Early Bird – vor allen anderen“ verbindet genau diese Ziele. Wir fahren um 07:00 Uhr ab Ao Nang los, sodass wir Maya Bay erreichen, bevor die Fähren ankommen. Danach schwimmen Sie in der türkisfarbenen Pileh-Lagune, fahren an der Viking Cave vorbei und machen Mittagspause am weißen Strand von Bamboo Island. Die Tour dauert 8 Stunden.",
            "Die Reihenfolge hat einen Grund: Maya Bay ist der Ort, an dem die Uhrzeit am meisten zählt, deshalb kommt sie zuerst. Bamboo Island als Strandstopp passt gut ans Ende, wenn Sie nach Lagune und Felsen einfach im Wasser liegen und essen möchten. Die Tabelle zeigt, was Sie an jedem Stopp tun können.",
            "Der Preis liegt bei ab 28.500 THB pro Boot für bis zu 5 Gäste, nicht pro Person. Im Preis enthalten sind laut Leistungsliste das private Speedboat mit Kapitän, Zeit zum Schnorcheln, Schwimmen und Entspannen, kostenloses Schnorchel-Equipment (bei der Buchung auswählen), Wasser, Softdrinks und Obst. Sie fahren in einem weißen Hardtop-Kabinenboot, das Schatten spendet.",
          ],
          en: [
            "Our private tour “Phi Phi Early Bird – before everyone else” combines exactly these destinations. We leave Ao Nang at 7 am, so we reach Maya Bay before the ferries arrive. After that you swim in turquoise Pileh Lagoon, pass Viking Cave and take a lunch break on Bamboo Island’s white beach. The tour takes 8 hours.",
            "The order has a reason: Maya Bay is the place where timing matters most, so it comes first. Bamboo Island as a beach stop fits well at the end, when after the lagoon and the cliffs you simply want to lie in the water and eat. The table shows what you can do at each stop.",
            "The price is from 28,500 THB per boat for up to 5 guests, not per person. According to the inclusion list the price covers the private speedboat with captain, time to snorkel, swim and relax, free snorkel gear (select when booking), water, soft drinks and fruit. You travel in a white hardtop cabin boat that gives shade.",
          ],
        },
        table: {
          caption: {
            de: "Die Stopps der Phi Phi Early Bird Tour im Überblick",
            en: "The stops of the Phi Phi Early Bird tour at a glance",
          },
          head: [
            { de: "Stopp", en: "Stop" },
            { de: "Was es ist", en: "What it is" },
            { de: "Baden?", en: "Swimming?" },
            { de: "Gut zu wissen", en: "Good to know" },
          ],
          rows: [
            [
              { de: "Maya Bay", en: "Maya Bay" },
              { de: "Ikonische Bucht an Phi Phi Leh, Besuch über einen Steg auf der Rückseite", en: "Iconic bay on Phi Phi Leh, visited via a jetty on the back side" },
              { de: "Nein, Schwimmen ist seit der Wiedereröffnung nicht erlaubt", en: "No, swimming has not been allowed since the reopening" },
              { de: "Jährliche Schließung während des Südwestmonsuns, zuletzt 1. Aug. bis 30. Sep.", en: "Annual closure during the southwest monsoon, most recently 1 Aug to 30 Sep" },
            ],
            [
              { de: "Pileh-Lagune", en: "Pileh Lagoon" },
              { de: "Smaragdgrünes Becken zwischen Felswänden", en: "Emerald basin between cliffs" },
              { de: "Ja, direkt vom Boot, sofern die Parkregeln es erlauben", en: "Yes, straight off the boat, as far as the park rules allow" },
              { de: "Früh am Tag am ruhigsten", en: "Calmest early in the day" },
            ],
            [
              { de: "Viking Cave", en: "Viking Cave" },
              { de: "Höhle an Phi Phi Leh", en: "Cave on Phi Phi Leh" },
              { de: "Kein Badestopp", en: "Not a swim stop" },
              { de: "Nur von außen zu sehen, Betreten nicht erlaubt (Schwalbennester)", en: "Seen from outside only, entry not allowed (swiftlet nests)" },
            ],
            [
              { de: "Bamboo Island", en: "Bamboo Island" },
              { de: "Kleine Insel mit weißem Sandstrand", en: "Small island with a white sand beach" },
              { de: "Ja, flaches Wasser zum Baden und Schnorcheln", en: "Yes, shallow water for swimming and snorkelling" },
              { de: "Mittagspause, Schatten unter den Bäumen im Inselinneren", en: "Lunch break, shade under the trees inland" },
            ],
          ],
        },
      },
      {
        id: "lunch-on-bamboo-island",
        h2: {
          de: "Mittagspause auf Bamboo Island: so planen Sie das Essen",
          en: "Lunch break on Bamboo Island: how to plan your food",
        },
        body: {
          de: [
            "Die Mittagspause am Strand von Bamboo Island ist fester Teil der Tour, ein Mittagessen ist im Tourpreis aber nicht enthalten. Wasser, Softdrinks und Obst sind an Bord. Für ein richtiges Essen buchen Sie Verpflegung als Extra dazu, zum Beispiel die Thai-Lunchbox mit Pad Thai oder grünem Curry (450 THB pro Person) oder das Verpflegungspaket mit zwei frisch zubereiteten Mahlzeiten und Getränken (500 THB pro Person), das über den langen Tag gut passt.",
            "Bitte nennen Sie uns Unverträglichkeiten oder vegetarische Wünsche bei der Anfrage. Für Kinder gibt es ein eigenes Kindermenü als Extra.",
          ],
          en: [
            "The lunch break on Bamboo Island’s beach is a fixed part of the tour, but lunch is not included in the tour price. Water, soft drinks and fruit are on board. For a proper meal you add food as an extra, for example the Thai lunch box with pad thai or green curry (450 THB per person) or the catering package with two freshly prepared meals and drinks (500 THB per person), which suits the long day well.",
            "Please tell us about food intolerances or vegetarian wishes when you enquire. For children there is a separate kids’ menu as an extra.",
          ],
        },
        tip: {
          de: "Nehmen Sie die Mahlzeit mit in den Schatten unter den Bäumen und lassen Sie keinen Müll zurück. Die Insel gehört zum Nationalpark, alles, was Sie mitbringen, nehmen Sie wieder mit an Bord.",
          en: "Take your meal into the shade under the trees and leave no rubbish behind. The island belongs to the national park, and everything you bring goes back on board with you.",
        },
      },
      {
        id: "maya-bay-closed-bamboo-island",
        h2: {
          de: "Maya Bay geschlossen? Was das für Bamboo Island bedeutet",
          en: "Maya Bay closed? What that means for Bamboo Island",
        },
        body: {
          de: [
            "Maya Bay schließt jedes Jahr für rund zwei Monate während des Südwestmonsuns, zuletzt vom 1. August bis 30. September, mit Wiedereröffnung am 1. Oktober. Die genauen Daten legt die Nationalparkbehörde fest und kann sie ändern; prüfen Sie den Stand für Ihr Datum vor der Buchung. Unser Artikel zu den Öffnungs- und Schließzeiten von Maya Bay hält die Details zusammen.",
            "Eine geschlossene Maya Bay muss den Phi-Phi-Tag nicht wertlos machen. Pileh-Lagune, Viking Cave von außen und Bamboo Island bleiben lohnende Ziele, und die Bucht selbst lässt sich vom Wasser aus aus der Entfernung sehen. Bedenken Sie aber: In dieser Zeit ist auch die See öfter unruhiger. Bei Sturmwarnung verschieben wir kostenlos oder erstatten 100 %.",
            "Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr; sie ist nicht im Tourpreis enthalten und wird vor Ort bei den Rangern bezahlt. Den Hintergrund erklärt unser Artikel zu den Nationalpark-Gebühren in Krabi.",
          ],
          en: [
            "Maya Bay closes every year for about two months during the southwest monsoon, most recently from 1 August to 30 September, reopening on 1 October. The exact dates are set by the national park authority and can change; check the status for your date before booking. Our article on Maya Bay opening and closing dates keeps the details together.",
            "A closed Maya Bay does not have to make the Phi Phi day worthless. Pileh Lagoon, Viking Cave from outside and Bamboo Island remain worthwhile destinations, and the bay itself can be seen from the water at a distance. Bear in mind, though, that the sea is more often rough at this time. With a storm warning we reschedule free of charge or refund 100%.",
            "Some islands or national parks charge an entrance fee; it is not included in the tour price and is paid on site to the rangers. Our article on national park fees in Krabi explains the background.",
          ],
        },
      },
      {
        id: "tips-for-bamboo-island",
        h2: {
          de: "Praktische Tipps für Bamboo Island und den Phi-Phi-Tag",
          en: "Practical tips for Bamboo Island and the Phi Phi day",
        },
        body: {
          de: [
            "Ein Phi-Phi-Tag ist lang und beginnt früh. Mit ein paar Vorbereitungen genießen Sie den Strandstopp am Ende deutlich mehr:",
          ],
          en: [
            "A Phi Phi day is long and starts early. With a little preparation you enjoy the beach stop at the end much more:",
          ],
        },
        list: {
          de: [
            "Riffschonende Sonnencreme, Hut und UV-Shirt für Strand und Schnorcheln",
            "Wasserdichte Tasche für die Überfahrt und das Aussteigen im flachen Wasser",
            "Wasserschuhe, falls Sie über Steine oder Korallenschutt ins Wasser gehen",
            "Bargeld für mögliche Eintrittsgebühren vor Ort",
            "Wer schnell seekrank wird: leichtes Frühstück und ein Platz im vorderen Bereich mit Blick auf den Horizont",
            "Korallen nicht berühren und nicht auf ihnen stehen; Muscheln und Korallen bleiben im Park",
          ],
          en: [
            "Reef-safe sunscreen, a hat and a rash guard for beach and snorkelling",
            "A dry bag for the crossing and for getting off in shallow water",
            "Water shoes in case you enter the water over stones or coral rubble",
            "Cash for any entrance fees on site",
            "If you get seasick easily: a light breakfast and a seat looking at the horizon",
            "Do not touch or stand on coral; shells and coral stay in the park",
          ],
        },
        tip: {
          de: "Das 4K-Drohnen-Paket (4.500 THB pro Boot) lohnt sich auf dieser Route besonders: Von oben zeigt sich der Kontrast zwischen den Felsen von Phi Phi Leh und dem hellen Strand von Bamboo Island am deutlichsten. Wo Drohnen erlaubt sind, richtet sich nach den Regeln vor Ort.",
          en: "The 4K drone package (4,500 THB per boat) is especially worthwhile on this route: from above, the contrast between the cliffs of Phi Phi Leh and the bright beach of Bamboo Island shows most clearly. Where drones are allowed depends on the rules on site.",
        },
      },
    ],
    faq: [
      {
        q: {
          de: "Wie komme ich von Krabi nach Bamboo Island?",
          en: "How do I get from Krabi to Bamboo Island?",
        },
        a: {
          de: "Am einfachsten mit einer Bootstour, die dort anlegt. Ab Ao Nang dauert die Speedboat-Fahrt nach Phi Phi bei ruhiger See etwa 45 bis 60 Minuten. Unsere Phi Phi Early Bird Tour startet um 07:00 Uhr und verbindet Maya Bay, Pileh-Lagune, Viking Cave und Bamboo Island.",
          en: "Most easily with a boat tour that stops there. From Ao Nang the speedboat ride to Phi Phi takes about 45 to 60 minutes in calm seas. Our Phi Phi Early Bird tour leaves at 7 am and combines Maya Bay, Pileh Lagoon, Viking Cave and Bamboo Island.",
        },
      },
      {
        q: {
          de: "Kann man auf Bamboo Island schwimmen und schnorcheln?",
          en: "Can you swim and snorkel at Bamboo Island?",
        },
        a: {
          de: "Ja. Der weiße Strand hat flaches Wasser zum Baden, und zum Schnorcheln eignen sich die Bereiche, an denen das flache Wasser in tieferes Riff übergeht. Schnorchel-Ausrüstung ist kostenlos, bitte bei der Buchung ankreuzen.",
          en: "Yes. The white beach has shallow water for swimming, and the areas where shallow water drops into deeper reef are good for snorkelling. Snorkel gear is free, please tick it when booking.",
        },
      },
      {
        q: {
          de: "Ist das Mittagessen auf Bamboo Island im Preis enthalten?",
          en: "Is lunch on Bamboo Island included in the price?",
        },
        a: {
          de: "Nein. Wasser, Softdrinks und Obst sind inklusive. Ein Mittagessen buchen Sie als Extra dazu, etwa die Thai-Lunchbox (450 THB pro Person) oder das Verpflegungspaket (500 THB pro Person).",
          en: "No. Water, soft drinks and fruit are included. You add lunch as an extra, for example the Thai lunch box (450 THB per person) or the catering package (500 THB per person).",
        },
      },
      {
        q: {
          de: "Was kostet eine private Tour nach Phi Phi, Maya Bay und Bamboo Island?",
          en: "What does a private Phi Phi, Maya Bay and Bamboo Island tour cost?",
        },
        a: {
          de: "Unsere Phi Phi Early Bird Tour kostet ab 28.500 THB pro Boot für bis zu 5 Gäste, nicht pro Person, und dauert 8 Stunden. Eine mögliche Eintrittsgebühr wird vor Ort bei den Rangern bezahlt und ist nicht im Tourpreis enthalten.",
          en: "Our Phi Phi Early Bird tour costs from 28,500 THB per boat for up to 5 guests, not per person, and takes 8 hours. Any entrance fee is paid on site to the rangers and is not included in the tour price.",
        },
      },
      {
        q: {
          de: "Kann ich Bamboo Island besuchen, wenn Maya Bay geschlossen ist?",
          en: "Can I visit Bamboo Island when Maya Bay is closed?",
        },
        a: {
          de: "Die Schließung betrifft Maya Bay; Pileh-Lagune, Viking Cave von außen und Bamboo Island gelten weiterhin als lohnende Ziele. Ob eine Fahrt an Ihrem Datum sinnvoll ist, hängt aber auch vom Seegang ab. Wir sagen Ihnen bei der Anfrage ehrlich, wie die Lage aussieht.",
          en: "The closure affects Maya Bay; Pileh Lagoon, Viking Cave from outside and Bamboo Island remain worthwhile destinations. Whether a trip makes sense on your date also depends on the sea state, though. We tell you honestly how things look when you enquire.",
        },
      },
    ],
    related: ["phi-phi-maya-bay-early-morning", "maya-bay-open-closed-dates", "phi-phi-don-vs-phi-phi-leh", "best-snorkeling-spots-krabi"],
    tourIds: ["phi-phi-early-bird"],
    image: IMG.maya,
  },
];
