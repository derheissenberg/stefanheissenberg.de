/**
 * COMPONENT: CvTopNav
 * PURPOSE: Sticky page-scoped navigation for the CV page with section anchors.
 *
 * KEY CONCEPTS:
 * - "use client" required for the email obfuscation click handler
 * - Sticky top-0 with backdrop blur — same pattern as site nav
 * - Section anchors link to id anchors on each CV section
 * - Nav links hidden below 860px (mobile-first)
 * - Get in touch CTA on the right — reveals obfuscated email on click
 */

"use client";

const NAV_LINKS = [
  { label: "About", href: "#cv-about" },
  { label: "Experience", href: "#cv-experience" },
  { label: "Case studies", href: "#cv-cases" },
  { label: "How I work", href: "#cv-principles" },
  { label: "Credentials", href: "#cv-credentials" },
];

export function CvTopNav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--rule)]"
      style={{ background: "rgba(8,8,8,0.72)", backdropFilter: "blur(10px)" }}
    >
      <div
        className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-8 py-[14px] max-[720px]:px-5 max-[720px]:py-3"
      >
        {/* Brand */}
        <a
          href="#cv-top"
          className="flex items-center gap-[10px] text-[14px] font-[500] text-white"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", letterSpacing: "-0.01em" }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #22d3ee, #3b82f6)" }}
            aria-hidden
          />
          Stefan{" "}
          <em className="ml-0.5 font-bold italic not-italic text-[var(--accent-cyan-300)]" style={{ fontStyle: "italic", fontWeight: 700 }}>
            Heißenberg
          </em>
        </a>

        {/* Section anchors — hidden below 860px */}
        <nav className="flex gap-7 text-[13px] text-[var(--muted)] max-[860px]:hidden" aria-label="CV sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:hallo@stefanheissenberg.de"
          className="text-[11px] font-[500] uppercase text-[var(--accent-cyan-300)] tracking-[0.22em] transition-colors hover:text-white"
          style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace" }}
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}
