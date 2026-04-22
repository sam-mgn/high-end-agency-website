# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Production build (TypeScript errors are ignored per next.config.mjs)
pnpm lint       # Run ESLint
pnpm start      # Start production server
```

## Architecture

This is a **French marketing agency website** (REOCOM) built with Next.js 16 app router, React 19, TypeScript, and Tailwind CSS v4. It is a single-page marketing site composed of stacked section components.

**Routing:** Only one route — `app/page.tsx` — which imports and assembles all section components in order. There are no additional pages or API routes.

**Component layout:**
- `components/` — Section-level components (`hero-section.tsx`, `services-section.tsx`, `contact-section.tsx`, etc.) and `header.tsx` / `footer.tsx`
- `components/ui/` — shadcn/ui primitives (Radix UI-based). Do not edit these manually; regenerate via shadcn CLI if needed.
- `hooks/` — `use-mobile.ts` (breakpoint detection), `use-toast.ts`
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `lib/constants/info.ts` — Reads EmailJS credentials from env vars

**Contact form:** Uses `@emailjs/browser` for serverless email submission. Credentials come from `.env.local`:
```
NEXT_PUBLIC_EMAIL_SERVICE_ID
NEXT_PUBLIC_EMAIL_TEMPLATE_ID
NEXT_PUBLIC_EMAIL_PUBLIC_KEY
```

## Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.js`; configuration lives in `app/globals.css`
- Brand color tokens (defined as CSS custom properties in `globals.css`):
  - Primary: Teal `#5AB4B4`
  - Secondary: Navy `#0D1826`
  - Tertiary: Cream `#E5F0DD`
- shadcn/ui is configured with the `new-york` style and `neutral` base color
- Font: **Mukta** (Google Fonts), weights 200–800

## Key Constraints

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — builds succeed even with TS errors, and images bypass Next.js optimization.
- All site content is in **French**.
- No backend/database — static marketing site with EmailJS for the contact form.
