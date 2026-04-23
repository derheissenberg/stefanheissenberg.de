/**
 * COMPONENT: PrinciplesSection
 * PURPOSE: Editorial "Six rules I work by" section replacing phrase-block layout.
 */

function SectionRule() {
  return <div className="my-10 h-px w-full bg-white/10 max-[900px]:my-7" aria-hidden />;
}

export function PrinciplesSection() {
  return (
    <section className="bg-[var(--background)] py-[110px] max-[900px]:py-[70px]" aria-label="How I work">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-[1fr_2fr] items-end gap-10 max-[900px]:mb-10 max-[900px]:grid-cols-1">
          <div className="max-w-[280px] max-[900px]:max-w-none">
            <p
              className="text-[12px] uppercase text-cyan-300"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              How I work
            </p>
            <p className="mt-3 text-[15px] text-white/55">
              Six principles, shaped by fifteen years of shipping.
            </p>
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 200,
              fontSize: "clamp(72px, 10vw, 148px)",
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
            }}
          >
            <span>
              Six <em style={{ fontStyle: "italic", fontWeight: 700 }}>rules</em>
            </span>
            <br />
            <span className="text-white/30">I work by.</span>
          </h2>
        </div>

        <SectionRule />

        <div className="grid grid-cols-[1.6fr_1fr] gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <article>
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              01 - Principle
            </p>
            <h3
              className="mt-4 italic text-white max-[900px]:text-[38px] max-[900px]:not-italic max-[900px]:font-[600] max-[560px]:text-[32px]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500, fontSize: "clamp(42px, 5vw, 68px)" }}
            >
              Beginner&apos;s mind.
            </h3>
            <p
              className="mt-3 text-[12px] uppercase text-white/55"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              Learn rules to break them
            </p>
            <p className="mt-4 max-w-[520px] text-[17px] leading-[1.65] text-white/70">
              Every product deserves a fresh look, even the mature ones. I stay close to the beginner mindset that
              questions assumptions and finds the unobvious path forward.
            </p>
          </article>
          <article>
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              02 - Principle
            </p>
            <h3
              className="mt-4 text-[34px] text-white max-[900px]:text-[38px] max-[900px]:not-italic max-[900px]:font-[600] max-[560px]:text-[32px]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500 }}
            >
              Follow your passion
            </h3>
            <p
              className="mt-3 text-[12px] uppercase text-white/55"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              No fear. Make it count.
            </p>
            <p className="mt-4 text-[17px] leading-[1.65] text-white/70">
              Fifteen years in and I still chase the problems that pull at me. When the work matters to you, it shows
              up in every detail - tone, friction, delight, clarity.
            </p>
          </article>
        </div>

        <SectionRule />

        <div className="py-1 text-center">
          <p
            className="text-[13px] uppercase text-cyan-300"
            style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
          >
            03 - Manifesto
          </p>
          <blockquote
            className="mx-auto mt-5 max-w-[980px] text-white max-[900px]:text-[36px]"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 4vw, 54px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            <span className="text-white/40">&quot;</span>
            Create{" "}
            <em className="gradient-text-safe" style={{ fontStyle: "italic", fontWeight: 700, paddingRight: "0.08em", marginRight: "0.01em" }}>
              new ways
            </em>
            . Frameworks travel. Teams, markets, and products <em style={{ fontStyle: "italic" }}>don&apos;t</em>.
            <span className="text-white/40">&quot;</span>
          </blockquote>
          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.65] text-white/65">
            Build the playbook that fits your context, not the one that won last quarter in someone else&apos;s war
            story.
          </p>
        </div>

        <SectionRule />

        <div className="grid grid-cols-[1fr_1.6fr] gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <article>
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              04 - Principle
            </p>
            <h3
              className="mt-4 text-[34px] text-white max-[900px]:text-[38px] max-[900px]:not-italic max-[900px]:font-[600] max-[560px]:text-[32px]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500 }}
            >
              Do what you can
            </h3>
            <p
              className="mt-3 text-[12px] uppercase text-white/55"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              Get things done
            </p>
            <p className="mt-4 text-[17px] leading-[1.65] text-white/70">
              Momentum beats perfection. Ship, measure, refine. The best design leaders I know keep 40 small bets
              moving, not 3 grand ones stalled at handoff.
            </p>
          </article>
          <article>
            <p
              className="text-[13px] uppercase text-cyan-300"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              05 - Principle
            </p>
            <h3
              className="mt-4 italic text-white max-[900px]:text-[38px] max-[900px]:not-italic max-[900px]:font-[600] max-[560px]:text-[32px]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500, fontSize: "clamp(42px, 5vw, 68px)" }}
            >
              Use what you have.
            </h3>
            <p
              className="mt-3 text-[12px] uppercase text-white/55"
              style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
            >
              Don&apos;t do it in perfection
            </p>
            <p className="mt-4 text-[17px] leading-[1.65] text-white/70">
              Constraints aren&apos;t an obstacle - they&apos;re the brief. Existing systems, brand assets, and team
              skills are raw material for the next leap, not blockers to bypass.
            </p>
          </article>
        </div>

        <SectionRule />

        <article className="mx-auto max-w-[680px] text-center">
          <p
            className="text-[13px] uppercase text-cyan-300"
            style={{ fontFamily: "var(--font-kode-mono), ui-monospace, monospace", fontWeight: 500, letterSpacing: "0.24em" }}
          >
            06 - Coda
          </p>
          <h3
            className="mt-5 text-[48px] text-white max-[900px]:text-[38px] max-[900px]:font-[600] max-[560px]:text-[32px]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 400 }}
          >
            Build <em style={{ fontStyle: "italic", fontWeight: 600 }}>with care.</em>
          </h3>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.65] text-white/70">
            Build with respect for the people who live with your output - users, engineers, the next designer. Good
            taste is a service, not a signature.
          </p>
        </article>
      </div>
    </section>
  );
}
