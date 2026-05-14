/**
 * COMPONENT: AwardBadgesSection
 * PURPOSE: Homepage trust strip — awards and certifications in the same visual system as case-study logo rails
 *
 * KEY CONCEPTS:
 * - Reuses `CaseStudyLogoStack`: border-y rules, Kode Mono kicker, flex-wrap row of marks with grayscale + hover reveal
 * - Container matches myDHLi-style strip: `max-w-6xl` + horizontal padding aligned to portfolio sections
 * - Each item is an `<Image>` in an `<li>` — no per-mark caption (same pattern as “Enterprise customers”)
 * - `CaseStudyLogoStack` props: large marks (~2×), Key Creator–style h2 kicker, flush kicker padding; stack sits flush under the hero (no extra top margin on the bordered block)
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
  },
  {
    src: "/images/trustbadges/design-ward-winning-design.svg",
    alt: "German Design Award",
    width: 272,
    height: 124,
  },
  {
    src: "/images/trustbadges/german-brand-award-winner.svg",
    alt: "German Brand Award Winner",
    width: 272,
    height: 124,
  },
  {
    src: "/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png",
    alt: "Nielsen Norman Group UX Master Certification",
    width: 176,
    height: 176,
  },
  {
    src: "/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png",
    alt: "Scrum.org Professional Scrum Master PSM I",
    width: 160,
    height: 160,
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
