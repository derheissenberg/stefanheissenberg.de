/**
 * COMPONENT: SectionLabel
 * PURPOSE: Kode Mono meta label (CLIENT, ROLE, etc.) — shared case study hero styling
 *
 * KEY CONCEPTS:
 * - `.type-kicker` in globals.css encodes font, weight, and letter-spacing
 * - Replaces duplicated `labelStyle` objects in case study heroes
 */

import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "dt" | "dd";
};

export function SectionLabel({ children, className = "", as: Tag = "span" }: SectionLabelProps) {
  return <Tag className={`type-kicker ${className}`.trim()}>{children}</Tag>;
}
