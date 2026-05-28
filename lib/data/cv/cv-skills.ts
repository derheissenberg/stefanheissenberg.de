/**
 * DATA: cv-skills.ts
 * PURPOSE: Skills and tools data for the CV skills section
 *
 * KEY CONCEPTS:
 * - Two groups: Top skills + Tools
 * - Content sourced verbatim from cv-web.html skills section
 */

import type { CvSkillGroup } from "@/types/cv";

export const CV_SKILLS: CvSkillGroup[] = [
  {
    label: "Top skills",
    tags: [
      "Product Strategy",
      "Design Leadership",
      "UX Research",
      "Product Discovery",
      "CX Strategy",
      "Design Systems",
      "Behavioral Analytics",
      "Stakeholder Governance",
      "Go-to-Market",
      "Lean UX",
      "Conversion Optimisation",
      "Information Architecture",
    ],
  },
  {
    label: "Tools",
    tags: [
      "Figma",
      "Storybook",
      "UserTesting.com",
      "Hotjar",
      "Adobe Analytics",
      "Google Tag Manager",
      "Google Analytics",
      "WordPress",
      "Next.js",
      "Vercel",
      "n8n",
      "Claude Code",
      "Lovable",
      "Midjourney",
      "Cursor",
      "Adobe Creative Cloud",
      "Jira",
      "Confluence",
    ],
  },
];
