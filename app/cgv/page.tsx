import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Conditions Generales de Vente | REOCOM",
  description: "Conditions Generales de Vente des prestations REOCOM.",
  path: "/cgv",
})

export default function CgvPage() {
  return (
    <LegalLayout title="Conditions Générales de Vente" updatedAt="22 avril 2026">
      <p>
        Les présentes Conditions Générales de Vente (ci-après « CGV ») s&apos;appliquent à
        l&apos;ensemble des prestations de services proposées par REOCOM, agence de
        communication stratégique située à Chartres, France.
      </p>

      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes CGV régissent les relations contractuelles entre REOCOM et le Client dans
        le cadre des prestations de communication, identité visuelle, stratégie digitale,
        community management et conseil.
      </p>

      <h2>Article 2 — Devis et commande</h2>
      <p>
        Toute commande est précédée d&apos;un devis écrit, valable 30 jours à compter de sa date
        d&apos;émission. La signature du devis ou son acceptation par email vaut accord ferme et
        définitif du Client sur les prestations, le prix et les présentes CGV.
      </p>

      <h2>Article 3 — Tarifs</h2>
      <p>
        Les prix sont exprimés en euros, hors taxes, et facturés selon le devis accepté. Toute
        prestation supplémentaire fera l&apos;objet d&apos;un devis complémentaire.
      </p>

      <h2>Article 4 — Modalités de paiement</h2>
      <p>
        Sauf disposition contraire mentionnée au devis, les modalités sont les suivantes :
      </p>
      <ul>
        <li><strong>30 %</strong> à la signature du devis (acompte)</li>
        <li><strong>40 %</strong> à mi-parcours du projet</li>
        <li><strong>30 %</strong> à la livraison finale</li>
      </ul>
      <p>
        Les paiements s&apos;effectuent par virement bancaire à 30 jours date de facture. Tout
        retard de paiement entraînera l&apos;application de pénalités au taux de 3 fois le taux
        d&apos;intérêt légal, ainsi qu&apos;une indemnité forfaitaire de 40 € pour frais de
        recouvrement.
      </p>

      <h2>Article 5 — Délais d&apos;exécution</h2>
      <p>
        Les délais sont communiqués à titre indicatif et dépendent de la réactivité du Client
        (validations, transmission des éléments). REOCOM ne pourra être tenu responsable de
        retards imputables au Client.
      </p>

      <h2>Article 6 — Propriété intellectuelle</h2>
      <p>
        REOCOM conserve la propriété intellectuelle de toutes ses créations jusqu&apos;au
        paiement intégral du prix. La cession des droits d&apos;exploitation est expressément
        prévue au devis et prend effet à compter du règlement complet.
      </p>
      <p>
        REOCOM se réserve le droit d&apos;utiliser les créations à titre de référence dans son
        portfolio et ses supports de communication, sauf demande expresse de confidentialité du
        Client.
      </p>

      <h2>Article 7 — Modifications et révisions</h2>
      <p>
        Le devis inclut un nombre défini de cycles de révisions. Toute modification au-delà sera
        facturée selon le tarif horaire en vigueur.
      </p>

      <h2>Article 8 — Confidentialité</h2>
      <p>
        REOCOM s&apos;engage à conserver la stricte confidentialité de toutes les informations
        transmises par le Client dans le cadre de la prestation.
      </p>

      <h2>Article 9 — Responsabilité</h2>
      <p>
        La responsabilité de REOCOM est limitée au montant total de la prestation facturée. Elle
        ne saurait être engagée pour des dommages indirects (perte de chiffre d&apos;affaires,
        perte de clientèle, etc.).
      </p>

      <h2>Article 10 — Résiliation</h2>
      <p>
        En cas de manquement grave de l&apos;une des parties à ses obligations, l&apos;autre
        partie pourra résilier le contrat de plein droit, après mise en demeure restée sans
        effet pendant 15 jours.
      </p>

      <h2>Article 11 — Litiges et droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut
        d&apos;accord amiable, les tribunaux compétents de Chartres seront seuls compétents.
      </p>

      <h2>Article 12 — Contact</h2>
      <p>
        Pour toute question, contactez-nous à{" "}
        <a href="mailto:contact@reocom.fr">contact@reocom.fr</a>.
      </p>
    </LegalLayout>
  )
}
