import type { Metadata } from "next";
import Script from "next/script";
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

const baseUrl = "https://www.stefanheissenberg.de";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  applicationName: "Stefan Heißenberg",
  creator: "Stefan Heißenberg",
  publisher: "Stefan Heißenberg",
  icons: {
    icon: "/images/stefan-heissenberg-favicon.png",
  },
  title: "Stefan Heißenberg | UX Design Director | UX Strategy & Senior Design Leadership",
  description:
    "UX Design Director with 14+ years in UX Strategy, UI Design, and product design. Head of Experience Design at DHL. Senior design leadership driving B2B digital transformation, design systems, and user-centered innovation. Cologne, open to European opportunities.",
  keywords: [
    "UX Design Director",
    "UX Strategy",
    "Senior UX Design",
    "UI Design",
    "Product Design",
    "Design Leadership",
    "Head of Experience Design",
    "UX Leadership",
    "Design Director",
    "User Experience",
    "User Interface Design",
    "Design Systems",
    "User Research",
    "B2B Design",
    "Enterprise UX",
    "Remote Design Leadership",
    "DHL",
    "Cologne",
    "Germany",
    "Portfolio",
    "myDHLi",
    "Saloodo",
    "Digital Transformation",
  ],
  authors: [{ name: "Stefan Heißenberg" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    type: "profile",
    title: "Stefan Heißenberg | UX Design Director | UX Strategy & Senior Design Leadership",
    description:
      "UX Design Director with 14+ years in UX Strategy, UI Design, and product design. Head of Experience Design at DHL. Senior design leadership for B2B digital transformation.",
    url: "https://www.stefanheissenberg.de",
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    images: [
      {
        url: "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png",
        width: 1200,
        height: 630,
        alt: "Stefan Heißenberg - Head of Experience Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan Heißenberg | UX Design Director | UX Strategy & Senior Design Leadership",
    description: "UX Design Director | 14+ years | UX Strategy, UI Design | DHL | Design Systems & B2B Transformation",
  },
  other: {
    "geo.region": "DE-NW",
    "geo.placename": "Cologne",
    "geo.position": "50.9375;6.9603",
    ICBM: "50.9375, 6.9603",
    subject: "UX Design Director Portfolio | UX Strategy & Senior Design Leadership",
    classification: "Professional Portfolio",
    category: "UX, UI Design, Design, Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LEARNING: JSON-LD Structured Data for AI Agents and Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: "2026-01-23",
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.stefanheissenberg.de/#person",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.stefanheissenberg.de/#webpage" },
      name: "Stefan Heißenberg",
      givenName: "Stefan",
      familyName: "Heißenberg",
      jobTitle: "Head of Experience Design",
      alternateName: "UX Design Director",
      description:
        "UX Design Director and Senior UX Leader with 14+ years in UX Strategy, UI Design, and product design. Head of Experience Design at DHL Global Forwarding. Leads international design teams, design systems, and B2B digital experiences serving millions of users.",
      url: "https://www.stefanheissenberg.de",
      image: "https://www.stefanheissenberg.de/_assets/v11/8a48c1e089ad8c8a5243b9cb08ab393088169f94.png",
      email: "mailto:hallo@stefanheissenberg.de",
      telephone: "+49 176 44473603",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hallo@stefanheissenberg.de",
        contactType: "professional",
        url: "https://www.stefanheissenberg.de",
      },
      sameAs: ["https://www.linkedin.com/in/stefanheissenberg/", "https://medium.com/@derheissenberg"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "North Rhine-Westphalia",
        addressCountry: "Germany",
      },
      worksFor: {
        "@type": "Organization",
        name: "DHL Global Forwarding",
        url: "https://www.dhl.com/global-en/home/our-divisions/freight.html",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "IB-Hochschule Berlin",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Arts in Communication Design",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "UX Master",
          recognizedBy: { "@type": "Organization", name: "Nielsen Norman Group" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "Certified Professional Scrum Master I",
          recognizedBy: { "@type": "Organization", name: "Scrum.org" },
        },
      ],
      knowsAbout: [
        "UX Strategy",
        "User Experience Design",
        "UI Design",
        "Product Design",
        "Design Leadership",
        "Customer Experience Design",
        "Design Systems",
        "User Research",
        "Data Analytics",
        "B2B Digital Transformation",
        "Agile Product Development",
        "Enterprise Software Design",
        "Remote Team Leadership",
        "Design Thinking",
        "Workshops",
        "B2B Logistics",
        "Marketplace UX",
      ],
      knowsLanguage: [
        { "@type": "Language", name: "German", alternateName: "de" },
        { "@type": "Language", name: "English", alternateName: "en" },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Head of Experience Design",
        alternateName: "UX Design Director",
        occupationalCategory: "15-1255.00",
        description:
          "Senior design leadership: UX Strategy, UX/UI design, design systems, user research. Leading global design teams for B2B digital products.",
        skills: "UX Strategy, UX Design, UI Design, Product Design, Design Leadership, User Research, Design Systems, Data Analytics, Team Leadership, Agile Methods",
        experienceRequirements: "14+ years in UX/UI Design",
        qualifications: "UX Master (Nielsen Norman Group), Scrum Master (Scrum.org)",
      },
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${kodeMono.variable} ${cherryBomb.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        {/* LEARNING: JSON-LD Structured Data - placed in body (search engines will find it here) */}
        {/* LEARNING: In Next.js App Router, scripts cannot be direct children of <html>, so we place it in body */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.stefanheissenberg.de/#website",
              url: "https://www.stefanheissenberg.de",
              name: "Stefan Heißenberg",
              description: "UX Design Director. Senior UX Strategy and design leadership at DHL. UX, UI, and product design portfolio.",
              publisher: { "@id": "https://www.stefanheissenberg.de/#person" },
              inLanguage: "en",
            }),
          }}
        />
        {/* LEARNING: Google Tag Manager noscript fallback - must be immediately after opening body tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5RNDLZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* LEARNING: Google Tag Manager script - loads after page becomes interactive */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P5RNDLZ');`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
