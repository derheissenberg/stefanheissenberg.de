# Cursor prompt — update the Aloha section

Paste this into Cursor after you replace `dropin/HorizonDrift.jsx` in your repo.

---

```
I've updated src/components/backgrounds/HorizonDrift.jsx (replace the
existing file with the new one). This new version:

1. Pushes the sun slightly right of center (from 0.70 → 0.76 x-factor)
   so it no longer sits dead-center behind body copy.
2. Softens the sun disc + halo (~35% dimmer) so text over it stays readable.
3. Bakes a horizontal dark "readability band" into the canvas itself —
   a vertical gradient from transparent → rgba(10,10,10,0.55) → transparent
   across the middle 55% of the section.

Because the readability band is painted by the canvas, the Aloha section
does NOT need a card/frosted wrapper around the text. Leave the existing
section markup alone — the only change is the HorizonDrift component file.

Expected result:
- "Aloha 👋" heading and body paragraphs are clearly readable against
  the background.
- The sun is still visible and feels intentional, but no longer competes
  with the text block.
- Links (LinkedIn, email) remain the accent-cyan highlight.

Do not:
- Add a <div className="bg-black/40 ..."> wrapper around the Aloha text.
- Modify the AlohaSection component's markup, padding, or max-width.
- Change HorizonDrift's export signature or integration (<HorizonDrift />
  still sits as the first absolutely-positioned child of the section).

Verify on localhost that:
- Body text contrast is comfortable (WCAG AA at 18px).
- The sun still drifts slightly with the cursor (pointer reactivity intact).
- No console errors.
- Other sections using HorizonDrift are not visually regressed — this
  component is currently only used in Aloha, so it should be fine.
```

---

## What changed in `HorizonDrift.jsx`

| Parameter      | Before              | After                 | Reason                          |
| -------------- | ------------------- | --------------------- | ------------------------------- |
| Sun x-factor   | `0.70`              | `0.76`                | Shifts sun right of the text    |
| Halo alpha     | `0.35 / 0.15`       | `0.22 / 0.10`         | Softens glow around sun         |
| Disc alpha     | `0.95 / 0.85`       | `0.60 / 0.55`         | Dims the disc itself            |
| NEW band       | —                   | `0 → 0.55 → 0` stops  | Darkens the text area band      |

## Integration pattern (unchanged)

```tsx
<section className="relative bg-[var(--background)]" aria-label="Aloha">
  <HorizonDrift />
  <div className="relative z-[1]">
    {/* Aloha 👋 heading + paragraphs — unchanged */}
  </div>
</section>
```
