"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "CEO, TechStart",
    content: "REOCOM a complètement transformé notre image de marque. Leur approche stratégique et leur créativité ont dépassé toutes nos attentes. Notre visibilité a augmenté de 300% en 6 mois.",
    rating: 5,
    image: null,
  },
  {
    name: "Pierre Martin",
    role: "Directeur Marketing, InnovaGroup",
    content: "Une équipe exceptionnelle qui comprend vraiment les enjeux de la communication moderne. Leur expertise en stratégie digitale a été déterminante pour notre croissance.",
    rating: 5,
    image: null,
  },
  {
    name: "Sophie Laurent",
    role: "Fondatrice, EcoBeauty",
    content: "Le professionnalisme et la réactivité de REOCOM sont remarquables. Ils ont su créer une identité visuelle qui reflète parfaitement nos valeurs écologiques.",
    rating: 5,
    image: null,
  },
]

const stats = [
  { value: "98%", label: "Clients Satisfaits" },
  { value: "150+", label: "Projets Réalisés" },
  { value: "3x", label: "ROI Moyen" },
  { value: "24h", label: "Temps de Réponse" },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Témoignages</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Résultats Concrets,{" "}
            <span className="text-[#5AB4B4]">Clients Satisfaits</span>
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed">
            Découvrez ce que nos clients disent de leur collaboration avec REOCOM.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#E5F0DD] rounded-2xl p-8 relative group hover:bg-[#0D1826] transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#5AB4B4] mb-4" />
              
              <p className="text-[#333C33] group-hover:text-white/80 leading-relaxed mb-6 transition-colors">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#5AB4B4] text-[#5AB4B4]" />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5AB4B4] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#0D1826] group-hover:text-white transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#333C33] group-hover:text-white/60 transition-colors">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-[#0D1826] rounded-2xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-[#5AB4B4] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {stat.value}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
