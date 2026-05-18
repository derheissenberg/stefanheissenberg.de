/**
 * COMPONENT: PortfolioHeroSection
 * PURPOSE: Hero for /design-portfolio-sh — same background stack, frame, and vertical layout as HeroSection.tsx
 * (centered column in a 760px / 800px-tall band; longer body copy consumes some of that band vs the landing tagline).
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";

type PortfolioHeroSectionProps = {
  ctaHref?: string;
};

export function PortfolioHeroSection({ ctaHref = "mailto:hallo@stefanheissenberg.de" }: PortfolioHeroSectionProps) {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-[var(--background)] lg:h-[800px]"
      aria-label="Design Portfolio Introduction"
    >
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1600px]">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png"
              alt=""
              fill
              className="object-contain object-right-bottom"
              priority
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1600px"
              aria-hidden
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg"
              alt=""
              fill
              className="object-cover object-[center_20%]"
              priority
              unoptimized
              sizes="(max-width: 1600px) 100vw, 1600px"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.80)_28%,rgba(8,8,8,0.40)_48%,rgba(8,8,8,0)_68%)]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1600px] items-center px-10 lg:min-h-0 lg:h-full lg:px-16">
        <div className="w-full max-w-[640px] text-left">
          <h1 className="overflow-visible leading-[0.92] tracking-[-0.045em]">
            <span className="font-outfit block text-[64px] font-[200] text-white sm:text-[84px] lg:text-[128px]">
              Selected
            </span>
            <span
              className="font-outfit gradient-text-safe block text-[64px] font-[700] italic sm:text-[84px] lg:text-[128px]"
              style={{
                lineHeight: 0.98,
                paddingRight: "0.14em",
              }}
            >
              work
            </span>
          </h1>

          <p className="type-kicker-wide mt-4 text-[13px] uppercase sm:text-[15px]">
            <span className="gradient-text-safe" style={{ backgroundSize: "300%" }}>
              BY STEFAN HEISSENBERG
            </span>
          </p>

          <p className="font-outfit mt-7 max-w-[520px] text-[18px] font-normal leading-[1.55] text-white/80">
            Fifteen years designing digital products across agencies, consulting, startups, and enterprise. These three case studies cover the chapters that shaped me most.
          </p>

          <div className="mt-10">
            <Button variant="primary" href={ctaHref}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
