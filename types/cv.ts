/**
 * TYPES: cv.ts
 * PURPOSE: TypeScript type definitions for all CV page data structures
 *
 * KEY CONCEPTS:
 * - All CV content is typed here; data lives in lib/data/cv/*
 * - Separating types from data allows imports without circular deps
 * - Optional fields use ? to keep data files lean where fields are absent
 */

// ─── Metric ──────────────────────────────────────────────────────────────────

export type CvMetric = {
  value: string;  // e.g. "22k+", "€336B+"
  label: string;  // e.g. "Enterprise customers served on myDHLi"
  color: "blue" | "yellow";
};

// ─── Experience ───────────────────────────────────────────────────────────────

export type CvMiniMetric = {
  value: string;  // e.g. "22k+", "6 mo"
  label: string;  // e.g. "Enterprise customers", "Dubai → 9 markets"
};

export type CvExperienceExtras = {
  label: string;  // e.g. "Focus areas", "Tools", "Clients"
  tags: string[];
};

export type CvExperienceEntry = {
  id: string;
  yearStart: string;       // e.g. "2020"
  yearEnd: string;         // e.g. "Now" | "2020"
  duration: string;        // e.g. "6 yr 2 mo · Apr 2020 →"
  location: string;        // e.g. "Bonn · Remote · EMEA"
  role: string;            // Plain part: "Head of "
  roleHighlight: string;   // Gradient italic part: "Design"
  company: string;         // e.g. "DHL Global Forwarding"
  companySub?: string;     // e.g. "myDHLi · Central B2B Portal"
  copy: string[];          // Array of paragraphs (HTML-safe strings)
  ministrip?: CvMiniMetric[];
  extras?: CvExperienceExtras[];
};

// ─── Case Study ───────────────────────────────────────────────────────────────

export type CvCaseStudy = {
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: string;
  titleHighlight?: string; // Gradient italic portion of title
  description: string;
  href: string;
};

// ─── Credentials ─────────────────────────────────────────────────────────────

export type CvCredentialItem = {
  title: string;
  titleHighlight?: string; // Gradient italic portion
  org?: string;            // Organisation / issuer
  year?: string;           // e.g. "2023—25" | "Won"
};

export type CvCredentialBlock = {
  label: string;           // Section label e.g. "Awards & recognition"
  headline: string;        // e.g. "Honored design"
  headlineHighlight?: string;
  badgeImages?: { src: string; alt: string }[];
  items: CvCredentialItem[];
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export type CvSkillGroup = {
  label: string;   // e.g. "Top skills", "Tools"
  tags: string[];
};

// ─── Principles ───────────────────────────────────────────────────────────────

export type CvPrinciple = {
  number: string;   // e.g. "01"
  label: string;    // e.g. "Principle" | "Manifesto"
  headline: string;
  subtitle?: string;
  body?: string;
};
