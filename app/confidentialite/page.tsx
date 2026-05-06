import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de Confidentialite | REOCOM",
  description: "Politique de confidentialite et protection des donnees personnelles de REOCOM.",
  path: "/confidentialite",
})

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de Confidentialité" updatedAt="22 avril 2026">
      <p>
        REOCOM accorde une grande importance à la protection de vos données personnelles. La
        présente politique de confidentialité décrit comment nous collectons, utilisons et
        protégeons vos informations conformément au Règlement Général sur la Protection des
        Données (RGPD).
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données collectées sur ce site est REOCOM, joignable à
        l&apos;adresse <a href="mailto:contact@reocom.fr">contact@reocom.fr</a>.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons les données suivantes lorsque vous utilisez notre formulaire de contact :</p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone (facultatif)</li>
        <li>Sujet et contenu du message</li>
      </ul>
      <p>
        Nous collectons également des données de navigation anonymisées via Vercel Analytics
        (pages visitées, durée de session, etc.) afin d&apos;améliorer l&apos;expérience
        utilisateur.
      </p>

      <h2>3. Finalité du traitement</h2>
      <p>Vos données sont collectées pour :</p>
      <ul>
        <li>Répondre à vos demandes de contact</li>
        <li>Vous adresser des devis et propositions commerciales</li>
        <li>Améliorer la qualité de nos services</li>
        <li>Mesurer l&apos;audience du site</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Le traitement de vos données repose sur votre consentement (formulaire de contact) et
        sur l&apos;intérêt légitime de REOCOM (mesure d&apos;audience anonymisée).
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les données issues du formulaire de contact sont conservées pendant 3 ans à compter du
        dernier contact. Les données analytiques sont conservées 14 mois.
      </p>

      <h2>6. Destinataires des données</h2>
      <p>
        Vos données sont destinées exclusivement à REOCOM et ne sont jamais cédées ni vendues à
        des tiers. Les sous-traitants techniques (EmailJS pour l&apos;envoi des messages, Vercel
        pour l&apos;hébergement) peuvent y accéder dans le cadre strict de leurs prestations.
      </p>

      <h2>7. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d&apos;accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d&apos;opposition</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à{" "}
        <a href="mailto:contact@reocom.fr">contact@reocom.fr</a>. En cas de désaccord, vous
        pouvez introduire une réclamation auprès de la CNIL{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          (cnil.fr)
        </a>
        .
      </p>

      <h2>8. Cookies</h2>
      <p>
        Le site utilise des cookies techniques nécessaires à son fonctionnement et des cookies
        de mesure d&apos;audience anonymisée. Aucun cookie publicitaire n&apos;est déposé.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        REOCOM met en œuvre les mesures techniques et organisationnelles appropriées pour
        protéger vos données contre toute destruction, perte, altération, divulgation ou accès
        non autorisé.
      </p>

      <h2>10. Modification</h2>
      <p>
        La présente politique peut être modifiée à tout moment. Toute modification sera publiée
        sur cette page avec sa date de mise à jour.
      </p>
    </LegalLayout>
  )
}
