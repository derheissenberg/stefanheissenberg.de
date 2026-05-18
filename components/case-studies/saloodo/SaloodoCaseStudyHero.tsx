/**
 * COMPONENT: SaloodoCaseStudyHero
 * PURPOSE: Hero for Saloodo case study — lead headline, intro, project meta, statistics
 *
 * - Left-aligned editorial column in max-w-6xl (matches DHL case study structure)
 * - Outfit for titles/body; Kode Mono for meta labels (muted caps)
 * - h1 mirrors DHL pattern: three rows with block spans and gradient-text-safe on last line
 */

import { CaseStudyLeadText } from "@/components/case-studies/CaseStudyLeadText";
import { MetricCard } from "@/components/ui/MetricCard";

const statistics = [
  { value: "200%", label: "Shipper Growth", color: "blue" as const },
  { value: "50+", label: "Countries by 2020", color: "yellow" as const },
  { value: "108%", label: "Annual Growth", color: "blue" as const },
];

const metaRows = [
  { label: "Company", value: "Saloodo! (DHL Venture)" },
  { label: "ROLE", value: "Founding Designer" },
  { label: "YEARS", value: "2018 — 2020" },
  { label: "SCOPE", value: "UX/UI · Growth Design · Rapid Experimentation" },
] as const;

export function SaloodoCaseStudyHero() {
  return (
    <section
      className="bg-[var(--background)] px-6 pb-16 pt-3 md:pt-4 lg:px-12 lg:pb-20 lg:pt-5"
      aria-label="Saloodo Case Study Hero"
    >
      <div className="mx-auto w-full max-w-6xl text-left xl:max-w-7xl">
        <h1
          className="mb-7 w-full max-w-none text-left text-white"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            fontWeight: 600,
          }}
        >
          <span
            className="!block font-bold italic"
            style={{ paddingRight: "0.1em" }}
          >
            From{" "}
            <span
              className="gradient-text-safe font-bold italic"
              style={{ backgroundSize: "300%", paddingRight: "0.1em" }}
            >
              Zero to One
            </span>
          </span>
          <span className="mt-[0.06em] block text-white">Building A Digital Marketplace.</span>
        </h1>

        <CaseStudyLeadText className="mt-8 mb-10">
          I joined Saloodo! in May 2018 as the first in-house designer. Until then, DHL had relied on
          agencies and freelancers to get the startup off the ground. We&apos;d proven the concept, but
          the platform needed a complete relaunch to scale.
        </CaseStudyLeadText>

        <dl className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10">
          {metaRows.map((row) => (
            <div key={row.label}>
              <dt className="type-kicker text-[11px] uppercase text-white/50">
                {row.label}
              </dt>
              <dd className="font-outfit mt-2 text-[15px] font-medium leading-snug text-white lg:text-base">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {statistics.map((stat, index) => (
            <MetricCard key={index} value={stat.value} label={stat.label} color={stat.color} delay={0} />
          ))}
        </div>
      </div>
    </section>
  );
}
