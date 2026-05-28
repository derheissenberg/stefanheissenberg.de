/**
 * COMPONENT: DHLCaseStudyHero
 * PURPOSE: Hero for DHL/myDHLi case study — lead headline, intro, project meta, myDHLi video, KPI MetricCards
 *
 * - Left-aligned editorial column in max-w-6xl
 * - Outfit for titles/body; Kode Mono for meta labels (muted caps)
 * - h1 mirrors export `.cs-display` sizing on all lines; headline uses full `max-w-6xl` width (lead stays narrower).
 *   Three rows: portal title; “From Initial…”; gradient +italic +bold on “+22,000 Enterprise Customers.” (`!block`).
 */

import { CaseStudyLeadText } from "@/components/case-studies/CaseStudyLeadText";
import { MetricCard } from "@/components/ui/MetricCard";

const statistics = [
  { value: "22×", label: "Customer Growth", color: "blue" as const },
  { value: "30M+", label: "Monthly interactions", color: "yellow" as const },
  { value: "€1.2B+", label: "Digital Quote Revenue", color: "blue" as const },
  { value: "€135M", label: "Cost Savings", color: "yellow" as const },
  { value: "€336B+", label: "Yearly Business Volume", color: "blue" as const },
  { value: "90%+", label: "Faster Onboarding & Quote Processing", color: "yellow" as const },
];

const metaRows = [
  { label: "CLIENT", value: "DHL Global Forwarding" },
  { label: "ROLE", value: "Head of Design" },
  { label: "YEARS", value: "2018 — present" },
  { label: "SCOPE", value: "Strategy · Research · Design System" },
] as const;

export function DHLCaseStudyHero() {
  return (
    <section
      className="bg-[var(--background)] px-6 pb-16 pt-3 md:pt-4 lg:px-12 lg:pb-20 lg:pt-5"
      aria-label="DHL Case Study Hero"
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
          <span className="block text-[rgba(255,255,255,0.96)]">
            Building DHL&apos;s Global B2B Portal
          </span>
          <span className="mt-[0.06em] block text-white">From Initial Concept to</span>
          <span
            className="gradient-text-safe mt-[0.06em] !block font-bold italic"
            style={{ paddingRight: "0.1em", backgroundSize: "300%" }}
          >
            +22,000 Enterprise Customers.
          </span>
        </h1>

        <CaseStudyLeadText className="mt-8 mb-10">
          Six years of UX leadership behind <strong className="font-semibold text-white">myDHLi</strong> — the unified
          customer portal for DHL Global Forwarding. From a 2018 sketch in a &quot;digital speedboat&quot; startup to a
          global platform serving 22,000+ enterprise customers across air, ocean, road and rail.
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

        <div className="mb-16 mt-12 w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
              poster="/images/portfolio/dhl-casestudy-hero.jpg"
              aria-label="myDHLi product demo video — B2B logistics portal UX, digital quoting, and enterprise customer onboarding by Stefan Heißenberg"
            >
              <source src="/videos/myDHLi – Simply Connected. Digital logistics boosting your business..mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
          {statistics.map((stat, index) => (
            <MetricCard key={index} value={stat.value} label={stat.label} color={stat.color} delay={0} />
          ))}
        </div>
      </div>
    </section>
  );
}
