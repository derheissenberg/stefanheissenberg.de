/**
 * COMPONENT: CustomersSection
 * PURPOSE: Displays "82 Customers" heading and grid of client logos
 *
 * KEY CONCEPTS:
 * - Responsive grid: 4-6 logos per row on desktop, 3-4 on tablet, 2-3 on mobile
 * - Uses next/image for optimized logo loading
 * - All 18 customer logos displayed in white/grey on dark background
 * - Consistent spacing and sizing with aspect-square containers
 * - Mouse-following glow effect on hover using GlowCard wrapper
 *
 * GLOW EFFECT:
 * - GlowCard wraps each logo container to add interactive hover effect
 * - White glow (default) matches neutral logo presentation
 * - Radial gradient follows mouse cursor position for engaging interaction
 */

import Image from "next/image";
import { GlowCard } from "@/components/ui/GlowCard";

const customerLogos = [
  { src: "/images/customers/01-galderma.svg", alt: "Galderma", type: "svg" },
  { src: "/images/customers/02-biontech.png", alt: "BIONTECH", type: "png" },
  { src: "/images/customers/03-dhl.png", alt: "DHL", type: "png" },
  { src: "/images/customers/04-bayer.png", alt: "Bayer", type: "png" },
  { src: "/images/customers/05-nkt.png", alt: "NKT", type: "png" },
  { src: "/images/customers/06-avene.png", alt: "Avène", type: "png" },
  { src: "/images/customers/07-kunstsammlung-nrw.png", alt: "Kunstsammlung Nordrhein-Westfalen", type: "png" },
  { src: "/images/customers/08-lesmills.png", alt: "Les Mills", type: "png" },
  { src: "/images/customers/09.yazaki.png", alt: "Yazaki", type: "png" },
  { src: "/images/customers/10-messeDuesseldorf.png", alt: "Messe Düsseldorf", type: "png" },
  { src: "/images/customers/11-obi-next.png", alt: "OBI Next", type: "png" },
  { src: "/images/customers/12-msd.png", alt: "MSD", type: "png" },
  { src: "/images/customers/13-berner-group.png", alt: "Berner Group", type: "png" },
  { src: "/images/customers/14-docCheck.png", alt: "DocCheck", type: "png" },
  { src: "/images/customers/15-freseniuskabi.png", alt: "Fresenius KABI", type: "png" },
  { src: "/images/customers/16-sparkasse.png", alt: "Sparkasse", type: "png" },
  { src: "/images/customers/17-qsc-ag.png", alt: "QSC AG", type: "png" },
  { src: "/images/customers/18-kion-group.png", alt: "KION Group", type: "png" },
];

export function CustomersSection() {
  return (
    <section className="bg-[var(--background)] px-6 py-20 lg:px-12 lg:py-28" aria-label="Customers">
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
          {customerLogos.map((logo, index) => (
            <GlowCard
              key={index}
              glowColor="white"
              className="flex aspect-square items-center justify-center rounded border border-neutral-800 bg-neutral-900/50 p-4"
              aria-label={logo.alt}
            >
              {/* LEARNING: Content wrapper with relative positioning and z-index */}
              {/* Ensures logo appears above the glow effect (::before pseudo-element) */}
              <div className="relative z-10 h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className={`object-contain ${logo.type === "svg" ? "" : "brightness-0 invert"}`}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
