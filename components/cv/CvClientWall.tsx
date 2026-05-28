/**
 * COMPONENT: CvClientWall
 * PURPOSE: Client logos section for the CV page using all 15 logos from /public/images/customers/.
 *
 * KEY CONCEPTS:
 * - Server Component — reuses existing CaseStudyLogoStack
 * - Alt text enriched via lib/seo/image-alt.ts for SEO and accessibility
 * - Passes showKicker=true with CV-specific label
 */

import {
  CaseStudyLogoStack,
  type CaseStudyLogoStackItem,
} from "@/components/case-studies/CaseStudyLogoStack";
import { customerLogoAlt } from "@/lib/seo/image-alt";

const CV_CLIENT_LOGO_SOURCES: Omit<CaseStudyLogoStackItem, "alt">[] = [
  { src: "/images/customers/01-galderma.svg", width: 120, height: 40 },
  { src: "/images/customers/02-biontech.png", width: 120, height: 40 },
  { src: "/images/customers/03-dhl.png", width: 120, height: 40 },
  { src: "/images/customers/04-bayer.png", width: 120, height: 40 },
  { src: "/images/customers/05-nkt.png", width: 120, height: 40 },
  { src: "/images/customers/06-avene.png", width: 120, height: 40 },
  { src: "/images/customers/07-kunstsammlung-nrw.png", width: 120, height: 40 },
  { src: "/images/customers/08-lesmills.png", width: 120, height: 40 },
  { src: "/images/customers/09.yazaki.png", width: 120, height: 40 },
  { src: "/images/customers/10-messeDuesseldorf.png", width: 120, height: 40 },
  { src: "/images/customers/11-obi-next.png", width: 120, height: 40 },
  { src: "/images/customers/12-msd.png", width: 120, height: 40 },
  { src: "/images/customers/13-berner-group.png", width: 120, height: 40 },
  { src: "/images/customers/14-docCheck.png", width: 120, height: 40 },
  { src: "/images/customers/15-freseniuskabi.png", width: 120, height: 40 },
];

const CV_CLIENT_LOGOS: CaseStudyLogoStackItem[] = CV_CLIENT_LOGO_SOURCES.map((logo) => ({
  ...logo,
  alt: customerLogoAlt(logo.src, logo.src.split("/").pop()?.replace(/\.\w+$/, "") ?? "Client"),
}));

export function CvClientWall() {
  return (
    <div
      className="mx-auto max-w-[1280px] px-8 py-2 max-[720px]:px-5"
      aria-label="Clients and brands"
    >
      <CaseStudyLogoStack
        label="Clients &amp; brands I've helped ship"
        logos={CV_CLIENT_LOGOS}
        showTopBorder
        showBottomBorder
      />
    </div>
  );
}
