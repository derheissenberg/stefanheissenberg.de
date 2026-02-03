/**
 * COMPONENT: PhraseBlock
 * PURPOSE: Displays a short phrase in a colored block
 *
 * KEY CONCEPTS:
 * - Colored background (yellow, orange, blue, cyan)
 * - White text using Cherry Bomb display font
 * - Responsive text sizing based on row span
 * - Full height container for row-span support in bento grid
 *
 * LEARNING: h-full ensures the block fills its grid cell height
 * This is essential for cards that span multiple rows (row-span-2, row-span-3)
 *
 * FONT SIZING:
 * - rowSpan 1: Smaller text (mobile: 16px, tablet: 20px, desktop: 24px)
 * - rowSpan 2: Medium text (mobile: 20px, tablet: 28px, desktop: 36px)
 * - rowSpan 3: Large text (mobile: 24px, tablet: 36px, desktop: 48px)
 */

type PhraseBlockProps = {
  text: string;
  color: "yellow" | "orange" | "blue" | "cyan";
  rowSpan?: 1 | 2 | 3;
  fontSize?: "small" | "large" | "xlarge" | "harmonized";
};

const colorStyles = {
  yellow: "bg-[var(--accent-yellow)]",
  orange: "bg-[var(--accent-orange)]",
  blue: "bg-[var(--accent-blue)]",
  cyan: "bg-[var(--accent-cyan)]",
};

// LEARNING: Font size classes based on Figma specifications
// "Beginners mind." is the largest text (xlarge)
// "No fear..." and "Create new ones." are smaller (small)
// Other phrases are large but smaller than "Beginners mind." (large)
// "harmonized" matches "Learn rules..." tablet size (text-4xl = 36px) for consistency
const fontSizeClasses = {
  small: "text-sm sm:text-base lg:text-lg", // Small phrases: 14px → 16px → 18px
  large: "text-xl sm:text-2xl lg:text-3xl", // Regular large phrases: 20px → 24px → 30px
  xlarge: "text-3xl sm:text-4xl lg:text-6xl", // "Beginners mind.": 30px → 36px → 60px
  harmonized: "text-4xl", // Harmonized size: 36px (matches "Learn rules..." tablet size)
};

// LEARNING: Default fontSize based on rowSpan for backward compatibility
const getDefaultFontSize = (rowSpan: number): "small" | "large" | "xlarge" => {
  if (rowSpan === 3) return "xlarge";
  if (rowSpan === 2) return "large";
  return "large";
};

export function PhraseBlock({ text, color, rowSpan = 1, fontSize }: PhraseBlockProps) {
  const finalFontSize = fontSize || getDefaultFontSize(rowSpan);
  
  // LEARNING: Flexible font sizing using clamp() - scales based on container/viewport
  // Ensures text always fits within the box, adapting to available space
  // Formula: clamp(min, preferred, max) - scales smoothly between min and max
  // Using more conservative values to ensure text never overflows boxes
  // Viewport-based scaling (vw) combined with container-relative sizing
  const flexibleFontSize = fontSize === "harmonized" 
    ? "clamp(1rem, 2.5vw + 0.5rem, 1.75rem)" // 16px → scales → 28px (more conservative)
    : fontSize === "small"
    ? "clamp(0.75rem, 1.5vw + 0.5rem, 1rem)" // 12px → scales → 16px
    : fontSize === "large"
    ? "clamp(1rem, 2.5vw + 0.5rem, 1.5rem)" // 16px → scales → 24px
    : fontSize === "xlarge"
    ? "clamp(1.25rem, 3vw + 0.5rem, 2.5rem)" // 20px → scales → 40px
    : undefined; // Fallback to Tailwind classes if no fontSize specified
  
  return (
    <div className={`${colorStyles[color]} h-full rounded-lg p-6 sm:p-8 flex items-center justify-center overflow-hidden`}>
      {/* LEARNING: Cherry Bomb font applied via inline style */}
      {/* CSS variable --font-cherry-bomb is set by Next.js font loader on HTML element */}
      {/* Fallback to system-ui ensures font displays even if variable fails */}
      {/* Flexible font sizing: Uses clamp() to scale based on container/viewport size */}
      {/* Text will always fit within the box, scaling responsively with available space */}
      {/* LEARNING: overflow-hidden prevents text from overflowing box boundaries */}
      {/* LEARNING: max-w-full ensures text doesn't exceed container width */}
      <p
        className={`${flexibleFontSize ? "" : fontSizeClasses[finalFontSize]} leading-tight text-white text-center max-w-full break-words`}
        style={{
          fontFamily: "var(--font-cherry-bomb), system-ui, sans-serif",
          ...(flexibleFontSize ? { fontSize: flexibleFontSize } : {}),
        }}
      >
        {text}
      </p>
    </div>
  );
}
