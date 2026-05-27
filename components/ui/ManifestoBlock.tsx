/**
 * COMPONENT: ManifestoBlock
 * PURPOSE: Centered blockquote with gradient italic emphasis — reusable across
 *          CV principles, PrinciplesSection manifesto row, and DHL page "THE SHIFT" block.
 *
 * KEY CONCEPTS:
 * - Server Component — no client JS needed
 * - kicker: small mono label above the blockquote
 * - quote + quoteHighlight compose the full sentence with gradient on the highlight
 * - quoteAfter: optional plain text after the highlighted portion
 * - attribution: optional small prose beneath the blockquote
 * - gradient-text-safe: reuses the site-wide animated cyan→blue gradient class
 */

type ManifestoBlockProps = {
  kicker: string;
  quote: string;
  quoteHighlight: string;
  quoteAfter?: string;
  attribution?: string;
  showQuoteMarks?: boolean;
};

export function ManifestoBlock({
  kicker,
  quote,
  quoteHighlight,
  quoteAfter,
  attribution,
  showQuoteMarks = true,
}: ManifestoBlockProps) {
  return (
    <div className="py-14 text-center border-t border-b border-[var(--rule)]">
      {/* Kicker */}
      <p
        className="text-[13px] uppercase text-[var(--accent-cyan-300)] tracking-[0.24em]"
        style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500 }}
      >
        {kicker}
      </p>

      {/* Blockquote */}
      <blockquote
        className="mx-auto mt-4 max-w-[980px] text-white"
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(26px, 4vw, 52px)",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
        }}
      >
        {showQuoteMarks && <span className="text-white/40">&ldquo;</span>}
        {quote}
        {/* LEARNING: gradient-text-safe applies the animated cyan→blue gradient to the italic text */}
        <em
          className="gradient-text-safe"
          style={{
            fontStyle: "italic",
            fontWeight: 700,
            display: "inline-block",
            backgroundSize: "300%",
            paddingRight: "0.06em",
          }}
        >
          {quoteHighlight}
        </em>
        {quoteAfter && <span>{quoteAfter}</span>}
        {showQuoteMarks && <span className="text-white/40">&rdquo;</span>}
      </blockquote>

      {/* Attribution */}
      {attribution && (
        <p
          className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.65] text-white/65"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          {attribution}
        </p>
      )}
    </div>
  );
}
