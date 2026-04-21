"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail, Phone, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", label: "ACCUEIL" },
    { href: "#apropos", label: "REOCOM" },
    { 
      href: "#services", 
      label: "PRESTATIONS",
      dropdown: [
        { href: "#strategie", label: "Stratégie de Communication" },
        { href: "#identite", label: "Identité Visuelle" },
        { href: "#digital", label: "Marketing Digital" },
        { href: "#contenu", label: "Création de Contenu" },
      ]
    },
    { 
      href: "#realisations", 
      label: "GALERIE",
      dropdown: [
        { href: "#projets", label: "Nos Projets" },
        { href: "#portfolio", label: "Portfolio" },
      ]
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Hidden on scroll */}
      <div 
        className={`bg-[#0D1826] transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10">
          <div className="flex items-center justify-between h-full">
            {/* Contact Info */}
            <div className="flex items-center gap-8">
              <a 
                href="mailto:contact@reocom.fr" 
                className="flex items-center gap-2 text-white/60 hover:text-[#5AB4B4] transition-colors text-xs tracking-wide"
              >
                <Mail size={12} className="text-[#5AB4B4]" />
                <span>contact@reocom.fr</span>
              </a>
              <a 
                href="tel:+33602299660" 
                className="hidden sm:flex items-center gap-2 text-white/60 hover:text-[#5AB4B4] transition-colors text-xs tracking-wide"
              >
                <Phone size={12} className="text-[#5AB4B4]" />
                <span>06 02 29 96 60</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#5AB4B4] hover:text-[#0D1826] transition-all"
                aria-label="Instagram"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#5AB4B4] hover:text-[#0D1826] transition-all"
                aria-label="LinkedIn"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0D1826]/98 backdrop-blur-xl shadow-lg shadow-black/20" 
            : "bg-[#0D1826]/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center py-4">
              <Image
                src="/images/logo-dark.png"
                alt="REOCOM"
                width={140}
                height={40}
                className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-10"} w-auto`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`opacity-50 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-[#0D1826]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/30 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5AB4B4]/50 group-hover:bg-[#5AB4B4] transition-colors" />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Menu */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden sm:inline-flex bg-[#5AB4B4] text-[#0D1826] hover:bg-white hover:text-[#0D1826] font-semibold px-5 h-10 rounded-lg transition-all duration-300 group"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  DEVIS GRATUIT
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-[#0D1826]/98 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-6 gap-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between text-white/80 hover:text-white hover:bg-white/5 transition-all py-3 px-4 text-base font-medium rounded-lg"
                onClick={() => !item.dropdown && setIsMenuOpen(false)}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown size={16} className="opacity-50" />
                )}
              </Link>
              {item.dropdown && (
                <div className="ml-4 border-l border-white/10 pl-4 mb-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="flex items-center gap-2 text-white/50 hover:text-[#5AB4B4] transition-colors py-2.5 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#5AB4B4]/50" />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10">
            <Button
              asChild
              className="w-full bg-[#5AB4B4] text-[#0D1826] hover:bg-white font-semibold h-12 rounded-lg"
            >
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                DEVIS GRATUIT
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
