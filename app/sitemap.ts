/**
 * SITEMAP: app/sitemap.ts
 * PURPOSE: XML sitemap for Google Search Console submission
 *
 * NEXT.JS CONCEPT: File-based sitemap - Next.js serves at /sitemap.xml
 *
 * PREVIEW: Visit /sitemap.xml when dev server runs to preview the generated XML
 *
 * POLICY (aligned with robots metadata):
 *   - Lists all public indexable routes: homepage, /cv, portfolio hub, case studies
 *   - Routes defined in lib/seo/sitemap-routes.ts (single source of truth)
 *   - No third-party URLs (Google ignores them in site sitemaps)
 */

import type { MetadataRoute } from "next";
import { PUBLIC_SITEMAP_ROUTES, SITE_BASE_URL } from "@/lib/seo/sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_SITEMAP_ROUTES.map((route) => ({
    url: route.path ? `${SITE_BASE_URL}${route.path}` : SITE_BASE_URL,
    lastModified: new Date(route.lastModified),
    priority: route.priority,
  }));
}
