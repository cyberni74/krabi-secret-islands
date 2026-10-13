import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch L: "Longtail boats: romance at the expense of your health?" (owner request).
 * Fact policy: health statements only as stated by the cited bodies (IARC, WHO, peer-reviewed reviews, CCAC/AIT project).
 * No exposure measurements for Krabi longtail passengers exist in what we found – the article says so openly and does not
 * invent numbers. Diesel exhaust = IARC Group 1, petrol exhaust = Group 2B. A single tour is not equated with years of
 * occupational exposure. No operator is named; our own speedboat is not claimed to be "clean".
 */
export const NEW_ARTICLES_L: GuideArticleInput[] = [
  {
    slug: "longtail-boats-exhaust-health-risks",
    category: "insider",
    short: { de: "Longtail & Gesundheit", en: "Longtail & health" },
    primaryKeyword: "Longtail Boot Abgase",
    keywords: [
      "Longtail Boot Abgase",
      "Longtail Boot Gesundheit",
      "Longtail Boot Dieselruß",
      "Longtail Boot Feinstaub",
      "Longtail Boot Krabi Nachteile",
      "Longtail Boot Lärm Abgase",
      "longtail boat exhaust health",
      "longtail boat fumes Krabi",
      "longtail boat diesel particulates",
    ],
    title: {
      de: "Longtail-Boote: Romantik auf Kosten der Gesundheit?",
      en: "Longtail Boats: Romance at the Expense of Your Health?",
    },
    metaDescription: {
      de: "Longtail-Boote in Krabi: Romantik, aber auch Dieselabgase, Ruß und Feinstaub. Was IARC und WHO über Abgase sagen, was wir nicht wissen und worauf Sie achten.",
      en: "Longtail boats in Krabi: romantic, but also diesel fumes, soot and fine particles. What IARC and WHO say about exhaust, what we do not know and what to look out for.",
    },
    h1: {
      de: "Die Schattenseiten der Longtail-Boote: Romantik auf Kosten der Gesundheit",
      en: "The downsides of longtail boats: romance at the expense of your health",
    },
    intro: {
      de: "Das Longtail-Boot ist das Bild, das viele mit Südthailand verbinden: schlankes Holzboot, bunte Bänder am Bug, lange Welle am Heck. Es ist romantisch und gehört zur Kultur der Küste. Weniger sichtbar ist, was am anderen Ende passiert: Der Antrieb ist häufig ein umgebauter Fahrzeugmotor, der direkt neben den Passagieren läuft und seine Abgase in die Luft über dem Wasser bläst. Dieser Artikel erklärt, was in solchen Abgasen steckt, was Internationale Krebsforschungsagentur (IARC) und WHO dazu sagen, was die Forschung über Boote in Thailand zeigt und wo ihr Wissen endet. Wir verkaufen eine Alternative und haben deshalb ein Interesse. Darum nennen wir hier auch, was nicht belegt ist, und erfinden keine Messwerte.",
      en: "The longtail boat is the image many people associate with southern Thailand: a slim wooden boat, colourful ribbons at the bow, a long shaft at the stern. It is romantic and part of the coast's culture. Less visible is what happens at the other end: the drive is often a converted vehicle engine that runs right next to the passengers and blows its exhaust into the air above the water. This article explains what is in such exhaust, what the International Agency for Research on Cancer (IARC) and the WHO say about it, what research on boats in Thailand shows and where that knowledge ends. We sell an alternative and therefore have an interest. That is why we also state what is not proven, and we do not invent measurements.",
    },
    sections: [
      {
        id: "romance-and-engine",
        h2: { de: "Romantik am Bug, Motor am Heck", en: "Romance at the bow, engine at the stern" },
        body: {
          de: [
            "Das Longtail-Boot verdankt seinen Namen der langen Antriebswelle, an deren Ende die Schraube sitzt. Der Motor steht offen im Heck oder mittschiffs, oft ohne Verkleidung. In Thailand sind dafür häufig umgebaute Motoren aus Autos und Lastwagen im Einsatz, Diesel oder Benzin. Ein solcher Motor ist dafür nicht gebaut, nah bei Menschen zu laufen, und er hat in der Regel keine Abgasreinigung, wie sie moderne Straßenfahrzeuge mit Partikelfilter oder Katalysator haben.",
            "Die Bilder in diesem Artikel zeigen Longtail-Boote mit dunkler Rauchfahne und einen Motor mit Turbolader. Sie stammen nicht von Touren in Krabi, und es handelt sich offenbar um stark getunte Boote. Sie zeigen deshalb kein typisches Tourboot. Sie zeigen aber, wie sichtbar Ruß werden kann, wenn ein Dieselmotor unter Last läuft.",
          ],
          en: [
            "The longtail boat gets its name from the long drive shaft with the propeller at its end. The engine stands open at the stern or amidships, often without any cover. In Thailand converted engines from cars and trucks, diesel or petrol, are often used for this. Such an engine is not built to run close to people, and as a rule it has no exhaust after-treatment such as the particulate filter or catalytic converter of modern road vehicles.",
            "The pictures in this article show longtail boats with a dark plume of smoke and an engine with a turbocharger. They do not come from tours in Krabi, and these are evidently heavily tuned boats. They therefore do not show a typical tour boat. They do show how visible soot can become when a diesel engine runs under load.",
          ],
        },
        figure: {
          src: "/images/book-krabi-boat-longtail-boote-dieselabgase-rauchfahne-kanal.webp",
          width: 1019,
          height: 663,
          alt: {
            de: "Zwei Longtail-Boote mit Motor am Heck beschleunigen auf einem Kanal, dahinter eine dunkle Rauchfahne und Gischt",
            en: "Two longtail boats with the engine at the stern accelerating on a canal, with a dark plume of smoke and spray behind them",
          },
          caption: {
            de: "Beispielbild: Longtail-Boote (offenbar Rennboote) mit dunkler Abgasfahne.",
            en: "Example picture: longtail boats (evidently racing boats) with a dark exhaust plume.",
          },
        },
      },
      {
        id: "what-is-in-the-exhaust",
        h2: { de: "Was in Motorabgasen steckt", en: "What is in engine exhaust" },
        body: {
          de: [
            "Abgase eines Verbrennungsmotors bestehen aus Gasen und Partikeln. Zu den Gasen zählen Kohlenmonoxid, Stickoxide und flüchtige organische Verbindungen. Zu den Partikeln zählen Ruß (Black Carbon), Feinstaub (PM2.5) und ultrafeine Partikel, deren Durchmesser unter 100 Nanometern liegt. An den Partikeln haften weitere Stoffe, darunter polyzyklische aromatische Kohlenwasserstoffe (PAK). Wie viel davon entsteht, hängt von Motor, Kraftstoff, Wartung und Last ab.",
            "Die WHO beschreibt Black Carbon in einem Bericht von 2012 als Bestandteil des Feinstaubs, der bei unvollständiger Verbrennung entsteht. Nach ihrer Auswertung zeigen Studien einen Zusammenhang zwischen täglichen Schwankungen der Black-Carbon-Konzentration und kurzfristigen Gesundheitsfolgen sowie zwischen langfristiger Belastung und Sterblichkeit durch Herz- und Lungenerkrankungen. Die Toxikologie deutet darauf hin, dass Ruß weniger selbst giftig ist als vielmehr andere Chemikalien in Lunge und Blut transportiert.",
          ],
          en: [
            "The exhaust of a combustion engine consists of gases and particles. The gases include carbon monoxide, nitrogen oxides and volatile organic compounds. The particles include soot (black carbon), fine particles (PM2.5) and ultrafine particles with a diameter below 100 nanometres. Further substances cling to the particles, among them polycyclic aromatic hydrocarbons (PAHs). How much of it is produced depends on the engine, fuel, maintenance and load.",
            "In a 2012 report the WHO describes black carbon as a component of fine particles that forms during incomplete combustion. According to its review, studies show an association between daily variations in black carbon concentration and short-term health effects, and between long-term exposure and mortality from cardiovascular and lung disease. Toxicology suggests that soot may act less as a toxic agent itself and more as a carrier for other chemicals into the lungs and blood.",
          ],
        },
      },
      {
        id: "carcinogenic",
        h2: { de: "Dieselabgase gelten als krebserregend", en: "Diesel exhaust is classified as carcinogenic" },
        body: {
          de: [
            "Im Juni 2012 stufte die IARC, die Krebsagentur der WHO, Dieselmotorabgase als „krebserregend für den Menschen“ ein (Gruppe 1). Grundlage war ausreichende Evidenz für einen Zusammenhang mit Lungenkrebs, außerdem begrenzte Evidenz für Blasenkrebs. Benzinabgase stuft die IARC niedriger ein, als „möglicherweise krebserregend“ (Gruppe 2B). Auslöser der Neubewertung war unter anderem eine US-Studie an Bergleuten unter Tage. Eine Übersichtsarbeit von 2018 berichtet, dass erneute Auswertungen zweier großer Studien die ursprünglichen Befunde bestätigten.",
            "Wichtig für die Einordnung: Diese Einstufung sagt, dass ein Stoff Krebs verursachen kann, nicht wie groß das Risiko bei einer bestimmten Menge ist. Die Studien betrafen Menschen mit jahrelanger Belastung am Arbeitsplatz. Eine einzelne Bootsfahrt ist damit nicht vergleichbar. Für Bootsführer und Crew, die täglich neben dem Motor stehen, ist das Bild anders als für einen Gast, der einmal mitfährt.",
          ],
          en: [
            "In June 2012 the IARC, the WHO's cancer agency, classified diesel engine exhaust as \"carcinogenic to humans\" (Group 1). The basis was sufficient evidence of a link to lung cancer, plus limited evidence for bladder cancer. The IARC rates petrol exhaust lower, as \"possibly carcinogenic\" (Group 2B). A trigger for the re-evaluation was, among others, a US study of underground miners. A 2018 review reports that re-analyses of two large studies confirmed the original findings.",
            "Important for putting this in context: the classification says that a substance can cause cancer, not how large the risk is at a given dose. The studies concerned people with years of exposure at work. A single boat trip is not comparable. For skippers and crew who stand next to the engine every day, the picture is different from that of a guest who rides once.",
          ],
        },
      },
      {
        id: "nanoparticles",
        h2: { de: "Nanopartikel und Feinstaub: warum die Lunge betroffen ist", en: "Nanoparticles and fine dust: why the lungs are affected" },
        body: {
          de: [
            "Ultrafeine Partikel sind so klein, dass sie nach einer Übersichtsarbeit zu ihren physikalisch-chemischen Eigenschaften bis in die feinsten Bereiche der Lunge (Lungenbläschen) gelangen und die ersten Abwehrmechanismen der Atemwege umgehen können. Dieselbe Arbeit hält fest, dass schädliche Wirkungen von PM10 oder PM2.5 oft dem ultrafeinen Anteil zugeschrieben werden. Die WHO hat in ihren Luftqualitätsleitlinien von 2021 den Jahresrichtwert für PM2.5 von 10 auf 5 Mikrogramm pro Kubikmeter gesenkt und Black Carbon sowie ultrafeine Partikel als wichtige Themen hervorgehoben.",
            "Ruß und Partikel reizen die Atemwege und können bei empfindlichen Menschen Husten, Atemnot oder Asthmaanfälle auslösen. Zu den Risikogruppen zählen Kinder, Schwangere, ältere Menschen und Menschen mit Asthma, COPD oder Herzerkrankungen. Das ist allgemeines medizinisches Wissen zu Luftschadstoffen, keine Messung auf einem Boot in Krabi.",
          ],
          en: [
            "According to a review of their physicochemical properties, ultrafine particles are so small that they can reach the finest regions of the lung (the alveoli) and bypass the airways' first lines of defence. The same work notes that harmful effects of PM10 or PM2.5 are often attributed to the ultrafine fraction. In its 2021 air quality guidelines the WHO lowered the annual guideline for PM2.5 from 10 to 5 micrograms per cubic metre and highlighted black carbon and ultrafine particles as important topics.",
            "Soot and particles irritate the airways and can trigger coughing, shortness of breath or asthma attacks in sensitive people. Risk groups include children, pregnant women, older people and people with asthma, COPD or heart disease. This is general medical knowledge about air pollutants, not a measurement on a boat in Krabi.",
          ],
        },
        figure: {
          src: "/images/book-krabi-boat-longtail-motor-turbolader-dieselmotor-heck.webp",
          width: 480,
          height: 600,
          alt: {
            de: "Offener Dieselmotor mit Turbolader auf einem Holzboot, dahinter Dampf und Gischt",
            en: "Open diesel engine with a turbocharger on a wooden boat, with steam and spray behind it",
          },
          caption: {
            de: "Beispielbild: offener Motor mit Turbolader (getuntes Boot), ohne sichtbare Abgasreinigung.",
            en: "Example picture: open engine with a turbocharger (tuned boat), without visible exhaust after-treatment.",
          },
        },
      },
      {
        id: "research-thailand",
        h2: { de: "Was die Forschung zu Booten in Thailand zeigt", en: "What research on boats in Thailand shows" },
        body: {
          de: [
            "Direkt zu Longtail-Booten in Krabi haben wir keine Messungen von Passagieren oder Crew gefunden. Das ist eine Lücke. Die nächste Quelle ist ein Projekt der Koalition für Klima und saubere Luft (CCAC) mit dem Asian Institute of Technology zu Booten auf den Kanälen und dem Chao Phraya in Bangkok. Es stellte fest, dass Boote mit 15 bis 20 Jahre alten Motoren beim Ablegen und Anlegen viel schwarzen Rauch ausstoßen und zur Luftverschmutzung in Bangkok beitragen. Die Emissionen dieses Sektors waren zuvor nicht gesondert untersucht worden.",
            "In Modellrechnungen desselben Projekts würde ein Umstieg auf Motoren nach der Euro-VI-Norm mit schwefelarmem Kraftstoff den PM2.5-Ausstoß um rund 98 Prozent senken, ein sauberer Kraftstoff allein bei den bestehenden Motoren nur um rund 5 Prozent. Das betrifft Bangkoks Kanalboote und lässt sich nicht eins zu eins auf Krabi übertragen. Es zeigt aber, dass vor allem der Motor entscheidet, nicht der Kraftstoff. Die Projektbeteiligten halten außerdem fest, dass die Gesamtwirkung klein sein kann, die Menschen am Wasser und die Bootsführer aber am stärksten betroffen sein dürften.",
          ],
          en: [
            "For longtail boats in Krabi specifically we found no measurements of passengers or crew. That is a gap. The nearest source is a project by the Climate and Clean Air Coalition (CCAC) with the Asian Institute of Technology on boats on the canals and the Chao Phraya in Bangkok. It found that boats with 15 to 20 year old engines emit a lot of black smoke when leaving and approaching piers and contribute to Bangkok's air pollution. The emissions of this sector had not been studied separately before.",
            "In model calculations of the same project, switching to engines meeting the Euro VI standard with low-sulphur fuel would cut PM2.5 emissions by about 98 percent, while cleaner fuel alone with the existing engines would cut them by only about 5 percent. This concerns Bangkok's canal boats and cannot be transferred one to one to Krabi. It does show that above all the engine decides, not the fuel. The project's participants also note that the overall effect may be small, but that people living along the water and the boat operators are likely to be affected most.",
          ],
        },
      },
      {
        id: "what-this-means-for-guests",
        h2: { de: "Was das für Gäste bedeutet", en: "What this means for guests" },
        body: {
          de: [
            "Ehrlich eingeordnet: Ein einzelner Ausflug auf einem Longtail-Boot führt bei gesunden Erwachsenen nach heutigem Stand nicht zu Krebs. Das Risiko entsteht durch Dosis und Dauer, und die Dauer betrifft vor allem die Crew. Für Gäste kommen Beschwerden im Moment in Frage: Abgasgeruch, Hustenreiz, Kopfschmerzen, Atemnot bei empfindlichen Menschen. Dazu kommt der Lärm eines offenen Motors, der eine Fahrt auch ohne Abgase belastet.",
            "Wer empfindlich ist, mit kleinen Kindern, Schwangeren oder Menschen mit Atem- und Herzerkrankungen reist, sollte diese Punkte mitdenken. Und wer an einem romantischen Moment hängt, kann die Romantik auch anders bekommen: leiser, ohne Rauchfahne, mit Abstand zu fremden Gruppen.",
          ],
          en: [
            "Put honestly: a single trip on a longtail boat does not, on today's knowledge, lead to cancer in healthy adults. The risk arises from dose and duration, and duration mainly concerns the crew. For guests, complaints in the moment are possible: smell of exhaust, an irritated throat, headaches, shortness of breath in sensitive people. There is also the noise of an open engine, which makes a trip tiring even without exhaust.",
            "If you are sensitive, or travel with small children, pregnant women or people with breathing or heart conditions, you should keep these points in mind. And if you are attached to a romantic moment, you can have the romance another way: quieter, without a plume of smoke, at a distance from strangers' groups.",
          ],
        },
      },
      {
        id: "private-speedboat",
        h2: { de: "Und unser Speedboat?", en: "And our speedboat?" },
        body: {
          de: [
            "Auch ein Speedboat verbrennt Kraftstoff und erzeugt Abgase. Wir versprechen keine „saubere“ Fahrt und können keine Messwerte vorlegen. Wir fahren mit einem privaten Speedboat für maximal 5 Gäste mit zwei Außenbordmotoren. Der Unterschied liegt in der Bauart: Die Motoren sind für den Bootsbetrieb gebaut und nicht aus Fahrzeugen umgerüstet, und es gibt keine fremde Gruppe auf dem Boot. Wer empfindlich auf Abgase reagiert, sagt uns das vor der Buchung, damit wir Sitzplatz und Route darauf abstimmen.",
            "Der Preis gilt pro Boot für bis zu 5 Gäste. Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr, die nicht im Tourpreis enthalten ist und vor Ort direkt bei den Rangern bezahlt wird. Der Start ist in Ao Nang oder Krabi Town möglich.",
          ],
          en: [
            "A speedboat also burns fuel and produces exhaust. We do not promise a \"clean\" ride and cannot present measurements. We run a private speedboat for a maximum of 5 guests with two outboard engines. The difference lies in the design: the engines are built for use on boats and are not converted from vehicles, and there is no strangers' group on board. If you react sensitively to exhaust, tell us before booking so that we can adapt the seating and route.",
            "The price is per boat for up to 5 guests. Some islands and national parks charge an entrance fee that is not included in the tour price and is paid on site directly to the rangers. The start is possible in Ao Nang or Krabi Town.",
          ],
        },
        tip: {
          de: "Tipp für jedes Boot: Sitzen Sie möglichst weit vom Motor und gegen den Wind, atmen Sie nicht direkt im Abgasstrom, und lassen Sie Kinder nicht neben dem Motor sitzen.",
          en: "Tip for any boat: sit as far from the engine as possible and into the wind, do not breathe directly in the exhaust stream, and do not let children sit next to the engine.",
        },
      },
      {
        id: "sources",
        h2: { de: "Quellen", en: "Sources" },
        body: {
          de: ["Die gesundheitlichen Aussagen stützen sich auf diese Quellen. Wo sie Grenzen nennen, haben wir sie im Text übernommen."],
          en: ["The health statements rest on these sources. Where they state limits, we have kept them in the text."],
        },
        list: {
          de: [
            "IARC: Dieselmotorabgase krebserregend für den Menschen (Gruppe 1), Pressemitteilung vom 12. Juni 2012 (PAHO-Wiedergabe: paho.org/en/news/13-6-2012-iarc-diesel-engine-exhaust-carcinogenic)",
            "Übersichtsarbeit im American Journal of Epidemiology (2018) zur Neubewertung der Dieselstudien (pmc.ncbi.nlm.nih.gov/articles/PMC5982841)",
            "WHO Europa: Health effects of black carbon, 2012 (who.int/europe/publications/i/item/9789289002653)",
            "Ultrafine particles: unique physicochemical properties relevant to health and disease (pmc.ncbi.nlm.nih.gov/articles/PMC7156720)",
            "Climate and Clean Air Coalition / AIT: Emissionsinventar der Binnenschifffahrt in Bangkok (ccacoalition.org, Projekt „Developing an emissions inventory for inland water transport in Bangkok“)",
          ],
          en: [
            "IARC: diesel engine exhaust carcinogenic to humans (Group 1), press release of 12 June 2012 (PAHO reprint: paho.org/en/news/13-6-2012-iarc-diesel-engine-exhaust-carcinogenic)",
            "Review in the American Journal of Epidemiology (2018) on the re-evaluation of the diesel studies (pmc.ncbi.nlm.nih.gov/articles/PMC5982841)",
            "WHO Europe: Health effects of black carbon, 2012 (who.int/europe/publications/i/item/9789289002653)",
            "Ultrafine particles: unique physicochemical properties relevant to health and disease (pmc.ncbi.nlm.nih.gov/articles/PMC7156720)",
            "Climate and Clean Air Coalition / AIT: emissions inventory for inland water transport in Bangkok (ccacoalition.org, project \"Developing an emissions inventory for inland water transport in Bangkok\")",
          ],
        },
      },
    ],
    faq: [
      {
        q: { de: "Sind Abgase von Longtail-Booten krebserregend?", en: "Is longtail boat exhaust carcinogenic?" },
        a: {
          de: "Die IARC stuft Dieselabgase als krebserregend für den Menschen ein (Gruppe 1), Benzinabgase als möglicherweise krebserregend (Gruppe 2B). Longtail-Boote laufen oft mit umgebauten Diesel- oder Benzinmotoren. Das Risiko hängt von Dosis und Dauer ab und betrifft vor allem die Crew, nicht den Gast einer einzelnen Fahrt.",
          en: "The IARC classifies diesel exhaust as carcinogenic to humans (Group 1) and petrol exhaust as possibly carcinogenic (Group 2B). Longtail boats often run on converted diesel or petrol engines. The risk depends on dose and duration and mainly concerns the crew, not the guest of a single trip.",
        },
      },
      {
        q: { de: "Gibt es Messungen auf Longtail-Booten in Krabi?", en: "Are there measurements on longtail boats in Krabi?" },
        a: {
          de: "Wir haben keine Messungen an Passagieren oder Crew auf Longtail-Booten in Krabi gefunden. Bekannt ist ein Projekt zu Booten in Bangkok, das alte Motoren mit viel schwarzem Rauch beschreibt.",
          en: "We found no measurements of passengers or crew on longtail boats in Krabi. A project on boats in Bangkok is known, which describes old engines with a lot of black smoke.",
        },
      },
      {
        q: { de: "Was sind ultrafeine Partikel?", en: "What are ultrafine particles?" },
        a: {
          de: "Partikel mit einem Durchmesser unter 100 Nanometern. Sie können nach einer Übersichtsarbeit bis in die Lungenbläschen gelangen und die ersten Abwehrmechanismen der Atemwege umgehen.",
          en: "Particles with a diameter below 100 nanometres. According to a review they can reach the alveoli and bypass the airways' first lines of defence.",
        },
      },
      {
        q: { de: "Ist eine einzelne Longtail-Fahrt gefährlich?", en: "Is a single longtail trip dangerous?" },
        a: {
          de: "Für gesunde Erwachsene nach heutigem Stand nicht im Sinne einer Krebsgefahr. Möglich sind Beschwerden im Moment wie Abgasgeruch, Hustenreiz oder Kopfschmerzen, bei empfindlichen Menschen auch Atemnot. Der Lärm eines offenen Motors kommt hinzu.",
          en: "For healthy adults not, on today's knowledge, in the sense of a cancer risk. Complaints in the moment are possible, such as the smell of exhaust, an irritated throat or headaches, and in sensitive people shortness of breath. The noise of an open engine comes on top.",
        },
      },
      {
        q: { de: "Wer sollte besonders vorsichtig sein?", en: "Who should be especially careful?" },
        a: {
          de: "Kinder, Schwangere, ältere Menschen und Menschen mit Asthma, COPD oder Herzerkrankungen. Sie sollten Abstand zum Motor halten oder eine ruhigere Alternative wählen.",
          en: "Children, pregnant women, older people and people with asthma, COPD or heart disease. They should keep away from the engine or choose a quieter alternative.",
        },
      },
      {
        q: { de: "Ist Ihr Speedboat abgasfrei?", en: "Is your speedboat emission-free?" },
        a: {
          de: "Nein. Auch unser Speedboat verbrennt Kraftstoff. Wir versprechen keine saubere Fahrt und legen keine Messwerte vor. Die Motoren sind für den Bootsbetrieb gebaut, und das Boot gehört für den Tag Ihrer Gruppe von bis zu 5 Gästen.",
          en: "No. Our speedboat also burns fuel. We do not promise a clean ride and present no measurements. The engines are built for boat use, and the boat is your group's of up to 5 guests for the day.",
        },
      },
      {
        q: { de: "Was kostet eine private Bootstour?", en: "What does a private boat tour cost?" },
        a: {
          de: "Bei uns ab 18.500 THB pro Boot für die 4 Islands, für bis zu 5 Gäste und nicht pro Person. Eine Eintrittsgebühr einiger Inseln wird vor Ort bei den Rangern bezahlt und ist nicht enthalten.",
          en: "With us from 18,500 THB per boat for the 4 Islands, for up to 5 guests and not per person. An entrance fee at some islands is paid on site to the rangers and is not included.",
        },
      },
    ],
    related: [
      "longtail-vs-speedboat-krabi",
      "krabi-with-kids",
      "krabi-boat-seasickness-tips",
      "boat-day-packing-list-etiquette",
      "private-boat-charter-krabi-cost",
      "krabi-island-hopping-planner",
      "krabi-islands-insider-guide",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phi-phi-early-bird"],
    image: IMG.longtailExhaust,
  },
];
