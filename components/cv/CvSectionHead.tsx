/**
 * COMPONENT: CvSectionHead
 * PURPOSE: Shared 2-column section header used by all CV page sections.
 *
 * KEY CONCEPTS:
 * - Server Component — purely presentational
 * - Mirrors the cv-web.html `.s-head` pattern: 1fr | 2fr grid
 * - Left side: mono kicker + muted subtitle
 * - Right side: large Outfit 200 h2 with gradient italic em + optional dim span
 * - Collapses to single column below 900px
 */

type CvSectionHeadProps = {
  kicker: string;
  subtitle?: string;
  title: string;             // Plain weight portion of h2
  titleHighlight?: string;   // Gradient italic <em> portion
  titleDim?: string;         // Dimmed white/30 portion (optional)
  id?: string;               // Anchor id for scroll-nav
};

export function CvSectionHead({
  kicker,
  subtitle,
  title,
  titleHighlight,
  titleDim,
  id,
}: CvSectionHeadProps) {
  return (
    <div
      id={id}
      className="mb-14 grid grid-cols-[1fr_2fr] items-end gap-8 max-[900px]:mb-10 max-[900px]:grid-cols-1 max-[900px]:gap-4"
    >
      {/* Left: kicker + subtitle */}
      <div>
        <p
          className="text-[12px] uppercase text-[var(--accent-cyan-300)] tracking-[0.24em]"
          style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
        >
          {kicker}
        </p>
        {subtitle && (
          <p className="mt-3 max-w-[320px] text-[15px] leading-[1.5] text-[var(--muted)]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right: large h2 */}
      <h2
        className="text-white"
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          fontWeight: 200,
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.92,
          letterSpacing: "-0.045em",
        }}
      >
        {title}
        {titleHighlight && (
          <em
            className="gradient-text-safe"
            style={{
              fontStyle: "italic",
              fontWeight: 700,
              display: "inline-block",
              backgroundSize: "300%",
              paddingRight: "0.04em",
            }}
          >
            {titleHighlight}
          </em>
        )}
        {titleDim && (
          <>
            <br />
            <span className="text-white/30">{titleDim}</span>
          </>
        )}
      </h2>
    </div>
  );
}
