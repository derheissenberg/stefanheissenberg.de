/**
 * PAGE: /cv
 * PURPOSE: Public CV page — all sections composed from CV section components.
 *
 * KEY CONCEPTS:
 * - Server Component by default — no "use client" at page level
 * - Metadata + JSON-LD Person/ProfilePage for SEO (Phase 06)
 * - CvTopNav is rendered at the top of the page (not in site layout, scoped to /cv)
 * - Sections compose in order matching cv-web.html
 * - WantTheFullStoryCTASection reused with CV-specific props for the final CTA
 * - Footer reused from site layout (no new component)
 */

import type { Metadata } from "next";
import { CvTopNav } from "@/components/layout/CvTopNav";
import { CvHeroSection } from "@/components/cv/CvHeroSection";
import { CvMetricStrip } from "@/components/cv/CvMetricStrip";
import { CvAboutSection } from "@/components/cv/CvAboutSection";
import { CvExperienceSection } from "@/components/cv/CvExperienceSection";
import { CvCaseStudyGrid } from "@/components/cv/CvCaseStudyGrid";
import { CvClientWall } from "@/components/cv/CvClientWall";
import { CvCredentialsSection } from "@/components/cv/CvCredentialsSection";
import { CvSkillsSection } from "@/components/cv/CvSkillsSection";
import { WantTheFullStoryCTASection } from "@/components/sections/WantTheFullStoryCTASection";
import { Footer } from "@/components/layout/Footer";
import { CV_EXPERIENCE } from "@/lib/data/cv/cv-experience";
import { CV_SKILLS } from "@/lib/data/cv/cv-skills";
import { CV_CREDENTIALS } from "@/lib/data/cv/cv-credentials";
import { CV_LAST_MODIFIED_ISO, CV_PAGE_URL } from "@/lib/data/cv/cv-meta";
import {
  buildAlumniOf,
  buildBreadcrumbList,
  buildHasCredential,
  buildKnowsAbout,
  buildOccupations,
} from "@/lib/data/cv/cv-jsonld";

// ─── Metadata ─────────────────────────────────────────────────────────────────

const cvTitle = "CV — Stefan Heißenberg · Head of Design";
const cvDescription =
  "Head of Design at DHL Global Forwarding. Senior product & UX design leader with fifteen years across agency, consulting, startup, and enterprise.";
const ogImage = "https://www.stefanheissenberg.de/images/og-image-stefan-heissenberg.png";

export const metadata: Metadata = {
  title: cvTitle,
  description: cvDescription,
  alternates: {
    canonical: CV_PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    title: cvTitle,
    description: cvDescription,
    url: CV_PAGE_URL,
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    firstName: "Stefan",
    lastName: "Heißenberg",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Stefan Heißenberg — Head of Design CV, 15 years product & design leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cvTitle,
    description: cvDescription,
    images: [{ url: ogImage }],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

// LEARNING: ProfilePage schema signals to Google that this is a professional profile page
// Person schema provides structured data about Stefan for knowledge graph
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: cvTitle,
  url: CV_PAGE_URL,
  description: cvDescription,
  dateModified: CV_LAST_MODIFIED_ISO,
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.stefanheissenberg.de/#stefan-heissenberg",
    name: "Stefan Heißenberg",
    alternateName: "Stefan Heissenberg",
    givenName: "Stefan",
    familyName: "Heißenberg",
    url: "https://www.stefanheissenberg.de",
    image:
      "https://www.stefanheissenberg.de/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png",
    jobTitle: "Head of Design",
    description:
      "Senior product & design leader with fifteen years across agency, consulting, startup, and enterprise. Currently Head of Design at DHL Global Forwarding, reporting to the VP of Product.",
    worksFor: {
      "@type": "Organization",
      name: "DHL Global Forwarding",
      url: "https://www.dhl.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cologne",
      addressRegion: "North Rhine-Westphalia",
      addressCountry: "DE",
    },
    email: "mailto:hallo@stefanheissenberg.de",
    sameAs: [
      "https://www.linkedin.com/in/stefanheissenberg/",
      "https://www.stefanheissenberg.de",
    ],
    // LEARNING: hasOccupation = full career history; worksFor above = current employer only
    hasOccupation: buildOccupations(CV_EXPERIENCE),
    knowsAbout: buildKnowsAbout(CV_SKILLS, [
      "B2B SaaS",
      "Enterprise UX",
      "Logistics Technology",
    ]),
    alumniOf: buildAlumniOf(CV_CREDENTIALS),
    hasCredential: buildHasCredential(CV_CREDENTIALS),
  },
};

const breadcrumbJsonLd = buildBreadcrumbList();

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CvPage() {
  return (
    <>
      {/* JSON-LD structured data injected as script tags */}
      {/* LEARNING: dangerouslySetInnerHTML with JSON.stringify is the correct Next.js pattern for JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page-scoped sticky nav with section anchors */}
      <CvTopNav />

      <main id="cv-main">
        {/* 01 — Hero */}
        <CvHeroSection />

        {/* 02 — Metric Strip (overlaps hero with negative margin) */}
        <CvMetricStrip />

        {/* 03 — About / Profile */}
        <CvAboutSection />

        {/* 04 — Experience Timeline */}
        <CvExperienceSection />

        {/* 05 — Selected Case Studies (3-col grid) */}
        <CvCaseStudyGrid />

        {/* 06 — Client Wall (15 logos, full-width ruled row) */}
        <CvClientWall />

        {/* 07 — Credentials (Awards / Certs / Education) */}
        <CvCredentialsSection />

        {/* 08 — Skills & Tools */}
        <CvSkillsSection />

        {/* 09 — Final CTA (reuse site-wide section with CV-specific copy) */}
        <WantTheFullStoryCTASection
          nextCaseLabel="View portfolio →"
          nextCaseHref="/design-portfolio-sh"
        />
      </main>

      <Footer />
    </>
  );
}
