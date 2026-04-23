/**
 * COMPONENT: SectionEyebrow
 * PURPOSE: Reusable eyebrow label used above section headings.
 *
 * USAGE:
 *   <SectionEyebrow>Deep Passion</SectionEyebrow>
 *   <SectionEyebrow align="left">Key Creator Identifiers</SectionEyebrow>
 *   <SectionEyebrow align="center" spacingClassName="mb-8">Aloha</SectionEyebrow>
 *
 * KEY CONCEPTS:
 * - Kode Mono, uppercase, 0.32em tracked — matches the technical/engineered feel
 *   of the "Get in touch" button and the overall monospace accents on the site
 * - Slightly larger than a caption (15px desktop) so it reads as a section marker
 *   even without a headline beneath it
 * - White at 60% opacity — legible but clearly secondary to headings
 */

type Align = "left" | "center" | "right";

type SectionEyebrowProps = {
  children: React.ReactNode;
  align?: Align;                // default: "center"
  spacingClassName?: string;    // margin-bottom utility, default "mb-5"
  className?: string;           // extra classes
  as?: "p" | "span" | "div";    // default: "p"
};

export function SectionEyebrow({
  children,
  align = "center",
  spacingClassName = "mb-5",
  className = "",
  as: Tag = "p",
}: SectionEyebrowProps) {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <Tag
      className={`${alignClass} ${spacingClassName} text-[13px] uppercase text-white/60 sm:text-[15px] ${className}`}
      style={{
        fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
        fontWeight: 500,
        letterSpacing: "0.32em",
      }}
    >
      {children}
    </Tag>
  );
}

export default SectionEyebrow;
