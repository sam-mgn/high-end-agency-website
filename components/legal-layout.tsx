import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface LegalLayoutProps {
  title: string
  updatedAt: string
  children: React.ReactNode
}

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#0D1826]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/60 text-sm">Dernière mise à jour : {updatedAt}</p>
        </div>
      </section>

      <article className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  )
}
