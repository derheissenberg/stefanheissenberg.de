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
 * IMPORTANT NOTE ON EXTERNAL LINKS:
 *   Google officially expects same-site URLs only in sitemaps. External links are included
 *   here per user request for documentation purposes, but search engines will typically
 *   ignore them. For proper SEO, focus on internal pages with meaningful priority values.
 *
 * INCLUDED ROUTES (all internal pages, even those with robots: { index: false }):
 *   Internal:
 *   - / (homepage) - priority 1.0
 *   - /design-portfolio-sh (portfolio hub) - priority 0.9 - noindex per request
 *   - /design-portfolio-sh/dhl (case study) - priority 0.8 - noindex per request
 *   - /design-portfolio-sh/saloodo (case study) - priority 0.8 - noindex per request
 *   - /design-portfolio-sh/obinext (case study) - priority 0.8 - noindex per request
 *
 *   External links (priority 0.3-0.5, included per user request):
 *   - Social: LinkedIn, Product Hunt, GitHub, Instagram, Medium
 *   - Awards: German Design Award, German Brand Award, Comprix
 *   - Career references: DocCheck Agency, sunzinet, Saloodo
 *   - Press mentions: Baumarktmanager.de (OBI campaign)
 */

import type { MetadataRoute } from "next";

const baseUrl = "https://www.stefanheissenberg.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // INTERNAL PAGES
    {
      url: baseUrl,
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 1,
    },
    {
      url: `${baseUrl}/design-portfolio-sh`,
      lastModified: new Date("2026-05-14T17:14:07+02:00"),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/dhl`,
      lastModified: new Date("2026-05-05T12:23:18+02:00"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/saloodo`,
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-portfolio-sh/obinext`,
      lastModified: new Date("2026-05-05T18:23:05+02:00"),
      priority: 0.8,
    },
    // EXTERNAL LINKS (included per user request - note: Google typically ignores external URLs in sitemaps)
    // Social Profiles
    {
      url: "https://www.linkedin.com/in/stefanheissenberg/",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.5,
    },
    {
      url: "https://www.producthunt.com/@derheissenberg",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.4,
    },
    {
      url: "https://github.com/derheissenberg",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.4,
    },
    {
      url: "https://www.instagram.com/1rockwell/",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    {
      url: "https://medium.com/@derheissenberg",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    // Award/Recognition Sites
    {
      url: "https://comprix.com",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    {
      url: "https://www.german-design-award.com",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    {
      url: "https://www.german-brand-award.com",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    // Career/Company References
    {
      url: "https://doccheck.agency/de/#/homepage",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    {
      url: "https://www.sunzinet.com/",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    {
      url: "https://www.saloodo.com/de/",
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 0.3,
    },
    // Press/External Mentions
    {
      url: "https://www.baumarktmanager.de/obi-startet-grossangelegte-badplaner-kampagne-05082019",
      lastModified: new Date("2026-05-05T18:23:05+02:00"),
      priority: 0.3,
    },
  ];
}
