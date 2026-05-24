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
 * - Awards trust bar (compact, no heading) before footer
 */

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Chat } from "@/components/chat/Chat";
import { DHLCaseStudyTeaser } from "@/components/portfolio/DHLCaseStudyTeaser";
import { SaloodoCaseStudyTeaser } from "@/components/portfolio/SaloodoCaseStudyTeaser";
import { OBINextCaseStudyTeaser } from "@/components/portfolio/OBINextCaseStudyTeaser";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { WantToSeeMoreSection } from "@/components/sections/WantToSeeMoreSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { Footer } from "@/components/layout/Footer";

const baseUrl = "https://www.stefanheissenberg.de";
const ogImage = "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png";

/**
 * ARCHITECTURE NOTE: Robots policy change (2026-05-23)
 *
 * Changed from { index: false, follow: true } to { index: true, follow: true }
 * because the portfolio page now contains unique, valuable content (AI-powered
 * interactive hero) that should be discoverable via search engines.
 *
 * Case studies (dhl, saloodo, obinext) remain noindex as they duplicate content
 * from the portfolio landing. This page is the canonical entry point.
 */
export const metadata: Metadata = {
  title: "UX Design Portfolio | Stefan Heißenberg | UX Strategy & Case Studies",
  description: "UX and UI design portfolio. Selected UX Strategy projects and design case studies from Stefan Heißenberg, UX Design Director.",
  alternates: {
    canonical: `${baseUrl}/design-portfolio-sh`,
  },
  robots: {
    index: true, // INDEX: Portfolio page with AI chat hero is canonical entry point
    follow: true,
  },
  openGraph: {
    url: `${baseUrl}/design-portfolio-sh`,
    title: "UX Design Portfolio | Stefan Heißenberg | UX Strategy & Case Studies",
    description: "UX and UI design portfolio. Selected UX Strategy projects and design case studies from Stefan Heißenberg, UX Design Director.",
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Stefan Heißenberg - Head of Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UX Design Portfolio | Stefan Heißenberg | UX Strategy & Case Studies",
    description: "UX and UI design portfolio. UX Strategy projects from Stefan Heißenberg, UX Design Director.",
  },
};

const portraitVars = {
  "--chat-portrait-desktop": "url('/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png')",
  "--chat-portrait-mobile": "url('/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg')",
} as CSSProperties;

export default function DesignPortfolioPage() {
  return (
    <main className="relative w-full bg-[var(--chat-page-bg)]" style={portraitVars}>
      {/* Chat Hero - AI-powered interactive hero with portrait background */}
      <Chat theme="stefan-portfolio" />

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
      <TrustBar />
      <Footer />
    </main>
  );
}
