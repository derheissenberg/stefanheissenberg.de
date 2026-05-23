/**
 * COMPONENT: ChatPortfolioHero
 * PURPOSE: Hero for /design-portfolio-sh with portrait background and embedded Chat
 *
 * ARCHITECTURE:
 * - Left column: Chat component (interactive AI chat interface)
 * - Right column: Portrait background (desktop/mobile responsive images)
 * - Background gradient overlay for text readability on left side
 */

import Image from "next/image";
import { Chat } from "./Chat";

export function ChatPortfolioHero() {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-[var(--background)] lg:h-[800px]"
      aria-label="Design Portfolio Introduction with AI Chat"
    >
      {/* Portrait Background Images */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1600px]">
        {/* Desktop Portrait - hidden on mobile */}
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
        {/* Mobile Portrait - hidden on desktop */}
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

      {/* Gradient overlay for text readability on left side */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.80)_28%,rgba(8,8,8,0.40)_48%,rgba(8,8,8,0)_68%)]" />

      {/* Left column: Chat interface */}
      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1600px] items-center px-10 lg:min-h-0 lg:h-full lg:px-16">
        <div className="w-full max-w-[640px]">
          <Chat />
        </div>
      </div>
    </section>
  );
}
