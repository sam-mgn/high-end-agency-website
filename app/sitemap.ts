import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

const staticPages = ["/", "/blog", "/cgv", "/confidentialite", "/mentions-legales"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "/" || path === "/blog" ? "weekly" : "yearly",
      priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.5,
    })),
    ...blogEntries,
  ];
}
