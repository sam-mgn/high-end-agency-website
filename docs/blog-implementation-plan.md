# Blog implementation plan (inspire de Editia)

Objectif: passer du squelette blog SEO-first actuel vers un blog complet, scalable et editorialisable.

## Statut actuel

- Fait: migration vers MDX local (`content/blog/fr/*.mdx`)
- Fait: parsing frontmatter + reading time dans `lib/blog.ts`
- Fait: rendu article MDX dans `app/blog/[slug]/page.tsx`
- Fait: template article style magazine (hero + tags + meta + contenu)
- Fait: composants MDX custom (`Callout`, `ArticleCTA`)
- Fait: mini 404 specifique au blog (`app/blog/[slug]/not-found.tsx`)
- A faire: enrichir la bibliotheque de composants MDX (image, tableau, FAQ, code)
- A faire: ajouter 2 a 4 articles FR supplementaires

## 1) Cible fonctionnelle

- Listing blog (`/blog`)
- Page article (`/blog/[slug]`)
- Metadata complete par article (title, description, canonical, OG/Twitter)
- Donnees structurees `Article` (JSON-LD)
- Sitemap enrichi automatiquement

## 2) Architecture recommandee (inspiration Editia)

### Phase A - Source de contenu

Option recommandee court terme:

- MDX local dans `content/blog/fr/*.mdx`
- Frontmatter minimum:
  - `title`
  - `description`
  - `date`
  - `tags`
  - `coverImage` (optionnel)

Evolutions possibles:

- Headless CMS (Sanity, Contentful, etc.) si besoin de workflow editorial multi-acteurs

### Phase B - Couche data blog

Creer une couche type `lib/blog.ts` (style Editia):

- `getAllPosts(locale)` pour le listing
- `getPostBySlug(locale, slug)` pour l'article
- tri par date decroissante
- fallback propre si article absent
- calcul reading time

### Phase C - Rendu article

- Rendu MDX (composants autorises)
- gabarit article unique (hero, meta, corps, tags, CTA)
- composants markdown stylises (titres, listes, code, citations)

## 3) SEO & indexation

- Utiliser `buildPageMetadata()` partout
- Ajouter metadata article via `generateMetadata()`
- Maintenir JSON-LD `Article`
- Enrichir `app/sitemap.ts` depuis la source des posts
- Verifier `robots.ts` autorise bien `/blog`

## 4) Performance & qualite

- `generateStaticParams()` pour prerendre les slugs
- images blog optimisees (formats web, dimensions fixes)
- checks automatises: slug unique, date valide, champs requis

## 5) Plan d'execution propose

1. Migrer le dataset mock vers MDX local
2. Ajouter parsing frontmatter (inspiration `gray-matter`)
3. Mettre en place rendu MDX article
4. Ajouter composants article reutilisables
5. Ajouter 3 a 5 articles reels optimises SEO
6. QA finale (metadata, schema, sitemap, Lighthouse)

## 6) Informations client a collecter avant production

- ligne editoriale (angles, ton, niveau d'expertise)
- ICP principal (persona)
- priorites SEO (themes + mots-cles)
- calendrier de publication
- CTA principal par article (contact, audit, prise de RDV)
