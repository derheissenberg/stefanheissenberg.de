/**
 * COMPONENT: CvTimelineRow
 * PURPOSE: A single experience entry in the CV timeline.
 *
 * KEY CONCEPTS:
 * - Client component — MetricCard uses Framer Motion count-up hooks
 * - Grid: 200px year column | 1fr content column, collapses to 1-col below 900px
 * - Year column is sticky top-[100px] on desktop for scroll context
 * - Semantic markup: <article>, <h3> for role, <time dateTime> for machine-readable dates
 * - parseExperienceDates shared with JSON-LD helpers (single source of truth)
 * - Ministrip: uses MetricCard size="compact" disableCountUp — inline gradient numbers
 * - Extras: 2-column tag grid with cyan dot separators
 * - Border-top on each row; last row also has border-bottom
 */

"use client";

import { MetricCard } from "@/components/ui/MetricCard";
import { parseExperienceDates } from "@/lib/data/cv/cv-jsonld";
import type { CvExperienceEntry } from "@/types/cv";

type CvTimelineRowProps = {
  entry: CvExperienceEntry;
  isLast?: boolean;
};

export function CvTimelineRow({ entry, isLast = false }: CvTimelineRowProps) {
  const { startDate, endDate } = parseExperienceDates(entry);

  return (
    <article
      className={`grid grid-cols-[200px_1fr] items-start gap-12 border-t border-[var(--rule)] py-12 max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:py-8${
        isLast ? " border-b" : ""
      }`}
    >
      {/* Year column — sticky on desktop */}
      <div className="sticky top-[100px] self-start max-[900px]:static">
        {/* Year range */}
        <div
          className="leading-[1.15] tracking-[-0.04em] text-white overflow-visible"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 200,
            fontSize: "clamp(48px, 5vw, 72px)",
          }}
        >
          <time dateTime={startDate}>{entry.yearStart}</time>
          {entry.yearEnd && (
            <em
              className="gradient-text-safe"
              style={{
                fontStyle: "italic",
                fontWeight: 800,
                backgroundSize: "300%",
                display: "inline-block",
                verticalAlign: "baseline",
                paddingRight: "0.18em",
              }}
            >
              —
              {entry.yearEnd === "Now" ? (
                entry.yearEnd
              ) : (
                <time dateTime={endDate}>{entry.yearEnd}</time>
              )}
            </em>
          )}
        </div>

        {/* Duration */}
        <p
          className="mt-3 text-[11px] uppercase text-[var(--muted)] tracking-[0.22em]"
          style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
        >
          {entry.duration}
        </p>

        {/* Location */}
        <p
          className="mt-1.5 text-[11px] uppercase text-[var(--muted-2)] tracking-[0.22em]"
          style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
        >
          {entry.location}
        </p>
      </div>

      {/* Content column */}
      <div>
        {/* Role + Company header */}
        <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          {/* Role — h3 for heading hierarchy (h1 hero → h2 section → h3 role) */}
          <h3
            className="text-white"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.2vw, 42px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              overflow: "visible",
            }}
          >
            {entry.role}
            {entry.roleHighlight && (
              <em
                className="gradient-text-safe"
                style={{
                  fontStyle: "italic",
                  fontWeight: 800,
                  backgroundSize: "300%",
                  display: "inline-block",
                  verticalAlign: "baseline",
                  paddingRight: "0.18em",
                }}
              >
                {entry.roleHighlight}
              </em>
            )}
          </h3>

          {/* Company badge */}
          <p
            className="text-[12px] uppercase text-[var(--accent-cyan-300)] tracking-[0.22em]"
            style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 600 }}
          >
            {entry.company}
            {entry.companySub && (
              <span className="ml-2 text-[var(--muted)]">{entry.companySub}</span>
            )}
          </p>
        </div>

        {/* Copy paragraphs */}
        {entry.copy.map((paragraph, i) => (
          <p
            key={i}
            className="mt-3 max-w-[60ch] text-[16.5px] leading-[1.65] text-white/82"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            {paragraph}
          </p>
        ))}

        {/* Ministrip — MetricCard size="compact" */}
        {entry.ministrip && entry.ministrip.length > 0 && (
          <div className="mt-5 grid grid-cols-4 border-b border-t border-[var(--rule)] py-3.5 max-[720px]:grid-cols-2 max-[720px]:gap-y-2.5">
            {entry.ministrip.map((m) => (
              <div
                key={m.label}
                className="border-r border-[var(--rule)] px-4 last:border-r-0 first:pl-0"
              >
                <MetricCard
                  value={m.value}
                  label={m.label}
                  color="blue"
                  size="compact"
                  disableCountUp
                />
              </div>
            ))}
          </div>
        )}

        {/* Extras: 2-col tag grids */}
        {entry.extras && entry.extras.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5 max-[720px]:grid-cols-1">
            {entry.extras.map((blk) => (
              <div key={blk.label}>
                <p
                  className="mb-2 border-b border-[var(--rule)] pb-1.5 text-[10.5px] uppercase text-[var(--muted)] tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 600 }}
                >
                  {blk.label}
                </p>
                <p className="text-[13px] leading-[1.6] text-white/85">
                  {blk.tags.map((tag, ti) => (
                    <span key={tag} className="inline-block mr-1">
                      {tag}
                      {ti < blk.tags.length - 1 && (
                        <span className="ml-0.5 font-bold text-[var(--accent-cyan)]"> ·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
