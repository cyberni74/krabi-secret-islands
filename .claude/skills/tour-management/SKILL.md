---
name: tour-management
description: Handle private speedboat tour enquiries and quotes for Krabi Secret Islands — pricing per boat, add-ons, park fees, deposit, cancellation, routes, weather rules, guests' wishes. Use when drafting a customer reply, quoting a price, or checking whether a requested tour is feasible.
---

# Tour management — Krabi Secret Islands

Source of truth in code: `src/components/secret-islands/booking-data.ts` (prices, zones, add-ons) and `content.ts` (tours, FAQ). Check these before quoting. If code and this file disagree, the code wins and this file needs updating.

## Pricing rules
- Prices are **per boat**, never per person. Say "per boat" in every quote.
- Tour base prices (THB, per boat): Sunset & Night Glow Combo 19,500 (6 h, from 15:30); Sunset Romance & Dinner 16,500 (4 h); 4-Islands VIP & Sunset 18,500; Night Glow plankton tour 14,500.
- Zone surcharge on the picker: near 0, mid +1,500, far +4,000. Chicken Island, Tup, Koh Poda, Phra Nang are all "near" (no surcharge) — but extending a trip adds time and must be priced separately.
- Add-ons: Verpflegung an Bord 500/person (2 meals + drinks, no cook); Drohnenpaket 4,500/boat; Romantik-Deko 2,500/boat; Sekt 2,200/boat; Champagner 6,500/boat; Kindermenü 300/child.
- **Never** offer a "Sunset fine dining / private chef / 3-course dinner" — there is no cook on board. Dinner = Verpflegung an Bord.
- **Never** give national park fee amounts unless the team confirms them. Park fees may be quoted as included only when the team has decided so for that quote (e.g. 2 × 400 THB = 800 THB for two adults) and it is written into the total.

## Scope rules
- Start: Ao Nang or Krabi Town. **No hotel transfer** as a standard product — pickup only if the team confirms it for that quote (ask first, don't promise).
- **No longtail boat** offer.
- Private boat for the group only; no shared/group boat wording.
- Max 5 guests per boat.
- Guide: English-speaking guide only if confirmed for the date; never claim languages the guide does not speak.

## Feasibility
- Sunset in late December is about 18:00. Start 15:30 gives ~6 h total.
- Tup sandbar is tide-dependent (low tide only). Check tides before promising it.
- A stop list longer than ~6 h needs a longer booking (extension priced separately, team confirms).
- Full moon weakens bioluminescence; new moon is strongest. Mention only if true for the date, and check the moon phase first.

## Deposit, cancellation, weather
- Deposit: 30 % after confirmation (card or bank transfer), rest paid on tour day.
- Weather: storm warning → free reschedule or 100 % refund (from the website FAQ).
- Customer cancellation policy is **not defined in the data**. Do not invent it in a customer reply. Propose a rule to the team and mark it as proposal until confirmed.

## Legal / sensitive (do not change without the owner, Manni)
- Licence and insurance statements.
- Claims like "geheim" or "kein Gruppenboot".
- Review section.
- No fabricated reviews or ratings; no unprovable health or environment claims.

## Reply style
- Short, polite, in the customer's language (EN for international guests).
- Give a total line: "Total for the two of you: X THB per boat".
- Mark anything not confirmed as a placeholder in [brackets] and list it for the team. Never send placeholders as final.
- No emoji-heavy text unless the customer uses emoji.

## Checklist before sending a quote
1. Date and tour confirmed, availability checked (or stated as pending).
2. Price from `booking-data.ts`, per boat, add-ons listed with totals.
3. Park fees: included or separate — as decided by the team.
4. Pickup, guide language, boat photos: only what is confirmed.
5. Cancellation: only confirmed terms, otherwise marked as pending.
6. No placeholders left in the final text.
