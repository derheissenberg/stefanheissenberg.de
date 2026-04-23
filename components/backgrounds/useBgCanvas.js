"use client";

// useBgCanvas.js
// Shared canvas mount hook for the three background components.
// - Fills its parent (100% × 100%), so the host section controls size.
// - Re-resizes on parent resize via ResizeObserver.
// - Caps DPR at 2 for perf on retina.
// - Uses layout size (offsetWidth/Height) so ancestor CSS transforms
//   (scaled wrappers, modals, Framer Motion) don't distort the canvas.
// - Primes a few draws via setTimeout so the first frame paints even
//   before rAF starts (tab becoming visible, offscreen mount, etc).

import { useEffect, useRef } from 'react';

/**
 * @param {(ctx: CanvasRenderingContext2D, info: { w:number, h:number, t:number, pointer:{x:number,y:number,inside:boolean} }) => void} draw
 * @param {{ pointer?: boolean }} [opts]  pointer:true wires pointer tracking (used by Horizon Drift only)
 */
export function useBgCanvas(draw, opts = {}) {
  const hostRef = useRef(null);   // absolute-fill wrapper
  const canvasRef = useRef(null);
  const drawRef = useRef(draw);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    const resize = () => {
      // offsetWidth/Height = layout size, independent of ancestor CSS transforms
      const cw = host.offsetWidth;
      const ch = host.offsetHeight;
      w = Math.max(1, cw);
      h = Math.max(1, ch);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // Pointer (only attached if the draw fn needs it)
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, inside: false };
    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      pointer.tx = (e.clientX - r.left) / r.width;
      pointer.ty = (e.clientY - r.top) / r.height;
      pointer.inside = true;
    };
    const onLeave = () => { pointer.tx = 0.5; pointer.ty = 0.5; pointer.inside = false; };
    if (opts.pointer) {
      host.addEventListener('mousemove', onMove);
      host.addEventListener('mouseleave', onLeave);
    }

    let raf = 0;
    const loop = (now) => {
      if (opts.pointer) {
        pointer.x += (pointer.tx - pointer.x) * 0.04;
        pointer.y += (pointer.ty - pointer.y) * 0.04;
      }
      drawRef.current(ctx, { w, h, t: now / 1000, pointer });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // setTimeout priming — rAF is paused when the tab is hidden, so these
    // guarantee a first paint happens regardless of visibility/mount timing.
    const kicks = [16, 120, 360, 1000].map((d) => setTimeout(() => {
      resize();
      try { drawRef.current(ctx, { w, h, t: performance.now() / 1000, pointer }); } catch {}
    }, d));

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (opts.pointer) {
        host.removeEventListener('mousemove', onMove);
        host.removeEventListener('mouseleave', onLeave);
      }
      kicks.forEach(clearTimeout);
    };
  }, [opts.pointer]);

  return { hostRef, canvasRef };
}
