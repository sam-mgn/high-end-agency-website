import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Mentions Légales | REOCOM",
  description: "Mentions légales du site REOCOM, agence de communication stratégique.",
}

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions Légales" updatedAt="22 avril 2026">
      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>REOCOM</strong>, agence de communication
        stratégique.
      </p>
      <p>
        <strong>Adresse :</strong> Chartres, France
        <br />
        <strong>Email :</strong> <a href="mailto:contact@reocom.fr">contact@reocom.fr</a>
        <br />
        <strong>Téléphone :</strong> <a href="tel:+33602299660">06.02.29.96.60</a>
      </p>

      <h2>2. Directeur de la publication</h2>
      <p>Le directeur de la publication est le représentant légal de REOCOM.</p>

      <h2>3. Hébergeur</h2>
      <p>
        Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        <br />
        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes,
        icônes, etc.) est la propriété exclusive de REOCOM ou de ses partenaires et est protégé
        par les lois françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation de tout ou
        partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite
        sans l&apos;autorisation écrite préalable de REOCOM.
      </p>

      <h2>5. Responsabilité</h2>
      <p>
        REOCOM met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils
        disponibles et vérifiés, mais ne saurait être tenu responsable des erreurs, d&apos;une
        absence de disponibilité des fonctionnalités et/ou de la présence de virus sur son site.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        Les sites internet peuvent offrir des liens vers d&apos;autres sites internet ou
        d&apos;autres ressources disponibles sur Internet. REOCOM ne dispose d&apos;aucun moyen
        pour contrôler les sites en connexion avec ses sites internet.
      </p>

      <h2>7. Droit applicable</h2>
      <p>
        Tant le présent site que les modalités et conditions de son utilisation sont régis par le
        droit français, quel que soit le lieu d&apos;utilisation. En cas de contestation
        éventuelle, et après l&apos;échec de toute tentative de recherche d&apos;une solution
        amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter
        à l&apos;adresse <a href="mailto:contact@reocom.fr">contact@reocom.fr</a>.
      </p>
    </LegalLayout>
  )
}
