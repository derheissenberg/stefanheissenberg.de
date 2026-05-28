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
      "Cursor",
      "Claude Design",
      "Lovable",
      "Midjourney",
      "WordPress",
      "Vercel",
      "UserTesting.com",
      "Hotjar",
      "Adobe Analytics",
      "Google Tag Manager",
      "Google Analytics",
      "n8n",
      "Adobe Creative Cloud",
      "Storybook",
      "GitLab",
      "Jira",
      "Confluence",
      "Notion",
    ],
  },
];
