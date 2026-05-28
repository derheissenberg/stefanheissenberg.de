/**
 * DATA: sitemap-routes.ts
 * PURPOSE: Single source of truth for public, indexable site routes in sitemap.xml
 *
 * KEY CONCEPTS:
 * - Only list pages with robots index: true
 * - lastModified should reflect meaningful content updates per route
 * - Priorities: homepage (1) → CV (0.9) → portfolio hub (0.85) → case studies (0.8)
 */

import { CV_LAST_MODIFIED_ISO } from "@/lib/data/cv/cv-meta";

export const SITE_BASE_URL = "https://www.stefanheissenberg.de";

/** Portfolio landing last meaningful update (ISO 8601). */
export const PORTFOLIO_LAST_MODIFIED_ISO = "2026-05-28T00:00:00.000Z";

/** Case study pages last meaningful update (ISO 8601). */
export const CASE_STUDY_LAST_MODIFIED_ISO = "2026-01-24T00:00:00.000Z";

/** Homepage last meaningful update (ISO 8601). */
export const HOMEPAGE_LAST_MODIFIED_ISO = "2026-05-06T16:47:34+02:00";

export type SitemapRoute = {
  path: string;
  lastModified: string;
  priority: number;
};

/** All public indexable routes — consumed by app/sitemap.ts */
export const PUBLIC_SITEMAP_ROUTES: SitemapRoute[] = [
  { path: "", lastModified: HOMEPAGE_LAST_MODIFIED_ISO, priority: 1 },
  { path: "/cv", lastModified: CV_LAST_MODIFIED_ISO, priority: 0.9 },
  { path: "/design-portfolio-sh", lastModified: PORTFOLIO_LAST_MODIFIED_ISO, priority: 0.85 },
  { path: "/design-portfolio-sh/dhl", lastModified: CASE_STUDY_LAST_MODIFIED_ISO, priority: 0.8 },
  { path: "/design-portfolio-sh/saloodo", lastModified: CASE_STUDY_LAST_MODIFIED_ISO, priority: 0.8 },
  { path: "/design-portfolio-sh/obinext", lastModified: CASE_STUDY_LAST_MODIFIED_ISO, priority: 0.8 },
];
