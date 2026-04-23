"use client";

// AuroraBlue.jsx
//
// DROP-IN background for the "Key Creator Identifiers" section.
// Three soft blue/cyan blobs on pure black, drifting organically.
// No pointer reactivity. Top + bottom fade to black so it blends
// seamlessly into adjacent black sections.
//
// Usage:
//   Make the host section `position: relative` and give it any height.
//   Drop <AuroraBlue /> as the first child. Your content sits above it.
//
//   <section style={{ position: 'relative' }}>
//     <AuroraBlue />
//     <div style={{ position: 'relative', zIndex: 1 }}>
//       {/* your stats grid, untouched */}
//     </div>
//   </section>
//
// The component fills 100% × 100% of its parent and pointer-events:none,
// so it never interferes with clicks, layout, or scroll.

import React from 'react';
import { useBgCanvas } from './useBgCanvas';

const PAL = {
  c1: '30,144,255',   // brand blue (primary blob)
  c2: '14,165,233',   // sky blue  (secondary)
  c3: '34,211,238',   // cyan      (accent)
  aA: 0.32, aB: 0.48, // alpha range (slow breathing)
  glowY: 0.35,        // anchor Y for the blob cluster (0..1)
};

function drawAuroraBlue(ctx, { w, h, t }) {
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, w, h);

  const evo = (Math.sin(t * 0.06) + 1) / 2;
  const aMix = PAL.aA + (PAL.aB - PAL.aA) * evo;

  // Non-repeating organic drift via three summed sines at incommensurate
  // frequencies. Cheap; looks like 2D noise without the cost.
  const organic = (a, b, c) =>
    Math.sin(a) * 0.55 + Math.sin(b) * 0.3 + Math.sin(c) * 0.15;

  ctx.globalCompositeOperation = 'lighter';

  const blobs = [
    {
      x: w * (0.55 + organic(t * 0.05, t * 0.083 + 1.1, t * 0.021 + 2.3) * 0.28),
      y: h * (PAL.glowY + organic(t * 0.04 + 0.4, t * 0.091 + 2.7, t * 0.017) * 0.12),
      r: Math.max(w, h) * 0.28,
      color: PAL.c1, alpha: aMix,
    },
    {
      x: w * (0.4 + organic(-t * 0.07 + 1.7, t * 0.103 + 0.3, -t * 0.029 + 3.1) * 0.3),
      y: h * (PAL.glowY + 0.28 + organic(t * 0.035 + 2.1, -t * 0.077, t * 0.019 + 1.5) * 0.12),
      r: Math.max(w, h) * 0.24,
      color: PAL.c2, alpha: aMix * 0.85,
    },
    {
      x: w * (0.5 + organic(t * 0.09 + 1.3, t * 0.131 + 2.9, t * 0.041) * 0.36),
      y: h * (PAL.glowY - 0.05 + organic(t * 0.06 + 0.7, t * 0.112 + 1.9, -t * 0.033) * 0.16),
      r: Math.max(w, h) * 0.18,
      color: PAL.c3, alpha: aMix * 0.7,
    },
  ];
  for (const b of blobs) {
    const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
    g.addColorStop(0,    `rgba(${b.color},${b.alpha})`);
    g.addColorStop(0.45, `rgba(${b.color},${b.alpha * 0.25})`);
    g.addColorStop(1,    `rgba(${b.color},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }

  ctx.globalCompositeOperation = 'source-over';

  // Top & bottom edge fades so the section blends into adjacent black sections.
  const topFade = ctx.createLinearGradient(0, 0, 0, h * 0.35);
  topFade.addColorStop(0, 'rgba(10,10,10,0.9)');
  topFade.addColorStop(1, 'rgba(10,10,10,0)');
  ctx.fillStyle = topFade;
  ctx.fillRect(0, 0, w, h);

  const botFade = ctx.createLinearGradient(0, h * 0.65, 0, h);
  botFade.addColorStop(0, 'rgba(10,10,10,0)');
  botFade.addColorStop(1, 'rgba(10,10,10,0.9)');
  ctx.fillStyle = botFade;
  ctx.fillRect(0, 0, w, h);
}

export default function AuroraBlue(props) {
  const { style, className } = props || {};
  const { hostRef, canvasRef } = useBgCanvas(drawAuroraBlue);
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
