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
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/ui/MetricCard";

export const metadata: Metadata = {
  title: "OBI Next Case Study | Design Portfolio | Stefan Heißenberg",
  description: "Blueprint for Transformation: 30 days from concept to MVP. The bathroom planner that changed how a €8.2B company serves customers.",
  robots: {
    index: false, // LEARNING: Exclude this case study page from search engine indexing
    follow: true, // LEARNING: Allow search engines to follow links (for link equity)
  },
};

export default function OBINextCaseStudyPage() {
  return (
    <main>
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
      <section className="bg-[var(--background)] px-5 md:px-8 lg:px-12" aria-label="OBI Next Case Study Hero">
        <div className="mx-auto max-w-6xl">
          {/* Main Title */}
          {/* LEARNING: Uses h1 with semibold (600) weight - prominent case study title */}
          <h1
            className="mx-auto mb-4 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: "150%",
            }}
          >
            Blueprint for Transformation
          </h1>
          
          {/* Subtitle */}
          <p
            className="mx-auto mb-8 max-w-[820px] text-center text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            30 days from concept to MVP. The bathroom planner that changed how a €8.2B company serves customers.
          </p>

          {/* Hero Image - iMac + iPhone Mockup */}
          <div className="relative mx-auto aspect-[1000/902] max-w-[1000px] overflow-hidden">
            <Image
              src="/images/obinext/hero-obinext.png"
              alt="OBI Next bathroom planner MVP shown on iMac and iPhone"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-[var(--background)] px-5 py-8 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[820px] space-y-4">
          <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            <span className="font-bold text-white">MVP</span>
            <br />
            In 2017, OBI Group created OBI Next to prove corporate could move at startup speed. I joined as Senior UX Designer to launch the bathroom planner (BadPlaner)—the digital service that would become the blueprint for OBI's complete transformation.
          </p>
          <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            <span className="font-bold text-white">Today</span>
            <br />
            Rolled out globally across 640+ stores in 10 countries, serving 9+ million heyOBI users. Our methodology became OBI's standard for digital innovation and has been adopted across Europe.
          </p>
        </div>
      </section>

      {/* KPI Cards Section */}
      {/* LEARNING: 3-column grid on desktop, responsive to 1-column on mobile */}
      {/* LEARNING: Synchronized animation - all cards animate simultaneously (no delay) */}
      <section className="bg-[var(--background)] px-5 py-10 md:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <MetricCard value="+62.5%" label="Conversion lift" color="blue" delay={0} />
            <MetricCard value="€3.5M+" label="Business Impact in year one" color="yellow" delay={0} />
            <MetricCard value="2.5×" label="Sales Productivity" color="blue" delay={0} />
          </div>
        </div>
      </section>

      {/* War Room: 30 Days to MVP */}
      {/* LEARNING: Figma-matched layout with max-w-[820px] centered content */}
      <section className="bg-[var(--background)] px-5 py-10 md:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-[820px]">
          {/* Row 1: Title + Text | Workshop Image */}
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Left: Title + Text */}
            <div className="order-2 lg:order-1">
              <h2
                className="mb-6 text-2xl text-white sm:text-3xl"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: "160%",
                }}
              >
                War Room: 30 Days to MVP
              </h2>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                We set up in an empty loft close to our agency—assembling IKEA furniture while planning strategy. I facilitated design thinking workshops with stakeholders across OBI, synthesising customer pain points, market research, and business goals. The key insight: customers need inspiration first, not complex planning tools.
              </p>
            </div>
            
            {/* Right: Workshop Whiteboard Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[974/1108] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/obinext/kick-off-workshop.png"
                  alt="Kick-off workshop whiteboard with project goals and strategy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 410px"
                />
              </div>
            </div>
          </div>
          
          {/* Row 2: Images | Development Text */}
          <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Left: Stacked Images */}
            <div className="order-1 space-y-4">
              {/* Tracking Concept Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/obinext/tracking-concept.png"
                  alt="Analytics tracking and measurement concept"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 410px"
                />
              </div>
              
              {/* UX Lab / Loft Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/obinext/ux-labor-interviews-moderated-usertests.png"
                  alt="UX lab and meeting room setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 410px"
                />
              </div>
            </div>
            
            {/* Right: Development Text */}
            <div className="order-2 space-y-4 lg:pt-0">
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                By week two, concept and design was ready and I was sitting with our developers and product manager, coding frontend implementations at 2am.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                I did whatever removed blockers: UX/UI/HTML/CSS/JavaScript, legal content, measurement frameworks. You do what needs doing to ship, then you prove it works with data.
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Day 30: We launched. Customers could browse and customise complete bathroom looks, schedule in-store consultations, and receive planning documents. But we didn't just ship and hope: we analysed every click and recorded sessions from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning And Adaption Phase */}
      <section className="bg-[var(--background)] px-5 py-10 md:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl">
          {/* Section Header - Centered */}
          <h2
            className="mx-auto mb-8 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: "150%",
            }}
          >
            Learning And Adaption Phase
          </h2>
          
          {/* Content - Centered text block */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              We recruited participants who'd recently renovated bathrooms and ran moderated sessions combining task-based testing, five-second tests, and unscripted exploration. The research showed us exactly where the experience broke down and what customers actually needed.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              We adapted immediately. Questions moved earlier in the journey. Inspiration filters simplified to essentials. New planning documents personalised based on selections. Budget ranges recalibrated to match realistic project scopes.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Version 2 launched just weeks later. The numbers validated everything. Conversion rates improved and consultation appointment bookings increased.
            </p>
          </div>
          
          {/* Planning Documents Image */}
          <div className="mt-8 flex justify-center">
            <div className="relative aspect-[2332/900] w-full max-w-[1000px] overflow-hidden rounded-lg">
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

      {/* Scaling Section */}
      <section className="bg-[var(--background)] px-5 py-10 md:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl">
          {/* Content with bullet list */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Each change was A/B tested so we could see exactly what improved performance. When OBI started directing organic traffic from their main website to our landing pages, the performance held strong. We were ready to scale, onboarded new teams with everything we'd learned:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              <li>3D-configurator architecture</li>
              <li>Lead magnet strategy</li>
              <li>Remarketing campaigns</li>
              <li>Validation framework</li>
            </ul>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              The Kitchen Planner team had a proven blueprint. They didn't need to figure out what worked; they could start from our validated approach and adapt it for their domain.
            </p>
          </div>
          
          {/* MacBook Image */}
          <div className="mt-8 flex justify-center">
            <div className="relative aspect-[2166/1564] w-full max-w-[1156px] overflow-hidden">
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
      </section>

      {/* Blueprint for Digital Innovation */}
      <section className="bg-[var(--background)] px-5 py-10 md:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl">
          {/* Section Header - Centered */}
          <h2
            className="mx-auto mb-8 max-w-[820px] text-center text-2xl text-white sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: "150%",
            }}
          >
            Blueprint for Digital Innovation
          </h2>
          
          {/* Content */}
          <div className="mx-auto max-w-[820px] space-y-4">
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              What started as a 6-month pilot became the methodology for OBI's digital future. It proved corporate could move at startup speed—and that proof changed everything.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Within 18 months, OBI Next launched the Kitchen Planner and Garden Planner using our methodology. My bathroom planner expanded from Austria to Germany–then across Europe, backed with{" "}
              <a 
                href="https://www.baumarktmanager.de/obi-startet-grossangelegte-badplaner-kampagne-05082019" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline hover:text-[#1ed0f3] transition-colors"
              >
                big marketing campaigns
              </a>
              . All three services now run 14 configurators serving 300+ stores.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              Today, OBI Group generates €8.2 billion in revenue across 640+ stores in 10 countries. 50% of German customers visit the website before stores. Project experiences—not just product sales—serve 9+ million users and define the brand.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              The transformation is still compounding.
            </p>
            <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
              This project showed me where I belong: product-side, building systems that change how companies innovate, not just delivering agency projects that end when the interesting journey starts.
            </p>
          </div>
          
          {/* Closing Image */}
          <div className="mt-8 flex justify-center pb-8">
            <div className="relative aspect-[1920/1201] w-full max-w-[1160px] overflow-hidden">
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
    </main>
  );
}
