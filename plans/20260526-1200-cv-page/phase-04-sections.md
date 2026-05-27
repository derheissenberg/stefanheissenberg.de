# Phase 04: Section Components

## Overview
- **Priority:** P0 — page composition depends on sections
- **Status:** Pending
- **Estimated effort:** 2-3 hours

## Dependencies
- Phase 01 (tokens)
- Phase 02 (types + data)
- Phase 03 (primitives: ManifestoBlock, CvCaseStudyCard, MetricCard size="compact")

## Corrections vs Original Plan

| Original Plan | Correction | Reason |
|---|---|---|
| `CvTimelineRow` uses `MiniMetric` | Use `MetricCard size="compact" disableCountUp` | MiniMetric dropped; MetricCard extended instead |
| `CvPrinciplesSection` may extend `PrinciplesSection` | Always new `CvPrinciplesSection` | Leave homepage untouched (safer) |

## Files to Create

| File | Action | Description |
|---|---|---|
| `components/cv/CvSectionHead.tsx` | CREATE | Shared 2-col section header helper |
| `components/cv/CvHeroSection.tsx` | CREATE | Hero with portrait, headline, lede, CTAs, meta-row |
| `components/cv/CvMetricStrip.tsx` | CREATE | 4-column MetricCard grid overlapping hero |
| `components/cv/CvAboutSection.tsx` | CREATE | 2-col prose + pull-quote |
| `components/cv/CvExperienceSection.tsx` | CREATE | Timeline with section header |
| `components/cv/CvTimelineRow.tsx` | CREATE | Individual timeline entry using MetricCard size="compact" |
| `components/cv/CvCaseStudyGrid.tsx` | CREATE | 3-column card grid |
| `components/cv/CvClientWall.tsx` | CREATE | Thin wrapper over CaseStudyLogoStack |
| `components/cv/CvPrinciplesSection.tsx` | CREATE | CV-specific principles + ManifestoBlock |
| `components/cv/CvCredentialsSection.tsx` | CREATE | Awards/certs/education 3-col grid |
| `components/cv/CvSkillsSection.tsx` | CREATE | 2-col skill pill grids |
| `components/layout/CvTopNav.tsx` | CREATE | Sticky page-scoped nav with section anchors |

---

## Shared Pattern: CvSectionHead

All section headers follow the `s-head` grid pattern from cv-web.html:

```
grid grid-cols-[1fr_2fr] gap-8 items-end mb-14 max-[900px]:grid-cols-1
├── lhs: kicker (type-kicker cyan-300, text-[12px]) + subtitle (15px muted)
└── rhs: h2 (Outfit 200, clamp(48px,7vw,96px), -0.045em tracking)
           with <em class="gradient-text-safe"> + optional <span dim> portion
```

---

## Token Reference (all styling via Tailwind)

| Token | Tailwind equivalent |
|---|---|
| `var(--background-2)` | `bg-[var(--background-2)]` |
| `var(--muted)` | `text-[var(--muted)]` |
| `var(--muted-2)` | `text-[var(--muted-2)]` |
| `var(--rule)` | `border-[var(--rule)]` |
| `var(--rule-strong)` | `border-[var(--rule-strong)]` |
| `var(--accent-cyan-300)` | `text-[var(--accent-cyan-300)]` |

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| 393px (mobile) | Hero no overflow; experience year compact (static); metric strip 2-up; nav hides anchors |
| 800px | Timeline cols collapse to 1; metrics 2-up; about stacks text then quote |
| 1280px | Full layout: sticky year, 4-up metrics, 3-col case studies |

---

## Verification

```bash
npx tsc --noEmit
npx next build
```

## Success Criteria

- [ ] Each section renders in isolation (no missing imports)
- [ ] All sections Server Components (except CvMetricStrip which needs MetricCard's client hooks)
- [ ] Section spacing: `py-24 max-[720px]:py-16` matches reference `section.s`
- [ ] Timeline year sticks on desktop (`sticky top-[100px]`)
- [ ] Case study cards show hover effects (CSS only)
- [ ] `npx tsc --noEmit` passes
- [ ] `npx next build` passes

## Next Steps
→ Phase 05: Page Composition
