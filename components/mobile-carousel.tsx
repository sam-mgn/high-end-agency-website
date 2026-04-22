"use client"

import { useState, useRef, useEffect, useCallback, ReactNode } from "react"

const CARD_PCT = 0.82
const GAP = 16
const ANIM_MS = 300

interface MobileCarouselProps {
  items: ReactNode[]
  resetKey?: string | number
}

export function MobileCarousel({ items, resetKey }: MobileCarouselProps) {
  const n = items.length
  const [index, setIndex] = useState(1)
  const [animate, setAnimate] = useState(false)
  const [cardOffset, setCardOffset] = useState(0)
  const [ready, setReady] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const jumping = useRef(false)

  useEffect(() => {
    setAnimate(false)
    setIndex(1)
  }, [resetKey])

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      setCardOffset(containerRef.current.offsetWidth * CARD_PCT + GAP)
      setReady(true)
    }
    update()
    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // After animation ends, silently jump from clone to real card
  useEffect(() => {
    if (!animate || jumping.current) return
    const id = setTimeout(() => {
      jumping.current = true
      setAnimate(false)
      if (index === 0) setIndex(n)
      else if (index === n + 1) setIndex(1)
      setTimeout(() => { jumping.current = false }, 50)
    }, ANIM_MS)
    return () => clearTimeout(id)
  }, [index, animate, n])

  const goTo = useCallback((i: number) => {
    setAnimate(true)
    setIndex(i)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) goTo(dx < 0 ? index + 1 : index - 1)
    touchStartX.current = null
  }

  if (n === 0) return null

  // Clone first and last for seamless infinite loop
  const cloned = [items[n - 1], ...items, items[0]]
  const realIndex = ((index - 1) % n + n) % n

  return (
    <div className="md:hidden">
      <div
        ref={containerRef}
        className="overflow-hidden"
        style={{ opacity: ready ? 1 : 0 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: "flex",
            gap: `${GAP}px`,
            transform: `translateX(-${index * cardOffset}px)`,
            transition: animate ? `transform ${ANIM_MS}ms ease-out` : "none",
            willChange: "transform",
          }}
        >
          {cloned.map((item, i) => (
            <div key={i} style={{ minWidth: `${CARD_PCT * 100}%`, flexShrink: 0 }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            aria-label={`Carte ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === realIndex ? "w-6 bg-[#5AB4B4]" : "w-2 bg-[#0D1826]/20"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
