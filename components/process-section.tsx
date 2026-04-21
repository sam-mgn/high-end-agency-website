"use client"

import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react"

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
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826]">
            Notre Méthodologie
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F8FAF7] rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step number */}
              <div className="w-14 h-14 bg-[#0D1826] rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-lg font-semibold italic">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <step.icon className="w-7 h-7 text-[#5AB4B4]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0D1826] mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#333C33]/70 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Points */}
              <ul className="space-y-3">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#333C33]">
                    <span className="w-2 h-2 rounded-full bg-[#5AB4B4] flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
