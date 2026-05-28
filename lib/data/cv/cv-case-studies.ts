/**
 * DATA: cv-case-studies.ts
 * PURPOSE: Three selected case study entries for the CV page
 *
 * KEY CONCEPTS:
 * - imageSrc paths reference existing /public/images/ directories
 * - imageAlt strings are SEO- and accessibility-friendly descriptions with relevant UX/product keywords
 * - Only 3 highlights shown: DHL, Saloodo, OBI Next
 */

import type { CvCaseStudy } from "@/types/cv";

export const CV_CASE_STUDIES: CvCaseStudy[] = [
  {
    imageSrc: "/images/mydhli/Dashboard-collage.png",
    imageAlt:
      "myDHLi B2B portal dashboard on desktop, tablet, and mobile — enterprise UX design, design systems, and product leadership by Stefan Heißenberg at DHL Global Forwarding",
    kicker: "DHL Global Forwarding · 2020 — Present",
    title: "Building the ",
    titleHighlight: "central B2B portal",
    description:
      "From concept to the platform that moves €336B in cargo annually. Six years of product strategy, design leadership, and research infrastructure at enterprise scale.",
    href: "/design-portfolio-sh/dhl",
  },
  {
    imageSrc: "/images/saloodo/app-screens.png",
    imageAlt:
      "Saloodo logistics marketplace app screens — founding designer UX, conversion optimisation, and data-driven product design for DHL freight marketplace",
    kicker: "Saloodo! · 2018 — 2020",
    title: "Founding designer for a ",
    titleHighlight: "logistics disruptor",
    description:
      "ML-powered marketplace, MEA expansion to 9 countries in 6 months, and the concept that became myDHLi. Startup velocity inside DHL.",
    href: "/design-portfolio-sh/saloodo",
  },
  {
    imageSrc: "/images/obinext/hero-obinext.png",
    imageAlt:
      "OBI Next digital bathroom planner on laptop and mobile — retail product discovery UX, workshop-to-MVP sprint, and enterprise innovation consulting",
    kicker: "OBI Next · 2016 — 2017",
    title: "30 days: workshop to ",
    titleHighlight: "MVP launch",
    description:
      "A sprint methodology that became OBI's blueprint for digital innovation. 14 configurators, 640+ stores, 10 countries — all from the same playbook.",
    href: "/design-portfolio-sh/obinext",
  },
];
