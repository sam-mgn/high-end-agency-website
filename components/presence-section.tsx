"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const testimonialPeople = [
  { name: "Sarah Chen", role: "CEO, TechStart" },
  { name: "David Kim", role: "Directeur, InnovaGroup" },
  { name: "Aisha Patel", role: "Fondatrice, EcoBeauty" },
]

export function PresenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#E5F0DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826] leading-tight mb-6">
            <span className="text-[#5AB4B4]">BOOSTEZ</span> Votre Présence En Ligne
          </h2>
        </div>

        {/* Testimonial People */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonialPeople.map((person, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-[#333C33] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">{person.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D1826] mb-1">{person.name}</h3>
              <div className="flex items-center justify-center gap-1 text-[#5AB4B4]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold px-8 rounded-full"
          >
            <Link href="#realisations">Voir tous les témoignages</Link>
          </Button>
        </div>
      </div>

      {/* Brand Identity Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#0D1826] rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
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
                  Early Premium
                </div>
                <div className="bg-[#5AB4B4]/20 rounded-lg px-4 py-2 text-[#5AB4B4] text-sm">
                  Body Passionate
                </div>
              </div>
            </div>

            {/* Content Side */}
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
          </div>
        </div>
      </div>
    </section>
  )
}
