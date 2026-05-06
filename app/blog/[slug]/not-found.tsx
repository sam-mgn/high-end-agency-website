import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogPostNotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Erreur 404
            </p>
            <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
              Article introuvable
            </h1>
            <p className="mt-4 text-slate-600 leading-7">
              Le contenu a peut-etre ete deplace, retire, ou le lien contient une
              erreur.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full bg-[#0D1826] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#122033]"
              >
                Retour au blog
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-white"
              >
                Retour a l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
