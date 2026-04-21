"use client"

import { Palette, TrendingUp, Users, Megaphone, Camera, LineChart } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Identité Visuelle",
    description: "Création de logos, chartes graphiques et identités de marque distinctives qui reflètent vos valeurs.",
    details: ["Logo & Branding", "Charte Graphique", "Supports Print"],
  },
  {
    icon: TrendingUp,
    title: "Stratégie Digitale",
    description: "Développement de stratégies marketing digitales pour maximiser votre présence en ligne.",
    details: ["SEO & SEA", "Marketing de Contenu", "Analyse de Données"],
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Gestion professionnelle de vos réseaux sociaux pour engager et fidéliser votre communauté.",
    details: ["Création de Contenu", "Animation", "Reporting"],
  },
  {
    icon: Megaphone,
    title: "Communication Corporate",
    description: "Stratégies de communication institutionnelle pour renforcer votre image de marque.",
    details: ["Relations Presse", "Communication Interne", "Événementiel"],
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Création de contenus visuels impactants : photos, vidéos et motion design.",
    details: ["Photographie", "Vidéo", "Motion Design"],
  },
  {
    icon: LineChart,
    title: "Consulting",
    description: "Accompagnement stratégique pour optimiser vos performances de communication.",
    details: ["Audit de Marque", "Plan de Communication", "Formation"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#E5F0DD] rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Nos Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6">
            Des Solutions Complètes Pour{" "}
            <br className="hidden sm:block" />
            Votre <span className="text-[#5AB4B4]">Communication</span>
          </h2>
          
          <p className="text-[#333C33] text-lg leading-relaxed">
            Une gamme complète de services pour accompagner votre croissance, de la stratégie à l&apos;exécution créative.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-[#F8FAF7] rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#E5F0DD] rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#5AB4B4]" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#0D1826] mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#333C33]/70 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Details */}
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#333C33]">
                    <span className="w-2 h-2 rounded-full bg-[#5AB4B4] flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
