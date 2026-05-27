/**
 * DATA: cv-principles.ts
 * PURPOSE: Three principles shown on the CV page (subset of homepage's six)
 *
 * KEY CONCEPTS:
 * - CV page shows 2 principles + manifesto (matching cv-web.html)
 * - Content sourced verbatim from cv-web.html principles section
 */

import type { CvPrinciple } from "@/types/cv";

export const CV_PRINCIPLES: CvPrinciple[] = [
  {
    number: "01",
    label: "Principle",
    headline: "Beginner's mind.",
    subtitle: "Learn rules to break them",
    body: "Every product deserves a fresh look, even the mature ones. I stay close to the beginner mindset that questions assumptions and finds the unobvious path forward.",
  },
  {
    number: "02",
    label: "Principle",
    headline: "Data points the way.",
    subtitle: "Evidence over opinion",
    body: "Behavioral analytics, user testing, qualitative research — wired together so the next sprint is shaped by what people did, not what someone thought they wanted.",
  },
];

export const CV_MANIFESTO = {
  kicker: "03 · Manifesto",
  quote: "Create ",
  quoteHighlight: "new ways",
  quoteAfter: ". Frameworks travel. Teams, markets, and products don't.",
  attribution:
    "Build the playbook that fits your context, not the one that won last quarter in someone else's war story.",
};
