"use client"

import { Search, Lightbulb, Rocket, BarChart } from "lucide-react"

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
    icon: BarChart,
    title: "Optimisation & Suivi",
    description: "Nous mesurons les résultats et optimisons continuellement pour maximiser votre ROI.",
    details: ["Analyse des performances", "Ajustements continus", "Reporting régulier"],
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#E5F0DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Notre Processus</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Boostez Votre Présence{" "}
            <span className="text-[#5AB4B4]">En Ligne</span>
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed">
            Une méthodologie éprouvée pour transformer votre vision en résultats concrets.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#5AB4B4]/30 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 group">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 bg-[#0D1826] rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <span className="text-[#5AB4B4] text-xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#5AB4B4]/10 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:bg-[#5AB4B4] transition-colors">
                    <step.icon className="w-6 h-6 text-[#5AB4B4] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0D1826] mb-3 text-center lg:text-left" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {step.title}
                  </h3>

                  <p className="text-[#333C33] mb-4 leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#333C33]">
                        <span className="w-1.5 h-1.5 bg-[#5AB4B4] rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
