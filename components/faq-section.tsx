"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quels types de services proposez-vous ?",
    answer: "Nous offrons une gamme complète de services incluant la création d'identité visuelle, la stratégie digitale, le community management, la communication corporate et le consulting stratégique.",
  },
  {
    question: "Comment se déroule un projet avec REOCOM ?",
    answer: "Notre processus se déroule en 4 étapes : Découverte & Analyse, Stratégie & Conception, Création & Déploiement, et Optimisation & Suivi.",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer: "Les délais varient selon la complexité du projet. Une identité visuelle complète prend généralement 4-6 semaines. Nous vous fournissons toujours un planning détaillé.",
  },
  {
    question: "Comment sont définis les tarifs ?",
    answer: "Nos tarifs sont établis sur mesure en fonction de la portée du projet. Nous proposons des devis détaillés gratuits après un premier échange.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title & Image */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826] leading-tight mb-8">
              Questions{" "}
              <span className="text-[#5AB4B4]">Fréquemment Posées</span>
            </h2>
            
            {/* FAQ Image */}
            <div className="relative bg-[#E5F0DD] rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-[#5AB4B4] opacity-20">
                  FAQ
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div>
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
        </div>
      </div>
    </section>
  )
}
