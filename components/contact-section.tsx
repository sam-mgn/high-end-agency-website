"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@reocom.fr",
    href: "mailto:contact@reocom.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Paris, France",
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven, 9h - 18h",
    href: null,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#E5F0DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5AB4B4]/10 border border-[#5AB4B4]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5AB4B4] text-sm font-medium">Contact</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1826] leading-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Restons En{" "}
            <span className="text-[#5AB4B4]">Contact</span>
          </h2>
          <p className="text-[#333C33] text-lg leading-relaxed">
            Prêt à transformer votre communication ? Contactez-nous pour discuter de votre projet.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0D1826] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Informations de Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#5AB4B4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#5AB4B4]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-[#5AB4B4] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Suivez-nous</p>
                <div className="flex gap-3">
                  {["LinkedIn", "Instagram", "Facebook"].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#5AB4B4] transition-colors group"
                    >
                      <span className="text-white text-sm font-medium">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0D1826] mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Envoyez-nous un Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333C33] mb-2">
                      Nom complet
                    </label>
                    <Input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-[#E5F0DD] focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333C33] mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-[#E5F0DD] focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333C33] mb-2">
                    Entreprise (optionnel)
                  </label>
                  <Input
                    type="text"
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="border-[#E5F0DD] focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333C33] mb-2">
                    Votre message
                  </label>
                  <Textarea
                    placeholder="Décrivez votre projet ou votre besoin..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-[#E5F0DD] focus:border-[#5AB4B4] focus:ring-[#5AB4B4] min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#5AB4B4] text-[#0D1826] hover:bg-[#5AB4B4]/90 font-semibold py-6"
                >
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-sm text-[#333C33]/60">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
