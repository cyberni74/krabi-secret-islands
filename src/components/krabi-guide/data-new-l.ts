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
      de: "Longtail-Boote und Dieselabgase: Was Gäste wissen sollten",
      en: "Longtail Boats and Diesel Exhaust: What Guests Should Know",
    },
    metaDescription: {
      de: "Longtail-Boote in Krabi: Dieselabgase, Ruß, Feinstaub, Lärm und Umwelt. Was IARC und WHO sagen, was wir nicht wissen, und 30 Antworten für Ihre Entscheidung.",
      en: "Longtail boats in Krabi: diesel exhaust, soot, fine particles, noise and the environment. What IARC and WHO say, what we do not know, and 30 answers for your decision.",
    },
    h1: {
      de: "Longtail-Boote: Romantik auf Kosten der Gesundheit? Abgase, Schadstoffe und Umwelt",
      en: "Longtail boats: romance at the expense of your health? Exhaust, pollutants and the environment",
    },
    intro: {
      de: "Das Longtail-Boot ist das Bild, das viele mit Südthailand verbinden: schlankes Holzboot, bunte Bänder am Bug, lange Welle am Heck. Es ist romantisch und gehört zur Kultur der Küste. Weniger sichtbar ist, was am anderen Ende passiert: Der Antrieb ist häufig ein umgebauter Fahrzeugmotor, der direkt neben den Passagieren läuft und seine Abgase in die Luft über dem Wasser bläst. Dieser Artikel erklärt, was in solchen Abgasen steckt, was Internationale Krebsforschungsagentur (IARC) und WHO dazu sagen, was die Forschung über Boote in Thailand zeigt und wo ihr Wissen endet. Wir verkaufen eine Alternative und haben deshalb ein Interesse. Darum nennen wir hier auch, was nicht belegt ist, und erfinden keine Messwerte.",
      en: "The longtail boat is the image many people associate with southern Thailand: a slim wooden boat, colourful ribbons at the bow, a long shaft at the stern. It is romantic and part of the coast's culture. Less visible is what happens at the other end: the drive is often a converted vehicle engine that runs right next to the passengers and blows its exhaust into the air above the water. This article explains what is in such exhaust, what the International Agency for Research on Cancer (IARC) and the WHO say about it, what research on boats in Thailand shows and where that knowledge ends. We sell an alternative and therefore have an interest. That is why we also state what is not proven, and we do not invent measurements.",
    },
    sections: [
      {
        id: "key-facts",
        h2: { de: "Das Wichtigste in Kürze", en: "The key facts" },
        body: {
          de: ["Diese Punkte sind durch die genannten Quellen belegt. Alles Weitere im Artikel ist Einordnung."],
          en: ["These points are backed by the cited sources. Everything else in the article is context."],
        },
        list: {
          de: [
            "Dieselmotorabgase stuft die IARC seit 2012 als krebserregend für den Menschen ein (Gruppe 1), Benzinabgase als möglicherweise krebserregend (Gruppe 2B).",
            "Ruß (Black Carbon), Feinstaub und ultrafeine Partikel gelangen beim Einatmen in die Lunge. Ultrafeine Partikel können bis in die Lungenbläschen vordringen.",
            "Zu Longtail-Booten in Krabi haben wir keine Messungen von Passagieren oder Crew gefunden. Über die Dosis einer einzelnen Fahrt lässt sich daher nichts Belastbares sagen.",
            "Die höchste Belastung tragen Bootsführer und Crew. Besonders vorsichtig sollten Kinder, Schwangere, ältere Menschen und Menschen mit Asthma, COPD oder Herzerkrankungen sein.",
            "Motorboote belasten auch die Umwelt: Lärm, Abgase und Schäden an Korallen durch Motoren und Festmachen am Riff sind in Thailands Meeresparks dokumentiert.",
          ],
          en: [
            "Since 2012 the IARC has classified diesel engine exhaust as carcinogenic to humans (Group 1) and petrol exhaust as possibly carcinogenic (Group 2B).",
            "Soot (black carbon), fine particles and ultrafine particles enter the lungs when inhaled. Ultrafine particles can reach the alveoli.",
            "For longtail boats in Krabi we found no measurements of passengers or crew. Nothing reliable can therefore be said about the dose of a single trip.",
            "Skippers and crew carry the highest exposure. Children, pregnant women, older people and people with asthma, COPD or heart disease should be especially careful.",
            "Motorboats also burden the environment: noise, exhaust and damage to coral from engines and mooring on the reef are documented in Thailand's marine parks.",
          ],
        },
      },
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
        id: "environment",
        h2: { de: "Umweltschutz: was Motorboote im Meer anrichten", en: "Environmental protection: what motorboats do at sea" },
        body: {
          de: [
            "Abgase und Lärm sind nicht nur ein Thema für Menschen. In Thailands Meeresparks sind Folgen des Bootsverkehrs dokumentiert. Ein Parkvertreter erklärte 2018, dass über etwa 20 Jahre festmachende Boote in der Maya Bay Riffe beschädigt und den Sand aufgewühlt hatten. Die Bucht wurde deshalb für Boote gesperrt. In der Pileh-Bucht fahren laut einem Bericht von 2024 täglich durchschnittlich rund 120 Boote ein, darunter Longtails und Speedboote. Genannt werden Luftverschmutzung durch Abgase, Lärm und ein höheres Unfallrisiko. Die Behörden verboten daraufhin leeren Longtail-Booten das Parken in der Lagune und das Umsetzen von Gästen aus Speedbooten.",
            "Auch das Festmachen am Riff gilt als Schaden. Aus Koh Kradan wurde berichtet, dass ein Boot an Korallen festgemacht wurde, obwohl eine Boje bereitstand, was zu einem Verfahren gegen den Eigner führte. Korallen wachsen langsam: Manche Arten brauchen Jahrzehnte oder länger. Das ist keine Eigenheit von Longtails, sondern ein Risiko jedes Motorboots ohne Bojen und Regeln.",
            "Zum Lärm: Studien zeigen, dass Motorbootlärm das Verhalten und die Fortpflanzung mancher Rifffische beeinflussen kann. In einer Studie am Great Barrier Reef verbrachten brütende Fischmännchen bei Bootslärm mehr Zeit mit Verfolgen anderer Fische und weniger mit dem Bewachen ihrer Jungen. Eine Übersichtsarbeit von 2021 beschreibt Lärm als wachsenden Stressfaktor an Korallenriffen, vermerkt aber, dass die meisten Studien nur wenige Fischarten betreffen und die Wirkung stark von Art, Lebensphase und Art des Lärms abhängt. Zu Korallen selbst haben wir keine direkten Messungen gefunden.",
            "Zu Kraftstoff und Öl, die von Longtail-Booten ins Wasser gelangen, haben wir keine veröffentlichten Messwerte gefunden. Allgemein gilt: Auslaufender Kraftstoff und Öl schaden Meereslebewesen. Fragen Sie jeden Anbieter, wie er mit Betankung, Ölwechsel und Bilgenwasser umgeht.",
          ],
          en: [
            "Exhaust and noise are not only a matter for people. Consequences of boat traffic are documented in Thailand's marine parks. A park official explained in 2018 that over about 20 years boats mooring in Maya Bay had damaged reefs and disturbed the sand. The bay was therefore closed to boats. According to a 2024 report, on average about 120 boats, including longtails and speedboats, enter Pileh Bay every day. Air pollution from exhaust, noise and a higher risk of accidents are cited. The authorities therefore banned empty longtail boats from parking in the lagoon and from transferring guests from speedboats.",
            "Mooring on the reef is also considered damage. From Koh Kradan it was reported that a boat was tied to coral although a buoy was available, which led to legal action against its owner. Corals grow slowly: some species need decades or longer. This is not specific to longtails but a risk of any motorboat without buoys and rules.",
            "On noise: studies show that motorboat noise can affect the behaviour and reproduction of some reef fish. In a Great Barrier Reef study, nesting male fish spent more time chasing other fish and less time guarding their young when boat noise was played. A 2021 review describes noise as a growing stressor on coral reefs but notes that most studies cover only a few fish species and that the effect depends strongly on species, life stage and type of noise. For corals themselves we found no direct measurements.",
            "On fuel and oil that reach the water from longtail boats, we found no published measurements. In general, spilled fuel and oil harm marine life. Ask every operator how it handles refuelling, oil changes and bilge water.",
          ],
        },
      },
      {
        id: "before-you-book",
        h2: { de: "Was Sie vor der Buchung klären sollten", en: "What to clarify before you book" },
        body: {
          de: ["Gerade für Familien, Schwangere und Menschen mit Atem- oder Herzerkrankungen lohnt sich ein kurzer Check, bevor Sie ein Boot buchen."],
          en: ["Especially for families, pregnant women and people with breathing or heart conditions, a short check is worthwhile before you book a boat."],
        },
        list: {
          de: [
            "Welcher Motor treibt das Boot an (Diesel oder Benzin, Alter, Außenborder oder umgebauter Fahrzeugmotor)?",
            "Wo sitzen Gäste im Verhältnis zum Motor, und wie lässt sich der Abstand vergrößern?",
            "Raucht das Boot sichtbar schwarz beim Beschleunigen oder Ablegen? Dann fahren Sie lieber nicht mit.",
            "Fährt das Boot mit anderen Gruppen zusammen, und wie viele Boote liegen gleichzeitig an einem Ziel?",
            "Gibt es Sicherheitsausrüstung, und werden Bojen statt Anker an Riffen genutzt?",
            "Wie geht der Anbieter mit Kraftstoff, Öl und Müll um?",
          ],
          en: [
            "Which engine drives the boat (diesel or petrol, age, outboard or converted vehicle engine)?",
            "Where do guests sit in relation to the engine, and how can the distance be increased?",
            "Does the boat visibly smoke black when accelerating or leaving the pier? If so, better do not ride on it.",
            "Does the boat travel with other groups, and how many boats are at one destination at the same time?",
            "Is there safety equipment, and are buoys used instead of anchors at reefs?",
            "How does the operator deal with fuel, oil and waste?",
          ],
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
            "Khaosod English, 6. Februar 2024: Krabi rushes to handle 120 tourist boats a day to Pileh Bay (khaosodenglish.com)",
            "Phuket News: Tour boats blamed for widespread reef damage (thephuketnews.com, Koh Kradan)",
            "Arab News / AFP, 2018: Once-pristine Thai bay from „The Beach“ to close to boats (arabnews.pk/node/1246341)",
            "University of Exeter: Ecological implications of motorboat noise on coral reef fish communities (ore.exeter.ac.uk/repository/handle/10871/120368)",
            "Ferrier-Pagès et al. (2021): Noise pollution on coral reefs? A yet underestimated threat to coral reef communities (Übersichtsarbeit)",
          ],
          en: [
            "IARC: diesel engine exhaust carcinogenic to humans (Group 1), press release of 12 June 2012 (PAHO reprint: paho.org/en/news/13-6-2012-iarc-diesel-engine-exhaust-carcinogenic)",
            "Review in the American Journal of Epidemiology (2018) on the re-evaluation of the diesel studies (pmc.ncbi.nlm.nih.gov/articles/PMC5982841)",
            "WHO Europe: Health effects of black carbon, 2012 (who.int/europe/publications/i/item/9789289002653)",
            "Ultrafine particles: unique physicochemical properties relevant to health and disease (pmc.ncbi.nlm.nih.gov/articles/PMC7156720)",
            "Climate and Clean Air Coalition / AIT: emissions inventory for inland water transport in Bangkok (ccacoalition.org, project \"Developing an emissions inventory for inland water transport in Bangkok\")",
            "Khaosod English, 6 February 2024: Krabi rushes to handle 120 tourist boats a day to Pileh Bay (khaosodenglish.com)",
            "Phuket News: Tour boats blamed for widespread reef damage (thephuketnews.com, Koh Kradan)",
            "Arab News / AFP, 2018: Once-pristine Thai bay from \"The Beach\" to close to boats (arabnews.pk/node/1246341)",
            "University of Exeter: Ecological implications of motorboat noise on coral reef fish communities (ore.exeter.ac.uk/repository/handle/10871/120368)",
            "Ferrier-Pagès et al. (2021): Noise pollution on coral reefs? A yet underestimated threat to coral reef communities (review)",
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
      {
        q: { de: "Welche Schadstoffe stoßen Longtail-Boote aus?", en: "Which pollutants do longtail boats emit?" },
        a: {
          de: "Wie jeder Verbrennungsmotor: Kohlenmonoxid, Stickoxide, flüchtige organische Verbindungen sowie Partikel wie Ruß, Feinstaub (PM2.5) und ultrafeine Partikel, an denen weitere Stoffe wie PAK haften. Wie viel es ist, hängt von Motor, Kraftstoff, Wartung und Last ab. Messwerte für Longtail-Boote in Krabi haben wir nicht gefunden.",
          en: "Like any combustion engine: carbon monoxide, nitrogen oxides, volatile organic compounds and particles such as soot, fine particles (PM2.5) and ultrafine particles to which further substances such as PAHs cling. How much depends on engine, fuel, maintenance and load. We found no measurements for longtail boats in Krabi.",
        },
      },
      {
        q: { de: "Was ist der Unterschied zwischen Diesel- und Benzinabgasen?", en: "What is the difference between diesel and petrol exhaust?" },
        a: {
          de: "Die IARC stuft Dieselabgase als krebserregend für den Menschen ein (Gruppe 1) und Benzinabgase als möglicherweise krebserregend (Gruppe 2B). Beide enthalten Schadstoffe. Dieselmotoren stoßen in der Regel mehr Ruß aus, wenn sie ohne Partikelfilter unter Last laufen.",
          en: "The IARC classifies diesel exhaust as carcinogenic to humans (Group 1) and petrol exhaust as possibly carcinogenic (Group 2B). Both contain pollutants. Diesel engines generally emit more soot when they run under load without a particulate filter.",
        },
      },
      {
        q: { de: "Was ist Ruß (Black Carbon)?", en: "What is soot (black carbon)?" },
        a: {
          de: "Ein Bestandteil des Feinstaubs, der bei unvollständiger Verbrennung entsteht. Nach einem WHO-Bericht von 2012 hängen Schwankungen der Konzentration mit kurzfristigen Gesundheitsfolgen zusammen, und langfristige Belastung mit der Sterblichkeit durch Herz- und Lungenerkrankungen. Ruß kann zudem andere Chemikalien in Lunge und Blut transportieren.",
          en: "A component of fine particles that forms during incomplete combustion. According to a 2012 WHO report, variations in concentration are linked to short-term health effects, and long-term exposure to mortality from cardiovascular and lung disease. Soot can also carry other chemicals into the lungs and blood.",
        },
      },
      {
        q: { de: "Was sind PAK und warum sind sie relevant?", en: "What are PAHs and why do they matter?" },
        a: {
          de: "Polyzyklische aromatische Kohlenwasserstoffe entstehen bei unvollständiger Verbrennung und haften an Partikeln. Einige davon gelten als krebserregend. Welche Mengen Longtail-Boote ausstoßen, wissen wir nicht, da uns keine Messungen vorliegen.",
          en: "Polycyclic aromatic hydrocarbons form during incomplete combustion and cling to particles. Some of them are considered carcinogenic. How much longtail boats emit we do not know, as we have no measurements.",
        },
      },
      {
        q: { de: "Was sind Nanopartikel in Abgasen?", en: "What are nanoparticles in exhaust?" },
        a: {
          de: "Ultrafeine Partikel mit einem Durchmesser unter 100 Nanometern. Nach einer Übersichtsarbeit können sie bis in die Lungenbläschen gelangen und die ersten Abwehrmechanismen der Atemwege umgehen.",
          en: "Ultrafine particles with a diameter below 100 nanometres. According to a review they can reach the alveoli and bypass the airways' first lines of defence.",
        },
      },
      {
        q: { de: "Ist Kohlenmonoxid auf einem offenen Boot ein Problem?", en: "Is carbon monoxide a problem on an open boat?" },
        a: {
          de: "Im Freien verdünnt sich Kohlenmonoxid schnell, die Gefahr besteht vor allem in geschlossenen Räumen. Direkt hinter oder neben einem Motor kann die Konzentration höher sein. Messwerte für Longtail-Boote haben wir nicht.",
          en: "In the open air carbon monoxide dilutes quickly; the danger exists mainly in enclosed spaces. Directly behind or beside an engine the concentration can be higher. We have no measurements for longtail boats.",
        },
      },
      {
        q: { de: "Verdünnt der Wind die Abgase auf dem Meer?", en: "Does the wind dilute the exhaust at sea?" },
        a: {
          de: "Im Freien verdünnen sich Abgase stärker als in einer Stadtstraße. Direkt am Motor, beim Anfahren und im Windschatten des Boots kann die Belastung trotzdem hoch sein. Sitzen Sie möglichst weit vom Motor und gegen den Wind.",
          en: "In the open air exhaust dilutes more than on a city street. Right at the engine, when pulling away and in the boat's wind shadow, exposure can still be high. Sit as far from the engine as possible and into the wind.",
        },
      },
      {
        q: { de: "Wie nah sitzen Gäste am Motor eines Longtail-Boots?", en: "How close do guests sit to the engine of a longtail boat?" },
        a: {
          de: "Bei vielen Longtails steht der Motor offen im Heck oder mittschiffs, die Sitzbänke liegen davor. Der Abstand ist oft gering. Das hängt vom Boot ab: Fragen Sie vor der Fahrt, wo Sie sitzen können.",
          en: "On many longtails the engine stands open at the stern or amidships, with the benches in front of it. The distance is often small. It depends on the boat: ask before the trip where you can sit.",
        },
      },
      {
        q: { de: "Was bedeutet schwarzer Rauch aus dem Auspuff?", en: "What does black smoke from the exhaust mean?" },
        a: {
          de: "Schwarzer Rauch zeigt viel Ruß und unvollständige Verbrennung an, etwa bei hoher Last, schlechter Einstellung oder altem Motor. Das CCAC-Projekt in Bangkok beschreibt viel schwarzen Rauch bei 15 bis 20 Jahre alten Bootsmotoren beim Ablegen und Anlegen.",
          en: "Black smoke indicates a lot of soot and incomplete combustion, for example under high load, with poor tuning or an old engine. The CCAC project in Bangkok describes a lot of black smoke from 15 to 20 year old boat engines when leaving and approaching piers.",
        },
      },
      {
        q: { de: "Wie erkenne ich ein stark qualmendes Boot?", en: "How do I recognise a heavily smoking boat?" },
        a: {
          de: "Beobachten Sie ein Boot am Pier beim Anfahren: Eine dunkle Fahne hinter dem Heck zeigt hohe Rußwerte. Wenn Sie das sehen, wählen Sie ein anderes Boot oder fragen nach einem anderen Motor.",
          en: "Watch a boat at the pier when it pulls away: a dark plume behind the stern indicates high soot levels. If you see that, choose a different boat or ask for a different engine.",
        },
      },
      {
        q: { de: "Wie groß ist das Risiko für Kinder?", en: "How great is the risk for children?" },
        a: {
          de: "Kinder atmen schneller und sind empfindlicher gegenüber Luftschadstoffen. Eine einzelne Fahrt ist kein Krebsrisiko, aber Abgas, Lärm und Hitze können sie stärker belasten. Setzen Sie Kinder weit weg vom Motor und gönnen Sie ihnen Pausen an Land.",
          en: "Children breathe faster and are more sensitive to air pollutants. A single trip is not a cancer risk, but exhaust, noise and heat can burden them more. Seat children far from the engine and give them breaks on land.",
        },
      },
      {
        q: { de: "Was gilt für Schwangere?", en: "What applies to pregnant women?" },
        a: {
          de: "Schwangere gehören zu den Gruppen, die besonders vorsichtig sein sollten. Sprechen Sie vor einer Bootstour mit Ihrer Ärztin oder Ihrem Arzt und wählen Sie ein ruhiges Boot mit Abstand zum Motor.",
          en: "Pregnant women are among the groups who should be especially careful. Talk to your doctor before a boat tour and choose a quiet boat with distance from the engine.",
        },
      },
      {
        q: { de: "Was gilt bei Asthma, COPD oder Herzerkrankungen?", en: "What applies to asthma, COPD or heart disease?" },
        a: {
          de: "Luftschadstoffe können Beschwerden verstärken. Nehmen Sie Ihre Medikamente mit, meiden Sie Abgasstrom und fragen Sie vorab Ihre Ärztin oder Ihren Arzt. Teilen Sie dem Anbieter Ihre Empfindlichkeit vor der Buchung mit.",
          en: "Air pollutants can worsen symptoms. Take your medication, avoid the exhaust stream and ask your doctor beforehand. Tell the operator about your sensitivity before booking.",
        },
      },
      {
        q: { de: "Wie stark ist die Belastung für Bootsführer und Crew?", en: "How great is the exposure for skippers and crew?" },
        a: {
          de: "Sie ist am höchsten, weil sie täglich über Jahre neben dem Motor arbeiten. Die IARC-Einstufung beruht auf Studien zu Menschen mit Belastung am Arbeitsplatz. Messungen bei Crews in Krabi haben wir nicht gefunden.",
          en: "It is highest, because they work next to the engine every day for years. The IARC classification rests on studies of people exposed at work. We found no measurements for crews in Krabi.",
        },
      },
      {
        q: { de: "Kann Bootslärm das Gehör schädigen?", en: "Can boat noise damage hearing?" },
        a: {
          de: "Dauerhaft laute Geräusche können das Gehör belasten. Messwerte für Longtail-Motoren haben wir nicht. Ein offener Motor ist laut und macht Gespräche schwer. Ohrstöpsel können für Kinder und empfindliche Menschen sinnvoll sein.",
          en: "Permanently loud noise can strain hearing. We have no measurements for longtail engines. An open engine is loud and makes conversation difficult. Earplugs can make sense for children and sensitive people.",
        },
      },
      {
        q: { de: "Schaden Longtail-Boote den Korallenriffen?", en: "Do longtail boats damage coral reefs?" },
        a: {
          de: "Motorboote schaden Riffen vor allem durch Festmachen auf Korallen, Anker, Grundberührung und Verkehr. Ein Parkvertreter nannte 2018 Motoren und Festmachen als Ursache der Schäden in der Maya Bay. Das betrifft jedes Motorboot, nicht allein Longtails.",
          en: "Motorboats harm reefs mainly by mooring on coral, anchors, grounding and traffic. A park official named engines and mooring as the cause of damage in Maya Bay in 2018. This applies to every motorboat, not only longtails.",
        },
      },
      {
        q: { de: "Was geschieht mit Kraftstoff und Öl im Meer?", en: "What happens to fuel and oil at sea?" },
        a: {
          de: "Zu Longtail-Booten haben wir keine veröffentlichten Messwerte gefunden. Allgemein schaden ausgelaufener Kraftstoff und Öl Meereslebewesen. Fragen Sie Anbieter, wie sie Betankung, Ölwechsel und Bilgenwasser handhaben.",
          en: "For longtail boats we found no published measurements. In general, spilled fuel and oil harm marine life. Ask operators how they handle refuelling, oil changes and bilge water.",
        },
      },
      {
        q: { de: "Wie wirkt Bootslärm auf Meerestiere?", en: "How does boat noise affect marine animals?" },
        a: {
          de: "Studien zeigen, dass Motorbootlärm das Verhalten und die Fortpflanzung mancher Rifffische beeinflussen kann. Auf Ebene ganzer Fischgemeinschaften sind die Befunde gemischt und hängen von der Art ab. Zu Korallen selbst haben wir keine direkten Messungen gefunden.",
          en: "Studies show that motorboat noise can affect the behaviour and reproduction of some reef fish. At the level of whole fish communities the findings are mixed and species-specific. For corals themselves we found no direct measurements.",
        },
      },
      {
        q: { de: "Wie viele Boote fahren in die Pileh-Bucht?", en: "How many boats enter Pileh Bay?" },
        a: {
          de: "Nach einem Bericht von 2024 im Durchschnitt rund 120 pro Tag, darunter Longtails und Speedboote. Genannt werden Abgase, Lärm und Unfallrisiko. Leere Longtails dürfen seitdem nicht mehr in der Lagune parken oder Gäste aus Speedbooten umsetzen.",
          en: "According to a 2024 report on average about 120 per day, including longtails and speedboats. Exhaust, noise and accident risk are cited. Empty longtails are no longer allowed to park in the lagoon or transfer guests from speedboats since.",
        },
      },
      {
        q: { de: "Ist ein Speedboat umweltfreundlicher als ein Longtail?", en: "Is a speedboat more environmentally friendly than a longtail?" },
        a: {
          de: "Nicht automatisch. Auch ein Speedboat verbrennt Kraftstoff, stößt Abgase aus und macht Lärm. Wir können keinen Umweltvorteil belegen und versprechen ihn nicht. Der Unterschied liegt in der Bauart des Motors und darin, dass das Boot nur Ihrer Gruppe gehört.",
          en: "Not automatically. A speedboat also burns fuel, emits exhaust and makes noise. We cannot prove an environmental advantage and do not promise one. The difference lies in the engine's design and in the fact that the boat belongs to your group only.",
        },
      },
      {
        q: { de: "Gibt es Elektro- oder emissionsärmere Boote in Krabi?", en: "Are there electric or lower-emission boats in Krabi?" },
        a: {
          de: "Technisch gibt es sie. Dass sie für Ausflüge in Krabi breit angeboten werden, haben wir nicht belegt gefunden. Wir bieten keine Elektroboote an. Das CCAC-Projekt in Bangkok rechnet vor, dass moderne Motoren nach Euro VI den PM2.5-Ausstoß um rund 98 Prozent senken könnten.",
          en: "Technically they exist. We have not found it documented that they are widely offered for trips in Krabi. We do not offer electric boats. The CCAC project in Bangkok calculates that modern Euro VI engines could cut PM2.5 emissions by about 98 percent.",
        },
      },
      {
        q: { de: "Was kann ich als Gast für den Meeresschutz tun?", en: "What can I do as a guest to protect the sea?" },
        a: {
          de: "Korallen nicht berühren oder betreten, Fische nicht füttern, keinen Müll hinterlassen, auf Booten mit Bojen statt Ankern am Riff bestehen, riffschonende Sonnencreme verwenden und Regeln der Nationalparks beachten.",
          en: "Do not touch or stand on coral, do not feed fish, leave no waste, insist on boats that use buoys instead of anchors at reefs, use reef-friendly sunscreen and follow the national parks' rules.",
        },
      },
      {
        q: { de: "Gelten in den Nationalparks besondere Regeln für Boote?", en: "Do special rules for boats apply in the national parks?" },
        a: {
          de: "Ja, und sie ändern sich. In der Maya Bay dürfen Boote zum Beispiel nicht in die Bucht einfahren, und es gibt Besucherlimits und eine Schließzeit. Prüfen Sie vor der Fahrt die aktuellen Regeln. Mehr dazu im Guide zu den Öffnungszeiten der Maya Bay.",
          en: "Yes, and they change. In Maya Bay, for example, boats may not enter the bay, and there are visitor limits and a closure period. Check the current rules before the trip. More in the guide on the opening dates of Maya Bay.",
        },
      },
      {
        q: { de: "Wie wähle ich ein verantwortungsvolles Boot?", en: "How do I choose a responsible boat?" },
        a: {
          de: "Achten Sie auf Motorart und Alter, Abstand zum Motor, sichtbare Rauchfahne, Gruppengröße, Sicherheitsausrüstung, Bojen statt Anker und den Umgang mit Kraftstoff, Öl und Müll. Fragen Sie nach, bevor Sie buchen.",
          en: "Look at engine type and age, distance from the engine, visible smoke, group size, safety equipment, buoys instead of anchors and the handling of fuel, oil and waste. Ask before you book.",
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
