/**
 * COMPONENT: WarRoomSlider
 * PURPOSE: Interactive War Room image rail: three cards, two navigation “pages” (start / end).
 *
 * KEY CONCEPTS:
 * - "use client": Required because of useState / useRef for arrow button interactivity.
 * - Three `<article>` slides remain for story beats; arrows jump scroll between rail start and rail end
 *   (matches “3 images, 2 steps” in the UI counter).
 * - Use scrollWidth − clientWidth as end target so any viewport width still gets two meaningful positions.
 * - onScroll maps scroll position to nav step 0 | 1 so manual swipes update the “1 / 2” indicator.
 * - snap-x snap-start: CSS scroll snap still aligns cards when the user drags freely.
 */

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const labelStyle = { fontFamily: "var(--font-outfit), system-ui, sans-serif" } as const;

/** Only two positions in the indicator + arrow affordance; rail still shows all three cards. */
const NAV_PAGE_COUNT = 2;

const warRoomSliderItems = [
  {
    step: "Step 01 · Week 1",
    caption:
      "Kick-off workshop: Design Thinking sessions with stakeholders across OBI to align on customer pain points and business goals.",
    src: "/images/obinext/kick-off-workshop.png",
    alt: "OBI Next kick-off Design Thinking workshop — stakeholder alignment and product discovery sprint",
  },
  {
    step: "Step 02 · Week 2",
    caption:
      "Tracking concept: Analytics framework designed from day one to measure every click and user interaction.",
    src: "/images/obinext/tracking-concept.png",
    alt: "OBI Next analytics and tracking concept — behavioral analytics and data-driven UX design",
  },
  {
    step: "Step 03 · Week 3-4",
    caption:
      "UX lab setup: Moderated user interviews and testing sessions in our loft space near the agency.",
    src: "/images/obinext/ux-labor-interviews-moderated-usertests.png",
    alt: "OBI Next UX lab with moderated user interviews — usability testing and user research setup",
  },
];

export function WarRoomSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [navStep, setNavStep] = useState(0);
  const [canScrollRail, setCanScrollRail] = useState(true);

  const getScrollMetrics = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return { max: 0, left: 0 };
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    return { max, left: el.scrollLeft };
  }, []);

  /** Map scroll position to page 0 (start) or 1 (end). Midpoint split with small dead zone. */
  const syncNavStepFromScroll = useCallback(() => {
    const { max, left } = getScrollMetrics();
    if (max <= 0) {
      setNavStep(0);
      return;
    }
    const ratio = left / max;
    setNavStep(ratio >= 0.5 ? 1 : 0);
  }, [getScrollMetrics]);

  const scrollToNavStep = useCallback(
    (step: 0 | 1) => {
      const el = scrollRef.current;
      if (!el) return;
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      const target = step === 0 ? 0 : max;
      el.scrollTo({ left: target, behavior: "smooth" });
      setNavStep(step);
    },
    [],
  );

  function handleScroll() {
    syncNavStepFromScroll();
  }

  /** Recompute overflow when width changes; if rail does not scroll, disable arrows and hide page counter. */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => {
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      setCanScrollRail(max > 1);
      if (max <= 1) setNavStep(0);
      else syncNavStepFromScroll();
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, [syncNavStepFromScroll]);

  return (
    <>
      {/* Rail header: label + step counter + arrow controls */}
      <div className="mt-10 flex items-center justify-between gap-4">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-xs"
          style={labelStyle}
        >
          From workshop to launch
        </p>

        <div className="flex items-center gap-3">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/35 sm:text-xs"
            style={labelStyle}
          >
            {canScrollRail ? (
              <>
                {navStep + 1}&thinsp;/&thinsp;{NAV_PAGE_COUNT}
              </>
            ) : (
              <>
                1&thinsp;/&thinsp;{NAV_PAGE_COUNT}
              </>
            )}
          </p>

          {/* Previous arrow */}
          <button
            type="button"
            onClick={() => scrollToNavStep(0)}
            disabled={!canScrollRail || navStep === 0}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous view"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M7.5 2L3.5 6L7.5 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => scrollToNavStep(1)}
            disabled={!canScrollRail || navStep === 1}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next view"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M4.5 2L8.5 6L4.5 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable snap rail */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 outline-none [scrollbar-width:thin] sm:gap-5"
        aria-label="War Room timeline rail"
      >
        {warRoomSliderItems.map((item) => (
          <article
            key={item.step}
            className="w-full shrink-0 basis-[84%] snap-start rounded-lg border border-white/10 bg-neutral-950/50 p-3 sm:basis-[62%] sm:p-4 lg:basis-[46%] xl:basis-[42%]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 58vw, 42vw"
              />
            </div>
            <p
              className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/45"
              style={labelStyle}
            >
              {item.step}
            </p>
            <p
              className="mt-2 text-sm leading-[145%] text-[var(--foreground)]/85"
              style={labelStyle}
            >
              {item.caption}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
