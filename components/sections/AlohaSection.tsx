/**
 * COMPONENT: AlohaSection
 * PURPOSE: Personal introduction section with heading, paragraphs, and contact CTA
 *
 * KEY CONCEPTS:
 * - Centered, max-width content for comfortable reading
 * - Three paragraphs with proper spacing
 * - Contact links (LinkedIn, email) styled as text links
 */

export function AlohaSection() {
  return (
    <section className="bg-[var(--background)] px-6 pt-16 pb-[100px] lg:px-12 lg:pt-20" aria-label="About me">
      <div className="mx-auto max-w-3xl">
        {/* LEARNING: Cherry Bomb font applied to "Aloha" heading for playful, rounded display typography */}
        <h2 
          className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-cherry-bomb), system-ui, sans-serif" }}
        >
          Aloha
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-[140%] text-[var(--foreground)]/90">
          <p>
            I'm Stefan Heißenberg, crafting meaningful experiences for millions of users as Head of Experience
            Design at DHL.
          </p>
          <p>
            With over 14 years across agencies like <strong>antwerpes</strong> and <strong>sunzinet</strong>,
            enterprises like <strong>Bayer</strong> and <strong>BIONTECH</strong>, startups like{" "}
            <strong>Saloodo!</strong>, and founding ventures like <strong>OnlyPN</strong>—working with 80+ clients
            total—I focus this experience on UX Strategy that cultivates sustainable user-centered cultures.
          </p>
          <p>
            In cross-teams we discover what becomes possible when user empathy becomes embedded in natural
            decision-making. This approach creates real transformation through relationships and trust, driving both
            meaningful user outcomes and measurable business results that feel authentic.
          </p>
        </div>
        <p className="mt-8 text-lg text-[var(--foreground)]/90">
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/stefanheissenberg/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent-cyan)] underline transition-opacity hover:opacity-80"
          >
            Linkedin
          </a>{" "}
          or write an{" "}
          <a
            href="mailto:hallo@stefanheissenberg.de"
            className="font-medium text-[var(--accent-cyan)] underline transition-opacity hover:opacity-80"
          >
            email
          </a>
          .
        </p>
      </div>
    </section>
  );
}
