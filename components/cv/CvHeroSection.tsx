/**
 * COMPONENT: CvHeroSection
 * PURPOSE: Full-height hero section for the CV page with portrait, headline, lede, CTAs, meta-row.
 *
 * KEY CONCEPTS:
 * - Server Component — no client JS needed
 * - Portrait image reuses existing /public/images/ hero portrait
 * - Left-to-right gradient overlay (hero-fade) ensures text legibility over portrait
 * - h1 = Stefan (Outfit 200) + Heißenberg (gradient italic 800)
 * - Role kicker uses .type-kicker-wide + .gradient-text-safe
 * - Meta-row: Kode Mono uppercase — location, languages, availability
 * - Responsive: portrait fades on mobile, text stays readable
 * - min-height 760px desktop, auto on mobile to prevent overflow
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CvHeroSection() {
  return (
    <section
      id="cv-top"
      className="relative overflow-hidden"
      style={{ minHeight: "760px", background: "var(--background)" }}
      aria-label="Introduction"
    >
      {/* Portrait background — right-aligned */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1600px]" aria-hidden>
        <Image
          src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png"
          alt=""
          fill
          className="object-contain object-right-bottom"
          sizes="100vw"
          priority
        />
      </div>

      {/* Left-to-right gradient fade — ensures text legibility */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.82) 28%, rgba(8,8,8,0.46) 48%, rgba(8,8,8,0) 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-[1600px] items-center px-10 py-20 max-[1024px]:min-h-[760px] max-[720px]:px-5 max-[720px]:py-16 lg:h-[760px] lg:py-0 lg:pl-16"
      >
        <div className="w-full max-w-[720px]">
          {/* H1 — two-line: Stefan (light) + Heißenberg (gradient bold) */}
          <h1
            style={{ lineHeight: 0.92, letterSpacing: "-0.045em", margin: 0 }}
          >
            <span
              className="block text-white"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 200,
                fontSize: "clamp(64px, 11vw, 144px)",
              }}
            >
              Stefan
            </span>
            <span
              className="block gradient-text-safe"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "clamp(64px, 11vw, 144px)",
                lineHeight: 0.98,
                paddingRight: "0.12em",
                backgroundSize: "300%",
                display: "block",
              }}
            >
              Heißenberg
            </span>
          </h1>

          {/* Role kicker */}
          <p className="mt-4 text-[13px]">
            <span
              className="type-kicker-wide gradient-text-safe"
              style={{
                backgroundSize: "300%",
                display: "inline",
                fontSize: "13px",
                letterSpacing: "0.32em",
              }}
            >
              HEAD OF DESIGN
            </span>
          </p>

          {/* Lede */}
          <p
            className="mt-6 max-w-[540px] text-[18px] leading-[1.55] text-white/82"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
          >
            Senior product &amp; design leader with{" "}
            <em className="not-italic font-[500] text-[var(--accent-cyan-300)]">
              fifteen years
            </em>{" "}
            across agency, consulting, startup, and enterprise. Currently Head of Design at DHL Global Forwarding, shaping{" "}
            <em className="not-italic font-[500] text-[var(--accent-cyan-300)]">
              myDHLi
            </em>{" "}
            — the B2B portal moving €336B in cargo annually.
          </p>

          {/* CTA row */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="primary" href="mailto:hallo@stefanheissenberg.de">
              Get in touch
            </Button>
            <Button variant="outline" href="/design-portfolio-sh">
              View portfolio
            </Button>
          </div>

          {/* Meta-row: location · languages · availability */}
          <div
            className="mt-9 flex flex-wrap gap-x-9 gap-y-2 text-[11px] uppercase text-[var(--muted)] tracking-[0.22em]"
            style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
          >
            <span>
              <b className="text-white font-[600]">KÖLN, DE</b>
            </span>
            <span>
              <b className="text-white font-[600]">EN · DE</b>
            </span>
            <span>
              AVAILABLE IN{" "}
              <b className="text-white font-[600]">10–12 DAYS</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
