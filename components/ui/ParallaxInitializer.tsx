/**
 * COMPONENT: ParallaxInitializer
 * PURPOSE: Wire up --parallax-y CSS variable on .parallax-layer elements after hydration.
 *
 * KEY CONCEPTS:
 * - "use client": Required because we use useEffect (browser-only scroll listener)
 * - useEffect: Runs AFTER hydration, eliminating server/client DOM mismatch.
 *   The server renders .parallax-layer divs with no inline style.
 *   The client sets --parallax-y only after React has reconciled the DOM.
 * - Returns null: This component renders no DOM nodes — pure side-effect
 * - Desktop-only: matchMedia guard skips the effect below 1024px
 * - prefers-reduced-motion: Completely skips if user requested less motion
 * - passive scroll listener: Zero jank, browser can optimise freely
 * - Cleanup: removeEventListener on unmount prevents memory leaks
 *
 * USAGE: Drop <ParallaxInitializer /> anywhere in a Server Component page.
 * The page stays a Server Component; only this leaf is a client island.
 */

"use client";

import { useEffect } from "react";

export function ParallaxInitializer() {
  useEffect(() => {
    // LEARNING: matchMedia checks run inside useEffect so they only execute in the browser.
    // The server never runs this code, which is why there is no hydration mismatch.
    const mq = window.matchMedia("(min-width: 1024px)");
    const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || rmq.matches) return;

    const layers = Array.from(
      document.querySelectorAll<HTMLElement>(".parallax-layer")
    );
    if (!layers.length) return;

    function updateParallax() {
      layers.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // --parallax-shift is set by .parallax-slow / .parallax-fast presets in CSS
        const shift =
          parseFloat(getComputedStyle(el).getPropertyValue("--parallax-shift")) || 40;
        // progress: -0.5 (element top at viewport bottom) → +0.5 (element bottom at top)
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const progress = (elementCenter - viewportCenter) / window.innerHeight;
        el.style.setProperty("--parallax-y", `${progress * shift * -1}px`);
      });
    }

    window.addEventListener("scroll", updateParallax, { passive: true });
    // Run once on mount so elements at their initial scroll position are already offset
    updateParallax();

    // LEARNING: Cleanup is essential — if the component unmounts (SPA navigation)
    // without removing the listener, every subsequent navigation adds another listener.
    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  // LEARNING: Returning null means this component contributes zero markup to the DOM.
  // It is a pure "behaviour island" that only adds a scroll listener.
  return null;
}
