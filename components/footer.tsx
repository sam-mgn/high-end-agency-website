"use client"

import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { label: "Identité Visuelle", href: "#services" },
    { label: "Stratégie Digitale", href: "#services" },
    { label: "Community Management", href: "#services" },
    { label: "Production Visuelle", href: "#services" },
  ],
  company: [
    { label: "À Propos", href: "#apropos" },
    { label: "Portfolio", href: "#realisations" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Mentions Légales", href: "#" },
    { label: "Politique de Confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0D1826] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-dark.png"
                alt="REOCOM"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Agence de communication stratégique dédiée à transformer 
              la présence de votre marque.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["LinkedIn", "Instagram", "Facebook"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#5AB4B4] transition-colors"
                  aria-label={social}
                >
                  <span className="text-white text-sm font-medium">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#5AB4B4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#5AB4B4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Légal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#5AB4B4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} REOCOM. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm">
            Conçu avec passion à Paris
          </p>
        </div>
      </div>
    </footer>
  )
}
