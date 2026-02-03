/**
 * PAGE: Design Portfolio Landing
 * ROUTE: /design-portfolio-sh
 * PURPOSE: Main portfolio page showcasing case studies
 *
 * NEXT.JS CONCEPTS:
 * - File-based routing: This file creates the /design-portfolio-sh route
 * - Server Component: Default in App Router (no "use client" needed)
 * - Metadata: Can be exported for SEO (title, description)
 *
 * STRUCTURE:
 * - Hero section with portfolio introduction (matches landing page layout)
 * - Case study teasers (DHL, Saloodo, OBI Next)
 * - Customers section with placeholders for DHL and OBI Next
 */

import type { Metadata } from "next";
import { PortfolioHeroSection } from "@/components/sections/PortfolioHeroSection";
import { DHLCaseStudyTeaser } from "@/components/portfolio/DHLCaseStudyTeaser";
import { SaloodoCaseStudyTeaser } from "@/components/portfolio/SaloodoCaseStudyTeaser";
import { OBINextCaseStudyTeaser } from "@/components/portfolio/OBINextCaseStudyTeaser";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { WantToSeeMoreSection } from "@/components/sections/WantToSeeMoreSection";

export const metadata: Metadata = {
  title: "Design Portfolio | Stefan Heißenberg",
  description: "Selected UX Strategy projects and case studies from Stefan Heißenberg",
  robots: {
    index: false, // LEARNING: Exclude this page from search engine indexing
    follow: true, // LEARNING: Allow search engines to follow links (for link equity)
  },
};

export default function DesignPortfolioPage() {
  return (
    <main>
      {/* Portfolio Hero Section - Identical layout to landing page HeroSection */}
      {/* LEARNING: Uses PortfolioHeroSection component with same structure as HeroSection.tsx */}
      <PortfolioHeroSection />

      {/* Case Study Teasers - Matching Figma designs */}
      {/* LEARNING: Each case study has its own teaser section with image and text */}
      {/* Responsive: Side-by-side on desktop, stacked on mobile */}
      <DHLCaseStudyTeaser />
      <SaloodoCaseStudyTeaser />
      <OBINextCaseStudyTeaser />

      {/* Customers Section - Same as landing page */}
      {/* LEARNING: Uses the same CustomersSection component from landing page */}
      <CustomersSection />

      {/* Want to See More Section - Call-to-action encouraging visitors to reach out */}
      {/* LEARNING: New section with content from Figma, using harmonized typography and primary CTA button */}
      <WantToSeeMoreSection />
    </main>
  );
}
