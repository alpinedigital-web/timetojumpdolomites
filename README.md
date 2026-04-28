# Time to Jump Dolomites

> Helicopter skydiving in the heart of the UNESCO Dolomites — Trentino-South Tyrol.

**Client:** David Prato · TimeToJump Dolomites  
**Agency:** Alpine Digital  
**Stack:** Vanilla HTML/CSS/JS · Supabase (PostgreSQL + Edge Functions) · Stripe · Cloudflare Pages

---

## Repository Structure

```
timetojumpdolomites/
│
├── public/                 ← Deployable website (Cloudflare Pages)
│   ├── index.html          ← Main landing page
│   ├── terms.html          ← Terms & Conditions (AGB)
│   ├── privacy.html        ← Privacy Policy
│   ├── success.html        ← Stripe checkout success
│   ├── admin.html          ← Admin panel (event management)
│   ├── _headers            ← Cloudflare security headers
│   ├── _redirects          ← Cloudflare redirect rules
│   ├── css/                ← Stylesheets
│   ├── js/                 ← Client-side JavaScript
│   └── img/                ← Optimized images
│
├── supabase/               ← Backend infrastructure
│   ├── functions/          ← Edge Functions (Stripe integration)
│   └── migrations/         ← Database schema (SQL)
│
├── docs/                   ← Project documentation (internal)
│   ├── ROADMAP.md          ← Development phases & priorities
│   ├── STATE.md            ← Current status & session log
│   ├── CHANGELOG.md        ← Version history
│   └── LEISTUNGSBERICHT.md ← Service report for client
│
├── business/               ← Correspondence & invoicing
│   ├── korrespondenz/      ← Meeting notes, transcripts
│   ├── angebote/           ← Proposals (gitignored: .docx/.pdf)
│   ├── rechnungen/         ← Invoices (gitignored: .docx)
│   ├── scripts/            ← Document generation scripts
│   ├── media-input/        ← Raw media from client (gitignored)
│   └── internal/           ← Pitch deck, status presentations
│
├── .agents/                ← AI workflow configs (gitignored)
├── .env                    ← Environment secrets (gitignored)
├── .gitignore
└── README.md               ← This file
```

## Quick Start

```bash
# Serve locally
cd public && python -m http.server 8080

# Deploy Edge Functions
supabase functions deploy create-setup-intent --project-ref <REF>
```

## Key Documentation

| Document | Purpose |
|----------|---------|
| [ROADMAP](docs/ROADMAP.md) | Development phases, current priorities |
| [STATE](docs/STATE.md) | Blockers, decisions, session log |
| [CHANGELOG](docs/CHANGELOG.md) | Full version history |

## Deployment

- **Frontend:** Cloudflare Pages → Build output: `public/`
- **Backend:** Supabase (hosted) → Edge Functions + PostgreSQL
- **Payments:** Stripe SetupIntent (0.00€ card hold, balance on-site)
- **Domain:** `timetojumpdolomites.com` (pending DNS migration from Aruba)
