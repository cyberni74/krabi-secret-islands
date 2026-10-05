# Krabi Secret Islands

Website + Buchungsanfragen für private Speedboot-Touren in Krabi.
TanStack Start (React 19, SSR), Tailwind v4, Framer Motion. Hosting: Vercel. Datenbank: Neon Postgres.

## Seiten
- `/` – Landingpage (DE/EN/ZH/KO/JA über `?lang=`)
- `/krabi-guide` – Insider Guide (Artikel)
- `/anfragen` – Buchungsanfragen (nur Admin, Passwort)
- `/sitemap.xml`, `/robots.txt`

## Einstellungen (Vercel → Settings → Environment Variables)
| Name | Pflicht | Zweck |
| --- | --- | --- |
| `DATABASE_URL` | ja | Neon Postgres (wird beim Verbinden der Neon-Datenbank automatisch gesetzt) |
| `ADMIN_PASSWORD` | ja | Passwort für `/anfragen` |
| `ADMIN_SESSION_SECRET` | optional | Eigener Schlüssel für das Login-Cookie (sonst `ADMIN_PASSWORD`) |
| `RESEND_API_KEY` | optional | E-Mail bei neuer Anfrage (resend.com) |
| `BOOKING_NOTIFY_EMAIL` | optional | Empfänger dieser E-Mails |
| `BOOKING_FROM_EMAIL` | optional | Absender, z. B. `Krabi Secret Islands <buchung@krabi-secret-islands.com>` |

Tabellen werden beim Build automatisch angelegt (`npm run db:migrate`, Ordner `migrations/`).

## Lokal
```sh
npm install
ADMIN_PASSWORD=test npm run dev   # http://localhost:8080 (ohne DATABASE_URL: eingebaute Test-Datenbank)
npm run build && npm run typecheck
```
