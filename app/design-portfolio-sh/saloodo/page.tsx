/**
 * PAGE: Saloodo Case Study
 * ROUTE: /design-portfolio-sh/saloodo
 * PURPOSE: Detailed case study page for Saloodo digital marketplace project
 *
 * NEXT.JS CONCEPTS:
 * - Nested route: app/design-portfolio-sh/saloodo/page.tsx creates /design-portfolio-sh/saloodo URL
 * - Server Component: Can fetch data, generate metadata
 *
 * DESIGN REFERENCE:
 * - Figma: https://www.figma.com/design/lAI569fJpr1ZlSthxro6QW/stefanheissenberg.de?node-id=251-111&m=dev
 * - Typography and styling harmonized with DHL case study page
 *
 * RESPONSIVE BREAKPOINTS (from Figma):
 * - Desktop: 1280px (3-col grids, side-by-side layouts)
 * - Tablet: 800px (2-col grids, stacked layouts)
 * - Mobile: 393px (1-col, fully stacked)
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SaloodoCaseStudyHero } from "@/components/case-studies/saloodo/SaloodoCaseStudyHero";

const baseUrl = "https://www.stefanheissenberg.de";
const ogImage = "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png";

export const metadata: Metadata = {
  title: "Saloodo UX Case Study | Design Portfolio | Stefan Heißenberg",
  description: "UX Strategy case study: Building a digital freight marketplace. UX design, UI design, design systems, and UX ROI from zero to scale.",
  alternates: {
    canonical: `${baseUrl}/design-portfolio-sh/saloodo`,
  },
  robots: {
    index: false, // LEARNING: Exclude this case study page from search engine indexing
    follow: true, // LEARNING: Allow search engines to follow links (for link equity)
  },
  openGraph: {
    url: `${baseUrl}/design-portfolio-sh/saloodo`,
    title: "Saloodo UX Case Study | Design Portfolio | Stefan Heißenberg",
    description: "UX Strategy case study: Building a digital freight marketplace. UX design, UI design, design systems, and UX ROI from zero to scale.",
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Stefan Heißenberg - Head of Experience Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saloodo UX Case Study | Design Portfolio | Stefan Heißenberg",
    description: "UX Strategy case study: Digital freight marketplace. UX design, UI design, design systems from zero to scale.",
  },
};

// LEARNING: Tech stack logos for the "Refactoring for Scale" section
// Using actual logos from refactoring-design-system folder
const techStackLogos = [
  { src: "/images/saloodo/refactoring-design-system/abstract-design-versions.svg", alt: "Abstract", width: 60, height: 60 },
  { src: "/images/saloodo/refactoring-design-system/atomic-design.svg", alt: "Atomic Design", width: 60, height: 60 },
  { src: "/images/saloodo/refactoring-design-system/sketch-ui-design.svg", alt: "Sketch", width: 66, height: 60 },
  { src: "/images/saloodo/refactoring-design-system/zeplin-design-system-styleguide-components.svg", alt: "Zeplin", width: 75, height: 60 },
  { src: "/images/saloodo/refactoring-design-system/storybook-living-styleguide-components-design-system.svg", alt: "Storybook", width: 48, height: 60 },
  { src: "/images/saloodo/refactoring-design-system/react-components.svg", alt: "React", width: 67, height: 60 },
  { src: "/images/saloodo/refactoring-design-system/browserstack-component-testing.svg", alt: "Browserstack", width: 60, height: 60 },
];

// LEARNING: Analytics tool logos for the "UX ROI" section
// Using actual logos from ux-roi folder
const analyticsLogos = [
  { src: "/images/saloodo/ux-roi/Hotjar.svg", alt: "Hotjar", width: 125, height: 60 },
  { src: "/images/saloodo/ux-roi/Intercom.svg", alt: "Intercom", width: 60, height: 60 },
  { src: "/images/saloodo/ux-roi/Elastic.svg", alt: "Elastic", width: 60, height: 60 },
  { src: "/images/saloodo/ux-roi/Segment.svg", alt: "Segment", width: 58, height: 60 },
  { src: "/images/saloodo/ux-roi/Salesforce.svg", alt: "Salesforce", width: 86, height: 60 },
  { src: "/images/saloodo/ux-roi/GTM.svg", alt: "Google Tag Manager", width: 60, height: 60 },
  { src: "/images/saloodo/ux-roi/google-ads.svg", alt: "Google Ads", width: 66, height: 60 },
  { src: "/images/saloodo/ux-roi/googleanalytics.svg", alt: "Google Analytics", width: 52, height: 60 },
  { src: "/images/saloodo/ux-roi/power-bi.svg", alt: "Power BI", width: 45, height: 60 },
];

const saloodoArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Zero to One: Building a Digital Marketplace - Saloodo UX Case Study",
  description:
    "UX Strategy case study: Building and scaling the Saloodo digital freight marketplace. UX design, UI design, design system refactoring, UX ROI, MEA expansion.",
  keywords: "Saloodo, Digital Marketplace, UX Strategy, UX Design, UI Design, Design Systems, Design Leadership, Freight, DHL",
  author: { "@id": "https://www.stefanheissenberg.de/#person" },
  publisher: { "@id": "https://www.stefanheissenberg.de/#person" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.stefanheissenberg.de/design-portfolio-sh/saloodo" },
  datePublished: "2018-01-01",
  dateModified: "2026-01-24",
};

export default function SaloodoCaseStudyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(saloodoArticleJsonLd) }} />
      {/* Back Button */}
      <section className="bg-[var(--background)] px-5 pt-8 md:px-8 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <Button variant="ghost" href="/design-portfolio-sh">
            ← Back to Portfolio
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <SaloodoCaseStudyHero />

      {/* Startup Growth - Refactoring for Scale */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Image + Text Layout */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="order-1">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/saloodo/hero-image-startup.png"
                  alt="Saloodo team workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-2 space-y-4">
              <p className="max-w-[820px] text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Over two years, we built the design team, established a user-centred design culture, and took the marketplace from European pilot to global platform across three continents.
              </p>
              <p className="max-w-[820px] text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                That chapter taught me more than any job before or since — how to move at startup speed, measure everything that mattered, and build infrastructure that would hold across 50+ countries without breaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Growth Section Header */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Section Header with emoji */}
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <p className="mb-2 text-2xl text-[#b3b3b3] sm:text-3xl" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 600 }}>
              🚀 Startup Growth
            </p>
            <h2
              className="text-2xl text-white sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 600,
                lineHeight: "160%",
              }}
            >
              Refactoring for Scale
            </h2>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Design System
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                We built a new design system from scratch — atomic principles, reusable components that could adapt market to market without redesigns, tokens wired directly into React so changes propagated automatically. The goal was infrastructure for geographic expansion, not a visual refresh.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Frontend Refactor
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                With engineering, we rebuilt the entire frontend in React/Redux. Not a coat of paint — systematic removal of technical debt, and a foundation that could hold the growth we needed.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The Result
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                We launched across multiple European markets in rapid succession — Netherlands, Italy, Poland, Austria, Denmark — each rollout running in weeks because the infrastructure was already there. The refactored platform handled regional variations in language, currency, and regulation without forking the codebase.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Business Impact
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                DHL's backing plus our own conversion data gave us unit economics that justified real marketing spend. Customers came back because the thing worked.
              </p>
            </div>
          </div>

          {/* Tech Stack Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {techStackLogos.map((logo) => (
              <div key={logo.alt} className="relative" style={{ width: logo.width, height: logo.height }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Example MacBook Image */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[2166/1564] w-full overflow-hidden">
            <Image
              src="/images/saloodo/Component-example-macbook 1.png"
              alt="Saloodo component library example on MacBook"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Data-Driven Disrupter Section */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <p className="mb-2 text-2xl text-[#b3b3b3] sm:text-3xl" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 600 }}>
              Data-Driven Disrupter
            </p>
            <h2
              className="text-2xl text-white sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 600,
                lineHeight: "160%",
              }}
            >
              Learning & Experimentation
            </h2>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Saloodo! had one advantage nobody else in the space had: access to DHL's decades of freight data. The data science team used it to experiment with machine learning that was genuinely new for logistics — dynamic pricing, load optimisation, carrier recommendations.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              I worked closely with the data science team, translating algorithms into interfaces users could trust. The most interesting work was our PTL (Part Truckload) optimisation engine. We tracked carriers' booked routes and available capacity, then recommended compatible shipments along the routes they were already driving.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              The marketplace efficiency was real. Carriers filled partially empty trucks with shipments they'd have driven past anyway. Empty miles went down. Utilisation went up. Shippers got better rates because marginal cost was low. Both sides came out ahead.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              What that collaboration taught me: how ML models actually work, what data they need, and how to design experiences that make complex algorithms trustworthy. More importantly — how smart algorithms create marketplace value instead of just automating processes.
            </p>
          </div>
        </div>
      </section>

      {/* App Screens Collage */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[1600/1240] w-full overflow-hidden">
            <Image
              src="/images/saloodo/app-screens.png"
              alt="Saloodo app screens showing various platform features"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* UX ROI Section */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <p className="mb-2 text-2xl text-[#b3b3b3] sm:text-3xl" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 600 }}>
              UX ROI
            </p>
            <h2
              className="text-2xl text-white sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 600,
                lineHeight: "160%",
              }}
            >
              Measuring What Matters
            </h2>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              In a startup, you build what drives customer lifetime value and measurable return — not what stakeholders request, not what's cool. We built reporting frameworks that connected design decisions directly to business outcomes.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Performance marketing and product shared the same tracking infrastructure. Bi-weekly product performance reviews ran across functions.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              We looked at what actually mattered — CAC trends, LTV:CAC ratios, payback periods, funnel drop-offs, unit economics — and the team built a shared understanding of goals and ROI.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Every major feature shipped with defined success metrics: conversion lift, retention improvement, cost reduction. Qualitative tests and hard analytics lived in the same conversation — task completion, session recordings, conversion data. Friction points showed up. Evidence got presented. Shipment creation time for first-time users dropped by over 40%.
            </p>
          </div>

          {/* Analytics Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 py-8 md:gap-8">
            {analyticsLogos.map((logo) => (
              <div key={logo.alt} className="relative" style={{ width: logo.width, height: logo.height }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Use Case Prioritization Subsection */}
          <div className="mx-auto mt-8 max-w-[820px] space-y-4">
            <h3
              className="text-xl text-white sm:text-2xl"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 600,
                lineHeight: "160%",
              }}
            >
              Use Case Prioritization
            </h3>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Every potential feature got scored on business value (revenue impact, cost savings, strategic importance) and user value. Without quantified evidence from at least one dimension, features didn't even make it onto the roadmap.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              We changed the platform with confidence because we had the data we needed and had learned to ask the right questions. That way we could experiment, measure, and iterate faster than traditional logistics companies could schedule a meeting.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Page Funnel Image */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[2000/1695] w-full overflow-hidden">
            <Image
              src="/images/saloodo/complete-payment.png"
              alt="Saloodo complete payment flow"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Case Study: MEA Expansion */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <p className="mb-2 text-2xl text-[#1ed0f3] sm:text-3xl" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 600 }}>
              Case Study
            </p>
            <h2
              className="text-2xl text-white sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 600,
                lineHeight: "160%",
              }}
            >
              MEA Expansion – From Pilot to 9 Countries in 6 Months
            </h2>
          </div>

          <div className="mx-auto max-w-[820px] space-y-8">
            {/* The Challenge */}
            <div className="space-y-4">
              <h3
                className="text-xl text-white sm:text-2xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                The Challenge
              </h3>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                By early 2019, Saloodo! had proven itself in Europe. DHL saw an opportunity in Middle East & Africa, but the business model needed fundamental adaptation. MEA had different dynamics — high smartphone penetration but lower trust in purely digital platforms, different logistics infrastructure, different payment norms, different regulations.
              </p>
            </div>

            {/* The Question */}
            <div className="space-y-4">
              <h3
                className="text-xl text-white sm:text-2xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                The Question
              </h3>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Could we scale Saloodo! globally while adapting to radically different markets? Or did every region need a forked codebase, a separate team, and endless customisation?
              </p>
            </div>

            {/* Design Thinking Workshops */}
            <div className="space-y-4">
              <h3
                className="text-xl text-white sm:text-2xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                Design Thinking Workshops in Dubai
              </h3>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                I went to Dubai to run stakeholder workshops with local DHL teams, potential customers, and carrier partners. Design Thinking methods helped us figure out what actually needed to change versus what could stay the same.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The workshops surfaced the critical insights. MEA customers needed local DHL entity contracts, not just marketplace transactions, to build trust. WhatsApp was the business platform — SMS and email weren't enough. Some markets needed convoy shipments for high-value goods because of security concerns. And most importantly: some markets needed a pure marketplace model, while others needed a DHL-backed forwarder hybrid.
              </p>
            </div>

            {/* The Solution with WhatsApp Mockup */}
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
              <div className="order-2 space-y-4 lg:order-1">
                <h3
                  className="text-xl text-white sm:text-2xl"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    fontWeight: 600,
                    lineHeight: "160%",
                  }}
                >
                  The Solution: Scalable Multi-Tenant Architecture
                </h3>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  From the insights, we designed UX flows, sitemaps, and a multi-tenant platform that could serve multiple DHL business units with separate branding, workflows, and margin structures. Two distinct business models on one infrastructure.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Regional customisations — WhatsApp integration, local payment methods, convoy services — ran without rebuilding the core.
                </p>
              </div>
              
              {/* WhatsApp Mockup */}
              <div className="order-1 lg:order-2">
                <div className="relative mx-auto aspect-[297/590] w-full max-w-[297px] overflow-hidden">
                  <Image
                    src="/images/saloodo/android-mockup-whattsapp 1.png"
                    alt="WhatsApp integration for Africa"
                    fill
                    className="object-contain"
                    sizes="300px"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  WhatsApp integration for Africa
                </p>
              </div>
            </div>

            {/* Go-to-Market Execution */}
            <div className="space-y-4">
              <h3
                className="text-xl text-white sm:text-2xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                Go-to-Market Execution: Speed as Competitive Advantage
              </h3>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The rollout moved fast. UAE launched with Dubai as regional headquarters, then all six GCC countries within six weeks. Egypt and Jordan followed, with 238 people at the Cairo kickoff. By November we launched in South Africa — the first international digital freight platform on the continent, with over 150 at the Sandton event.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The numbers told the story. Nine countries in six months, faster than any European expansion. MEA alone drove growth from 18,000 to 30,000 shippers.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Each additional country took days, not months, because the tenant architecture solved most of the complexity once. Regional teams customised what mattered locally while core platform logic stayed shared. One codebase. One design system. Multiple markets.
              </p>
            </div>

            {/* The Strategic Impact */}
            <div className="space-y-4">
              <h3
                className="text-xl text-white sm:text-2xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                The Strategic Impact
              </h3>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                MEA validated the global strategy. It proved Saloodo! could adapt to radically different markets without breaking. By the time I transitioned to myDHLi in April 2020, the platform was running on four continents — and the foundation we'd built in those Dubai workshops was what made that possible.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The MEA rollout taught me something I've taken into every role since. Scale isn't about shipping the same product to more places. It's about designing infrastructure flexible enough to meet each market on its own terms — trust dynamics, payment habits, communication channels — without forking the codebase or breaking the team.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                That's the work I want to keep doing. Building platforms that meet people where they actually are, backed by the research and data that tell you where that is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* iPad Shipment List Image */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[1920/1280] w-full overflow-hidden">
            <Image
              src="/images/saloodo/ipad-shipmentlist.png"
              alt="Saloodo iPad shipment list view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
