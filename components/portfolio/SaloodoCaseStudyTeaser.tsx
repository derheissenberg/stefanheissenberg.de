/**
 * COMPONENT: SaloodoCaseStudyTeaser
 * PURPOSE: Saloodo case study teaser section matching Figma design
 *
 * FIGMA SPECS:
 * - Logo: Saloodo logo image
 * - Headline: "Disruptor in logistics via an aggressive data-driven approach" (all bold, large)
 * - Body: Description about Saloodo marketplace
 * - Image: Semi-truck on futuristic blue road (right side on desktop)
 * - CTA: "Read full story" button with cyan border
 */

import Image from "next/image";
import { CaseStudyTeaser } from "./CaseStudyTeaser";
import { customerLogoAlt } from "@/lib/seo/image-alt";

export function SaloodoCaseStudyTeaser() {
  return (
    <CaseStudyTeaser
      slug="saloodo"
      logo={
        // LEARNING: Using real Saloodo logo image from public/images/customers
        // Next.js Image component optimizes loading and provides responsive sizing
        <div className="relative h-auto w-full max-w-[180px]">
          <Image
            src="/images/customers/19-saloodo.png"
            alt={customerLogoAlt("/images/customers/19-saloodo.png", "Saloodo")}
            width={180}
            height={80}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      }
      headline="Disrupting logistics with an aggressive data-driven playbook"
      bodyText={[
        "Saloodo! was DHL's bet on a digital freight marketplace — shippers on one side, verified road carriers on the other, matched with ML. I joined as the founding designer when the pilot was ready to scale. Small team, fast decisions, real consequences.",
      ]}
      imageSrc="/images/portfolio/casestudy-saloodo_visual_MEA-desktop.png"
      imageSrcDesktop="/images/portfolio/casestudy-saloodo_visual_MEA-desktop.png"
      imageSrcMobile="/images/portfolio/casestudy-saloodo_visual_MEA-responsive.png"
      imageAlt="Saloodo digital freight marketplace truck visual — founding designer UX, data-driven logistics product design case study"
      imagePosition="right"
    />
  );
}
