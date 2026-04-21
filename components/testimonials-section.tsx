"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "REOCOM a complètement transformé notre image de marque. Notre visibilité a augmenté de manière significative.",
    name: "Marie Dupont",
    role: "CEO, TechStart",
  },
  {
    content: "Une équipe exceptionnelle qui comprend vraiment les enjeux de la communication moderne.",
    name: "Pierre Martin",
    role: "Directeur Marketing",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0D1826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Résultats Concrets,{" "}
              <span className="text-[#5AB4B4]">Clients Satisfaits</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Découvrez ce que nos clients disent de leur collaboration avec REOCOM.
            </p>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
              >
                <Quote className="w-8 h-8 text-[#5AB4B4] mb-4" />
                <p className="text-white/80 leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5AB4B4] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
