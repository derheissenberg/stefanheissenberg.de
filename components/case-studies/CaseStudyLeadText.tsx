/**
 * COMPONENT: CaseStudyLeadText
 * PURPOSE: Shared case-study hero / teaser lead paragraph — Outfit, relaxed line-height, subdued white on dark bg
 */

import type { ReactNode } from "react";

type CaseStudyLeadTextProps = {
  children: ReactNode;
  /** Add spacing, constraints, alignment (e.g. mt-8, max-w-full) */
  className?: string;
};

/** Mirrors Claude export `.cs-lede`: clamp 18–22px, lh 1.5, max 760px; Outfit via style */
export const caseStudyLeadClassName =
  "max-w-[760px] leading-[1.5] text-[length:clamp(18px,2vw,22px)] text-white/[0.92]";

export function CaseStudyLeadText({ children, className = "" }: CaseStudyLeadTextProps) {
  return (
    <p
      className={`${caseStudyLeadClassName} ${className}`}
      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
    >
      {children}
    </p>
  );
}
