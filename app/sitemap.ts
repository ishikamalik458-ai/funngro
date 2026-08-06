import type { MetadataRoute } from "next";

const siteUrl = "https://www.funngro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/for-teens",
    "/companies",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/for-teens" ? 0.9 : 0.6,
  }));
}
