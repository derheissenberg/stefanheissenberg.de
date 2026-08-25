/**
 * PRESENTATION PARTS — shared building blocks for the interview deck.
 * Self-contained: only depends on globals.css tokens (type-kicker,
 * gradient-text-safe, animate-gradient, font-outfit, font-kode-mono).
 */

import Image from "next/image";
import type { ReactNode } from "react";

/* ---------- Small typography ---------- */

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="type-kicker mb-6 text-[11px] uppercase tracking-[0.18em] text-cyan-300 sm:text-[12px]">
      {children}
    </p>
  );
}

export function SlideHeadline({ children, size = "default" }: { children: ReactNode; size?: "default" | "large" }) {
  const scale =
    size === "large"
      ? "text-[clamp(40px,5.5vw,76px)]"
      : "text-[clamp(32px,4.2vw,58px)]";
  return (
    <h1
      className={`font-outfit ${scale} max-w-[18ch] font-semibold text-white`}
      style={{ lineHeight: 1.08, letterSpacing: "-0.025em" }}
    >
      {children}
    </h1>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return (
    <p className="font-outfit max-w-[58ch] text-[15px] leading-[1.6] text-white/80 lg:text-[17px]">
      {children}
    </p>
  );
}

/** One gradient-emphasized word/number inside a headline or stat. */
export function Grad({ children }: { children: ReactNode }) {
  return (
    <em
      className="gradient-text-safe inline font-bold not-italic"
      style={{ backgroundSize: "300%", paddingRight: "0.06em" }}
    >
      {children}
    </em>
  );
}

/* ---------- Fact rail ---------- */

export type Fact = { label?: string; value: string };

export function FactRail({ facts, compact = false }: { facts: Fact[]; compact?: boolean }) {
  return (
    <aside
      className={`flex ${compact ? "flex-row flex-wrap gap-x-10 gap-y-4" : "w-[240px] shrink-0 flex-col gap-6"} border-l border-white/10 pl-6`}
      aria-label="Key facts"
    >
      {facts.map((f) => (
        <div key={f.value}>
          {f.label ? (
            <p className="font-kode-mono mb-1 text-[10px] uppercase tracking-[0.16em] text-white/40">{f.label}</p>
          ) : null}
          <p className="font-outfit text-[14px] leading-snug text-white/85 lg:text-[15px]">{f.value}</p>
        </div>
      ))}
    </aside>
  );
}

/* ---------- Role split (the I-vs-team component) ---------- */

export function RoleSplit({ myRole, theTeam }: { myRole: string; theTeam: string }) {
  return (
    <div className="mt-auto grid max-w-[820px] gap-x-10 gap-y-3 border-t border-white/10 pt-5 sm:grid-cols-2">
      <div>
        <p className="font-kode-mono mb-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">My role</p>
        <p className="font-outfit text-[13px] leading-[1.5] text-white/75 lg:text-[14px]">{myRole}</p>
      </div>
      <div>
        <p className="font-kode-mono mb-1 text-[10px] uppercase tracking-[0.18em] text-white/40">The team</p>
        <p className="font-outfit text-[13px] leading-[1.5] text-white/75 lg:text-[14px]">{theTeam}</p>
      </div>
    </div>
  );
}

/* ---------- Stat band ---------- */

export function StatBand({ stats }: { stats: { value: ReactNode; label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-6 py-2">
      {stats.map((s, i) => (
        <div key={i}>
          <p
            className="font-outfit text-[clamp(34px,3.6vw,52px)] font-bold text-white"
            style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            {s.value}
          </p>
          <p className="font-kode-mono mt-2 text-[10px] uppercase tracking-[0.16em] text-white/45">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Simple diagrams (code-built, no imagery needed) ---------- */

export function FlowDiagram({ steps, dead }: { steps: string[]; dead?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`rounded-xl border px-4 py-3 font-outfit text-[13px] leading-snug lg:text-[14px] ${
                last && dead
                  ? "border-orange-400/50 bg-orange-400/[0.06] text-orange-300"
                  : "border-white/12 bg-white/[0.03] text-white/80"
              }`}
            >
              {s}
            </div>
            {!last && <span className="font-kode-mono text-white/30">→</span>}
          </div>
        );
      })}
    </div>
  );
}

export function CitiesRow() {
  const cities = [
    { name: "Berlin", role: "Product design" },
    { name: "Amsterdam", role: "Design + research" },
    { name: "Barcelona", role: "Product design" },
  ];
  return (
    <div className="flex flex-wrap gap-x-16 gap-y-6 py-2">
      {cities.map((c) => (
        <div key={c.name}>
          <p className="font-outfit text-[clamp(26px,2.6vw,38px)] font-semibold text-white" style={{ letterSpacing: "-0.02em" }}>
            {c.name}
          </p>
          <p className="font-kode-mono mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40">{c.role}</p>
        </div>
      ))}
    </div>
  );
}

export function DualTrackDiagram() {
  return (
    <div className="max-w-[720px] space-y-3">
      {[
        { lane: "Discovery", body: "User testing · experiments · research rhythms inside the sprint cycle", accent: true },
        { lane: "Delivery", body: "Design sprints for the urgent work · one Kanban board, sorted by priority", accent: false },
      ].map((l) => (
        <div key={l.lane} className="flex items-stretch gap-4">
          <div className="font-kode-mono flex w-[104px] shrink-0 items-center text-[10px] uppercase tracking-[0.16em] text-white/45">
            {l.lane}
          </div>
          <div
            className={`flex-1 rounded-xl border px-4 py-3 font-outfit text-[13px] text-white/80 lg:text-[14px] ${
              l.accent ? "border-cyan-300/30 bg-cyan-300/[0.04]" : "border-white/12 bg-white/[0.03]"
            }`}
          >
            {l.body}
          </div>
        </div>
      ))}
      <div className="flex items-stretch gap-4 pt-1">
        <div className="w-[104px] shrink-0" />
        <div className="flex-1 rounded-xl border border-yellow-400/35 bg-yellow-400/[0.05] px-4 py-3 font-outfit text-[13px] text-yellow-200/90 lg:text-[14px]">
          Quarterly design grooming — all POs in one room, aligning their priorities with each other
        </div>
      </div>
    </div>
  );
}

export function AiPipelineDiagram() {
  return (
    <div className="space-y-4">
      <FlowDiagram steps={["Figma", "MCP", "Claude Code", "Shipped UI"]} />
      <FlowDiagram steps={["On-prem GenAI research hub", "Findings the whole team can query"]} />
    </div>
  );
}

/* ---------- Media ---------- */

export function Media({
  src,
  alt,
  ratio = "16/10",
  maxW = 900,
}: {
  src: string;
  alt: string;
  ratio?: string;
  maxW?: number;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-white/10"
      style={{ aspectRatio: ratio, maxWidth: maxW }}
    >
      <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 900px" />
    </div>
  );
}
