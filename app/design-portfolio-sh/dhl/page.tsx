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
import { CaseStudyLogoStack } from "@/components/case-studies/CaseStudyLogoStack";
import { CaseStudySectionHeading } from "@/components/case-studies/CaseStudySectionHeading";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { DHLCaseStudyHero } from "@/components/case-studies/dhl/DHLCaseStudyHero";
import { DHLCaseStudySection } from "@/components/case-studies/dhl/DHLCaseStudySection";

const baseUrl = "https://www.stefanheissenberg.de";
const ogImage = "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png";

/** Matches DHLCaseStudyHero badge (Kode Mono); orange palette for in-page case study card */
const dhlCaseStudyInPageBadgeStyle = {
  fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
  fontWeight: 500,
  letterSpacing: "0.24em",
} as const;

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
  {
    src: "/images/mydhli/uxresearch/adobe-analytics.svg",
    alt: "Adobe Analytics",
    width: 168,
    height: 28,
  },
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
              <CaseStudySectionHeading
                align="left"
                numberDash="01—"
                category="ORIGIN"
                detail="2018"
              >
                The startup chapter inside a logistics giant
              </CaseStudySectionHeading>
              <div className="space-y-4">
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                I joined DHL through Saloodo!, a digital marketplace startup — independent, DHL-funded, not a department inside the group. I came in as the founding designer.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The team treated logistics like a tech product — rapid experimentation, ML-powered recommendations, and an honest focus on conversion metrics.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                We were DHL's "digital speedboat" — small enough to move fast, protected enough to take risks. That positioning mattered when DHL Global Forwarding needed to reimagine its B2B customer experience.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Outside our walls the market was moving fast. Flexport raised $1B. Amazon Freight cut prices by 30%. Uber Freight scaled globally. The $800B logistics industry was being digitised — and DHL needed to be in the race.
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
              <CaseStudySectionHeading
                align="left"
                numberDash="02—"
                category="CONCEPT"
                detail="Late 2018"
              >
                From Concept to Global Platform
              </CaseStudySectionHeading>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Late 2018
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                While I was still at Saloodo!, DHL Global Forwarding asked me to sketch what a unified B2B portal could look like — one place to replace the dozens of disconnected apps customers were navigating.
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Vision
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                One platform. 360° shipment visibility across air, ocean, road, and rail. Available 24/7 anywhere in the world.
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Reality
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Not really a design problem. An organisational one. Decoupling legacy systems. Introducing agile to teams that had only ever shipped waterfall. Convincing stakeholders that dozens of apps had to become one customer experience — and meaning it.
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

      {/* May 2020: Global Launch — collage first, then heading + narrative + customer stack */}
      <section className="bg-[var(--background)] px-6 pt-8 pb-16 lg:px-12 lg:pt-10 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[1280/720] w-full overflow-hidden">
            <Image
              src="/images/mydhli/Dashboard-collage.png"
              alt="myDHLi Dashboard shown on iMac, iPad, and iPhone demonstrating responsive design"
              fill
              className="object-contain"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
            />
          </div>

          <div className="mt-6 sm:mt-8">
            <CaseStudySectionHeading
              align="center"
              numberDash="03—"
              category="LAUNCH"
              detail="MAY 2020"
            >
              Shipped in four weeks — across five continents
            </CaseStudySectionHeading>
          </div>

          {/* Text content: centered column, block (left-aligned) body */}
          <p className="mx-auto max-w-[820px] text-left text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
          April 2020 I took over as Head of Experience Design for myDHLi. Four weeks later we shipped to production — Quote + Book, Follow + Share, real-time tracking, analytics dashboards, single sign-on — across five continents while the world was locked down.
          COVID didn't stop the rollout. It made the case for it. Customers who had relied on phone calls and emails suddenly needed a self-service portal that worked. We had one ready.
          </p>
          
          <CaseStudyLogoStack className="mt-10 sm:mt-12" label="Enterprise customers" logos={customerLogos} />
        </div>
      </section>

      {/* UX Research and Analytics */}
      {/* LEARNING: Custom structure - text at 820px, logos at 1600px max-width for single line display */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1600px] text-center">
          <CaseStudySectionHeading
            align="center"
            titleSize="large"
            numberDash="04—"
            category="RESEARCH"
            detail="UX RESEARCH AND ANALYTICS"
          >
            Building the research foundation from scratch
          </CaseStudySectionHeading>
          <div className="mx-auto max-w-[820px] space-y-4 text-left">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            When I arrived at myDHLi, the research infrastructure didn't exist. Decisions were intuition-led. Stakeholders had strong opinions and we had no way to test them.
So I built the foundation — UserTesting, Hotjar, Adobe and Google Analytics, custom KPI dashboards wired into the product teams. Then I put research rhythms inside the sprint cycle, so the work stayed close to the evidence.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            The shift was tangible. We stopped building what stakeholders requested and started building what data and users actually pointed to. Stakeholder collaboration changed with it. Discussions now ran on facts and results were measurable.
            We added more channels to the real voice of the customer — NPS, regular interviews, frequent user tests — reported the findings openly, and trained teams to read research and interpret data themselves. The work became a shared conversation instead of a negotiation.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            We added more channels to the real voice of the customer — NPS, regular interviews, frequent user tests — reported the findings openly, and trained teams to read research and interpret data themselves. The work became a shared conversation instead of a negotiation.
            </p>
          </div>
          
          <CaseStudyLogoStack className="mt-10 sm:mt-12" label="Research & analytics stack" logos={uxResearchLogos} />
        </div>
      </section>

      {/* THE SHIFT — centered manifesto (matches HTML redesign: kode label, Outfit blockquote, gradient em) */}
      <section className="bg-[var(--background)] py-[120px] max-[900px]:py-[84px]">
        <div className="mx-auto max-w-[1160px] px-6 lg:px-8">
          <div className="py-6 text-center sm:py-8">
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={dhlCaseStudyInPageBadgeStyle}
            >
              — THE SHIFT —
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
              &ldquo;We stopped building what stakeholders requested and started building what{" "}
              <em
                className="gradient-text-safe"
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  paddingRight: "0.08em",
                  marginRight: "0.01em",
                  backgroundSize: "300%",
                }}
              >
                data and users
              </em>{" "}
              actually pointed to.&rdquo;
            </blockquote>
            <p
              className="mx-auto mt-10 max-w-[620px] text-[15px] leading-[1.65] text-white/65 sm:mt-12 lg:mt-14"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              MYDHLI · UX RESEARCH &amp; ANALYTICS
            </p>
          </div>
        </div>
      </section>

      {/* User-Centered Design Culture */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <CaseStudySectionHeading
            align="center"
            titleSize="large"
            numberDash="05—"
            category="CULTURE"
            detail="USER-CENTERED DESIGN CULTURE"
          >
            Making the user the starting point
          </CaseStudySectionHeading>
          
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
                Infrastructure was only half of it. The product culture had grown stakeholder-first, not customer-first — teams optimised for internal requests because that's what got rewarded.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                So we made the user the starting point. Designers embedded in cross-functional squads. User testing became standard before major releases. A shared repository made research findings accessible to anyone who needed them. And the workshops — research methods, data interpretation — kept the muscle alive across product, engineering, and business teams.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The shift was tangible. Inside the product org I work with, user-centred thinking became the default starting point for decisions — not the checkpoint near the end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DHL Group's 1st Scaled Design System */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <CaseStudySectionHeading
            align="center"
            titleSize="large"
            numberDash="06—"
            category="SYSTEM"
            detail="2019 — 2024 · DHL Group&apos;s 1st Scaled Design System"
          >
            <span className="block">When the components became the guideline</span>
          </CaseStudySectionHeading>
          
          {/* LEARNING: Text left, tall design system image right. Breaks at md (768px) for longer side-by-side */}
          <div className="flex flex-col gap-10 md:grid md:grid-cols-[1fr_320px] md:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="order-2 max-w-[820px] space-y-6 md:order-1">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Challenge
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  DHL had fragments. Guidelines updated every few years, libraries that competed across divisions (myDHLi, dhl.com, legacy portals), no shared technical base. Every team rebuilt the same buttons from scratch.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  5-Year Strategic Journey (2019-2024)
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  We audited the major portals, documenting components and use cases. Rather than replacing everything, we built the foundation — aligning the myDHLi library with existing tech stacks while creating space to harmonise the design.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Cross-division collaboration merged our library with the primary system on dhl.com. We survived three tool transitions (Abstract → Sketch Cloud → Figma) without losing consistency. React components got wired to design tokens, so the system was actually alive — not a PDF.
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  Representing multiple business units on a DHL Group-wide committee, we helped define the standards for what came next.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Shift
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  We reversed the model. Guidelines used to describe components. Now the components are the guideline — living frontend with connected Figma libraries as the source of truth. No more PDFs.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  The Impact
                </p>
                <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                  A scaled design system established across leading business units inside DHL. Faster development. Consistent experiences. The foundation everything new gets built on.
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
          <CaseStudySectionHeading
            align="center"
            titleSize="large"
            numberDash="07—"
            category="Team"
            detail="Design OPS"
          >
            Three to five times more projects with roughly the same team
          </CaseStudySectionHeading>
          <div className="mx-auto max-w-[820px] space-y-4 text-left">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              myDHLi grew. 22,000+ enterprise customers, more product tracks, more stakeholders. The design organisation had to grow with it without breaking what made it good. Headcount was the easy part. The harder part was building the frameworks around it: documentation as the default, async-first across EMEA time zones, dual-track agile so discovery and delivery ran in parallel, and governance that let designers from other divisions contribute to the system without breaking it.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              The Figma move was the turning point. It became the home for the design system and the open playground for sharing — the invitation other teams needed to contribute. The internal design community started talking across divisions in a way that wasn't possible before.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Three to five times more projects with roughly the same team size. That's what the infrastructure was built to do.
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

      {/* Case Study: 91% faster — card + glow; gradients match MetricCard yellow (Tailwind + animate-gradient) */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="relative mx-auto max-w-[904px] overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-950/85 px-6 py-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-[6px] sm:px-10 sm:py-14 md:px-12 md:py-16 lg:rounded-3xl lg:py-20">
          {/* Amber / orange radial wash behind hero metric */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 aspect-[5/4] w-[min(120%,760px)] -translate-x-1/2 rounded-full opacity-90 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(249,115,22,0.38) 0%, rgba(234,88,12,0.14) 38%, transparent 72%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-8 right-[-10%] h-64 w-64 rounded-full opacity-35 blur-[64px]"
            style={{
              background: "radial-gradient(circle at center, rgba(250,204,21,0.35) 0%, transparent 65%)",
            }}
            aria-hidden
          />
          <div className="relative z-10">
            <header className="mb-14 text-left sm:mb-16">
              <p
                className="mb-7 inline-block rounded-full border border-orange-400/45 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-orange-400"
                style={dhlCaseStudyInPageBadgeStyle}
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
                  <span
                    className="inline bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text font-bold text-transparent animate-gradient"
                    style={{ backgroundSize: "300%" }}
                  >
                    91%
                  </span>{" "}
                  Faster Onboarding
                </span>
              </h2>
            </header>

            <div className="space-y-12 sm:space-y-14">
              <div className="space-y-4">
              <p
                className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                The challenge
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                The portal had always meant to serve the smaller customers. The economics had never allowed it.
                Operational costs made one-time shipments unprofitable, and a 10–12 day onboarding process was too
                slow for companies with lower shipment volumes. The enterprise accounts — the ones with contracts big
                enough to justify every extra day of setup — were covered. Everyone else was losing interest before they
                got started.
              </p>
              </div>

              <div className="space-y-4">
              <p
                className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                The project
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                A cross-functional initiative for the US market opened the window. I came in as lead designer to
                rebuild the online sales experience — remove friction, accelerate onboarding, and make smaller accounts
                economically viable.
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                Process mapping surfaced the real bottleneck. It wasn&apos;t compliance itself — it was the layers of
                review and approval between departments that compliance had been blamed for. That insight reframed the
                project.
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                Workshops with operations and sales rebuilt the workflow. Decision-making consolidated. Redundant
                approvals removed. Clear data-driven criteria replacing subjective gates. Onboarding dropped from 10–12
                days to 3–4 days — before a single new feature shipped. Real prospects validated the model, the KPIs
                got reported back, and the numbers gave us room to keep pushing.
              </p>
              </div>

              <div className="space-y-4">
              <p
                className="text-case-study-label text-xs font-bold uppercase tracking-[0.16em] sm:text-sm"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                The result
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                Full digital enablement brought setup times to under 24 hours.
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                A self-registration concept had been sitting in my drawer for years — instant booking access,
                automated account creation, compliance running in the background. It hadn&apos;t moved because the
                business case had never been loud enough to reach the top of the roadmap. The 91% reduction made it
                loud. Stakeholder support arrived. Priority shifted. The concept moved from drawer to foundation inside the
                same project.
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                Senior leadership adopted the new process as the blueprint for other DHL markets. A $2.5 billion
                segment we had never properly served opened up. The smaller customers landed on the roadmap with the
                same weight as the enterprise ones.
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                What I&apos;m proud of in this one isn&apos;t the 91%. It&apos;s that the small shippers — the founders,
                the teams without an account manager on speed dial — finally got the same digital service the enterprise
                accounts took for granted. That&apos;s the work I&apos;m really passionate about.
              </p>
              <p
                className="text-lg leading-[160%] text-[var(--foreground)]/90 lg:text-xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                Standing in for the users without a stakeholder voice, and backing them with the research and data that
                give them weight in the room. Building momentum patiently enough that when the window opens, the team is
                ready to take the shot.
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-[904px] px-0 sm:mt-14">
          <div className="relative aspect-[2000/1703] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/mydhli/welcome-ipad.png"
              alt="myDHLi Welcome screen on iPad"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 820px"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
