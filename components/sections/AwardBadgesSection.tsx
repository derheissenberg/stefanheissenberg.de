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

import { CaseStudyLogoStack } from "@/components/case-studies/CaseStudyLogoStack";
import { TRUST_BADGE_LOGOS } from "@/lib/data/trust-badges";

export function AwardBadgesSection() {
  return (
    <section className="relative z-20 bg-[var(--background)] pt-0 pb-0" aria-label="Awards and certifications">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <CaseStudyLogoStack
          label="Awards & Certifications"
          logos={TRUST_BADGE_LOGOS}
          size="large"
          kickerVariant="keyCreator"
          kickerTop="flush"
        />
      </div>
    </section>
  );
}
