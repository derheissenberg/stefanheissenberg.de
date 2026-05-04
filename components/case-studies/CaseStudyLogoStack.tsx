/**
 * Minimal “stack” row for partner / tool marks: thin rules, mono kicker, monochrome marks + hover colour.
 */

import Image from "next/image";

export type CaseStudyLogoStackItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional per-item width cap (e.g. square PNG with wide mark inside) */
  itemClassName?: string;
};

type CaseStudyLogoStackProps = {
  label: string;
  logos: CaseStudyLogoStackItem[];
  className?: string;
};

const kickerStyle = {
  fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
  fontWeight: 500,
  letterSpacing: "0.24em",
} as const;

export function CaseStudyLogoStack({ label, logos, className = "" }: CaseStudyLogoStackProps) {
  return (
    <div className={`border-y border-white/[0.08] ${className}`}>
      <p
        className="px-4 pt-8 text-center text-[10px] font-medium uppercase text-white/40 sm:pt-10 sm:text-[11px]"
        style={kickerStyle}
      >
        {label}
      </p>
      <ul className="flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-6 px-4 pb-8 pt-5 sm:gap-x-7 sm:gap-y-7 sm:pb-10 sm:pt-6 md:gap-x-9">
        {logos.map((logo) => (
          <li key={logo.alt} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="(max-width: 640px) 80px, 100px"
              className={`h-5 w-auto max-h-5 object-contain opacity-[0.42] grayscale transition-all duration-300 ease-out sm:h-6 sm:max-h-6 sm:max-w-[100px] md:h-7 md:max-h-7 md:max-w-[118px] hover:scale-[1.04] hover:opacity-100 hover:grayscale-0 ${logo.itemClassName ?? ""}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
