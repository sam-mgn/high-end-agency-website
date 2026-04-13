"use client"

import { Palette, TrendingUp, MessageSquare, Megaphone, Camera, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Palette,
    title: "Identité Visuelle",
    description: "Création de logos, chartes graphiques et identités de marque distinctives qui reflètent vos valeurs.",
    features: ["Logo & Branding", "Charte Graphique", "Supports Print"],
  },
  {
    icon: TrendingUp,
    title: "Stratégie Digitale",
    description: "Développement de stratégies marketing digitales pour maximiser votre présence en ligne.",
    features: ["SEO & SEA", "Marketing de Contenu", "Analyse de Données"],
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    description: "Gestion professionnelle de vos réseaux sociaux pour engager et fidéliser votre communauté.",
    features: ["Création de Contenu", "Animation", "Reporting"],
  },
  {
    icon: Megaphone,
    title: "Communication Corporate",
    description: "Stratégies de communication institutionnelle pour renforcer votre image de marque.",
    features: ["Relations Presse", "Communication Interne", "Événementiel"],
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Création de contenus visuels impactants : photos, vidéos et motion design.",
    features: ["Photographie", "Vidéo", "Motion Design"],
  },
  {
    icon: BarChart3,
    title: "Consulting",
    description: "Accompagnement stratégique pour optimiser vos performances de communication.",
    features: ["Audit de Marque", "Plan de Communication", "Formation"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#E5F0DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Nos Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Des Solutions Complètes Pour Votre{" "}
            <span className="text-[#5AB4B4]">Communication</span>
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed">
            Une gamme complète de services pour accompagner votre croissance, 
            de la stratégie à l&apos;exécution créative.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#5AB4B4]/30"
            >
              <div className="w-14 h-14 bg-[#5AB4B4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5AB4B4] transition-colors">
                <service.icon className="w-7 h-7 text-[#5AB4B4] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-[#0D1826] mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                {service.title}
              </h3>
              
              <p className="text-[#333C33] mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#333C33]">
                    <span className="w-1.5 h-1.5 bg-[#5AB4B4] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#0D1826] text-white hover:bg-[#0D1826]/90 font-semibold px-8"
          >
            <Link href="#contact">Discutons de votre projet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
