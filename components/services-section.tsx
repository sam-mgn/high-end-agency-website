"use client"

import { BarChart3, Users, Share2, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: BarChart3,
    title: "Analytics & Communication",
    description: "Analyse de données et stratégies de communication basées sur les résultats.",
  },
  {
    icon: Users,
    title: "Community Management & Digital",
    description: "Gestion professionnelle de vos réseaux sociaux et présence digitale.",
  },
  {
    icon: Share2,
    title: "Social Assets & REO",
    description: "Création d'assets visuels et optimisation de votre référencement.",
  },
  {
    icon: Search,
    title: "SEO & SEM & Direct Certifiés",
    description: "Expertise certifiée en référencement naturel et payant.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826] leading-tight mb-6">
            Services Marketing & Communication{" "}
            <span className="text-[#5AB4B4]">Personnalisés Pour Votre Marque</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white rounded-2xl border border-[#E5F0DD] hover:border-[#5AB4B4]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#E5F0DD] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5AB4B4]/10 transition-colors">
                <service.icon className="w-8 h-8 text-[#5AB4B4]" />
              </div>
              
              <h3 className="text-lg font-bold text-[#0D1826] mb-3">
                {service.title}
              </h3>
              
              <p className="text-[#333C33] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold px-8 rounded-full"
          >
            <Link href="#contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
