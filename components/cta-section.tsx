"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#5AB4B4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6">
          Donnez Vie À Votre Stratégie
          <br />
          De Communication
        </h2>

        <p className="text-[#0D1826]/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformez votre vision en une identité de marque qui capte l&apos;attention 
          et génère des résultats mesurables.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#0D1826] text-white hover:bg-[#0D1826]/90 font-semibold px-8 py-6 rounded-full"
          >
            <Link href="#contact">
              Démarrer votre projet
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#0D1826] text-[#0D1826] hover:bg-[#0D1826] hover:text-white px-8 py-6 rounded-full bg-transparent"
          >
            <Link href="#services">
              Découvrir nos services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
