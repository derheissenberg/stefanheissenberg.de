# Phase 02: Types & Data Files

## Overview
- **Priority:** P0 — section components depend on typed data
- **Status:** Pending
- **Estimated effort:** 30 min

## Dependencies
- Phase 01 complete (tokens exist for type references in comments)

## Files to Create

| File | Action | Description |
|---|---|---|
| `lib/types/cv.ts` | CREATE | TypeScript interfaces for all CV data structures |
| `lib/data/cv-metrics.ts` | CREATE | Hero metric strip data (4 cards) |
| `lib/data/cv-experience.ts` | CREATE | Timeline entries (6 roles) |
| `lib/data/cv-case-studies.ts` | CREATE | Compact case study card data (3 cards) |
| `lib/data/cv-skills.ts` | CREATE | Skills/tools grouped by category |
| `lib/data/cv-credentials.ts` | CREATE | Awards, certifications, education items |
| `lib/data/cv-principles.ts` | CREATE | Principles content (reusable shape) |

## Tasks

### 2.1 — Create `lib/types/cv.ts`

Define all interfaces:

```typescript
export interface CvMetric {
  value: string;       // "15+"
  label: string;       // "Years in design"
  color: "blue" | "yellow";
}

export interface CvMiniMetric {
  value: string;       // "22k+"
  label: string;       // "Enterprise customers"
}

export interface CvExperienceEntry {
  id: string;
  yearRange: string;        // "2020—Present"
  yearStart: string;        // "2020" (for gradient italic portion)
  yearEnd: string;          // "Present" or "2020"
  duration: string;         // "5 yr · Apr 2020 → Present"
  location: string;         // "Köln"
  role: string;             // "Head of"
  roleHighlight: string;    // "Design" (gradient italic)
  company: string;          // "DHL Global Forwarding"
  companySub?: string;      // "Deutsche Post DHL Group · B2B logistics"
  paragraphs: string[];     // Body copy (1-2 paragraphs, supports <em> via marker)
  miniMetrics?: CvMiniMetric[];
  focusAreas?: string[];
  tools?: string[];
  clients?: string[];
}

export interface CvCaseStudyCard {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  kicker: string;          // "DHL Global Forwarding"
  title: string;           // "myDHLi — the portal"
  titleHighlight?: string; // italic gradient portion
  description: string;
  href: string;
}

export interface CvSkillCategory {
  label: string;           // "DESIGN & STRATEGY"
  tags: string[];
}

export interface CvCredentialItem {
  title: string;
  titleHighlight?: string;  // gradient italic portion
  organization?: string;
  year?: string;
}

export interface CvCredentialBlock {
  label: string;            // "AWARDS"
  items: CvCredentialItem[];
  badges?: { src: string; alt: string }[];
}

export interface CvPrinciple {
  number: string;           // "01"
  label: string;            // "Principle" or "Manifesto" or "Coda"
  headline: string;
  headlineStyle: "italic-large" | "plain" | "manifesto";
  subtitle?: string;
  body?: string;
  isManifesto?: boolean;
  manifestoQuote?: string;
  manifestoHighlight?: string;
  manifestoAttribution?: string;
}
```

### 2.2 — Create `lib/data/cv-metrics.ts`

Content from HTML metric strip:

```typescript
export const CV_METRICS: CvMetric[] = [
  { value: "15+", label: "Years in design", color: "blue" },
  { value: "82", label: "Customers served", color: "blue" },
  { value: "5", label: "Ventures founded", color: "yellow" },
  { value: "4", label: "Industries deep", color: "yellow" },
];
```

### 2.3 — Create `lib/data/cv-experience.ts`

Transcribe all 6 timeline entries from `cv-web.html` (lines 998-1210). Each entry includes:
- DHL Global Forwarding (2020—Present)
- Saloodo! (2018—2020)
- sunzinet AG (2016—2018)
- antwerpes ag (2014—2016)
- Freelance (2010—2018)
- Earlier roles (2011—2014)

Content must match HTML exactly — no paraphrasing. Use `<em>` markers in strings where italic emphasis appears in reference.

### 2.4 — Create `lib/data/cv-case-studies.ts`

Three compact cards matching HTML:

```typescript
export const CV_CASE_STUDIES: CvCaseStudyCard[] = [
  {
    slug: "dhl",
    imageSrc: "/images/portfolio/dhl-casestudy-teaser.png",
    imageAlt: "myDHLi portal dashboard",
    kicker: "DHL Global Forwarding",
    title: "myDHLi — the ",
    titleHighlight: "portal",
    description: "The central B2B platform for ocean, air and road freight. 22,000+ enterprise customers across 50+ countries.",
    href: "/design-portfolio-sh/dhl",
  },
  // ... Saloodo, OBI Next
];
```

### 2.5 — Create `lib/data/cv-skills.ts`

Two-column category groups from HTML Skills section:

```typescript
export const CV_SKILLS: CvSkillCategory[] = [
  {
    label: "DESIGN & STRATEGY",
    tags: ["Product Strategy", "UX Strategy", "Design Leadership", ...]
  },
  {
    label: "TOOLS & TECHNOLOGY",
    tags: ["Figma", "Storybook", "Next.js", ...]
  },
];
```

### 2.6 — Create `lib/data/cv-credentials.ts`

Three-column grid: Awards (with badge images), Certifications (item list), Talks & Writing.

### 2.7 — Create `lib/data/cv-principles.ts`

Subset of principles for CV page. Same data shape as `CvPrinciple[]`.

## Verification

```bash
# Type-check all new files
npx tsc --noEmit
```

## Success Criteria

- [ ] All 7 files created with zero TypeScript errors
- [ ] `npx tsc --noEmit` passes
- [ ] All content matches `cv-web.html` reference verbatim (no placeholder text)
- [ ] No hardcoded colours or font families in data files

## Next Steps
→ Phase 03: Primitives
