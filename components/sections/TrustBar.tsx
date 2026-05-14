/**
 * COMPONENT: TrustBar
 * PURPOSE: Compact trust strip — same award marks and links as `AwardBadgesSection`, without the mono kicker heading
 *
 * KEY CONCEPTS:
 * - Reuses `CaseStudyLogoStack` with `showKicker={false}`, `showBottomBorder={false}`, and `showTopBorder={false}` (no rules: “More on request” flows into marks; footer `border-t` still separates from legal row)
 * - Same `max-w-6xl` container as the homepage awards strip for alignment with portfolio sections
 */

import {
  CaseStudyLogoStack,
  type CaseStudyLogoStackItem,
} from "@/components/case-studies/CaseStudyLogoStack";

const trustBarLogos: CaseStudyLogoStackItem[] = [
  {
    src: "/images/trustbadges/comprix-design-award.png",
    alt: "Com Prix Design Award",
    width: 160,
    height: 160,
    href: "https://comprix.com",
  },
  {
    src: "/images/trustbadges/design-ward-winning-design.svg",
    alt: "German Design Award",
    width: 272,
    height: 124,
    itemClassName: "!max-w-[88px] sm:!max-w-[104px] md:!max-w-[120px]",
    href: "https://www.german-design-award.com",
  },
  {
    src: "/images/trustbadges/german-brand-design-award-winner.svg",
    alt: "German Brand Award Winner",
    width: 272,
    height: 124,
    itemClassName: "!max-w-[88px] sm:!max-w-[104px] md:!max-w-[120px]",
    href: "https://www.german-brand-award.com",
  },
  {
    src: "/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png",
    alt: "Nielsen Norman Group UX Master Certification",
    width: 176,
    height: 176,
    href: "/images/trustbadges/ux-master-certificate-user-experience-design-1078102-heissenberg.pdf",
  },
  {
    src: "/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png",
    alt: "Scrum.org Professional Scrum Master PSM I",
    width: 160,
    height: 160,
    href: "/images/trustbadges/professional-scrum-master-certificate-agile-heissenberg.pdf",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-20 bg-[var(--background)] pt-0 pb-0" aria-label="Awards and certifications">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <CaseStudyLogoStack
          label=""
          logos={trustBarLogos}
          size="large"
          kickerVariant="keyCreator"
          kickerTop="flush"
          showKicker={false}
          showBottomBorder={false}
          showTopBorder={false}
        />
      </div>
    </section>
  );
}
