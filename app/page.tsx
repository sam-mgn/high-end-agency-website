import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { PresenceSection } from "@/components/presence-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "REOCOM | Agence de Communication Strategique",
  description:
    "Agence de communication strategique a Chartres. Branding, contenu et strategie digitale pour accelerer votre croissance.",
  path: "/",
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PresenceSection />
      <TestimonialsSection />
      <GallerySection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
