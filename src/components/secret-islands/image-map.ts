/**
 * SEO file names → Higgsfield CDN files. Served same-origin via `/bilder/<name>` (src/routes/bilder.$file.ts),
 * which proxies the CDN with long-lived cache headers, so images get descriptive URLs on our own domain.
 * When the files are moved into /public/images, drop the proxy and point IMG at the local paths.
 */
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_37pB8NNBCXw21nrSwh5C0AozDjm/";

export const SEO_IMAGES: Record<string, string> = {
  // Hero candidate A (Higgsfield job 5381ee12, 2k/high). Candidates: B = cc870ddf-7dda-46e0-9a62-501ce93475fc (hf_20261005_123404_…png).
  "krabi-private-speedboat-hero.webp": "hf_20261005_123403_5381ee12-597c-405d-bc75-a144138f9656.png",
  "koh-poda-krabi-strand-kalksteinfelsen.webp": "hf_20261005_002150_8d7c6492-5f34-4934-b3b4-75f0b9a82121_min.webp",
  "tup-sandbank-krabi-ebbe-drohnenaufnahme.webp": "hf_20261005_002150_dfdc534c-9c4e-4bec-b0a0-7b576b419b45_min.webp",
  "hong-island-krabi-smaragdgruene-lagune.webp": "hf_20261005_002150_9a0e33b6-f442-46a5-9017-2eda9b1de6a4_min.webp",
  "koh-roi-versteckte-lagune-phang-nga.webp": "hf_20261005_002151_280755de-327f-4601-b6bd-311a5ea5251e_min.webp",
  "koh-kudu-hoehle-phang-nga-bucht.webp": "hf_20261005_002151_c63538fc-208f-4006-9912-f9011184d205_min.webp",
  "maya-bay-phi-phi-sonnenaufgang.webp": "hf_20261005_002150_68ec7119-d389-408e-8d9d-54589be6ed12_min.webp",
  "schnorcheln-krabi-korallenriff-schildkroete.webp": "hf_20261005_002152_3dee514d-3244-4148-8ed2-cb0bb316fa60_min.webp",
  "paar-schnorcheln-korallenriff-privates-speedboat-krabi.webp": "hf_20261005_024239_292966ff-e7c5-4f5f-a01a-15938488ae0c.png",
  "leuchtendes-plankton-schnorcheln-nacht-krabi.webp": "hf_20261005_024241_3e619063-1957-430a-a45d-97fa059820cc.png",
  "riff-angeln-krabi-zackenbarsch-heck.webp": "hf_20261005_024241_dc04387c-3bb4-42b5-80a3-7549555c3894.png",
  "hochseeangeln-trolling-andamanensee-krabi.webp": "hf_20261005_024239_d69d1365-2464-40bf-9081-4810a5b588f4.png",
  "nacht-tintenfischangeln-speedboat-krabi.webp": "hf_20261005_024240_d5a08254-f04f-4ca6-a2b3-345c9c6e7a88.png",
  "catch-and-cook-strand-bbq-krabi.webp": "hf_20261005_024241_f9a112f2-5964-4745-8c9b-f582dc1b4adb.png",
  "candlelight-dinner-heck-speedboat-krabi.webp": "hf_20261005_024241_a63e24f6-8e68-4970-a860-d889ed096149.png",
  "familie-kinder-schnorcheln-sandbank-krabi.webp": "hf_20261005_024240_ef579940-34ce-4226-925b-6b7c5760e040.png",
  "james-bond-island-phang-nga-bucht.webp": "hf_20261005_002200_9872044f-6330-4365-aceb-57ede1e306a3_min.webp",
  "railay-beach-krabi-goldene-stunde.webp": "hf_20261005_002159_b882635e-039b-43c1-b839-eaf0a7162ce7_min.webp",
  "speedboat-krabi-drohnenaufnahme-karstinseln.webp": "hf_20261005_024240_03de75e1-1bfe-4ab5-a69e-6bb09ae32150.png",
  "privates-speedboat-krabi-paar-champagner-heck.webp": "hf_20261005_024240_23086f84-470c-40df-84c5-8e2ccc9fa40b.png",
  "privates-speedboat-krabi-paar-champagner-bucht.webp": "hf_20261005_024239_8b830d3b-3e8e-4690-962c-5949de2bda17.png",
  "longtail-boot-krabi-ueberfuellt.webp": "hf_20261004_051122_eda16af9-06c0-4627-ba34-f2df5c945e33_min.webp",
  "khao-phing-kan-strand-phang-nga-bucht-drehort.webp": "hf_20261005_024039_c61fad66-d474-432a-b32a-b5c34fe5f145.png",
  "maya-bay-phi-phi-leh-luftaufnahme-kalksteinwaende.webp": "hf_20261005_024038_0051742f-ac30-415c-b697-d3316e15f526.png",
  "phang-nga-bucht-karstfelsen-morgennebel-speedboat.webp": "hf_20261005_024039_f5f9803e-c31e-41ac-91d5-777bd5f9c2fc.png",
  "koh-panyee-schwimmendes-dorf-phang-nga-bucht.webp": "hf_20261005_024039_33dae3e3-0a32-4454-9591-5f67a2307f41.png",
  "pileh-lagune-phi-phi-leh-smaragdgruenes-wasser.webp": "hf_20261005_024039_deef18ac-5467-4a99-b244-f30355bbf0bf.png",
  "krabi-secret-islands-logo.png": "hf_20261004_044905_49752f2a-c380-4b9a-a061-294ac851b827.png",
};

/**
 * Renamed files (2026-10-05, image SEO pass): old name → current name. `/bilder/<old>` answers with a 301 to
 * `/bilder/<new>` so already-discovered URLs keep their signals. Keep these entries for at least a year.
 * TODO(images): when the files move to /public/images, redirect BOTH the old and the current /bilder/ names
 * straight to /images/<current> (one hop, no redirect chains) – see docs/images.md.
 */
export const RENAMED_IMAGES: Record<string, string> = {
  "koh-kudu-hong-hoehle-phang-nga.webp": "koh-kudu-hoehle-phang-nga-bucht.webp",
  "hochsee-angeln-trolling-andamanensee.webp": "hochseeangeln-trolling-andamanensee-krabi.webp",
  "tintenfisch-angeln-nacht-krabi.webp": "nacht-tintenfischangeln-speedboat-krabi.webp",
  "strand-bbq-sonnenuntergang-krabi.webp": "catch-and-cook-strand-bbq-krabi.webp",
  "privates-speedboat-krabi-paar-champagner-1.webp": "privates-speedboat-krabi-paar-champagner-heck.webp",
  "privates-speedboat-krabi-paar-champagner-2.webp": "privates-speedboat-krabi-paar-champagner-bucht.webp",
  "paar-schnorcheln-privates-speedboat-krabi.webp": "paar-schnorcheln-korallenriff-privates-speedboat-krabi.webp",
  "candlelight-dinner-speedboat-sonnenuntergang-krabi.webp": "candlelight-dinner-heck-speedboat-krabi.webp",
  "speedboat-krabi-drohnenaufnahme-inseln.webp": "speedboat-krabi-drohnenaufnahme-karstinseln.webp",
  "familie-sandbank-krabi-kinder-schnorcheln.webp": "familie-kinder-schnorcheln-sandbank-krabi.webp",
  "leuchtendes-plankton-krabi-nacht-speedboat.webp": "leuchtendes-plankton-schnorcheln-nacht-krabi.webp",
  "riff-angeln-krabi-zackenbarsch.webp": "riff-angeln-krabi-zackenbarsch-heck.webp",
  "hochseeangeln-krabi-trolling-andamanensee.webp": "hochseeangeln-trolling-andamanensee-krabi.webp",
  "nacht-tintenfischangeln-krabi.webp": "nacht-tintenfischangeln-speedboat-krabi.webp",
  "catch-and-cook-bbq-krabi-sonnenuntergang.webp": "catch-and-cook-strand-bbq-krabi.webp",
};

export const seoImage = (name: keyof typeof SEO_IMAGES & string) => `/bilder/${name}`;
export const upstreamFor = (name: string): string | null => (SEO_IMAGES[name] ? CDN + SEO_IMAGES[name] : null);

/** Smaller WebP variant of a full-size PNG upstream file (same name + "_min.webp"), tried first when it exists. */
export const upstreamLightFor = (name: string): string | null => {
  const file = SEO_IMAGES[name];
  return file && file.endsWith(".png") && name.endsWith(".webp") ? CDN + file.replace(/\.png$/, "_min.webp") : null;
};
