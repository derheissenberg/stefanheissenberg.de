/**
 * COMPONENT: CvCredentialsSection
 * PURPOSE: Awards, certifications, and education in a 3-column grid.
 *
 * KEY CONCEPTS:
 * - Server Component — no interactivity
 * - 3-col grid matches cv-web.html .awards-grid: 1.2fr | 1fr | 1fr
 * - Each block: rounded card with border, dark fill, cyan mono label
 * - Item list: title + optional gradient italic highlight + year/level
 * - Content from CV_CREDENTIALS data file
 * - Gradient italic technique uses inline gradient-text-safe class
 */

import { CvSectionHead } from "@/components/cv/CvSectionHead";
import { CV_CREDENTIALS } from "@/lib/data/cv/cv-credentials";

export function CvCredentialsSection() {
  return (
    <section
      id="cv-credentials"
      className="pb-24 max-[720px]:pb-16"
      style={{ background: "var(--background)" }}
      aria-label="Credentials"
    >
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <CvSectionHead
          kicker="Credentials"
          subtitle="Education, certifications, awards. The papers I keep current."
          title="School, "
          titleHighlight="and after."
        />

        {/* 3-col grid — 1.2fr | 1fr | 1fr */}
        <div
          className="grid gap-9 max-[900px]:grid-cols-1 max-[900px]:gap-6"
          style={{ gridTemplateColumns: "1.2fr 1fr 1fr" }}
        >
          {CV_CREDENTIALS.map((block) => (
            <div
              key={block.label}
              className="rounded-[14px] border border-[var(--rule)] p-7"
              style={{ background: "rgba(20,20,20,0.4)" }}
            >
              {/* Block label */}
              <p
                className="mb-4 text-[10.5px] uppercase text-[var(--accent-cyan-300)] tracking-[0.26em]"
                style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 600 }}
              >
                {block.label}
              </p>

              {/* Block headline */}
              <h3
                className="text-[22px] leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
              >
                {block.headline}
                {block.headlineHighlight && (
                  <em
                    className="not-italic font-bold text-[var(--accent-cyan-300)]"
                    style={{ fontStyle: "italic", fontWeight: 700 }}
                  >
                    {block.headlineHighlight}
                  </em>
                )}
              </h3>

              {/* Item list */}
              <div className="mt-4 flex flex-col">
                {block.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-[1fr_auto] items-baseline gap-3 py-3.5${
                      idx === 0 ? " pt-1.5" : " border-t border-[var(--rule)]"
                    }${idx === block.items.length - 1 ? " pb-0" : ""}`}
                  >
                    {/* Title */}
                    <div
                      className="text-[16px] leading-[1.25] text-white"
                      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
                    >
                      {item.title}
                      {item.titleHighlight && (
                        <em
                          className="gradient-text-safe"
                          style={{
                            fontStyle: "italic",
                            fontWeight: 700,
                            display: "inline-block",
                            backgroundSize: "300%",
                          }}
                        >
                          {item.titleHighlight}
                        </em>
                      )}
                      {item.org && (
                        <span
                          className="mt-1 block text-[10.5px] uppercase text-[var(--muted)] tracking-[0.22em]"
                          style={{
                            fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
                            fontWeight: 500,
                          }}
                        >
                          {item.org}
                        </span>
                      )}
                    </div>

                    {/* Year / level badge */}
                    {item.year && (
                      <span
                        className="whitespace-nowrap text-[10.5px] uppercase text-[var(--muted)] tracking-[0.22em]"
                        style={{
                          fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
                          fontWeight: 500,
                        }}
                      >
                        {item.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
