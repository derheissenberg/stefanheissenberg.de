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

const pageTitle = "Stefan Heißenberg — Head of Experience Design | Product & Design Leadership";
const pageDescription =
  "Head of Experience Design. 15 years building digital products from startup to enterprise. Product and design leadership across EMEA.";

/** File on disk: `public/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png` */
const heroImagePath = "/images/hero-portrait-strategic-ux-design-stefan_heissenberg-desktop.png";
const heroImageWidth = 1920;
const heroImageHeight = 1200;

const keywordsList =
  "Head of Experience Design, Head of Product, Head of Design, VP Design, VP Product, Director of Design, Director of Product, Principal Product Designer, Staff Product Designer, UX Strategy, UX Leadership, Product Leadership, Design Leadership, Design Systems, Product Discovery, UX Research, AI in Design, Distributed Teams, Remote Design Leadership, B2B SaaS, Enterprise UX, Logistics Tech, Fintech, Cologne, Germany, NRW, Stefan Heißenberg, stefanheissenberg";

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
  title: pageTitle,
  description: pageDescription,
  keywords: keywordsList.split(",").map((k) => k.trim()),
  authors: [{ name: "Stefan Heißenberg" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    url: baseUrl,
    siteName: "Stefan Heißenberg",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    firstName: "Stefan",
    lastName: "Heißenberg",
    images: [
      {
        url: heroImagePath,
        width: heroImageWidth,
        height: heroImageHeight,
        alt: "Stefan Heißenberg — Head of Experience Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImagePath],
  },
  other: {
    "geo.region": "DE-NW",
    "geo.placename": "Cologne",
    "geo.position": "50.9375;6.9603",
    ICBM: "50.9375, 6.9603",
    subject: "Head of Experience Design | Product and design leadership portfolio",
    classification: "Professional Portfolio",
    category: "UX, Product Design, Design Leadership, Technology",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stefan Heißenberg",
  alternateName: "Stefan Heissenberg",
  givenName: "Stefan",
  familyName: "Heißenberg",
  url: baseUrl,
  image: `${baseUrl}${heroImagePath}`,
  jobTitle: "Head of Experience Design",
  description:
    "Product and design leadership across fifteen years — from startup to enterprise. Currently Head of Experience Design at DHL Global Forwarding, reporting to the VP of Product.",
  worksFor: {
    "@type": "Organization",
    name: "DHL Global Forwarding",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cologne",
    addressRegion: "North Rhine-Westphalia",
    addressCountry: "DE",
  },
  sameAs: ["https://www.linkedin.com/in/stefanheissenberg/"],
  knowsAbout: [
    "UX Strategy",
    "Product Leadership",
    "Design Leadership",
    "Product Discovery",
    "UX Research",
    "Design Systems",
    "AI in Design",
    "Distributed Team Leadership",
    "B2B SaaS",
    "Enterprise UX",
    "Logistics Technology",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Nielsen Norman Group UX Master Certification",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Professional Scrum Master I (PSM I)",
      credentialCategory: "certification",
    },
  ],
  seeks: {
    "@type": "Demand",
    name: "Senior product and design leadership roles",
    description:
      "Head of Experience Design, Head of Product, Head of Design, Director/VP of Design or Product, Principal or Staff Product Designer roles in Europe.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Stefan Heißenberg",
  url: baseUrl,
  author: {
    "@type": "Person",
    name: "Stefan Heißenberg",
  },
  inLanguage: "en",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Stefan Heißenberg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stefan Heißenberg is Head of Experience Design at DHL Global Forwarding, based in Cologne, Germany. He has fifteen years of experience building digital products across agencies, consulting, startups, and enterprise. He reports to the VP of Product and leads a distributed design team across EMEA.",
      },
    },
    {
      "@type": "Question",
      name: "What does Stefan Heißenberg do at DHL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stefan leads experience design for myDHLi, DHL Global Forwarding's central B2B portal serving 22,000+ enterprise customers across 50+ countries. He owns product tracks alongside leading the distributed design team across EMEA, reporting to the VP of Product. He built the research infrastructure from scratch and shifted the platform from stakeholder-driven to evidence-driven decision making.",
      },
    },
    {
      "@type": "Question",
      name: "What was Stefan Heißenberg's role at Saloodo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stefan joined Saloodo, DHL's logistics startup, as the founding designer. He helped scale the digital freight marketplace from a regional pilot to 50+ countries, working alongside the data and AI team on recommender engines, conversion funnels, and the MEA expansion that became the blueprint for global rollout.",
      },
    },
    {
      "@type": "Question",
      name: "What roles is Stefan Heißenberg looking for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stefan is open to senior leadership roles in product and design: Head of Experience Design, Head of Product, Head of Design, Director or VP of Design or Product, and Principal or Staff Product Designer positions. He is based in Cologne and open to remote or hybrid roles across Europe.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Stefan Heißenberg's background distinctive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stefan bridges enterprise scale and startup velocity. He has founded five ventures of his own, led a distributed design team across EMEA for six years, and built research infrastructure from zero inside one of the world's largest logistics companies. He holds the Nielsen Norman Group UX Master Certification and is a Professional Scrum Master (PSM I).",
      },
    },
    {
      "@type": "Question",
      name: "How does Stefan Heißenberg use AI in his design work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stefan integrates AI across the design workflow: research synthesis through DHL's on-prem GenAI Hub, Figma MCP connecting design directly to code, and Claude writing production code for his side projects. He treats AI as a way to close the loop between discovery, design, and shipping — not as a novelty layer.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${kodeMono.variable} ${cherryBomb.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
