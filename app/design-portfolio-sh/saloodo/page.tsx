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
import { Footer } from "@/components/layout/Footer";
import { SaloodoCaseStudyHero } from "@/components/case-studies/saloodo/SaloodoCaseStudyHero";
import { CaseStudySectionHeading } from "@/components/case-studies/CaseStudySectionHeading";
import { CaseStudyLogoStack } from "@/components/case-studies/CaseStudyLogoStack";
import { ParallaxInitializer } from "@/components/ui/ParallaxInitializer";
import { WantTheFullStoryCTASection } from "@/components/sections/WantTheFullStoryCTASection";

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
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Stefan Heißenberg - Head of Design" }],
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

/** Matches SaloodoCaseStudyHero badge (Kode Mono); cyan palette for in-page case study card */
const saloodoCaseStudyInPageBadgeStyle = {
  fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
  fontWeight: 500,
  letterSpacing: "0.24em",
} as const;

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

      {/* Startup Growth / Refactoring for Scale */}
      <section className="bg-[var(--background)] px-6 pt-8 pb-12 lg:px-12 lg:pt-10 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <CaseStudySectionHeading
            align="center"
            numberDash="01—"
            category="STARTUP GROWTH"
            detail="DESIGN SYSTEM & PLATFORM"
          >
            Refactoring for Scale
          </CaseStudySectionHeading>

          <div className="mx-auto max-w-[820px] mt-10 space-y-6 lg:mt-12">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Design System
              </p>
              <p className="cs-body">
                We built a new design system from scratch — atomic principles, reusable components that could adapt market to market without redesigns, tokens wired directly into React so changes propagated automatically. The goal was infrastructure for geographic expansion, not a visual refresh.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Frontend Refactor
              </p>
              <p className="cs-body">
                With engineering, we rebuilt the entire frontend in React/Redux. Not a coat of paint — systematic removal of technical debt, and a foundation that could hold the growth we needed.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The Result
              </p>
              <p className="cs-body">
                We launched across multiple European markets in rapid succession — Netherlands, Italy, Poland, Austria, Denmark — each rollout running in weeks because the infrastructure was already there. The refactored platform handled regional variations in language, currency, and regulation without forking the codebase.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Business Impact
              </p>
              <p className="cs-body">
                DHL's backing plus our own conversion data gave us unit economics that justified real marketing spend. Customers came back because the thing worked.
              </p>
            </div>
          </div>

          <CaseStudyLogoStack className="mt-10 sm:mt-12" label="Tech stack" logos={techStackLogos} />
        </div>
      </section>

      {/* MacBook Component Library Image */}
      <section className="bg-[var(--background)] px-5 pb-12 md:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          {/* LEARNING: relative parent = stacking context / clip boundary.
              Inner parallax-layer sits at z-0; if overlaid content were added
              it would live at z-10+, keeping it above the image on scroll. */}
          <div className="relative aspect-[2166/1564] w-full overflow-hidden">
            <div className="parallax-layer parallax-slow absolute inset-0">
              <Image
                src="/images/saloodo/Component-example-macbook 1.png"
                alt="Saloodo component library example on MacBook"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Disrupter Section */}
      <section className="bg-[var(--background)] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <CaseStudySectionHeading
            align="center"
            numberDash="02—"
            category="DATA-DRIVEN DISRUPTER"
            detail=""
          >
            Learning & Experimentation
          </CaseStudySectionHeading>

          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="cs-body">
              Saloodo! had one advantage nobody else in the space had: access to DHL's decades of freight data. The data science team used it to experiment with machine learning that was genuinely new for logistics — dynamic pricing, load optimisation, carrier recommendations.
            </p>
            <p className="cs-body">
              I worked closely with the data science team, translating algorithms into interfaces users could trust. The most interesting work was our PTL (Part Truckload) optimisation engine. We tracked carriers' booked routes and available capacity, then recommended compatible shipments along the routes they were already driving.
            </p>
            <p className="cs-body">
              The marketplace efficiency was real. Carriers filled partially empty trucks with shipments they'd have driven past anyway. Empty miles went down. Utilisation went up. Shippers got better rates because marginal cost was low. Both sides came out ahead.
            </p>
          </div>
        </div>
      </section>

      {/* THE LEARNING — centered manifesto (matches DHL shift marker pattern) */}
      <section className="bg-[var(--background)] py-[84px] max-[900px]:py-[60px]">
        <div className="mx-auto max-w-[1160px] px-6 lg:px-8">
          <div className="py-6 text-center sm:py-8">
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={{
                fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
                fontWeight: 500,
                letterSpacing: "0.24em",
              }}
            >
              — THE LEARNING —
            </p>
            <blockquote
              className="mx-auto mt-8 max-w-[980px] text-white max-[900px]:text-[36px] sm:mt-10 md:mt-12"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(26px, 4vw, 54px)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              &ldquo;Smart algorithms create <em
                className="gradient-text-safe"
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  paddingRight: "0.08em",
                  marginRight: "0.01em",
                  backgroundSize: "300%",
                }}
              >marketplace value</em> — not just automated processes.&rdquo;
            </blockquote>
            <p
              className="mx-auto mt-10 max-w-[620px] text-[15px] leading-[1.65] text-white/65 sm:mt-12 lg:mt-14"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              SALOODO! · DATA SCIENCE COLLABORATION
            </p>
          </div>
        </div>
      </section>

      {/* App Screens Collage */}
      <section className="bg-[var(--background)] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[1600/1240] w-full overflow-hidden">
            <div className="parallax-layer parallax-slow absolute inset-0">
              <Image
                src="/images/saloodo/app-screens.png"
                alt="Saloodo app screens showing various platform features"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UX ROI Section */}
      <section className="bg-[var(--background)] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <CaseStudySectionHeading
            align="center"
            numberDash="03—"
            category="UX ROI"
            detail="MEASURING WHAT MATTERS"
          >
            Measuring What Matters
          </CaseStudySectionHeading>

          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="cs-body">
              In a startup, you build what drives customer lifetime value and measurable return. Not what stakeholders request. Not what&apos;s cool. Every major feature shipped with defined success metrics — conversion lift, retention, cost reduction — and qualitative tests sat next to the analytics. Friction points showed up. Evidence got presented.
            </p>
            <p className="cs-body">
              We rebuilt the shipment creation flow on what the data was telling us. Time-to-first-shipment for new users dropped by over 40%.
            </p>
            <p className="cs-body">
              Without quantified evidence — business value, user value, ideally both — features didn&apos;t make the roadmap. We changed the platform with confidence because we had the data and had learned to ask the right questions. That&apos;s how we experimented, measured, and iterated faster than traditional logistics companies could schedule a meeting.
            </p>
          </div>

          {/* Analytics Logos */}
          <div className="border-y border-white/[0.08] mt-10 sm:mt-12">
            <p
              className="px-4 pt-8 text-center text-[10px] font-medium uppercase text-white/40 sm:pt-10 sm:text-[11px]"
              style={{
                fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
                letterSpacing: "0.18em",
              }}
            >
              TECH STACK
            </p>
            <ul className="flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-6 px-4 pb-8 pt-5 sm:gap-x-7 sm:gap-y-7 sm:pb-10 sm:pt-6 md:gap-x-9">
              {analyticsLogos.map((logo) => (
                <li key={logo.alt} className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    sizes="(max-width: 640px) 80px, 100px"
                    className="h-5 w-auto max-h-5 object-contain opacity-[0.42] grayscale transition-all duration-300 ease-out sm:h-6 sm:max-h-6 sm:max-w-[100px] md:h-7 md:max-h-7 md:max-w-[118px] hover:scale-[1.04] hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Flow Screenshot — no parallax: object-contain cannot bleed into the
              extended top/bottom offsets that parallax-layer adds for object-cover images,
              so we use a static wrapper to prevent translateY clipping at the edges. */}
          <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
            <div className="relative aspect-[2000/1695] w-full overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/saloodo/complete-payment.png"
                  alt="Saloodo complete payment flow"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: MEA Expansion — card + glow; gradients match MetricCard blue (Tailwind + animate-gradient) */}
      <section className="bg-[var(--background)] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
        <div className="relative mx-auto max-w-[904px] overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-950/85 px-6 py-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-[6px] sm:px-10 sm:py-14 md:px-12 md:py-16 lg:rounded-3xl lg:py-20">
          {/* Orange radial wash behind headline */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 aspect-[5/4] w-[min(120%,760px)] -translate-x-1/2 rounded-full opacity-90 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(251,146,60,0.32) 0%, rgba(234,88,12,0.12) 38%, transparent 72%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-8 right-[-10%] h-64 w-64 rounded-full opacity-35 blur-[64px]"
            style={{
              background: "radial-gradient(circle at center, rgba(251,146,60,0.28) 0%, transparent 65%)",
            }}
            aria-hidden
          />
          <div className="relative z-10">
            <header className="mb-14 text-left sm:mb-16">
              <p
                className="mb-7 inline-block rounded-full border border-orange-400/45 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-orange-400"
                style={saloodoCaseStudyInPageBadgeStyle}
              >
                Case study
              </p>
              <h2
                className="w-full max-w-none text-left text-white"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontSize: "clamp(40px, 6vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  fontWeight: 600,
                }}
              >
                <span className="block text-[rgba(255,255,255,0.96)]">
                  MEA Expansion – From Pilot to{" "}
                  <span
                    className="inline bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text font-bold text-transparent animate-gradient"
                    style={{ backgroundSize: "300%" }}
                  >
                    9 Countries
                  </span>{" "}
                  in 6 Months
                </span>
              </h2>
            </header>

            <div className="space-y-12 sm:space-y-14">
              {/* The Challenge */}
              <div className="space-y-4">
                <p
                  className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "rgb(251,146,60)" }}
                >
                  The challenge
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  By early 2019, Saloodo! had proven itself in Europe. DHL saw an opportunity in Middle East &amp; Africa,
                  but the business model needed fundamental adaptation. MEA had different dynamics — high smartphone
                  penetration but lower trust in purely digital platforms, different logistics infrastructure, different
                  payment norms, different regulations.
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  Could we scale Saloodo! globally while adapting to radically different markets? Or did every region
                  need a forked codebase, a separate team, and endless customisation?
                </p>
              </div>

              {/* The Approach */}
              <div className="space-y-4">
                <p
                  className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "rgb(251,146,60)" }}
                >
                  The approach
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  I went to Dubai to run stakeholder workshops with local DHL teams, potential customers, and carrier
                  partners. Design Thinking methods helped us figure out what actually needed to change versus what could
                  stay the same.
                </p>
                {/* The Solution with WhatsApp Mockup — all 3 approach paragraphs in left column */}
                <div className="flex flex-col gap-10 pt-2 lg:grid lg:grid-cols-[1fr_280px] lg:items-start lg:gap-12">
                  <div className="order-2 space-y-4 lg:order-1">
                    <p
                      className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                    >
                      The workshops surfaced the critical insights. MEA customers needed local DHL entity contracts, not just
                      marketplace transactions, to build trust. WhatsApp was the business platform — SMS and email
                      weren&apos;t enough. Some markets needed convoy shipments for high-value goods because of security
                      concerns. And most importantly: some markets needed a pure marketplace model, while others needed a
                      DHL-backed forwarder hybrid.
                    </p>
                    <p
                      className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                    >
                      From the insights, we designed UX flows, sitemaps, and a multi-tenant platform that could serve
                      multiple DHL business units with separate branding, workflows, and margin structures. Two distinct
                      business models on one infrastructure.
                    </p>
                    <p
                      className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                    >
                      Regional customisations — WhatsApp integration, local payment methods, convoy services — ran
                      without rebuilding the core.
                    </p>
                  </div>

                  {/* WhatsApp Mockup */}
                  <div className="order-1 lg:order-2">
                    <div className="relative mx-auto aspect-[297/590] w-full max-w-[240px] overflow-hidden lg:max-w-[280px]">
                      <Image
                        src="/images/saloodo/android-mockup-whattsapp 1.png"
                        alt="WhatsApp integration for Africa"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 240px, 280px"
                      />
                    </div>
                    <p
                      className="mt-3 text-center text-xs text-[var(--foreground)]/60"
                      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                    >
                      WhatsApp integration for Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Go-to-Market */}
              <div className="space-y-4">
                <p
                  className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "rgb(251,146,60)" }}
                >
                  Go-to-market
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  The rollout moved fast. UAE launched with Dubai as regional headquarters, then all six GCC countries
                  within six weeks. Egypt and Jordan followed, with 238 people at the Cairo kickoff. By November we
                  launched in South Africa — the first international digital freight platform on the continent, with over
                  150 at the Sandton event.
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  The numbers told the story. Nine countries in six months, faster than any European expansion. MEA alone
                  drove growth from 18,000 to 30,000 shippers.
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  Each additional country took days, not months, because the tenant architecture solved most of the
                  complexity once. Regional teams customised what mattered locally while core platform logic stayed
                  shared. One codebase. One design system. Multiple markets.
                </p>
              </div>

              {/* The Result */}
              <div className="space-y-4">
                <p
                  className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "rgb(251,146,60)" }}
                >
                  The result
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  MEA validated the global strategy. It proved Saloodo! could adapt to radically different markets
                  without breaking. By the time I transitioned to myDHLi in April 2020, the platform was running on four
                  continents — and the foundation we&apos;d built in those Dubai workshops was what made that possible.
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  The MEA rollout taught me something I&apos;ve taken into every role since. Scale isn&apos;t about
                  shipping the same product to more places. It&apos;s about designing infrastructure flexible enough to
                  meet each market on its own terms — trust dynamics, payment habits, communication channels — without
                  forking the codebase or breaking the team.
                </p>
                <p
                  className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  That&apos;s the work I want to keep doing. Building platforms that meet people where they actually are,
                  backed by the research and data that tell you where that is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPad Shipment List Image */}
      <section className="bg-[var(--background)] px-5 pt-8 pb-12 md:px-8 lg:px-12 lg:pt-10 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[1920/1280] w-full overflow-hidden">
            <div className="parallax-layer parallax-slow absolute inset-0">
              <Image
                src="/images/saloodo/ipad-shipmentlist.png"
                alt="Saloodo iPad shipment list view"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <WantTheFullStoryCTASection nextCaseLabel="Next case · OBI Next →" nextCaseHref="/design-portfolio-sh/obinext" />

      {/* LEARNING: ParallaxInitializer is a "use client" island that wires up the
          scroll listener driving --parallax-y on .parallax-layer elements.
          It runs inside useEffect — after hydration — so the server and client
          both render the .parallax-layer divs with no inline style, eliminating
          the hydration mismatch caused by the old inline <script> approach. */}
      <ParallaxInitializer />

      <Footer />
    </main>
  );
}
