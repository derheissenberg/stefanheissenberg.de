# Phase 05: Page Composition

## Overview
- **Priority:** P0 — final assembly of all sections
- **Status:** Pending
- **Estimated effort:** 30 min

## Dependencies
- Phase 04 complete (all section components exist)
- Phase 03 (CvCaseStudyCard, ManifestoBlock available)

## Files to Create

| File | Action | Description |
|---|---|---|
| `app/cv/page.tsx` | CREATE | Page component — Server Component, section composition |

## Tasks

### 5.1 — Create `app/cv/page.tsx`

**Structure:**

```typescript
import { CvHeroSection } from "@/components/cv/CvHeroSection";
import { CvMetricStrip } from "@/components/cv/CvMetricStrip";
import { CvAboutSection } from "@/components/cv/CvAboutSection";
import { CvExperienceSection } from "@/components/cv/CvExperienceSection";
import { CvCaseStudyGrid } from "@/components/cv/CvCaseStudyGrid";
import { CaseStudyLogoStack } from "@/components/case-studies/CaseStudyLogoStack";
import { CvPrinciplesSection } from "@/components/cv/CvPrinciplesSection";
import { CvCredentialsSection } from "@/components/cv/CvCredentialsSection";
import { CvSkillsSection } from "@/components/cv/CvSkillsSection";
import { WantTheFullStoryCTASection } from "@/components/sections/WantTheFullStoryCTASection";
import { CV_CLIENT_LOGOS } from "@/lib/data/cv-clients";

export default function CvPage() {
  return (
    <main>
      <CvHeroSection />
      <CvMetricStrip />
      <CvAboutSection />
      <CvExperienceSection />
      <CvCaseStudyGrid />

      {/* Client Wall — reuses existing CaseStudyLogoStack */}
      <section className="bg-[var(--background)]" aria-label="Clients">
        <div className="mx-auto max-w-[1280px] px-8">
          <CaseStudyLogoStack
            label="Clients"
            logos={CV_CLIENT_LOGOS}
            size="default"
            showKicker={false}
            showTopBorder={true}
            showBottomBorder={true}
          />
        </div>
      </section>

      <CvPrinciplesSection />
      <CvCredentialsSection />
      <CvSkillsSection />

      {/* Final CTA — reuses WantTheFullStoryCTASection with CV-specific copy */}
      <WantTheFullStoryCTASection
        nextCaseLabel="← Back to portfolio"
        nextCaseHref="/design-portfolio-sh"
      />
    </main>
  );
}
```

### 5.2 — Client Wall Data

Create `lib/data/cv-clients.ts` with logo subset from `CustomersSection.tsx`:

Use existing customer logos from `/public/images/customers/`. Select the logos that appear in the cv-web.html client wall:
- DHL, Bayer, BioNTech, OBI Next, Saloodo, sunzinet references → use existing images
- Map to `CaseStudyLogoStackItem[]` type

### 5.3 — Section Ordering Verification

Confirm sections render in correct order matching cv-web.html:

1. Hero (with sticky nav inherited from layout)
2. Metric Strip (overlaps hero bottom)
3. About / Summary
4. Experience Timeline
5. Case Studies (3-col grid)
6. Client Wall (logo strip with borders)
7. Principles (with manifesto)
8. Credentials (Awards, Certs, Talks)
9. Skills & Tools
10. Final CTA

### 5.4 — Spacing Between Sections

All sections use the `.s` pattern from cv-web.html:
- Default: `py-[96px]` desktop, `py-[64px]` mobile
- `padding-top: 0` for sections that visually connect (Experience, Cases, Credentials, Skills)
- Metric strip uses negative margin to overlap hero

---

## Verification

```bash
# Full build
npx next build

# Dev server — visual check
npx next dev
# Visit http://localhost:3000/cv
```

## Success Criteria

- [ ] `/cv` renders all 10 sections in correct order
- [ ] No TypeScript errors
- [ ] `npx next build` passes
- [ ] Page is a Server Component (no hydration bundle for static sections)
- [ ] Client wall shows grayscale logos with hover colour reveal
- [ ] WantTheFullStoryCTASection renders with "← Back to portfolio" secondary button
- [ ] No horizontal scroll on any viewport width (320px → 1440px)
- [ ] Sections flow with proper spacing (no double padding, no collapsing gaps)

## Next Steps
→ Phase 06: SEO, Sitemap & QA
