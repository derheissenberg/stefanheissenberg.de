/**
 * COMPONENT: Button
 * PURPOSE: Link-styled as button for primary and secondary CTAs
 *
 * Typography matches handoff `02-fifteen-years-outro.html` (btn-primary / btn-ghost).
 * Animated backgrounds use codebase `.button-gradient-animated`, not the HTML’s diagonal gradient.
 *
 * Variants:
 * - "primary": 13px / 700 / 0.18em uppercase / py-14px px-22px / rounded 10px
 * - "outline": "btn-ghost" handoff — 12px / 600 / py-12px px-20px
 * - "secondary" | "secondary-gradient" | "ghost": same scale classes as above where applicable
 */

"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "secondary-gradient" | "ghost" | "outline" | "icon";

type ButtonLinkProps = {
  variant: "primary" | "secondary" | "secondary-gradient" | "ghost" | "outline";
  children: ReactNode;
  href: string;
  className?: string;
};

type ButtonIconProps = {
  variant: "icon";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  "aria-label": string;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonLinkProps | ButtonIconProps;

/** Handoff `.btn-primary` — Kode Mono, 13px, 700, 0.18em, uppercase */
const typoPrimary =
  "font-[var(--font-kode-mono)] text-[13px] font-bold uppercase leading-none tracking-[0.18em] antialiased";
/** Gradient CTAs (“Read full story”) — primary label scale */
const typoGradientCta = typoPrimary;
/** Handoff `.btn-ghost` label scale — 12px / 600 / 0.18em uppercase */
const typoSmall =
  "font-[var(--font-kode-mono)] text-[12px] font-semibold uppercase leading-none tracking-[0.18em] antialiased";

const flexAnchor = "inline-flex items-center justify-center gap-[10px]";

const variantStyles: Record<Exclude<ButtonVariant, "icon">, string> = {
  primary: `${flexAnchor} rounded-[10px] text-white transition-all duration-200 py-[14px] px-[22px] button-gradient-animated button-primary-hover ${typoPrimary}`,
  secondary: `${flexAnchor} rounded-[10px] border border-[var(--accent-cyan)] bg-transparent py-[14px] px-[22px] text-white button-glow ${typoPrimary}`,
  "secondary-gradient": `${flexAnchor} button-secondary-gradient button-glow button-primary-hover`,
  ghost: `${flexAnchor} button-ghost button-glow button-primary-hover`,
  outline: `${flexAnchor} rounded-[10px] border border-white/20 bg-transparent py-[12px] px-[20px] text-white transition-[background-color,border-color] duration-200 hover:border-white/40 hover:bg-white/[0.06] ${typoSmall}`,
};

export function Button(props: ButtonProps) {
  // Handle icon variant (button element, not anchor)
  if (props.variant === "icon") {
    const {
      children,
      className,
      disabled,
      onClick,
      type = "button",
      "aria-label": ariaLabel,
    } = props;
    return (
      <button
        type={type}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white button-gradient-animated",
          disabled && "opacity-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
          className
        )}
      >
        {children}
      </button>
    );
  }

  // From here on, we know it's a link variant (has href)
  const { variant, children, href, className = "" } = props;
  const base = variantStyles[variant];
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";
  const isSecondaryGradient = variant === "secondary-gradient";
  const isGhost = variant === "ghost";

  const buttonRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    buttonRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty("--x", `${rect.width / 2}px`);
    buttonRef.current.style.setProperty("--y", `${rect.height / 2}px`);
  };

  if (isPrimary) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace" }}
      >
        {children}
      </a>
    );
  }

  if (isOutline) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace" }}
      >
        {children}
      </a>
    );
  }

  if (isGhost) {
    return (
      <a
        ref={buttonRef}
        href={href}
        className={`${base} ${typoSmall} py-[12px] px-[20px] ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace" }}
      >
        <span className="button-ghost-text">{children}</span>
      </a>
    );
  }

  if (isSecondaryGradient) {
    const handleMouseMoveInner = (e: MouseEvent<HTMLAnchorElement>) => {
      if (!innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      innerRef.current.style.setProperty("--x", `${x}px`);
      innerRef.current.style.setProperty("--y", `${y}px`);
    };

    const handleMouseLeaveInner = () => {
      if (!innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      innerRef.current.style.setProperty("--x", `${rect.width / 2}px`);
      innerRef.current.style.setProperty("--y", `${rect.height / 2}px`);
    };

    return (
      <a
        ref={buttonRef}
        href={href}
        className={`${base} ${typoGradientCta} ${className}`}
        onMouseMove={handleMouseMoveInner}
        onMouseLeave={handleMouseLeaveInner}
        style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace" }}
      >
        <div ref={innerRef} className="button-secondary-gradient-inner py-[14px] px-[22px]">
          <span className="button-secondary-gradient-text">{children}</span>
        </div>
      </a>
    );
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`${base} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace" }}
    >
      {children}
    </a>
  );
}

export function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}
