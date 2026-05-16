/**
 * SITEMAP: app/sitemap.ts
 * PURPOSE: XML sitemap for search engines and AI crawlers
 *
 * NEXT.JS CONCEPT: File-based sitemap - Next.js serves at /sitemap.xml
 * Enables discovery of all public pages for indexing and crawling
 *
 * lastModified: calendar date of the latest commit that touched each route's `page.tsx`
 * (refresh after meaningful page updates: `git log -1 --format=%cI -- app/<path>/page.tsx`)
 */

import type { MetadataRoute } from "next";

const baseUrl = "https://www.stefanheissenberg.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-06"),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/design-portfolio-sh`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/dhl`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/saloodo`,
      lastModified: new Date("2026-05-06"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/obinext`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
