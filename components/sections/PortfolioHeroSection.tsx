/**
 * COMPONENT: PortfolioHeroSection
 * PURPOSE: Hero section for Design Portfolio page - identical layout to landing page HeroSection
 *
 * KEY CONCEPTS:
 * - Same layout structure as HeroSection.tsx (landing page)
 * - Only text content differs: "Design Portfolio" instead of "UX Strategy"
 * - Uses placeholder images for portrait (to be replaced with actual portfolio hero image)
 * - Same responsive behavior, padding, and spacing as landing page hero
 *
 * CONTENT DIFFERENCES FROM LANDING PAGE:
 * - Name: "Stefan Heißenberg" (same, with animated gradient)
 * - Title: "Design Portfolio" (instead of "UX Strategy")
 * - Tagline: "Since we have not yet met in person, I've compiled an overview of relevant projects for you. I am happy to answer your questions."
 * - Button: "Get in touch" (same)
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";

type PortfolioHeroSectionProps = {
  ctaHref?: string;
};

export function PortfolioHeroSection({ ctaHref = "mailto:hallo@stefanheissenberg.de" }: PortfolioHeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[800px] overflow-hidden bg-[var(--background)] lg:h-[800px]"
      aria-label="Design Portfolio Introduction"
    >
      {/* 
        BACKGROUND IMAGE WRAPPER: Constrains background images to 1600px max-width
        LEARNING: Same structure as landing page HeroSection
        - Constrains background images to same width as content (1600px)
        - Keeps images aligned with content on large screens
      */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1600px]">
        {/* Desktop/Tablet Portrait - Using placeholder for now */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="relative h-full w-full">
            {/* LEARNING: Placeholder image - replace with actual portfolio hero image */}
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png"
              alt=""
              fill
              className="object-contain object-right"
              priority
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1600px"
              aria-hidden
            />
          </div>
        </div>

        {/* Mobile Portrait - Using placeholder for now */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="relative h-full w-full">
            {/* LEARNING: Placeholder image - replace with actual portfolio hero mobile image */}
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg"
              alt=""
              fill
              className="object-cover object-[center_20%]"
              priority
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1600px"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* 
        CONTENT OVERLAY CONTAINER: Same structure as landing page HeroSection
        LEARNING: Identical padding, spacing, and layout approach
      */}
      {/* LEARNING: Same padding as landing page HeroSection - lg:pl-[100px] for desktop */}
      <div className="relative z-10 mx-auto flex h-full min-h-[800px] w-full max-w-[1600px] items-center px-[30px] lg:min-h-0 lg:pl-[100px] lg:pr-12">
        {/* CONTENT BLOCK: Text content and button - same structure as landing page */}
        <div className="flex max-w-[320px] flex-col items-start text-left lg:max-w-xl">
          {/* NAME ELEMENT: "Stefan Heißenberg" - Same as landing page */}
          <p
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-left text-[20px] font-normal leading-[160%] tracking-[0.2em] text-transparent animate-gradient lg:text-[27px]"
            style={{ backgroundSize: "300%" }}
            aria-hidden
          >
            Stefan Heißenberg
          </p>

          {/* HEADLINE ELEMENT: "Design Portfolio" - Different from landing page */}
          <h1 className="mt-2 inline-block text-left text-[48px] font-extralight leading-none text-white lg:text-[66px]">
            Design Portfolio
          </h1>

          {/* TAGLINE PARAGRAPH: Portfolio-specific text */}
          {/* LEARNING: Uses h2 font style - Outfit font, extra light (200), responsive sizing matching section headings */}
          {/* LEARNING: Harmonized line-height of 150% matching all h2 headlines */}
          <p
            className="mt-2 inline-block max-w-full text-left text-2xl text-white sm:text-3xl lg:max-w-xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 200, // extra light
              lineHeight: "150%", // LEARNING: Harmonized line-height of 150% for consistency
              textShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
            }}
          >
            I've been designing digital products for fifteen years — agencies, consulting, startups, enterprise. These three case studies cover the chapters that shaped me most. Happy to answer questions on anything in between.
          </p>

          {/* BUTTON CONTAINER: Same CTA button as landing page */}
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
