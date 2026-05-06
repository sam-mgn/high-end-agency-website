# SEO Guide (Reocom)

Ce guide explique comment maintenir et optimiser le SEO dans le projet.

## 1) Source unique de configuration

Le fichier principal est `lib/seo.ts`.

Variables a mettre a jour en priorite:

- `SITE_URL`: domaine de production (ex: `https://reocom.fr`)
- `DEFAULT_SEO_IMAGE`: image Open Graph/Twitter par defaut

La fonction `buildPageMetadata()` sert de base commune pour:

- `metadataBase`
- canonical URL
- Open Graph
- Twitter Card
- robots

## 2) Comment ajouter une nouvelle page SEO-ready

Dans la page (`app/.../page.tsx`):

1. Importer le type metadata et le helper:
   - `import type { Metadata } from "next"`
   - `import { buildPageMetadata } from "@/lib/seo"`
2. Exporter la metadata de la page:
   - `export const metadata: Metadata = buildPageMetadata({ ... })`
3. Renseigner au minimum:
   - `title`
   - `description`
   - `path`

Exemple:

```ts
export const metadata: Metadata = buildPageMetadata({
  title: "Nouvelle page | REOCOM",
  description: "Description claire de la page pour les moteurs de recherche.",
  path: "/nouvelle-page",
})
```

## 3) Sitemap et robots

- `app/sitemap.ts`: liste des pages indexables
- `app/robots.ts`: directives crawl + lien vers le sitemap

Quand une nouvelle page publique est ajoutee:

1. Ajouter son path dans `staticPages` de `app/sitemap.ts`
2. Verifier qu'elle doit etre indexee

## 4) Images SEO

Image actuelle par defaut:

- `public/plan-de-travail.png` (base temporaire, a remplacer)

Recommandation production:

- Utiliser une image 1200x630 dediee (PNG/JPG)
- Mettre a jour `DEFAULT_SEO_IMAGE` dans `lib/seo.ts`

## 5) Informations client a collecter

Pour optimiser le SEO, demander au client:

- Liste des services prioritaires
- Zone geographique cible (ville, region, pays)
- Mots-cles strategiques (5 a 20)
- Positionnement / promesse cle
- Coordonnees officielles (NAP: Name, Address, Phone)
- Liens sociaux officiels
- FAQ metier (questions/reponses reelles)

## 6) Evolutions prevues (blog)

Quand la section blog sera ajoutee:

- Definir un template metadata par article
- Ajouter les routes blog au sitemap
- Definir schema.org (Article, Organization, FAQPage si pertinent)
