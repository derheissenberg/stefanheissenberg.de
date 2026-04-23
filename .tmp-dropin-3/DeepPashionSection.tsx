/**
 * COMPONENT: DeepPashionSection
 * PURPOSE: Three core principle cards — Builder, Team Builder, Evidence Builder
 *
 * KEY CONCEPTS:
 * - Centered header: SectionEyebrow (reusable) + optional Outfit bold headline
 * - Subhead line intentionally omitted
 * - Grid layout: 3 columns desktop, stacked mobile
 * - Each card: white heading, strong grey subheading, soft grey body
 * - Ambient AuroraAmber glow behind the content
 */

import AuroraAmber from "@/components/backgrounds/AuroraAmber";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const principles = [
  {
    heading: "Building",
    subheading: "Discovery to Ship",
    body: "Founding designer, five ventures of my own. I love the full loop — discovery, design, build, validation, ship. When handoffs slow things down, let's skip them. Design and code are now so close together — you can really focus on going beyond the status quo. That's where the work gets interesting.",
  },
  {
    heading: "Team Building",
    subheading: "Leading Distributed Teams",
    body: "6 years leading distributed teams taught me the framework that makes trust possible: clear ownership, fewer handoffs, people running their own tracks end to end. I stay close enough to coach, far enough to let people own the outcome. Good culture isn't a perk — it's what makes scale possible at any size.",
  },
  {
    heading: "Evidence Building",
    subheading: "Building UX Research From Scratch",
    body: "Going deep on how a business actually works is where I get pulled in. How revenue flows, where the friction lives, what each team really cares about. Empathy for users isn't separate from that — it's what you build on top of understanding the whole product. That's when UX metrics and business metrics start shaping strategy.",
  },
];

export function DeepPashionSection() {
  return (
    <section
      className="relative bg-[var(--background)] px-6 py-20 lg:px-12 lg:py-28"
      aria-label="Core principles"
    >
      {/* LEARNING: AuroraAmber is pointer-events:none and z-index:0 — ambient only */}
      <AuroraAmber />

      <div className="relative z-[1] mx-auto max-w-6xl">
        {/* HEADER — centered: reusable eyebrow + bold Outfit headline */}
        <div className="mb-16 text-center lg:mb-20">
          {/* LEARNING: Eyebrow is the same <SectionEyebrow /> used across all sections,
              with or without a headline beneath it. */}
          <SectionEyebrow spacingClassName="mb-[22px]">Deep Passion</SectionEyebrow>

          {/* LEARNING: Headline uses Outfit 700 (bold) — heavy, confident, centered */}
          {/* LEARNING: Tight tracking (-0.02em) at large sizes keeps the headline punchy */}
          <h2
            className="inline-block text-[38px] leading-[1.1] tracking-tight text-white sm:text-[46px] lg:text-[56px]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 700 }}
          >
            Three things I go deep on
          </h2>
        </div>

        {/* CARDS — 3 col desktop, 2 col tablet, stacked mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-neutral-950/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[rgba(255,255,255,0.18)]"
            >
              {/* LEARNING: Card heading — Outfit 700, 20 → 24px, pure white */}
              <h3
                className="text-xl font-bold text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                {principle.heading}
              </h3>

              {/* LEARNING: Subheading — Outfit 600, 16px, white/78% for strong secondary read */}
              <p
                className="mt-2 text-[16px] leading-[1.35] text-white/[0.78]"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                }}
              >
                {principle.subheading}
              </p>

              {/* LEARNING: Body — Outfit 400, 15px, soft grey (65%) for comfortable reading */}
              <p
                className="mt-4 text-[15px] leading-[1.6] text-white/[0.65]"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
              >
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
