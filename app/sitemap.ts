/**
 * SITEMAP: app/sitemap.ts
 * PURPOSE: XML sitemap for Google Search Console submission
 *
 * NEXT.JS CONCEPT: File-based sitemap - Next.js serves at /sitemap.xml
 *
 * PREVIEW: Visit /sitemap.xml when dev server runs to preview the generated XML
 *
 * REFRESH COMMAND (after homepage updates):
 *   git log -1 --format=%cI -- app/page.tsx
 *
 * POLICY (aligned with robots metadata):
 *   - Only the homepage is listed here (index: true, authoritative entry point).
 *   - /design-portfolio-sh has index: true and is crawlable via links, but is
 *     intentionally omitted from this sitemap (unlisted but indexable policy).
 *     It surfaces only when Google discovers it through internal links.
 *   - Case studies (dhl, saloodo, obinext) remain noindex — crawlable via links,
 *     not listed in sitemap, not intended for search results.
 *   - No third-party URLs (Google ignores them in site sitemaps).
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
