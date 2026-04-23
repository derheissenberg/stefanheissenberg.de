# Deep Passion section + reusable SectionEyebrow

Drop-in replacement for your existing `DeepPashionSection`, plus a reusable
eyebrow component you can now use on every section of the site.

## Files

| File                     | What it is                                                  |
| ------------------------ | ----------------------------------------------------------- |
| `SectionEyebrow.tsx`     | **Reusable** eyebrow — Kode Mono, tracked, uppercase        |
| `DeepPashionSection.tsx` | Updated section using `SectionEyebrow` + bold Outfit headline |
| `AuroraAmber.jsx`        | Ambient warm background (unchanged)                         |
| `useBgCanvas.js`         | Canvas mount hook (unchanged)                               |

## What changed in `DeepPashionSection.tsx`

- Dropped the old `.section-heading` pattern
- Kode Mono eyebrow "DEEP PASSION" (extracted into `SectionEyebrow`)
- Outfit 700 headline "Three things I go deep on" — centered, white
- Subhead paragraph removed per brief
- Cards: white heading / Outfit 600 grey subheading (16px) / soft grey body (15px)

## How to use the reusable eyebrow on other sections

```tsx
import { SectionEyebrow } from "@/components/SectionEyebrow";

// Centered (default) — with a headline beneath it
<SectionEyebrow>Deep Passion</SectionEyebrow>
<h2>Three things I go deep on</h2>

// Left-aligned — e.g. above the Key Creator Identifiers stats grid
<SectionEyebrow align="left">Key Creator Identifiers</SectionEyebrow>

// Standalone, no headline — just a section marker
<SectionEyebrow spacingClassName="mb-10">Aloha</SectionEyebrow>
```

### Props

| Prop               | Default      | Notes                                         |
| ------------------ | ------------ | --------------------------------------------- |
| `children`         | —            | The label text                                |
| `align`            | `"center"`   | `"left" \| "center" \| "right"`               |
| `spacingClassName` | `"mb-5"`     | Tailwind margin-bottom utility                |
| `className`        | `""`         | Extra classes (e.g. custom color)             |
| `as`               | `"p"`        | `"p" \| "span" \| "div"`                      |

### Style tokens baked in

- Font: `var(--font-kode-mono)` with monospace fallback
- Size: 13px mobile → 15px desktop (slightly larger than before so it holds its own without a headline)
- Weight: 500
- Tracking: 0.32em uppercase
- Color: white at 60% opacity

## Integration

Replace your existing `DeepPashionSection` import with the new file, and add
`SectionEyebrow` to your shared components folder. No other changes needed.
