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
        {/* LEARNING: Font style matching "UX Strategy" from HeroSection - Outfit extralight, large responsive sizing */}
        <h2 
          className="inline-block text-left text-[48px] font-extralight leading-none text-white lg:text-[66px]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          Aloha 👋
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-[140%] text-[var(--foreground)]/90">
          <p>
            I'm Stefan Heißenberg, crafting meaningful experiences for millions of users as Head of Experience
            Design at DHL.
          </p>
          <p>
            With over 14 years across agencies like{" "}
            {/* LEARNING: Company links with paragraph text color (foreground/90) as default, animated gradient on hover matching LinkedIn/email links */}
            <a
              href="https://doccheck.agency/de/#/homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 underline transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient active:opacity-80"
              style={{ backgroundSize: "300%" }}
            >
              antwerpes
            </a>{" "}
            and{" "}
            <a
              href="https://www.sunzinet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 underline transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient active:opacity-80"
              style={{ backgroundSize: "300%" }}
            >
              sunzinet
            </a>
            , enterprises like Bayer and BIONTECH, startups like{" "}
            <a
              href="https://www.saloodo.com/de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 underline transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient active:opacity-80"
              style={{ backgroundSize: "300%" }}
            >
              Saloodo!
            </a>
            , and founding ventures like{" "}
            <a
              href="https://www.onlypn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 underline transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient active:opacity-80"
              style={{ backgroundSize: "300%" }}
            >
              OnlyPN
            </a>
            —working with 80+ clients total—I focus this experience on UX Strategy that cultivates sustainable
            user-centered cultures.
          </p>
          <p>
            In cross-teams we discover what becomes possible when user empathy becomes embedded in natural
            decision-making. This approach creates real transformation through relationships and trust, driving both
            meaningful user outcomes and measurable business results that feel authentic.
          </p>
        </div>
        <p className="mt-8 text-lg text-[var(--foreground)]/90">
          Connect with me on{" "}
          {/* LEARNING: Animated blue gradient link matching "Stefan Heißenberg" text and ghost button styling */}
          <a
            href="https://www.linkedin.com/in/stefanheissenberg/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text font-medium text-transparent underline animate-gradient"
            style={{ backgroundSize: "300%" }}
          >
            Linkedin
          </a>{" "}
          or write an{" "}
          {/* LEARNING: Animated blue gradient link matching "Stefan Heißenberg" text and ghost button styling */}
          <a
            href="mailto:hallo@stefanheissenberg.de"
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text font-medium text-transparent underline animate-gradient"
            style={{ backgroundSize: "300%" }}
          >
            email
          </a>
          .
        </p>
      </div>
    </section>
  );
}
