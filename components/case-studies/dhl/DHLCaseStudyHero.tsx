/**
 * COMPONENT: DHLCaseStudyHero
 * PURPOSE: Hero section for DHL case study page with title, intro, hero image, and statistics
 *
 * KEY CONCEPTS:
 * - Centered layout with max-width container
 * - Harmonized typography matching design-portfolio-sh page
 * - Statistics grid using MetricCard component (responsive: 2x3 desktop, 3x2 tablet, 1x6 mobile)
 * - Hero image with responsive sizing
 *
 * TYPOGRAPHY HARMONIZATION:
 * - Section label: Small text, Outfit font
 * - Main title: h2 style (Outfit, extra light 200, text-2xl sm:text-3xl, line-height 150%)
 * - Intro text: Body text style (Outfit, regular, text-base lg:text-lg, line-height 140%)
 * - Statistics: MetricCard component (Outfit Black 900 font for numbers)
 */

import Image from "next/image";
import { MetricCard } from "@/components/ui/MetricCard";

const statistics = [
  { value: "22×", label: "Customer Growth", color: "blue" as const },
  { value: "30m+", label: "Monthly interactions", color: "yellow" as const },
  { value: "€1.2B+", label: "Digital Quote Revenue", color: "blue" as const },
  { value: "€135M", label: "Cost Savings", color: "yellow" as const },
  { value: "€336B+", label: "Yearly Business Volume", color: "blue" as const },
  { value: "90%+", label: "Faster Onboarding & Quote Processing", color: "yellow" as const },
];

export function DHLCaseStudyHero() {
  return (
    <section className="bg-[var(--background)] px-6 py-16 lg:px-12 lg:py-20" aria-label="DHL Case Study Hero">
      <div className="mx-auto max-w-6xl">
        {/* Section Label */}
        <p className="mb-4 text-center text-sm uppercase tracking-wider text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
          DHL Case Study
        </p>

        {/* Main Title */}
        {/* LEARNING: Uses h2 font style - Outfit, extra light (200), responsive sizing, line-height 150% */}
        <h1
          className="mx-auto mb-4 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 200, // extra light
            lineHeight: "150%",
          }}
        >
          Building DHL's Global B2B Portal
        </h1>
        <h2
          className="mx-auto mb-8 max-w-[820px] text-center text-xl text-white sm:text-2xl lg:text-3xl"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 200, // extra light
            lineHeight: "150%",
          }}
        >
          From Initial Concept to +22,000 Enterprise Customers
        </h2>

        {/* Hero Video */}
        {/* LEARNING: HTML5 video element with autoplay, loop, muted (required for autoplay), and controls */}
        {/* LEARNING: Responsive video container with aspect-video ratio matching the image layout */}
        {/* LEARNING: poster attribute provides a fallback image while video loads */}
        <div className="mb-16 w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
              poster="/images/portfolio/dhl-casestudy-hero.jpg"
              aria-label="myDHLi – Simply Connected. Digital logistics boosting your business"
            >
              <source src="/videos/myDHLi – Simply Connected. Digital logistics boosting your business..mp4" type="video/mp4" />
              {/* LEARNING: Fallback text for browsers that don't support video */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Statistics Grid */}
        {/* LEARNING: Responsive grid - 2 columns desktop (2x3), 3 columns tablet (3x2), 1 column mobile (1x6) */}
        {/* Matches KeyCreatorIdentifiersSection pattern but with different responsive breakpoints */}
        {/* LEARNING: Synchronized animation - all cards animate simultaneously (no delay) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
          {statistics.map((stat, index) => (
            <MetricCard 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              color={stat.color}
              delay={0} // LEARNING: No delay - all cards animate together
            />
          ))}
        </div>
      </div>
    </section>
  );
}
