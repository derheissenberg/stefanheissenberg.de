/**
 * SITEMAP: app/sitemap.ts
 * PURPOSE: XML sitemap for Google Search Console submission
 *
 * NEXT.JS CONCEPT: File-based sitemap - Next.js serves at /sitemap.xml
 * Google best practices: absolute URLs with www, valid ISO 8601 lastmod, only indexable pages
 *
 * PREVIEW: Visit /sitemap.xml when dev server runs to preview the generated XML
 *
 * REFRESH COMMAND (run after page updates):
 *   git log -1 --format=%cI -- app/page.tsx
 *
 * TYPE NOTE: MetadataRoute.Sitemap is the TypeScript type for the return value, not a separate file
 *
 * EXCLUDED ROUTES (robots: { index: false }):
 *   - /design-portfolio-sh (portfolio landing - intentionally noindex)
 *   - /design-portfolio-sh/dhl (case study - intentionally noindex)
 *   - /design-portfolio-sh/saloodo (case study - intentionally noindex)
 *   - /design-portfolio-sh/obinext (case study - intentionally noindex)
 */

import type { MetadataRoute } from "next";

const baseUrl = "https://www.stefanheissenberg.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 1,
    },
  ];
}
