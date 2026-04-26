/**
 * COMPONENT: MetricCard
 * PURPOSE: Displays a large number with animated gradient and a descriptive label
 *
 * KEY CONCEPTS:
 * - Large, bold number with animated gradient (blue-cyan or yellow-orange)
 * - Count-up animation triggered on scroll into view
 * - Label text below in smaller, regular weight (no animation)
 * - Card: light backdrop blur (1.5px) and slightly higher fill opacity — cheaper than `backdrop-blur-sm` for many grid cells
 * - Animated gradient text effect using background-position animation
 * - Mouse-following glow effect using GlowCard wrapper
 *
 * ANIMATED GRADIENT TECHNIQUE:
 * - bg-clip-text: Clips background gradient to text shape only
 * - text-transparent: Makes text invisible so gradient shows through
 * - bg-300%: Oversized background (300% width) allows smooth animation movement
 * - animate-gradient: Shifts background-position to create flowing motion
 * - bg-gradient-to-r: Horizontal gradient (left to right)
 * - Three-color stops (from → via → to) create smooth color transitions
 *
 * COUNT-UP ANIMATION:
 * - Uses react-countup for smooth number animation
 * - Triggers when card scrolls into view (Intersection Observer)
 * - Animates only once (triggerOnce: true)
 * - Staggered delay for multiple cards (100ms between each)
 * - Handles decimals with European format (dot as decimal separator)
 * - Preserves prefixes (€) and suffixes (+, %, ×)
 */

"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { GlowCard } from "./GlowCard";

type MetricCardProps = {
  value: string;
  label: string;
  color: "blue" | "yellow";
  delay?: number; // LEARNING: Stagger delay in milliseconds (e.g., index * 100)
};

export function MetricCard({ value, label, color, delay = 0 }: MetricCardProps) {
  // LEARNING: Intersection Observer hook - triggers animation when card scrolls into view
  // triggerOnce: true = animate only once, not every time it enters viewport
  // threshold: 0.1 = trigger when 10% of card is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // LEARNING: Conditional gradient classes based on color prop
  // Blue-cyan gradient: cyan → blue → cyan (creates smooth loop)
  // Yellow-orange gradient: yellow → orange → yellow (creates smooth loop)
  const gradientClasses =
    color === "blue"
      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
      : "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400";

  // LEARNING: Parse value string to extract numeric value, prefix, suffix, and decimal info
  // Examples:
  // "400+" → { prefix: "", number: 400, suffix: "+", decimals: 0 }
  // "€1.2M" → { prefix: "€", number: 1.2, suffix: "M", decimals: 1 }
  // "6.720" → { prefix: "", number: 6.720, suffix: "", decimals: 3 }
  const parseNumericValue = (val: string) => {
    let prefix = "";
    let suffix = "";
    let numericPart = val;

    // Extract prefix symbols (€)
    const prefixMatch = val.match(/^[€$£¥]/);
    if (prefixMatch) {
      prefix = prefixMatch[0];
      numericPart = val.slice(prefix.length);
    }

    // Extract suffix symbols (+, %, ×, M, K, B)
    const suffixMatch = numericPart.match(/[+%×MKB]+$/);
    if (suffixMatch) {
      suffix = suffixMatch[0];
      numericPart = numericPart.slice(0, -suffix.length);
    }

    // Parse the numeric part and count decimals
    const cleanNumber = numericPart.replace(/,/g, ""); // Remove thousand separators if any
    const number = parseFloat(cleanNumber) || 0;
    const decimalMatch = cleanNumber.match(/\.(\d+)$/);
    const decimals = decimalMatch ? decimalMatch[1].length : 0;

    return { prefix, number, suffix, decimals };
  };

  const { prefix, number, suffix, decimals } = parseNumericValue(value);

  // LEARNING: Parse value to separate digits from symbols for rendering
  // This is used for rendering symbols at smaller size
  // Symbols (€, +, %, ×) are rendered at 70% size for better readability
  const parseValue = (val: string) => {
    const parts: Array<{ text: string; isSymbol: boolean }> = [];
    const symbols = ["€", "+", "%", "×"];
    let currentPart = "";
    let isCurrentSymbol = false;

    for (let i = 0; i < val.length; i++) {
      const char = val[i];
      const isSymbol = symbols.includes(char);

      if (i === 0) {
        // First character determines initial state
        isCurrentSymbol = isSymbol;
        currentPart = char;
      } else if (isSymbol === isCurrentSymbol) {
        // Same type, continue building current part
        currentPart += char;
      } else {
        // Type changed, save current part and start new one
        parts.push({ text: currentPart, isSymbol: isCurrentSymbol });
        currentPart = char;
        isCurrentSymbol = isSymbol;
      }
    }

    // Don't forget the last part
    if (currentPart) {
      parts.push({ text: currentPart, isSymbol: isCurrentSymbol });
    }

    return parts.length > 0 ? parts : [{ text: val, isSymbol: false }];
  };

  return (
    <GlowCard
      ref={ref}
      glowColor={color}
      className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-[1.5px]"
    >
      {/* LEARNING: Content wrapper with relative positioning and z-index */}
      {/* Ensures content appears above the glow effect (::before pseudo-element) */}
      {/* LEARNING: text-center centers both the number and label horizontally */}
      <div className="relative z-10 text-center">
        {/* 
          ANIMATED GRADIENT TEXT WITH COUNT-UP ANIMATION
          LEARNING: Multiple techniques combined for animated gradient text effect
          
          CSS CLASSES BREAKDOWN:
          - text-5xl sm:text-6xl lg:text-7xl: Responsive font sizes (large numbers)
          - font-black: Font weight 900 (very bold)
          - bg-gradient-to-r: Horizontal gradient direction (left to right)
          - from-cyan-400 via-blue-500 to-cyan-400: Three-color gradient stops
            * "via" creates middle color for smoother transitions
            * Same start/end color creates seamless loop
          - bg-300%: Custom background size (300% width) - allows animation without showing edges
          - bg-clip-text: Clips background to text shape (only text area shows gradient)
          - text-transparent: Makes text invisible (so gradient shows through)
          - animate-gradient: Applies animation (shifts background-position)
          
          COUNT-UP ANIMATION:
          - Triggered when inView becomes true (Intersection Observer)
          - Starts after stagger delay (100ms per card index)
          - Duration: 2500ms for smooth animation
          - Easing: easeOutExpo for professional deceleration
          - Preserves prefix (€), suffix (+, %, ×), and decimal formatting
        */}
        {/* LEARNING: Outfit Black (900) font applied to numbers for bold, modern display typography */}
        {/* LEARNING: Symbols (€, +, %, ×) are rendered at 70% size (0.7em) to prevent them from dominating */}
        {/* LEARNING: Mobile font size: 82px (reduced by 15% from 96px) for better balance */}
        <p
          className={`${gradientClasses} bg-clip-text text-[82px] font-black leading-none text-transparent animate-gradient sm:text-6xl lg:text-7xl`}
          style={{ 
            backgroundSize: "300%",
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 900 // Outfit Black
          }}
        >
          {/* LEARNING: Render prefix at smaller size if it exists */}
          {prefix && (
            <span style={{ fontSize: "0.7em", display: "inline-block" }}>
              {prefix}
            </span>
          )}
          {/* LEARNING: CountUp component animates the number from 0 to target value */}
          {/* Only starts animating when inView is true (card is scrolled into view) */}
          {/* delay prop creates staggered animation effect for multiple cards */}
          {inView ? (
            <CountUp
              start={0}
              end={number}
              duration={2.5}
              decimals={decimals}
              decimal="."
              separator={decimals > 0 ? "" : ","} // Use comma separator only for integers
              delay={delay / 1000} // Convert milliseconds to seconds
              useEasing={true}
              easingFn={(t, b, c, d) => {
                // LEARNING: easeOutExpo easing function for smooth deceleration
                // Creates professional-looking animation that slows down at the end
                return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
              }}
            />
          ) : (
            // LEARNING: Show 0 before animation starts (or final value if you prefer)
            <span>0</span>
          )}
          {/* LEARNING: Render suffix at smaller size if it exists */}
          {suffix && (
            <span style={{ fontSize: "0.7em", display: "inline-block" }}>
              {suffix}
            </span>
          )}
        </p>
        {/* Label - no animation, stays white/grey */}
        {/* LEARNING: Increased mobile font size from text-sm (14px) to text-[17px] (~21% increase) for better readability */}
        <p className="mt-3 text-[17px] text-[var(--foreground)]/80 sm:text-base">{label}</p>
      </div>
    </GlowCard>
  );
}
