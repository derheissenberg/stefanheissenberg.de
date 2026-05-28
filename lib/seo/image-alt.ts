/**
 * DATA: image-alt.ts
 * PURPOSE: Shared, SEO- and accessibility-friendly alt text for recurring site imagery
 *
 * KEY CONCEPTS:
 * - Alt text describes the image content and context, not keyword stuffing
 * - Keywords reflect CV skills: design leadership, UX research, design systems, B2B SaaS, product strategy
 * - Hero portrait alt is shared across homepage, CV, and portfolio for consistency
 */

/** Stefan's hero portrait — used on homepage, /cv, and portfolio landing */
export const HERO_PORTRAIT_ALT =
  "Portrait of Stefan Heißenberg, Head of Design — UX leader with fifteen years in product strategy, design systems, UX research, and enterprise B2B platform design";

/** CV page hero variant — adds résumé context for search relevance on /cv */
export const CV_HERO_PORTRAIT_ALT =
  "Stefan Heißenberg, Head of Design — senior UX and product design leader, CV and professional profile photo";

/** Enterprise client logos — keyed by image src for reuse across sections */
export const CUSTOMER_LOGO_ALT: Record<string, string> = {
  "/images/customers/01-galderma.svg":
    "Galderma logo — healthcare and pharma UX design client of Stefan Heißenberg",
  "/images/customers/02-biontech.png":
    "BioNTech logo — enterprise biotech UX and product design client",
  "/images/customers/03-dhl.png":
    "DHL Global Forwarding logo — B2B logistics platform and myDHLi design leadership client",
  "/images/customers/04-bayer.png":
    "Bayer logo — healthcare and enterprise UX design client",
  "/images/customers/05-nkt.png":
    "NKT logo — industrial enterprise UX consultancy client",
  "/images/customers/06-avene.png":
    "Avène logo — dermo-cosmetics and healthcare design client",
  "/images/customers/07-kunstsammlung-nrw.png":
    "Kunstsammlung NRW logo — cultural institution digital experience client",
  "/images/customers/08-lesmills.png":
    "Les Mills logo — fitness and digital product design client",
  "/images/customers/09.yazaki.png":
    "Yazaki logo — automotive enterprise UX strategy client",
  "/images/customers/10-messeDuesseldorf.png":
    "Messe Düsseldorf logo — trade fair and B2B platform design client",
  "/images/customers/11-obi-next.png":
    "OBI Next logo — retail digital innovation and product configurator client",
  "/images/customers/12-msd.png":
    "MSD logo — pharmaceutical and healthcare UX design client",
  "/images/customers/13-berner-group.png":
    "Berner Group logo — B2B distribution and enterprise UX client",
  "/images/customers/14-docCheck.png":
    "DocCheck logo — healthcare professional platform design client",
  "/images/customers/15-freseniuskabi.png":
    "Fresenius Kabi logo — healthcare and medical UX design client",
  "/images/customers/16-sparkasse.png":
    "Sparkasse logo — banking and financial services UX design client",
  "/images/customers/17-qsc-ag.png":
    "QSC AG logo — enterprise audio technology UX consultancy client",
  "/images/customers/18-kion-group.png":
    "KION Group logo — industrial logistics and enterprise UX client",
  "/images/customers/19-saloodo.png":
    "Saloodo logo — DHL digital freight marketplace, founding designer case study",
};

/** Lookup enriched alt text for a customer logo src, with sensible fallback */
export function customerLogoAlt(src: string, fallback: string): string {
  return CUSTOMER_LOGO_ALT[src] ?? `${fallback} — enterprise UX and product design client`;
}
