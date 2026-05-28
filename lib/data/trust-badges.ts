/**
 * DATA: trust-badges
 * PURPOSE: Single source for award / certification marks used by TrustBar and AwardBadgesSection
 *
 * KEY CONCEPTS:
 * - Same logo assets and links; each section passes different CaseStudyLogoStack props (kicker, borders, spacing)
 * - Alt text lives in lib/seo/image-alt.ts (TRUST_BADGE_ALT) for SEO consistency
 * - Anthropic credentials metadata in TRUST_BADGE_SCHEMA_CREDENTIALS feeds site-wide JSON-LD
 */

import type { CaseStudyLogoStackItem } from "@/components/case-studies/CaseStudyLogoStack";
import type { SchemaCredential } from "@/lib/data/cv/cv-jsonld";
import { TRUST_BADGE_ALT, TRUST_BADGE_SCHEMA_CREDENTIALS } from "@/lib/seo/image-alt";

export const TRUST_BADGE_LOGOS: CaseStudyLogoStackItem[] = [
  {
    src: "/images/trustbadges/design-ward-winning-design.svg",
    alt: TRUST_BADGE_ALT["/images/trustbadges/design-ward-winning-design.svg"],
    width: 272,
    height: 124,
    itemClassName: "!max-w-[88px] sm:!max-w-[104px] md:!max-w-[120px]",
    href: "https://www.german-design-award.com",
  },
  {
    src: "/images/trustbadges/german-brand-design-award-winner.svg",
    alt: TRUST_BADGE_ALT["/images/trustbadges/german-brand-design-award-winner.svg"],
    width: 272,
    height: 124,
    itemClassName: "!max-w-[88px] sm:!max-w-[104px] md:!max-w-[120px]",
    href: "https://www.german-brand-award.com",
  },
  {
    src: "/images/trustbadges/comprix-design-award.png",
    alt: TRUST_BADGE_ALT["/images/trustbadges/comprix-design-award.png"],
    width: 160,
    height: 160,
    href: "https://comprix.com",
  },
  {
    src: "/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png",
    alt: TRUST_BADGE_ALT["/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png"],
    width: 176,
    height: 176,
    href: "/images/trustbadges/ux-master-certificate-user-experience-design-1078102-heissenberg.pdf",
  },
  {
    src: "/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png",
    alt: TRUST_BADGE_ALT["/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png"],
    width: 160,
    height: 160,
    href: "/images/trustbadges/professional-scrum-master-certificate-agile-heissenberg.pdf",
  },
  {
    src: "/images/trustbadges/Anthropic_certificates.svg",
    alt: TRUST_BADGE_ALT["/images/trustbadges/Anthropic_certificates.svg"],
    width: 92,
    height: 65,
    itemClassName: "!max-w-[52px] sm:!max-w-[60px] md:!max-w-[68px]",
    href: "https://verify.skilljar.com/c/zdabk9i55ayv",
  },
];

/** Anthropic + future badge credentials for Person JSON-LD (homepage layout, CV page). */
export function buildTrustBadgeSchemaCredentials(): SchemaCredential[] {
  return TRUST_BADGE_SCHEMA_CREDENTIALS.map((credential) => {
    const entry: SchemaCredential = {
      "@type": "EducationalOccupationalCredential",
      name: credential.name,
      credentialCategory: credential.credentialCategory,
      recognizedBy: {
        "@type": "Organization",
        name: credential.recognizedBy,
      },
    };

    if ("url" in credential && credential.url) {
      entry.url = credential.url;
    }

    if ("dateCompleted" in credential && credential.dateCompleted) {
      const year = credential.dateCompleted.slice(0, 4);
      entry.dateCreated = year;
    }

    return entry;
  });
}
