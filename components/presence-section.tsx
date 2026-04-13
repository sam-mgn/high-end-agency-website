"use client"

import { Shield, Zap, Heart, Target } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Vos données et projets sont protégés avec les plus hauts standards de sécurité.",
  },
  {
    icon: Zap,
    title: "100% Dynamique",
    description: "Une équipe réactive et agile qui s'adapte rapidement à vos besoins.",
  },
  {
    icon: Heart,
    title: "100% Attentif",
    description: "Un accompagnement personnalisé avec une écoute attentive de vos objectifs.",
  },
  {
    icon: Target,
    title: "100% Fiable",
    description: "Des engagements respectés et des résultats mesurables garantis.",
  },
]

export function PresenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Notre Approche</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            <span className="text-[#5AB4B4]">BOOSTEZ</span> Votre Présence En Ligne
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed">
            Notre approche repose sur quatre piliers fondamentaux pour garantir 
            le succès de votre stratégie de communication.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-[#E5F0DD] hover:bg-[#0D1826] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#5AB4B4] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D1826] group-hover:text-white mb-3 transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                {pillar.title}
              </h3>
              <p className="text-[#333C33] group-hover:text-white/80 transition-colors leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Large Brand Display */}
        <div className="mt-24 relative">
          <div className="bg-[#0D1826] rounded-3xl p-12 lg:p-20 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#5AB4B4] rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#5AB4B4] rounded-full blur-[100px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Logo */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-baseline">
                  <span className="text-[#5AB4B4] text-7xl lg:text-9xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    R
                  </span>
                  <span className="text-white text-7xl lg:text-9xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    EOCOM
                  </span>
                </div>
                {/* Decorative circles */}
                <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start">
                  <div className="w-4 h-4 bg-[#5AB4B4] rounded-full" />
                  <div className="w-4 h-4 bg-[#5AB4B4]/60 rounded-full" />
                  <div className="w-4 h-4 bg-[#5AB4B4]/30 rounded-full" />
                  <div className="w-16 h-1 bg-[#5AB4B4]/50 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Identité Visuelle Stratégique
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Valoriser votre marque avec une identité visuelle qui raconte votre histoire, 
                  incarne vos valeurs et vous différencie de la concurrence.
                </p>
                <ul className="space-y-3">
                  {["Design Premium", "Cohérence de Marque", "Impact Mémorable"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80 justify-center lg:justify-start">
                      <span className="w-2 h-2 bg-[#5AB4B4] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
