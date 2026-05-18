/**
 * COMPONENT: Footer
 * PURPOSE: Bottom row with copyright and social links.
 */

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/stefanheissenberg/" },
  { label: "Product Hunt", href: "https://www.producthunt.com/@derheissenberg" },
  { label: "GitHub", href: "https://github.com/derheissenberg" },
  { label: "Instagram", href: "https://www.instagram.com/1rockwell/" },
  { label: "Medium", href: "https://medium.com/@derheissenberg" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[var(--background)] py-7" aria-label="Footer">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-start justify-between gap-4 px-6 lg:flex-row lg:items-center lg:px-8">
        <p className="font-outfit text-[14px] font-normal text-white/55">
          © 2026 Stefan Heißenberg · Cologne, DE
        </p>
        <nav aria-label="Social links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="type-kicker text-[11px] uppercase text-white/55 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
