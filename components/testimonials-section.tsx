"use client"

import { useState, useCallback, useRef } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const ANIM_MS    = 700
const CARD_W     = 65    // % of right column
const GAP        = 24    // px (gap-6)
const PEEK_OPT   = 0.22  // opacity of peek card

const testimonials = [
  {
    content: "REOCOM a su capturer l'identité de notre marque et la traduire en une stratégie de communication percutante. Une collaboration précieuse.",
    name: "Camille Roux",
    role: "Directrice Générale, Atelier Lumière",
    avatar: "https://i.pravatar.cc/96?img=47",
    rating: 5,
  },
  {
    content: "Une équipe à l'écoute, créative et rigoureuse. Ils ont transformé notre présence digitale en quelques semaines. Résultats au-delà des attentes.",
    name: "Antoine Lefèvre",
    role: "Directeur Marketing, Groupe Meridia",
    avatar: "https://i.pravatar.cc/96?img=52",
    rating: 5,
  },
  {
    content: "Professionnalisme et sens esthétique au rendez-vous. Notre identité visuelle a été repensée avec brio. Je recommande sans hésiter.",
    name: "Lucie Garnier",
    role: "Fondatrice, Maison Verde",
    avatar: "https://i.pravatar.cc/96?img=32",
    rating: 5,
  },
  {
    content: "Collaboration fluide du début à la fin. L'équipe REOCOM comprend vraiment les enjeux business derrière chaque décision créative.",
    name: "Thomas Girard",
    role: "CEO, Innov&Co",
    avatar: "https://i.pravatar.cc/96?img=68",
    rating: 5,
  },
]

type Testimonial = (typeof testimonials)[0]

function TestimonialCard({ content, name, role, avatar, rating }: Testimonial) {
  return (
    <div className="bg-[#EAECEE] rounded-2xl p-8 h-full">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-[#333C33] leading-relaxed text-base mb-8">{content}</p>
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="text-[#0D1826] font-semibold text-sm">{name}</p>
          <p className="text-[#333C33]/60 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const touchStartX = useRef<number | null>(null)

  const n         = testimonials.length
  const peekIdx   = (currentIndex + 1) % n
  const nextPeek  = (currentIndex + 2) % n
  const prevIdx   = (currentIndex - 1 + n) % n

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (isTransitioning) return
      setDirection(dir)
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) =>
          dir === "next" ? (prev + 1) % n : (prev - 1 + n) % n
        )
        setIsTransitioning(false)
      }, ANIM_MS)
    },
    [isTransitioning, n]
  )

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) navigate(dx < 0 ? "next" : "prev")
    touchStartX.current = null
  }

  const ctrStyle  = { left: 0,                               width: `${CARD_W}%` } as React.CSSProperties
  const pkStyle   = { left: `calc(${CARD_W}% + ${GAP}px)`,  width: `${CARD_W}%` } as React.CSSProperties

  return (
    <section className="py-16 lg:py-24 bg-white">
      <style>{`
        /* ── NEXT → ── */
        @keyframes ctrCollapse {
          from { transform: scale(1);    opacity: 1; }
          to   { transform: scale(0.05); opacity: 0; }
        }
        @keyframes pkToCenter {
          from { transform: translateX(0);                       opacity: ${PEEK_OPT}; }
          to   { transform: translateX(calc(-100% - ${GAP}px)); opacity: 1; }
        }
        @keyframes farRightIn {
          from { transform: translateX(calc(100% + ${GAP}px));  opacity: 0; }
          to   { transform: translateX(0);                       opacity: ${PEEK_OPT}; }
        }

        /* ── PREV ← ── */
        @keyframes ctrToPeek {
          from { transform: translateX(0);                      opacity: 1; }
          to   { transform: translateX(calc(100% + ${GAP}px)); opacity: ${PEEK_OPT}; }
        }
        @keyframes prevExpand {
          from { transform: scale(0.05); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        @keyframes pkSlideOut {
          from { transform: translateX(0);                      opacity: ${PEEK_OPT}; }
          to   { transform: translateX(calc(100% + ${GAP}px)); opacity: 0; }
        }

        .t-ctr-collapse  { animation: ctrCollapse ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) both; }
        .t-pk-to-ctr     { animation: pkToCenter  ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) both; }
        .t-far-right-in  { animation: farRightIn  ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) both; }
        .t-ctr-to-pk     { animation: ctrToPeek   ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) both; }
        .t-prev-expand   { animation: prevExpand  ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) both; }
        .t-pk-slide-out  { animation: pkSlideOut  ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left — heading + arrows */}
          <div className="lg:w-[35%] lg:sticky lg:top-32">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-10">
              Ce que disent{" "}
              <br className="hidden lg:block" />
              nos{" "}
              <span className="text-[#5AB4B4]">clients</span>
            </h2>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("next")}
                disabled={isTransitioning}
                aria-label="Témoignage suivant"
                className="w-12 h-12 rounded-full border border-[#0D1826]/20 flex items-center justify-center hover:bg-[#0D1826] hover:text-white hover:border-[#0D1826] transition-all duration-200 disabled:opacity-40"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("prev")}
                disabled={isTransitioning}
                aria-label="Témoignage précédent"
                className="w-12 h-12 rounded-full border border-[#0D1826]/20 flex items-center justify-center hover:bg-[#0D1826] hover:text-white hover:border-[#0D1826] transition-all duration-200 disabled:opacity-40"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right — carousel (swipeable on mobile) */}
          <div
            className="lg:w-[65%] min-w-0 w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative overflow-hidden">

              {/* Spacer — defines container height */}
              <div className="invisible pointer-events-none" style={ctrStyle} aria-hidden="true">
                <TestimonialCard {...testimonials[currentIndex]} />
              </div>

              {/* ── IDLE ── */}
              {!isTransitioning && (
                <>
                  <div className="absolute top-0 bottom-0" style={ctrStyle}>
                    <TestimonialCard {...testimonials[currentIndex]} />
                  </div>
                  <div className="absolute top-0 bottom-0" style={{ ...pkStyle, opacity: PEEK_OPT }}>
                    <TestimonialCard {...testimonials[peekIdx]} />
                  </div>
                </>
              )}

              {/* ── NEXT → ── */}
              {isTransitioning && direction === "next" && (
                <>
                  <div className="absolute top-0 bottom-0 t-ctr-collapse" style={ctrStyle}>
                    <TestimonialCard {...testimonials[currentIndex]} />
                  </div>
                  <div className="absolute top-0 bottom-0 t-pk-to-ctr" style={pkStyle}>
                    <TestimonialCard {...testimonials[peekIdx]} />
                  </div>
                  <div className="absolute top-0 bottom-0 t-far-right-in" style={pkStyle}>
                    <TestimonialCard {...testimonials[nextPeek]} />
                  </div>
                </>
              )}

              {/* ── PREV ← ── */}
              {isTransitioning && direction === "prev" && (
                <>
                  <div className="absolute top-0 bottom-0 t-ctr-to-pk" style={ctrStyle}>
                    <TestimonialCard {...testimonials[currentIndex]} />
                  </div>
                  <div className="absolute top-0 bottom-0 t-prev-expand" style={ctrStyle}>
                    <TestimonialCard {...testimonials[prevIdx]} />
                  </div>
                  <div className="absolute top-0 bottom-0 t-pk-slide-out" style={pkStyle}>
                    <TestimonialCard {...testimonials[peekIdx]} />
                  </div>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
