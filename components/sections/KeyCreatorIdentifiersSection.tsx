/**
 * COMPONENT: KeyCreatorIdentifiersSection
 * PURPOSE: Displays 6 key metrics in a responsive grid (3×2 layout)
 *
 * KEY CONCEPTS:
 * - Grid layout: 3 columns on desktop (3×2 grid), 2 columns tablet, 1 column mobile
 * - Alternating gradient colors (blue-cyan, yellow-orange) - each blue next to yellow
 * - Uses MetricCard component with GlowCard for mouse-following glow effect
 * - Layout aligned with AwardBadgesSection above (same max-width: 1160px)
 * - Compact card sizing with reduced gaps for tighter layout
 *
 * LAYOUT SPECS:
 * - Container: max-w-[1160px] (matches AwardBadgesSection)
 * - Grid: 3 columns desktop (3×2 grid), 2 columns tablet, 1 column mobile
 * - Gap: 16-20px between cards (gap-4 lg:gap-5)
 * - Section padding: pt-2 pb-16 lg:pt-6 lg:pb-20 (tighter top gap below awards), px-8 horizontal
 * - Color pattern: Alternating blue/yellow (blue, yellow, blue, yellow...)
 */

import { MetricCard } from "@/components/ui/MetricCard";
import AuroraBlue from "@/components/backgrounds/AuroraBlue";

const metrics = [
  { value: "400+", label: "Projects delivered", color: "blue" as const },
  { value: "22", label: "Selfhosted Websites", color: "yellow" as const },
  { value: "5", label: "Startups founded", color: "blue" as const },
  { value: "6.720", label: "RAW photos in 2025", color: "yellow" as const },
  { value: "24", label: "Books read in 2025", color: "blue" as const },
  { value: "11.395", label: "Documented daily ideas since 2019.", color: "yellow" as const },
  { value: "8", label: "Countries visited in 2025", color: "blue" as const },
  { value: "17", label: "Years of continuous online presence", color: "yellow" as const },
  { value: "19", label: "Daily habits", color: "blue" as const },
];

export function KeyCreatorIdentifiersSection() {
  return (
    <section className="relative bg-[var(--background)] px-8 pt-2 pb-16 lg:pt-6 lg:pb-20" aria-label="Key creator identifiers">
      <AuroraBlue />
      <div className="relative z-[1]">
        {/* Container: 1160px max-width matches AwardBadgesSection for alignment */}
        {/* LEARNING: max-w-[1160px] ensures content width matches Trust Badges section above */}
        <div className="relative mx-auto max-w-[1160px]">
          <h2
            className="mb-[22px] text-center text-[13px] uppercase text-white/60 sm:text-[15px]"
            style={{
              fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
              fontWeight: 500,
              letterSpacing: "0.32em",
            }}
          >
            Key Creator Identifiers
          </h2>
          {/* Grid: 3 columns desktop (3×2), 2 columns tablet, 1 column mobile, compact gaps */}
          {/* LEARNING: gap-4 lg:gap-5 creates 16-20px spacing between cards */}
          {/* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 creates responsive 3×2 grid on desktop */}
          {/* Color pattern: Alternating blue/yellow ensures each blue is next to a yellow */}
          {/* LEARNING: Tailwind responsive grid - lg:grid-cols-3 applies at 1024px+ */}
          {/* CSS fallback in globals.css ensures 3 columns even if Tailwind fails */}
          {/* LEARNING: Synchronized animation - all cards animate simultaneously (no delay) */}
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            data-debug-grid="3cols-desktop"
          >
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                value={metric.value}
                label={metric.label}
                color={metric.color}
                delay={0} // LEARNING: No delay - all cards animate together
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
