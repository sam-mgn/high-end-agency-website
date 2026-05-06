import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buildPageMetadata } from "@/lib/seo";
import { formatBlogPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog REOCOM | Strategie, branding et communication",
  description:
    "Retrouvez les analyses et conseils REOCOM sur la strategie de communication, l'identite visuelle et la croissance de marque.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-14 lg:pt-40 lg:pb-20 bg-[#0D1826]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/60 text-xs uppercase tracking-[0.22em]">Journal</p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Blog REOCOM
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Des contenus actionnables pour mieux piloter votre communication,
            renforcer votre image et accelerer vos resultats.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 p-6 lg:p-7 transition-shadow hover:shadow-md"
            >
              <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                {post.tags[0] ?? "article"}
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600">{post.description}</p>
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-slate-500">
                <time>{formatBlogPostDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime} min</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
