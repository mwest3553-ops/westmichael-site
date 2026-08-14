import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/blog";
import { workItems } from "@/lib/work";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/experience", "/work", "/lab", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })
  );

  const workRoutes = workItems.map((w) => ({
    url: `${siteConfig.url}/work/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const posts = await getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...postRoutes];
}
