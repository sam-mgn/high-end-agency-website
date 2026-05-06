# high-end-agency-website

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## SEO setup (base project)

Le projet inclut maintenant une base SEO centralisee inspiree de `Editia`:

- `lib/seo.ts`: source unique (`SITE_URL`, metadata helper commun)
- `app/sitemap.ts`: sitemap XML
- `app/robots.ts`: directives robots
- `public/plan-de-travail.png`: image SEO par defaut (temporaire)

Documentation complete:

- `docs/seo.md`
- `docs/blog-implementation-plan.md`

### Ce que le client doit nous fournir pour optimisation

- Services prioritaires et cibles business
- Zones geographiques cibles
- Mots-cles prioritaires
- Positionnement / differenciation
- Coordonnees officielles (adresse, telephone, email)
- FAQ metier

### A mettre a jour en premier

1. `SITE_URL` dans `lib/seo.ts`
2. Image Open Graph/Twitter (`DEFAULT_SEO_IMAGE`)
3. Metadata page par page (title, description, canonical)
4. `staticPages` dans `app/sitemap.ts` lors de l'ajout de nouvelles pages

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_p80RQYhwHPsxrsJpozV2sxlY5y06)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/sam-mgn/high-end-agency-website" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
