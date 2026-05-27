/**
 * COMPONENT: CvSkillsSection
 * PURPOSE: Skills and tools pill grid for the CV page.
 *
 * KEY CONCEPTS:
 * - Server Component — no interactivity
 * - 2-col grid matching cv-web.html .skills pattern
 * - Each block: rounded card with border, dark bg, cyan mono label, flex-wrap pill tags
 * - Pill tags: border-[var(--rule)], hover border-cyan-300 — CSS transition only
 * - Content from CV_SKILLS data file
 */

import { CvSectionHead } from "@/components/cv/CvSectionHead";
import { CV_SKILLS } from "@/lib/data/cv/cv-skills";

export function CvSkillsSection() {
  return (
    <section
      className="pb-24 max-[720px]:pb-16"
      style={{ background: "var(--background)" }}
      aria-label="Skills and tools"
    >
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <CvSectionHead
          kicker="Skills & tools"
          subtitle="What I bring to a team — strategy through to delivery."
          title="The "
          titleHighlight="toolkit."
        />

        <div className="grid grid-cols-2 gap-9 max-[720px]:grid-cols-1">
          {CV_SKILLS.map((group) => (
            <div
              key={group.label}
              className="rounded-[14px] border border-[var(--rule)] p-7"
              style={{ background: "rgba(20,20,20,0.4)" }}
            >
              {/* Group label */}
              <p
                className="mb-4 text-[11px] uppercase text-[var(--accent-cyan-300)] tracking-[0.26em]"
                style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 600 }}
              >
                {group.label}
              </p>

              {/* Pill tag cloud */}
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border border-[var(--rule)] px-3.5 py-[7px] text-[13px] leading-[1.3] text-white/90 transition-[border-color,color] duration-200 hover:border-[var(--accent-cyan-300)] hover:text-[var(--accent-cyan-300)]"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
