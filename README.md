# Krabi Secret Islands

Website + Buchungsanfragen für private Speedboot-Touren in Krabi.
TanStack Start (React 19, SSR), Tailwind v4, Framer Motion. Hosting: Vercel. Anfragen werden in einem privaten Vercel-Blob-Speicher abgelegt (keine Datenbank nötig).

## Seiten
- `/` – Landingpage (DE/EN/ZH/KO/JA über `?lang=`)
- `/krabi-guide` – Insider Guide (Artikel)
- `/anfragen` – Buchungsanfragen (nur Admin, Passwort)
- `/sitemap.xml`, `/robots.txt`

## Einstellungen (Vercel → Settings → Environment Variables)
| Name | Pflicht | Zweck |
| --- | --- | --- |
| `BLOB_READ_WRITE_TOKEN` | ja | Privater Blob-Speicher für Anfragen (wird beim Verbinden des Speichers automatisch gesetzt) |
| `ADMIN_PASSWORD` | ja | Passwort für `/anfragen` |
| `ADMIN_SESSION_SECRET` | optional | Eigener Schlüssel für das Login-Cookie (sonst `ADMIN_PASSWORD`) |
| `RESEND_API_KEY` | optional | E-Mail bei neuer Anfrage (resend.com) |
| `BOOKING_NOTIFY_EMAIL` | optional | Empfänger dieser E-Mails |
| `BOOKING_FROM_EMAIL` | optional | Absender, z. B. `Krabi Secret Islands <buchung@krabi-secret-islands.com>` |

## Lokal
```sh
npm install
ADMIN_PASSWORD=test npm run dev   # http://localhost:8080 (ohne Blob-Token: Anfragen nur im Arbeitsspeicher)
npm run build && npm run typecheck
```
