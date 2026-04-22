"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { ENVIRONNEMENT_VARIABLES } from "@/lib/constants/info"

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess(false)
    try {
      const result = await emailjs.sendForm(
        ENVIRONNEMENT_VARIABLES.EMAILJS_SERVICE_ID!,
        ENVIRONNEMENT_VARIABLES.EMAILJS_TEMPLATE_ID!,
        form.current as HTMLFormElement,
        ENVIRONNEMENT_VARIABLES.EMAILJS_PUBLIC_KEY
      )
      if (result.text === "OK") {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        throw new Error("Erreur lors de l'envoi du message")
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error)
      setSubmitError(
        "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
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
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#333C33] mb-2">
                    Nom complet
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333C33] mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#333C33] mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 XX XX XX XX"
                    value={formData.phone}
                    pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                    onChange={handleChange}
                    className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#333C33] mb-2">
                    Sujet
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#333C33] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white border-white focus:border-[#5AB4B4] focus:ring-[#5AB4B4] min-h-[150px]"
                />
              </div>

              {submitSuccess && (
                <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg">
                  Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.
                </div>
              )}
              {submitError && (
                <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
                  {submitError}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5AB4B4] text-[#0D1826] hover:bg-[#4A9F9F] font-semibold py-6 rounded-full"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
