/**
 * COMPONENT: CvClientWall
 * PURPOSE: Client logos section for the CV page using all 15 logos from /public/images/customers/.
 *
 * KEY CONCEPTS:
 * - Server Component — reuses existing CaseStudyLogoStack
 * - All 15 logos from /public/images/customers/ are included (all verified to exist)
 * - Passes showKicker=true with CV-specific label
 * - showTopBorder and showBottomBorder both true for the full horizontal rule treatment
 * - No new component needed — CaseStudyLogoStack handles everything
 */

import {
  CaseStudyLogoStack,
  type CaseStudyLogoStackItem,
} from "@/components/case-studies/CaseStudyLogoStack";

const CV_CLIENT_LOGOS: CaseStudyLogoStackItem[] = [
  { src: "/images/customers/01-galderma.svg", alt: "Galderma", width: 120, height: 40 },
  { src: "/images/customers/02-biontech.png", alt: "BioNTech", width: 120, height: 40 },
  { src: "/images/customers/03-dhl.png", alt: "DHL", width: 120, height: 40 },
  { src: "/images/customers/04-bayer.png", alt: "Bayer", width: 120, height: 40 },
  { src: "/images/customers/05-nkt.png", alt: "NKT", width: 120, height: 40 },
  { src: "/images/customers/06-avene.png", alt: "Avène", width: 120, height: 40 },
  { src: "/images/customers/07-kunstsammlung-nrw.png", alt: "Kunstsammlung NRW", width: 120, height: 40 },
  { src: "/images/customers/08-lesmills.png", alt: "Les Mills", width: 120, height: 40 },
  { src: "/images/customers/09.yazaki.png", alt: "Yazaki", width: 120, height: 40 },
  { src: "/images/customers/10-messeDuesseldorf.png", alt: "Messe Düsseldorf", width: 120, height: 40 },
  { src: "/images/customers/11-obi-next.png", alt: "OBI Next", width: 120, height: 40 },
  { src: "/images/customers/12-msd.png", alt: "MSD", width: 120, height: 40 },
  { src: "/images/customers/13-berner-group.png", alt: "Berner Group", width: 120, height: 40 },
  { src: "/images/customers/14-docCheck.png", alt: "DocCheck", width: 120, height: 40 },
  { src: "/images/customers/15-freseniuskabi.png", alt: "Fresenius Kabi", width: 120, height: 40 },
];

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
