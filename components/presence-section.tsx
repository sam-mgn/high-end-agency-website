"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function PresenceSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#E5F0DD]">
      {/* Brand Identity Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1826] rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
            <Reveal>
              <div className="relative">
                <Image
                  src="/images/logo-dark.png"
                  alt="REOCOM"
                  width={300}
                  height={100}
                  className="w-auto h-24 lg:h-32"
                />
                <div className="flex items-center gap-3 mt-8">
                  <div className="bg-[#5AB4B4]/20 rounded-lg px-4 py-2 text-[#5AB4B4] text-sm">
                    Chartes graphiques
                  </div>
                  <div className="bg-[#5AB4B4]/20 rounded-lg px-4 py-2 text-[#5AB4B4] text-sm">
                    Cessions des droits
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content Side */}
            <Reveal delay={120}>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Identité Visuelle Stratégique
                </h3>
                <p className="text-xl text-[#5AB4B4] mb-4">
                  Valoriser Votre Marque
                </p>
                <p className="text-white/70 leading-relaxed">
                  Nous créons des identités visuelles qui racontent votre histoire,
                  incarnent vos valeurs et vous différencient de la concurrence.
                  Chaque élément est pensé pour créer un impact mémorable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
