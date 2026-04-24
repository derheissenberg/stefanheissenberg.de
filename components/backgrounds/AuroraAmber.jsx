"use client";

// AuroraAmber.jsx
//
// DROP-IN background for the "Deep Passion" section.
// Same component structure as AuroraBlue; only the palette differs.
// Warm amber/orange blobs matched to the "10.964" accent tile.
//
// Usage:
//   <section style={{ position: 'relative' }}>
//     <AuroraAmber />
//     <div style={{ position: 'relative', zIndex: 1 }}>
//       {/* Builder / Team Builder / Evidence Builder */}
//     </div>
//   </section>

import React from 'react';
import { useBgCanvas } from './useBgCanvas';

const PAL = {
  c1: '245,183,0',    // yellow   (primary blob)
  c2: '249,115,22',   // orange   (secondary)
  c3: '234,88,12',    // deep orange (accent)
  aA: 0.32, aB: 0.46,
  glowY: 0.38,
};

function drawAuroraAmber(ctx, { w, h, t }) {
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, w, h);

  const evo = (Math.sin(t * 0.06) + 1) / 2;
  const aMix = PAL.aA + (PAL.aB - PAL.aA) * evo;
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

  const topFade = ctx.createLinearGradient(0, 0, 0, h * 0.35);
  topFade.addColorStop(0, 'rgba(8,8,8,0.9)');
  topFade.addColorStop(1, 'rgba(8,8,8,0)');
  ctx.fillStyle = topFade;
  ctx.fillRect(0, 0, w, h);

  const botFade = ctx.createLinearGradient(0, h * 0.65, 0, h);
  botFade.addColorStop(0, 'rgba(8,8,8,0)');
  botFade.addColorStop(1, 'rgba(8,8,8,0.9)');
  ctx.fillStyle = botFade;
  ctx.fillRect(0, 0, w, h);
}

export default function AuroraAmber(props) {
  const { style, className } = props || {};
  const { hostRef, canvasRef } = useBgCanvas(drawAuroraAmber);
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
