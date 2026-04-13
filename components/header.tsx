"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#apropos", label: "À Propos" },
    { href: "#realisations", label: "Réalisations" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1826]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-[#5AB4B4] text-3xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                R
              </span>
              <span className="text-white text-3xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                EOCOM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#5AB4B4] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold px-6"
            >
              <Link href="#contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D1826] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#5AB4B4] transition-colors py-3 text-base font-medium border-b border-white/10 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold mt-4"
            >
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contactez-nous
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
