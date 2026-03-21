# CLAUDE.md — Devisio Landing Page

## Project
Pre-launch waitlist landing page for Devisio.
Devisio is a voice-first quote generation SaaS for French tradespeople (artisans).
Single goal of this repo: capture emails for the waitlist before product launch.

GitHub: devisio-hq/devisio.fr
Deployed on: Vercel
Domain: devisio.fr (to purchase after first deploy)

## Go-to-market
Initial launch: local word-of-mouth in the Landes region, France.
Driven by the CEO. First users will be artisans referred directly.

## Stack
- Next.js 16 App Router + TypeScript strict
- Tailwind CSS v4 (tokens in globals.css, no tailwind.config.ts)
- shadcn/ui (components in components/ui/) — requires clsx, tailwind-merge, class-variance-authority
- framer-motion (installed via npm — used directly for animations)
- Magic UI + Motion Primitives (copy-paste in components/ui/, no npm install)
- Resend (email capture via API route at /api/waitlist)
- Vercel (deployment, no AWS for landing)

## Color tokens (globals.css)
--color-primary: #f97316      ← orange, brand principal
--color-primary-dark: #ea580c ← hover states
--color-accent: #d97706       ← amber, highlights (NOT for success states — those use hardcoded green-600)
--color-background: #ffffff
--color-surface: #fafafa
--color-text: #111827
--color-text-muted: #6b7280
--color-border: #e5e7eb

Font: Geist (built into Next.js). No Google Fonts.

## File structure
components/layout/     → navbar.tsx, footer.tsx
components/sections/   → hero.tsx, social-proof.tsx, demo-flow.tsx, early-access.tsx
components/ui/         → shadcn generated + waitlist-form.tsx (shared)
lib/                   → resend.ts (singleton), validations.ts (zod schema), utils.ts (cn helper)
app/api/waitlist/      → POST route handler

## Architecture rules
- Mobile first on every component — target users are on phone
- Light mode only — no dark mode, no next-themes
- No navbar links — logo text "Devisio" in orange only
- Single CTA, single goal: email capture
- Shared form logic lives in components/ui/waitlist-form.tsx
- No HTML <form> tags — use div + onClick handlers
- API route validates with Zod before calling Resend
- Env vars: RESEND_API_KEY, RESEND_AUDIENCE_ID — never hardcoded

## Landing page sections (in order)
1. Hero         → badge animé + H1 + sous-titre + formulaire email + mockup mobile
2. SocialProof  → 3 stats marché artisans (chiffres réels, pas de fake testimonials)
3. DemoFlow     → 3 étapes visuelles : tu parles → devis généré → tu envoies
4. EarlyAccess  → CTA Before/After/Bridge, fond orange, formulaire répété
5. Footer       → Mentions légales + Politique de confidentialité uniquement

## Business model (affects copy)
Freemium with a usage limit: 3 quotes/month free, paid plan beyond that.
Do NOT write copy that implies everything is free during beta — it creates wrong expectations.
Correct framing: "3 devis offerts pour tester".

## Closed decisions — do not reopen
- No dark mode
- No pricing section on landing
- No authentication
- No navbar links
- No HTML form tags
- Magic UI and Motion Primitives via copy-paste only
- Vercel deployment only (no AWS for landing)
- Font: Geist only
- Light mode only

## Env vars required
RESEND_API_KEY=re_your_key_here
RESEND_AUDIENCE_ID=your_audience_id_here

## Quality checklist before every commit
- [ ] pnpm build passes — zero TS errors, zero warnings
- [ ] Responsive at 375px (iPhone SE) and 390px (iPhone 14)
- [ ] White text on --color-primary passes WCAG AA contrast
- [ ] Waitlist form handles: invalid email, double submit, network error
- [ ] No console.log in production code
- [ ] .env.local is in .gitignore