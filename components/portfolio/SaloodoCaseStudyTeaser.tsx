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
            alt="Saloodo Logo"
            width={180}
            height={80}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      }
      headline="Disruptor in logistics via an aggressive data-driven approach"
      bodyText={[
        "Saloodo! is a digital marketplace for logistic and makes it easy for shippers to find verified road freight carriers. Founded as a corporate venture of DHL, we used DHL Freight as a unfair competitive advantage to outsource a high number of shipments to carriers.",
      ]}
      imageSrc="/images/portfolio/casestudy-saloodo_visual_MEA-desktop.png"
      imageSrcDesktop="/images/portfolio/casestudy-saloodo_visual_MEA-desktop.png"
      imageSrcMobile="/images/portfolio/casestudy-saloodo_visual_MEA-responsive.png"
      imageAlt="Saloodo truck on futuristic road"
      imagePosition="right"
    />
  );
}
