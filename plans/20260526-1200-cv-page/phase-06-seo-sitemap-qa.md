# Phase 06: SEO, Sitemap & QA

## Overview
- **Priority:** P1 — page works without this, but SEO is critical for discoverability
- **Status:** Pending
- **Estimated effort:** 30 min

## Dependencies
- Phase 05 complete (page renders)

## Files to Modify

| File | Action | Description |
|---|---|---|
| `app/cv/page.tsx` | MODIFY | Add `metadata` export + JSON-LD script |
| `app/sitemap.ts` | MODIFY | Add `/cv` entry |

---

## Tasks

### 6.1 — Add Page Metadata to `app/cv/page.tsx`

Add `metadata` export following the pattern in `app/layout.tsx`:

```typescript
import type { Metadata } from "next";

const baseUrl = "https://www.stefanheissenberg.de";

export const metadata: Metadata = {
  title: "Stefan Heißenberg — CV | Head of Design",
  description:
    "Head of Design at DHL · Senior product & UX design leader · Fifteen years across agency, consulting, startup, and enterprise.",
  keywords: [
    "Stefan Heißenberg CV",
    "Head of Design",
    "UX Leadership",
    "Product Design Leader",
    "Design Resume",
    "Cologne Germany",
  ],
  alternates: {
    canonical: `${baseUrl}/cv`,
  },
  openGraph: {
    type: "profile",
    title: "Stefan Heißenberg — CV | Head of Design",
    description:
      "Senior product & UX design leader · Fifteen years across agency, consulting, startup, and enterprise.",
    url: `${baseUrl}/cv`,
    firstName: "Stefan",
    lastName: "Heißenberg",
    images: [
      {
        url: "/images/og-image-stefan-heissenberg.png",
        width: 1200,
        height: 630,
        alt: "Stefan Heißenberg — CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan Heißenberg — CV | Head of Design",
    description:
      "Senior product & UX design leader · Fifteen years across agency, consulting, startup, and enterprise.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};
```

### 6.2 — Add JSON-LD (ProfilePage schema)

Add structured data inside the page component using Next.js `<Script>`:

```typescript
import Script from "next/script";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Stefan Heißenberg",
    alternateName: "Stefan Heissenberg",
    jobTitle: "Head of Design",
    worksFor: {
      "@type": "Organization",
      name: "DHL Global Forwarding",
    },
    url: "https://www.stefanheissenberg.de/cv",
    image: "https://www.stefanheissenberg.de/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cologne",
      addressCountry: "DE",
    },
    knowsAbout: [
      "Product Design", "UX Strategy", "Design Leadership",
      "Design Systems", "User Research", "B2B SaaS",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Head of Design",
        occupationalCategory: "27-1024.00",
      },
    ],
  },
  dateCreated: "2026-05-26",
  dateModified: "2026-05-26",
};
```

### 6.3 — Update `app/sitemap.ts`

Add `/cv` to sitemap array:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-06T16:47:34+02:00"),
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date("2026-05-26T12:00:00+02:00"),
      priority: 0.9,
    },
  ];
}
```

### 6.4 — QA Checklist

Run these verification commands:

```bash
# Build passes
npx next build

# Lint passes
npx next lint

# Type-check passes
npx tsc --noEmit
```

**Manual QA (developer):**

- [ ] Visit `/cv` at 320px, 768px, 1024px, 1440px
- [ ] Verify no horizontal scroll at any width
- [ ] Check all gradient text renders (no transparent/invisible text)
- [ ] Verify hero portrait loads (no 404 in network tab)
- [ ] Check all customer logos load (no 404)
- [ ] Verify metric cards animate on scroll into view
- [ ] Check timeline year sticks on desktop scroll
- [ ] Hover case study cards — verify border + lift transition
- [ ] Hover skill pills — verify colour shift
- [ ] Click "Get in touch" CTA — opens mailto
- [ ] Click "← Back to portfolio" — navigates to /design-portfolio-sh
- [ ] View page source — confirm JSON-LD present
- [ ] Check `/sitemap.xml` — confirm /cv entry visible

**Lighthouse audit:**

```bash
# Run Lighthouse CI (requires lighthouse installed)
npx lighthouse http://localhost:3000/cv --output json --quiet | jq '.categories.performance.score'
```

Target: Performance ≥ 0.90, Accessibility ≥ 0.95, Best Practices ≥ 0.95, SEO ≥ 0.95

### 6.5 — Content Accuracy Spot-Check

Cross-reference these claims against existing portfolio pages:

| Claim | Source verification |
|---|---|
| "22,000+ enterprise customers" | DHL case study page ✓ |
| "50+ countries" | DHL case study page ✓ |
| "5 ventures founded" | Verify against about/portfolio content |
| "82 customers served" | CustomersSection data (19 logos visible, but claim is total career) |
| "15+ years" | 2011 → 2026 = 15 years ✓ |
| "Available in 10–12 days" | RISK: This is a notice period estimate. Add footnote or soften to "Typically available within 2 weeks" |

---

## Verification

```bash
npx next build && npx next lint && npx tsc --noEmit
```

## Success Criteria

- [ ] `npx next build` passes
- [ ] `npx next lint` passes (zero errors)
- [ ] `npx tsc --noEmit` passes
- [ ] `/sitemap.xml` includes `/cv` entry
- [ ] Page `<head>` renders correct `<title>`, `<meta description>`, OG tags
- [ ] JSON-LD ProfilePage schema valid (test at schema.org validator)
- [ ] Lighthouse Performance ≥ 90 on mobile
- [ ] No hydration errors in browser console
- [ ] All images load without 404
- [ ] Responsive layout correct at 320px, 768px, 1024px, 1440px

## Done

CV page is production-ready. Deploy behind feature flag or merge to main for immediate publish.
