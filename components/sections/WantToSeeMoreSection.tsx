/**
 * COMPONENT: WantToSeeMoreSection
 * PURPOSE: Outro for design-portfolio-sh — aligned with handoff 02-fifteen-years-outro.html
 */

import { Button } from "@/components/ui/Button";

type WantToSeeMoreSectionProps = {
  ctaHref?: string;
};

export function WantToSeeMoreSection({ ctaHref = "mailto:hallo@stefanheissenberg.de" }: WantToSeeMoreSectionProps) {
  return (
    <section
      className="bg-[var(--background)] px-5 py-20 pb-24 lg:px-12 lg:py-[120px] lg:pb-[140px]"
      aria-label="More on request"
    >
      <div className="mx-auto max-w-[820px] text-center">
        <p
          className="mb-[22px] text-[13px] uppercase text-white/60 sm:text-[15px]"
          style={{
            fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
            fontWeight: 500,
            letterSpacing: "0.32em",
          }}
        >
          More on request
        </p>

        <h2
          className="text-[38px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[56px]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          Fifteen years.{" "}
          <em
            className="gradient-text-safe inline italic font-bold"
            style={{ backgroundSize: "300%", paddingRight: "0.06em" }}
          >
            Three highlights.
          </em>
        </h2>

        <p
          className="mx-auto mt-[22px] max-w-[56ch] text-[18px] leading-[1.6] text-white/[0.72]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
        >
          Earlier work sits behind NDA. Happy to walk through my experience in conversation.
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button variant="primary" href={ctaHref} className="w-full justify-center sm:w-auto">
            Get in touch
          </Button>
          <Button variant="outline" href="/" className="w-full justify-center sm:w-auto">
            Discover my Website →
          </Button>
        </div>
      </div>
    </section>
  );
}
