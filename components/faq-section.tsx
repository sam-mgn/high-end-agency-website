"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quels types de services de communication proposez-vous ?",
    answer: "Nous offrons une gamme complète de services incluant la création d'identité visuelle, la stratégie digitale, le community management, la communication corporate, la production visuelle (photo, vidéo, motion design) et le consulting stratégique. Chaque service est personnalisé selon vos besoins spécifiques.",
  },
  {
    question: "Comment se déroule un projet type avec REOCOM ?",
    answer: "Notre processus se déroule en 4 étapes : Découverte & Analyse (compréhension de vos besoins), Stratégie & Conception (élaboration du plan d'action), Création & Déploiement (production et mise en œuvre), et Optimisation & Suivi (mesure des résultats et ajustements). Chaque étape implique une collaboration étroite avec vous.",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer: "Les délais varient selon la complexité du projet. Une identité visuelle complète prend généralement 4-6 semaines, une stratégie digitale 2-4 semaines de conception, et une campagne de communication 6-8 semaines. Nous vous fournissons toujours un planning détaillé dès le début du projet.",
  },
  {
    question: "Comment sont définis les tarifs de vos prestations ?",
    answer: "Nos tarifs sont établis sur mesure en fonction de la portée du projet, des livrables attendus et de la durée de l'accompagnement. Nous proposons des devis détaillés gratuits après un premier échange pour comprendre vos besoins. Notre approche transparente vous garantit aucune surprise.",
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles ?",
    answer: "Absolument ! Nous accompagnons des startups, des PME et des grandes entreprises. Notre approche s'adapte à la taille et aux ressources de chaque client. Que vous soyez en phase de lancement ou de croissance, nous avons des solutions adaptées à votre situation.",
  },
  {
    question: "Comment mesurez-vous le succès d'une campagne ?",
    answer: "Nous définissons des KPIs clairs dès le début du projet : taux d'engagement, croissance de l'audience, conversions, ROI, notoriété de marque, etc. Vous recevez des rapports réguliers avec des analyses détaillées et des recommandations d'optimisation.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Questions{" "}
            <span className="text-[#5AB4B4]">Fréquentes</span>
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services et notre méthode de travail.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#E5F0DD] rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-[#0D1826] font-semibold hover:text-[#5AB4B4] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#333C33] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
