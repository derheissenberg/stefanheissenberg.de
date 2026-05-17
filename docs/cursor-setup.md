# Cursor AI Setup Guide

Complete reference for the AI-assisted development environment in this project.

## Contents

- [How the Layers Work Together](#how-the-layers-work-together)
- [Vibe Coding Workflow](#vibe-coding-workflow)
- [Slash Commands](#slash-commands)
- [Orchestrator and Agents](#orchestrator-and-agents)
- [Hooks](#hooks)
- [Skills Reference](#skills-reference)
- [Skill Routing Decision Tree](#skill-routing-decision-tree)
- [Global vs Project Skills](#global-vs-project-skills)
- [Maintenance](#maintenance)

---

## How the Layers Work Together

Six layers define how Cursor AI behaves in this project. Each layer has a distinct responsibility:

```
┌─────────────────────────────────────────────────┐
│  .cursorrules          — Identity & philosophy  │
├─────────────────────────────────────────────────┤
│  .cursor/rules/        — Behavioral rules       │
├─────────────────────────────────────────────────┤
│  .cursor/skills/       — Domain knowledge       │
├─────────────────────────────────────────────────┤
│  Slash commands        — User-triggered flows   │
├─────────────────────────────────────────────────┤
│  .cursor/hooks/        — System-level guards    │
├─────────────────────────────────────────────────┤
│  Agent personas        — Execution specialists  │
└─────────────────────────────────────────────────┘
```

### `.cursorrules` — Identity & Philosophy

The project root file. Tells every AI interaction who you are, how you learn, what stack you use, and how responses should be structured. Always active, always loaded first.

**Location:** `.cursorrules`

### `.cursor/rules/` — Behavioral Rules

Operational constraints that override default AI behavior. The orchestrator rule (`orchestrator.mdc`) forces the root thread to delegate all work to specialized agents.

**Location:** `.cursor/rules/orchestrator.mdc`

### `.cursor/skills/` — Domain Knowledge

Reusable expertise packages. Each skill contains a `SKILL.md` with instructions, auto-activation keywords, and supporting reference files. Skills load on-demand when the AI detects matching intent.

**Location:** `.cursor/skills/<skill-name>/SKILL.md`

### Slash Commands

Shortcuts that route your intent to the correct agent with pre-configured prompts. Type `/plan` and Sokka handles strategic planning. Type `/fix` and Katara makes a surgical repair.

### `.cursor/hooks/` — System-Level Guards

Shell scripts that run automatically before or after agent actions. They enforce constraints that agents might forget — linting after edits, blocking bad patterns before commits.

**Location:** `.cursor/hooks/`

### Agent Personas

Named specialists (Aang, Katara, Sokka, etc.) that the orchestrator dispatches. Each has a fixed role, model assignment, and set of allowed tools. The root thread never does work itself.

---

## Vibe Coding Workflow

Your philosophy: *"Get things done. Don't die in perfection — but understand everything you ship."*

### The Loop

```
1. Describe what you want (natural language)
2. AI proposes approach + explains key concepts
3. You confirm or ask "why?"
4. AI builds incrementally (one file at a time)
5. You review, learn, iterate
```

### Best Practices

- **Start with `/plan`** for anything touching 3+ files. Get Sokka's strategic breakdown before building.
- **Use `/fix`** for bugs. Katara makes the smallest possible change — no accidental refactors.
- **Use `/build`** for new features. Aang decides the approach and implements it.
- **Ask "why" freely.** The `.cursorrules` file instructs AI to always explain its choices and connect to design concepts you already know.
- **One file at a time.** The setup enforces incremental delivery with pauses for your questions.
- **Read the comments.** Every component gets a header explaining purpose and key concepts. Look for `// LEARNING:` markers.

### When Things Go Wrong

1. Error appears → use `/fix` (routes to Katara)
2. Katara fails twice → system escalates to Aang automatically
3. Still stuck → ask for explanation, then try `/plan` to rethink the approach

---

## Slash Commands

| Command | Agent | Purpose |
|---------|-------|---------|
| `/build` | Aang | Build a feature with no existing plan. Decides approach and implements. |
| `/fix` | Katara | Surgical bug fix. Smallest possible change, no side effects. |
| `/plan` | Sokka | Strategic planning. Analyzes scope, produces ordered task list. |
| `/scout` | Momo | Quick focused task. Single-file changes, simple operations. |
| `/search` | Toph | Codebase exploration. Find files, patterns, understand structure. |
| `/doc` | Iroh | Documentation writing. README, guides, any markdown. |
| `/tasks` | Appa | Execute an existing plan step-by-step. Follows instructions exactly. |
| `/cactus-juice` | Swarm | Parallel multi-agent execution. Launches independent agents simultaneously. |

---

## Orchestrator and Agents

The root thread is a **dispatcher only**. It never reads files, writes code, or runs searches. Every request gets routed to a specialist.

### Agent Table

| Agent | Model | Role | Spawns |
|-------|-------|------|--------|
| **Aang** | claude-4.6-sonnet-medium-thinking | Architect-executor. No plan exists → decides approach + builds. Escalation target after 2+ Katara failures. | toph, momo |
| **Appa** | kimi-k2.5 | Plan executor. Follows instructions exactly, no improvisation. | momo |
| **Katara** | claude-4.6-sonnet-medium-thinking | Precision surgeon. Smallest possible fix, no redesign, no refactor beyond the fix. | toph, momo |
| **Momo** | kimi-k2.5 | Quick focused worker. Single-file changes, bounded scope. | — |
| **Sokka** | claude-4.6-opus-max-thinking | Strategic planner. Ambiguous scope, multi-step features, trade-off analysis. | toph |
| **Toph** | kimi-k2.5 | Explorer. Search, find, explain. Read-only, never modifies files. | — |
| **Iroh** | claude-4.6-opus-max-thinking | Documentation writer. README, CHANGELOG, guides, any prose about the codebase. | — |
| **Zuko** | gemini-3.1-pro | Visual designer. Images, icons, UI mockups, design assets. Root-only dispatch. | — |

### Routing Decision Tree

```
Request arrives at root
│
├── Is it ambiguous / large scope?
│   └── YES → Sokka (plan first)
│
├── Is it a search / exploration?
│   └── YES → Toph
│
├── Is it documentation?
│   └── YES → Iroh
│
├── Is it visual / design?
│   └── YES → Zuko
│
├── Is there already a plan?
│   └── YES → Appa (execute plan)
│
├── Does something need fixing?
│   └── YES → Katara (surgical fix)
│
└── Otherwise → Aang (decide + build)
```

### Task Lifecycle

```
Plan (Sokka) → Explore (Toph) → Execute (Aang/Katara/Appa) → Self-verify → Done
```

Executors own their output quality: they lint, test, and confirm before reporting success.

---

## Hooks

Hooks are shell scripts that run automatically at specific points in the agent workflow. They provide system-level enforcement that doesn't rely on agents remembering to check.

### `afterFileEdit` → `post-edit-lint.sh`

**Trigger:** After any agent edits a file.

**What it does:** Runs the appropriate linter based on file extension:
- `.ts`, `.tsx`, `.js`, `.jsx` → ESLint via `npx`
- `.py` → Ruff or Flake8
- `.rs` → Clippy
- `.go` → golangci-lint

**Why:** Surfaces lint errors immediately rather than relying on agents to manually invoke `ReadLints`.

### `beforeShellExecution` → `pre-commit-check.sh`

**Trigger:** Before any commit is created.

**What it does:** Scans staged files for hard constraint violations:
- `as any` — type safety suppression
- `@ts-ignore` / `@ts-expect-error` — error suppression
- Empty catch blocks — swallowed errors
- Bare `except:` in Python — overly broad error handling

**Why:** Catches anti-patterns that the orchestrator rules forbid. Blocks the commit with a clear violation report if any are found.

---

## Skills Reference

Skills are domain knowledge packages that load on-demand. Each contains a `SKILL.md` with detailed instructions and supporting reference files.

### Project Skills (`.cursor/skills/`)

| Skill | Use When | Auto-trigger Keywords |
|-------|----------|----------------------|
| **architect** | Designing system architecture, high-level technical strategy | system design, architecture, infrastructure |
| **codebase-search** | Finding specific code patterns, tracing function calls, locating bugs (<30 files) | find class, where is, grep, trace |
| **debugging** | Fixing bugs systematically — 4-phase investigation with root cause analysis | bug, error, broken, not working, fails |
| **design-patterns-implementation** | Applying Singleton, Factory, Observer, Strategy, etc. to solve structural problems | design pattern, SOLID, extensible, decouple |
| **documentation-writing** | Creating README, API docs, tutorials, how-to guides — follows Eight Rules + Diataxis | write docs, create README, document, tutorial |
| **frontend-builder** | Building React/Next.js pages, choosing stack, structuring components | new page, component, frontend, UI, layout |
| **mgrep-code-search** | Semantic code search across large codebases (30+ non-gitignored files) | find feature, explore codebase, understand intent |
| **planning** | Feature planning, implementation roadmaps, requirement breakdown | plan, roadmap, requirements, breakdown, evaluate |
| **refactoring-patterns** | Architecture smell-driven refactoring — Extract Method, Replace Conditional, etc. | code smell, extract method, simplify, technical debt |
| **refactoring** | Rename, move, split, migrate — mechanical restructuring operations | rename, extract, move, split class, migrate |
| **technical-roadmap-planning** | Multi-quarter technology investment plans aligned with business goals | roadmap, quarters, technology investment, evolution |
| **vercel-composition-patterns** | Compound components, render props, context providers — scalable component APIs | compound component, boolean props, flexible API |
| **vercel-react-best-practices** | React/Next.js performance — memoization, Suspense, bundle optimization | performance, bundle size, rerender, slow, optimize |
| **web-design-guidelines** | UI review for accessibility, UX best practices, design compliance | review UI, check accessibility, audit design, a11y |

### Global Skills (`~/.cursor/skills-cursor/`)

| Skill | Use When | Auto-trigger Keywords |
|-------|----------|----------------------|
| **babysit** | Keeping a PR merge-ready — triage comments, resolve conflicts, fix CI | PR, merge, CI, conflicts, comments |
| **canvas** | Creating interactive visual artifacts — charts, tables, audits, analyses | analysis, dashboard, chart, table, visual data |
| **create-hook** | Writing new Cursor hooks (`.cursor/hooks/`) | create hook, hooks.json, automate agent |
| **create-rule** | Writing new Cursor rules (`.cursor/rules/`) | create rule, coding standard, convention |
| **create-skill** | Authoring new skill packages (`SKILL.md` structure) | create skill, new skill, SKILL.md |
| **sdk** | Building on the Cursor TypeScript SDK (`@cursor/sdk`) — scripts, CI, automation | @cursor/sdk, Agent.create, programmatic, API |
| **split-to-prs** | Splitting a branch or large change into small reviewable PRs | split PR, split branch, small PRs, reviewable |
| **statusline** | Configuring the CLI status bar / prompt footer | status line, CLI status, prompt footer |
| **update-cursor-settings** | Modifying `settings.json` — themes, fonts, format-on-save, keybindings | settings, theme, font size, format on save |

---

## Skill Routing Decision Tree

When your request could match multiple skills, use this tree to resolve which one applies.

```
What are you trying to do?
│
├── Find code?
│   ├── Codebase < 30 files → codebase-search
│   └── Codebase ≥ 30 files → mgrep-code-search
│
├── Fix a bug?
│   └── debugging (skill) → then /fix (Katara agent)
│
├── Build new UI?
│   └── frontend-builder + vercel-react-best-practices
│       └── Compound component API? → also vercel-composition-patterns
│
├── Refactor code?
│   ├── Rename / move / split → refactoring
│   └── Architecture smell (conditionals, God class) → refactoring-patterns
│
├── Plan a feature?
│   └── planning (skill) → then /plan (Sokka agent)
│
├── Write documentation?
│   └── documentation-writing (skill) → then /doc (Iroh agent)
│
├── Review UI quality?
│   └── web-design-guidelines (accessibility, UX compliance)
│
├── Design system architecture?
│   ├── High-level structure → architect
│   └── Multi-quarter roadmap → technical-roadmap-planning
│
└── Apply a design pattern?
    └── design-patterns-implementation
```

### Overlap Resolution

| Ambiguity | Resolution |
|-----------|------------|
| refactoring vs refactoring-patterns | **refactoring** = mechanical operations (rename, move, extract to file). **refactoring-patterns** = smell-driven structural improvement (Replace Conditional with Polymorphism, Extract Class). |
| codebase-search vs mgrep-code-search | **codebase-search** = targeted grep for known symbols in smaller projects. **mgrep-code-search** = semantic/natural-language search across 30+ files or deep directory trees. |
| planning vs technical-roadmap-planning | **planning** = single feature implementation plan. **technical-roadmap-planning** = multi-quarter strategic roadmap across multiple features/systems. |
| architect vs design-patterns-implementation | **architect** = system-level decisions (folder structure, data flow, service boundaries). **design-patterns-implementation** = component-level patterns (Factory, Observer, Strategy). |
| frontend-builder vs vercel-composition-patterns | **frontend-builder** = building pages and components. **vercel-composition-patterns** = specifically designing flexible component APIs (compound components, avoiding boolean prop proliferation). |

---

## Global vs Project Skills

| Aspect | Project Skills | Global Skills |
|--------|---------------|---------------|
| **Location** | `.cursor/skills/` in this repo | `~/.cursor/skills-cursor/` (user home) |
| **Scope** | This project only | Every project on this machine |
| **Content** | Domain expertise (React patterns, debugging methods) | Cursor IDE operations (hooks, rules, settings) |
| **Versioned** | Yes, committed to git | No, lives outside the repo |
| **Portable** | Travels with the project | Stays on your machine |

**Rule of thumb:** If the skill is about *how to code* → project skill. If it's about *how to use Cursor* → global skill.

---

## Maintenance

### Adding a New Skill

1. Create `.cursor/skills/<name>/SKILL.md` with frontmatter (name, description, auto_activates keywords)
2. Add supporting files in subdirectories (`references/`, `rules/`)
3. Update this document's skills table
4. Use the global `create-skill` skill for the correct SKILL.md structure

### Adding a New Rule

1. Create `.cursor/rules/<name>.mdc` with frontmatter (description, globs, alwaysApply)
2. Use the global `create-rule` skill for the correct format
3. Document the rule's purpose in this file if it affects workflow

### Adding a New Hook

1. Create `.cursor/hooks/<name>.sh` (executable)
2. Register the trigger event in Cursor's hook configuration
3. Use the global `create-hook` skill for the correct setup
4. Document the hook in this file's [Hooks](#hooks) section

### Adding a New Slash Command

1. Define the command in Cursor's command configuration
2. Map it to the appropriate agent persona
3. Add to the [Slash Commands](#slash-commands) table above

### Keeping This Document Current

Update `docs/cursor-setup.md` whenever you:
- Add, remove, or rename a skill
- Change agent routing or models
- Add or modify hooks
- Create new slash commands
- Change the orchestrator rules

---

*Last updated: May 2025*
