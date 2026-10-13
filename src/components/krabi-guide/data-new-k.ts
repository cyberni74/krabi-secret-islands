import { IMG } from "../secret-islands/content";
import type { GuideArticleInput } from "./types";

/**
 * New guide articles, batch K: history / culture pillar "Krabi history and coast" (from the owner's draft, rewritten).
 * Fact policy: historical claims only as reported by the cited sources (listed in the last section, incl. their limits);
 * no operator or platform names, no third-party prices, no ratings; our own offer only as "private speedboat, price per boat,
 * up to 5 guests, start in Ao Nang or Krabi Town"; park fee = general sentence. The two historic-looking pictures are
 * AI illustrations and are captioned as such (never presented as archive photos).
 */
const ILLUSTRATION: { de: string; en: string } = {
  de: "KI-generierte Illustration, keine historische Fotografie.",
  en: "AI-generated illustration, not a historical photograph.",
};

export const NEW_ARTICLES_K: GuideArticleInput[] = [
  {
    slug: "krabi-history-coast-from-trading-world-to-boat-tours",
    category: "insider",
    short: { de: "Geschichte & Küste", en: "History & coast" },
    primaryKeyword: "Krabi Geschichte",
    keywords: [
      "Krabi Geschichte",
      "Krabi Küste Geschichte",
      "Krabi Khlong Thom",
      "Khao Khanap Nam",
      "Krabi Bootstour",
      "Krabi Inselhopping",
      "Phra Nang Höhle Bootstour",
      "Krabi history",
      "Krabi boat tour",
      "Krabi island hopping",
      "Krabi 4 islands tour",
      "Ao Nang boat tour",
    ],
    title: {
      de: "Krabi Geschichte: Von der Handelsküste zur Bootstour",
      en: "Krabi History: From Ancient Trading Coast to Boat Tours",
    },
    metaDescription: {
      de: "Krabi Geschichte und Küste: Archäologie und Seehandel, Kalksteinlandschaft, Gemeinden, Tsunami 2004 und wie Sie heute Bootstouren ab Ao Nang einordnen.",
      en: "Krabi history and coast: archaeology and maritime trade, limestone landscape, local communities, the 2004 tsunami and how to read boat tours from Ao Nang today.",
    },
    h1: {
      de: "Krabi: Geschichte, Küste und Wandel – von der alten Handelswelt zur heutigen Bootstour",
      en: "Krabi: history, coastline and change – from an ancient trading world to today's boat tours",
    },
    intro: {
      de: "Krabi ist mehr als türkisfarbenes Wasser und Kalksteinfelsen. An Thailands Andamanenküste treffen eine lange Besiedlungsgeschichte, Flüsse, Mangroven, Höhlen, Inseln und Seewege zusammen. Wer heute nach einer Krabi Bootstour sucht, folgt einer geografischen Logik, die lange vor dem Tourismus galt: Flüsse und geschützte Buchten verbanden das Hinterland mit der Küste, und die Andamanensee verband Krabi mit weiten Handelsnetzen. Dieser Artikel zeichnet die Geschichte von den archäologischen Funden im Landesinneren bis zur Rolle als Reiseziel nach und ordnet ein, wie Sie Insel- und Bootstouren heute verstehen. Historische Aussagen stützen sich auf die am Ende genannten Quellen und nennen ihre Grenzen.",
      en: "Krabi is much more than turquoise water and limestone cliffs. Thailand's Andaman coast brings together a long history of settlement with rivers, mangroves, caves, islands and sea routes. Anyone searching for a Krabi boat tour today is following a geographical logic that mattered long before tourism: rivers and sheltered bays linked the hinterland to the coast, and the Andaman Sea connected Krabi to far-reaching networks of exchange. This article traces the story from archaeological evidence inland to Krabi's role as a travel destination and shows how to read island and boat trips today. Historical claims rest on the sources listed at the end and state their limits.",
    },
    sections: [
      {
        id: "landscape",
        h2: { de: "Die Landschaft, die Krabis Geschichte prägte", en: "The landscape that shaped Krabi's history" },
        body: {
          de: [
            "Ohne die Landschaft lässt sich Krabis Geschichte nicht erzählen. Die Provinz liegt an der Andamanensee und ist bekannt für steile Kalksteinhügel, vorgelagerte Karstfelsen, Buchten, Flussarme und Mangroven. Das ist nicht nur Kulisse: Die Landschaft bestimmte Wege, Siedlungen und Einkommen. Flüsse brachten Menschen und Waren von der Küste ins Landesinnere, Mangroven und ruhige Wasserwege boten Lebensraum und Zugang, und die Inseln gehörten zu einer Seewelt, die von Booten, Gezeiten und Jahreszeiten geprägt war.",
            "Die markanten Doppelfelsen von Khao Khanap Nam stehen am Krabi-Fluss nahe Krabi Town. Die Tourism Authority of Thailand (TAT) beschreibt sie als etwa 100 Meter hoch und nennt Höhlen mit Stalaktiten und Stalagmiten. In den Höhlen wurden auch menschliche Skelette gefunden. Als mögliche Erklärung nennt die Behörde eine Überflutung, stellt das aber als Theorie dar und nicht als gesicherte Tatsache.",
            "Die heutige Nutzung des Flusses spiegelt diese Geografie. Von einem Pier in Krabi Town fahren Boote zu den Felsen, in die Mangroven und zur Inselgemeinde Ko Klang. Eine Bootstour dort zeigt, wie Stadt, Flussmündung, Mangroven und Nachbargemeinden zusammenhängen. Eine kurze Fahrt am Stadtrand erzählt etwas anderes als ein Tag auf den vorgelagerten Inseln.",
          ],
          en: [
            "It is difficult to tell Krabi's story without talking about its landscape. The province lies on the Andaman Sea and is known for steep limestone hills, offshore karsts, bays, river channels and mangroves. This is not just a beautiful setting: the landscape shaped routes, settlements and livelihoods. Rivers carried people and goods inland from the coast, mangroves and sheltered waterways offered both habitat and access, and the islands formed part of a maritime world shaped by boats, tides and seasons.",
            "The striking twin peaks of Khao Khanap Nam sit beside the Krabi River near Krabi Town. The Tourism Authority of Thailand (TAT) describes them as roughly 100 metres high and notes caves with stalactites and stalagmites. Human skeletons have also been found in the caves. The agency mentions flooding as one possible explanation, but presents it as a theory rather than a confirmed fact.",
            "The river's present-day use still reflects this geography. From a pier in Krabi Town, boats carry visitors to the peaks, into the mangroves and across to the island community of Ko Klang. A boat trip there shows how town, river mouth, mangroves and neighbouring communities fit together. A short journey just outside the city tells a different story from a full-day trip to offshore islands.",
          ],
        },
        figure: {
          src: "/images/book-krabi-boat-karstinseln-luftaufnahme-boote-andamanensee.webp",
          width: 1290,
          height: 857,
          alt: {
            de: "Luftaufnahme von Karstinseln, Sandstränden und Booten auf türkisem Wasser in der Andamanensee bei Krabi",
            en: "Aerial view of karst islands, sandy beaches and boats on turquoise water in the Andaman Sea near Krabi",
          },
        },
      },
      {
        id: "khlong-thom",
        h2: { de: "Archäologie: Khlong Thom und die Geschichte der Perlen", en: "Archaeological evidence: Khlong Thom and the story of the beads" },
        body: {
          de: [
            "Eine der wichtigsten archäologischen Stätten der Region liegt in Khlong Thom, südöstlich von Krabi Town. Das Gebiet heißt Khuan Lukpad oder Khuan Luk Pat, grob übersetzt „Perlenhügel“. Der Name geht auf die vielen Glas- und Steinperlen zurück, die dort gefunden wurden. Laut TAT zeigt das Museum im Wat Khlong Thom außerdem Steinwerkzeuge, Bronzegegenstände, Metallmünzen, Keramik und Schmuckstücke.",
            "Die Bedeutung der Stätte geht weit über eine Sammlung auffälliger Objekte hinaus. Die Archäologin Brigitte Borell beschreibt ein Fundgebiet von etwa 150 Hektar, rund 20 Kilometer im Landesinneren. Der Khlong-Thom-Fluss verband den Ort mit der Andamanensee. Bei Grabungen kamen Produktionsabfälle zum Vorschein, die auf spezialisierte Arbeit mit Zinn, Halbedelsteinen und Glas hinweisen. Khlong Thom war demnach nicht nur Wohnort, sondern auch ein wichtiges Zentrum des Handwerks.",
            "Borell erkennt eine frühe Phase vom 1. Jahrhundert v. Chr. bis zum 2. Jahrhundert n. Chr. und eine spätere vom 3. bis zum 5. Jahrhundert n. Chr. Nach ihrer Darstellung bestätigten Grabungen im Jahr 2008 den Wohn- und Industriecharakter der Siedlung und ihre Rolle als Hafen im Handelsnetz des Indischen Ozeans.",
            "Die Funde deuten auf Verbindungen in mehrere Richtungen: indische Münzen, Siegel mit indischen Schriften, Gemmen im indischen, sassanidischen und römischen Stil und ein Fragment eines chinesischen Spiegels aus der Östlichen Han-Zeit. Sie belegen Austausch und weite Verbindungen. Sie bedeuten nicht, dass jedes Stück direkt vom Herkunftsort nach Krabi kam oder dass es eine einzige, dauerhaft kontrollierte Handelsroute gab. Häfen wie Khlong Thom waren Knoten in einem Netz, in dem Waren, Techniken und Symbole über mehrere Stationen wanderten.",
            "Besonders aufschlussreich sind die kleinen Goldmünzen, die Borell untersucht hat. Frühere Deutungen ordneten einige als römisch oder „indo-römisch“ ein. Borell argumentiert, dass sie wahrscheinlich lokal geprägt wurden. Sie weist auch auf eine Grenze hin: Die drei diskutierten Münzen stammen nicht aus einer kontrollierten Grabung. Allein können sie weder ein genaues Datum noch die vollständige Geschichte der Stätte belegen. Zusammen mit Produktionsabfällen und anderen Funden ergänzen sie aber das Bild von Khlong Thom als frühem Handels- und Produktionszentrum.",
            "Krabis Geschichte begann also nicht mit den Strandurlaubern. Lange vor Fähren und Ausflugsbooten gehörte die Region zu einer Seewelt. Khlong Thom zeigt, dass die Küste nicht am Strand endete: Flüsse, Werkstätten und Häfen verbanden das Hinterland mit dem Meer. Heutiges Inselhopping dient dem Vergnügen und nicht dem Warentransport, aber es beruht auf derselben Verbindung von Land und Wasser.",
          ],
          en: [
            "One of the region's most important archaeological sites lies in Khlong Thom, southeast of Krabi Town. The area is known as Khuan Lukpad or Khuan Luk Pat, roughly translated as \"Bead Mound\". The name refers to the many glass and stone beads discovered there. According to the TAT, the museum at Wat Khlong Thom also displays stone tools, bronze objects, metal coins, pottery and ceramic fragments, and decorative pieces.",
            "The site's significance goes far beyond a collection of striking objects. Archaeologist Brigitte Borell describes a find area of about 150 hectares, roughly 20 kilometres inland. The Khlong Thom River connected the site with the Andaman Sea. Excavations uncovered manufacturing debris that points to specialised work in tin, semiprecious stones and glass. This suggests that Khlong Thom was not only a place where people lived, but also an important centre of craft production.",
            "Borell identifies an early phase from the first century BCE to the second century CE, followed by a later phase from the third to the fifth centuries CE. In her account, excavations in 2008 confirmed the settlement's residential and industrial character, as well as its role as a port connected to Indian Ocean trade networks.",
            "Finds point to connections in more than one direction. They include Indian coins, seals bearing Indian scripts, engraved gems in Indian, Sasanian and Roman styles, and a fragment of a Chinese mirror from the Eastern Han period. These objects are evidence of exchange and far-reaching connections. They do not mean that every item travelled directly from its place of origin to Krabi, or that a single, permanently controlled trade route existed. Ports such as Khlong Thom were nodes in a network through which goods, techniques and symbols moved by way of multiple stops.",
            "The small gold coins studied by Borell are especially revealing. Earlier interpretations had classified some examples as Roman or \"Indo-Roman\". Borell argues instead that they were probably locally produced. She also points out an important limitation: the three coins discussed in her paper were not recovered from a controlled excavation context. On their own, they cannot establish a precise date or prove the complete history of the site. Considered alongside production debris and other finds, however, they add to the picture of Khlong Thom as an early centre of trade and production.",
            "Krabi's history, then, did not begin with the rise of beach holidays. Long before today's ferries and excursion boats, the region was part of a maritime world. Khlong Thom shows that the coast did not end at the beach: rivers, workshops and ports linked the hinterland with the sea. Today's island hopping has a different purpose, leisure rather than the movement of goods, but it still depends on the same basic connection between land and water.",
          ],
        },
        figure: {
          src: "/images/book-krabi-boat-historisches-fischerdorf-kalksteinfelsen-illustration.webp",
          width: 1290,
          height: 853,
          alt: {
            de: "Illustration eines Fischerdorfs mit Strohdachhütten und Holzbooten am Strand vor Kalksteinfelsen an der Andamanenküste",
            en: "Illustration of a fishing village with thatched huts and wooden boats on the beach in front of limestone cliffs on the Andaman coast",
          },
          caption: ILLUSTRATION,
        },
      },
      {
        id: "caves-cliffs",
        h2: { de: "Höhlen, Felsen und Spuren menschlichen Lebens", en: "Caves, cliffs and traces of human life" },
        body: {
          de: [
            "Khao Khanap Nam ist nicht der einzige Ort, an dem Felsformationen Spuren menschlicher Geschichte bewahren. Höhlen boten Schutz und Zugang zur Umgebung. Die TAT berichtet von Skeletten in den Höhlen, doch ohne weitere archäologische Belege sollten aus diesem Fund weder ein genaues Datum noch eine endgültige Erklärung abgeleitet werden.",
            "Auch die Küste südlich der Stadt ist von Felsen und Höhlen geprägt. Rund um Railay und Phra Nang treffen natürliche Höhlen, Strände und lokale religiöse Bedeutung aufeinander. Heute führt eine Bootstour zur Phra Nang Cave Beach viele Besucher an einen Ort, den sie vor allem als Strand erleben. Ein historischer Blick verlangt aber auch Respekt vor der lokalen Nutzung und Bedeutung der Landschaft. Nicht jeder Ort ist einfach eine Touristenattraktion.",
            "Die Felsen bestimmen auch, wie man vorankommt. Wo steile Kalksteinwände und Inseln Landwege unterbrechen, werden Boote zur praktischen Verbindung. Die Fahrt von Ao Nang zur Halbinsel Railay zeigt, wie ein Verkehrsmittel Teil des Reiseerlebnisses geworden ist. Die TAT beschreibt Ao Nang als wichtigen Ausgangspunkt für Bootsfahrten zu nahen Inseln und zu den Stränden von Phra Nang und Railay.",
          ],
          en: [
            "Khao Khanap Nam is not the only place where the region's rock formations hold traces of human history. Caves can provide both shelter and access to the surrounding landscape. The TAT reports human skeletons in the caves, but without further archaeological evidence, neither a precise date nor a definitive explanation should be inferred from that discovery alone.",
            "The coast south of town is also shaped by cliffs and caves. Around Railay and Phra Nang, natural caves, beaches and local religious meaning meet. Today, a boat trip to Phra Nang Cave Beach takes visitors to a place many experience primarily as a beach. A historical perspective, however, also calls for respect for the local uses and significance of the landscape. Not every place is simply a tourist attraction.",
            "The cliffs have also shaped how people get around. Where steep limestone walls and islands interrupt overland routes, boats become practical connections. The journey from Ao Nang to the Railay peninsula shows how a form of transport has become part of the travel experience itself. The TAT describes Ao Nang as a major starting point for boat trips to nearby islands and to the beaches of Phra Nang Cape and Railay.",
          ],
        },
      },
      {
        id: "communities-tourism",
        h2: { de: "Vom regionalen Leben zum Reiseziel", en: "From regional lifeways to a travel destination" },
        body: {
          de: [
            "Krabis Wandel zum internationalen Reiseziel hat ältere Lebensweisen nicht einfach ersetzt. Fischerei, Landwirtschaft, Handwerk, lokale Märkte und Nachbarschaftsnetze bestehen neben Hotels, Restaurants und Tourveranstaltern. An manchen Orten lässt sich der Alltag der Gemeinden aus der Nähe erleben. Die TAT hebt Ban Ko Klang hervor, eine Inselgemeinde in einem Mangrovengebiet, in der traditioneller Bootsbau und Handwerk zum Gemeindeleben gehören. Laem Sak beschreibt sie als Gemeinde, in der thailändisch-buddhistische, thailändisch-muslimische und thailändisch-chinesische Traditionen zusammentreffen.",
            "Diese Beispiele erinnern daran, dass sich Krabi nicht auf eine Kultur oder Lebensweise reduzieren lässt. Die Küste war lange ein Treffpunkt. Religiöse, sprachliche und wirtschaftliche Unterschiede gehören zur Vielfalt der Region. Wer nur Inseln abhakt, sieht nur die Oberfläche. Ein Abstecher in die Stadt, auf einen Markt oder in eine Gemeinde erweitert den Blick.",
            "Mit wachsenden Besucherzahlen veränderte sich auch die Rolle kleiner Piere und Strände. Ao Nang wurde zum zentralen Ausgangspunkt für Inseltransfers und Ausflüge. Von dort führen Routen nach Railay, zu nahen Inseln und weiteren Zielen der Provinz. Was tatsächlich möglich ist, hängt von Jahreszeit, Wetter, Abfahrtsort, Regeln der Nationalparks und den Bedingungen am Tag ab.",
          ],
          en: [
            "Krabi's transformation into an international destination did not simply replace older ways of life. Fishing, farming, crafts, local markets and neighbourhood networks exist alongside hotels, restaurants and tour businesses. In some places, visitors can still get a close look at everyday community life. The TAT highlights Ban Ko Klang, an island community in a mangrove area where community activities include traditional boatbuilding and crafts. It also describes Laem Sak as a community where Thai Buddhist, Thai Muslim and Thai Chinese traditions meet.",
            "These examples are a reminder that Krabi cannot be reduced to one culture or way of life. The coast has long been a meeting place. Religious, linguistic and economic differences are part of the region's diversity. Visitors who only tick off islands may see just the surface. A detour into town, a visit to a market or time spent in a community can broaden the view.",
            "As visitor numbers grew, the role of small piers and beaches changed too. Ao Nang became a central departure point for island transfers and excursions. From there, routes reach Railay, nearby islands and other destinations around the province. What is actually available depends on the season, weather, departure point, national park rules and conditions on the day.",
          ],
        },
        figure: {
          src: "/images/book-krabi-boat-strandleben-1970er-kalksteinfelsen-illustration.webp",
          width: 1152,
          height: 768,
          alt: {
            de: "Illustration eines Strandlagers mit Hängematte, Rucksäcken und Holzbooten vor Kalksteinfelsen, im Stil der 1970er Jahre",
            en: "Illustration of a beach camp with a hammock, backpacks and wooden boats in front of limestone cliffs, in a 1970s style",
          },
          caption: ILLUSTRATION,
        },
      },
      {
        id: "tsunami-2004",
        h2: { de: "Der Tsunami 2004: ein Wendepunkt", en: "The 2004 tsunami: a turning point" },
        body: {
          de: [
            "Der Tsunami vom Dezember 2004 war ein verheerender Wendepunkt für die Andamanenküste. Die Internationale Arbeitsorganisation (ILO) dokumentierte 2005 die menschlichen und wirtschaftlichen Folgen in Krabi und anderen betroffenen Gebieten. Betroffen waren unter anderem Menschen, deren Einkommen vom Strandhandel, von Hotels und anderen Tourismusleistungen abhing. Der Wiederaufbau bedeutete nicht nur, Gebäude und Infrastruktur zu erneuern, sondern auch Arbeitsplätze und Existenzen wiederherzustellen.",
            "Die ILO berichtete von einem starken Rückgang der Hotelbuchungen in den betroffenen Küstengebieten und von Einkommensverlusten im Tourismus. Diese Zahlen beschrieben die Lage in Thailand zu dieser Zeit und dürfen nicht als Opfer- oder Schadensbilanz für Krabi allein gelesen werden. Für Krabis Geschichte zählt vor allem: Der Tourismus war zu einer wichtigen Einkommensquelle vieler Haushalte geworden. Eine Naturkatastrophe konnte daher Küste, Betriebe und persönliches Leben zugleich treffen.",
            "Der Tsunami zeigte auch, wie verletzlich eine Wirtschaft ist, wenn viele lokale Einkommen von einem einzigen Sektor abhängen. Wiederaufbau und die Rückkehr der Besucher waren Teil eines längeren Anpassungsprozesses. Heute gehören Fragen zu Sicherheit, Saisonalität, Umweltbelastung und verantwortungsvollem Reisen zur Debatte über den Tourismus in Krabi.",
          ],
          en: [
            "The December 2004 tsunami was a devastating turning point for the Andaman coast. In 2005, the International Labour Organization (ILO) documented its human and economic effects in Krabi as well as in other affected areas. People whose income depended on beach trading, hotels and other tourism services were among those affected. Recovery was not just a matter of rebuilding structures and infrastructure; it also meant restoring jobs and livelihoods.",
            "The ILO reported a sharp drop in hotel bookings across affected coastal areas and lost income in the tourism sector. These figures described the situation in Thailand at the time and should not be mistaken for a Krabi-specific casualty or damage tally. The larger point for Krabi's history is that tourism had become an important source of income for many households. A natural disaster could therefore affect the coastline, businesses and personal lives at the same time.",
            "The tsunami also showed how vulnerable an economy can be when many local incomes depend on a single sector. Reconstruction and the return of visitors became part of a longer process of adjustment. Today, questions about safety, seasonality, environmental pressure and responsible travel are part of a broader conversation about tourism in Krabi.",
          ],
        },
      },
      {
        id: "krabi-today",
        h2: { de: "Krabi heute: Inseln, Nationalparks und Reisearten", en: "Krabi today: islands, national parks and ways to travel" },
        body: {
          de: [
            "Die TAT nennt unter anderem Phi Phi, Railay, Hong Island und Thale Waek als bekannteste Natur- und Küstenziele der Provinz. Railay ist für Strände und Kalksteinfelsen bekannt. Hong Island liegt im Than-Bok-Khorani-Nationalpark. Thale Waek bezeichnet die Sandbank, die zwischen mehreren Inseln bei Ebbe auftaucht. Diese Ziele sind nicht austauschbar: Jede Route bringt andere Fahrzeiten, Landschaften und Möglichkeiten zum Schwimmen und Schnorcheln.",
            "Die bekannte Krabi 4 Islands Tour verbindet mehrere Ziele im südlichen Küstenbereich und wird meist ab Ao Nang angeboten. Namen und Reihenfolge der Inseln können je nach Tour variieren, das Etikett garantiert also keine identische Route. Wer eine Ao Nang Bootstour plant, prüft Abfahrtsort, Dauer, geplante Stopps, mögliche Parkgebühren und Rückkehrzeit vor der Buchung.",
            "Viele suchen eine Hong Island Tour, wenn sie Lagune, Kalksteinlandschaft und Zeit auf dem Wasser wollen. Die TAT ordnet Ko Hong dem Than-Bok-Khorani-Nationalpark zu und nennt Natur, Schwimmen und Schnorcheln als mögliche Aktivitäten. Eine Schnorcheltour ab Ao Nang kann diese Küsten- und Inselgebiete besuchen, doch Wasserbedingungen und Sicht schwanken. Korallenriffe sind empfindliche Ökosysteme: Berühren, Betreten der Korallen oder Füttern der Fische kann Schaden anrichten.",
            "Eine Phi Phi Tour ab Krabi führt zu einem Archipel mit eigenen Inseln und Buchten. Die TAT nennt Fährverbindungen ab Krabi und die Möglichkeit einer organisierten Tour. Die tatsächliche Fahrzeit hängt von Boot, Pier, Seegang und Fahrplan ab. Wer es schneller möchte, denkt an eine Speedboat-Tour. Schnellere Boote schaffen mehr Strecke in weniger Zeit, sind aber nicht automatisch für jeden am bequemsten. Bei rauer See, bei Neigung zur Seekrankheit oder mit kleinen Kindern kann eine ruhigere Variante besser passen.",
            "Eine Sunset-Tour verbindet Inselstopps mit dem Abendlicht und kann je nach Programm einen Schwimm- oder Schnorchelstopp enthalten. Der Suchbegriff allein legt die Route nicht fest, das gilt auch für jede Krabi Sunset Cruise: Das eine Angebot meint eine einfache Fahrt zum Sonnenuntergang, das andere mehrere Stopps und ein längeres Programm. Entscheidend ist der tatsächliche Ablauf, nicht ein zugkräftiger Titel.",
          ],
          en: [
            "The TAT includes Phi Phi, Railay, Hong Island, Thale Waek and other places among the province's best-known natural and coastal destinations. Railay is known for its beaches and limestone cliffs. Hong Island lies within Than Bok Khorani National Park. Thale Waek refers to the sandbar that appears between several islands as the tide recedes. These destinations are not interchangeable. Each route brings different travel times, scenery and opportunities to swim or snorkel.",
            "The familiar Krabi 4 Islands tour often links several destinations in the southern coastal area and is commonly offered from Ao Nang. The island names and order can vary by trip, so the label does not guarantee an identical itinerary. Anyone considering an Ao Nang boat tour should check the departure point, duration, planned stops, possible park fees and return time before booking.",
            "Travellers often search for a Hong Island tour when they want a lagoon, limestone scenery and time on the water. The TAT places Ko Hong in Than Bok Khorani National Park and lists nature, swimming and snorkelling among possible activities. A snorkelling tour from Ao Nang may visit these coastal and island areas, but water conditions and visibility vary. Coral reefs are fragile ecosystems. Touching or standing on coral, or feeding fish, can cause harm.",
            "A Phi Phi tour from Krabi heads to an archipelago of distinct islands and bays. The TAT notes ferry connections from Krabi and the option of booking an organised tour. Actual journey times depend on the boat, pier, sea conditions and schedule. Travellers looking for a faster route may consider a speedboat tour. Faster boats can cover more distance in less time, but they are not automatically the most comfortable option for everyone. In rough seas, or for people prone to seasickness and families with small children, a slower alternative may be a better fit.",
            "A sunset tour typically combines island stops with evening light and may include a swim or snorkel stop, depending on the itinerary. The search term alone does not define the route. The same is true of a Krabi sunset cruise: one listing may mean a simple ride at sunset, while another may include several stops and a longer programme. The actual itinerary matters more than a catchy title.",
          ],
        },
        figure: {
          src: "/images/ao-nang-boat-tour-schnorcheln-krabi-frau-korallenriff-karstfelsen.webp",
          width: 1152,
          height: 768,
          alt: {
            de: "Frau schnorchelt im klaren Wasser über einem Korallenriff mit Rifffischen, im Hintergrund Kalksteinfelsen bei Krabi",
            en: "Woman snorkelling in clear water over a coral reef with reef fish, limestone cliffs in the background near Krabi",
          },
        },
      },
      {
        id: "boat-types",
        h2: { de: "Longtail, Speedboat oder privates Boot?", en: "Longtail, speedboat or private boat?" },
        body: {
          de: [
            "Das traditionelle Longtail-Boot ist in Krabi nicht nur ein Fotomotiv, sondern auch ein praktisches Mittel für kurze Strecken. Wir fahren ausschließlich mit einem privaten Speedboat für maximal 5 Gäste, die Unterschiede erklärt der Guide zu Longtail und Speedboot. Wer eine Privat-Bootstour ab Ao Nang plant, klärt, ob der Preis pro Boot oder pro Person gilt, wie viele Gäste erlaubt sind, welche Stopps enthalten sind und ob Nationalparkgebühren extra anfallen.",
            "Bei uns gilt der Preis pro Boot für bis zu 5 Gäste. Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr. Diese ist nicht im Tourpreis enthalten und wird vor Ort direkt bei den Rangern bezahlt. Der Start ist in Ao Nang oder Krabi Town möglich.",
            "Auch „Luxus“ ist keine genormte Kategorie. Prüfen Sie Boottyp, Schattenplätze, Verpflegung, Sicherheitsausrüstung und Stornobedingungen. Und vergleichen Sie bei einem günstigen Angebot nicht nur den Preis in der Überschrift: Ein niedriger Preis ist nur dann gut, wenn Ausrüstung, Eintritte und Rückfahrt klar erklärt sind. „Beste Bootstour in Krabi“ ist ein Suchbegriff, kein objektives Ranking. Was „beste“ heißt, hängt davon ab, ob jemand möglichst viele Orte sehen, weniger Zeit auf dem Boot verbringen, in einer kleinen Gruppe reisen oder sein eigenes Tempo wählen möchte.",
            "Auch eine Plankton-Tour bei Nacht taucht als Suchbegriff auf. Biolumineszenz ist ein Naturphänomen, und ob man sie sieht, hängt von Umwelt- und Lichtbedingungen ab. Kein Anbieter kann in jeder Lage ein spektakuläres Erlebnis garantieren. Wer eine solche Fahrt plant, fragt nach realistischen Erwartungen, Umweltregeln und dem Ablauf.",
          ],
          en: [
            "The traditional longtail boat is not just a photo opportunity in Krabi. It is also a practical way to cover short distances. We run only a private speedboat for a maximum of 5 guests; the differences are explained in the guide on longtail versus speedboat. Anyone planning a private boat tour from Ao Nang should clarify whether the price is per boat or per person, how many passengers are allowed, which stops are included and whether national park fees are extra.",
            "With us the price is per boat for up to 5 guests. Some islands and national parks charge an entrance fee. It is not included in the tour price and is paid on site directly to the rangers. The start is possible in Ao Nang or Krabi Town.",
            "\"Luxury\" is not a standardised category either. Check the boat type, shaded areas, food and drinks, safety equipment and cancellation terms. And when you see a cheap offer, do not compare only the headline price: a low-cost ticket is only a good deal if equipment, entry fees and the return journey are clearly explained. \"Best boat tour in Krabi\" is a search term, not an objective ranking. \"Best\" depends on whether someone wants to see as many places as possible, spend less time on the boat, travel with a small group or set their own pace.",
            "A bioluminescent plankton tour also appears as a search phrase. Bioluminescence is a natural phenomenon, and whether it can be seen depends on environmental and light conditions. No operator can guarantee a dramatic sighting in every circumstance. Anyone considering a trip focused on bioluminescence should ask about realistic expectations, environmental rules and what the excursion actually involves.",
          ],
        },
        figure: {
          src: "/images/book-krabi-boat-frau-traditionelles-holzboot-karstinseln.webp",
          width: 1152,
          height: 768,
          alt: {
            de: "Frau liegt entspannt auf einem traditionellen Holzboot mit Blumengirlanden, dahinter türkises Wasser und Karstfelsen",
            en: "Woman relaxing on a traditional wooden boat with flower garlands, turquoise water and karst cliffs behind",
          },
        },
      },
      {
        id: "choose-the-right-trip",
        h2: { de: "Aus der Suche die richtige Tour machen", en: "Turning a search into the right trip" },
        body: {
          de: [
            "Wenn dies Ihre erste Krabi Bootstour ist, beginnen Sie mit drei Fragen. Erstens: Möchten Sie eine kurze Überfahrt oder einen ganzen Tagesausflug? Zweitens: Ist Ihr Hauptziel Railay und Phra Nang, Hong Island oder Phi Phi? Drittens: Fahren Sie gern in einer Gruppe, oder ist Ihnen eine private Abfahrt wichtig?",
            "Eine kurze, flexible Küstenfahrt passt zu einem einfachen Boot für kurze Strecken. Ein organisierter Tagesausflug lohnt sich eher bei mehreren Inselstopps. Wer an einem bestimmten Ziel länger bleiben möchte, prüft, ob die Route dort einen längeren Aufenthalt vorsieht oder nur einen kurzen Fotostopp. Bei der Krabi 4 Islands Tour lohnt es sich besonders, die tatsächliche Liste der Stopps zu lesen, statt anzunehmen, was der Titel verspricht.",
            "In der Regenzeit kann das Wetter die Fahrpläne beeinflussen. Wellen, Sicht, Gezeiten und behördliche Vorgaben können zu kurzfristigen Änderungen führen. Für Nationalparkziele können Regeln oder zeitweise Sperrungen gelten. Bei jeder Bootsfahrt sind flexible Erwartungen ebenso wichtig wie Sonnencreme und Trinkwasser. Schnorchelausrüstung sollte passen und sauber sein, empfindliche Meereslebensräume sollten Sie nicht berühren.",
            "Eine private Buchung ist sinnvoll, wenn eine Gruppe zusammen reist, ihr eigenes Tempo wählen möchte oder eine bestimmte Abfahrtszeit braucht. Sie ist nicht automatisch günstiger. Gruppentouren dagegen machen die Organisation von Boot und Guide einfacher. „Ao Nang Bootstour“ nennt nur den Startpunkt, nicht die Qualität der Tour, und „private Bootstour Ao Nang“ allein verrät nicht, was im Preis enthalten ist.",
          ],
          en: [
            "If this is your first Krabi boat tour, start with three questions. First, do you want a short transfer or a full-day excursion? Second, is your main destination Railay and Phra Nang, Hong Island or Phi Phi? Third, are you happy to join a group, or is a private departure important to you?",
            "A simple boat may suit a short, flexible coastal ride. An organised day trip may make more sense for several island stops. If you want to spend time at one particular destination, check whether the itinerary includes a longer stop or only a brief photo break. With a Krabi 4 Islands tour, it is especially useful to read the list of actual stops rather than assuming what the title includes.",
            "During the rainy season, weather may affect schedules. Waves, visibility, tides and official restrictions can lead to last-minute changes. National park destinations may have rules or temporary closures. For any boat trip, flexible expectations matter just as much as sunscreen and drinking water. Snorkelling gear should fit and be clean, and fragile marine habitats should not be touched.",
            "A private booking can be useful when a group is travelling together, wants to set its own pace or needs a particular departure time. It is not automatically cheaper. Group tours, meanwhile, can make arranging a boat and guide easier. The phrase \"Ao Nang boat tour\" tells you the starting point, but not the quality of the trip. \"Private boat tour Ao Nang\" alone does not reveal what is included in the price either.",
          ],
        },
        tip: {
          de: "Vergleichen Sie Angebote immer anhand von Route, Gruppengröße, Sicherheitsausrüstung, enthaltenen Gebühren, Wetterregel und Erstattung. Bewertungen auf Plattformen helfen, ersetzen aber nicht die Prüfung der konkreten Tour.",
          en: "Always compare offers by route, group size, safety equipment, included fees, weather policy and refund terms. Reviews on platforms can help, but they do not replace checking the details of the specific trip.",
        },
      },
      {
        id: "history-from-the-water",
        h2: { de: "Krabis Geschichte vom Wasser aus lesen", en: "Reading Krabi's history from the water" },
        body: {
          de: [
            "Eine Bootsfahrt wird zur Geschichtsstunde, wenn man auf die Landschaft achtet. Die Funde von Khlong Thom zeigen, wie das Hinterland über Flüsse und Häfen mit dem Meer verbunden war. Bei Khao Khanap Nam erinnern Höhlen und Flussmündung daran, dass die heutige Stadt in einer viel älteren Landschaft liegt. Rund um Ko Klang machen Mangroven und lokale Gemeinden klar, dass sie keine Dekoration sind, sondern Teil einer bewohnten und genutzten Küstenlandschaft.",
            "Heute nutzt die Reiseindustrie Boote für Freizeit, Überfahrten und Inselbesuche. In früheren Jahrhunderten zählten Produktion und Handel mehr. Das sind verschiedene Epochen, aber in beiden waren Wasserwege entscheidend. Diese Sicht verändert den Blick auf eine Inselhopping-Route: Sie führt nicht durch eine leere Postkartenlandschaft, sondern durch eine Küstenregion mit archäologischer Tiefe, Alltagsleben und empfindlichen Ökosystemen.",
          ],
          en: [
            "A boat ride can become a history lesson if you pay attention to the landscape. Archaeological finds at Khlong Thom show how the hinterland was connected to the sea through rivers and ports. At Khao Khanap Nam, the caves and river mouth are reminders that today's town sits within a much older landscape. Around Ko Klang, mangroves and local communities make clear that these are not decorative backdrops, but part of a lived-in and actively used coastal environment.",
            "Today's travel industry uses boats for leisure, transfers and island visits. In earlier centuries, production and trade mattered more. These are different periods, but in both, waterways were essential. That perspective changes how you see an island hopping route: it does not pass through an empty postcard landscape, but through a coastal region with archaeological depth, everyday livelihoods and sensitive ecosystems.",
          ],
        },
      },
      {
        id: "sources",
        h2: { de: "Quellen", en: "Sources" },
        body: {
          de: ["Die historischen Aussagen dieses Artikels stützen sich auf diese Quellen. Wo sie Grenzen der Aussagekraft nennen, haben wir sie im Text übernommen."],
          en: ["The historical statements in this article rest on these sources. Where they state limits to their evidence, we have kept them in the text."],
        },
        list: {
          de: [
            "Brigitte Borell, „Gold Coins from Khlong Thom“, Journal of the Siam Society, Bd. 105 (2017)",
            "Tourism Authority of Thailand: Wat Khlong Thom Museum",
            "Tourism Authority of Thailand: Khao Khanap Nam",
            "Tourism Authority of Thailand: „10 Things to Do in Krabi“",
            "Tourism Authority of Thailand: Krabi Province",
            "International Labour Organization: „After the tsunami in Thailand, the tourist industry fights back“, 11. April 2005",
          ],
          en: [
            "Brigitte Borell, \"Gold Coins from Khlong Thom\", Journal of the Siam Society, Vol. 105 (2017)",
            "Tourism Authority of Thailand: Wat Khlong Thom Museum",
            "Tourism Authority of Thailand: Khao Khanap Nam",
            "Tourism Authority of Thailand: \"10 Things to Do in Krabi\"",
            "Tourism Authority of Thailand: Krabi Province",
            "International Labour Organization: \"After the tsunami in Thailand, the tourist industry fights back\", 11 April 2005",
          ],
        },
      },
    ],
    faq: [
      {
        q: { de: "Welche archäologische Stätte ist in Krabi am wichtigsten?", en: "What is Krabi's most important archaeological site?" },
        a: {
          de: "Khlong Thom südöstlich von Krabi Town, auch Khuan Lukpad („Perlenhügel“) genannt. Nach der Archäologin Brigitte Borell war es eine Siedlung und ein Hafen mit Handwerk für Zinn, Halbedelsteine und Glas, verbunden mit dem Handelsnetz des Indischen Ozeans.",
          en: "Khlong Thom southeast of Krabi Town, also called Khuan Lukpad (\"Bead Mound\"). According to archaeologist Brigitte Borell it was a settlement and port with craft production in tin, semiprecious stones and glass, connected to the Indian Ocean trade network.",
        },
      },
      {
        q: { de: "Was ist Khao Khanap Nam?", en: "What is Khao Khanap Nam?" },
        a: {
          de: "Ein Paar Kalksteinfelsen am Krabi-Fluss bei Krabi Town, laut TAT etwa 100 Meter hoch und mit Höhlen. Dort wurden menschliche Skelette gefunden, deren Umstände nicht abschließend geklärt sind.",
          en: "A pair of limestone peaks beside the Krabi River near Krabi Town, about 100 metres high according to the TAT, with caves. Human skeletons were found there; the circumstances are not conclusively explained.",
        },
      },
      {
        q: { de: "Wie wirkte sich der Tsunami 2004 auf Krabi aus?", en: "How did the 2004 tsunami affect Krabi?" },
        a: {
          de: "Die ILO dokumentierte 2005 menschliche und wirtschaftliche Folgen an der Andamanenküste, auch für Menschen, die vom Tourismus lebten. Die Zahlen der ILO beschreiben Thailand insgesamt und nicht Krabi allein.",
          en: "The ILO documented human and economic effects along the Andaman coast in 2005, including for people who depended on tourism. The ILO's figures describe Thailand as a whole, not Krabi alone.",
        },
      },
      {
        q: { de: "Von wo startet eine Bootstour in Krabi?", en: "Where does a boat tour in Krabi start?" },
        a: {
          de: "Die TAT beschreibt Ao Nang als wichtigen Ausgangspunkt für Bootsfahrten zu nahen Inseln, Phra Nang und Railay. Unser privates Speedboat startet in Ao Nang oder Krabi Town.",
          en: "The TAT describes Ao Nang as a major starting point for boat trips to nearby islands, Phra Nang and Railay. Our private speedboat starts in Ao Nang or Krabi Town.",
        },
      },
      {
        q: { de: "Sind die Inseln der 4 Islands Tour immer dieselben?", en: "Are the islands on the 4 Islands tour always the same?" },
        a: {
          de: "Nein. Namen und Reihenfolge der Stopps können je nach Tour variieren. Lesen Sie die Liste der tatsächlichen Stopps statt sich auf den Titel zu verlassen.",
          en: "No. The island names and order of stops can vary by trip. Read the list of actual stops rather than relying on the title.",
        },
      },
      {
        q: { de: "Was kostet eine private Bootstour und was ist enthalten?", en: "What does a private boat tour cost and what is included?" },
        a: {
          de: "Bei uns ab 18.500 THB pro Boot für die 4 Islands, für bis zu 5 Gäste und nicht pro Person. Einige Inseln bzw. Nationalparks verlangen eine Eintrittsgebühr, die nicht im Tourpreis enthalten ist und vor Ort direkt bei den Rangern bezahlt wird.",
          en: "With us from 18,500 THB per boat for the 4 Islands, for up to 5 guests and not per person. Some islands and national parks charge an entrance fee that is not included in the tour price and is paid on site directly to the rangers.",
        },
      },
      {
        q: { de: "Kann man Biolumineszenz garantiert sehen?", en: "Is bioluminescence guaranteed?" },
        a: {
          de: "Nein. Ob man leuchtendes Plankton sieht, hängt von Umwelt- und Lichtbedingungen ab. Kein Anbieter kann es in jeder Lage garantieren.",
          en: "No. Whether you see glowing plankton depends on environmental and light conditions. No operator can guarantee it in every circumstance.",
        },
      },
    ],
    related: [
      "krabi-islands-insider-guide",
      "inselhopping-krabi-guide-andamanensee",
      "krabi-island-hopping-planner",
      "railay-phra-nang-cave",
      "hong-island-krabi",
      "longtail-vs-speedboat-krabi",
      "krabi-national-park-fees-islands",
      "krabi-boat-tours-rainy-season",
      "krabi-bioluminescent-plankton-night-boat-tour",
    ],
    tourIds: ["4islands-sunset", "hong-lagoons", "phi-phi-early-bird"],
    image: IMG.karstAerialBoats,
  },
];
