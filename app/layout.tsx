import type { Metadata } from "next";
import { Outfit, Kode_Mono, Cherry_Bomb_One } from "next/font/google";
import "./globals.css";

// LEARNING: next/font/google automatically:
// - Self-hosts the font (no external requests)
// - Eliminates layout shift with size-adjust
// - Loads only the weights you specify
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "900"],
  variable: "--font-outfit", // CSS variable for Tailwind
  display: "swap", // Show fallback font until loaded
});

// LEARNING: Kode Mono is used for the "Get in touch" button
// Monospace font for technical/button styling
const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono", // CSS variable for Tailwind
  display: "swap",
});

// LEARNING: Cherry Bomb One is a display font used in DesignWitAttitudeSection
// Playful, rounded font for the phrase blocks
// Only available in weight 400 (Regular)
const cherryBomb = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: "400", // Only weight available for Cherry Bomb One
  variable: "--font-cherry-bomb", // CSS variable for Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stefan Heißenberg | UX Strategy",
  description: "UX Strategy that merges UX- and business metrics to drive growth from startup to enterprise level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${kodeMono.variable} ${cherryBomb.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
