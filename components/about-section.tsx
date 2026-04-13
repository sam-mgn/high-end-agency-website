"use client"

import { CheckCircle2 } from "lucide-react"

const features = [
  "Stratégies de communication personnalisées",
  "Création d'identité visuelle unique",
  "Gestion des réseaux sociaux",
  "Production de contenu de qualité",
  "Accompagnement stratégique",
  "Résultats mesurables",
]

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main logo display */}
              <div className="bg-[#E5F0DD] rounded-3xl p-12 lg:p-16">
                <div className="flex items-center justify-center">
                  <span className="text-[#5AB4B4] text-6xl lg:text-8xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    R
                  </span>
                  <span className="text-[#0D1826] text-6xl lg:text-8xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    EOCOM
                  </span>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="w-16 h-16 bg-[#5AB4B4]/20 rounded-full" />
                  <div className="w-16 h-16 bg-[#5AB4B4]/30 rounded-full" />
                  <div className="w-16 h-16 bg-[#5AB4B4]/40 rounded-full" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0D1826] text-white rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-[#5AB4B4]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>8+</p>
                <p className="text-sm text-white/80 mt-1">Années d&apos;expérience</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#5AB4B4] text-sm font-medium">À Propos de Nous</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Nous Accompagnons Les Entreprises Dans Toute Leur{" "}
              <span className="text-[#5AB4B4]">Communication</span>
            </h2>

            <p className="text-[#333C33] text-lg leading-relaxed mb-8">
              REOCOM est une agence de communication stratégique dédiée à transformer 
              la présence de votre marque. Notre approche combine créativité, stratégie 
              et expertise technique pour créer des expériences de marque mémorables 
              qui connectent avec votre audience et génèrent des résultats concrets.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5AB4B4] flex-shrink-0" />
                  <span className="text-[#333C33]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-[#E5F0DD]">
              <div>
                <p className="text-3xl font-bold text-[#0D1826]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>150+</p>
                <p className="text-[#333C33] text-sm mt-1">Projets Livrés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0D1826]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>50+</p>
                <p className="text-[#333C33] text-sm mt-1">Clients Actifs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0D1826]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>12</p>
                <p className="text-[#333C33] text-sm mt-1">Experts Créatifs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
