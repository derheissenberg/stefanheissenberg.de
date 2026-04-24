"use client";

// HorizonDrift.jsx
//
// DROP-IN background for the "Aloha" section.
// Warm sun disc over stacked wave lines; sun tracks slightly with the cursor.
// Top edge fades to black. The topmost wave is clamped below the sun so
// the "sun above the ocean" illusion holds even when the sun drifts.
//
// Usage:
//   <section style={{ position: 'relative' }}>
//     <HorizonDrift />
//     <div style={{ position: 'relative', zIndex: 1 }}>
//       {/* Aloha copy + links */}
//     </div>
//   </section>

import React from 'react';
import { useBgCanvas } from './useBgCanvas';

function drawHorizonDrift(ctx, { w, h, t, pointer }) {
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, w, h);

  const px = pointer.x;
  const py = pointer.y;

  // Warm atmospheric tint in the lower half.
  const atm = ctx.createLinearGradient(0, h * 0.4, 0, h);
  atm.addColorStop(0, 'rgba(249,115,22,0.095)');
  atm.addColorStop(1, 'rgba(8,8,8,0)');
  ctx.fillStyle = atm;
  ctx.fillRect(0, 0, w, h);

  // Sun disc — pushed slightly right of center, softened intensity
  // so body copy stays readable while the sun stays the focal point.
  const sunX = w * (0.76 + Math.sin(t * 0.08) * 0.04 + (px - 0.5) * 0.1);
  const sunY = h * (0.42 + Math.cos(t * 0.1) * 0.04 + (py - 0.5) * 0.16);
  const sunR = Math.max(w, h) * 0.05;

  ctx.globalCompositeOperation = 'lighter';
  const halo = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * 7);
  halo.addColorStop(0,   'rgba(245,183,0,0.22)');
  halo.addColorStop(0.3, 'rgba(249,115,22,0.10)');
  halo.addColorStop(1,   'rgba(249,115,22,0)');
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, w, h);

  const disc = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR);
  disc.addColorStop(0,   'rgba(245,183,0,0.6)');
  disc.addColorStop(0.7, 'rgba(245,183,0,0.55)');
  disc.addColorStop(1,   'rgba(245,183,0,0)');
  ctx.fillStyle = disc;
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'source-over';

  // Readability band — horizontal dark wash behind the text area.
  // Baked into the background itself (no card chrome on the text).
  const band = ctx.createLinearGradient(0, h * 0.22, 0, h * 0.82);
  band.addColorStop(0,    'rgba(8,8,8,0)');
  band.addColorStop(0.28, 'rgba(8,8,8,0.55)');
  band.addColorStop(0.72, 'rgba(8,8,8,0.55)');
  band.addColorStop(1,    'rgba(8,8,8,0)');
  ctx.fillStyle = band;
  ctx.fillRect(0, 0, w, h);

  // Wave lines. Base Y starts at 0.62h so the topmost wave is always
  // below the sun (which sits at ~0.42h).
  const layers = 5;
  for (let L = 0; L < layers; L++) {
    const prog = L / (layers - 1);
    const yBase = h * (0.62 + prog * 0.32);
    const speed = 0.1 + prog * 0.22;
    const freq  = 0.004 + prog * 0.004;
    const amp   = 8 + prog * 22;
    const lineCount = 2 + L;
    for (let k = 0; k < lineCount; k++) {
      const off = (k / lineCount) * (h * 0.05);
      const alpha = (0.08 + prog * 0.18) * (1 - k / lineCount);
      const rC = 34 + (249 - 34) * prog;
      const gC = 211 + (115 - 211) * prog;
      const bC = 238 + (22 - 238) * prog;
      ctx.strokeStyle = `rgba(${rC | 0},${gC | 0},${bC | 0},${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = -30; x <= w + 30; x += 6) {
        const y = yBase + off
          + Math.sin(x * freq + t * speed) * amp
          + Math.sin(x * freq * 2.3 - t * speed * 0.7) * amp * 0.4;
        if (x === -30) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  // Top edge fade so the section blends into an adjacent black section above.
  const topFade = ctx.createLinearGradient(0, 0, 0, h * 0.45);
  topFade.addColorStop(0,   'rgba(8,8,8,0.95)');
  topFade.addColorStop(0.5, 'rgba(8,8,8,0.35)');
  topFade.addColorStop(1,   'rgba(8,8,8,0)');
  ctx.fillStyle = topFade;
  ctx.fillRect(0, 0, w, h);

  // Extra darkening in the upper-left (keeps the aloha heading legible).
  const ulDark = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h) * 0.55);
  ulDark.addColorStop(0, 'rgba(8,8,8,0.55)');
  ulDark.addColorStop(1, 'rgba(8,8,8,0)');
  ctx.fillStyle = ulDark;
  ctx.fillRect(0, 0, w, h);

  // Bottom vignette.
  const vg = ctx.createLinearGradient(0, h * 0.55, 0, h);
  vg.addColorStop(0, 'rgba(8,8,8,0)');
  vg.addColorStop(1, 'rgba(8,8,8,0.55)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);
}

export default function HorizonDrift(props) {
  const { style, className } = props || {};
  // pointer: true — sun position responds subtly to the cursor.
  const { hostRef, canvasRef } = useBgCanvas(drawHorizonDrift, { pointer: true });
  return (
    <div
      ref={hostRef}
      aria-hidden
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        ...style,
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
