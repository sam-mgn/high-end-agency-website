"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "Stratégies personnalisées",
  "Identité visuelle unique",
  "Accompagnement stratégique",
  "Résultats mesurables",
]

export function AboutSection() {
  return (
    <section id="apropos" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Logo REOCOM */}
          <div className="relative">
            <div className="bg-[#E5F0DD] rounded-3xl p-12 lg:p-16 flex items-center justify-center">
              <Image
                src="/images/logo-light.png"
                alt="REOCOM"
                width={300}
                height={100}
                className="w-auto h-20 lg:h-28"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6">
              Nous accompagnons les entreprises dans toute leur{" "}
              <span className="text-[#5AB4B4]">communication</span>
            </h2>

            <p className="text-[#333C33] text-lg leading-relaxed mb-8">
              REOCOM est une agence de communication stratégique dédiée à transformer 
              la présence de votre marque. Notre approche combine créativité, stratégie 
              et expertise technique pour créer des expériences de marque mémorables.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5AB4B4] flex-shrink-0" />
                  <span className="text-[#333C33] text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold px-8 rounded-full"
            >
              <Link href="#contact">
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
