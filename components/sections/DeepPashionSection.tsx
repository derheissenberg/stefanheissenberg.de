/**
 * COMPONENT: DeepPashionSection
 * PURPOSE: Displays 3 core principle cards with headings, subheadings, and body text
 *
 * KEY CONCEPTS:
 * - Grid layout: 3 columns desktop, stacked mobile
 * - Each card: yellow heading, blue subheading, white body text
 * - Dark cards with subtle border and backdrop blur for depth
 */

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
    <section className="bg-[var(--background)] px-6 py-16 lg:px-12 lg:py-20" aria-label="Core principles">
      <div className="mx-auto max-w-6xl">
        {/* LEARNING: Section heading uses consistent h2 style matching "82 Customers" */}
        {/* LEARNING: Outfit font with extra light weight (200) applied via inline style */}
        <h2 className="section-heading mb-12" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 200 }}>
          Deep Passion
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-neutral-950/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-[var(--accent-yellow)] sm:text-2xl">{principle.heading}</h3>
              {/* LEARNING: Increased mobile font size from text-sm (14px) to text-[17px] (~21% increase) for better readability */}
              <p className="mt-2 text-[17px] font-medium text-[var(--accent-cyan)] sm:text-base">{principle.subheading}</p>
              {/* LEARNING: Font style matching AlohaSection paragraphs - text-lg (18px) for consistent body text sizing */}
              <p className="mt-4 text-lg leading-[140%] text-[var(--foreground)]/90">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
