"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CaseStudySectionHeading } from "@/components/case-studies/CaseStudySectionHeading";
import { Button } from "@/components/ui/Button";

type SystemRailItem = {
  step: string;
  caption: string;
  src: string;
  alt: string;
  imageClassName?: string;
  imageWrapClassName?: string;
};

const systemRailItems: SystemRailItem[] = [
  {
    src: "/images/mydhli/scaled-design-system/1-UI-library.jpeg",
    alt: "Design system component audit canvas — mapping UI library across DHL B2B portals",
    step: "Audit · 2020",
    caption: "Mapping the component landscape across DHL's portals before deciding what to keep, replace, or build.",
  },
  {
    src: "/images/mydhli/scaled-design-system/5-design-lifecycle.png",
    alt: "Design system component lifecycle workflow — design ops from creation to publication",
    step: "Process · 2021",
    caption: "The component lifecycle: every new component moves through quality check, design review, and publication.",
    imageClassName: "object-contain",
    imageWrapClassName: "bg-white",
  },
  {
    src: "/images/mydhli/scaled-design-system/2-scaled-design-system.webp",
    alt: "Scaled design system wireframe to UI evolution — enterprise component governance",
    step: "Foundation · 2022",
    caption: "Wireframe to component to live UI — the same pattern, governed across business units.",
  },
  {
    src: "/images/mydhli/scaled-design-system/3-from-sketch.webp",
    alt: "Design system UI component library — forms, navigation, and notifications for global B2B product",
    step: "Scale · 2023",
    caption: "Forms, navigation, notifications, brand refresh prompts — components covering the full surface area of a global B2B product.",
  },
  {
    src: "/images/mydhli/scaled-design-system/4-mobile-example.webp",
    alt: "Design system light and dark mode mobile screens — tokenised components and theming",
    step: "Themes · 2024",
    caption: "Light and dark mode shipped from the same tokenised component. One source of truth, two expressions.",
  },
];

export function ScaledDesignSystemTimelineSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updatePosition = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      setIsAtStart(rail.scrollLeft <= 2);
      setIsAtEnd(rail.scrollLeft >= maxScrollLeft - 2);
    };

    updatePosition();
    rail.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      rail.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-system-rail-card]");
    if (!firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap || "0") || 0;
    const step = firstCard.offsetWidth + gap;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <CaseStudySectionHeading
          align="center"
          titleSize="large"
          numberDash="05—"
          category="SYSTEM"
          detail="2020 — 2025 · DHL GROUP'S 1ST SCALED DESIGN SYSTEM"
        >
          <span className="block">When the components became the guideline</span>
        </CaseStudySectionHeading>

        <div className="mx-auto max-w-[820px] space-y-6 text-left">
          <div className="space-y-4">
            <p
              className="text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              The Fragmented Landscape
            </p>
            <p className="cs-body">
              DHL had fragments. Guidelines updated every few years. Libraries that competed across divisions — myDHLi, dhl.com, legacy portals — with no shared technical base. Every team rebuilt the same buttons from scratch.
            </p>
          </div>

          <div className="space-y-4">
          <p
            className="text-sm font-bold uppercase tracking-wider text-white"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            The 5-Year Build (2020–2025)
          </p>
          <p className="cs-body">
            We started with an audit. Every component, every use case, every portal. Then a choice — replace everything, or build the foundation underneath what already existed. We built the foundation. The myDHLi library aligned with existing tech stacks while creating space to harmonise the design.
          </p>
          <p className="cs-body">
            Then dhl.com came in. Cross-division collaboration merged our library with the primary system. We survived three tool transitions — Abstract → Sketch Cloud → Figma — without losing consistency.
          </p>
          <p className="cs-body">
            I represented multiple business units on a DHL Group-wide committee, helping define the standards for what came next.
          </p>
          </div>

          <div className="space-y-4">
            <p className="cs-body">
              Underneath, the library runs on Stencil. One set of web components compiles into React, Vue, and Angular — the same button shipped to teams running different stacks, no forking. Lerna manages the monorepo. Storybook drives component development in isolation. TypeScript, Jest, and Puppeteer keep it tested. Docusaurus generates the docs. Azure runs the CI/CD. Most design systems live as files in Figma. This one runs as code in production — and the Figma libraries stay connected to it.
            </p>
            <p className="cs-body">
              Every component moves through the same path. Creation → quality check → design review → publish. Validation criteria at each gate so the system stays clean as it scales.
            </p>
          </div>

          <div className="space-y-4">
            <p
              className="text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              The Shift
            </p>
            <p className="cs-body">
              We reversed the model. Guidelines used to describe components. Now the components are the guideline — living frontend with connected Figma libraries as the source of truth. No more PDFs.
            </p>
            <p className="cs-body">
              A scaled design system across leading business units inside DHL. Faster development. Consistent experiences. The foundation everything new gets built on.
            </p>
          </div>

          <Button variant="ghost" href="https://www.dpdhl-brands.com/en/dhl">
            Check our Brand Hub →
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-xs"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            From component audit to system scale · 2020 — 2025
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll design system rail left"
              onClick={() => scrollByCard(-1)}
              disabled={isAtStart}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Scroll design system rail right"
              onClick={() => scrollByCard(1)}
              disabled={isAtEnd}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollByCard(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollByCard(1);
            }
          }}
          className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 outline-none [scrollbar-width:thin] sm:gap-5"
          aria-label="Scaled design system timeline rail"
        >
          {systemRailItems.map((item) => (
            <article
              key={item.step}
              data-system-rail-card
              className="w-full shrink-0 basis-[84%] snap-start rounded-lg border border-white/10 bg-neutral-950/50 p-3 sm:basis-[62%] sm:p-4 lg:basis-[46%] xl:basis-[42%]"
            >
              <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-lg ${item.imageWrapClassName ?? ""}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={item.imageClassName ?? "object-cover"}
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 58vw, 42vw"
                />
              </div>
              <p
                className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/45"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                {item.step}
              </p>
              <p className="mt-2 text-sm leading-[145%] text-[var(--foreground)]/85" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                {item.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
