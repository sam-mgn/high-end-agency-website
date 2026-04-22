"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = ["Tout", "Branding", "Print", "Signalétique"]

const projects = [
  {
    title: "Dashboard Google Ads",
    category: "Branding",
    image: "/images/portfolio/google-ads.jpg",
    description: "Gestion de campagnes publicitaires et analytics",
  },
  {
    title: "Roll-up Digise",
    category: "Print",
    image: "/images/portfolio/rollup-digise.jpg",
    description: "Design de roll-up pour solutions multimédias",
  },
  {
    title: "Cartes de Visite Digise",
    category: "Print",
    image: "/images/portfolio/business-cards.jpg",
    description: "Création de cartes de visite professionnelles",
  },
  {
    title: "Covering Véhicule Digise",
    category: "Signalétique",
    image: "/images/portfolio/vehicle-wrap.png",
    description: "Design de covering véhicule complet",
  },
  {
    title: "Cartes de Visite REOCOM",
    category: "Print",
    image: "/images/portfolio/reocom-business-cards.jpg",
    description: "Cartes de visite professionnelles REOCOM",
  },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Tout")

  const filteredProjects = activeCategory === "Tout" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="realisations" className="py-16 lg:py-20 bg-[#F8FAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826] leading-tight mb-4">
            Découvrez nos projets de communication stratégique
          </h2>
          <p className="text-[#5AB4B4] text-xl font-medium">
            Galerie de travail
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#5AB4B4] text-[#0D1826]"
                  : "bg-[#E5F0DD] text-[#333C33] hover:bg-[#5AB4B4]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0D1826]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.description}</p>
                  </div>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#5AB4B4] text-[#0D1826] text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
</div>
            ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold px-8 rounded-full"
          >
            <Link href="#contact">Discutons de votre projet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
