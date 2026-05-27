/**
 * COMPONENT: CvCaseStudyGrid
 * PURPOSE: Three-column case study grid for the CV selected work section.
 *
 * KEY CONCEPTS:
 * - Server Component — CvCaseStudyCard is also a server component
 * - padding-top: 0 continues visually from the experience section
 * - 3-col desktop, 1-col mobile
 * - Maps CV_CASE_STUDIES data to CvCaseStudyCard components
 */

import { CvSectionHead } from "@/components/cv/CvSectionHead";
import { CvCaseStudyCard } from "@/components/cv/CvCaseStudyCard";
import { CV_CASE_STUDIES } from "@/lib/data/cv/cv-case-studies";

export function CvCaseStudyGrid() {
  return (
    <section
      id="cv-cases"
      className="pb-24 max-[720px]:pb-16"
      style={{ background: "var(--background)" }}
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <CvSectionHead
          kicker="Selected work"
          subtitle="Three case studies covering startup, agency, and enterprise."
          title="Three "
          titleHighlight="highlights."
        />

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1 max-[900px]:gap-4">
          {CV_CASE_STUDIES.map((cs) => (
            <CvCaseStudyCard key={cs.href} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
