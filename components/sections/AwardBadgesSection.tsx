/**
 * COMPONENT: AwardBadgesSection
 * PURPOSE: Homepage trust strip — awards and certifications in the same visual system as case-study logo rails
 *
 * KEY CONCEPTS:
 * - Reuses `CaseStudyLogoStack`: border-y rules, Kode Mono kicker, flex-wrap row of marks with grayscale + hover reveal
 * - Container matches myDHLi-style strip: `max-w-6xl` + horizontal padding aligned to portfolio sections
 * - Each item is an `<Image>` in an `<li>` (or `<a target="_blank">` + Image when `href` is set — PDFs or external award sites)
 * - Wide landscape SVGs use `itemClassName` + `!max-w-*` so they stay near prior width while square PNGs use the taller `size="large"` caps (readability)
 * - `CaseStudyLogoStack` props: large marks, Key Creator–style h2 kicker, flush kicker padding; stack sits flush under the hero (no extra top margin on the bordered block)
 */

import {
  CaseStudyLogoStack,
  type CaseStudyLogoStackItem,
} from "@/components/case-studies/CaseStudyLogoStack";

const awardLogos: CaseStudyLogoStackItem[] = [
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

export function AwardBadgesSection() {
  return (
    <section className="relative z-20 bg-[var(--background)] pt-0 pb-8 lg:pb-14" aria-label="Awards and certifications">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <CaseStudyLogoStack
          label="Awards & Certifications"
          logos={awardLogos}
          size="large"
          kickerVariant="keyCreator"
          kickerTop="flush"
        />
      </div>
    </section>
  );
}
