/**
 * DATA: trust-badges
 * PURPOSE: Single source for award / certification marks used by TrustBar and AwardBadgesSection
 *
 * KEY CONCEPTS:
 * - Same logo assets and links; each section passes different CaseStudyLogoStack props (kicker, borders, spacing)
 */

import type { CaseStudyLogoStackItem } from "@/components/case-studies/CaseStudyLogoStack";

export const TRUST_BADGE_LOGOS: CaseStudyLogoStackItem[] = [
  {
    src: "/images/trustbadges/comprix-design-award.png",
    alt: "Com Prix Design Award — healthcare communication design recognition for Stefan Heißenberg",
    width: 160,
    height: 160,
    href: "https://comprix.com",
  },
  {
    src: "/images/trustbadges/design-ward-winning-design.svg",
    alt: "German Design Award — award-winning UX and product design work",
    width: 272,
    height: 124,
    itemClassName: "!max-w-[88px] sm:!max-w-[104px] md:!max-w-[120px]",
    href: "https://www.german-design-award.com",
  },
  {
    src: "/images/trustbadges/german-brand-design-award-winner.svg",
    alt: "German Brand Award Winner — brand and experience design excellence",
    width: 272,
    height: 124,
    itemClassName: "!max-w-[88px] sm:!max-w-[104px] md:!max-w-[120px]",
    href: "https://www.german-brand-award.com",
  },
  {
    src: "/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png",
    alt: "Nielsen Norman Group UX Master certification — advanced UX research and design leadership credential",
    width: 176,
    height: 176,
    href: "/images/trustbadges/ux-master-certificate-user-experience-design-1078102-heissenberg.pdf",
  },
  {
    src: "/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png",
    alt: "Scrum.org Professional Scrum Master PSM I certification — agile product delivery credential",
    width: 160,
    height: 160,
    href: "/images/trustbadges/professional-scrum-master-certificate-agile-heissenberg.pdf",
  },
];
