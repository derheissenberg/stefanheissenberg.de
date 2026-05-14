/**
 * COMPONENT: CaseStudyLogoStack
 * PURPOSE: Partner / tool / award marks — thin rules, mono kicker, monochrome row + hover colour
 *
 * KEY CONCEPTS:
 * - `size="large"`: taller caps vs default (homepage awards); pair with `itemClassName` + `!max-w-*` on wide marks so landscape SVGs do not scale like square PNGs
 * - `kickerVariant="keyCreator"`: matches KeyCreatorIdentifiersSection h2 mono treatment
 * - `kickerTop="flush"`: minimal padding under top rule (tight stack under hero)
 * - Optional `href` per item: wraps the mark in `<a target="_blank">` (e.g. certificate PDFs under `/public`)
 */

import Image from "next/image";

export type CaseStudyLogoStackItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional per-item classes (e.g. `!max-w-*` to cap wide SVGs; `!` needed to override responsive `max-w` on the row) */
  itemClassName?: string;
  /** If set, opens in a new tab (e.g. certificate PDF or external URL) */
  href?: string;
};

type CaseStudyLogoStackProps = {
  label: string;
  logos: CaseStudyLogoStackItem[];
  className?: string;
  /** Default: compact marks. Large: ~2× height for homepage awards / readability */
  size?: "default" | "large";
  /** Default: small mono line. keyCreator: same h2 styling as KeyCreatorIdentifiersSection */
  kickerVariant?: "default" | "keyCreator";
  /** Default: comfortable top padding. flush: tight under top border (e.g. below hero) */
  kickerTop?: "default" | "flush";
};

const kickerStyleDefault = {
  fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
  fontWeight: 500,
  letterSpacing: "0.24em",
} as const;

const kickerStyleKeyCreator = {
  fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
  fontWeight: 500,
  letterSpacing: "0.32em",
} as const;

const imageSizeClasses: Record<"default" | "large", string> = {
  default:
    "h-5 w-auto max-h-5 object-contain opacity-[0.42] grayscale transition-all duration-300 ease-out sm:h-6 sm:max-h-6 sm:max-w-[100px] md:h-7 md:max-h-7 md:max-w-[118px] hover:scale-[1.04] hover:opacity-100 hover:grayscale-0",
  large:
    "h-12 w-auto max-h-12 object-contain opacity-[0.42] grayscale transition-all duration-300 ease-out sm:h-16 sm:max-h-16 sm:max-w-[260px] md:h-20 md:max-h-20 md:max-w-[300px] hover:scale-[1.04] hover:opacity-100 hover:grayscale-0",
};

const imageSizesAttr: Record<"default" | "large", string> = {
  default: "(max-width: 640px) 80px, 100px",
  large: "(max-width: 640px) 200px, 280px",
};

export function CaseStudyLogoStack({
  label,
  logos,
  className = "",
  size = "default",
  kickerVariant = "default",
  kickerTop = "default",
}: CaseStudyLogoStackProps) {
  const kickerPadding =
    kickerTop === "flush" ? "px-4 pt-10 text-center" : "px-4 pt-8 text-center sm:pt-10";

  const kickerTextClasses =
    kickerVariant === "keyCreator"
      ? "mb-[22px] text-center text-[13px] uppercase text-white/60 sm:text-[15px]"
      : "text-[10px] font-medium uppercase text-white/40 sm:text-[11px]";

  const kickerEl =
    kickerVariant === "keyCreator" ? (
      <h2 className={`${kickerPadding} ${kickerTextClasses}`} style={kickerStyleKeyCreator}>
        {label}
      </h2>
    ) : (
      <p className={`${kickerPadding} ${kickerTextClasses}`} style={kickerStyleDefault}>
        {label}
      </p>
    );

  const ulGapClass =
    size === "large"
      ? "gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-9 md:gap-x-10"
      : "gap-x-5 gap-y-6 sm:gap-x-7 sm:gap-y-7 md:gap-x-9";

  const ulPaddingTop = kickerVariant === "keyCreator" ? "pt-0" : "pt-5 sm:pt-6";

  return (
    <div className={`border-y border-white/[0.08] ${className}`}>
      {kickerEl}
      <ul
        className={`flex list-none flex-wrap items-center justify-center px-4 pb-8 sm:pb-10 ${ulGapClass} ${ulPaddingTop}`}
      >
        {logos.map((logo) => {
          const image = (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes={imageSizesAttr[size]}
              className={`${imageSizeClasses[size]} ${logo.itemClassName ?? ""}`}
            />
          );

          return (
            <li key={logo.alt} className="flex items-center justify-center">
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-sm outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
                >
                  {image}
                </a>
              ) : (
                image
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
