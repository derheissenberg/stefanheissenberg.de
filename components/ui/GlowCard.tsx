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

import { useRef, forwardRef, type MouseEvent, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "yellow" | "white";
}

// LEARNING: forwardRef allows parent components to pass a ref to this component
// This is needed for Intersection Observer in MetricCard to detect when card is in view
export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ children, className = "", glowColor = "white" }, forwardedRef) => {
    // LEARNING: useRef creates a reference to the DOM element
    // Allows us to access the element directly (for setting CSS variables)
    // Unlike useState, updating refs doesn't trigger re-renders
    // We use our own internal ref for mouse tracking, but merge with forwardedRef
    const internalRef = useRef<HTMLDivElement>(null);
    
    // LEARNING: Merge internal ref and forwarded ref
    // This allows both our mouse tracking and parent's Intersection Observer to work
    const cardRef = (node: HTMLDivElement | null) => {
      // Set internal ref
      if (internalRef.current !== node) {
        internalRef.current = node;
      }
      
      // Set forwarded ref if it exists
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    /**
     * LEARNING: Mouse event handler
     * - e.clientX/Y: Mouse position relative to viewport
     * - getBoundingClientRect(): Gets card's position relative to viewport
     * - Calculate relative position: mouse position - card position
     * - Update CSS variables: --x and --y for gradient positioning
     */
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!internalRef.current) return;

      // Get card's position and size relative to viewport
      const rect = internalRef.current.getBoundingClientRect();
      // Calculate mouse position relative to card (not viewport)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // LEARNING: setProperty updates CSS custom properties (CSS variables)
      // These variables are used by the ::before pseudo-element's radial-gradient
      // Updates happen in real-time as mouse moves, creating smooth tracking
      internalRef.current.style.setProperty("--x", `${x}px`);
      internalRef.current.style.setProperty("--y", `${y}px`);
    };

    // LEARNING: onMouseLeave resets glow when mouse leaves card
    // Optional: Could fade out smoothly or reset to center
    const handleMouseLeave = () => {
      if (!internalRef.current) return;
      // Reset to center position (optional - glow will fade via CSS opacity)
      const rect = internalRef.current.getBoundingClientRect();
      internalRef.current.style.setProperty("--x", `${rect.width / 2}px`);
      internalRef.current.style.setProperty("--y", `${rect.height / 2}px`);
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
);

// LEARNING: Display name for debugging in React DevTools
GlowCard.displayName = "GlowCard";
