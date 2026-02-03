/**
 * COMPONENT: MetricCard
 * PURPOSE: Displays a large number with animated gradient and a descriptive label
 *
 * KEY CONCEPTS:
 * - Large, bold number with animated gradient (blue-cyan or yellow-orange)
 * - Label text below in smaller, regular weight (no animation)
 * - Dark card background with subtle border/glow effect
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
 */

import { GlowCard } from "./GlowCard";

type MetricCardProps = {
  value: string;
  label: string;
  color: "blue" | "yellow";
};

export function MetricCard({ value, label, color }: MetricCardProps) {
  // LEARNING: Conditional gradient classes based on color prop
  // Blue-cyan gradient: cyan → blue → cyan (creates smooth loop)
  // Yellow-orange gradient: yellow → orange → yellow (creates smooth loop)
  const gradientClasses =
    color === "blue"
      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
      : "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400";

  // LEARNING: Parse value to separate digits from symbols
  // Symbols (€, +, %, ×) are rendered at 85-90% size for better readability
  // This prevents symbols from dominating the visual hierarchy
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

  const valueParts = parseValue(value);

  return (
    <GlowCard glowColor={color} className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
      {/* LEARNING: Content wrapper with relative positioning and z-index */}
      {/* Ensures content appears above the glow effect (::before pseudo-element) */}
      {/* LEARNING: text-center centers both the number and label horizontally */}
      <div className="relative z-10 text-center">
        {/* 
          ANIMATED GRADIENT TEXT
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
          
          HOW IT WORKS:
          1. Gradient is 300% wide (3x the text width)
          2. Animation shifts background-position from 0% to 100%
          3. This creates the illusion of colors flowing through the text
          4. Infinite loop creates continuous animation
          5. text-transparent + bg-clip-text makes gradient visible only in text shape
        */}
        {/* LEARNING: Outfit Black (900) font applied to numbers for bold, modern display typography */}
        {/* LEARNING: Symbols (€, +, %, ×) are rendered at 70% size (0.7em) to prevent them from dominating */}
        <p
          className={`${gradientClasses} bg-clip-text text-5xl font-black leading-none text-transparent animate-gradient sm:text-6xl lg:text-7xl`}
          style={{ 
            backgroundSize: "300%",
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 900 // Outfit Black
          }}
        >
          {valueParts.map((part, index) => {
            if (part.isSymbol) {
              // LEARNING: Symbols rendered at 70% size (0.7em) - 20% smaller than previous 87.5%
              // inline-block ensures proper alignment with digits
              return (
                <span key={index} style={{ fontSize: "0.7em", display: "inline-block" }}>
                  {part.text}
                </span>
              );
            }
            return <span key={index}>{part.text}</span>;
          })}
        </p>
        {/* Label - no animation, stays white/grey */}
        <p className="mt-3 text-sm text-[var(--foreground)]/80 sm:text-base">{label}</p>
      </div>
    </GlowCard>
  );
}
