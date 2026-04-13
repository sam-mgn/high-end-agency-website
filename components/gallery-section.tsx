"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TechStart Rebrand",
    category: "Identité Visuelle",
    description: "Refonte complète de l'identité visuelle pour une startup tech.",
    color: "bg-[#5AB4B4]",
  },
  {
    title: "EcoBeauty Campaign",
    category: "Stratégie Digitale",
    description: "Campagne de lancement pour une marque de cosmétiques naturels.",
    color: "bg-[#0D1826]",
  },
  {
    title: "InnovaGroup",
    category: "Communication Corporate",
    description: "Stratégie de communication institutionnelle complète.",
    color: "bg-[#333C33]",
  },
  {
    title: "FoodieApp",
    category: "Production Visuelle",
    description: "Direction artistique et production de contenu visuel.",
    color: "bg-[#5AB4B4]",
  },
  {
    title: "FinTech Pro",
    category: "Branding",
    description: "Création d'une identité de marque premium pour une fintech.",
    color: "bg-[#0D1826]",
  },
  {
    title: "GreenEnergy",
    category: "Marketing Digital",
    description: "Stratégie de contenu et présence sociale pour une entreprise verte.",
    color: "bg-[#333C33]",
  },
]

export function GallerySection() {
  return (
    <section id="realisations" className="py-24 lg:py-32 bg-[#E5F0DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Découvrez Nos{" "}
            <span className="text-[#5AB4B4]">Réalisations</span>
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed">
            Une sélection de nos projets les plus impactants réalisés pour nos clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project visual placeholder */}
              <div className={`${project.color} h-64 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-white/30 rounded-2xl flex items-center justify-center">
                    <span className="text-white/50 text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-[#0D1826]" />
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <span className="text-[#5AB4B4] text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-[#0D1826] mt-2 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {project.title}
                </h3>
                <p className="text-[#333C33] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
