/**
 * PAGE: /hospitable
 * PURPOSE: A single-purpose profile page for the Hospitable Head of Design application.
 *          Mirrors Hospitable's own Notion team-member profile so the reader sees Stefan
 *          in the format they already use for the team.
 *
 * KEY CONCEPTS:
 * - Server Component — no "use client", no interactivity needed
 * - noindex/nofollow: this is a page for one audience, not SEO surface. Deliberately
 *   NOT added to lib/seo/sitemap-routes.ts.
 * - Self-contained styling: the Notion surface (#191919) is intentionally its own
 *   look, not the site's palette, so it reads as a Notion page rather than a portfolio page.
 * - Print-friendly: the same content renders to A4 via the browser print dialog.
 */

import type { Metadata } from "next";
import Image from "next/image";

const PAGE_URL = "https://www.stefanheissenberg.de/hospitable";

export const metadata: Metadata = {
  title: "Stefan Heißenberg — Head of Design at Hospitable",
  description:
    "A profile for the Head of Design role at Hospitable: what I would own, sixteen years of background, and what I would look at first.",
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false },
  openGraph: {
    type: "profile",
    title: "Stefan Heißenberg — Head of Design at Hospitable",
    description:
      "A profile for the Head of Design role at Hospitable: what I would own, sixteen years of background, and what I would look at first.",
    url: PAGE_URL,
  },
};

// ─── Content ──────────────────────────────────────────────────────────────────

const PROPERTIES: { icon: string; label: string; value: React.ReactNode }[] = [
  { icon: "☰", label: "Role", value: "Head of Design" },
  {
    icon: "☰",
    label: "Team",
    value: (
      <span className="inline-block rounded-[4px] bg-[#3a2d24] px-[9px] py-[2px] text-[14px] leading-[20px] font-normal text-[#d9a679]">
        Design
      </span>
    ),
  },
  { icon: "📅", label: "Started on", value: "Four weeks from yes" },
  {
    icon: "☉",
    label: "Where are you",
    value: (
      <span className="inline-block rounded-[4px] bg-[#3a2a44] px-[9px] py-[2px] text-[14px] leading-[20px] font-normal text-[#c3a3e3]">
        Cologne, Germany — CET
      </span>
    ),
  },
  {
    icon: "🔗",
    label: "Files & media",
    value: (
      <a
        href="https://www.stefanheissenberg.de/design-portfolio-sh"
        className="text-[#5aa7d6] underline-offset-2 hover:underline"
      >
        stefanheissenberg.de/design-portfolio-sh
      </a>
    ),
  },
];

const BIO: { emoji: string; text: string }[] = [
  { emoji: "👨‍🎨", text: "16 years as a designer in agencies, startups and enterprise" },
  {
    emoji: "🚀",
    text:
      "First designer at Saloodo!, DHL's freight marketplace — reported to the CEO/CTO, built the team, grew past 50 countries",
  },
  { emoji: "🌐", text: "6 years leading a fully remote design team across Europe" },
  { emoji: "🌍", text: "Built 5 ventures with friends — apps, shops, brands" },
];

const TALK_ABOUT: { emoji: string; text: string }[] = [
  { emoji: "🎒", text: "Travel — to see the world and live adventures" },
  { emoji: "🎸", text: "Music — all types of rock" },
  { emoji: "🏀", text: "Sports — Basketball, Taekwon-Do, Boarding (snow, surf, skate)" },
  { emoji: "🇪🇸", text: "Learning — React Native, Claude Code, Spanish" },
];

// ─── Building blocks ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-[26px] last:mb-0">
      <h2 className="mb-[6px] text-[20px] font-semibold leading-[26px] text-white">{title}</h2>
      {children}
    </section>
  );
}

function EmojiList({ items }: { items: { emoji: string; text: string }[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li
          key={item.text}
          className="my-[6px] flex items-start gap-[9px] text-[16px] leading-[24px] text-[#DCDCDC]"
        >
          <span aria-hidden className="shrink-0 leading-[24px]">
            {item.emoji}
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HospitableProfilePage() {
  return (
    <main className="min-h-screen bg-[#191919] px-6 py-12 text-[#EBEBEB] sm:px-10 sm:py-16">
      <article className="mx-auto w-full max-w-[720px]">
        <div aria-hidden className="mb-[14px] text-[52px] leading-none">
          🎸
        </div>

        <h1 className="mb-4 text-[32px] font-bold leading-[40px] text-white sm:text-[40px] sm:leading-[48px]">
          Stefan Heißenberg
        </h1>

        <dl className="mb-[6px]">
          {PROPERTIES.map((prop) => (
            <div key={prop.label} className="flex flex-wrap items-center py-[5px] text-[14px] leading-[21px]">
              <dt className="flex w-[112px] shrink-0 items-center gap-2 text-[#9B9B9B] sm:w-[150px]">
                <span aria-hidden className="w-[15px] text-[#7a7a7a]">
                  {prop.icon}
                </span>
                {prop.label}
              </dt>
              <dd className="m-0 min-w-0 flex-1 break-words text-[#E4E4E4]">{prop.value}</dd>
            </div>
          ))}
        </dl>

        <hr className="my-[14px] mb-[22px] border-0 border-t border-[#2c2c2c]" />

        <div className="flex flex-col gap-[30px] sm:flex-row">
          <div className="shrink-0">
            <div className="relative h-[256px] w-[188px] overflow-hidden rounded-lg border border-[#2c2c2c] bg-[#202020]">
              <Image
                src="/images/stefan-heissenberg-profile.jpg"
                alt="Stefan Heißenberg"
                fill
                sizes="188px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <Section title="Mission">
              <p className="m-0 text-[16px] leading-[24px] text-[#D6D6D6]">
                Own the craft and the standard behind every screen a host touches, and keep my hands
                in the work. Simple at one door and at a hundred, and the quiet half of that is time
                given back <span aria-hidden>✨</span>
              </p>
            </Section>

            <Section title="Bio">
              <EmojiList items={BIO} />
            </Section>

            <Section title="Happy to talk about">
              <EmojiList items={TALK_ABOUT} />
            </Section>

            <Section title="First thing I'd look at">
              <p className="m-0 flex items-start gap-[9px] text-[16px] leading-[24px] text-[#DCDCDC]">
                <span aria-hidden className="shrink-0 leading-[24px]">
                  👨🏻‍💻
                </span>
                <span>
                  Whether the dense screens still breathe. Software this busy needs whitespace to
                  stay calm.
                </span>
              </p>
            </Section>
          </div>
        </div>
      </article>
    </main>
  );
}
