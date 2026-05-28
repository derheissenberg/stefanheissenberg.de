/**
 * DATA: cv-metrics.ts
 * PURPOSE: Top-level metric strip data for the CV page
 *
 * KEY CONCEPTS:
 * - 4 cards displayed in a 2×2 (mobile) / 4×1 (desktop) grid
 * - Overlaps the hero section with negative top margin
 * - Values sourced directly from cv-web.html metric strip
 */

import type { CvMetric } from "@/types/cv";

export const CV_METRICS: CvMetric[] = [
  {
    value: "22K+",
    label: "Enterprise customers served on myDHLi",
    color: "blue",
  },
  {
    value: "50+",
    label: "Countries reached across DHL & Saloodo!",
    color: "blue",
  },
  {
    value: "400+",
    label: "Digital projects delivered in 15 years",
    color: "blue",
  },
  {
    value: "82",
    label: "Clients served",
    color: "blue",
  },
];
