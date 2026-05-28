/**
 * DATA: cv-credentials.ts
 * PURPOSE: Awards, certifications, and education for the CV credentials section
 *
 * KEY CONCEPTS:
 * - Three blocks: Awards, Certifications, Education & Languages
 * - Badge images reference /public/images/trustbadges/ — only use existing files
 * - Content sourced verbatim from cv-web.html credentials section
 */

import type { CvCredentialBlock } from "@/types/cv";

export const CV_CREDENTIALS: CvCredentialBlock[] = [
  {
    label: "Awards & recognition",
    headline: "Honored design ",
    headlineHighlight: "work.",
    badgeImages: [
      // Only include badges that exist in /public/images/trustbadges/
      // COMPRIX badge — check path before enabling
    ],
    items: [
      {
        title: "",
        titleHighlight: "COMPRIX",
        org: "Healthcare communication",
        year: "Won",
      },
      {
        title: "German ",
        titleHighlight: "Design Award",
        year: "Won",
      },
      {
        title: "German ",
        titleHighlight: "Brand Award",
        year: "Won",
      },
    ],
  },
  {
    label: "Certifications",
    headline: "Kept ",
    headlineHighlight: "current.",
    badgeImages: [],
    items: [
      {
        title: "UX ",
        titleHighlight: "Master",
        org: "Nielsen Norman Group",
        year: "2023—25",
      },
      {
        title: "Certified ",
        titleHighlight: "Scrum Master I",
        org: "Scrum.org",
        year: "2022",
      },
      {
        title: "Claude Code ",
        titleHighlight: "in Action",
        org: "Anthropic Academy",
        year: "2026",
        credentialUrl: "https://verify.skilljar.com/c/zdabk9i55ayv",
      },
      {
        title: "Agent ",
        titleHighlight: "Skills",
        org: "Anthropic Academy",
        year: "2026",
      },
    ],
  },
  {
    label: "Education & languages",
    headline: "Where it ",
    headlineHighlight: "started.",
    items: [
      {
        title: "Communication Design ",
        titleHighlight: "B.A.",
        org: "IB-Hochschule, Berlin",
        year: "2009—12",
      },
      {
        title: "German ",
        titleHighlight: "native",
        year: "C2",
      },
      {
        title: "English ",
        titleHighlight: "full professional",
        year: "C1",
      },
      {
        title: "Spanish ",
        titleHighlight: "learning",
        year: "A2",
      },
    ],
  },
];
