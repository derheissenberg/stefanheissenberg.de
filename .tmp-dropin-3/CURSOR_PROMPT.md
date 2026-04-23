# Cursor prompt — integrate the three animated backgrounds

Copy-paste the block below into Cursor (Cmd-K / Agent mode) after you
drop the `dropin/` folder into your repo.

---

```
I've added four files under `src/components/backgrounds/` (or wherever
you keep shared components — adjust the import paths to match):

- useBgCanvas.js
- AuroraBlue.jsx        → for the Key Creator Identifiers section
- AuroraAmber.jsx       → for the Deep Passion section
- HorizonDrift.jsx      → for the Aloha section

Your job: integrate these three backgrounds into the existing sections
on stefanheissenberg.de, WITHOUT changing any existing layout, content,
typography, spacing, colors, or section heights.

Constraints (do not violate):

1. Do not modify the existing content, markup, or styles inside each
   section. Only add the background layer and (if needed) a
   `position: relative; z-index: 1;` wrapper around the existing content.
2. Do not fix the section height. Section heights must stay flexible
   and flow with their content. The canvas reads its parent's
   offsetWidth/offsetHeight and will repaint on resize.
3. Do not change the site's max-width, container widths, or grid.
   The background fills its section, not the viewport.
4. The sections' background color should remain #0a0a0a (or whatever
   the current site-black is). The canvas fades top and bottom to the
   same black so there is no visible seam with adjacent sections.
5. Backgrounds are decorative. They must remain pointer-events: none
   and aria-hidden (already set in the components).

Integration pattern for each section:

    <section style={{ position: 'relative', /* existing styles */ }}>
      <AuroraBlue />                          {/* or AuroraAmber / HorizonDrift */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* 100% of the existing section content — untouched */}
      </div>
    </section>

If the section is a styled component or Tailwind, the equivalents are:
- `position: relative` → className includes `relative`
- Content wrapper → `<div className="relative z-[1]">...</div>`
- Do not add `overflow: hidden` to the section unless it already has it —
  the background component already scopes its own overflow.

Mapping:
- AuroraBlue      → Key Creator Identifiers section (the 3×3 stats grid with 170+, 9, 2, 2.852, 10, 4.658, 3, 7, 8)
- AuroraAmber     → Deep Passion section (Builder / Team Builder / Evidence Builder tiles)
- HorizonDrift    → Aloha section (the "Aloha 👋" heading + intro paragraphs with Linkedin/email links)

After wiring, verify:
- No existing content shifted by even one pixel.
- Section heights still respond to their content.
- The stats grid still clicks/scrolls normally (no overlay blocking).
- The Linkedin, Saloodo, OnlyPN, email links in Aloha are still clickable
  and stay visible over the warm background.
- On tab switch, animations pause (rAF default) — no battery drain.

Do NOT:
- Touch any other section.
- Touch Next.js config, Tailwind config, or global CSS.
- Add new npm dependencies — these components use only React.
- Change the copy, icons, or tile ordering in any section.
```

---

## Files delivered

```
dropin/
├── useBgCanvas.js
├── AuroraBlue.jsx
├── AuroraAmber.jsx
├── HorizonDrift.jsx
└── README.md
```
