/**
 * PAGE: OBI Next Case Study
 * ROUTE: /design-portfolio-sh/obinext
 * PURPOSE: Detailed case study page for OBI Next bathroom planner project
 *
 * NEXT.JS CONCEPTS:
 * - Nested route: app/design-portfolio-sh/obinext/page.tsx creates /design-portfolio-sh/obinext URL
 * - Server Component: Can fetch data, generate metadata
 * - Link component: For navigation back to portfolio
 *
 * DESIGN REFERENCE:
 * - Figma: https://www.figma.com/design/lAI569fJpr1ZlSthxro6QW/stefanheissenberg.de?node-id=289-150
 * - Typography harmonized with DHL and Saloodo pages (Outfit font, h2 styles, body text styles)
 *
 * RESPONSIVE BREAKPOINTS (from Figma):
 * - Desktop: 1280px (3-col grids, side-by-side layouts)
 * - Tablet: 800px (2-col grids, stacked layouts)
 * - Mobile: 393px (1-col, fully stacked)
 */

import type { Metadata } from "next";
import Image from "next/image";
import { CaseStudySectionHeading } from "@/components/case-studies/CaseStudySectionHeading";
import { CaseStudyLeadText } from "@/components/case-studies/CaseStudyLeadText";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { MetricCard } from "@/components/ui/MetricCard";
import { WantTheFullStoryCTASection } from "@/components/sections/WantTheFullStoryCTASection";
import { ParallaxInitializer } from "@/components/ui/ParallaxInitializer";
import { WarRoomSlider } from "@/components/case-studies/obinext/WarRoomSlider";

const baseUrl = "https://www.stefanheissenberg.de";
const ogImage = "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png";

/** Matches hero badge style (Kode Mono); blue palette for in-page elements */
const obinextInPageBadgeStyle = {
  fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
  fontWeight: 500,
  letterSpacing: "0.24em",
} as const;

export const metadata: Metadata = {
  title: "OBI Next UX Case Study | Design Portfolio | Stefan Heißenberg",
  description: "UX Strategy case study: 30 days from concept to MVP. UX and UI design for the bathroom planner that transformed how a €8.2B retailer serves customers.",
  alternates: {
    canonical: `${baseUrl}/design-portfolio-sh/obinext`,
  },
  robots: {
    index: false, // LEARNING: Exclude this case study page from search engine indexing
    follow: true, // LEARNING: Allow search engines to follow links (for link equity)
  },
  openGraph: {
    url: `${baseUrl}/design-portfolio-sh/obinext`,
    title: "OBI Next UX Case Study | Design Portfolio | Stefan Heißenberg",
    description: "UX Strategy case study: 30 days from concept to MVP. UX and UI design for the bathroom planner that transformed how a €8.2B retailer serves customers.",
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Stefan Heißenberg - Head of Experience Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBI Next UX Case Study | Design Portfolio | Stefan Heißenberg",
    description: "UX Strategy case study: 30 days concept to MVP. UX/UI design for bathroom planner, €8.2B retailer transformation.",
  },
};

const obinextArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Blueprint for Transformation: 30 days from concept to MVP",
  description:
    "UX Strategy case study: OBI Next bathroom planner. UX and UI design—30 days to MVP, +62.5% conversion lift, €3.5M+ business impact.",
  keywords: "OBI Next, BadPlaner, Bathroom Planner, UX Strategy, UX Design, UI Design, Design Leadership, MVP, Digital Transformation",
  author: { "@id": "https://www.stefanheissenberg.de/#person" },
  publisher: { "@id": "https://www.stefanheissenberg.de/#person" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.stefanheissenberg.de/design-portfolio-sh/obinext" },
  datePublished: "2020-01-01",
  dateModified: "2026-01-24",
};

const statistics = [
  { value: "+62.5%", label: "Conversion lift", color: "blue" as const },
  { value: "€3.5M+", label: "Business Impact in year one", color: "yellow" as const },
  { value: "2.5×", label: "Sales Productivity", color: "blue" as const },
];

const metaRows = [
  { label: "CLIENT", value: "OBI Group (via sunzinet)" },
  { label: "ROLE", value: "Senior UX Consultant" },
  { label: "YEAR", value: "2017 — 2018" },
  { label: "SCOPE", value: "UX Strategy · UI Design · Frontend" },
] as const;

/** What was handed to teams — same grid pattern as hero metadata, bullets as dd values */
const scalingTransferRows = [
  { label: "PLATFORM", value: "3D-configurator architecture" },
  { label: "ACQUISITION", value: "Lead magnet strategy" },
  { label: "REMARKETING", value: "Remarketing campaigns" },
  { label: "VALIDATION", value: "Validation framework" },
] as const;


export default function OBINextCaseStudyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obinextArticleJsonLd) }} />
      {/* Back Button */}
      {/* LEARNING: Uses ghost button variant - smaller size but keeps all animated gradient effects */}
      <section className="bg-[var(--background)] px-5 pt-8 md:px-8 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <Button variant="ghost" href="/design-portfolio-sh">
            ← Back to Portfolio
          </Button>
        </div>
      </section>

      {/* Hero Section - rebuilt to match DHL/Saloodo pattern */}
      <section
        className="bg-[var(--background)] px-6 pb-8 pt-3 md:pt-4 lg:px-12 lg:pb-12 lg:pt-5"
        aria-label="OBI Next Case Study Hero"
      >
        <div className="mx-auto w-full max-w-6xl text-left xl:max-w-7xl">
          {/* Multiline editorial h1 pattern */}
          <h1
            className="mb-7 w-full max-w-none text-left text-white"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontWeight: 600,
            }}
          >
            <span className="block text-[rgba(255,255,255,0.96)]">
              Blueprint for Transformation
            </span>
            <span
              className="gradient-text-safe mt-[0.06em] !block font-bold italic"
              style={{ paddingRight: "0.1em", backgroundSize: "300%" }}
            >
              30 Days to MVP
            </span>
          </h1>

          {/* Lead text rhythm */}
          <CaseStudyLeadText className="mt-8 mb-10">
            The bathroom planner that reshaped how a €8.2B retailer serves its customers.
            In 2017, OBI Group spun up OBI Next to prove corporate could move at startup speed.
            Today, the service runs across 640+ stores in 10 countries and serves 9+ million heyOBI users.
          </CaseStudyLeadText>

          {/* Metadata row structure */}
          <dl className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10">
            {metaRows.map((row) => (
              <div key={row.label}>
                <dt
                  className="text-[11px] uppercase text-white/50"
                  style={obinextInPageBadgeStyle}
                >
                  {row.label}
                </dt>
                <dd
                  className="mt-2 text-[15px] leading-snug text-white lg:text-base"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500 }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* KPI Cards — mt-10 mirrors CaseStudyLeadText mb-10 rhythm above metadata */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {statistics.map((stat, index) => (
              <MetricCard key={index} value={stat.value} label={stat.label} color={stat.color} delay={0} />
            ))}
          </div>
        </div>
      </section>

      {/* War Room: 30 Days to MVP — two-column layout mirroring myDHLi section 01 */}
      {/* LEARNING: Desktop shows text left + image right; mobile stacks image above text via order utilities */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* LEARNING: Same grid rhythm as myDHLi section 01:
              - flex-col on mobile (single column, image first)
              - 2-column CSS grid on lg+ with fixed 455px text column left */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[455px_1fr] lg:gap-16">

            {/* Text column — below image on mobile (order-2), left on desktop (order-1) */}
            <div className="order-2 space-y-5 lg:order-1">
              <CaseStudySectionHeading
                align="left"
                numberDash="01—"
                category="ORIGIN"
                detail="WAR ROOM"
              >
                30 Days to MVP
              </CaseStudySectionHeading>
              <div className="space-y-4">
                <p className="cs-body">
                  We set up in an empty loft close to our agency, assembling IKEA furniture while planning strategy.
                  I ran design thinking workshops with stakeholders across OBI, pulling customer pain points,
                  market research, and business goals into something we could act on.
                </p>
                <p className="cs-body">
                  The key insight: customers needed inspiration first, not complex planning tools.
                </p>
                <p className="cs-body">
                  By week two, concept and design were ready. I was sitting with our developers and product manager,
                  coding frontend implementations at 2am. I did whatever removed blockers — UX/UI, HTML/CSS/JavaScript,
                  legal content, measurement frameworks.
                </p>
                <p className="cs-body">
                  Day 30: we launched. Customers could browse and customise complete bathroom looks, schedule in-store
                  consultations, and receive planning documents. We didn&apos;t ship and hope. We analysed every click
                  and recorded sessions from day one.
                </p>
              </div>
            </div>

            {/* Image column — above text on mobile (order-1), right on desktop (order-2) */}
            {/* LEARNING: object-contain (not cover) so the full device mockup is always visible — no cropping */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[1000/902] w-full">
                <Image
                  src="/images/obinext/hero-obinext.png"
                  alt="OBI Next bathroom planner MVP shown on iMac and iPhone"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 3-Image Rail/Slider with arrow navigation — full-width below the two columns */}
          <WarRoomSlider />
        </div>
      </section>

      {/* Learning And Adaption Phase */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <CaseStudySectionHeading
            align="center"
            numberDash="02—"
            category="RESEARCH"
            detail="LEARNING PHASE"
          >
            Learning And Adaption Phase
          </CaseStudySectionHeading>

          {/* Content - Centered text block with cs-body rhythm */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="cs-body">
              We recruited participants who&apos;d recently renovated bathrooms and ran moderated sessions
              combining task-based testing, five-second tests, and unscripted exploration.
              The research showed us exactly where the experience broke down and what customers actually needed.
            </p>
            <p className="cs-body">
              We adapted immediately. Questions moved earlier in the journey. Inspiration filters were stripped
              back to the essentials. Planning documents personalised based on selections.
              Budget ranges recalibrated to match realistic project scopes.
            </p>
            <p className="cs-body">
              Version 2 launched weeks later. The numbers validated everything — conversion rates improved
              and consultation appointment bookings increased.
            </p>
          </div>

          {/* Planning Documents Image — contain, no parallax/clip to show full frame */}
          <div className="mt-12 flex justify-center">
            <div className="relative aspect-[2332/900] w-full max-w-[1000px]">
              <Image
                src="/images/obinext/teaser-badplanungsunterlagen.png"
                alt="Bathroom planning documents teaser"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE INSIGHT - pull-quote section in THE SHIFT style */}
      <section className="bg-[var(--background)] py-[84px] max-[900px]:py-[60px]">
        <div className="mx-auto max-w-[1160px] px-6 lg:px-8">
          <div className="py-6 text-center sm:py-8">
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={obinextInPageBadgeStyle}
            >
              — THE INSIGHT —
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
              {/* Split like editorial headlines: first line closes the setup; second line ties plain + gradient + punctuation in one fluent run */}
              <span className="block">
                &ldquo;Customers didn&apos;t need a planning tool.
              </span>
              <span className="mt-[0.06em] block">
                <span className="text-white">
                  They needed{" "}
                </span>
                <em
                  className="gradient-text-safe"
                  style={{
                    display: "inline-block",
                    fontStyle: "italic",
                    fontWeight: 700,
                    paddingRight: "0.25em",
                    backgroundSize: "300%",
                  }}
                >
                  inspiration that converts
                </em>
                <span className="text-white">.&rdquo;</span>
              </span>
            </blockquote>
            <p
              className="mx-auto mt-10 max-w-[620px] text-[15px] leading-[1.65] text-white/65 sm:mt-12 lg:mt-14"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              {/* PLACEHOLDER: Edit this attribution text as needed */}
              KEY FINDING · OBI NEXT USER RESEARCH
            </p>
          </div>
        </div>
      </section>

      {/* Scaling Section */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-6xl text-left xl:max-w-7xl">
          <CaseStudySectionHeading
            align="center"
            numberDash="03—"
            category="GROWTH"
            detail="SCALING"
          >
            From Pilot to Standard
          </CaseStudySectionHeading>

          {/* Content: merged paragraph + metadata dl + bullet summary */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="cs-body">
              Every change was A/B tested, so we could see exactly what improved performance.
              When OBI started directing organic traffic from their main website to our landing pages,
              the numbers held. We were ready to scale, and onboarded new teams with everything we&apos;d learned.
              The Kitchen Planner team had a proven blueprint — they didn&apos;t need to figure out what worked.
              They started from our validated approach and adapted it for their domain.
            </p>
          </div>

          {/* Transfer recap — duplicate of hero metadata row layout (full 6xl/7xl width) */}
          <div className="mx-auto mt-10 w-full max-w-6xl text-left xl:max-w-7xl">
            <dl className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10">
              {scalingTransferRows.map((row) => (
                <div key={`scaling-transfer-${row.label}`}>
                  <dt
                    className="text-[11px] uppercase text-white/50"
                    style={obinextInPageBadgeStyle}
                  >
                    {row.label}
                  </dt>
                  <dd
                    className="mt-2 text-[15px] leading-snug text-white lg:text-base"
                    style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500 }}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* MacBook Image with parallax */}
          <div className="mt-12 flex justify-center">
            <div className="relative aspect-[2166/1564] w-full max-w-[1156px] overflow-hidden">
              <div className="parallax-layer parallax-slow absolute inset-0">
                <Image
                  src="/images/obinext/Beratungstermin-vereinbaren-Step1-MacBook.png"
                  alt="Consultation booking step on MacBook"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1156px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint for Digital Innovation */}
      <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <CaseStudySectionHeading
            align="center"
            numberDash="04—"
            category="IMPACT"
            detail="TRANSFORMATION"
          >
            Blueprint for Digital Innovation
          </CaseStudySectionHeading>

          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="cs-body">
              What started as a 6-month pilot became the methodology for OBI&apos;s digital future.
              It proved corporate could move at startup speed — and that proof changed everything.
            </p>
            <p className="cs-body">
              Within 18 months, OBI Next launched the Kitchen Planner and Garden Planner on the same methodology.
              The bathroom planner expanded from Austria to Germany, then across Europe, backed by{" "}
              <a
                href="https://www.baumarktmanager.de/obi-startet-grossangelegte-badplaner-kampagne-05082019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-[#1ed0f3] transition-colors"
              >
                big marketing campaigns
              </a>
              . All three services now run 14 configurators across 300+ stores.
            </p>
            <p className="cs-body">
              Today, OBI Group generates €8.2 billion in revenue across 640+ stores in 10 countries.
              Half of German customers visit the website before walking into a store.
              Project experiences — not just product sales — serve 9+ million users and define the brand.
            </p>
            <p className="cs-body">
              The transformation is still compounding.
            </p>
            <p className="cs-body">
              This project showed me where I belong — product-side, building systems that change how companies innovate,
              not just delivering agency projects that end when the interesting journey starts.
            </p>
          </div>

          {/* Closing Image — contain, no parallax/clip to show full device spread */}
          <div className="mt-12 flex justify-center pb-8">
            <div className="relative aspect-[1920/1201] w-full max-w-[1160px]">
              <Image
                src="/images/obinext/obi-next-project-ending.png"
                alt="OBI Next project showcase with multiple device mockups"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1160px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - links to myDHLi case study */}
      <WantTheFullStoryCTASection
        nextCaseLabel="Next case · myDHLi →"
        nextCaseHref="/design-portfolio-sh/dhl"
      />

      {/* Parallax Initializer - handles scroll-driven parallax after hydration */}
      <ParallaxInitializer />

      <Footer />
    </main>
  );
}
