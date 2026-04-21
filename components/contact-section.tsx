"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1826] leading-tight mb-4">
            Parlons de Vos Projets
          </h2>
          <p className="text-[#333C33] text-lg">
            Contactez-nous pour discuter de votre stratégie de communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info & Images */}
          <div className="space-y-8">
            <div className="bg-[#0D1826] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Restons En Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5AB4B4]/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#5AB4B4]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:contact@reocom.fr" className="text-white hover:text-[#5AB4B4]">
                      contact@reocom.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5AB4B4]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#5AB4B4]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Téléphone</p>
                    <a href="tel:+33602299660" className="text-white hover:text-[#5AB4B4]">
                      06.02.29.96.60
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5AB4B4]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#5AB4B4]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Localisation</p>
                    <p className="text-white">France</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Suivez-nous</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5AB4B4] transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5AB4B4] transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Preview Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/portfolio/business-cards.jpg"
                  alt="Cartes de visite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/portfolio/rollup-digise.jpg"
                  alt="Roll-up design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-[#E5F0DD] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#0D1826] mb-6">
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
                    className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
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
                    className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333C33] mb-2">
                  Sujet
                </label>
                <Input
                  type="text"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333C33] mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4] min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold py-6 rounded-full"
              >
                Envoyer
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
