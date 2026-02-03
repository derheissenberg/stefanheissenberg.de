/**
 * COMPONENT: DHLCaseStudySection
 * PURPOSE: Reusable section component for DHL case study content sections
 *
 * KEY CONCEPTS:
 * - Consistent section structure with heading and body text
 * - Harmonized typography matching design-portfolio-sh page
 * - Supports optional images and custom content
 * - Responsive layout with max-width container
 *
 * TYPOGRAPHY HARMONIZATION:
 * - Heading: h2 style (Outfit, extra light 200, text-2xl sm:text-3xl, line-height 150%)
 * - Body text: Body style (Outfit, regular, text-base lg:text-lg, line-height 140%)
 */

import type { ReactNode } from "react";

type DHLCaseStudySectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function DHLCaseStudySection({ title, children, className = "" }: DHLCaseStudySectionProps) {
  return (
    <section className={`bg-[var(--background)] px-6 py-16 lg:px-12 lg:py-20 ${className}`} aria-label={title}>
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        {/* LEARNING: Uses h2 font style - Outfit, extra light (200), responsive sizing, line-height 150% */}
        <h2
          className="mx-auto mb-8 max-w-[820px] text-center text-2xl text-white sm:text-3xl"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 200, // extra light
            lineHeight: "150%",
          }}
        >
          {title}
        </h2>

        {/* Section Content */}
        <div className="mx-auto max-w-[820px] space-y-6">{children}</div>
      </div>
    </section>
  );
}
