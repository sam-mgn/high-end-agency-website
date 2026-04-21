"use client"

import { useEffect, useState, useRef } from "react"
import { Quote } from "lucide-react"

const stats = [
  { value: 150, suffix: "+", label: "Projets Réalisés" },
  { value: 98, suffix: "%", label: "Clients Satisfaits" },
  { value: 5, suffix: " ans", label: "D'Expérience" },
  { value: 50, suffix: "+", label: "Partenaires" },
]

const testimonials = [
  {
    content: "REOCOM a complètement transformé notre image de marque. Notre visibilité a augmenté de manière significative et nous avons vu une vraie différence dans notre présence en ligne.",
    name: "Marie Dupont",
    role: "CEO, TechStart",
    rating: 5,
  },
  {
    content: "Une équipe exceptionnelle qui comprend vraiment les enjeux de la communication moderne. Leur approche stratégique a fait toute la différence.",
    name: "Pierre Martin",
    role: "Directeur Marketing, InnovaGroup",
    rating: 5,
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-[#5AB4B4]">
      {count}{suffix}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0D1826] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5AB4B4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5AB4B4]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Résultats Concrets,{" "}
            <span className="text-[#5AB4B4]">Clients Satisfaits</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Des chiffres qui parlent d&apos;eux-mêmes et des clients qui nous font confiance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#5AB4B4]/30 transition-colors"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 mt-2 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 hover:border-[#5AB4B4]/30 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 bg-[#5AB4B4]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5AB4B4]/30 transition-colors">
                <Quote className="w-6 h-6 text-[#5AB4B4]" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#5AB4B4] text-lg">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5AB4B4] to-[#5AB4B4]/60 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
