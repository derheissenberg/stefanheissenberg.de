/**
 * COMPONENT: CvAboutSection
 * PURPOSE: Two-column about section: prose on the left, pull-quote on the right.
 *
 * KEY CONCEPTS:
 * - Server Component — no interactivity
 * - Left column: two body paragraphs using .cs-body token
 * - Right column: gradient pull-quote (border-left gradient via inline style) + attribution
 * - Pull-quote uses border-image gradient technique — not supported via Tailwind, so inline style
 * - Section spacing: py-24 desktop, py-16 mobile (matches cv-web.html section.s)
 * - Collapses to single column below 900px
 */

import { CvSectionHead } from "@/components/cv/CvSectionHead";

export function CvAboutSection() {
  return (
    <section
      id="cv-about"
      className="py-24 max-[720px]:py-16"
      style={{ background: "var(--background)" }}
      aria-label="About"
    >
      <div className="mx-auto max-w-[1280px] px-8 max-[720px]:px-5">
        <CvSectionHead
          kicker="About"
          subtitle="The shape of fifteen years — and the work I want to keep doing."
          title="Designing for the "
          titleHighlight="long game."
        />

        {/* 2-col grid: prose left, pull-quote right */}
        <div className="grid grid-cols-2 gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-7">
          {/* Left: body paragraphs */}
          <div>
            <p className="cs-body text-[18px] leading-[1.6] text-white/85">
              The career chapter that shaped me most started at{" "}
              <em className="not-italic font-[500] text-[var(--accent-cyan-300)]">Saloodo!</em>, a DHL startup where I joined as the founding designer. We treated logistics like a tech product — rapid experiments, ML-powered recommendations, real data instead of opinions. That team taught me what good product work feels like when nobody&apos;s watching.
            </p>
            <p className="cs-body mt-[18px] text-[18px] leading-[1.6] text-white/85">
              From there I designed the initial concept for{" "}
              <em className="not-italic font-[500] text-[var(--accent-cyan-300)]">myDHLi</em> — DHL Global Forwarding&apos;s central B2B portal. What started as a concept became the platform I&apos;ve shaped for six years, reporting to the VP of Product, owning product tracks alongside leading the design team. I built research infrastructure where none existed and wired it into how we ship.
            </p>
          </div>

          {/* Right: pull-quote + attribution */}
          <div>
            <blockquote
              style={{
                borderLeft: "2px solid",
                // LEARNING: border-image gradient not supported in Tailwind; inline style required
                borderImage: "linear-gradient(180deg, #22d3ee, #3b82f6) 1",
                padding: "4px 0 4px 22px",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontStyle: "italic",
                fontSize: "22px",
                lineHeight: 1.4,
                color: "#fff",
                fontWeight: 400,
              }}
            >
              The shift was tangible — from building what stakeholders requested to building what data and users actually pointed to.
              <small
                className="mt-3 block text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] not-italic"
                style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
              >
                — On myDHLi research infrastructure
              </small>
            </blockquote>

            <p className="cs-body mt-6 text-[18px] leading-[1.6] text-white/85">
              I care about the full arc — not just the screen, but the system that made the screen possible. Strategy, research, delivery, and the team that ships it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
