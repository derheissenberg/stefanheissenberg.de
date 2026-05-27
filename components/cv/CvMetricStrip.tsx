/**
 * COMPONENT: CvMetricStrip
 * PURPOSE: 4-column MetricCard grid that overlaps the hero section with negative top margin.
 *
 * KEY CONCEPTS:
 * - "use client" required because MetricCard uses CountUp + IntersectionObserver hooks
 * - Negative top margin (`-mt-14`) creates the "floating over hero" visual overlap
 * - relative z-20 ensures this sits above the hero section
 * - 4-col on desktop (sm+), 2-col on mobile — matches cv-web.html .metrics-strip
 * - MetricCard is reused as-is (default size) with stagger delay per card
 * - Container max-width matches site-wide 1280px cap
 */

"use client";

import { MetricCard } from "@/components/ui/MetricCard";
import { CV_METRICS } from "@/lib/data/cv/cv-metrics";

export function CvMetricStrip() {
  return (
    <div className="relative z-20 -mt-14 max-[900px]:mt-0">
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CV_METRICS.map((metric, i) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              color={metric.color}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
