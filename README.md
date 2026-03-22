# devisio.dev

Pre-launch waitlist landing page for [Devisio](https://devisio.dev) — a voice-first quote generation SaaS for French tradespeople (artisans).

Single goal: capture emails before launch.

## Stack

- **Next.js 16** App Router + TypeScript strict
- **Tailwind CSS v4** — tokens in `app/globals.css`, no `tailwind.config.ts`
- **shadcn/ui** — `components/ui/` (button, input, waitlist-form)
- **framer-motion** — mount animations (hero H1/subtitle) + scroll animations (stats stagger)
- **Resend** — email capture + HTML confirmation email via `/api/waitlist`
- **Zod** — request validation in the API route
- **Vercel** — deployment target

## Structure

```
app/
  layout.tsx                        # Geist font, SEO metadata
  page.tsx                          # Assembles all sections
  globals.css                       # Color tokens + Tailwind theme
  api/waitlist/route.ts             # POST — validates, deduplicates, adds to Resend audience, sends confirmation
  mentions-legales/page.tsx         # Legal notice page
  politique-confidentialite/page.tsx # Privacy policy page

components/
  layout/
    navbar.tsx            # Sticky, logo links to /
    footer.tsx            # Mentions légales + Politique de confidentialité
  sections/
    hero.tsx              # Badge + H1 + form + phone mockup
    social-proof.tsx      # 3 artisan market stats (source CAPEB 2024)
    demo-flow.tsx         # 3-step visual: tu parles → devis généré → tu envoies
    early-access.tsx      # Before/After/Bridge CTA, orange bg, repeated form
  ui/
    waitlist-form.tsx     # Shared email form (default + inverted variant)
    button.tsx            # shadcn
    input.tsx             # shadcn

lib/
  resend.ts               # Resend singleton
  validations.ts          # Zod schema
  utils.ts                # cn() helper (clsx + tailwind-merge)
```

## Waitlist API

`POST /api/waitlist` — accepts `{ email }`:

1. Validates with Zod
2. Checks Resend audience for duplicates (Resend upserts silently — no error on re-submit)
3. If already registered → returns `{ success: true }` without sending another email
4. Creates contact in Resend audience
5. Sends a branded HTML confirmation email (table-based, email-client compatible)

## Local setup

```bash
pnpm install
cp .env.example .env.local   # fill in your keys
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Env vars

```
RESEND_API_KEY=re_your_key_here
RESEND_AUDIENCE_ID=your_audience_id_here
```

Both are required. The API route returns a 500 if `RESEND_AUDIENCE_ID` is missing.

## Deploy

Deployed on Vercel. Push to `main` triggers a production deploy.
Set env vars in the Vercel project settings before the first deploy.

Domain: `devisio.dev`.
