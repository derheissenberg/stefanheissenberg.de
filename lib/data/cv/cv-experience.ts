/**
 * DATA: cv-experience.ts
 * PURPOSE: Seven experience chapters for the CV timeline
 *
 * KEY CONCEPTS:
 * - Content faithfully sourced from cv-web.html
 * - Guardrails applied: DHL reports to VP of Product; Saloodo = founding designer (not founder)
 * - Bayer and other pharma clients listed under antwerpes chapter
 * - 7 chapters: DHL, Saloodo, sunzinet, antwerpes, Freelance, Earlier (LERROS), Earlier (insuro)
 *   — "Earlier roles" combines the two early-career positions in one entry
 * - copy[] uses plain strings; <em> emphasis is encoded as JSX in CvTimelineRow
 */

import type { CvExperienceEntry } from "@/types/cv";

export const CV_EXPERIENCE: CvExperienceEntry[] = [
  {
    id: "dhl",
    yearStart: "2020",
    yearEnd: "Now",
    duration: "6 yr 2 mo · Apr 2020 →",
    location: "Bonn · Remote · EMEA",
    role: "Head of ",
    roleHighlight: "Design",
    company: "DHL Global Forwarding",
    companySub: "myDHLi · Central B2B Portal",
    copy: [
      "At myDHLi I started as the concept author while still at Saloodo! — then moved over to lead it full-time. What began on a Figma canvas became DHL Global Forwarding's central B2B portal: every touchpoint from quoting and booking to tracking and documentation across air, ocean, road, and rail.",
      "Six years fully remote with the team. Built research infrastructure from zero — user testing, product analytics, qualitative research. Reporting to the VP of Product, I own product tracks alongside leading the design team. One example — we cut customer onboarding from 10–12 days to under 24 hours.",
    ],
    ministrip: [
      { value: "22k+", label: "Enterprise customers" },
      { value: "50+", label: "Countries" },
      { value: "30M+", label: "Monthly interactions" },
      { value: "€336B+", label: "Cargo value" },
    ],
    extras: [
      {
        label: "Focus areas",
        tags: [
          "Product Strategy",
          "Design Leadership",
          "CX Strategy",
          "Product Discovery",
          "Design Systems",
          "User Research",
          "Behavioral Analytics",
          "Stakeholder Governance",
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
          "GenAI Hub",
          "Google Tag Manager",
          "OneTrust",
          "Framer",
          "Jira",
          "Confluence",
        ],
      },
    ],
  },
  {
    id: "saloodo",
    yearStart: "2018",
    yearEnd: "2020",
    duration: "2 yr · May 2018 → Apr 2020",
    location: "Köln",
    role: "Lead UX ",
    roleHighlight: "Designer",
    company: "Saloodo!",
    companySub: "DHL's logistics marketplace · Founding designer",
    copy: [
      "Saloodo! was DHL's bet on disrupting logistics — a digital marketplace connecting shippers with carriers. I joined as the founding designer. Small team, fast decisions, real consequences. ML-powered carrier recommendations, dynamic pricing, rapid experimentation. We challenged how logistics had always been done — and shipped fast enough to prove it worked.",
      "The MEA expansion — Dubai pilot to nine countries in six months — showed what happens when you do the research first. Trust dynamics, payment norms, communication channels needed fundamental UX adaptations, not translations. That became the blueprint for global rollout. Along the way I drafted the initial concept for myDHLi.",
    ],
    ministrip: [
      { value: "18k → 30k", label: "Shippers" },
      { value: "50+", label: "Countries" },
      { value: "6 mo", label: "Dubai → 9 markets" },
      { value: "1", label: "Concept → myDHLi" },
    ],
    extras: [
      {
        label: "Focus areas",
        tags: [
          "Product Strategy",
          "Product-Market-Fit",
          "Conversion Optimisation",
          "Data-Driven Design",
          "Growth",
          "Lean UX",
          "Go-to-Market",
          "Market Expansion",
        ],
      },
      {
        label: "Tools",
        tags: [
          "Sketch",
          "Abstract",
          "InVision Studio",
          "Storybook",
          "Axure",
          "Browserstack",
          "Mural",
          "Hotjar",
          "GTM",
          "Salesforce",
          "Intercom",
          "Segment",
        ],
      },
    ],
  },
  {
    id: "sunzinet",
    yearStart: "2016",
    yearEnd: "2018",
    duration: "2 yr · Jun 2016 → May 2018",
    location: "Köln",
    role: "Senior UX ",
    roleHighlight: "Consultant",
    company: "sunzinet AG",
    companySub: "BVDW agency · Fraunhofer research partner",
    copy: [
      "Concepts and UX strategy for enterprise clients across every industry — stakeholder workshops, as-is / to-be analyses, concept documents running 200+ pages. eCommerce, omnichannel, B2C portals, digital workplace. Every project a new industry, a new business model. That pace teaches you to listen before you design.",
      "At OBI Next I led a 30-day sprint from workshop to MVP launch for a digital bathroom planner, then embedded six months on-site. The methodology became OBI's blueprint for digital innovation — kitchen planner, garden planner, 14 configurators across 640+ stores in 10 countries all followed the same playbook.",
    ],
    ministrip: [
      { value: "200+", label: "Page concepts" },
      { value: "30 days", label: "Workshop → MVP" },
      { value: "14", label: "Configurators" },
      { value: "640+", label: "Stores · 10 countries" },
    ],
    extras: [
      {
        label: "Focus areas",
        tags: [
          "UX Consultancy",
          "Stakeholder Workshops",
          "User Research",
          "Information Architecture",
          "Usability Audits",
          "Design Thinking",
          "Competitor Analysis",
        ],
      },
      {
        label: "Clients",
        tags: [
          "OBI Next",
          "Berner Group",
          "KION",
          "QSC",
          "Fresenius",
          "Sparkasse",
          "BioNTech",
          "Yazaki",
          "NKT",
          "SIG",
          "Messe Düsseldorf",
          "Kunstsammlung NRW",
          "Bahlsen",
          "Semikron",
          "Ebner Stolz",
        ],
      },
    ],
  },
  {
    id: "antwerpes",
    yearStart: "2014",
    yearEnd: "2016",
    duration: "2 yr 2 mo · May 2014 → Jun 2016",
    location: "Köln",
    role: "Designer",
    roleHighlight: "",
    company: "antwerpes ag",
    companySub: "now DocCheck agency · Healthcare & Pharma",
    copy: [
      "antwerpes — now DocCheck agency — is one of Germany's leading full-service healthcare agencies. Art direction, branding, campaigns, native apps, rapid prototyping. A creative director who taught me that craft standards aren't negotiable. This is where I first built pattern libraries and learned that systems thinking makes everything faster.",
    ],
    extras: [
      {
        label: "Focus areas",
        tags: [
          "UX/UI",
          "Art Direction",
          "Pattern Libraries",
          "Prototyping",
          "User Testing",
          "Campaigning",
          "Corporate Design",
        ],
      },
      {
        label: "Clients",
        tags: [
          "Bayer",
          "Sanofi",
          "Janssen",
          "Abbott",
          "Fresenius",
          "Galderma",
          "Avène",
          "Pierre Fabre",
          "Stratemeyer",
          "Stelara",
          "Xarelto",
          "Prolia",
          "Loceryl",
          "Daylong",
          "Seresto",
          "Jungle Formula",
        ],
      },
    ],
  },
  {
    id: "freelance",
    yearStart: "2010",
    yearEnd: "2018",
    duration: "8 yr · alongside agency work",
    location: "Cologne / Bonn",
    role: "UX/UI Design ",
    roleHighlight: "Consultant",
    company: "Freelance",
    companySub: "Independent · End-to-end delivery",
    copy: [
      "Eight years building my own practice alongside agency work. Websites, native apps, eCommerce, branding — full chain from concept and design through frontend development to live validation. Three things kept clients coming back: I could build their brand, build their platform, and make sure people actually found it.",
      "WordPress, TYPO3, Magento, Shopify — design, development, hosting. Google and Meta Ads, conversion tracking, GDPR. When handoffs slowed things down, I skipped them: HTML, CSS, JavaScript, TypeScript, Next.js. Design by code.",
    ],
    extras: [
      {
        label: "Focus areas",
        tags: [
          "UX/UI",
          "Branding",
          "Frontend Development",
          "eCommerce",
          "Conversion Optimisation",
          "Growth Marketing",
        ],
      },
      {
        label: "Clients",
        tags: ["Les Mills", "PFIT", "MoreRoom", "Nelkom", "Viarent"],
      },
    ],
  },
  {
    id: "earlier",
    yearStart: "2011",
    yearEnd: "2014",
    duration: "Early career",
    location: "Köln · Neuss",
    role: "Earlier roles",
    roleHighlight: "",
    company: "LERROS Moden · insuro Maklerservice",
    companySub: undefined,
    copy: [
      "Webdesigner at LERROS Moden GmbH (Oct 2013 — Apr 2014, Neuss) · First role on the product side of a fashion brand. eCommerce on OXID — webdesign, product photography, art direction, campaigns, digital marketing.",
      "Junior Art Director at insuro Maklerservice (Jul 2011 — Jun 2013, Köln) · The only designer in the company. Webdesign, corporate identity, print campaigns, exhibition stands, SEO, SEA. When every brief is yours, you learn fast.",
    ],
  },
];
