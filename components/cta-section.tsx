"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0D1826] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5AB4B4] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5AB4B4] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-8">
          <span className="text-[#5AB4B4] text-sm font-medium">Prêt à Commencer ?</span>
        </div>

        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Donnez Vie À Votre{" "}
          <span className="text-[#5AB4B4]">Stratégie</span>
          <br />
          De Communication
        </h2>

        <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformez votre vision en une identité de marque qui capte l&apos;attention, 
          engage votre audience et génère des résultats mesurables.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold px-8 py-6 text-base group"
          >
            <Link href="#contact">
              Démarrer votre projet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base"
          >
            <Link href="#services">
              Découvrir nos services
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-5 h-5 text-[#5AB4B4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Devis gratuit</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-5 h-5 text-[#5AB4B4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-5 h-5 text-[#5AB4B4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Sans engagement</span>
          </div>
        </div>
      </div>
    </section>
  )
}
