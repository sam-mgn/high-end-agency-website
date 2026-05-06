import type { Metadata } from "next";

/**
 * Source unique pour l'URL canonique du site.
 * A mettre a jour des que le domaine de production change.
 */
export const SITE_URL = "https://reocom.fr";
export const SITE_METADATA_BASE = new URL(SITE_URL);

export const DEFAULT_SEO_IMAGE = "/plan-de-travail.png";

const DEFAULT_TITLE = "REOCOM | Agence de Communication Strategique";
const DEFAULT_DESCRIPTION =
  "Creation de contenu et strategie de communication sur mesure. Boostez votre presence en ligne avec une identite visuelle strategique.";

type MetadataInput = {
  title?: Metadata["title"];
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
}: MetadataInput = {}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;

  return {
    metadataBase: SITE_METADATA_BASE,
    title,
    description,
    keywords: [
      "communication",
      "branding",
      "strategie",
      "identite visuelle",
      "agence",
      "marketing",
      "Chartres",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalUrl,
      title: typeof title === "string" ? title : DEFAULT_TITLE,
      description,
      siteName: "REOCOM",
      images: [
        {
          url: DEFAULT_SEO_IMAGE,
          width: 1200,
          height: 630,
          alt: "REOCOM - Agence de Communication Strategique",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : DEFAULT_TITLE,
      description,
      images: [DEFAULT_SEO_IMAGE],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}
