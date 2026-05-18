/**
 * COMPONENT: TrustBar
 * PURPOSE: Compact trust strip — same award marks and links as `AwardBadgesSection`, without the mono kicker heading
 *
 * KEY CONCEPTS:
 * - Reuses `CaseStudyLogoStack` with `showKicker={false}`, `showBottomBorder={false}`, and `showTopBorder={false}` (no rules: “More on request” flows into marks; footer `border-t` still separates from legal row)
 * - Same `max-w-6xl` container as the homepage awards strip for alignment with portfolio sections
 */

import { CaseStudyLogoStack } from "@/components/case-studies/CaseStudyLogoStack";
import { TRUST_BADGE_LOGOS } from "@/lib/data/trust-badges";

export function TrustBar() {
  return (
    <section className="relative z-20 bg-[var(--background)] pt-0 pb-0" aria-label="Awards and certifications">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <CaseStudyLogoStack
          label=""
          logos={TRUST_BADGE_LOGOS}
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
