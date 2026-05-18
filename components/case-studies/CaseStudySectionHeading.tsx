/**
 * COMPONENT: CaseStudySectionHeading
 * PURPOSE: Consistent “label + headline” block for case study sections (Claude export pattern).
 * Uses static cyan (~gradient-mid) for small caps line — no gradient animation for performance.
 */

import type { ReactNode } from "react";

/** Cyan that reads like the site’s animated text gradient (cyan-400 edge) */
const LABEL_ACCENT_CLASS = "text-[#22d3ee]";
const LABEL_MUTE_CLASS = "text-neutral-500";

type Align = "left" | "center";

type CaseStudySectionHeadingProps = {
  /** e.g. `01—` (number + em dash) — rendered in accent */
  numberDash: string;
  /** Short grey category word (ORIGIN, LAUNCH, …) */
  category: string;
  /** Trailing context line — accent */
  detail: string;
  /** h2 content */
  children: ReactNode;
  align?: Align;
  /** Default / large title scale */
  titleSize?: "default" | "large";
};

const labelRowClass =
  "flex flex-wrap items-baseline gap-x-3 gap-y-2 font-[var(--font-outfit),system-ui,sans-serif] text-[11px] font-medium uppercase tracking-[0.14em] sm:text-xs";

export function CaseStudySectionHeading({
  numberDash,
  category,
  detail,
  children,
  align = "left",
  titleSize = "default",
}: CaseStudySectionHeadingProps) {
  const titleScale =
    titleSize === "large"
      ? "text-2xl text-white sm:text-3xl lg:text-4xl"
      : "text-2xl text-white sm:text-3xl";

  const wrap =
    align === "center"
      ? "mx-auto mb-12 max-w-[820px] text-center sm:mb-14 lg:mb-16"
      : "mb-5 text-left sm:mb-6";

  const labelJustify = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={wrap}>
      <p className={`${labelRowClass} mb-5 sm:mb-6 ${labelJustify}`}>
        <span className={LABEL_ACCENT_CLASS}>{numberDash}</span>
        <span className={LABEL_MUTE_CLASS}>{category}</span>
        <span className={LABEL_ACCENT_CLASS}>{detail}</span>
      </p>
      <h2 className={`font-outfit ${titleScale} font-semibold leading-[1.28] text-white`}>
        {children}
      </h2>
    </div>
  );
}
