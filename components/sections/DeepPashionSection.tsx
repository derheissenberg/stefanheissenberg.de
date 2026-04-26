/**
 * COMPONENT: DeepPashionSection
 * PURPOSE: Displays 3 core principle cards with headings, subheadings, and body text
 *
 * KEY CONCEPTS:
 * - Grid layout: 3 columns desktop, stacked mobile
 * - Each card: yellow heading, blue subheading, white body text
 * - Dark cards: subtle border, light backdrop blur (1.5px) + slightly higher fill opacity for perf vs heavy blur
 */

import AuroraAmber from "@/components/backgrounds/AuroraAmber";
import { GlowCard } from "@/components/ui/GlowCard";

const principles = [
  {
    heading: "Builder",
    subheading: "Discovery to Ship",
    body: "Founding designer, five ventures of my own. I love the full loop — discovery, design, build, validation, ship. When handoffs slow things down, let's skip them. Design and code are now so close together — you can really focus on going beyond the status quo. That's where the work gets interesting.",
  },
  {
    heading: "Team Builder",
    subheading: "Leading Distributed Teams",
    body: "6 years leading distributed teams taught me the framework that makes trust possible: clear ownership, fewer handoffs, people running their own tracks end to end. I stay close enough to coach, far enough to let people own the outcome. Good culture isn't a perk — it's what makes scale possible at any size.",
  },
  {
    heading: "Evidence Builder",
    subheading: "Building UX Research From Scratch",
    body: "Going deep on how a business actually works is where I get pulled in. How revenue flows, where the friction lives, what each team really cares about. Empathy for users isn't separate from that — it's what you build on top of understanding the whole product. That's when UX metrics and business metrics start shaping strategy.",
  },
];

export function DeepPashionSection() {
  return (
    <section className="relative bg-[var(--background)] px-6 py-20 lg:px-12 lg:py-28" aria-label="Core principles">
      <AuroraAmber />
      <div className="relative z-[1]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center lg:mb-20">
            <p
              className="mb-[22px] text-[13px] uppercase text-white/60 sm:text-[15px]"
              style={{
                fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
                fontWeight: 500,
                letterSpacing: "0.32em",
              }}
            >
              Deep Passion
            </p>
            <h2
              className="inline-block text-[38px] leading-[1.1] tracking-tight text-white sm:text-[46px] lg:text-[56px]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 700 }}
            >
              Three things I go deep on
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {principles.map((principle, index) => (
              <GlowCard
                key={index}
                className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-neutral-950/60 p-6 backdrop-blur-[1.5px]"
                glowColor="white"
              >
                <h3
                  className="text-xl font-bold text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  {principle.heading}
                </h3>
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
                <p
                  className="mt-4 text-[15px] leading-[1.6] text-white/[0.65]"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
                >
                  {principle.body}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
