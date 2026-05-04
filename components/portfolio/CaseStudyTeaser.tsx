/**
 * COMPONENT: CaseStudyTeaser
 * PURPOSE: Reusable case study teaser section component
 *
 * KEY CONCEPTS:
 * - Responsive layout: Two columns (image left, text right) on desktop, stacked on mobile
 * - Logo, headline, body text, and CTA button
 * - Matches Figma design specifications for all three case studies
 *
 * LAYOUT STRUCTURE:
 * - Desktop: Image left (50%), Text right (50%)
 * - Mobile: Image top (full width), Text bottom (full width)
 */

import Image from "next/image";
import { CaseStudyLeadText } from "@/components/case-studies/CaseStudyLeadText";
import { Button } from "@/components/ui/Button";

type CaseStudyTeaserProps = {
  slug: string;
  logo: React.ReactNode;
  headline: string;
  headlineHighlight?: string; // Optional highlighted part of headline (e.g., "biggest B2B portal")
  bodyText: string[];
  imageSrc: string;
  imageAlt: string;
  imageSrcDesktop?: string; // Optional desktop image (for responsive images like Saloodo)
  imageSrcMobile?: string; // Optional mobile image (for responsive images like Saloodo)
  imagePosition?: "left" | "right"; // Image position on desktop
  useMonospaceFont?: boolean; // Use monospace font for entire text section (OBI Next)
};

export function CaseStudyTeaser({
  slug,
  logo,
  headline,
  headlineHighlight,
  bodyText,
  imageSrc,
  imageAlt = "Case study image",
  imageSrcDesktop,
  imageSrcMobile,
  imagePosition = "left",
  useMonospaceFont = false,
}: CaseStudyTeaserProps) {
  // LEARNING: Split headline if highlight is provided
  // Example: "How an idea became the" + "biggest B2B portal"
  // LEARNING: Ensure the split works correctly - headline must contain the highlight text
  // LEARNING: Add safety check to prevent runtime errors
  const headlineParts = headlineHighlight && headline && headline.includes(headlineHighlight)
    ? headline.split(headlineHighlight)
    : headline ? [headline] : [""];

  return (
    <section className="bg-[var(--background)] py-16 lg:py-20" style={{ overflow: "visible" }}>
      <div className="mx-auto max-w-[1600px] px-8" style={{ overflow: "visible" }}>
        {/* Responsive grid: Stacked mobile, side-by-side desktop */}
        {/* LEARNING: flex-col on mobile (image first, then text) */}
        {/* LEARNING: lg:flex-row creates horizontal layout on desktop */}
        {/* LEARNING: overflow: visible on all containers to prevent text clipping */}
        <div
          className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
            imagePosition === "right" ? "lg:flex-row-reverse" : ""
          }`}
          style={{ overflow: "visible" }}
        >
          {/* IMAGE SECTION */}
          {/* LEARNING: Full width on mobile, 50% on desktop */}
          {/* LEARNING: Supports responsive images - desktop version for large screens, mobile version for smaller breakpoints */}
          {/* LEARNING: Add safety checks to prevent runtime errors with missing image sources */}
          {imageSrc && (
            <div className="relative h-[400px] w-full lg:h-[600px] lg:w-1/2">
              {/* LEARNING: Conditional rendering for responsive images (Saloodo) */}
              {imageSrcDesktop && imageSrcMobile ? (
                <>
                  {/* Desktop image - hidden on mobile, visible on large screens */}
                  <Image
                    src={imageSrcDesktop}
                    alt={imageAlt || "Case study image"}
                    fill
                    className="hidden object-contain lg:block"
                    sizes="50vw"
                  />
                  {/* Mobile image - visible on mobile, hidden on large screens */}
                  <Image
                    src={imageSrcMobile}
                    alt={imageAlt || "Case study image"}
                    fill
                    className="block object-contain lg:hidden"
                    sizes="100vw"
                  />
                </>
              ) : (
                /* Single image for all breakpoints (DHL, OBI Next) */
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Case study image"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          )}

          {/* TEXT CONTENT SECTION */}
          {/* LEARNING: Full width on mobile, 50% on desktop */}
          {/* LEARNING: useMonospaceFont applies monospace to entire text section (OBI Next) */}
          {/* LEARNING: Harmonized typography matching landing page styles */}
          {/* LEARNING: overflow: visible ensures no text clipping */}
          <div
            className={`flex w-full flex-col justify-center lg:w-1/2 lg:px-12 ${
              useMonospaceFont ? "font-mono" : ""
            }`}
            style={{
              ...(!useMonospaceFont
                ? { fontFamily: "var(--font-outfit), system-ui, sans-serif" }
                : {}),
              overflow: "visible", // LEARNING: Ensure parent doesn't clip text
              minHeight: "unset", // LEARNING: No minimum height constraint
              height: "auto", // LEARNING: Allow container to grow with content
            }}
          >
            {/* Logo */}
            {/* LEARNING: Logo spacing matches landing page section spacing */}
            <div className="mb-8">{logo}</div>

            {/* Headline */}
            {/* LEARNING: Uses h2 format from landing page section headings (e.g., Key Creator Identifiers) */}
            {/* Matches .section-heading style: Outfit font, extra light (200), responsive sizing */}
            {/* Left-aligned for teasers (section headings are centered, but teasers need left alignment) */}
            {/* LEARNING: Removed .section-heading class to avoid conflicts, applying all styles directly */}
            {/* LEARNING: Ensure full text visibility - text directly in h2, no wrapper spans that could clip */}
            <h2 
              className="mb-8 text-2xl text-left text-white sm:text-3xl" 
              style={{ 
                fontFamily: "var(--font-outfit), system-ui, sans-serif", 
                fontWeight: 200, // extra light
                width: "100%", // LEARNING: Ensure full width for proper wrapping
                maxWidth: "none", // LEARNING: Remove any max-width constraints
                overflow: "visible", // LEARNING: Ensure text is not clipped
                wordWrap: "break-word", // LEARNING: Allow long words to wrap
                overflowWrap: "break-word", // LEARNING: Additional word wrapping support
                lineHeight: "150%", // LEARNING: Harmonized line-height of 150% for all h2 headlines
                whiteSpace: "normal", // LEARNING: Allow text to wrap naturally
                display: "block", // LEARNING: Block display for proper wrapping
                minHeight: "unset", // LEARNING: No minimum height constraint
                height: "auto", // LEARNING: Auto height to accommodate all text
                textOverflow: "clip", // LEARNING: Don't use ellipsis, show all text
              }}
            >
              {/* LEARNING: Render text directly without wrapper spans to avoid clipping */}
              {/* LEARNING: If headlineHighlight exists and split was successful, render both parts */}
              {/* LEARNING: Otherwise, render the full headline to ensure nothing is lost */}
              {/* LEARNING: Add safety checks to prevent runtime errors */}
              {headlineHighlight && headlineParts && headlineParts.length > 1 && headlineParts[0] !== undefined ? (
                <>
                  {headlineParts[0] || ""}
                  {headlineHighlight}
                </>
              ) : (
                headline || ""
              )}
            </h2>

            {/* Body Text */}
            {/* LEARNING: Harmonized with landing page body text styles */}
            {/* Uses similar sizing, line-height, and color as DeepPashionSection */}
            {/* Left-aligned (block alignment) for consistent reading */}
            <div className="mb-8 space-y-4 text-left">
              {bodyText.map((paragraph, index) => (
                <CaseStudyLeadText key={index} className="max-w-none text-[var(--foreground)]/90">
                  {paragraph}
                </CaseStudyLeadText>
              ))}
            </div>

            {/* CTA Button */}
            {/* LEARNING: Secondary-gradient button variant with animated gradient border and text */}
            {/* Matches Figma design: gradient outline and gradient text */}
            <Button variant="secondary-gradient" href={`/design-portfolio-sh/${slug}`}>
              Read full story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
