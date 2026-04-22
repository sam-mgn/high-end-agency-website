"use client"

import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileCarousel } from "@/components/mobile-carousel"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Découverte & Analyse",
    description: "Nous analysons votre marché, vos concurrents et vos objectifs pour comprendre parfaitement vos besoins.",
    details: ["Audit de marque", "Analyse concurrentielle", "Définition des objectifs"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Stratégie & Conception",
    description: "Nous élaborons une stratégie sur mesure et créons les premiers concepts visuels de votre projet.",
    details: ["Plan stratégique", "Concepts créatifs", "Direction artistique"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Création & Déploiement",
    description: "Nous produisons tous les livrables et déployons votre stratégie sur les canaux définis.",
    details: ["Production créative", "Déploiement multicanal", "Accompagnement"],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimisation & Suivi",
    description: "Nous mesurons les résultats et optimisons continuellement pour maximiser votre ROI.",
    details: ["Analyse des performances", "Ajustements continus", "Reporting régulier"],
  },
]

export function ProcessSection() {
  const cards = steps.map((step, index) => (
    <div
      key={index}
      className="bg-[#EAEFE8] rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 h-full"
    >
      <div className="w-14 h-14 bg-[#0D1826] rounded-full flex items-center justify-center mb-8">
        <span className="text-white text-lg font-semibold italic">{step.number}</span>
      </div>
      <div className="mb-6">
        <step.icon className="w-7 h-7 text-[#5AB4B4]" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-[#0D1826] mb-4 leading-tight">{step.title}</h3>
      <p className="text-[#333C33]/70 text-sm leading-relaxed mb-6">{step.description}</p>
      <ul className="space-y-3">
        {step.details.map((detail, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-[#333C33]">
            <span className="w-2 h-2 rounded-full bg-[#5AB4B4] flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#E5F0DD] rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Notre Approche</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826]">
            Une méthodologie{" "}
            <span className="text-[#5AB4B4]">éprouvée</span>
          </h2>
        </div>

        {/* Mobile: carousel */}
        <MobileCarousel items={cards} />

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold px-8 rounded-full"
          >
            <Link href="#contact">Commencer un projet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
