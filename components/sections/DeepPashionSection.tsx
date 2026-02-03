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
    heading: "Authenticity Builds Trust",
    subheading: "UX Leadership",
    body: "Leading means translating vision into reality by understanding every aspect of the business first. When I transform user insights into product roadmaps, it's because I inspire courage across teams to go beyond the status quo and believe in user-centered culture. My approach connects UX metrics to business KPIs through conversations that help entire organizations see how empathy drives enterprise strategy.",
  },
  {
    heading: "Agility For Scale",
    subheading: "Entrepreneurship",
    body: "Five founded companies plus Fortune 500 consulting taught me that great digital culture works at any scale. Whether architecting enterprise solutions for major corporations or launching startup marketplaces, I've built across every platform. This dual perspective—startup speed with enterprise depth—shapes how I approach any organisational transformation.",
  },
  {
    heading: "Designing Influence",
    subheading: "Product Native",
    body: "Great products emerge from obsessive attention to feedback channels and deep understanding of business and customer needs. The symbiosis of UX and business metrics creates powerful synergy—driving profit, revenue, and market capitalization. This alignment transforms every interaction into an opportunity to define, measure, and govern successful UX across organizations, building trusted brands that transform markets.",
  },
];

export function DeepPashionSection() {
  return (
    <section className="bg-[var(--background)] px-6 py-16 lg:px-12 lg:py-20" aria-label="Core principles">
      <div className="mx-auto max-w-6xl">
        {/* LEARNING: Section heading uses consistent h2 style matching "82 Customers" */}
        {/* LEARNING: Outfit font with extra light weight (200) applied via inline style */}
        <h2 className="section-heading mb-12" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 200 }}>
          Deep Pashion
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-neutral-950/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-[var(--accent-yellow)] sm:text-2xl">{principle.heading}</h3>
              <p className="mt-2 text-sm font-medium text-[var(--accent-cyan)] sm:text-base">{principle.subheading}</p>
              <p className="mt-4 leading-[140%] text-[var(--foreground)]/90">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
