"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CaseStudySectionHeading } from "@/components/case-studies/CaseStudySectionHeading";

type RailItem = {
  step: string;
  caption: string;
  src: string;
  alt: string;
};

const railItems: RailItem[] = [
  {
    step: "Step 01 · Late 2018",
    caption: "1st scribble of myDHLi from 2019.",
    src: "/images/mydhli/concept-design-scribble.png",
    alt: "1st scribble of myDHLi from 2019",
  },
  {
    step: "Step 02 · 2019",
    caption: "1st Axure prototype for customer interviews and stakeholder workshops.",
    src: "/images/mydhli/concept-low-fidelity-wireframe.png",
    alt: "1st Axure prototype for customer interviews and stakeholder workshops",
  },
  {
    step: "Step 03 · 2019",
    caption: "Early flow chart for system discovery, and basis for self-registration.",
    src: "/images/mydhli/flowcharts-uxflow-architecture-design.png",
    alt: "Early flow chart for system discovery",
  },
  {
    step: "Step 04 · 2019",
    caption: "Early DHL landscape and architecture brainstorming session.",
    src: "/images/mydhli/architecture-hands-on-concepts.png",
    alt: "Early DHL landscape and architecture brainstorming session",
  },
  {
    step: "Step 05 · 2019",
    caption: "Initial myDHLi kick-off/stakeholder workshops with Saloodo-Team in Bonn",
    src: "/images/mydhli/kick-off-workshop-stakeholder.png",
    alt: "Initial myDHLi kick-off/stakeholder workshops with Saloodo-Team in Bonn",
  },
  {
    step: "Step 06 · 2019",
    caption: "UX-research & analytics training",
    src: "/images/mydhli/analytics-coaching-stefanheissenberg.png",
    alt: "UX-research & analytics training",
  },
  {
    step: "Step 07 · 2019",
    caption: "IT-Workshops in Prague",
    src: "/images/mydhli/it-workshops.png",
    alt: "IT-Workshops in Prague",
  },
];

export function ConceptTimelineSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      setIsAtStart(rail.scrollLeft <= 2);
      setIsAtEnd(rail.scrollLeft >= maxScrollLeft - 2);
    };

    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-rail-card]");
    if (!firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap || "0") || 0;
    const step = firstCard.offsetWidth + gap;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--background)] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-[645px_1fr] lg:gap-16">
          <div className="order-1 lg:h-full">
            <div className="relative aspect-[645/482] w-full overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
              <Image
                src="/images/mydhli/Dashboard-collage.png"
                alt="myDHLi Dashboard shown on iMac, iPad, and iPhone demonstrating responsive design"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>

          <div className="order-2 max-w-[820px] space-y-5">
            <CaseStudySectionHeading align="left" numberDash="02—" category="CONCEPT" detail="Late 2018">
              From Concept to Global Platform
            </CaseStudySectionHeading>
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Late 2018
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                While I was still at Saloodo!, DHL Global Forwarding asked me to sketch what a unified B2B portal could look like — one place to replace the dozens of disconnected apps customers were navigating.
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The Vision
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                One platform. 360° shipment visibility across air, ocean, road, and rail. Available 24/7 anywhere in the world.
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The Reality
              </p>
              <p className="text-base leading-[140%] text-[var(--foreground)]/90 lg:text-lg" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Not really a design problem. An organisational one. Decoupling legacy systems. Introducing agile to teams that had only ever shipped waterfall. Convincing stakeholders that dozens of apps had to become one customer experience — and meaning it.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-xs"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            From sketch to system · 2018 — 2019
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll timeline left"
              onClick={() => scrollByCard(-1)}
              disabled={isAtStart}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Scroll timeline right"
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
          aria-label="Concept timeline rail"
        >
          {railItems.map((item) => (
            <article
              key={item.step}
              data-rail-card
              className="w-full shrink-0 basis-[84%] snap-start rounded-lg border border-white/10 bg-neutral-950/50 p-3 sm:basis-[62%] sm:p-4 lg:basis-[46%] xl:basis-[42%]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 640px) 82vw, (max-width: 1024px) 58vw, 42vw" />
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
