/**
 * COMPONENT: SaloodoCaseStudyHero
 * PURPOSE: Hero section for Saloodo case study page with logo, title, intro text, and statistics
 *
 * KEY CONCEPTS:
 * - Centered layout with max-width container matching DHL case study
 * - Harmonized typography using Outfit font family
 * - Statistics grid using MetricCard component (responsive: 3-col desktop, 2-col tablet, 1-col mobile)
 *
 * TYPOGRAPHY:
 * - Main title: Outfit, extra light (200), responsive sizing
 * - Subtitle: Outfit, regular weight
 * - Intro text: Outfit, regular, line-height 140%
 * - Statistics: MetricCard component with animated gradients
 */

import Image from "next/image";
import { MetricCard } from "@/components/ui/MetricCard";

// LEARNING: Saloodo KPIs from the Figma design
const statistics = [
  { value: "200%", label: "Shipper Growth", color: "blue" as const },
  { value: "50+", label: "Countries by 2020", color: "yellow" as const },
  { value: "108%", label: "Annual Growth", color: "blue" as const },
];

export function SaloodoCaseStudyHero() {
  return (
    <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20" aria-label="Saloodo Case Study Hero">
      <div className="mx-auto max-w-6xl">
        {/* Saloodo Logo */}
        {/* LEARNING: Logo centered above the title, similar to DHL case study */}
        <div className="mb-6 flex justify-center">
          <div className="relative h-[52px] w-[144px]">
            <Image
              src="/images/saloodo/saloodo-logo-white.svg"
              alt="Saloodo Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Title */}
        {/* LEARNING: Uses h1 with extra light (200) weight - matches DHL case study pattern */}
        <h1
          className="mx-auto mb-2 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 200,
            lineHeight: "150%",
          }}
        >
          From Zero to One
        </h1>
        
        {/* Subtitle */}
        <h2
          className="mx-auto mb-8 max-w-[820px] text-center text-xl text-white sm:text-2xl lg:text-3xl"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 400,
            lineHeight: "160%",
          }}
        >
          Building A Digital Marketplace
        </h2>

        {/* Intro Text */}
        <p
          className="mx-auto mb-12 max-w-[820px] text-center text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          I joined Saloodo! in May 2018 as the first in-house designer. Until then, DHL had relied on agencies and freelancers to get the startup off the ground. We'd proven the concept, but the platform needed a complete relaunch to scale.
        </p>

        {/* Statistics Grid */}
        {/* LEARNING: Responsive grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        {/* LEARNING: Synchronized animation - all cards animate simultaneously (no delay) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
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
