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

export const metadata: Metadata = {
  title: "Saloodo Case Study | Design Portfolio | Stefan Heißenberg",
  description: "From Zero to One: Building a Digital Marketplace - Saloodo case study",
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

export default function SaloodoCaseStudyPage() {
  return (
    <main>
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
                Over the next two years, I built the design team from scratch, established a user-centered design culture and helped expand the marketplace from European pilot to global platform serving customers across three continents.
              </p>
              <p className="max-w-[820px] text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                This was my crucible—where I learned to move at startup velocity, measure everything that mattered, and build infrastructure that could scale to 50+ countries without breaking.
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
                My job was to build the infrastructure for rapid geographic expansion. I've builded a new design system from scratch: a living style guide based on Atomic Design principles—reusable components that could adapt to different markets without constant redesign. Connected design tokens directly to React components so changes propagated automatically.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Frontend Refactor
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Worked with engineering to rebuild the entire frontend in React/Redux. This wasn't just a visual refresh—we systematically eliminated technical debt and created a foundation that could handle exponential growth.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The Result
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                We launched across multiple European markets in rapid succession—Netherlands, Italy, Poland, Austria, Denmark—each rollout taking weeks instead of months because we'd built scalable infrastructure. The refactored platform could handle regional variations (language, currency, regulations) without forking the codebase.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Business Impact
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Backed by DHL's trust and our improved conversion rates, we achieved profitable unit economics that justified aggressive marketing spend. We built a loyal customer base that kept coming back because the product actually worked well.
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
              Saloodo! had an unfair advantage: access to DHL's decades of freight data. Our data science team used this to experiment with machine learning products completely new to the logistics industry—dynamic pricing models, load optimization algorithms, carrier recommendation systems.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              I worked closely with brilliant data engineers, translating complex algorithms into interfaces users could trust. The most sophisticated work was our PTL (Part Truckload) optimization engine: we tracked carriers' booked routes and available capacity, then recommended compatible shipments along their existing routes.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              This created real marketplace efficiency. Carriers filled partially empty trucks with shipments they were already driving past—reducing empty miles, improving utilization, and enabling competitive pricing because marginal cost was low. Shippers got better rates. Carriers improved margins. The algorithm generated value for both sides.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              This collaboration taught me how machine learning models work, what data they need, and how to design experiences that make complex algorithms trustworthy. More importantly: how smart algorithms create marketplace value, not just automate processes.
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
              In startups, you build what drives customer lifetime value and measurable return—not only what stakeholders request or what's cool. I established reporting frameworks connecting design decisions directly to business outcomes.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              I partnered with performance marketing to build comprehensive tracking infrastructure, then established bi-weekly product performance reviews with cross-functional teams.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              We examined what actually mattered: CAC trends, LTV:CAC ratios, payback periods, funnel drop-offs, unit economics. Together as a team we gained common understanding of goals and ROI.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Every major feature had defined success metrics: conversion lift, retention improvement, cost reduction. I analyzed qualified user test results together with hard analytics like task completion times, session recordings, and conversion data. By identifying friction points and presenting actionable insights, we systematically improved the experience and reduced shipment creation time for first-time users by over 40%.
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
              We scored every potential feature on business value (revenue impact, cost savings, strategic importance) and user value. Without quantified evidence from at least one dimension, features didn't even make it on the roadmap.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              We changed the platform with confidence because we had the data we needed and learned to ask the right questions. That way we could experiment, measure, and iterate faster than traditional logistics companies could schedule a meeting.
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
                By early 2019, Saloodo! had proven itself in Europe. DHL saw massive opportunity in Middle East & Africa, but the business model needed fundamental adaptation. The MEA market had different dynamics—high smartphone penetration but lower trust in purely digital platforms, different logistics infrastructure, different payment norms, different regulatory environments.
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
                Could we scale Saloodo! globally while adapting to radically different markets? Or would each region require a forked codebase, separate teams, and endless customization?
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
                I traveled to Dubai to lead stakeholder workshops with local DHL teams, potential customers, and carrier partners. We used Design Thinking methodologies to understand what actually needed to change versus what could stay the same.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The workshops revealed critical insights. MEA customers needed local DHL entity contracts, not just marketplace transactions, to build trust. WhatsApp was the business platform, making SMS and email insufficient. Markets required convoy shipments for high-value goods due to security concerns. Most importantly, some markets needed a pure marketplace model while others required a DHL-backed forwarder hybrid.
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
                  Based on these insights, I designed UX flows, sitemaps and design for a multi-tenant platform that could serve multiple DHL business units with separate branding, workflows, and margin structures. Two distinct business models could run on the same infrastructure.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Regional customizations like WhatsApp integration, local payment methods, and convoy services worked without rebuilding the core platform.
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
                The rollout happened fast. We launched in the UAE with Dubai as regional headquarters, then expanded to all six GCC countries within six weeks. Egypt and Jordan followed, with the Cairo kickoff event drawing 238 attendees. By November, we launched in South Africa, becoming the first international digital freight platform on the African continent with over 150 attendees at the Sandton event.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The numbers told the story: nine countries in six months, faster than any European expansion. MEA directly drove growth from 18,000 to 30,000 shippers.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Each additional country took days, not months, because the tenant architecture solved most complexity once. Regional teams could customize what mattered locally while core platform logic remained shared. One codebase. One design system. Multiple markets.
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
                This successful expansion validated the entire global strategy. The MEA rollout proved that Saloodo! could adapt to radically different markets without breaking. By the time I transitioned to lead myDHLi in April 2020, the platform was operating on four continents, and the foundation I'd built in those Dubai workshops made it possible.
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
