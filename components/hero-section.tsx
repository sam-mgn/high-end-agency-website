"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-[#0D1826] overflow-hidden pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5AB4B4] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5AB4B4] rounded-full blur-[150px]" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#5AB4B4] rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#5AB4B4] rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#5AB4B4] rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#5AB4B4] rounded-full animate-pulse" />
              <span className="text-[#5AB4B4] text-sm font-medium">Agence de Communication</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 italic">
              <span className="text-[#5AB4B4] not-italic font-black tracking-tight">CRÉATION</span>{" "}
              <span className="text-white">De Contenu</span>
              <br />
              <span className="text-white">Stratégie De Communication</span>
              <br />
              <span className="text-white">Sur Mesure</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Transformez votre vision en une identité de marque mémorable. 
              Nous créons des stratégies de communication qui captent l&apos;attention et génèrent des résultats.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold px-8 py-6 text-sm uppercase tracking-wide rounded-full"
              >
                <Link href="#services">
                  Prestations
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-sm uppercase tracking-wide rounded-full"
              >
                <Link href="#contact">
                  Commencer
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-[#5AB4B4]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>150+</p>
                <p className="text-white/60 text-sm mt-1">Projets Réalisés</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-[#5AB4B4]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>98%</p>
                <p className="text-white/60 text-sm mt-1">Clients Satisfaits</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-[#5AB4B4]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>8+</p>
                <p className="text-white/60 text-sm mt-1">Années d&apos;Expertise</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main visual card */}
              <div className="relative bg-gradient-to-br from-[#5AB4B4]/20 to-[#5AB4B4]/5 backdrop-blur-sm border border-[#5AB4B4]/30 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5AB4B4] rounded-2xl flex items-center justify-center">
                  <span className="text-[#0D1826] text-4xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>R</span>
                </div>
                <div className="space-y-6">
                  <div className="h-4 bg-white/20 rounded-full w-3/4" />
                  <div className="h-4 bg-white/10 rounded-full w-full" />
                  <div className="h-4 bg-white/10 rounded-full w-5/6" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-24 bg-[#5AB4B4]/20 rounded-xl" />
                    <div className="h-24 bg-white/10 rounded-xl" />
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#5AB4B4]/30 to-transparent rounded-xl" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 bg-[#E5F0DD] rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5AB4B4] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0D1826] font-semibold text-sm">Stratégie validée</p>
                    <p className="text-[#333C33] text-xs">Il y a 2 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#5AB4B4] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
