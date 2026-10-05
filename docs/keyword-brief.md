# Keyword- und Themenbrief: neue Guide-Artikel (Stand 2026-10-05)

Zweck: Grundlage für neue Artikel im Insider Guide (`/krabi-guide`). Es wurde kein Code geändert und nichts committet.

---

## 1. Methodik und Grenzen

**Vorgehen**
- Bestand gelesen: `src/components/krabi-guide/articles.ts` (KEYWORD_MAP) und die `data-*.ts` (Slugs, `related`, `tourIds`) sowie `TOURS` in `src/components/secret-islands/content.ts`.
- Recherche per Websuche (DE, EN, ZH, KO, JA): SERP-Sichtung für Muster wie "Krabi private Bootstour Kosten", "private speedboat charter Krabi price", "Krabi sunset boat tour", "Maya Bay open 2026", "Krabi Flitterwochen", "Krabi seasickness". Gesichtet wurden Treffer von Tripadvisor, Viator, GetYourGuide, Klook, KKday und von Blogs/Operator-Seiten.
- Vorschläge im Stil von Autosuggest/People-Also-Ask wurden aus Titeln und FAQ-Blöcken der SERP-Treffer abgeleitet. Eine echte Google-Autosuggest-Abfrage ist in dieser Umgebung nicht möglich.

**Grenzen (bitte ernst nehmen)**
- Es stand kein Keyword-Tool zur Verfügung (kein Search Console, Ahrefs, Semrush, Google Keyword Planner). **Es gibt keine Suchvolumina in diesem Dokument**, und es wurden keine erfunden.
- Priorität A/B/C ist eine Einschätzung aus drei Kriterien: (1) Buchungsnähe/Intent-Passung zu unseren Touren, (2) erkennbare Wettbewerbsstärke in der SERP (große Portale, starke DE-Blogs), (3) Lücke im eigenen Bestand.
- Viele Webzugriffe (krabitrek.com, hongislandkrabi.com, railayecotour.com, simbaseatrips.com, thaiangler.com, timeout.com) wurden vom Netzwerk-Proxy blockiert. Faktenangaben unten stammen daher aus Suchergebnis-Zusammenfassungen und sind **Sekundärquellen**. Vor dem Schreiben bitte an der Primärquelle prüfen (Liste je Artikel).
- Preise Dritter sind Betreiberangaben aus Suchtreffern, schwanken und dürfen im Artikel nur als grobe Spannen mit Hinweis "je nach Anbieter/Saison" erscheinen.
- Bestandszahl: Beim Zählen wurden **23** Artikel-Slugs gefunden (nicht 24). Falls ein 24. Artikel existiert, bitte Slug gegen die Vorschlagsliste prüfen.

**Harte Rahmenbedingungen für alle neuen Artikel**
- Nicht erwähnen, nicht empfehlen, nicht als Angebot formulieren: Tauchen/Gerätetauchen, Kajak, SUP/Paddles, Unterwasser-Fotografen, Liegeflächen/Sonnendeck-Polster.
- Konkurrenz-SERPs und Reiseplan-Artikel enthalten diese Themen häufig (z. B. 7-Tage-Pläne mit Kajak). Beim Schreiben bewusst weglassen oder neutral als "Landprogramm" ohne Empfehlung behandeln.
- Erlaubt: private Speedboot-Touren, Schnorcheln (Ausrüstung kostenlos, bei Buchung ankreuzen), Schwimmen, Baden, Entspannen, Angeltouren, Night-Glow-Plankton per Speedboat, Sunset/Dinner an Bord (Heck), 4K-Drohnenpaket, Catering 500 THB p. P.
- Preise der eigenen Touren gelten **pro Boot** (max. 5 Gäste), Park-Gebühren sind laut Tour-Daten Teil der Leistung (`INC_PARK`), bitte je Tour in `content.ts` gegenprüfen, bevor es im Artikel steht.

**Wichtiger Fund zum Bestand (Konsistenz)**
- Die Startseite hat bereits einen FAQ-Block "Warum unser Speedboat statt Longtail-Boot?" (`src/components/secret-islands/longtail-faq.ts`, Anker `#longtail-vs-speedboat`). Der neue Vergleichsartikel (Nr. 4) muss dorthin verlinken und eine andere Tiefe/Suchintention bedienen, damit keine Kannibalisierung entsteht.
- `koh-rok-koh-haa` und die Tour `koh-rok-safari`: Laut Suchtreffern sind Koh Rok/Koh Haa jährlich **16. Mai bis 31. Oktober** gesperrt (Quelle unten). Prüfen, ob Buchungskalender und Artikel das berücksichtigen.

---

## 2. Priorisierte Artikelliste (11 neue Artikel)

Alle Slugs sind in den vorhandenen Daten **nicht vergeben** (gegen die 23 Bestandsslugs geprüft). Alle `related`-Slugs und `tourIds` unten existieren.

Existierende Tour-IDs: `4islands-sunset`, `plankton-night`, `sunset-glow-combo`, `hong-lagoons`, `phang-nga-uncharted`, `phi-phi-early-bird`, `koh-rok-safari`, `james-bond-bay`, `railay-escape`, `sunset-dinner`, `family-sandbars`, `fishing-reef-half`, `fishing-deep-sea`, `fishing-night-squid`, `fishing-catch-cook`.

### Übersicht

| # | Slug | Kat. | Primär DE | Primär EN | Intent | Prio |
|---|------|------|-----------|-----------|--------|------|
| 1 | `private-boat-charter-krabi-cost` | pillar | Private Bootstour Krabi Kosten | private boat tour Krabi cost | comm/trans | A |
| 2 | `krabi-honeymoon-proposal-private-boat` | insider | Flitterwochen Krabi Bootstour | Krabi honeymoon private boat | comm/trans | A |
| 3 | `krabi-sunset-boat-tour-private` | insider | Sunset Tour Krabi privat | Krabi sunset boat tour private | comm/trans | A |
| 4 | `longtail-vs-speedboat-krabi` | pillar | Longtail oder Speedboot Krabi | longtail vs speedboat Krabi | comm | A |
| 5 | `krabi-national-park-fees-islands` | insider | Nationalpark Gebühren Krabi | Krabi national park fees | info | B |
| 6 | `maya-bay-open-closed-dates` | insider | Ist Maya Bay offen | is Maya Bay open | info | B |
| 7 | `krabi-boat-tours-rainy-season` | insider | Krabi Bootstour Regenzeit | Krabi boat tour rainy season | info/comm | B |
| 8 | `krabi-itinerary-3-5-7-days` | pillar | Krabi Reiseplan 5 Tage | Krabi itinerary 5 days | info | B |
| 9 | `krabi-boat-seasickness-tips` | insider | Seekrank Bootstour Krabi | seasick Krabi boat tour | info | B |
| 10 | `ao-nang-vs-railay-where-to-stay` | insider | Ao Nang oder Railay | Ao Nang vs Railay | info | C |
| 11 | `phi-phi-don-vs-phi-phi-leh` | island | Phi Phi Don oder Leh | Phi Phi Don vs Phi Phi Leh | info | C |

Top 5 nach Priorität: 1, 2, 3, 4, 5 (siehe Schlussbericht).

---

### Artikel 1: `private-boat-charter-krabi-cost` (pillar, Prio A)

- **Primärkeyword:** DE "Private Bootstour Krabi Kosten" / EN "private boat tour Krabi cost"
- **Sekundär/Longtail DE:** Krabi Boot privat mieten Preis; Bootscharter Ao Nang; Longtail privat Krabi Preis; private Speedbootcharter Krabi pro Boot; 4 Islands privat Krabi Kosten; Bootstour Krabi Preis pro Person oder pro Boot; Krabi Inselhopping privat lohnt sich
- **Sekundär/Longtail EN:** private boat charter Ao Nang price; Krabi private speedboat price per boat; private longtail Krabi cost; how much to rent a boat in Krabi; 4 islands private tour price Krabi; is a private boat tour worth it Krabi; Krabi speedboat charter hidden costs
- **Intent:** comm/trans. **Prio A:** höchste Buchungsnähe, und wir können als Einziger den Preis pro Boot (11.500–32.000 THB lt. `TOURS`) gegen eine ehrliche Marktspanne einordnen. Die SERP wird von Operatoren und Marktplätzen (Tripadvisor, Viator, GetMyBoat) dominiert, ein ehrlicher Kostenvergleich ist selten.
- **Titel DE (45):** Private Bootstour Krabi: Kosten & Preise 2026
- **Titel EN (43):** Private Boat Tour Krabi: Cost & Prices 2026
- **Meta DE (141):** Was kostet eine private Bootstour in Krabi? Longtail, Speedboot und Premium-Charter im Vergleich: Preis pro Boot, Nebenkosten und Leistungen.
- **Meta EN (143):** How much does a private boat tour in Krabi cost? Longtail, speedboat and premium charter compared: price per boat, extras and what is included.
- **H1:** Was kostet eine private Bootstour in Krabi? / How much does a private boat tour in Krabi cost?
- **Gliederung (H2):**
  1. Kurzantwort: Preis pro Boot statt pro Person
  2. Drei Bootsklassen: Longtail, Standard-Speedboot, Premium-Speedboot (max. 5 Gäste)
  3. Typische Preisspannen am Markt (nur grob, mit Quellenhinweis, "je nach Saison")
  4. Was im Preis meist fehlt: Nationalpark-Gebühr, Essen, Schnorchelausrüstung, Transfer
  5. Was bei uns enthalten ist (Tourtabelle mit Preis pro Boot, Dauer, Startzeit)
  6. Gruppengröße rechnen: ab wie vielen Personen ist privat günstiger als Gruppentour?
  7. Saison und Verhandeln: Hoch- vs. Nebensaison, Anfragefrist
  8. Checkliste: Fragen an jeden Anbieter (Motoren, Sicherheitsausrüstung, Lizenz, Absageregel)
  9. Zusatzoptionen: Catering 500 THB p. P., 4K-Drohnenpaket
- **FAQ (Wortlaut):**
  - Was kostet eine private Bootstour in Krabi? / How much does a private boat tour in Krabi cost?
  - Ist eine private Longtail-Tour günstiger als ein Speedboot? / Is a private longtail cheaper than a speedboat in Krabi?
  - Gilt der Preis pro Person oder pro Boot? / Is the Krabi private boat price per person or per boat?
  - Sind Nationalpark-Gebühren im Preis enthalten? / Are national park fees included in a private boat charter?
  - Lohnt sich ein privates Boot für 2 Personen? / Is a private boat worth it for two people?
  - Wie früh sollte ich eine private Bootstour in Krabi buchen? / How far in advance should I book a private boat in Krabi?
- **Interne Verlinkung:** related: `krabi-island-hopping-planner`, `avoid-crowds-krabi-timing`, `best-time-to-visit-krabi`, `krabi-islands-insider-guide`. tourIds: `4islands-sunset`, `hong-lagoons`, `railay-escape`. Zusätzlich im Text auf Artikel 4 (`longtail-vs-speedboat-krabi`) und 5 (`krabi-national-park-fees-islands`) verlinken, sobald sie live sind.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Marktspannen privat Longtail/Speedboot (laut Suchtreffern z. B. Longtail ganztägig ca. 4.500–6.500 THB, Standard-Speedboot ab ca. 9.900 THB; Betreiberangaben, stark schwankend): https://www.railayecotour.com/en/blog/private-boat-rental-krabi, https://viagotour.com/en/thailand/ao-nang/tours/4-islands-private-speedboat/, https://kohtourkrabi.com/tours/private-4-island-tour-speedboat/ (Seiten nicht abrufbar, Angaben aus Suchtreffern).
  - Dass Parkgebühren/Essen/Schnorchelgear bei Wettbewerbern oft extra sind (Quellen oben).
  - Unsere eigenen Leistungen je Tour (`content.ts` `includes`, `price`, `hours`) und ob Park-Gebühren bei **allen** Touren inklusive sind.
  - Empfehlung: keine konkreten Konkurrenz-Preise nennen, sondern "grob 3.500–13.000 THB je nach Bootsklasse und Dauer (Stand Okt. 2026, Betreiberangaben)" nur nach Gegenprüfung.

---

### Artikel 2: `krabi-honeymoon-proposal-private-boat` (insider, Prio A)

- **Primärkeyword:** DE "Flitterwochen Krabi Bootstour" / EN "Krabi honeymoon private boat"
- **Sekundär/Longtail DE:** Heiratsantrag Krabi Boot; Heiratsantrag Thailand Strand Sonnenuntergang; romantische Bootstour Krabi; Krabi Paare Tipps; Krabi Sunset Dinner privat; Krabi Hochzeitstag Überraschung; Krabi leuchtendes Plankton romantisch
- **Sekundär/Longtail EN:** Krabi proposal ideas; propose on a boat Thailand; romantic things to do in Krabi for couples; Krabi honeymoon activities; private sunset dinner Krabi; anniversary boat trip Krabi; Krabi couples boat tour
- **Intent:** comm/trans. **Prio A:** emotionale, hochpreisige Zielgruppe, passt exakt zu `sunset-dinner`, `sunset-glow-combo`, `plankton-night`; die SERP ist von Hotel-/Paketseiten und Listicles geprägt (GetYourGuide "romantic things to do", honeymoon-Portale), echte private Boots-Erfahrungsberichte fehlen.
- **Titel DE (51):** Flitterwochen Krabi: Romantische Bootstour & Antrag
- **Titel EN (51):** Krabi Honeymoon Boat Trip: Romantic Private Charter
- **Meta DE (149):** Flitterwochen oder Heiratsantrag in Krabi: Sunset-Dinner an Bord, leuchtendes Plankton und Drohnenfotos – so planen Sie Ihren privaten Speedboot-Tag.
- **Meta EN (142):** Honeymoon or proposal in Krabi: sunset dinner on board, glowing plankton and 4K drone photos – how to plan your private speedboat day for two.
- **H1:** Flitterwochen und Heiratsantrag in Krabi: Ihr privates Boot für zwei / Honeymoon and proposal in Krabi: your private boat for two
- **Gliederung (H2):**
  1. Warum ein privates Boot für Paare (kein Gruppenboot, eigener Zeitplan)
  2. Die drei romantischen Tour-Varianten: Sunset-Dinner (`sunset-dinner`), Sunset + Night Glow (`sunset-glow-combo`), nur Plankton (`plankton-night`)
  3. Der Heiratsantrag auf dem Boot: Timing, Ort (Heck bei Sonnenuntergang), Absprache mit Crew, Ring-Sicherheit auf dem Wasser
  4. Drohnenpaket 4K: Was bei der Überraschung gefilmt werden kann (Regeln für Drohnen beachten)
  5. Beste Zeit und Mondphase (Plankton am dunkelsten um Neumond, Saison laut Quellen Nov–Mai)
  6. Praktisches: Kleidung, Rutschfestes, Wetter-Plan B, Seegang
  7. Catering/Dinner an Bord: was wir anbieten (Catering 500 THB p. P.), Wunsch-Anlässe vorab melden
  8. Flitterwochen-Ablauf Krabi: Tag 1-3 mit einem Boots-Highlight (Verweis auf Reiseplan, sobald live)
- **FAQ (Wortlaut):**
  - Wo kann man in Krabi einen Heiratsantrag machen? / Where can you propose in Krabi?
  - Kann ich auf einem privaten Boot in Krabi einen Antrag machen? / Can I propose on a private boat in Krabi?
  - Was ist die romantischste Tour in Krabi für Paare? / What is the most romantic tour in Krabi for couples?
  - Wann ist die beste Zeit für Flitterwochen in Krabi? / When is the best time for a honeymoon in Krabi?
  - Kann man in Krabi leuchtendes Plankton sehen? / Can you see glowing plankton in Krabi?
  - Gibt es Dinner an Bord bei Sonnenuntergang? / Is there dinner on board at sunset?
- **Interne Verlinkung:** related: `krabi-bioluminescent-plankton-night-boat-tour`, `koh-poda-guide`, `krabi-photo-drone-spots`, `railay-phra-nang-cave`. tourIds: `sunset-dinner`, `sunset-glow-combo`, `plankton-night`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Plankton-Saison und Mondphase (Quellen nennen Nov–April/Mai, rund um Neumond): https://www.krabi-tourism.com/krabibioluminescentplankton, https://krabinature.com/best-place-in-krabi-to-see-glowing-bioluminescent-plankton/, https://www.holidify.com/places/krabi/bioluminescent-plankton-boat-tour--sightseeing-1271714.html (Sekundärquellen, Eigenerfahrung ergänzen).
  - Drohnenregeln Thailand (Registrierung/Genehmigung): im Artikel `krabi-photo-drone-spots` bereits behandelt, dort Stand prüfen und nur verlinken.
  - Welche Leistungen `sunset-dinner` und `sunset-glow-combo` tatsächlich enthalten (`content.ts` Zeilen ca. 467 und 622).
  - **Nicht verwenden:** die Kundenstimme zum Antrag in Koh Roi (`content.ts` Zeile ca. 955) nicht als Beleg zitieren, solange nicht bestätigt ist, dass sie echt ist.
  - Konkurrenzbeispiele (nur zur Einordnung): https://www.getyourguide.com/explorer/krabi-ttd2174/romantic-things-to-do-in-krabi/, https://www.tripadvisor.com/Attractions-g297927-Activities-zft12159-Krabi_Town_Krabi_Province.html

---

### Artikel 3: `krabi-sunset-boat-tour-private` (insider, Prio A)

- **Primärkeyword:** DE "Sunset Tour Krabi privat" / EN "Krabi sunset boat tour private"
- **Sekundär/Longtail DE:** Sonnenuntergang Krabi Boot; Sunset Cruise Krabi; Ao Nang Sonnenuntergang Boot; Krabi Sunset Dinner Boot; Sonnenuntergang Railay Phra Nang; Krabi Sunset Plankton Tour; Krabi Abendtour Speedboot
- **Sekundär/Longtail EN:** Krabi sunset cruise; Ao Nang sunset boat tour; best sunset spot Krabi; private sunset tour Ao Nang; sunset and bioluminescent plankton Krabi; Krabi sunset dinner cruise; Hong Island sunset tour
- **Intent:** comm/trans. **Prio A:** Sunset-Touren sind ein bestehendes Kernprodukt (3 Touren), die SERP ist voll mit Gruppen-Cruises (Junk-Boote, Longtail, Buffet) und Plattformen. Ein klarer "privat vs. Gruppe"-Blickwinkel ist eine echte Lücke.
- **Titel DE (43):** Sunset-Tour Krabi: Privat mit dem Speedboot
- **Titel EN (47):** Krabi Sunset Boat Tour: Private Speedboat Guide
- **Meta DE (140):** Sonnenuntergang vom Wasser: Beste Zeiten, Routen und Spots für eine private Sunset-Tour ab Ao Nang – mit Dinner an Bord und Plankton-Option.
- **Meta EN (144):** Watch the sunset from the water: best times, routes and spots for a private sunset tour from Ao Nang – with dinner on board and plankton option.
- **H1:** Sunset-Tour in Krabi: Der Sonnenuntergang vom privaten Speedboot / Krabi sunset boat tour: the sunset from a private speedboat
- **Gliederung (H2):**
  1. Warum der Sonnenuntergang vom Wasser anders ist (Westküste, Inselsilhouetten)
  2. Beste Spots: Ao Nang, Railay/Phra Nang, Poda, Tubkaek-Richtung Hong (laut SERP; Eigenwissen ergänzen)
  3. Startzeiten und Ablauf unserer Sunset-Touren (13:00 / 15:30 Start, Vergleichstabelle)
  4. Sonnenuntergangszeit je Saison und Tide-Einfluss (Verweis `krabi-tides-guide`)
  5. Mit Dinner an Bord (Heck) oder mit Plankton danach
  6. Gruppen-Sunset-Cruise vs. privat: Ehrlicher Vergleich
  7. Wetter, Wolken, Plan B: wann ein Sunset ausfällt
  8. Fotografieren: Goldene Stunde, 4K-Drohne
- **FAQ (Wortlaut):**
  - Wo sieht man in Krabi den schönsten Sonnenuntergang? / Where is the best sunset in Krabi?
  - Wann geht die Sonne in Krabi unter? / What time is sunset in Krabi?
  - Lohnt sich eine Sunset-Bootstour in Krabi? / Is a sunset boat tour in Krabi worth it?
  - Kann man Sonnenuntergang und leuchtendes Plankton kombinieren? / Can you combine sunset and bioluminescent plankton in Krabi?
  - Wie lange dauert eine Sunset-Tour ab Ao Nang? / How long is a sunset tour from Ao Nang?
- **Interne Verlinkung:** related: `koh-poda-guide`, `railay-phra-nang-cave`, `krabi-bioluminescent-plankton-night-boat-tour`, `krabi-tides-guide`. tourIds: `4islands-sunset`, `sunset-dinner`, `sunset-glow-combo`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Sonnenuntergangszeiten Krabi je Monat (bitte aus einer Primärquelle, z. B. timeanddate.com, nicht aus dem Gedächtnis; nur grobe Spanne nennen).
  - Spot-Angaben (Ao Nang, Railay, Phra Nang, Tubkaek): https://krabisunsetcruises.com/where-to-watch-the-sunset-aonang-and-krabis-best-spots/, https://gobackpackgo.com/best-sunset-ao-nang/ (Sekundärquellen, Eigenerfahrung ergänzen).
  - Tour-Details aus `content.ts` (Startzeiten, Stopps, Inklusivleistungen).
  - Konkurrenzlage: https://www.getyourguide.com/krabi-l2174/sunset-tours-tc306/, https://www.viator.com/Krabi-tours/Sunset-Cruises/d348-g3-c5638

---

### Artikel 4: `longtail-vs-speedboat-krabi` (pillar, Prio A)

- **Primärkeyword:** DE "Longtail oder Speedboot Krabi" / EN "longtail vs speedboat Krabi"
- **Sekundär/Longtail DE:** Longtail Boot Krabi Erfahrung; Speedboot Krabi privat; Krabi Bootstour Longtail Speedboat Unterschied; Longtail Boot Krabi laut nass; schnellstes Boot Krabi Inseln; Krabi Boot Komfort Hardtop Kabine
- **Sekundär/Longtail EN:** Krabi longtail or speedboat which is better; private longtail vs speedboat Krabi; Krabi 4 islands speedboat or longtail; Krabi speedboat noise; longtail boat Krabi comfort; Krabi boat for seasickness
- **Intent:** comm. **Prio A:** reiner Entscheidungs-Query kurz vor der Buchung; wir haben bereits einen Home-FAQ-Block, der Artikel liefert die ausführliche, indexierbare Tiefe. Wettbewerb: Operator-Blogs (tripthaitour, railayecotour: "Speedboat or Longtail"), Fokus bei denen auf Gruppentouren.
- **Abgrenzung:** `krabi-island-hopping-planner` behandelt die Bootswahl nur als Teil der Planung; dieser Artikel ist der Detailvergleich. Auf `/#longtail-vs-speedboat` verlinken, nicht duplizieren.
- **Titel DE (50):** Longtail oder Speedboot Krabi: Was passt zu Ihnen?
- **Titel EN (47):** Longtail vs Speedboat Krabi: Which One to Book?
- **Meta DE (142):** Longtail oder Speedboot in Krabi? Tempo, Lärm, Komfort, Seegang und Preis im Vergleich – und was eine private Charter für Ihren Tag verändert.
- **Meta EN (146):** Longtail or speedboat in Krabi? Speed, noise, comfort, rough water and price compared – and what a private charter changes for your whole day out.
- **H1:** Longtail oder Speedboot in Krabi: der ehrliche Vergleich / Longtail or speedboat in Krabi: the honest comparison
- **Gliederung (H2):**
  1. Kurzantwort nach Reisetyp (Tabelle)
  2. Longtail: Stärken (Atmosphäre, Flachwasser, Preis) und Grenzen (Lärm, Spritzwasser, Tempo)
  3. Speedboot: Stärken (Reichweite, Tempo, mehr Inseln pro Tag) und Grenzen (Seegang, Gruppenboote mit 30-40 Gästen)
  4. Privat vs. Gruppe: Warum die Gruppengröße wichtiger ist als der Bootstyp
  5. Unser Boot: weißes Hardtop-Kabinenboot, 2x300 PS, max. 5 Gäste, Schatten
  6. Reichweite: welche Ziele nur mit Speedboot sinnvoll sind (Phi Phi, Koh Rok, Phang Nga) und was mit Longtail geht (4 Islands, Railay)
  7. Seegang und Saison (Verweis auf Regenzeit-Artikel)
  8. Entscheidungshilfe: 5 Fragen
- **FAQ (Wortlaut):**
  - Longtail oder Speedboot: was ist besser in Krabi? / Is a longtail or speedboat better in Krabi?
  - Sind Speedboote in Krabi laut und unbequem? / Are speedboats in Krabi loud and uncomfortable?
  - Wird man auf einem Longtail-Boot nass? / Do you get wet on a longtail boat in Krabi?
  - Welches Boot ist besser bei Seekrankheit? / Which boat is better if you get seasick?
  - Wie schnell ist ein Speedboot im Vergleich zum Longtail? / How much faster is a speedboat than a longtail in Krabi?
  - Kann man mit einem Longtail nach Phi Phi fahren? / Can you go to Phi Phi by longtail from Krabi?
- **Interne Verlinkung:** related: `krabi-island-hopping-planner`, `avoid-crowds-krabi-timing`, `best-time-to-visit-krabi`, `krabi-with-kids`. tourIds: `4islands-sunset`, `hong-lagoons`, `phang-nga-uncharted`. Plus Link auf `/#longtail-vs-speedboat`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Bootsdaten (2x300 PS, Hardtop, 4-Takt) aus `COMPARISON` in `content.ts`, nicht aus Fremdquellen.
  - Typische Gruppenbootgrößen und Fahrzeiten (Aussagen "30-40 Personen" stammen aus `COMPARISON`; als eigene Beobachtung kennzeichnen).
  - Marktüberblick: https://www.tripthaitour.com/blog/krabi-4-island-tour, https://www.railayecotour.com/en/blog/speedboat-krabi (Sekundärquellen).
  - Keine Aussagen wie "Longtails sind unsicher" ohne Beleg; sachlich bleiben.

---

### Artikel 5: `krabi-national-park-fees-islands` (insider, Prio B)

- **Primärkeyword:** DE "Nationalpark Gebühren Krabi" / EN "Krabi national park fees"
- **Sekundär/Longtail DE:** Hong Island Eintritt; Phi Phi Eintritt Nationalpark 400 Baht; Nationalpark-Gebühr Phang Nga Bucht; Eintritt Inseln Krabi Ausländer; Nationalparkgebühr Bootstour inklusive; Koh Rok Eintritt
- **Sekundär/Longtail EN:** Hong Island national park fee; Phi Phi park fee 400 baht; Phang Nga Bay park fee; 4 islands park fee Krabi; Krabi national park fee included in tour; foreigner vs Thai park fee
- **Intent:** info. **Prio B:** sehr konkreter, häufig gestellter Kostenfrage-Query vor jeder Buchung und stützt unser Verkaufsargument "Gebühren inklusive". Aber: Betragsangaben ändern sich und weichen zwischen Quellen ab (200/300/400 THB), das erfordert Pflegeaufwand.
- **Titel DE (46):** Nationalpark-Gebühren Krabi: Was Inseln kosten
- **Titel EN (45):** Krabi National Park Fees: Island Entry Prices
- **Meta DE (144):** Was kosten die Nationalparks rund um Krabi? Gebühren für Hong, Phi Phi, Phang Nga und Co., wer sie zahlt und warum die Beträge abweichen können.
- **Meta EN (143):** What do the national parks around Krabi charge? Fees for Hong, Phi Phi, Phang Nga and more, who pays them and why the amounts can differ a lot.
- **H1:** Nationalpark-Gebühren in Krabi: Was Inselbesuche wirklich kosten / Krabi national park fees: what island visits really cost
- **Gliederung (H2):**
  1. Kurzantwort: Es gibt keine eine einheitliche Gebühr (je Park/Gebiet)
  2. Welche Inseln gehören zu welchem Nationalpark (Tabelle)
  3. Gebührenspannen laut Quellen für Ausländer (Erwachsene/Kinder), mit Stand-Datum
  4. Warum Zahlen abweichen (Park-Wechsel, Ausländer vs. Thai, Neufestsetzung)
  5. Barzahlung, Quittung, wer zahlt (Anbieter vs. Gast)
  6. Was bei uns inklusive ist (je Tour prüfen)
  7. Sperrzeiten und Regeln (Maya Bay, Koh Rok, Verweis auf Maya-Bay-Artikel)
  8. Checkliste vor der Buchung
- **FAQ (Wortlaut):**
  - Wie viel kostet der Nationalpark-Eintritt auf den Inseln bei Krabi? / How much is the national park fee for the islands near Krabi?
  - Muss man für Hong Island Eintritt bezahlen? / Do you pay an entrance fee for Hong Island?
  - Warum kostet Phi Phi mehr als die 4 Islands? / Why is the Phi Phi park fee higher than the 4 Islands?
  - Sind die Gebühren im Tourpreis enthalten? / Are park fees included in the tour price?
  - Kann man mit Karte bezahlen? / Can you pay national park fees by card?
- **Interne Verlinkung:** related: `phi-phi-maya-bay-early-morning`, `hong-island-krabi`, `boat-day-packing-list-etiquette`, `james-bond-island-phang-nga-bay`. tourIds: `hong-lagoons`, `phi-phi-early-bird`, `james-bond-bay`.
- **Fakten, die vor dem Schreiben belegt werden müssen (kritisch, Zahlen widersprechen sich):**
  - Hong Island ca. 300 THB Erw. / 150 THB Kind (Quelle laut Suchtreffer, Barzahlung): https://hongislandkrabi.com/plan-your-trip/national-park-fees
  - Phi Phi/Maya Bay 400 THB Erw. / 200 THB Kind: https://www.lovephukettours.com/maya-bay-travel-tips.html, https://beachverdict.com/beaches/thailand/maya-bay
  - 4 Islands: andere Quellen nennen 200 THB Erw. / 100 THB Kind, wieder andere 400 THB (Widerspruch! Primärquelle: Department of National Parks, https://www.dnp.go.th, Gebührenliste prüfen).
  - Bestehender Bestandstext `data-movies.ts` (ca. Zeile 323) nennt 300 THB (Phang Nga) und 400 THB (Maya Bay); bitte konsistent halten.
  - Ob und wie Park-Gebühren in **jeder** unserer Touren enthalten sind.
  - Sammel-Quelle: https://krabitrek.com/articles/krabi-national-park-fees.php (nicht abrufbar, nur Suchsnippet).

---

### Artikel 6: `maya-bay-open-closed-dates` (insider, Prio B)

- **Primärkeyword:** DE "Ist Maya Bay offen" / EN "is Maya Bay open"
- **Sekundär/Longtail DE:** Maya Bay geöffnet 2026; Maya Bay Schließzeit; Maya Bay Wiedereröffnung 1. Oktober; Maya Bay Regeln Schwimmen; Maya Bay Eintritt; Maya Bay von Krabi aus; Maya Bay Alternative
- **Sekundär/Longtail EN:** Maya Bay closed 2026; Maya Bay reopening date; Maya Bay rules swimming; Maya Bay entry fee 400 baht; Maya Bay time limit; Maya Bay from Krabi; what to do when Maya Bay is closed
- **Intent:** info. **Prio B:** sehr häufige Frage (durch die Wiedereröffnung am 1. Oktober aktuell), aber extrem umkämpft (Portale, Phuket-Anbieter) und thematisch bereits teilweise im Bestandsartikel `phi-phi-maya-bay-early-morning` abgedeckt. Umsetzbar entweder als eigener Kurzartikel mit klarem Status/Kalender oder als Erweiterung des Bestandsartikels. Zeitkritisch: Daten jährlich pflegen.
- **Titel DE (46):** Ist Maya Bay offen? Schließzeit, Regeln, Tipps
- **Titel EN (45):** Is Maya Bay Open? Closure Dates, Rules & Tips
- **Meta DE (147):** Maya Bay offen oder geschlossen? Schließzeit 1. Aug.–30. Sep., aktuelle Regeln, Anlegestelle und was Sie während der Sperre stattdessen tun können.
- **Meta EN (141):** Is Maya Bay open or closed? Annual closure 1 Aug to 30 Sep, current rules, the back-bay jetty and what to do instead while the bay is closed.
- **H1:** Ist Maya Bay offen? Schließzeit, Regeln und Tipps ab Krabi / Is Maya Bay open? Closure dates, rules and tips from Krabi
- **Gliederung (H2):**
  1. Status auf einen Blick (Datum "zuletzt geprüft", offen/geschlossen)
  2. Jährliche Schließzeit: 1. August bis 30. September (Wiedereröffnung 1. Oktober)
  3. Aktuelle Regeln: kein Schwimmen/Schnorcheln in der Bucht, Anlegen an der Rückseite, begrenzte Aufenthaltsdauer
  4. Eintritt und Öffnungszeiten (mit Stand und Vorbehalt)
  5. Maya Bay ab Krabi: Fahrzeit und warum früh morgens (Link Bestandsartikel)
  6. Was Sie tun, wenn die Bucht geschlossen ist: Pileh Lagoon, Bamboo Island, Alternativen
  7. Wie Sie Gedränge vermeiden (Timing)
  8. Häufige Irrtümer (Film-Strand, "darf man nicht mehr hin")
- **FAQ (Wortlaut):**
  - Ist Maya Bay offen? / Is Maya Bay open right now?
  - Wann schließt Maya Bay jedes Jahr? / When does Maya Bay close every year?
  - Darf man in Maya Bay schwimmen? / Can you swim in Maya Bay?
  - Wie viel kostet der Eintritt in Maya Bay? / How much is the Maya Bay entrance fee?
  - Kann man Maya Bay ab Krabi besuchen? / Can you visit Maya Bay from Krabi?
  - Was kann man machen, wenn Maya Bay geschlossen ist? / What can you do if Maya Bay is closed?
- **Interne Verlinkung:** related: `phi-phi-maya-bay-early-morning`, `krabi-movie-locations-james-bond-the-beach`, `avoid-crowds-krabi-timing`, `best-time-to-visit-krabi`. tourIds: `phi-phi-early-bird`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Schließzeit 2026: 1. August bis 30. September, Wiedereröffnung 1. Oktober (laut mehreren Suchtreffern): https://www.timeout.com/bangkok/news/thailand-famous-maya-bay-reopens-092926, https://www.asiantrails.travel/latest-news/annual-closure-of-iconic-island-bay/, https://www.tisland.travel/en/blog/maya-bay-zakryvaetsya-1-avgusta-2026
  - Regeln (Besucherquote ca. 380 gleichzeitig, 1 Stunde Aufenthalt, nur bis Knie ins Wasser, Anlegen Loh Samah, 07:00-18:00, 400/200 THB): https://www.lovephukettours.com/maya-bay-travel-tips.html, https://beachverdict.com/beaches/thailand/maya-bay, https://phiphiparadise.travel/en/guides/maya-bay-2026-reopening-real-truth (Quellen nennen leicht abweichende Zahlen; im Artikel nur "rund"/"laut Nationalparkbehörde, bitte aktuell prüfen").
  - Primärquelle prüfen: Department of National Parks (dnp.go.th) / Hat Noppharat Thara-Mu Ko Phi Phi National Park.
  - Konsistenz mit `data-islands-b.ts` Zeile ca. 316-324 (dort steht "Schwimmen nicht erlaubt, Aufenthalt begrenzt, zuletzt Anfang August bis Ende September").

---

### Artikel 7: `krabi-boat-tours-rainy-season` (insider, Prio B)

- **Primärkeyword:** DE "Krabi Bootstour Regenzeit" / EN "Krabi boat tour rainy season"
- **Sekundär/Longtail DE:** Krabi Monsun Bootstour; Krabi September Oktober Wetter Boot; Inselhopping Krabi Nebensaison; Krabi Seegang Mai bis Oktober; Bootstour abgesagt Krabi Wetter; Krabi Regenzeit lohnt sich; Nationalpark Sperrung Krabi Mai Oktober
- **Sekundär/Longtail EN:** Krabi boat tours monsoon; is it safe to take a speedboat in Krabi in rainy season; Krabi island hopping low season; Krabi tour cancelled rough sea; Krabi weather October boat; best months for Krabi speedboat; Krabi monsoon speedboat cancellations
- **Intent:** info/comm. **Prio B:** aktuell (Oktober = Übergang zur Hochsaison) und vertrauensbildend, aber `best-time-to-visit-krabi` deckt Reisezeit/Monsun schon ab; dieser Artikel muss den Bootsfokus (Seegang, Absagen, Sperrungen, privat flexibel verschieben) liefern.
- **Titel DE (43):** Bootstour Krabi in der Regenzeit: Geht das?
- **Titel EN (50):** Krabi Boat Tours in Rainy Season: Safe & Worth It?
- **Meta DE (145):** Krabi Bootstouren zwischen Mai und Oktober: Wellen, Absagen, Park-Sperrungen und wann sich eine private Tour lohnt – ehrlich und mit Praxistipps.
- **Meta EN (141):** Krabi boat tours between May and October: waves, cancellations, park closures and when a private tour makes sense – honest, practical advice.
- **H1:** Bootstour in Krabi während der Regenzeit: Was geht, was nicht? / Boat tours in Krabi in the rainy season: what works and what does not
- **Gliederung (H2):**
  1. Regenzeit heißt nicht Dauerregen: Schauer vs. Seegang
  2. Wann Touren in der Regel abgesagt werden (Seegang, Wind, behördliche Warnung)
  3. Nationalpark-Sperrungen (Maya Bay Aug-Sep, Koh Rok/Haa 16. Mai-31. Okt)
  4. Welche Ziele in der Nebensaison gut gehen (geschützte Buchten, Hong/Poda-Region, je nach Tag)
  5. Vorteil privater Charter: Termin-Flexibilität, Entscheidung durch Kapitän am Morgen
  6. Praktisch: Regenjacke, wasserdichte Taschen, Plan B
  7. Plankton und Sunset in der Nebensaison
  8. Wann Sie besser nicht buchen / Kommunikation bei Absage
- **FAQ (Wortlaut):**
  - Kann man in der Regenzeit in Krabi Bootstouren machen? / Can you take boat tours in Krabi in the rainy season?
  - Wann ist das Meer in Krabi am wildesten? / When are the seas roughest in Krabi?
  - Werden Bootstouren bei Regen abgesagt? / Are boat tours cancelled when it rains?
  - Welche Inseln sind in der Regenzeit gesperrt? / Which islands are closed in the rainy season?
  - Ist Krabi im Oktober eine gute Reisezeit? / Is October a good time to visit Krabi?
- **Interne Verlinkung:** related: `best-time-to-visit-krabi`, `koh-rok-koh-haa`, `phi-phi-maya-bay-early-morning`, `boat-day-packing-list-etiquette`. tourIds: `hong-lagoons`, `4islands-sunset`, `family-sandbars`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Absageschwellen (Quelle nennt anhaltende Wellen über 1,5 m, Wind über 25 Knoten) und Absagehäufigkeiten ("1 von 5 Tagen") sind Betreiberblog-Angaben **ohne Primärbeleg**, nicht als Fakt übernehmen: https://krabiboat.tours/weather-impact-on-boat-tours, https://www.qbictravel.com/phuket-weather-for-boat-trips/
  - Koh Rok/Haa Sperre 16. Mai-31. Okt: https://www.tatnews.org/2023/07/the-latest-opening-and-closing-status-of-thailands-national-parks/, https://www.thaizer.com/annual-closure-of-national-parks-in-thailand/ (älterer Stand, aktuelle DNP-Mitteilung prüfen).
  - Warnhinweis der Behörden zu Monsun/Seegang (aktuell): https://www.travelandtourworld.com/news/article/jo0asu1cmgyu/ (Sekundärquelle, besser TMD/Marine Department).
  - Unsere eigene Absage-/Umbuchungsregel (Geschäftsbedingungen) vor dem Schreiben bestätigen.

---

### Artikel 8: `krabi-itinerary-3-5-7-days` (pillar, Prio B)

- **Primärkeyword:** DE "Krabi Reiseplan 5 Tage" / EN "Krabi itinerary 5 days"
- **Sekundär/Longtail DE:** Krabi 3 Tage Route; Krabi 7 Tage Reiseplan; Krabi Rundreise Ao Nang Railay Inseln; Krabi Reiseroute erste Reise; Krabi wie viele Tage; Krabi Aktivitäten Landprogramm; Krabi Sehenswürdigkeiten Reihenfolge
- **Sekundär/Longtail EN:** Krabi 3 days itinerary; Krabi 7 days itinerary; how many days in Krabi; Krabi first time itinerary; Krabi things to do in order; Krabi itinerary with island hopping; Krabi itinerary for couples
- **Intent:** info. **Prio B:** große Reichweite, aber stark umkämpft (Rough Guides, Nomadasaurus, DE-Blogs wie explorertom, faszination-suedostasien) und weit von der Buchung entfernt. Wert liegt in der Funktion als interne Verteilerseite zu Inseln und Touren. **Achtung:** Konkurrenz-Pläne enthalten Kajak, Elefantenreiten etc.; bei uns weglassen.
- **Titel DE (49):** Krabi Reiseplan: 3, 5 oder 7 Tage – mit Boottagen
- **Titel EN (46):** Krabi Itinerary: 3, 5 or 7 Days with Boat Days
- **Meta DE (146):** Krabi in 3, 5 oder 7 Tagen: Tag-für-Tag-Reiseplan mit Strand-, Land- und Boottagen, Reihenfolge und Tipps, wann sich eine private Inseltour lohnt.
- **Meta EN (147):** Krabi in 3, 5 or 7 days: a day-by-day plan with beach, land and boat days, the right order and when a private island tour is worth booking for you.
- **H1:** Krabi Reiseplan für 3, 5 oder 7 Tage / Krabi itinerary for 3, 5 or 7 days
- **Gliederung (H2):**
  1. Wie viele Tage Krabi brauchen Sie?
  2. Grundprinzip: Boots-Tage nach Wetter/Gezeiten planen, nicht nach Kalender
  3. 3 Tage: Ankommen, Railay/Phra Nang, ein Boots-Highlight
  4. 5 Tage: zwei Boots-Tage (Nähe + Ferne), ein Landtag, ein Pausentag
  5. 7 Tage: Phang Nga/James Bond, Phi Phi früh, Sunset/Plankton-Abend
  6. Welche Tour an welchem Tag (Tabelle mit Tour-IDs)
  7. Wo übernachten (Link Ao-Nang-vs-Railay-Artikel)
  8. Reisezeit-Anpassung (Regen, Sperrungen)
  9. Mit Kindern / Paaren / Senioren: Abwandlungen
- **FAQ (Wortlaut):**
  - Wie viele Tage braucht man in Krabi? / How many days do you need in Krabi?
  - Reichen 3 Tage in Krabi? / Is 3 days in Krabi enough?
  - Was sollte man in Krabi unbedingt gesehen haben? / What are the must-see things in Krabi?
  - Wie viele Inselhopping-Tage sind sinnvoll? / How many island-hopping days should I plan in Krabi?
  - Kann man Krabi im Sommer bereisen? / Can you visit Krabi in summer or the rainy season?
- **Interne Verlinkung:** related: `krabi-islands-insider-guide`, `krabi-island-hopping-planner`, `best-time-to-visit-krabi`, `krabi-with-kids`. tourIds: `4islands-sunset`, `phang-nga-uncharted`, `phi-phi-early-bird`. Später auch Artikel 10.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Landprogramm-Fakten (Wat Tham Suea, Emerald Pool, Heiße Quellen, Railay-Bootspreise ca. 200 THB hin/zurück wurden in einem Treffer genannt): nur das übernehmen, was Sie selbst kennen; Preise Dritter nicht nennen: https://faszination-suedostasien.de/krabi-touren/, https://www.roughguides.com/thailand/itineraries/krabi-itinerary/
  - Fahrzeiten ab Ao Nang (Boot), Flughafen-Transfer: Eigenerfahrung.
  - Keine Kajak-, Tauch- oder SUP-Programmpunkte.

---

### Artikel 9: `krabi-boat-seasickness-tips` (insider, Prio B)

- **Primärkeyword:** DE "Seekrank Bootstour Krabi" / EN "seasick Krabi boat tour"
- **Sekundär/Longtail DE:** Seekrankheit Speedboot Thailand; Seekrank Phi Phi Tour; was hilft gegen Seekrankheit Bootstour; bester Sitzplatz Speedboot; Seekrankheit Kinder Bootstour; Speedboat Wellengang Krabi; Seekrank Tabletten Thailand Apotheke
- **Sekundär/Longtail EN:** Krabi speedboat motion sickness; seasick Phi Phi speedboat; best seat on a speedboat seasickness; motion sickness tablets Thailand; Krabi boat tour rough sea tips; seasickness kids boat trip Thailand; will I get seasick on a Krabi island tour
- **Intent:** info. **Prio B:** echte PAA-/Foren-Frage (Tripadvisor-Reviews wie "Get your motion sickness pill ready!"), gute Vertrauens- und Conversion-Funktion für unentschlossene Gäste. Mittlerer Wettbewerb (viele Mini-Abschnitte, wenige Spezialartikel). Das Thema kommt in mehreren Bestandsartikeln als Absatz vor; hier gebündelt.
- **Titel DE (45):** Seekrank in Krabi? Tipps für Speedboot-Touren
- **Titel EN (44):** Seasick on a Krabi Boat Tour? Practical Tips
- **Meta DE (146):** Seekrank auf der Bootstour in Krabi? Bester Sitzplatz, Timing, Essen und Ausrüstung – plus warum ein ruhiges, privates Boot den Unterschied macht.
- **Meta EN (138):** Seasick on a boat tour in Krabi? Best seat, timing, food and gear – plus how route, timing and a steady private boat make the ride calmer.
- **H1:** Seekrank auf der Bootstour in Krabi? So bleibt der Tag entspannt / Seasick on a Krabi boat tour? How to keep the day relaxed
- **Gliederung (H2):**
  1. Wann Seekrankheit wahrscheinlich ist (Seegang, Saison, Bootsgröße)
  2. Vor der Tour: Frühstück, Alkohol, Schlaf
  3. Sitzplatz und Blick: hinten/mittig, Horizont fixieren
  4. Mittel: Allgemeine Hinweise (Apotheke/Arzt fragen, keine Dosierungsempfehlung)
  5. Route und Timing wählen: früh morgens, geschützte Buchten zuerst, kurze Überfahrten
  6. Warum ein privates Boot hilft (Tempo anpassen, Pause auf Wunsch, Kabine/Schatten)
  7. Kinder und Senioren
  8. Was tun, wenn es Ihnen schlecht wird (Wasser, Frischluft, Pause im Windschatten)
- **FAQ (Wortlaut):**
  - Wird man auf einer Speedboot-Tour in Krabi seekrank? / Will I get seasick on a speedboat tour in Krabi?
  - Wo sitzt man am besten bei Seekrankheit? / Where is the best place to sit on a boat if I get seasick?
  - Was hilft gegen Seekrankheit auf der Bootstour? / What helps against seasickness on a boat trip?
  - Ist Longtail besser gegen Seekrankheit als Speedboot? / Is a longtail better than a speedboat for seasickness?
  - Kann ich mit Kindern Inselhopping in Krabi machen? / Can I go island hopping in Krabi with kids if they get seasick?
- **Interne Verlinkung:** related: `longtail-vs-speedboat-krabi` (Artikel 4), `krabi-with-kids`, `boat-day-packing-list-etiquette`, `best-time-to-visit-krabi`. Falls Artikel 4 noch nicht live: `krabi-island-hopping-planner`. tourIds: `family-sandbars`, `railay-escape`, `4islands-sunset`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Allgemeine Tipps (hinten sitzen, Horizont, Tabletten 30 Min. vorher): https://www.loveandaman.com/tips-safety/speedboat-fast-but-seasick-why/ , https://www.getyourguide.com/phi-phi-islands-l9477/krabi-phi-phi-islands-speedboat-tour-with-buffet-lunch-t431598/ (Sekundärquellen). **Medizinische Aussagen nur allgemein formulieren** (kein Wirkstoff, keine Dosis, Hinweis auf Apotheke/Arzt).
  - Aussage "Speedboot ist kleiner und spürt Wellen stärker" bitte nicht pauschal; für unser Boot (2x300 PS, Kabine) eigene Erfahrung belegen.

---

### Artikel 10: `ao-nang-vs-railay-where-to-stay` (insider, Prio C)

- **Primärkeyword:** DE "Ao Nang oder Railay" / EN "Ao Nang vs Railay"
- **Sekundär/Longtail DE:** Krabi wo übernachten; Railay Beach Unterkunft; Ao Nang Hotels Lage; Krabi Unterkunft für Inselhopping; Railay nur per Boot erreichbar; Railay Ruhe Ao Nang Restaurants
- **Sekundär/Longtail EN:** where to stay in Krabi; Railay or Ao Nang for first time; Railay Beach hotels access by boat; Krabi best area to stay; Ao Nang beach island hopping pickup; Krabi honeymoon where to stay
- **Intent:** info. **Prio C:** häufig gesucht, aber SERP gehört starken DE/EN-Blogs und Hotelportalen (visitthailandtoday, explorertom, megivorera); geringe Buchungsnähe, aber gute Reichweite bei Planern. Wert für uns: Abholung/Boarding-Logistik (Ao Nang vs Railay) und Link-Hub.
- **Titel DE (45):** Ao Nang oder Railay: Wo übernachten in Krabi?
- **Titel EN (41):** Ao Nang or Railay: Where to Stay in Krabi
- **Meta DE (141):** Ao Nang oder Railay? Strand, Ruhe, Restaurants und Bootszugang im Vergleich – so wählen Sie die passende Unterkunft für Ihre Krabi-Reise aus.
- **Meta EN (140):** Ao Nang or Railay? Beach, quiet, restaurants and boat access compared – how to choose the right base for your Krabi trip and your boat days.
- **H1:** Ao Nang oder Railay: Wo wohnen Sie in Krabi am besten? / Ao Nang or Railay: where to stay in Krabi
- **Gliederung (H2):**
  1. Kurzantwort nach Reisetyp
  2. Ao Nang: Lage, Restaurants, Boote ab Strand/Pier
  3. Railay (West/East, Phra Nang): Ruhe, Landschaft, nur per Boot
  4. Gepäck, Zugang, Gezeiten bei Railay (Longtail-Transfer)
  5. Mit Kindern, als Paar, Senioren
  6. Wie die Unterkunft die Bootstour beeinflusst (Treffpunkt, Abholung, Startzeit)
  7. Alternativen (Klong Muang, Krabi Town, Tubkaek): nur kurz und nur Bekanntes
  8. Unsere Empfehlung
- **FAQ (Wortlaut):**
  - Ao Nang oder Railay: wo ist es schöner? / Is Ao Nang or Railay better to stay?
  - Ist Railay nur mit dem Boot erreichbar? / Can you only reach Railay by boat?
  - Wo übernachtet man am besten bei der ersten Krabi-Reise? / Where should I stay in Krabi on my first trip?
  - Kann man von Railay Bootstouren starten? / Can you start a private boat tour from Railay?
- **Interne Verlinkung:** related: `railay-phra-nang-cave`, `krabi-islands-insider-guide`, `krabi-with-kids`, `best-time-to-visit-krabi`. tourIds: `railay-escape`, `4islands-sunset`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Abfahrtsorte/Treffpunkte und ob Abholung in Railay möglich ist (nur aus eigener Betriebsinfo, nicht annehmen).
  - Allgemeines (Railay nur per Boot erreichbar): https://en.wikipedia.org/wiki/Railay_Beach
  - Vergleich-Quellen: https://www.visitthailandtoday.com/guides/where-to-stay-in-krabi, https://explorertom.com/ao-nang-oder-krabi/

---

### Artikel 11: `phi-phi-don-vs-phi-phi-leh` (island, Prio C)

- **Primärkeyword:** DE "Phi Phi Don oder Leh" / EN "Phi Phi Don vs Phi Phi Leh"
- **Sekundär/Longtail DE:** Phi Phi Unterschied Don Leh; Phi Phi Tagesausflug ab Krabi; Ton Sai Bay Loh Dalum; Pileh Lagoon Viking Cave; Phi Phi Übernachten oder Tagestour; Monkey Beach Phi Phi
- **Sekundär/Longtail EN:** Phi Phi Don vs Phi Phi Le difference; which Phi Phi island to visit; Phi Phi day trip vs overnight; Phi Phi day trip from Krabi; Pileh Lagoon Viking Cave; Maya Bay on Phi Phi Leh
- **Intent:** info. **Prio C:** kleine, aber klar umrissene Nische mit Verwechslungsrisiko ("Welche Insel ist Maya Bay?"), gute Ergänzung zur Tour `phi-phi-early-bird`; Wettbewerb mittel (Operator-Blogs), geringe Eigenständigkeit gegenüber `phi-phi-maya-bay-early-morning` (kurze Erklärung steht dort schon). Nur umsetzen, wenn Bestandsartikel nicht erweitert wird.
- **Titel DE (46):** Phi Phi Don oder Leh: Welche Insel lohnt sich?
- **Titel EN (43):** Phi Phi Don vs Phi Phi Leh: Which to Visit?
- **Meta DE (143):** Phi Phi Don oder Phi Phi Leh? Bewohnte Hauptinsel gegen Maya Bay und Pileh Lagoon: was Sie wo erwartet und wie Sie beides ab Krabi kombinieren.
- **Meta EN (143):** Phi Phi Don or Phi Phi Leh? Inhabited main island versus Maya Bay and Pileh Lagoon: what to expect and how to combine both on a day from Krabi.
- **H1:** Phi Phi Don oder Phi Phi Leh: der Unterschied und welche Insel Sie besuchen sollten / Phi Phi Don vs Phi Phi Leh: the difference and which to visit
- **Gliederung (H2):**
  1. Kurzantwort: Zwei Inseln, zwei Zwecke
  2. Phi Phi Don: Ton Sai, Strände, Aussicht (bewohnt)
  3. Phi Phi Leh: Maya Bay, Pileh Lagoon, Viking Cave (unbewohnt)
  4. Tagestour oder Übernachten
  5. Anfahrt ab Krabi (Fahrzeit nur grob)
  6. Regeln, Sperrzeiten (Verweis Maya-Bay-Artikel)
  7. Timing gegen Menschenmassen
  8. Kombination an einem privaten Tag
- **FAQ (Wortlaut):**
  - Was ist der Unterschied zwischen Phi Phi Don und Phi Phi Leh? / What is the difference between Phi Phi Don and Phi Phi Leh?
  - Auf welcher Insel liegt Maya Bay? / Which Phi Phi island is Maya Bay on?
  - Lohnt sich eine Phi-Phi-Tagestour ab Krabi? / Is a Phi Phi day trip from Krabi worth it?
  - Kann man auf Phi Phi Leh übernachten? / Can you stay overnight on Phi Phi Leh?
- **Interne Verlinkung:** related: `phi-phi-maya-bay-early-morning`, `krabi-movie-locations-james-bond-the-beach`, `avoid-crowds-krabi-timing`, `krabi-island-hopping-planner`. tourIds: `phi-phi-early-bird`.
- **Fakten, die vor dem Schreiben belegt werden müssen:**
  - Bewohnt/unbewohnt, Lage der Highlights: https://www.railayecotour.com/en/blog/phi-phi-don-vs-phi-phi-le, https://www.visitthailandtoday.com/guides/koh-phi-phi-guide, https://theworldtravelguy.com/phi-phi-island-thailand/ (Sekundärquellen; im Bestand `data-islands-b.ts` bereits korrekt beschrieben).
  - Fahrzeiten und Preise Dritter nicht übernehmen.

---

## 3. Ergänzende Keywords für bestehende Artikel und Startseite

Je Slug 3-6 Begriffe zum natürlichen Einbau (H2, Absatz, FAQ). Nur sinnvoll, wo thematisch passend, kein Stuffing.

| Slug | Zusätzliche Begriffe |
|------|---------------------|
| `krabi-islands-insider-guide` | Krabi Inseln Karte; welche Inseln bei Krabi; Krabi Inselhopping privat; Krabi islands map; best island tour Krabi |
| `best-time-to-visit-krabi` | Krabi Oktober Wetter; Krabi Hochsaison Dezember; Krabi Nebensaison Vorteile; Krabi November Wetter; Krabi monsoon months |
| `krabi-island-hopping-planner` | Inselhopping Krabi Kosten privat; Krabi Island Hopping Route 4 Islands; Krabi Inselhopping Dauer; Krabi island hopping tips; private vs group island hopping Krabi |
| `koh-poda-guide` | Poda Island Strand; Koh Poda Sonnenuntergang; Poda Island snorkeling; Koh Poda Eintritt; Poda Island how to get there |
| `chicken-island-tup-sandbar` | Chicken Island Aussicht Felsen; Tup Island sandbank low tide; Thale Waek; Koh Gai Krabi; Tup Island Ebbe Uhrzeit |
| `railay-phra-nang-cave` | Phra Nang Beach Boot; Princess Cave Krabi; Railay Beach per Boot; Railay Lagoon Hike; Phra Nang Cave Beach sunset |
| `hong-island-krabi` | Koh Hong Krabi Eintritt; Hong Island Lagoon; Hong Island vs Koh Hong Phang Nga; Hong Island Tour privat; Hong Island Viewpoint |
| `koh-lao-lading-koh-pakbia` | Lao Lading Island; Koh Pakbia Sandbank; Hong Islands Nationalpark Eintritt; Koh Lading Strand; Hong archipelago private boat |
| `koh-roi-hidden-lagoon` | Koh Roi Krabi; Roi Island lagoon; versteckte Lagune Krabi Boot; Koh Roi Zugang Flut; Koh Roi Drohnenfoto |
| `koh-kudu-koh-nok` | Koh Kudu Höhle; Koh Kudu Krabi Boot; Kudu Island; Koh Nok Krabi; ruhige Insel Krabi |
| `phi-phi-maya-bay-early-morning` | Maya Bay offen; Maya Bay Wiedereröffnung; Pileh Lagoon früh; Phi Phi Speedboot privat; Phi Phi Tagestour ab Ao Nang |
| `koh-rok-koh-haa` | Koh Haa Lagune; Koh Rok Saison geöffnet; Koh Rok Sperrzeit Mai Oktober; Koh Rok Tagestour ab Krabi; Koh Rok Schildkröten |
| `james-bond-island-phang-nga-bay` | Khao Phing Kan Eintritt; James Bond Island privat; Phang Nga Bay private tour; Koh Panyee Mittagessen; James Bond Island early morning |
| `avoid-crowds-krabi-timing` | Krabi Inseln leer; beste Zeit Hong Island; Krabi Nebensaison weniger Touristen; Krabi early morning tour; Krabi crowds tour boats 11 am |
| `krabi-tides-guide` | Gezeitenkalender Krabi; Tup Sandbank Ebbe Uhrzeit; Krabi Springflut; tide table Ao Nang; Ebbe Flut Railay |
| `krabi-bioluminescent-plankton-night-boat-tour` | leuchtendes Plankton Krabi Saison; Neumond Plankton; Plankton Krabi Speedboot privat; glowing plankton Krabi months; Krabi plankton tour private |
| `krabi-fishing-guide` | Angeln Krabi Tour privat; Angeln Thailand Lizenz; Nachtangeln Tintenfisch Krabi; fishing charter Krabi; fishing license Thailand tourist; Krabi trolling |
| `krabi-with-kids` | Krabi Kinder Bootstour Sicherheit; Schwimmwesten Kinder Boot; Krabi family speedboat; Krabi mit Baby; Krabi Teenager Aktivitäten |
| `boat-day-packing-list-etiquette` | was mitnehmen Bootstour Thailand; Reef-safe sunscreen Thailand; wasserdichte Tasche Boot; Krabi boat tour what to wear; Trinkgeld Kapitän Thailand |
| `krabi-photo-drone-spots` | Drohnenfotos Krabi; Drohnen Genehmigung Thailand; Krabi aerial photos; Sonnenuntergang Fotos Boot; Krabi Instagram Inseln |
| `secret-beaches-lagoons-krabi` | versteckte Strände Krabi; Krabi Geheimtipps Boot; hidden beaches Krabi by boat; Krabi Lagune Hong; Krabi beaches without crowds |
| `best-snorkeling-spots-krabi` | Schnorcheln Krabi Anfänger; Krabi Schnorchelausrüstung kostenlos; snorkeling Krabi turtles; beste Zeit Schnorcheln Krabi; Krabi snorkel private boat |
| `krabi-movie-locations-james-bond-the-beach` | Mann mit dem goldenen Colt Drehort; Krabi Filmkulisse; The Beach Drehort Maya Bay; Man with the Golden Gun island; Krabi movie locations tour |

Hinweis: Wo Nationalpark-Sperrungen genannt werden (Koh Rok, Maya Bay), bitte zuerst das Datum prüfen (siehe Artikel 6 und 7).

### Startseite: Title/Description (aktuell)

Aktuell (`SEO_META` in `src/components/secret-islands/content.ts`, Zeile ca. 1033):
- DE-Title: "Krabi Secret Islands – Private Speedboat-Touren für max. 5 Gäste" (**66 Zeichen**, über 60, wird gekürzt)
- EN-Title: "Krabi Secret Islands – Private Speedboat Tours, Max. 5 Guests" (**61 Zeichen**, knapp drüber)
- Keyword "Privatboot", "Bootstour", "Charter" fehlt im DE-Title; SERP-Beobachtung: DE sucht "Bootstour/Bootscharter/privat", EN "private boat tour/speedboat charter".

**Varianten (alle ≤60 Zeichen):**

| Var. | DE-Title | EN-Title |
|------|----------|----------|
| A | Private Bootstour Krabi – Speedboot-Charter, max. 5 Gäste (57) | Private Speedboat Tour Krabi – Max. 5 Guests (44) |
| B | Krabi Privatboot ab Ao Nang: Secret Islands & Sunset (51) | Private Boat Charter Krabi – Secret Islands & Sunset (52) |
| C | Krabi Secret Islands: Private Speedboot-Touren ab Ao Nang (57) | Krabi Secret Islands: Private Speedboat Tours, Ao Nang (54) |

Hinweis Variante A: Markenname geht verloren; falls `og:site_name` o. ä. ohnehin die Marke trägt, ist das akzeptabel. Variante C behält die Marke und kürzt nur.

**Description-Vorschlag (Ziel 140-155 Zeichen):**
- DE: "Private Speedboot-Touren ab Ao Nang für max. 5 Gäste: Koh Roi, Hong Island, Sunset-Dinner, Plankton und Angeltouren. Preis pro Boot, Wunschtermin anfragen." (ca. 150)
- EN: "Private speedboat tours from Ao Nang for max. 5 guests: Koh Roi, Hong Island, sunset dinner, plankton and fishing trips. Price per boat, request your date." (ca. 152)

Vor Übernahme bitte Zeichenlängen im Code prüfen. Bestehende Description (DE/EN) ist okay, aber ohne "Preis pro Boot" (Alleinstellung).

---

## 4. Asien-Sprachen-Block (ZH, KO, JA)

Belegbar ist nur, welche Begriffe in SERP-Titeln/Snippets echt vorkommen (aus Websuchen). **Suchvolumen ist nicht belegbar.** Bitte vor Einsatz von Muttersprachler/Tool gegenprüfen.

### Chinesisch (vereinfacht), Belege: Ctrip, Qyer, smzdm, Klook, Zhihu, Tencent
Beobachtete Muster: "甲米 四岛 包船", "红岛" (Hong Island), "跳岛游", "包船出海", "游艇看日落", "夜光藻/蓝眼泪". Wichtig: Chinesisch sucht oft über "包船" (Boot chartern), "报团" (Gruppentour) und "攻略".

1. 甲米 包船 (Krabi Boot chartern)
2. 甲米 四岛 包船
3. 甲米 跳岛游
4. 甲米 红岛 包船
5. 甲米 私人快艇
6. 甲米 日落 游艇 / 甲米 海上日落
7. 甲米 夜光藻 / 蓝眼泪
8. 甲米 皮皮岛 一日游
9. 甲米 蜜月 (Honeymoon)
10. 甲米 包船 价格

Beleg: https://wenda.zuzuche.com/k9BBoOVEE.html, https://www.smzdm.com/p/15491392/, https://news.qq.com/rain/a/20230815A04GIR00, https://bbs.qyer.com/toutiao/2614829. Ob "夜光藻" oder "蓝眼泪" häufiger ist, nicht belegt.

### Koreanisch, Belege: Klook KR, KKday KR, MyRealTrip, WAUG, Triple, taksarang
Beobachtete Muster: "끄라비 4섬 투어", "끄라비 홍섬 투어", "호핑투어", "프라이빗 롱테일", "선셋", "야광 플랑크톤".

1. 끄라비 호핑투어
2. 끄라비 4섬 투어
3. 끄라비 홍섬 투어
4. 끄라비 프라이빗 보트
5. 끄라비 프라이빗 투어
6. 끄라비 선셋 투어
7. 끄라비 야광 플랑크톤
8. 끄라비 피피섬 투어
9. 끄라비 신혼여행
10. 끄라비 스피드보트 투어

Beleg: https://www.myrealtrip.com/offers/136766, https://www.waug.com/ko/activities/145221, https://www.kkday.com/ko/blog/19210/asia-thailand-krabi-hongisland, https://www.klook.com/ko/activity/27749-phi-phi-4-islands-tour-krabi/

### Japanisch, Belege: HIS, JTB-nahe Reiseseiten, Blogs, Blue Marine, Sakura Tour
Beobachtete Muster: "クラビ アイランドホッピング", "クラビ ボートチャーター", "クラビ 4島", "クラビ オプショナルツアー". Zu "夜光虫" und "ハネムーン" fand die Suche **keine belastbaren Treffer** (Treffer waren generisch/fremde Ziele).

1. クラビ アイランドホッピング
2. クラビ ボートチャーター
3. クラビ プライベート ボート
4. クラビ 4島 ツアー
5. クラビ オプショナルツアー
6. クラビ ホン島 ツアー
7. クラビ ピピ島 ツアー
8. クラビ スピードボート 貸切
9. クラビ サンセット ツアー (Sunset: nur indirekt belegt, "nicht belegbar" für Häufigkeit)
10. クラビ 島巡り (Variante)

Beleg: https://activities.his-j.com/CityTop/KBV/, https://johnny-thai.jp/krabi-iland/, https://marikochan.jp/krabi-islandhopping/, https://bluemarine.info/tour/private-charter-boat-krabi/, https://krabisakuratour.com/

**Nicht belegbar:** Suchvolumen aller Begriffe in ZH/KO/JA; "夜光虫 クラビ" und "クラビ ハネムーン ボート" (keine Treffer). Eine Positionierung in ZH/KO/JA verlangt außerdem Muttersprachler-Review; die i18n-Dateien (`i18n/{zh,ko,ja}.ts`) sind nach deutschen Strings gekeyt.

---

## 5. Was bewusst NICHT empfohlen wird

| Thema | Begründung |
|-------|------------|
| Koh Lanta als eigener Artikel | Liegt nicht in unserem Startradius ab Ao Nang; SERP wird von Lanta-Anbietern dominiert; unsere einzige Berührung ist `koh-rok-safari`, und Koh Rok/Haa sind laut Quellen 16. Mai-31. Okt gesperrt. Kurz in `koh-rok-koh-haa` ergänzen ("Zugang ab Koh Lanta oder Krabi"). |
| "Krabi Strände" (allgemein) | Sehr starke DE-Blogs (explorertom, faszination-suedostasien, placesofjuma) und geringe Buchungsnähe. Sinnvoller ist der bestehende `secret-beaches-lagoons-krabi` mit Bootsfokus. |
| Krabi ab Phuket/Khao Lak (Tagesausflug) | Wir starten ab Ao Nang; Fahrtweg und Anfahrt-Pflichten ungeklärt; wir würden Gäste in Phuket nicht bedienen. Erst sinnvoll, wenn Abholung aus Phuket/Khao Lak tatsächlich angeboten wird. |
| Angeln als eigener Regel-Artikel ("Thailand Angeln Lizenz") | Nur Teilverifiziertes verfügbar: Sekundärquellen sagen, für Rutenfischen/Charter sei in der Regel keine persönliche Lizenz nötig und in marinen Nationalparks sei Fischen verboten (Bußgeld ca. 500 THB laut einer Quelle). Primärquelle (Fischereigesetz, DNP) nicht geprüft. **Empfehlung:** nur als kurzer FAQ-Abschnitt in `krabi-fishing-guide` mit "in der Regel" und Verweis auf die Anbieter-Genehmigung; sonst rechtlich zu riskant. Quellen: https://thaiangler.com/guides/do-tourists-need-fishing-license-thailand, https://fishingbooker.com/blog/fishing-in-thailand/ (Sekundärquellen) |
| Krabi Hochzeit/Fotoshooting | Hochzeit auf dem Boot ist nicht Teil des Angebots; Foto-Shooting nur mit Drohnenpaket. Heiratsantrag/Flitterwochen werden in Artikel 2 abgedeckt. Keine Fotografen-/Unterwasser-Versprechen. |
| Reisetipps für Paare/Familien/Senioren als Einzelartikel | Familien sind abgedeckt (`krabi-with-kids`); Paare in Artikel 2; Senioren fehlen als belegte Suchnachfrage. Besser als Abschnitt in Reiseplan (Artikel 8). |
| Tauchen, Kajak, SUP, Elefanten usw. | Nicht im Angebot; kommt in Konkurrenz-SERPs häufig vor, darf bei uns nicht auftauchen. |
| Kosten-Artikel mit konkreten Konkurrenz-Preisen | Preise ändern sich, Quellen widersprechen sich, und wir dürfen keine Fremdpreise erfinden. Nur grobe Spannen mit Datum und Quellenhinweis. |
| "Beste Strände Phi Phi", "Phuket-Phi-Phi" | Phuket-Intent, falscher Startort. |
| Jahres-Keywords wie "2026" im Slug | Slugs bleiben dauerhaft; Jahreszahl nur im Titel, aber dann jährlich aktualisieren (Titel in Artikel 1 trägt "2026", bei Pflegeaufwand weglassen). |

---

## 6. Offene Unsicherheiten (Zusammenfassung)

- Keine Suchvolumina; Prioritäten sind Einschätzungen.
- Mehrere Quellen wurden vom Proxy blockiert; alle Fakten nur aus Suchtreffern, vor Veröffentlichung am Original oder bei DNP/TAT prüfen.
- Gebühren-Widerspruch (4 Islands 200 vs. 400 THB; Hong 300 THB; Phi Phi/Maya Bay 400 THB).
- Maya-Bay-Regeln (Quote, Dauer) weichen zwischen Quellen leicht ab.
- Koh Rok/Haa: Sperrzeit 16. Mai-31. Okt aus Sekundärquellen (TAT-News 2023); aktuelle Mitteilung prüfen und mit `koh-rok-safari` im Buchungskalender abgleichen.
- Seegang-/Absagequoten aus Operator-Blogs (unbelegt), nicht als Fakt übernehmen.
- Bestandsanzahl 23 statt 24 Artikel.
- Kundenstimme zum Heiratsantrag in `content.ts` (Zeile ca. 955): Echtheit klären, bevor sie zitiert wird.
