/**
 * SEO file names → Higgsfield CDN files. Served same-origin via `/bilder/<name>` (src/routes/bilder.$file.ts),
 * which proxies the CDN with long-lived cache headers, so images get descriptive URLs on our own domain.
 * When the files are moved into /public/images, drop the proxy and point IMG at the local paths.
 */
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_37pB8NNBCXw21nrSwh5C0AozDjm/";

export const SEO_IMAGES: Record<string, string> = {
  // Hero (Higgsfield job 5381ee12, 2k/high, variant A chosen by the owner).
  "krabi-boat-tour-krabi-private-speedboat-hero.webp": "hf_20261005_123403_5381ee12-597c-405d-bc75-a144138f9656.png",
  "krabi-boat-tour-koh-poda-krabi-strand-kalksteinfelsen.webp": "hf_20261005_002150_8d7c6492-5f34-4934-b3b4-75f0b9a82121_min.webp",
  "krabi-boat-tour-tup-sandbank-krabi-ebbe-drohnenaufnahme.webp": "hf_20261005_002150_dfdc534c-9c4e-4bec-b0a0-7b576b419b45_min.webp",
  "krabi-boat-tour-hong-island-krabi-smaragdgruene-lagune.webp": "hf_20261005_002150_9a0e33b6-f442-46a5-9017-2eda9b1de6a4_min.webp",
  "krabi-boat-tour-koh-roi-versteckte-lagune-phang-nga.webp": "hf_20261005_002151_280755de-327f-4601-b6bd-311a5ea5251e_min.webp",
  "krabi-boat-tour-koh-kudu-hoehle-phang-nga-bucht.webp": "hf_20261005_002151_c63538fc-208f-4006-9912-f9011184d205_min.webp",
  "krabi-boat-tour-maya-bay-phi-phi-sonnenaufgang.webp": "hf_20261005_002150_68ec7119-d389-408e-8d9d-54589be6ed12_min.webp",
  "krabi-boat-tour-schnorcheln-krabi-korallenriff-schildkroete.webp": "hf_20261005_002152_3dee514d-3244-4148-8ed2-cb0bb316fa60_min.webp",
  "krabi-boat-tour-paar-schnorcheln-korallenriff-privates-speedboat-krabi.webp": "hf_20261005_024239_292966ff-e7c5-4f5f-a01a-15938488ae0c.png",
  "krabi-boat-tour-leuchtendes-plankton-schnorcheln-nacht-krabi.webp": "hf_20261005_024241_3e619063-1957-430a-a45d-97fa059820cc.png",
  "krabi-boat-tour-riff-angeln-krabi-zackenbarsch-heck.webp": "hf_20261005_024241_dc04387c-3bb4-42b5-80a3-7549555c3894.png",
  "krabi-boat-tour-hochseeangeln-trolling-andamanensee-krabi.webp": "hf_20261005_024239_d69d1365-2464-40bf-9081-4810a5b588f4.png",
  "krabi-boat-tour-nacht-tintenfischangeln-speedboat-krabi.webp": "hf_20261005_024240_d5a08254-f04f-4ca6-a2b3-345c9c6e7a88.png",
  "krabi-boat-tour-catch-and-cook-strand-bbq-krabi.webp": "hf_20261005_024241_f9a112f2-5964-4745-8c9b-f582dc1b4adb.png",
  "krabi-boat-tour-candlelight-dinner-heck-speedboat-krabi.webp": "hf_20261005_024241_a63e24f6-8e68-4970-a860-d889ed096149.png",
  "krabi-boat-tour-familie-kinder-schnorcheln-sandbank-krabi.webp": "hf_20261005_024240_ef579940-34ce-4226-925b-6b7c5760e040.png",
  "krabi-boat-tour-james-bond-island-phang-nga-bucht.webp": "hf_20261005_002200_9872044f-6330-4365-aceb-57ede1e306a3_min.webp",
  "krabi-boat-tour-railay-beach-krabi-goldene-stunde.webp": "hf_20261005_002159_b882635e-039b-43c1-b839-eaf0a7162ce7_min.webp",
  "krabi-boat-tour-speedboat-krabi-drohnenaufnahme-karstinseln.webp": "hf_20261005_024240_03de75e1-1bfe-4ab5-a69e-6bb09ae32150.png",
  "krabi-boat-tour-privates-speedboat-krabi-paar-champagner-heck.webp": "hf_20261005_024240_23086f84-470c-40df-84c5-8e2ccc9fa40b.png",
  "krabi-boat-tour-privates-speedboat-krabi-paar-champagner-bucht.webp": "hf_20261005_024239_8b830d3b-3e8e-4690-962c-5949de2bda17.png",
  "krabi-boat-tour-longtail-boot-krabi-ueberfuellt.webp": "hf_20261004_051122_eda16af9-06c0-4627-ba34-f2df5c945e33_min.webp",
  "krabi-boat-tour-khao-phing-kan-strand-phang-nga-bucht-drehort.webp": "hf_20261005_024039_c61fad66-d474-432a-b32a-b5c34fe5f145.png",
  "krabi-boat-tour-maya-bay-phi-phi-leh-luftaufnahme-kalksteinwaende.webp": "hf_20261005_024038_0051742f-ac30-415c-b697-d3316e15f526.png",
  "krabi-boat-tour-phang-nga-bucht-karstfelsen-morgennebel-speedboat.webp": "hf_20261005_024039_f5f9803e-c31e-41ac-91d5-777bd5f9c2fc.png",
  "krabi-boat-tour-koh-panyee-schwimmendes-dorf-phang-nga-bucht.webp": "hf_20261005_024039_33dae3e3-0a32-4454-9591-5f67a2307f41.png",
  "krabi-boat-tour-pileh-lagune-phi-phi-leh-smaragdgruenes-wasser.webp": "hf_20261005_024039_deef18ac-5467-4a99-b244-f30355bbf0bf.png",
};

/**
 * Renamed files (2026-10-05, image SEO pass): old name → current name. `/bilder/<old>` answers with a 301 to
 * `/bilder/<new>` so already-discovered URLs keep their signals. Keep these entries for at least a year.
 * TODO(images): when the files move to /public/images, redirect BOTH the old and the current /bilder/ names
 * straight to /images/<current> (one hop, no redirect chains) – see docs/images.md.
 */
export const RENAMED_IMAGES: Record<string, string> = {
  "koh-kudu-hong-hoehle-phang-nga.webp": "krabi-boat-tour-koh-kudu-hoehle-phang-nga-bucht.webp",
  "hochsee-angeln-trolling-andamanensee.webp": "krabi-boat-tour-hochseeangeln-trolling-andamanensee-krabi.webp",
  "tintenfisch-angeln-nacht-krabi.webp": "krabi-boat-tour-nacht-tintenfischangeln-speedboat-krabi.webp",
  "strand-bbq-sonnenuntergang-krabi.webp": "krabi-boat-tour-catch-and-cook-strand-bbq-krabi.webp",
  "privates-speedboat-krabi-paar-champagner-1.webp": "krabi-boat-tour-privates-speedboat-krabi-paar-champagner-heck.webp",
  "privates-speedboat-krabi-paar-champagner-2.webp": "krabi-boat-tour-privates-speedboat-krabi-paar-champagner-bucht.webp",
  "paar-schnorcheln-privates-speedboat-krabi.webp": "krabi-boat-tour-paar-schnorcheln-korallenriff-privates-speedboat-krabi.webp",
  "candlelight-dinner-speedboat-sonnenuntergang-krabi.webp": "krabi-boat-tour-candlelight-dinner-heck-speedboat-krabi.webp",
  "speedboat-krabi-drohnenaufnahme-inseln.webp": "krabi-boat-tour-speedboat-krabi-drohnenaufnahme-karstinseln.webp",
  "familie-sandbank-krabi-kinder-schnorcheln.webp": "krabi-boat-tour-familie-kinder-schnorcheln-sandbank-krabi.webp",
  "leuchtendes-plankton-krabi-nacht-speedboat.webp": "krabi-boat-tour-leuchtendes-plankton-schnorcheln-nacht-krabi.webp",
  "riff-angeln-krabi-zackenbarsch.webp": "krabi-boat-tour-riff-angeln-krabi-zackenbarsch-heck.webp",
  "hochseeangeln-krabi-trolling-andamanensee.webp": "krabi-boat-tour-hochseeangeln-trolling-andamanensee-krabi.webp",
  "nacht-tintenfischangeln-krabi.webp": "krabi-boat-tour-nacht-tintenfischangeln-speedboat-krabi.webp",
  "catch-and-cook-bbq-krabi-sonnenuntergang.webp": "krabi-boat-tour-catch-and-cook-strand-bbq-krabi.webp",
  "krabi-private-speedboat-hero.webp": "krabi-boat-tour-krabi-private-speedboat-hero.webp",
  "koh-poda-krabi-strand-kalksteinfelsen.webp": "krabi-boat-tour-koh-poda-krabi-strand-kalksteinfelsen.webp",
  "tup-sandbank-krabi-ebbe-drohnenaufnahme.webp": "krabi-boat-tour-tup-sandbank-krabi-ebbe-drohnenaufnahme.webp",
  "hong-island-krabi-smaragdgruene-lagune.webp": "krabi-boat-tour-hong-island-krabi-smaragdgruene-lagune.webp",
  "koh-roi-versteckte-lagune-phang-nga.webp": "krabi-boat-tour-koh-roi-versteckte-lagune-phang-nga.webp",
  "koh-kudu-hoehle-phang-nga-bucht.webp": "krabi-boat-tour-koh-kudu-hoehle-phang-nga-bucht.webp",
  "maya-bay-phi-phi-sonnenaufgang.webp": "krabi-boat-tour-maya-bay-phi-phi-sonnenaufgang.webp",
  "schnorcheln-krabi-korallenriff-schildkroete.webp": "krabi-boat-tour-schnorcheln-krabi-korallenriff-schildkroete.webp",
  "paar-schnorcheln-korallenriff-privates-speedboat-krabi.webp": "krabi-boat-tour-paar-schnorcheln-korallenriff-privates-speedboat-krabi.webp",
  "leuchtendes-plankton-schnorcheln-nacht-krabi.webp": "krabi-boat-tour-leuchtendes-plankton-schnorcheln-nacht-krabi.webp",
  "riff-angeln-krabi-zackenbarsch-heck.webp": "krabi-boat-tour-riff-angeln-krabi-zackenbarsch-heck.webp",
  "hochseeangeln-trolling-andamanensee-krabi.webp": "krabi-boat-tour-hochseeangeln-trolling-andamanensee-krabi.webp",
  "nacht-tintenfischangeln-speedboat-krabi.webp": "krabi-boat-tour-nacht-tintenfischangeln-speedboat-krabi.webp",
  "catch-and-cook-strand-bbq-krabi.webp": "krabi-boat-tour-catch-and-cook-strand-bbq-krabi.webp",
  "candlelight-dinner-heck-speedboat-krabi.webp": "krabi-boat-tour-candlelight-dinner-heck-speedboat-krabi.webp",
  "familie-kinder-schnorcheln-sandbank-krabi.webp": "krabi-boat-tour-familie-kinder-schnorcheln-sandbank-krabi.webp",
  "james-bond-island-phang-nga-bucht.webp": "krabi-boat-tour-james-bond-island-phang-nga-bucht.webp",
  "railay-beach-krabi-goldene-stunde.webp": "krabi-boat-tour-railay-beach-krabi-goldene-stunde.webp",
  "speedboat-krabi-drohnenaufnahme-karstinseln.webp": "krabi-boat-tour-speedboat-krabi-drohnenaufnahme-karstinseln.webp",
  "privates-speedboat-krabi-paar-champagner-heck.webp": "krabi-boat-tour-privates-speedboat-krabi-paar-champagner-heck.webp",
  "privates-speedboat-krabi-paar-champagner-bucht.webp": "krabi-boat-tour-privates-speedboat-krabi-paar-champagner-bucht.webp",
  "longtail-boot-krabi-ueberfuellt.webp": "krabi-boat-tour-longtail-boot-krabi-ueberfuellt.webp",
  "khao-phing-kan-strand-phang-nga-bucht-drehort.webp": "krabi-boat-tour-khao-phing-kan-strand-phang-nga-bucht-drehort.webp",
  "maya-bay-phi-phi-leh-luftaufnahme-kalksteinwaende.webp": "krabi-boat-tour-maya-bay-phi-phi-leh-luftaufnahme-kalksteinwaende.webp",
  "phang-nga-bucht-karstfelsen-morgennebel-speedboat.webp": "krabi-boat-tour-phang-nga-bucht-karstfelsen-morgennebel-speedboat.webp",
  "koh-panyee-schwimmendes-dorf-phang-nga-bucht.webp": "krabi-boat-tour-koh-panyee-schwimmendes-dorf-phang-nga-bucht.webp",
  "pileh-lagune-phi-phi-leh-smaragdgruenes-wasser.webp": "krabi-boat-tour-pileh-lagune-phi-phi-leh-smaragdgruenes-wasser.webp",
};

export const seoImage = (name: keyof typeof SEO_IMAGES & string) => `/bilder/${name}`;
export const upstreamFor = (name: string): string | null => (SEO_IMAGES[name] ? CDN + SEO_IMAGES[name] : null);

/** Smaller WebP variant of a full-size PNG upstream file (same name + "_min.webp"), tried first when it exists. */
export const upstreamLightFor = (name: string): string | null => {
  const file = SEO_IMAGES[name];
  return file && file.endsWith(".png") && name.endsWith(".webp") ? CDN + file.replace(/\.png$/, "_min.webp") : null;
};

/**
 * Local files renamed in the "krabi-boat-tour-" pass (2026-10-13): old /images/<name> → new name, answered with a 301
 * by src/routes/images.$file.ts. Keep for at least a year.
 */
export const LEGACY_LOCAL_IMAGES: Record<string, string> = {
  "gezeiten-ebbe-flut-vergleich-bucht-krabi.webp": "krabi-boat-tour-gezeiten-ebbe-flut-vergleich-bucht-krabi.webp",
  "karstinseln-luftaufnahme-speedboat-andamanensee-krabi.webp": "krabi-boat-tour-karstinseln-luftaufnahme-speedboat-andamanensee-krabi.webp",
  "karte-4-islands-krabi-poda-chicken-tup-phra-nang.webp": "krabi-boat-tour-karte-4-islands-krabi-poda-chicken-tup-phra-nang.webp",
  "karte-krabi-ao-nang-bucht-inseln-uebersicht.webp": "krabi-boat-tour-karte-krabi-ao-nang-bucht-inseln-uebersicht.webp",
  "koh-hong-krabi-luftaufnahme-strand-lagune-720.webp": "krabi-boat-tour-koh-hong-krabi-luftaufnahme-strand-lagune-720.webp",
  "koh-hong-krabi-luftaufnahme-strand-lagune.webp": "krabi-boat-tour-koh-hong-krabi-luftaufnahme-strand-lagune.webp",
  "koh-poda-felsen-ao-nang-krabi.webp": "krabi-boat-tour-koh-poda-felsen-ao-nang-krabi.webp",
  "krabi-secret-islands-privates-speedboat-900.webp": "krabi-boat-tour-krabi-secret-islands-privates-speedboat-900.webp",
  "krabi-secret-islands-privates-speedboat.jpg": "krabi-boat-tour-krabi-secret-islands-privates-speedboat.jpg",
  "krabi-secret-islands-privates-speedboat.webp": "krabi-boat-tour-krabi-secret-islands-privates-speedboat.webp",
  "krabi-town-uferpromenade-sonnenuntergang.webp": "krabi-boat-tour-krabi-town-uferpromenade-sonnenuntergang.webp",
  "maya-bay-phi-phi-leh-panorama-strand-krabi.webp": "krabi-boat-tour-maya-bay-phi-phi-leh-panorama-strand-krabi.webp",
  "maya-bay-phi-phi-leh-strand-besucher-krabi.webp": "krabi-boat-tour-maya-bay-phi-phi-leh-strand-besucher-krabi.webp",
  "phi-phi-don-ton-sai-bucht-aussichtspunkt-krabi.webp": "krabi-boat-tour-phi-phi-don-ton-sai-bucht-aussichtspunkt-krabi.webp",
  "phi-phi-inseln-luftaufnahme-bucht-speedboot-krabi.webp": "krabi-boat-tour-phi-phi-inseln-luftaufnahme-bucht-speedboot-krabi.webp",
  "phi-phi-maya-bay-luftaufnahme-speedboote-krabi.webp": "krabi-boat-tour-phi-phi-maya-bay-luftaufnahme-speedboote-krabi.webp",
  "railay-strand-kalksteinfelsen-boote-krabi.webp": "krabi-boat-tour-railay-strand-kalksteinfelsen-boote-krabi.webp",
  "smaragdgruene-lagune-kalksteinwaende-krabi.webp": "krabi-boat-tour-smaragdgruene-lagune-kalksteinwaende-krabi.webp",
  "tuerkise-bucht-luftaufnahme-kalksteinfelsen-krabi.webp": "krabi-boat-tour-tuerkise-bucht-luftaufnahme-kalksteinfelsen-krabi.webp",
  "tup-sandbank-chicken-island-krabi-luftblick.webp": "krabi-boat-tour-tup-sandbank-chicken-island-krabi-luftblick.webp",
  "weisser-strand-kalksteinfelsen-boote-krabi.webp": "krabi-boat-tour-weisser-strand-kalksteinfelsen-boote-krabi.webp",
};
