/**
 * COMPONENT: OBINextCaseStudyTeaser
 * PURPOSE: OBI Next case study teaser section matching Figma design
 *
 * FIGMA SPECS:
 * - Logo: OBI Next logo image
 * - Headline: "Creation of a blueprint for a new business model" (monospace-like font, bold)
 * - Body: Long paragraph about bathroom planner project
 * - Image: Laptop mockup showing bathroom planner (left side on desktop)
 * - CTA: "Read full story" button with cyan border
 * - Font: Monospace-like font for text section
 */

import Image from "next/image";
import { CaseStudyTeaser } from "./CaseStudyTeaser";

export function OBINextCaseStudyTeaser() {
  return (
    <CaseStudyTeaser
      slug="obinext"
      logo={
        // LEARNING: Using real OBI Next logo image from public/images/customers
        // Next.js Image component optimizes loading and provides responsive sizing
        // Max-width: 180px for consistent logo sizing across all case study teasers
        <div className="relative h-auto w-full max-w-[180px]">
          <Image
            src="/images/customers/11-obi-next.png"
            alt="OBI Next Logo"
            width={180}
            height={80}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      }
      headline="Creation of a blueprint for a new business model"
      bodyText={[
        "It started with a bet: launch a bathroom planner in 30 days to prove rapid prototyping could work at enterprise scale. Over the next six months, we built, tested, broke, and rebuilt—running user tests, shipping features mid-sprint, and learning what actually worked. The bathroom planner was just the beginning. The real product was the playbook for how a €7B company builds digital innovation.",
      ]}
      imageSrc="/images/portfolio/obinext-casestudy-teaser.png"
      imageAlt="OBI Next bathroom planner on laptop"
      imagePosition="left"
    />
  );
}
