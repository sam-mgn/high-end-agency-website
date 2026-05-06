import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { mdxComponents } from "@/components/blog/mdx-components";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { formatBlogPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) {
      return buildPageMetadata({
        title: "Article introuvable | REOCOM",
        description: "Cet article n'existe pas ou n'est plus disponible.",
        path: `/blog/${slug}`,
        noIndex: true,
      });
    }

    return buildPageMetadata({
      title: `${post.title} | Blog REOCOM`,
      description: post.description,
      path: `/blog/${post.slug}`,
    });
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "REOCOM",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "REOCOM",
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-[0.16em] text-slate-500 hover:text-slate-700"
          >
            ← Retour au blog
          </Link>

          <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200">
            <div className="aspect-21/8 bg-linear-to-r from-[#0D1826] via-[#123A5A] to-[#5AB4B4]" />
            <div className="p-7 lg:p-10 bg-white">
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#5AB4B4]/15 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#0D1826]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {post.title}
              </h1>

              <p className="mt-4 text-slate-600 text-lg max-w-3xl">{post.description}</p>

              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-slate-500">
                <time>{formatBlogPostDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime} min</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mt-12 mx-auto">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
