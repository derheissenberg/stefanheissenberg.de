/**
 * SITEMAP: app/sitemap.ts
 * PURPOSE: XML sitemap for search engines and AI crawlers
 *
 * NEXT.JS CONCEPT: File-based sitemap - Next.js serves at /sitemap.xml
 * Enables discovery of all public pages for indexing and crawling
 */

import type { MetadataRoute } from "next";

const baseUrl = "https://www.stefanheissenberg.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-01-24"),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/design-portfolio-sh`,
      lastModified: new Date("2026-01-24"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/dhl`,
      lastModified: new Date("2026-01-24"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/saloodo`,
      lastModified: new Date("2026-01-24"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/obinext`,
      lastModified: new Date("2026-01-24"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
