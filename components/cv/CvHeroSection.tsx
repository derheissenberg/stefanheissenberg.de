/**
 * COMPONENT: CvHeroSection
 * PURPOSE: Full-height hero section for the CV page with portrait, headline, lede, CTAs.
 *
 * KEY CONCEPTS:
 * - Server Component — no client JS needed
 * - Portrait image: desktop (lg+) uses contain/right-bottom PNG; mobile uses cover/center JPG
 * - Dual-image pattern mirrors HeroSection.tsx: hidden lg:block / lg:hidden wrappers
 * - Left-to-right gradient overlay (hero-fade) ensures text legibility over portrait
 * - h1 = Stefan (Outfit 200) + Heißenberg (gradient italic 800)
 * - Role kicker uses .type-kicker-wide + .gradient-text-safe
 * - min-height 760px desktop, auto on mobile to prevent overflow
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CV_HERO_PORTRAIT_ALT } from "@/lib/seo/image-alt";

export function CvHeroSection() {
  return (
    <section
      id="cv-top"
      className="relative overflow-hidden"
      style={{ minHeight: "760px", background: "var(--background)" }}
      aria-label="Introduction"
    >
      {/* Portrait background — desktop: right-aligned contain, mobile: cover */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1600px]">
        {/* Desktop portrait — lg and above */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png"
              alt={CV_HERO_PORTRAIT_ALT}
              fill
              className="object-contain object-right-bottom"
              priority
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
          </div>
        </div>
        {/* Mobile portrait — below lg */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg"
              alt={CV_HERO_PORTRAIT_ALT}
              fill
              className="object-cover object-[center_20%]"
              priority
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
          </div>
        </div>
      </div>

      {/* Left-to-right gradient fade — ensures text legibility */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.82) 28%, rgba(8,8,8,0.46) 48%, rgba(8,8,8,0) 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-[1600px] items-center px-10 py-20 max-[1024px]:min-h-[760px] max-[720px]:px-5 max-[720px]:py-16 lg:h-[760px] lg:py-0 lg:pl-16"
      >
        <div className="w-full max-w-[720px]">
          {/* H1 — two-line: Stefan (light) + Heißenberg (gradient bold) */}
          <h1 className="overflow-visible leading-[0.92] tracking-[-0.045em]">
            <span className="font-outfit block text-[48px] font-[200] text-white sm:text-[64px] md:text-[84px] lg:text-[128px]">
              Stefan
            </span>
            <span
              className="font-outfit gradient-text-safe block w-fit max-w-full text-[48px] font-[800] italic max-[400px]:text-[42px] sm:text-[64px] md:text-[84px] lg:text-[128px]"
              style={{
                lineHeight: 0.98,
                paddingRight: "0.14em",
                paddingTop: "0.04em",
                paddingBottom: "0.12em",
                backgroundSize: "300%",
              }}
            >
              Heißenberg
            </span>
          </h1>

          {/* Role kicker */}
          <p className="mt-4 text-[13px]">
            <span
              className="type-kicker-wide gradient-text-safe"
              style={{
                backgroundSize: "300%",
                display: "inline",
                fontSize: "13px",
                letterSpacing: "0.32em",
              }}
            >
              HEAD OF DESIGN
            </span>
          </p>

          {/* Lede */}
          <p
            className="mt-6 max-w-[540px] text-[18px] leading-[1.55] text-white/82"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
          >
            Senior product &amp; design leader with fifteen years across
            agency, consulting, startup, and enterprise. Currently Head of
            Design at DHL, shaping myDHLi — our main enterprise B2B portal.
          </p>

          {/* CTA row */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="primary" href="mailto:hallo@stefanheissenberg.de">
              Get in touch
            </Button>
            <Button variant="outline" href="/design-portfolio-sh">
              View portfolio
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
