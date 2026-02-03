/**
 * COMPONENT: WantToSeeMoreSection
 * PURPOSE: Call-to-action section encouraging visitors to reach out for more information
 *
 * KEY CONCEPTS:
 * - Centered content layout matching design-portfolio-sh page style
 * - Uses harmonized typography from design-portfolio-sh (not Figma styles)
 * - Primary CTA button (not Figma button specification)
 * - Responsive: centered on desktop, left-aligned on mobile
 *
 * CONTENT FROM FIGMA:
 * - Title: "Want to see more?"
 * - Paragraph 1: "With 400+ projects delivered across pharma, logistics, retail, fintech, and enterprise software, I've seen what works at scale—and what doesn't."
 * - Paragraph 2: "Curious about specific industries, use cases, or challenges similar to yours? I'm happy to walk you through relevant experience and share lessons learned."
 * - CTA: "Get in touch" (using primary CTA button component)
 */

import { Button } from "@/components/ui/Button";

type WantToSeeMoreSectionProps = {
  ctaHref?: string;
};

export function WantToSeeMoreSection({ ctaHref = "mailto:hallo@stefanheissenberg.de" }: WantToSeeMoreSectionProps) {
  return (
    <section className="bg-[var(--background)] px-6 py-16 pb-[150px] lg:px-12 lg:py-20 lg:pb-[150px]" aria-label="Want to see more">
      <div className="mx-auto max-w-4xl">
        {/* LEARNING: Heading uses harmonized typography from design-portfolio-sh */}
        {/* Matches section heading style: Outfit font, extra light (200), centered, responsive sizing */}
        <h2
          className="mb-8 text-center text-2xl text-white sm:text-3xl lg:text-4xl"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 200, // extra light
          }}
        >
          Want to see more?
        </h2>

        {/* LEARNING: Body text uses harmonized typography matching CaseStudyTeaser body text */}
        {/* Left-aligned (block alignment), single paragraph combining both original paragraphs */}
        {/* Responsive sizing, proper line-height, and foreground color with opacity */}
        <div className="mb-10 text-left">
          <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg">
            With 400+ projects delivered across pharma, logistics, retail, fintech, and enterprise software, I've seen
            what works at scale—and what doesn't. Curious about specific industries, use cases, or challenges similar to
            yours? I'm happy to walk you through relevant experience and share lessons learned.
          </p>
        </div>

        {/* LEARNING: CTA Button - Uses primary CTA button component from design-portfolio-sh */}
        {/* Matches primary button styling: animated gradient background, Kode Mono font, scale hover effect */}
        {/* Centered on all screen sizes */}
        <div className="flex justify-center">
          <Button variant="primary" href={ctaHref} className="text-[18px] tracking-[0.2em] lg:text-[21px]">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
