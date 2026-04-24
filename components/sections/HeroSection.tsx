/**
 * COMPONENT: HeroSection
 * PURPOSE: Landing page hero section with name, headline, tagline, CTA button, and portrait background
 *
 * NEXT.JS CONCEPTS EXPLAINED:
 *
 * 1. SERVER COMPONENT (Default in Next.js App Router)
 *    - This component is a Server Component by default (no "use client" directive)
 *    - Server Components render on the server, reducing JavaScript sent to the client
 *    - Perfect for static content like this hero section
 *    - Can use async/await to fetch data directly (not needed here)
 *
 * 2. COMPONENT STRUCTURE
 *    - Function component: Exported as named export (not default)
 *    - TypeScript: Uses type annotations for props (HeroSectionProps)
 *    - Props: Optional ctaHref with default value (React pattern)
 *
 * 3. NEXT/IMAGE OPTIMIZATION
 *    - next/image automatically optimizes images (WebP, AVIF formats)
 *    - Lazy loading by default (except priority images)
 *    - Responsive images with srcSet generation
 *    - Prevents Cumulative Layout Shift (CLS) with aspect ratio
 *
 * 4. LAYOUT TECHNIQUES
 *    - CSS Positioning: relative (section) + absolute (background images)
 *    - Z-index layering: Background (z-0) → Content (z-10)
 *    - Flexbox: For vertical centering (items-center) and content alignment
 *    - Max-width container: Centers content on large screens, constrains width
 *
 * 5. RESPONSIVE DESIGN (Tailwind CSS)
 *    - Mobile-first approach: Base styles for mobile, lg: prefix for desktop
 *    - Breakpoints: lg: = 1024px and above
 *    - Conditional rendering: hidden lg:block / lg:hidden for different images
 *
 * 6. ACCESSIBILITY
 *    - aria-label: Describes section purpose for screen readers
 *    - aria-hidden: Hides decorative images from screen readers
 *    - Semantic HTML: <section>, <h1>, <p> for proper document structure
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";

type HeroSectionProps = {
  ctaHref?: string;
};

export function HeroSection({ ctaHref = "mailto:hallo@stefanheissenberg.de" }: HeroSectionProps) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[var(--background)] lg:h-[800px]" aria-label="Introduction">
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
            <span
              className="block text-[64px] font-[200] text-white sm:text-[84px] lg:text-[128px]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              UX
            </span>
            <span
              className="gradient-text-safe block text-[64px] font-[700] italic sm:text-[84px] lg:text-[128px]"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 0.98,
                paddingRight: "0.14em",
              }}
            >
              Strategy
            </span>
          </h1>

          <p
            className="mt-4 text-[13px] uppercase sm:text-[15px]"
            style={{
              fontFamily: "var(--font-kode-mono), ui-monospace, monospace",
              fontWeight: 500,
              letterSpacing: "0.32em",
            }}
          >
            <span className="gradient-text-safe" style={{ backgroundSize: "300%" }}>
              BY STEFAN HEISSENBERG
            </span>
          </p>

          <p
            className="mt-7 max-w-[520px] text-[18px] leading-[1.55] text-white/80"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
          >
            Fifteen years designing digital products.
            <br />
            Connecting UX metrics with business outcomes - from startup to enterprise.
          </p>

          <div className="mt-10">
            <Button variant="primary" href={ctaHref} className="text-[18px] tracking-[0.2em] lg:text-[21px]">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
