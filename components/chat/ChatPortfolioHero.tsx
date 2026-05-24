/**
 * COMPONENT: ChatPortfolioHero
 * PURPOSE: Portfolio-specific wrapper for /design-portfolio-sh — mounts Chat full-width
 * like the applicaiton demo, with portrait as decorative CSS background only.
 *
 * ARCHITECTURE:
 * - Thin shell: min-h-screen, no overflow clip, no narrow column
 * - Portrait + gradient live here only (v2: delete this file, keep Chat generic)
 * - Chat.tsx is unchanged; all layout/behavior comes from the canonical component
 */

import { Chat } from "./Chat";

const DESKTOP_PORTRAIT =
  "/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png";
const MOBILE_PORTRAIT =
  "/images/hero-portrait-strategic-ux-design-stefan_heissenberg-mobile.jpg";

export function ChatPortfolioHero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col bg-[var(--background)]"
      aria-label="Design Portfolio Introduction with AI Chat"
    >
      {/* Desktop portrait — right-aligned, full-bleed */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden bg-contain bg-right-bottom bg-no-repeat lg:block"
        style={{ backgroundImage: `url('${DESKTOP_PORTRAIT}')` }}
        aria-hidden
      />

      {/* Mobile portrait — centered, cover for small viewports */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_20%] bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url('${MOBILE_PORTRAIT}')` }}
        aria-hidden
      />

      {/* Center-focused overlay — readable centered chat, portrait visible at edges */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/35 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_42%,transparent_72%)]"
        aria-hidden
      />

      {/* Chat — same mount pattern as applicaiton app/page.tsx */}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <Chat />
      </div>
    </section>
  );
}
