/**
 * DATA: cv-meta.ts
 * PURPOSE: Single source of truth for CV page freshness metadata
 *
 * KEY CONCEPTS:
 * - Reused by ProfilePage JSON-LD dateModified and sitemap lastModified for /cv
 * - Update this constant when CV content meaningfully changes (not on every typo fix)
 */

/** Last meaningful CV content update (ISO 8601). */
export const CV_LAST_MODIFIED_ISO = "2026-05-28T00:00:00.000Z";

export const CV_BASE_URL = "https://www.stefanheissenberg.de";
export const CV_PAGE_URL = `${CV_BASE_URL}/cv`;
