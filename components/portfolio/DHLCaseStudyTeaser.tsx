/**
 * COMPONENT: DHLCaseStudyTeaser
 * PURPOSE: DHL case study teaser section matching Figma design
 *
 * CONTENT:
 * - Logo: DHL logo image from /images/customers/03-dhl.png
 * - Headline: Full headline as single string - "How an idea became the biggest B2B portal"
 * - Body: Description about myDHLi portal
 * - Image: DHL case study teaser image from /images/portfolio/dhl-casestudy-teaser.png
 * - Image Position: Left side on desktop
 * - CTA: "Read full story" button with animated gradient border
 */

import Image from "next/image";
import { CaseStudyTeaser } from "./CaseStudyTeaser";

export function DHLCaseStudyTeaser() {
  return (
    <CaseStudyTeaser
      slug="dhl"
      logo={
        // LEARNING: DHL logo from customers directory
        // Max-width: 180px for consistent sizing across all case study teasers
        <div className="relative h-auto w-full max-w-[180px]">
          <Image
            src="/images/customers/03-dhl.png"
            alt="DHL Logo"
            width={180}
            height={80}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      }
      headline="How an idea became the biggest B2B portal"
      bodyText={[
        "myDHLi is the B2B customer portal of DHL Global Forwarding & Freight. It gives you 360° visibility and full control over your shipments. Quote + Book, Track, Documents, Analytics - everything at your fingertips. Follow critical shipments and share information with colleagues, customers and suppliers. All in one place.",
      ]}
      imageSrc="/images/portfolio/dhl-casestudy-teaser.png"
      imageAlt="DHL myDHLi portal on tablet and smartphones"
      imagePosition="left"
    />
  );
}
