"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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
      {/* Top Bar */}
      <div className="bg-[#0D1826] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href="mailto:contact@reocom.fr" 
                className="flex items-center gap-2 text-white/70 hover:text-[#5AB4B4] transition-colors text-xs"
              >
                <Mail size={14} />
                <span>contact@reocom.fr</span>
              </a>
              <a 
                href="tel:+33602299660" 
                className="flex items-center gap-2 text-white/70 hover:text-[#5AB4B4] transition-colors text-xs"
              >
                <Phone size={14} />
                <span>06.02.29.96.60</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#5AB4B4] transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#5AB4B4] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <div className="bg-[#0D1826]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-dark.png"
                alt="REOCOM"
                width={140}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="opacity-60" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#0D1826] border border-white/10 rounded-lg shadow-xl py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-white/70 hover:text-[#5AB4B4] hover:bg-white/5 transition-colors text-sm"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Menu */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden sm:inline-flex bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold px-6 rounded-md"
              >
                <Link href="#contact">DEVIS GRATUIT</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0D1826] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between text-white/80 hover:text-[#5AB4B4] transition-colors py-3 text-base font-medium border-b border-white/10"
                  onClick={() => !item.dropdown && setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={16} />}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 border-b border-white/10">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block text-white/60 hover:text-[#5AB4B4] transition-colors py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              asChild
              className="bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold mt-4"
            >
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                DEVIS GRATUIT
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
