/**
 * COMPONENT: CvPrinciplesSection
 * PURPOSE: CV-specific principles section — 2 principles + manifesto blockquote.
 *
 * KEY CONCEPTS:
 * - Server Component — standalone component, homepage PrinciplesSection untouched
 * - Fallback decision: creating a new CvPrinciplesSection avoids modifying PrinciplesSection
 *   (which has hardcoded content and a different layout). Safer for homepage stability.
 * - 2-column grid for principle articles; manifesto centered via ManifestoBlock
 * - Content from cv-web.html .principles section
 * - Uses ManifestoBlock primitive from Phase 03
 * - CV_PRINCIPLES + CV_MANIFESTO from lib/data/cv/cv-principles.ts
 */

import { CvSectionHead } from "@/components/cv/CvSectionHead";
import { ManifestoBlock } from "@/components/ui/ManifestoBlock";
import { CV_PRINCIPLES, CV_MANIFESTO } from "@/lib/data/cv/cv-principles";

export function CvPrinciplesSection() {
  return (
    <section
      id="cv-principles"
      className="py-24 max-[720px]:py-16"
      style={{ background: "var(--background)" }}
      aria-label="How I work"
    >
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <CvSectionHead
          kicker="How I work"
          subtitle="Principles, shaped by fifteen years of shipping."
          title="Three "
          titleHighlight="rules"
          titleDim="I work by."
        />

        {/* 2-col principles grid */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-9">
          {CV_PRINCIPLES.map((p) => (
            <article key={p.number}>
              <p
                className="text-[13px] uppercase text-[var(--accent-cyan-300)] tracking-[0.24em]"
                style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
              >
                {p.number} · {p.label}
              </p>
              <h3
                className="mt-3.5 text-white"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(36px, 4vw, 64px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.headline}
              </h3>
              {p.subtitle && (
                <p
                  className="mt-3.5 text-[11px] uppercase text-[var(--muted)] tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
                >
                  {p.subtitle}
                </p>
              )}
              {p.body && (
                <p className="mt-4 max-w-[56ch] text-[16.5px] leading-[1.65] text-white/78">
                  {p.body}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Manifesto blockquote */}
        <div className="mt-14">
          <ManifestoBlock
            kicker={CV_MANIFESTO.kicker}
            quote={CV_MANIFESTO.quote}
            quoteHighlight={CV_MANIFESTO.quoteHighlight}
            quoteAfter={CV_MANIFESTO.quoteAfter}
            attribution={CV_MANIFESTO.attribution}
          />
        </div>
      </div>
    </section>
  );
}
