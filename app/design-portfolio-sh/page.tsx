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
 * ARCHITECTURE NOTE: Robots policy (2026-05-28)
 *
 * Portfolio hub and all case study pages are index: true — linked from /cv and
 * listed in sitemap.xml. Each case study also ships Article JSON-LD.
 */
export const metadata: Metadata = {
  title: "UX Design Portfolio | Stefan Heißenberg | UX Strategy & Case Studies",
  description: "UX and UI design portfolio. Selected UX Strategy projects and design case studies from Stefan Heißenberg, UX Design Director.",
  alternates: {
    canonical: `${baseUrl}/design-portfolio-sh`,
  },
  robots: {
    index: true,
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

const portfolioCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "UX Design Portfolio — Stefan Heißenberg",
  url: `${baseUrl}/design-portfolio-sh`,
  description:
    "Selected UX strategy and design case studies: myDHLi (DHL), Saloodo!, and OBI Next.",
  hasPart: [
    {
      "@type": "Article",
      "@id": `${baseUrl}/design-portfolio-sh/dhl`,
      name: "DHL UX Case Study — myDHLi",
    },
    {
      "@type": "Article",
      "@id": `${baseUrl}/design-portfolio-sh/saloodo`,
      name: "Saloodo! UX Case Study",
    },
    {
      "@type": "Article",
      "@id": `${baseUrl}/design-portfolio-sh/obinext`,
      name: "OBI Next UX Case Study",
    },
  ],
};

const portraitVars = {
  "--chat-portrait-desktop": "url('/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png')",
  "--chat-portrait-mobile": "url('/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg')",
  "--chat-hero-min-height-desktop": "max(100dvh, 750px)",
} as CSSProperties;

export default function DesignPortfolioPage() {
  return (
    <main className="relative w-full bg-[var(--chat-page-bg)]" style={portraitVars}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioCollectionJsonLd) }}
      />
      {/* Chat Hero - AI-powered interactive hero with portrait background */}
      <Chat theme="stefan-portfolio" assistantLabel="Stefan's Assistant" />

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
