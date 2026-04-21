"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Studio de creation multimedia"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0D1826]/75" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6">
            <span className="text-[#5AB4B4] font-black tracking-tight not-italic">CRÉATION</span>{" "}
            <span className="text-white italic">De Contenu</span>
            <br />
            <span className="text-white italic">Stratégie De Communication Sur Mesure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-base lg:text-lg max-w-2xl mb-10 leading-relaxed">
            Nous accompagnons les entreprises dans leur communication digitale. De l&apos;identité visuelle à la stratégie de contenu, nous créons des solutions sur mesure pour valoriser votre marque.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold px-8 py-6 text-sm uppercase tracking-wider rounded-full"
            >
              <Link href="#services">
                Découvrir nos services
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#5AB4B4] text-[#5AB4B4] hover:bg-[#5AB4B4] hover:text-[#0D1826] px-8 py-6 text-sm uppercase tracking-wider rounded-full bg-transparent font-semibold transition-all"
            >
              <Link href="#contact">
                Devis
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#5AB4B4] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
