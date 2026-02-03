/**
 * COMPONENT: Button
 * PURPOSE: Link-styled as button for primary and secondary CTAs
 *
 * KEY CONCEPTS:
 * - Renders <a> when href is provided (CTAs are mostly links)
 * - "primary": Animated blue gradient background (darker variant for better readability), white text, Kode Mono font — "Get in touch"
 * - "secondary": transparent, cyan border, white text — "Read full story"
 * - "secondary-gradient": Animated blue gradient border and text — "Read full story" (for case study teasers)
 * - "ghost": Smaller variant of secondary-gradient with reduced padding and font size, keeps all effects — "← Back" (for navigation)
 * - Figma specs: padding 12px 16px (py-3 px-4), Kode Mono font for primary
 * - Mouse-following glow effect on hover (similar to GlowCard)
 *
 * ANIMATED GRADIENT BACKGROUND (Primary variant):
 * - Uses darker blue gradient: cyan-500 → blue-600 → cyan-500 (darker than text gradients)
 * - Darker variant provides better readability on larger button area
 * - Still harmonious with standard blue gradient (cyan-400 → blue-500) used in text
 * - Text remains white for good contrast against animated gradient
 * - Animation: 6s infinite loop, smooth color transitions
 *
 * ANIMATED GRADIENT BORDER & TEXT (Secondary-gradient variant):
 * - Uses same blue gradient as primary: cyan-400 → blue-500 → cyan-400
 * - Border and text both use animated gradient
 * - Background is transparent/dark to show border effect
 * - Animation: 6s infinite loop, synchronized with border animation
 *
 * MOUSE-FOLLOWING GLOW EFFECT:
 * - Uses same technique as GlowCard component
 * - CSS variables (--x, --y) track mouse position relative to button
 * - Radial gradient follows cursor for engaging interaction
 * - Applied only to secondary and secondary-gradient button variants
 * 
 * PRIMARY BUTTON HOVER EFFECT:
 * - Simple darken effect on hover (reduced opacity)
 * - No mouse-following glow for cleaner, more subtle interaction
 *
 * ANIMATION TECHNIQUE:
 * - Uses CSS class .button-gradient-animated (defined in globals.css)
 * - backgroundSize: 300% (oversized gradient allows smooth animation)
 * - animate-gradient: Shifts background-position to create flowing effect
 * - Same technique as animated gradient text, but applied to background instead
 * - All background properties in CSS class to avoid React style conflicts
 */

"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "secondary-gradient" | "ghost";

type ButtonProps = {
  variant: ButtonVariant;
  children: ReactNode;
  href: string;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-lg text-white transition-all duration-200 font-[var(--font-kode-mono)] font-bold py-3 px-4 button-gradient-animated button-primary-hover",
  secondary:
    "inline-flex items-center justify-center rounded-lg border border-[var(--accent-cyan)] bg-transparent px-6 py-3 font-medium text-white button-glow",
  "secondary-gradient":
    "button-secondary-gradient button-glow button-primary-hover", // LEARNING: Added button-primary-hover for scale effect on hover
  ghost:
    "button-ghost button-glow button-primary-hover", // LEARNING: Same visual effects as secondary-gradient but without border, smaller size via className props
};

export function Button({ variant, children, href, className = "" }: ButtonProps) {
  const base = variantStyles[variant];
  const isPrimary = variant === "primary";
  const isSecondaryGradient = variant === "secondary-gradient";
  const isGhost = variant === "ghost";
  const isSecondary = variant === "secondary" || isSecondaryGradient || isGhost;
  
  // LEARNING: useRef creates a reference to the DOM element for mouse tracking
  // Allows us to update CSS variables (--x, --y) for glow effect positioning
  // Only create ref for secondary buttons that need glow effect
  const buttonRef = useRef<HTMLAnchorElement>(null);

  /**
   * LEARNING: Mouse event handler for glow effect
   * - Tracks mouse position relative to button
   * - Updates CSS variables --x and --y for radial gradient positioning
   * - Same technique as GlowCard component
   */
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    // Get button's position and size relative to viewport
    const rect = buttonRef.current.getBoundingClientRect();
    // Calculate mouse position relative to button (not viewport)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // LEARNING: setProperty updates CSS custom properties (CSS variables)
    // These variables are used by the ::before pseudo-element's radial-gradient
    // Using setProperty ensures the variables are set on the element itself
    buttonRef.current.style.setProperty("--x", `${x}px`);
    buttonRef.current.style.setProperty("--y", `${y}px`);
  };

  // LEARNING: Reset glow position when mouse leaves button
  // Centers the glow when mouse leaves for smooth transition
  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    // Center the glow effect
    buttonRef.current.style.setProperty("--x", `${rect.width / 2}px`);
    buttonRef.current.style.setProperty("--y", `${rect.height / 2}px`);
  };

  // LEARNING: Primary button uses scale/brightness hover effect (no mouse tracking)
  if (isPrimary) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  // LEARNING: Ghost variant - simplified structure without border wrapper
  // Structure: <a> (container) → <span> (gradient text)
  // No inner div needed since there's no border effect
  if (isGhost) {
    const fontSizeClass = "text-[14px] tracking-[0.15em] lg:text-[16px]";

    return (
      <a 
        ref={buttonRef}
        href={href} 
        className={`${base} ${className} font-[var(--font-kode-mono)] font-bold ${fontSizeClass} py-2 px-3`} // LEARNING: Typography and padding applied directly to anchor tag
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ fontFamily: "var(--font-kode-mono), monospace" }} // LEARNING: Ensure Kode Mono font is applied, overriding any parent font inheritance
      >
        <span className="button-ghost-text">
          {children}
        </span>
      </a>
    );
  }

  // LEARNING: Secondary-gradient uses wrapper approach for gradient border
  // Structure: <a> (gradient wrapper) → <div> (dark inner) → <span> (gradient text)
  // LEARNING: Matches primary button spacing (py-3 px-4), font (Kode Mono, bold), font-size, and letter-spacing
  // LEARNING: Button width is flexible (fit-content) based on text length, not 100% width
  // LEARNING: Mouse tracking handlers for glow effect
  // LEARNING: CSS variables are set on outer <a>, but glow is on inner <div>
  // The inner div has 2px padding, so we need to adjust the position calculation
  if (isSecondaryGradient) {
    // LEARNING: Create a ref for the inner div to calculate position relative to it
    const innerRef = useRef<HTMLDivElement>(null);
    
    const handleMouseMoveInner = (e: MouseEvent<HTMLAnchorElement>) => {
      if (!innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // LEARNING: Set CSS variables on the inner div for its ::before pseudo-element
      innerRef.current.style.setProperty("--x", `${x}px`);
      innerRef.current.style.setProperty("--y", `${y}px`);
    };

    const handleMouseLeaveInner = () => {
      if (!innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      innerRef.current.style.setProperty("--x", `${rect.width / 2}px`);
      innerRef.current.style.setProperty("--y", `${rect.height / 2}px`);
    };

    const fontSizeClass = "text-[18px] tracking-[0.2em] lg:text-[21px]";

    return (
      <a 
        ref={buttonRef}
        href={href} 
        className={`${base} ${className} font-[var(--font-kode-mono)] font-bold ${fontSizeClass}`} // LEARNING: Typography - font-family, font-weight, font-size, letter-spacing applied to anchor tag
        onMouseMove={handleMouseMoveInner}
        onMouseLeave={handleMouseLeaveInner}
        style={{ fontFamily: "var(--font-kode-mono), monospace" }} // LEARNING: Ensure Kode Mono font is applied, overriding any parent font inheritance (e.g., font-mono from useMonospaceFont)
      >
        <div ref={innerRef} className="button-secondary-gradient-inner py-3 px-4">
          {/* LEARNING: Typography is applied to parent anchor tag, span only handles gradient text effect */}
          <span className="button-secondary-gradient-text">
            {children}
          </span>
        </div>
      </a>
    );
  }

  // LEARNING: Secondary button with mouse-following glow effect
  // LEARNING: Same structure as GlowCard - ref, handlers, and button-glow class
  return (
    <a
      ref={buttonRef}
      href={href}
      className={`${base} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}
