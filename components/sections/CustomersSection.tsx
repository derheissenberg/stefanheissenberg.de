/**
 * COMPONENT: CustomersSection
 * PURPOSE: Displays "82 Customers" heading and grid of client logos
 *
 * KEY CONCEPTS:
 * - Responsive grid: 4-6 logos per row on desktop, 3-4 on tablet, 2-3 on mobile
 * - Uses next/image for optimized logo loading
 * - All 18 customer logos displayed in white/grey on dark background
 * - Alt text from lib/seo/image-alt.ts for SEO and accessibility
 * - Mouse-following glow effect on hover using GlowCard wrapper
 */

import Image from "next/image";
import { GlowCard } from "@/components/ui/GlowCard";
import { customerLogoAlt } from "@/lib/seo/image-alt";

const customerLogos = [
  { src: "/images/customers/01-galderma.svg", label: "Galderma", type: "svg" },
  { src: "/images/customers/02-biontech.png", label: "BioNTech", type: "png" },
  { src: "/images/customers/03-dhl.png", label: "DHL", type: "png" },
  { src: "/images/customers/04-bayer.png", label: "Bayer", type: "png" },
  { src: "/images/customers/05-nkt.png", label: "NKT", type: "png" },
  { src: "/images/customers/06-avene.png", label: "Avène", type: "png" },
  { src: "/images/customers/07-kunstsammlung-nrw.png", label: "Kunstsammlung NRW", type: "png" },
  { src: "/images/customers/08-lesmills.png", label: "Les Mills", type: "png" },
  { src: "/images/customers/09.yazaki.png", label: "Yazaki", type: "png" },
  { src: "/images/customers/10-messeDuesseldorf.png", label: "Messe Düsseldorf", type: "png" },
  { src: "/images/customers/11-obi-next.png", label: "OBI Next", type: "png" },
  { src: "/images/customers/12-msd.png", label: "MSD", type: "png" },
  { src: "/images/customers/13-berner-group.png", label: "Berner Group", type: "png" },
  { src: "/images/customers/14-docCheck.png", label: "DocCheck", type: "png" },
  { src: "/images/customers/15-freseniuskabi.png", label: "Fresenius Kabi", type: "png" },
  { src: "/images/customers/16-sparkasse.png", label: "Sparkasse", type: "png" },
  { src: "/images/customers/17-qsc-ag.png", label: "QSC AG", type: "png" },
  { src: "/images/customers/18-kion-group.png", label: "KION Group", type: "png" },
];

export function CustomersSection() {
  return (
    <section className="bg-[var(--background)] px-6 py-20 lg:px-12 lg:py-[120px]" aria-label="Customers">
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
            Clients &amp; Collaborators
          </p>
          <h2
            className="mx-auto inline-block max-w-[720px] text-[38px] leading-[1.1] tracking-tight text-white sm:text-[46px] lg:text-[56px]"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 700,
            }}
          >
            Grateful for the teams I&apos;ve worked with.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {customerLogos.map((logo) => {
            const alt = customerLogoAlt(logo.src, logo.label);
            return (
              <GlowCard
                key={logo.src}
                glowColor="white"
                className="flex aspect-square items-center justify-center rounded border border-neutral-800 bg-neutral-900/50 p-4"
                aria-label={alt}
              >
                <div className="relative z-10 h-full w-full">
                  <Image
                    src={logo.src}
                    alt={alt}
                    fill
                    className={`object-contain ${logo.type === "svg" ? "" : "brightness-0 invert"}`}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}