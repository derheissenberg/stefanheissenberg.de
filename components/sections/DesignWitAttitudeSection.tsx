/**
 * COMPONENT: DesignWitAttitudeSection
 * PURPOSE: Displays inspirational phrases in colored blocks using bento-style grid
 *
 * KEY CONCEPTS:
 * - Bento grid layout: 4 columns on desktop
 * - Column 1: Two separate yellow cards - "No fear..." (top, row 1) and "Beginners mind." (bottom, rows 2-3)
 * - Column 2: Two orange cards - "Learn rules..." (top, spans 2 rows) and "Create new ones." (bottom, row 3)
 * - Column 3: Three blue cards - "Start where you are." (row 1), "Use what you have." (row 2), "Do what you can." (row 3)
 * - Column 4: Three cyan cards - "Get things done." (row 1), "Don't die in perfection." (row 2), "Don't develop shit." (row 3)
 * - Responsive: Single column on mobile, 4 columns on desktop
 * - Uses PhraseBlock component for consistent styling
 *
 * GRID STRUCTURE (Desktop - 4 columns × 3 rows):
 * Column 1: "No fear..." (row 1, spans 1 row), "Beginners mind." (rows 2-3, spans 2 rows) - 1:2 ratio
 * Column 2: "Learn rules..." (row-span-2, rows 1-2), "Create new ones." (row 3)
 * Column 3: "Start where you are." (row 1), "Use what you have." (row 2), "Do what you can." (row 3)
 * Column 4: "Get things done." (row 1), "Don't die in perfection." (row 2), "Don't develop shit." (row 3)
 *
 * MOBILE STRUCTURE:
 * Single column, stacked vertically in order
 */

import { PhraseBlock } from "@/components/ui/PhraseBlock";

export function DesignWitAttitudeSection() {
  // LEARNING: Reduced vertical padding on mobile (py-10) for tighter spacing, normal padding on desktop (lg:py-20)
  return (
    <section className="bg-[var(--background)] px-8 py-10 lg:py-20" aria-label="Design with attitude">
      {/* Container: 1160px max-width matches other sections */}
      <div className="mx-auto max-w-[1160px]">
        <h2
          className="mb-[22px] text-center text-[13px] uppercase text-white/60 sm:text-[15px]"
          style={{
            fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
            fontWeight: 500,
            letterSpacing: "0.32em",
          }}
        >
          Design with Attitude
        </h2>
        {/* Bento grid: Single column mobile, 4 columns desktop */}
        {/* LEARNING: grid-cols-1 creates single column on mobile (matches Figma) */}
        {/* LEARNING: md:grid-cols-4 creates 4-column layout on desktop */}
        {/* LEARNING: auto-rows-[200px] on mobile (increased from 150px) for larger text, 150px on desktop */}
        {/* LEARNING: gap-4 provides consistent spacing between cards */}
        <div className="grid grid-cols-1 gap-4 auto-rows-[200px] md:grid-cols-4 md:auto-rows-[150px]">
          {/* Column 1, Row 1: "Beginners mind." - SEPARATE card */}
          {/* LEARNING: Harmonized font size with flexible sizing - text scales to fit box */}
          {/* LEARNING: 1:2 ratio - "Beginners mind." spans 1 row, "No fear..." spans 2 rows */}
          <PhraseBlock text="Beginners mind." color="yellow" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 2, Rows 1-2: "Learn rules to break them." (spans 2 rows) */}
          {/* LEARNING: md:row-span-2 makes this card span 2 rows in the grid */}
          <div className="md:row-span-2">
            <PhraseBlock text="Learn rules to break them." color="orange" rowSpan={2} fontSize="harmonized" />
          </div>
          
          {/* Column 3, Row 1: "Start where you are." (blue) */}
          {/* LEARNING: Harmonized font size with flexible sizing */}
          <PhraseBlock text="Start where you are." color="blue" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 4, Row 1: "Get things done." (cyan) */}
          {/* LEARNING: Harmonized font size with flexible sizing */}
          <PhraseBlock text="Get things done." color="cyan" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 1, Rows 2-3: "No fear to follow your passion." - SEPARATE card, spans 2 rows (1:2 ratio) */}
          {/* LEARNING: Changed to row-span-2 for 1:2 ratio with "Beginners mind." (1 row : 2 rows) */}
          {/* LEARNING: Flexible font sizing ensures text fits even in smaller box */}
          <div className="md:row-span-2">
            <PhraseBlock text="No fear to follow your passion." color="yellow" rowSpan={2} fontSize="harmonized" />
          </div>
          
          {/* Column 3, Row 2: "Use what you have." (blue) */}
          {/* LEARNING: Harmonized font size - matches "Learn rules..." tablet size */}
          <PhraseBlock text="Use what you have." color="blue" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 4, Row 2: "Don't die in perfection." (cyan) */}
          {/* LEARNING: Harmonized font size - matches "Learn rules..." tablet size */}
          <PhraseBlock text="Don't die in perfection." color="cyan" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 2, Row 3: "Create new ones." */}
          {/* LEARNING: This fills the remaining space in column 2 after "Learn rules..." */}
          {/* LEARNING: Harmonized font size - matches "Learn rules..." tablet size */}
          <PhraseBlock text="Create new ones." color="orange" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 3, Row 3: "Do what you can." (blue) */}
          {/* LEARNING: Harmonized font size - matches "Learn rules..." tablet size */}
          <PhraseBlock text="Do what you can." color="blue" rowSpan={1} fontSize="harmonized" />
          
          {/* Column 4, Row 3: "Don't develop shit." (cyan) */}
          {/* LEARNING: Harmonized font size - matches "Learn rules..." tablet size */}
          <PhraseBlock text="Don't develop shit." color="cyan" rowSpan={1} fontSize="harmonized" />
        </div>
      </div>
    </section>
  );
}
