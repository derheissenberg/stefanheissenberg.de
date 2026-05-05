/**
 * COMPONENT: WantTheFullStoryCTASection
 * PURPOSE: CTA outro — "Want the full story?" section before footer
 *
 * KEY CONCEPTS:
 * - Mirrors the myDHLi case study "More on request" outro block exactly
 * - Section spacing matches the pattern: px-5 py-20 pb-24 lg:px-12 lg:py-[120px] lg:pb-[140px]
 * - gradient-text-safe: applies the site's cyan→blue animated gradient to the italic text
 * - Primary CTA: email contact link
 * - Secondary CTA: configurable next case link (defaults to OBI Next for homepage)
 * - Props allow reuse across case study pages with different next-case targets
 * - Optional backgroundSrc activates a behind-content parallax layer (opt-in; no effect by default).
 *   Hooks into the page-level parallax script via .parallax-layer / .parallax-slow utility classes
 *   defined in globals.css — no client component or useEffect required.
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface WantTheFullStoryCTASectionProps {
  /** Label for the secondary button (e.g., "Next case · OBI Next →") */
  nextCaseLabel?: string;
  /** Href for the secondary button (e.g., "/design-portfolio-sh/obinext") */
  nextCaseHref?: string;
  /** Optional background image src. When set, a parallax layer is rendered behind the CTA content. */
  backgroundSrc?: string;
  /** Alt text for the background image. Required for accessibility when backgroundSrc is provided. */
  backgroundAlt?: string;
  /** Background image opacity (0–1). Defaults to 1.0. Lower values fade the image into the section bg. */
  backgroundOpacity?: number;
  /**
   * Dark overlay opacity (0–1) applied above the image and below the content.
   * Useful when the image is busy and text readability needs a boost. Defaults to 0 (no overlay).
   */
  overlayOpacity?: number;
  /**
   * Parallax shift strength in px. Overrides the --parallax-shift CSS variable on the background layer.
   * Defaults to the .parallax-slow preset (25 px). Increase for more dramatic movement.
   */
  parallaxStrength?: number;
}

export function WantTheFullStoryCTASection({
  nextCaseLabel = "Next case · OBI Next →",
  nextCaseHref = "/design-portfolio-sh/obinext",
  backgroundSrc,
  backgroundAlt = "",
  backgroundOpacity = 1,
  overlayOpacity = 0,
  parallaxStrength,
}: WantTheFullStoryCTASectionProps) {
  // LEARNING: Derive a single flag so all conditional rendering stays readable.
  const hasBackground = Boolean(backgroundSrc);

  return (
    <section
      // LEARNING: relative + overflow-hidden are only added when a background layer is present.
      // They create the stacking context and clip the parallax image at the section boundary.
      className={`bg-[var(--background)] px-5 py-20 pb-24 lg:px-12 lg:py-[120px] lg:pb-[140px]${hasBackground ? " relative overflow-hidden" : ""}`}
      aria-label="Want the full story"
    >
      {/* LEARNING: Behind-content parallax layer — only rendered when backgroundSrc is provided.
          Sits at z-0 so all text and buttons (z-10) always paint on top.
          .parallax-layer + .parallax-slow hook into the page-level inline <script> that
          writes --parallax-y on every .parallax-layer element on scroll (desktop-only, respects
          prefers-reduced-motion). The --parallax-shift override sets a custom travel distance. */}
      {hasBackground && backgroundSrc && (
        <div
          className="parallax-layer parallax-slow absolute inset-0 z-0"
          // LEARNING: CSS custom properties are not part of React.CSSProperties, so we cast.
          // The page scroll script reads this value via getComputedStyle to know how far to shift.
          style={
            parallaxStrength !== undefined
              ? ({ "--parallax-shift": `${parallaxStrength}px` } as React.CSSProperties)
              : undefined
          }
        >
          <Image
            src={backgroundSrc}
            alt={backgroundAlt}
            fill
            className="object-cover"
            // LEARNING: opacity on the Image element (not the wrapper) keeps the parallax
            // transform unaffected; the wrapper only drives translation.
            style={{ opacity: backgroundOpacity }}
            sizes="100vw"
          />
        </div>
      )}

      {/* LEARNING: Optional scrim for legibility — sits above image (z-[1]) but below content (z-10).
          Only rendered when overlayOpacity > 0 to avoid a pointless transparent div in the DOM. */}
      {hasBackground && overlayOpacity > 0 && (
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
          aria-hidden="true"
        />
      )}

      {/* LEARNING: relative + z-10 guarantee this content block floats above the parallax
          image and the optional overlay regardless of scroll position. */}
      <div className={`mx-auto max-w-[820px] text-center${hasBackground ? " relative z-10" : ""}`}>
        {/* LEARNING: Kode Mono uppercase label matches the "GET IN TOUCH" eyebrow on DHL page */}
        <p
          className="mb-[22px] text-[13px] uppercase text-white/60 sm:text-[15px]"
          style={{
            fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
            fontWeight: 500,
            letterSpacing: "0.32em",
          }}
        >
          GET IN TOUCH
        </p>

        {/* LEARNING: Same headline treatment as DHL "Want the full story?" block */}
        <h2
          className="text-[38px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[56px]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          Want the{" "}
          {/*
           * LEARNING: .gradient-text-safe sets `display: inline` which loads after Tailwind
           * in globals.css, silently winning the cascade over the `inline-block` utility class.
           * Inline styles always beat class styles, so `display: "inline-block"` here is the
           * only reliable way to guarantee the element is a block-formatting context.
           * As inline-block, padding-right physically extends the background region, giving
           * the italic `?` glyph (which visually overhangs ~0.2em at large sizes) room to
           * be fully painted by background-clip: text.
           */}
          <em
            className="gradient-text-safe italic font-bold"
            style={{
              display: "inline-block",
              backgroundSize: "300%",
              paddingRight: "0.25em",
            }}
          >
            full story?
          </em>
        </h2>

        <p
          className="mx-auto mt-[22px] max-w-[56ch] text-[18px] leading-[1.6] text-white/[0.72]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
        >
          Happy to walk you through the strategy, decisions, and outcomes in detail.
        </p>

        {/* LEARNING: flex-col on mobile → flex-row on sm+ matches portfolio page CTA button layout */}
        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            variant="primary"
            href="mailto:hallo@stefanheissenberg.de"
            className="w-full justify-center sm:w-auto"
          >
            Get in touch
          </Button>
          <Button
            variant="outline"
            href={nextCaseHref}
            className="w-full justify-center sm:w-auto"
          >
            {nextCaseLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
