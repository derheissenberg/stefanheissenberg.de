/**
 * COMPONENT: GlowCard
 * PURPOSE: Card wrapper with mouse-following glow effect on hover
 *
 * KEY CONCEPTS:
 * - "use client": Required because we use React hooks (useRef) and event handlers
 * - CSS variables (--x, --y) track mouse position relative to card
 * - radial-gradient creates the glow, positioned at mouse location
 * - onMouseMove updates CSS variables in real-time
 * - ::before pseudo-element holds the gradient (doesn't interfere with content)
 * - pointer-events: none on pseudo-element allows clicks to pass through
 *
 * LEARNING: Client Component vs Server Component
 * - Server Components (default): Render on server, no JavaScript sent to client
 * - Client Components ("use client"): Render on client, can use hooks and event handlers
 * - This component needs "use client" because it uses useRef and onMouseMove
 */

"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "yellow" | "white";
}

export function GlowCard({ children, className = "", glowColor = "white" }: GlowCardProps) {
  // LEARNING: useRef creates a reference to the DOM element
  // Allows us to access the element directly (for setting CSS variables)
  // Unlike useState, updating refs doesn't trigger re-renders
  const cardRef = useRef<HTMLDivElement>(null);

  /**
   * LEARNING: Mouse event handler
   * - e.clientX/Y: Mouse position relative to viewport
   * - getBoundingClientRect(): Gets card's position relative to viewport
   * - Calculate relative position: mouse position - card position
   * - Update CSS variables: --x and --y for gradient positioning
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // Get card's position and size relative to viewport
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate mouse position relative to card (not viewport)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // LEARNING: setProperty updates CSS custom properties (CSS variables)
    // These variables are used by the ::before pseudo-element's radial-gradient
    // Updates happen in real-time as mouse moves, creating smooth tracking
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  // LEARNING: onMouseLeave resets glow when mouse leaves card
  // Optional: Could fade out smoothly or reset to center
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    // Reset to center position (optional - glow will fade via CSS opacity)
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--x", `${rect.width / 2}px`);
    cardRef.current.style.setProperty("--y", `${rect.height / 2}px`);
  };

  // LEARNING: Conditional class based on glowColor prop
  // Allows different colored glows (blue, yellow, white) for visual variety
  const glowClass = glowColor === "blue" ? "glow-card-blue" : glowColor === "yellow" ? "glow-card-yellow" : "glow-card";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}
