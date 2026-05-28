/**
 * COMPONENT: CvCaseStudyCard
 * PURPOSE: Compact 3-column case study card for the CV page selected work grid.
 *
 * KEY CONCEPTS:
 * - Server Component — hover effects via CSS group utility, no JS
 * - Fallback decision: CaseStudyTeaser is full-width 2-col; CV needs 3-col cards.
 *   Restructuring CaseStudyTeaser would change >70% of the component, so this is a
 *   dedicated component that reuses the same data shape.
 * - Next.js <Image> with aspect-ratio container for consistent card height
 * - Entire card is an <a> for accessibility (one focus target per card)
 * - Hover: border cyan/40, translateY(-3px), image scale(1.04) — CSS only
 */

import Image from "next/image";
import type { CvCaseStudy } from "@/types/cv";

type CvCaseStudyCardProps = CvCaseStudy;

export function CvCaseStudyCard({
  imageSrc,
  imageAlt,
  kicker,
  title,
  titleHighlight,
  description,
  href,
}: CvCaseStudyCardProps) {
  return (
    <a
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[var(--rule)] bg-[rgba(20,20,20,0.5)] transition-[border-color,transform] duration-200 hover:border-cyan-400/40 hover:-translate-y-[3px]"
    >
      {/* Image container — 16:10 aspect ratio */}
      <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.04]"
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-2 p-[22px] pb-6">
        {/* Kicker */}
        <p
          className="text-[10.5px] uppercase text-white/55 tracking-[0.24em]"
          style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
        >
          {kicker}
        </p>

        {/* Title — plain + optional gradient italic highlight */}
        <h3
          className="text-[22px] leading-[1.15] tracking-[-0.01em] text-white"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
        >
          {title}
          {titleHighlight && (
            <em
              className="gradient-text-safe"
              style={{
                fontStyle: "italic",
                fontWeight: 800,
                display: "inline-block",
                backgroundSize: "300%",
                paddingRight: "0.04em",
              }}
            >
              {titleHighlight}
            </em>
          )}
        </h3>

        {/* Description */}
        <p
          className="mt-1 text-[14.5px] leading-[1.55] text-white/75"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          {description}
        </p>

        {/* Link label — pushed to bottom */}
        <p
          className="mt-auto pt-3 text-[11px] uppercase text-[var(--accent-cyan-300)] tracking-[0.22em] flex items-center gap-[6px] after:content-['→'] after:transition-transform after:duration-200 group-hover:after:translate-x-1"
          style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
        >
          View case study
        </p>
      </div>
    </a>
  );
}
