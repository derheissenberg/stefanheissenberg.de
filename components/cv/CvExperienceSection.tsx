/**
 * COMPONENT: CvExperienceSection
 * PURPOSE: Full professional experience timeline section for the CV page.
 *
 * KEY CONCEPTS:
 * - Server Component — wraps CvTimelineRow which is "use client" due to MetricCard
 * - padding-top: 0 to visually continue from the About section above
 * - Maps CV_EXPERIENCE data to CvTimelineRow components
 * - isLast prop triggers border-bottom on the final row
 */

import { CvSectionHead } from "@/components/cv/CvSectionHead";
import { CvTimelineRow } from "@/components/cv/CvTimelineRow";
import { CV_EXPERIENCE } from "@/lib/data/cv/cv-experience";

export function CvExperienceSection() {
  return (
    <section
      id="cv-experience"
      className="pb-24 max-[720px]:pb-16"
      style={{ background: "var(--background)" }}
      aria-label="Experience"
    >
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <CvSectionHead
          kicker="Experience"
          subtitle="Seven chapters across agencies, consulting, startup, and enterprise."
          title="Fifteen years, "
          titleHighlight="seven chapters."
        />

        <div>
          {CV_EXPERIENCE.map((entry, i) => (
            <CvTimelineRow
              key={entry.id}
              entry={entry}
              isLast={i === CV_EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
