"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    content: "REOCOM a complètement transformé notre image de marque. Leur approche stratégique et leur créativité ont fait toute la différence pour notre entreprise.",
    name: "Marie Dupont",
    role: "CEO, TechStart",
    initials: "MD",
  },
  {
    content: "Une équipe exceptionnelle qui comprend vraiment les enjeux de la communication moderne. Résultats au-delà de nos attentes.",
    name: "Pierre Martin",
    role: "Directeur Marketing, InnovaGroup",
    initials: "PM",
  },
  {
    content: "Professionnalisme et créativité au rendez-vous. Notre identité visuelle a été repensée avec brio et notre présence digitale s'est considérablement améliorée.",
    name: "Sophie Laurent",
    role: "Fondatrice, EcoBeauty",
    initials: "SL",
  },
  {
    content: "Collaboration fluide et résultats impressionnants. L'équipe REOCOM a su capturer l'essence de notre marque parfaitement.",
    name: "Thomas Bernard",
    role: "Directeur Général, Digise",
    initials: "TB",
  },
]

const clientLogos = [
  "Digise",
  "TechStart",
  "InnovaGroup",
  "EcoBeauty",
  "MediaPlus",
  "CreativeHub",
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get visible testimonials (current and next)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Side - Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-[#333C33]/50 text-sm font-medium uppercase tracking-wider">
              Clients
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mt-4 mb-8">
              Ce que disent nos clients
            </h2>
            
            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#0D1826]/20 flex items-center justify-center hover:bg-[#0D1826] hover:text-white hover:border-[#0D1826] transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#0D1826]/20 flex items-center justify-center hover:bg-[#0D1826] hover:text-white hover:border-[#0D1826] transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Cards Slider */}
          <div className="lg:w-2/3 overflow-hidden">
            <div className="flex gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Author Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#0D1826] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#0D1826] font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-[#333C33]/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-[#333C33] leading-relaxed text-base">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-20 pt-12 border-t border-[#0D1826]/10">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-[#333C33]/40 font-semibold text-lg tracking-wide hover:text-[#5AB4B4] transition-colors cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
