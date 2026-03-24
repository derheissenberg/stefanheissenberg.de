/**
 * PAGE: DHL Case Study
 * ROUTE: /design-portfolio-sh/dhl
 * PURPOSE: Detailed case study page for DHL/myDHLi project
 *
 * NEXT.JS CONCEPTS:
 * - Nested route: app/design-portfolio-sh/dhl/page.tsx creates /design-portfolio-sh/dhl URL
 * - Server Component: Can fetch data, generate metadata
 * - Link component: For navigation back to portfolio
 *
 * DESIGN REFERENCE:
 * - Figma: https://www.figma.com/design/lAI569fJpr1ZlSthxro6QW/stefanheissenberg.de?node-id=220-118&m=dev
 * - Typography harmonized with design-portfolio-sh page (Outfit font, h2 styles, body text styles)
 *
 * RESPONSIVE BREAKPOINTS (from Figma):
 * - Desktop: 1280px (3-col grids, side-by-side layouts)
 * - Tablet: 800px (2-col grids, stacked layouts)
 * - Mobile: 393px (1-col, fully stacked)
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DHLCaseStudyHero } from "@/components/case-studies/dhl/DHLCaseStudyHero";
import { DHLCaseStudySection } from "@/components/case-studies/dhl/DHLCaseStudySection";

const baseUrl = "https://www.stefanheissenberg.de";
const ogImage = "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png";

export const metadata: Metadata = {
  title: "DHL UX Case Study | myDHLi | Design Portfolio | Stefan Heißenberg",
  description: "UX Strategy case study: Driving DHL's digital transformation. UX research, design systems, UI design for global logistics platform myDHLi.",
  alternates: {
    canonical: `${baseUrl}/design-portfolio-sh/dhl`,
  },
  robots: {
    index: false, // LEARNING: Exclude this case study page from search engine indexing
    follow: true, // LEARNING: Allow search engines to follow links (for link equity)
  },
  openGraph: {
    url: `${baseUrl}/design-portfolio-sh/dhl`,
    title: "DHL UX Case Study | myDHLi | Design Portfolio | Stefan Heißenberg",
    description: "UX Strategy case study: Driving DHL's digital transformation. UX research, design systems, UI design for global logistics platform myDHLi.",
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Stefan Heißenberg - Head of Experience Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHL UX Case Study | myDHLi | Design Portfolio | Stefan Heißenberg",
    description: "UX Strategy case study: DHL digital transformation. UX research, design systems, UI design for global logistics.",
  },
};

// LEARNING: Customer logos for the "Global Launch" section
// These are stored as SVGs in the mydhli/customers folder
const customerLogos = [
  { src: "/images/mydhli/customers/HP.svg", alt: "HP", width: 60, height: 60 },
  { src: "/images/mydhli/customers/Dell.svg", alt: "Dell", width: 60, height: 60 },
  { src: "/images/mydhli/customers/Bayer.svg", alt: "Bayer", width: 60, height: 60 },
  { src: "/images/mydhli/customers/Apple.svg", alt: "Apple", width: 50, height: 60 },
  { src: "/images/mydhli/customers/Airbus.svg", alt: "Airbus", width: 162, height: 30 },
  { src: "/images/mydhli/customers/3M.svg", alt: "3M", width: 60, height: 32 },
  { src: "/images/mydhli/customers/Johnson&Johnson.svg", alt: "Johnson & Johnson", width: 300, height: 28 },
  { src: "/images/mydhli/customers/Siemens.svg", alt: "Siemens", width: 189, height: 30 },
  { src: "/images/mydhli/customers/nokia.svg", alt: "Nokia", width: 128, height: 30 },
  { src: "/images/mydhli/customers/Samsung.svg", alt: "Samsung", width: 195, height: 30 },
  { src: "/images/mydhli/customers/Boeing.svg", alt: "Boeing", width: 219, height: 50 },
];

// LEARNING: UX Research tool logos for the analytics section
const uxResearchLogos = [
  { src: "/images/mydhli/uxresearch/Usertesting.svg", alt: "UserTesting", width: 227, height: 60 },
  { src: "/images/mydhli/uxresearch/Hotjar.svg", alt: "Hotjar", width: 125, height: 60 },
  { src: "/images/mydhli/uxresearch/ai-studio.svg", alt: "AI Studio", width: 345, height: 50 },
  { src: "/images/mydhli/uxresearch/GTM.svg", alt: "Google Tag Manager", width: 60, height: 60 },
  { src: "/images/mydhli/uxresearch/google-analytics.svg", alt: "Google Analytics", width: 52, height: 60 },
  { src: "/images/mydhli/uxresearch/adobe-analytics-adobe-experience.png", alt: "Adobe Analytics", width: 60, height: 60 },
];

const dhlArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Driving DHL's Digital Transformation: A Data-Driven UX Approach for Global Logistics",
  description:
    "UX Strategy case study: Architecting myDHLi from concept to global platform. UX research, UI design, design systems, and design ops for DHL Global Forwarding.",
  keywords: "myDHLi, DHL, UX Strategy, UX Design, UI Design, Design Systems, Design Leadership, Digital Transformation, B2B Logistics",
  author: { "@id": "https://www.stefanheissenberg.de/#person" },
  publisher: { "@id": "https://www.stefanheissenberg.de/#person" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.stefanheissenberg.de/design-portfolio-sh/dhl" },
  datePublished: "2018-01-01",
  dateModified: "2026-01-24",
};

export default function DHLCaseStudyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dhlArticleJsonLd) }} />
      {/* Back Button */}
      {/* LEARNING: Uses ghost button variant - smaller size but keeps all animated gradient effects */}
      <section className="bg-[var(--background)] px-5 pt-8 md:px-8 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <Button variant="ghost" href="/design-portfolio-sh">
            ← Back to Portfolio
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <DHLCaseStudyHero />

      {/* 2018: Entering DHL Through the Digital Speedboat */}
      {/* LEARNING: Desktop shows text + images side by side, Tablet/Mobile stacks vertically */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* LEARNING: Responsive grid - Desktop: 2 columns with text left, images right
              Tablet/Mobile: Stacked with images first, then text */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[455px_1fr] lg:gap-16">
            {/* Text Content */}
            <div className="order-2 max-w-[820px] space-y-5 lg:order-1">
              <h2
                className="text-2xl text-white sm:text-3xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                2018: Entering DHL Through the Digital Speedboat
              </h2>
              <div className="space-y-4">
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  I joined DHL through Saloodo!, a digital marketplace startup operating inside the DHL Group.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  As Lead Experience Designer, I worked with an aggressive data-driven team that treated logistics like a tech product—rapid experimentation, ML-powered recommendations, and ruthless focus on conversion metrics.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  We were DHL's "digital speedboat"—small enough to move fast, protected enough to take risks. That positioning became crucial when DHL Global Forwarding needed to reimagine their entire customer experience.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  While logistics giants were comfortable, competitors were moving: Flexport raised $1B, Amazon Freight undercut prices by 30%, Uber Freight scaled globally. The $800B logistics market was being digitized—and DHL needed to catch up.
                </p>
              </div>
            </div>
            
            {/* Industry Status Image Grid */}
            {/* LEARNING: 2x2 grid showing logistics industry context */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/mydhli/logistic-industry-status.png"
                  alt="Logistics industry status and market overview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecting myDHLi from Concept to Global Platform */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* LEARNING: Desktop shows images left, text right. Tablet/Mobile stacks. */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[645px_1fr] lg:gap-16">
            {/* Scribble Image with Caption */}
            <div className="order-1 space-y-3">
              <div className="relative aspect-[645/482] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/mydhli/concept-design-scribble.png"
                  alt="1st scribble of myDHLi from 2019"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                1st scribble of myDHLi from 2019
              </p>
            </div>
            
            {/* Text Content */}
            <div className="order-2 max-w-[820px] space-y-5 lg:pt-5">
              <h2
                className="text-2xl text-white sm:text-3xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                Architecting myDHLi from Concept to Global Platform
              </h2>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Late 2018
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  While at Saloodo, I was tapped to create the initial concept for myDHLi—a unified B2B portal to replace DHL Global Forwarding's 1,000+ disconnected applications.
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Vision
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  One platform for 360° shipment visibility across all transport modes, available 24/7 globally.
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Reality
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  This wasn't a design problem—it was organizational transformation. Decoupling legacy systems, introducing agile to waterfall teams, and convincing stakeholders to abandon "1,000 apps" for "one customer experience."
                </p>
              </div>
            </div>
          </div>
          
          {/* Concept Images Grid */}
          {/* LEARNING: Desktop: 3 columns, Tablet: 3 columns, Mobile: 1 column */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-l-xl sm:rounded-l-xl sm:rounded-r-none">
                <Image
                  src="/images/mydhli/concept-low-fidelity-wireframe.png"
                  alt="1st Axure prototype for customer interviews and stakeholder workshops"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                1st Axure prototype for customer interviews and stakeholder workshops.
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-lg sm:rounded-none">
                <Image
                  src="/images/mydhli/flowcharts-uxflow-architecture-design.png"
                  alt="Early flow chart for system discovery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Early flow chart for system discovery, and basis for self-registration.
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-r-xl sm:rounded-l-none sm:rounded-r-xl">
                <Image
                  src="/images/mydhli/architecture-hands-on-concepts.png"
                  alt="Early DHL landscape and architecture brainstorming session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Early DHL landscape and architecture brainstorming session.
              </p>
            </div>
          </div>
          
          {/* Workshop Images Grid */}
          {/* LEARNING: Desktop: 3 columns, Tablet: 3 columns, Mobile: 1 column */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-l-xl sm:rounded-l-xl sm:rounded-r-none">
                <Image
                  src="/images/mydhli/kick-off-workshop-stakeholder.png"
                  alt="Initial myDHLi kick-off/stakeholder workshops with Saloodo-Team in Bonn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Initial myDHLi kick-off/stakeholder workshops with Saloodo-Team in Bonn
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-lg sm:rounded-none">
                <Image
                  src="/images/mydhli/analytics-coaching-stefanheissenberg.png"
                  alt="UX-research & analytics training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                UX-research & analytics training
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-r-xl sm:rounded-l-none sm:rounded-r-xl">
                <Image
                  src="/images/mydhli/it-workshops.png"
                  alt="IT-Workshops in Prague"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-center text-xs text-[var(--foreground)]/60" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                IT-Workshops in Prague
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design Launch - Dashboard Collage */}
      {/* LEARNING: Shows the dashboard across iMac, iPad, and iPhone - responsive design showcase */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[1280/720] w-full overflow-hidden">
            <Image
              src="/images/mydhli/Dashboard-collage.png"
              alt="myDHLi Dashboard shown on iMac, iPad, and iPhone demonstrating responsive design"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* May 2020: Global Launch During COVID-19 */}
      {/* LEARNING: Custom section structure - text at 820px, logos at full 1280px width */}
      <section className="bg-[var(--background)] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Heading - centered, max 820px */}
          <h2
            className="mx-auto mb-8 max-w-[820px] text-center text-2xl text-white sm:text-3xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 200,
              lineHeight: "150%",
            }}
          >
            May 2020: Global Launch During COVID-19
          </h2>
          
          {/* Text Content - centered, max 820px */}
          <p className="mx-auto max-w-[820px] text-center text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            Promoted to Head of Experience Design (April 2020), I led the global rollout across 5 continents during the pandemic. Launched Quote + Book, Follow + Share collaboration, real-time tracking, analytics dashboards with single sign-on.
          </p>
          
          {/* Customer Logos - full width up to 1280px (max-w-6xl) */}
          {/* LEARNING: Flex wrap layout centers logos and wraps to multiple rows on smaller screens */}
          <div className="flex flex-wrap items-center justify-center gap-6 pb-16 pt-10 md:gap-8">
            {customerLogos.map((logo) => (
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

      {/* UX Research and Analytics */}
      {/* LEARNING: Custom structure - text at 820px, logos at 1600px max-width for single line display */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2
            className="mx-auto mb-8 max-w-[820px] text-2xl text-white sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: "160%",
            }}
          >
            UX Research and Analytics
          </h2>
          <div className="mx-auto max-w-[820px] space-y-4 text-left">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              When I arrived at DHL, decisions were made in conference rooms based on stakeholder opinions, not user evidence. I built the research and analytics infrastructure from the ground up—integrating UserTesting.com, Hotjar, Google/Adobe Analytics, then building custom KPI dashboards that gave product teams real-time visibility into what was actually working.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Beyond installing tools, I established recurring research rhythms integrated directly into sprint cycles for rapid experimentation. The transformation was profound: design evolved from subjective craft to measurable discipline. Teams could now validate hypotheses, measure feature impact, and make evidence-based decisions with research embedded in our product lifecycle.
            </p>
          </div>
          
          {/* UX Research Tool Logos - full width up to 1600px for single line display */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 pb-16 md:gap-8">
            {uxResearchLogos.map((logo) => (
              <div key={logo.alt} className="relative" style={{ width: logo.width, height: logo.height }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User-Centered Design Culture */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mx-auto mb-8 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: "160%",
            }}
          >
            User-Centered Design Culture
          </h2>
          
          {/* LEARNING: Desktop shows image left, text right. Reverses on Tablet/Mobile. */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_360px] lg:gap-16">
            {/* User-Centered Design Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[891/891] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/mydhli/user-centered-design-visual.png"
                  alt="User-centered design process visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 max-w-[820px] space-y-4 lg:order-2">
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Building infrastructure was only half the battle. DHL's product culture was fundamentally stakeholder-focused, not customer-focused—teams optimized for internal requests and political dynamics rather than solving real user problems.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                I led a cultural transformation by training over 50 team members across product, development, and business units on UX fundamentals through deep workshops on research methods and data interpretation. I embedded designers in cross-functional teams as user advocates, made user testing mandatory before major releases, and created shared repositories of research insights accessible to everyone.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The shift was tangible. Within my teams and the product organization I work with, user-centered thinking became the natural starting point for product decisions, not an afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DHL Group's 1st Scaled Design System */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <p className="mb-2 text-2xl text-[#b3b3b3] sm:text-3xl" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 600 }}>
              DHL Group's
            </p>
            <h2
              className="text-2xl text-white sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 600,
                lineHeight: "160%",
              }}
            >
              1st Scaled Design System
            </h2>
          </div>
          
          {/* LEARNING: Text left, tall design system image right. Breaks at md (768px) for longer side-by-side */}
          <div className="flex flex-col gap-10 md:grid md:grid-cols-[1fr_320px] md:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="order-2 max-w-[820px] space-y-6 md:order-1">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Challenge
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  DHL had fragmented design—old-fashioned guidelines updated sporadically, competing libraries across divisions (myDHLi, dhl.com, legacy portals), no shared technical foundation. Every team reinvented components differently.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  5-Year Strategic Journey (2019-2024)
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  I audited major portals, documenting components and use cases. Rather than replacing everything, I built the foundation—aligning our myDHLi library with existing tech stacks while creating space for harmonisation.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Led cross-division collaboration to merge our library with dhl.com's primary system. Navigated multiple tool transitions (Abstract → Sketch Cloud → Figma) while maintaining consistency. Connected React components to design tokens—making the system living and technically integrated.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Represented multiple business units in DHL Group-wide committee, spreading design culture and defining standards for the future.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Paradigm Shift
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  We reversed the model. From static guidelines with inconsistent components, we created the design system that is the guideline—living frontend components with connected Figma libraries became the source of truth.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Impact
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Created DHL Group's first scaled design system, now established across leading business units. Enabled faster development, consistent experiences, and cross-division collaboration. The foundation for all future DHL digital products.
                </p>
              </div>
              <Button
                variant="ghost"
                href="https://www.dpdhl-brands.com/en/dhl"
              >
                Check our Brand Hub →
              </Button>
            </div>
            
            {/* Design System Image - full width on mobile, 320px column width on md+ */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-[560/2232] w-full overflow-hidden rounded-lg md:aspect-auto md:h-full">
                <Image
                  src="/images/mydhli/scaled-design-system.png"
                  alt="DHL Scaled Design System components"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Ops */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2
            className="mx-auto mb-8 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: "160%",
            }}
          >
            Design Ops
          </h2>
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              As myDHLi grew to serve 22,000+ customers globally, I built operational infrastructure to scale without sacrificing quality or velocity.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              I grew the design organization to over 10 designers distributed across EMEA time zones—but growth was never just about headcount.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              I created frameworks for enablement, trust, and coaching that let designers run independently and take ownership. Documentation became our foundation, enabling async-first communication across time zones without constant meetings or approval bottlenecks. I implemented dual-track agile so discovery and delivery could run in parallel, established design system governance for cross-division contributions, and navigated our tool evolution from Abstract through Sketch Cloud to Figma.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              That final transition to Figma became transformative—it's now the base for our design system with playgrounds that allow sharing designs across teams. This open architecture welcomes everyone to contribute and share. The design community is now in active exchange, collaborating across divisions in ways that weren't possible before. It's incredibly rewarding to see that cultural shift materialise.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              The result: we move at startup speed while maintaining enterprise quality, handling three to five times more projects with roughly the same team size through systematic processes and shared infrastructure.
            </p>
          </div>
          
          {/* Detailpage Mockup */}
          <div className="mt-12 flex justify-center">
            <div className="relative aspect-[864/733] w-full max-w-4xl overflow-hidden">
              <Image
                src="/images/mydhli/detailpage-mockup.png"
                alt="myDHLi detail page mockup"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 864px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: 91% faster Customer Onboarding */}
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
              91% faster Customer Onboarding
            </h2>
          </div>
          
          <div className="mx-auto max-w-[820px] space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent-yellow)]" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                THE CHALLENGE
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                One of our biggest challenges was attracting small- and medium-sized businesses. Our operational costs made one-time shipments unprofitable, and the 10-12 day onboarding process was simply too slow and complex for companies with lower shipment volumes. We were losing an entire customer segment before they even got started.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent-yellow)]" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                THE PROJECT
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                I was the lead designer in a cross-functional initiative for the US market. Our goal was to reimagine the online sales experience—remove friction, accelerate onboarding, and make smaller accounts economically viable.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Through detailed process mapping, we discovered that the main bottleneck wasn't compliance itself, but a series of redundant review and approval layers between departments.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                That insight changed our approach entirely. I facilitated workshops with operations and sales to redesign the workflow. We consolidated decision-making, removed redundant approval layers, and set up clear data-driven criteria. By empowering teams to make faster decisions and removing redundant approval layers, we reduced onboarding from 10–12 days to just 3–4 days, before we built a single new feature.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                These insights enabled us to validate our findings with setting up real prospects and to report on meaningful KPIs, proving the model's effectiveness and building confidence among senior stakeholders.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent-yellow)]" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                THE RESULT
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                After full digital enablement, we achieved setup times of under 24 hours, empowering both operations and sales teams to run with greater autonomy while maintaining manual control where necessary.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                More importantly, we architected the foundation for self-registration—where customers will access booking tools instantly with automated account creation and invisible compliance processes running seamlessly in the background.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The project became a global front-runner within the organisation. It convinced senior leadership to adopt the new process as a blueprint for all DHL markets worldwide.
              </p>
            </div>
            
            {/* Welcome iPad Image */}
            <div className="mt-8 flex justify-center">
              <div className="relative aspect-[2000/1703] w-full max-w-4xl overflow-hidden rounded-lg">
                <Image
                  src="/images/mydhli/welcome-ipad.png"
                  alt="myDHLi Welcome screen on iPad"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 820px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
