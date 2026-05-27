# Phase 03: Primitives

## Overview
- **Priority:** P0 — section components compose these primitives
- **Status:** Pending
- **Estimated effort:** 45 min

## Dependencies
- Phase 01 (tokens exist in globals.css)
- Phase 02 (types exist for prop definitions)

## Corrections vs Original Plan

| Original Plan | Correction | Reason |
|---|---|---|
| New `MiniMetric` primitive | Extend `MetricCard` with `size="compact"` + `disableCountUp` | MetricCard already handles gradient numbers; adding size+disableCountUp is <30% change |
| Extend `CaseStudyTeaser` with `variant="compact"` | New `CvCaseStudyCard` fallback | CaseStudyTeaser is full-width 2-col layout; CV needs 3-col cards — too different to extend |
| Modify `PrinciplesSection` with data prop | New `CvPrinciplesSection` fallback | PrinciplesSection is complex hardcoded; safer to leave homepage untouched |

## Files to Modify

| File | Action | Description |
|---|---|---|
| `components/ui/MetricCard.tsx` | MODIFY | Add `size?: "default"\|"compact"`, `disableCountUp?: boolean` props |

## Files to Create

| File | Action | Description |
|---|---|---|
| `components/ui/ManifestoBlock.tsx` | CREATE | Extracted centered blockquote with gradient emphasis |
| `components/cv/CvCaseStudyCard.tsx` | CREATE | Compact 3-column case study card (fallback — CaseStudyTeaser too different) |

---

## Tasks

### 3.1 — Modify `MetricCard.tsx`

**Goal:** Add `size="compact"` for inline ministrip values and `disableCountUp` for static rendering.

**Props to add:**
```typescript
size?: "default" | "compact";      // "compact" = 26px gradient number, no card/border
disableCountUp?: boolean;           // true = show value statically (no animation)
```

**Compact rendering:**
- No GlowCard wrapper (plain div, no border, no bg)
- Value: 26px, weight 800, italic, gradient text (same gradient)
- Label: 9.5px, weight 500, 0.2em tracking, uppercase, muted
- Vertical stack, gap 6px
- Server-safe static display when `disableCountUp=true`

### 3.2 — Create `components/ui/ManifestoBlock.tsx`

**Purpose:** Centered blockquote pattern — currently inlined in PrinciplesSection.

**Props:**
```typescript
type ManifestoBlockProps = {
  kicker: string;           // "03 · Manifesto"
  quote: string;            // Text before highlight
  quoteHighlight: string;   // Gradient italic portion
  quoteAfter?: string;      // Text after highlight (optional)
  attribution?: string;     // Small attribution text below
  showQuoteMarks?: boolean; // Default true
};
```

**Server Component** (no interactivity).

### 3.3 — Create `components/cv/CvCaseStudyCard.tsx`

**Fallback decision:** CaseStudyTeaser is a full-width 2-column section component — restructuring it to a 3-column card would require >70% of the component to change. Creating a dedicated `CvCaseStudyCard` is cleaner and safer.

**Props:**
```typescript
type CvCaseStudyCardProps = {
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: string;
  titleHighlight?: string;
  description: string;
  href: string;
};
```

**Server Component** (hover via CSS only).

---

## Verification

```bash
npx tsc --noEmit
npx next build
```

## Success Criteria

- [ ] `MetricCard` size="compact" renders inline gradient number without GlowCard/border
- [ ] `MetricCard` disableCountUp=true shows static value
- [ ] `ManifestoBlock` renders kicker + blockquote with gradient emphasis
- [ ] `CvCaseStudyCard` renders image + kicker + title + description + link
- [ ] Homepage MetricCards unchanged (no prop = default behavior)
- [ ] `npx tsc --noEmit` passes
- [ ] No "use client" on ManifestoBlock or CvCaseStudyCard

## Next Steps
→ Phase 04: Sections
