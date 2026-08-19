import type { MetadataRoute } from "next";
import { businesses } from "@/lib/site-data";
import { works } from "@/content/works";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/works", "/regional-project", "/about", "/message", "/news", "/contact", "/privacy"];
  const serviceRoutes = businesses.map((business) => `/services/${business.slug}`);
  const workRoutes = works.map((work) => `/works/${work.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...workRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") || route.startsWith("/works/") ? 0.7 : 0.8,
  }));
}
