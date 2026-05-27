# Phase 01: Audit & Token Additions

## Overview
- **Priority:** P0 — all subsequent phases depend on these tokens existing
- **Status:** Pending
- **Estimated effort:** 15 min

## Dependencies
- None (first phase)

## File to Edit

| File | Action | Description |
|---|---|---|
| `app/globals.css` | MODIFY | Add 6 new CSS custom properties to `:root` only — NO utility classes |

## Tasks

### 1.1 — Add CSS custom properties to `:root` only

Append inside the existing `:root {}` block (6 tokens, no utility classes):

```css
/* CV Page tokens */
--background-2: #0e0e0e;
--muted: rgba(237, 237, 237, 0.55);
--muted-2: rgba(237, 237, 237, 0.32);
--rule: rgba(255, 255, 255, 0.08);
--rule-strong: rgba(255, 255, 255, 0.16);
--accent-cyan-300: #67e8f9;
```

> Note: These 6 tokens match the cv-web.html `:root` variables exactly.
> All CV section styling is achieved via Tailwind utilities that reference these tokens.
> NO new CSS utility classes are added — the cv-* utility class approach was dropped in favour of inline Tailwind.

## Verification

```bash
npx next build 2>&1 | head -20
```

## Success Criteria

- [ ] `npx next build` passes
- [ ] All 6 tokens present in `:root`
- [ ] No existing styles broken

## Next Steps
→ Phase 02: Types & Data
