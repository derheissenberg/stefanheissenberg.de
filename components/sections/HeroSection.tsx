/**
 * COMPONENT: HeroSection
 * PURPOSE: Landing page hero section with name, headline, tagline, CTA button, and portrait background
 *
 * NEXT.JS CONCEPTS EXPLAINED:
 *
 * 1. SERVER COMPONENT (Default in Next.js App Router)
 *    - This component is a Server Component by default (no "use client" directive)
 *    - Server Components render on the server, reducing JavaScript sent to the client
 *    - Perfect for static content like this hero section
 *    - Can use async/await to fetch data directly (not needed here)
 *
 * 2. COMPONENT STRUCTURE
 *    - Function component: Exported as named export (not default)
 *    - TypeScript: Uses type annotations for props (HeroSectionProps)
 *    - Props: Optional ctaHref with default value (React pattern)
 *
 * 3. NEXT/IMAGE OPTIMIZATION
 *    - next/image automatically optimizes images (WebP, AVIF formats)
 *    - Lazy loading by default (except priority images)
 *    - Responsive images with srcSet generation
 *    - Prevents Cumulative Layout Shift (CLS) with aspect ratio
 *
 * 4. LAYOUT TECHNIQUES
 *    - CSS Positioning: relative (section) + absolute (background images)
 *    - Z-index layering: Background (z-0) → Content (z-10)
 *    - Flexbox: For vertical centering (items-center) and content alignment
 *    - Max-width container: Centers content on large screens, constrains width
 *
 * 5. RESPONSIVE DESIGN (Tailwind CSS)
 *    - Mobile-first approach: Base styles for mobile, lg: prefix for desktop
 *    - Breakpoints: lg: = 1024px and above
 *    - Conditional rendering: hidden lg:block / lg:hidden for different images
 *
 * 6. ACCESSIBILITY
 *    - aria-label: Describes section purpose for screen readers
 *    - aria-hidden: Hides decorative images from screen readers
 *    - Semantic HTML: <section>, <h1>, <p> for proper document structure
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";

/**
 * TYPE DEFINITION: HeroSectionProps
 * LEARNING: TypeScript interfaces/types define the shape of component props
 * - ctaHref?: Optional prop (the ? makes it optional)
 * - Default value provided in function parameter if not passed
 * - Type safety: TypeScript will error if wrong type is passed
 */
type HeroSectionProps = {
  ctaHref?: string;
};

/**
 * COMPONENT FUNCTION: HeroSection
 * LEARNING: React function component pattern
 * - Receives props as parameter (destructured with default value)
 * - Returns JSX (JavaScript XML - looks like HTML but is JavaScript)
 * - JSX must return a single parent element (React Fragment <></> or single element)
 */
export function HeroSection({ ctaHref = "mailto:hallo@stefanheissenberg.de" }: HeroSectionProps) {
  return (
    /**
     * SECTION ELEMENT: Root container for the hero section
     * LEARNING: Semantic HTML5 element (<section>) for better accessibility and SEO
     *
     * CSS CLASSES EXPLAINED:
     * - relative: Establishes positioning context for absolutely positioned children
     * - w-full: Width 100% (spans full viewport width)
     * - min-h-[800px]: Minimum height 800px (mobile)
     * - lg:h-[800px]: Fixed height 800px on desktop (lg breakpoint = 1024px+)
     * - overflow-hidden: Clips content that overflows (hides image overflow)
     * - bg-[var(--background)]: Uses CSS custom property for background color
     * - aria-label: Accessibility - describes section for screen readers
     */
    <section
      className="relative w-full min-h-[800px] overflow-hidden bg-[var(--background)] lg:h-[800px]"
      aria-label="Introduction"
    >
      {/* 
        BACKGROUND IMAGE WRAPPER: Constrains background images to 1600px max-width
        LEARNING: Centered container pattern for responsive design
        
        WHY THIS WRAPPER?
        - Constrains background images to same width as content (1600px)
        - Keeps images aligned with content on large screens
        - mx-auto centers the container horizontally
        - max-w-[1600px] matches content container width
        
        CSS CLASSES:
        - absolute inset-0: Positions absolutely, fills section
        - mx-auto: Centers horizontally (auto margins)
        - max-w-[1600px]: Maximum width constraint
        - pointer-events-none: Allows clicks to pass through to content below
      */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1600px]">
        {/* 
          BACKGROUND IMAGE CONTAINER: Desktop/Tablet Portrait
          LEARNING: Conditional rendering based on screen size
          
          STRUCTURE BREAKDOWN:
          1. Outer div: pointer-events-none (allows clicks to pass through to content)
                      absolute inset-0 (positions absolutely, fills parent)
                      hidden lg:block (hidden on mobile, visible on desktop)
          
          2. Inner div: relative (needed for next/image fill prop)
                       h-full w-full (fills parent container)
          
          WHY TWO DIVS?
          - Outer div: Handles positioning and visibility
          - Inner div: Required by next/image when using fill prop
                       The Image component needs a positioned parent (relative/absolute)
        */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="relative h-full w-full">
            {/**
             * NEXT/IMAGE COMPONENT: Optimized image loading
             * LEARNING: next/image provides automatic optimization
             *
             * PROPS EXPLAINED:
             * - src: Image path (from /public folder, no need to include /public in path)
             * - alt: Empty string because image is decorative (covered by aria-hidden)
             * - fill: Makes image fill parent container (requires parent to be position: relative)
             * - className: Tailwind classes for image styling
             *   * object-contain: Maintains aspect ratio, fits within container
             *   * object-right: Aligns image to right side of container
             * - priority: Loads immediately (above the fold, important for LCP - Largest Contentful Paint)
             * - sizes: Tells browser image width for responsive srcSet generation
             *   * "100vw" = image takes full viewport width (but constrained by max-w-[1600px])
             * - aria-hidden: Removes image from accessibility tree (decorative only)
             */}
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png"
              alt=""
              fill
              className="object-contain object-right"
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
              aria-hidden
            />
          </div>
        </div>

        {/* 
          BACKGROUND IMAGE CONTAINER: Mobile Portrait
          LEARNING: Different image for mobile vs desktop
          
          WHY SEPARATE IMAGES?
          - Mobile: Cropped/optimized version (smaller file size)
          - Desktop: Full portrait (higher quality)
          - Better performance: Loads appropriate image for device
          
          CSS CLASSES:
          - lg:hidden: Hidden on desktop (opposite of desktop image)
          - object-cover: Fills container, may crop (vs object-contain which fits)
          - object-[center_20%]: Custom object-position (centers horizontally, 20% from top)
            * This ensures the face is visible on mobile (not cropped)
        */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg"
              alt=""
              fill
              className="object-cover object-[center_20%]"
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* 
        CONTENT OVERLAY CONTAINER: Wraps all text content and button
        LEARNING: Flexbox for vertical centering and max-width for responsive layout
        
        LAYOUT STRATEGY:
        1. Max-width container (1600px): Constrains content width on large screens
        2. Centered with mx-auto: Auto margins center container horizontally
        3. Flexbox with items-center: Vertically centers content
        4. Z-index: Ensures content appears above background images
        
        CSS CLASSES EXPLAINED:
        - relative: Establishes new stacking context for z-index
        - z-10: Places content above background (z-0 is default)
        - mx-auto: Horizontal centering (margin-left: auto, margin-right: auto)
        - flex: Enables flexbox layout
        - h-full min-h-[800px]: Full height, minimum 800px (enables vertical centering)
        - w-full: Full width (within parent)
        - max-w-[1600px]: Maximum width 1600px (content + background image constraint)
        - items-center: Flexbox - vertically centers children
        - px-[30px]: Horizontal padding 30px (mobile)
        - lg:min-h-0: Removes min-height on desktop (uses h-[800px] from section)
        - lg:pl-[108px]: Left padding 108px on desktop (48px + 60px increase = 108px)
        - lg:pr-12: Right padding 48px on desktop (12 * 4px = 48px)
        
        WHY MAX-WIDTH ON THIS CONTAINER?
        - Constrains both content AND background image area
        - On screens wider than 1600px, section stays centered
        - Background images won't stretch beyond 1600px
        - Content remains readable (not too wide)
      */}
      {/* LEARNING: Desktop padding-left increased by 60px: lg:pl-[108px] (48px + 60px = 108px) */}
      <div className="relative z-10 mx-auto flex h-full min-h-[800px] w-full max-w-[1600px] items-center px-[30px] lg:min-h-0 lg:pl-[100px] lg:pr-12">
        {/* 
          CONTENT BLOCK: Text content and button
          LEARNING: Flexbox column layout for vertical stacking
          
          CSS CLASSES:
          - flex: Enables flexbox
          - flex-col: Column direction (stacks children vertically)
          - max-w-[320px]: Mobile max-width (393px viewport - 30px padding * 2 = ~320px)
          - lg:max-w-xl: Desktop max-width (576px - Tailwind's xl size)
          - items-start: Aligns children to start (left-aligned)
          - text-left: Text alignment (left)
          
          SPACING STRATEGY:
          - Individual margins (mt-2, mt-[30px]) instead of gap
          - Allows precise control: tight spacing between text, larger gap before button
          - Matches Figma design exactly
        */}
        <div className="flex max-w-[320px] flex-col items-start text-left lg:max-w-xl">
          {/**
           * NAME ELEMENT: "Stefan Heißenberg"
           * LEARNING: Animated gradient text effect (same as KeyCreatorIdentifiersSection)
           *
           * GRADIENT TECHNIQUE:
           * - Uses the same blue gradient as KeyCreatorIdentifiersSection numbers
           * - bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400: Blue-cyan gradient
           * - bg-clip-text: Clips gradient to text shape
           * - text-transparent: Makes text invisible so gradient shows through
           * - animate-gradient: Applies flowing animation (6s infinite loop)
           * - backgroundSize: 300% allows smooth animation movement
           *
           * TYPOGRAPHY CLASSES:
           * - text-[20px]: Mobile font size (20px) - Tailwind arbitrary value
           * - lg:text-[27px]: Desktop font size (27px) - Responsive variant
           * - font-normal: Font weight 400 (Regular)
           * - leading-[160%]: Line height 160% (1.6em)
           * - tracking-[0.2em]: Letter spacing 0.2em
           *
           * ACCESSIBILITY:
           * - aria-hidden: Decorative text (name is repeated in h1, so this is redundant)
           * - <p> tag: Paragraph element (semantic, but could be <span> since it's inline)
           */}
          <p
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-left text-[20px] font-normal leading-[160%] tracking-[0.2em] text-transparent animate-gradient lg:text-[27px]"
            style={{ backgroundSize: "300%" }}
            aria-hidden
          >
            Stefan Heißenberg
          </p>

          {/**
           * HEADLINE ELEMENT: "UX Strategy"
           * LEARNING: Semantic HTML heading hierarchy and inline-block behavior
           *
           * HTML SEMANTICS:
           * - <h1>: Primary heading (only one per page for SEO)
           * - Most important heading on the page
           *
           * CSS CLASSES:
           * - mt-2: Margin-top 8px (0.5rem * 16px = 8px) - tight spacing from name
           * - inline-block: Allows margin but keeps element inline (doesn't break to new line)
           * - text-[48px]: Mobile font size
           * - lg:text-[66px]: Desktop font size (very large, hero headline)
           * - font-extralight: Font weight 200 (ExtraLight/Thin)
           * - leading-none: Line height 1 (tight, no extra space)
           * - text-white: White text color
           *
           * WHY inline-block?
           * - Allows margin-top (block behavior)
           * - Doesn't create full-width block (inline behavior)
           * - Text wraps naturally if needed
           */}
          <h1 className="mt-2 inline-block text-left text-[48px] font-extralight leading-none text-white lg:text-[66px]">
            UX Strategy
          </h1>

          {/**
           * TAGLINE PARAGRAPH: Descriptive text
           * LEARNING: Inline styles for CSS properties not available in Tailwind
           *
           * CSS CLASSES:
           * - mt-2: Margin-top 8px (tight spacing from headline)
           * - inline-block: Allows margin, keeps inline behavior
           * - max-w-full: Mobile - full width (no constraint)
           * - lg:max-w-xl: Desktop - max-width 576px (prevents text from being too wide)
           * - text-[20px]: Mobile font size
           * - lg:text-[27px]: Desktop font size
           * - leading-[160%]: Line height 160% (comfortable reading)
           * - tracking-[0.2em]: Letter spacing 0.2em (matches design)
           * - text-white: White text color
           *
           * INLINE STYLES:
           * - style={{ textShadow: "..." }}: CSS text-shadow
           * - Why inline? Tailwind doesn't have text-shadow utilities
           * - Inline styles have higher specificity than classes
           * - Acceptable for one-off design values
           *
           * MAX-WIDTH STRATEGY:
           * - Prevents text from being too wide (hard to read)
           * - Optimal reading width: ~50-75 characters per line
           * - max-w-xl = ~576px = ~60-70 characters (perfect)
           */}
          <p
            className="mt-2 inline-block max-w-full text-left text-[20px] leading-[160%] tracking-[0.2em] text-white lg:max-w-xl lg:text-[27px]"
            style={{ textShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)" }}
          >
            that merges UX- and business metrics to drive growth from startup to enterprise level.
          </p>

          {/**
           * BUTTON CONTAINER: Wraps the CTA button
           * LEARNING: Component composition and prop passing
           *
           * CSS CLASSES:
           * - mt-[30px]: Margin-top 30px (larger gap, intentional separation from tagline)
           * - text-left: Ensures button aligns left (not centered)
           *
           * COMPONENT USAGE:
           * - <Button>: Custom component from @/components/ui/Button
           * - variant="primary": Uses primary button style (gradient background)
           * - href={ctaHref}: Passes prop value (defaults to mailto link)
           * - className: Merges with component's internal classes
           *   * text-[18px]: Mobile font size
           *   * lg:text-[21px]: Desktop font size
           *   * tracking-[0.2em]: Letter spacing
           *
           * WHY WRAP IN DIV?
           * - Provides spacing control (mt-[30px])
           * - Allows text alignment control
           * - Keeps button component clean (doesn't need spacing logic)
           */}
          <div className="mt-[30px] text-left">
            <Button variant="primary" href={ctaHref} className="text-[18px] tracking-[0.2em] lg:text-[21px]">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
