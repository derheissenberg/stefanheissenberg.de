"use client";

// useBgCanvas.js
// Shared canvas mount hook for the three background components.
// - Fills its parent (100% × 100%), so the host section controls size.
// - Re-resizes on parent resize via ResizeObserver.
// - Caps DPR at 2 for perf on retina.
// - Uses layout size (offsetWidth/Height) so ancestor CSS transforms
//   (scaled wrappers, modals, Framer Motion) don't distort the canvas.
// - rAF only runs while the host intersects the viewport (with margin) and
//   the document is visible, so off-screen or background tabs do not burn CPU.

import { useEffect, useRef } from "react";

/**
 * @param {(ctx: CanvasRenderingContext2D, info: { w:number, h:number, t:number, pointer:{x:number,y:number,inside:boolean} }) => void} draw
 * @param {{ pointer?: boolean }} [opts]  pointer:true wires pointer tracking (used by Horizon Drift only)
 */
export function useBgCanvas(draw, opts = {}) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const drawRef = useRef(draw);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      const cw = host.offsetWidth;
      const ch = host.offsetHeight;
      w = Math.max(1, cw);
      h = Math.max(1, ch);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, inside: false };
    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      pointer.tx = (e.clientX - r.left) / r.width;
      pointer.ty = (e.clientY - r.top) / r.height;
      pointer.inside = true;
    };
    const onLeave = () => {
      pointer.tx = 0.5;
      pointer.ty = 0.5;
      pointer.inside = false;
    };
    if (opts.pointer) {
      host.addEventListener("mousemove", onMove);
      host.addEventListener("mouseleave", onLeave);
    }

    let raf = 0;
    /** true when the host is within the root margin of the viewport */
    let inViewport = false;

    const shouldRun = () => inViewport && document.visibilityState === "visible";

    const tick = (now) => {
      if (!shouldRun()) {
        raf = 0;
        return;
      }
      if (opts.pointer) {
        pointer.x += (pointer.tx - pointer.x) * 0.04;
        pointer.y += (pointer.ty - pointer.y) * 0.04;
      }
      try {
        drawRef.current(ctx, { w, h, t: now / 1000, pointer });
      } catch {
        // ignore
      }
      raf = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const sync = () => {
      const run = shouldRun();
      if (run) {
        resize();
        try {
          drawRef.current(ctx, { w, h, t: performance.now() / 1000, pointer });
        } catch {
          // ignore
        }
        startLoop();
      } else {
        stopLoop();
      }
    };

    const onVisibility = () => {
      sync();
    };

    // LEARNING: Slight vertical margin so the scene is already animating a moment before
    // the section fully enters, avoiding a "cold start" when scrolling in.
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        inViewport = e ? e.isIntersecting : false;
        sync();
      },
      { root: null, rootMargin: "140px 0px 160px 0px", threshold: 0 }
    );
    io.observe(host);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stopLoop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
      if (opts.pointer) {
        host.removeEventListener("mousemove", onMove);
        host.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [opts.pointer]);

  return { hostRef, canvasRef };
}
