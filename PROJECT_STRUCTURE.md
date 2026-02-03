# Project Structure Explanation

## Current Structure Analysis

### Current File Organization

```
stefanheissenberg-portfolio/
├── app/                          # Next.js App Router (root)
│   ├── page.tsx                 # Landing page (/) - Home page
│   ├── layout.tsx                # Root layout (wraps all pages)
│   ├── globals.css               # Global styles & CSS variables
│   └── favicon.ico               # Site icon
│
├── components/                    # React components
│   ├── sections/                 # Page sections (used on landing page)
│   │   ├── HeroSection.tsx
│   │   ├── AwardBadgesSection.tsx
│   │   ├── KeyCreatorIdentifiersSection.tsx
│   │   ├── DesignWitAttitudeSection.tsx
│   │   ├── DeepPashionSection.tsx
│   │   ├── CustomersSection.tsx
│   │   └── AlohaSection.tsx
│   │
│   └── ui/                       # Reusable UI components
│       ├── Button.tsx
│       ├── GlowCard.tsx
│       ├── MetricCard.tsx
│       └── PhraseBlock.tsx
│
└── public/                       # Static assets
    └── images/                    # Image files
```

### Current Routing

- **`/`** → `app/page.tsx` (Landing page with all sections)

---

## Proposed Multi-Page Structure

### Next.js App Router File-Based Routing

**KEY CONCEPT:** In Next.js App Router, the file system determines the URL structure:
- `app/page.tsx` → `/` (home page)
- `app/design-portfolio-sh/page.tsx` → `/design-portfolio-sh`
- `app/design-portfolio-sh/dhl/page.tsx` → `/design-portfolio-sh/dhl`
- `app/design-portfolio-sh/saloodo/page.tsx` → `/design-portfolio-sh/saloodo`
- `app/design-portfolio-sh/obinext/page.tsx` → `/design-portfolio-sh/obinext`

### New Structure

```
stefanheissenberg-portfolio/
├── app/
│   ├── page.tsx                          # Landing page (/)
│   ├── layout.tsx                        # Root layout (all pages)
│   ├── globals.css
│   │
│   └── design-portfolio-sh/              # Design portfolio section
│       ├── page.tsx                      # Portfolio landing (/design-portfolio-sh)
│       │
│       ├── dhl/                          # DHL case study
│       │   └── page.tsx                  # (/design-portfolio-sh/dhl)
│       │
│       ├── saloodo/                      # Saloodo case study
│       │   └── page.tsx                  # (/design-portfolio-sh/saloodo)
│       │
│       └── obinext/                      # OBI Next case study
│           └── page.tsx                  # (/design-portfolio-sh/obinext)
│
├── components/
│   ├── sections/                         # Landing page sections (unchanged)
│   │   └── ...
│   │
│   ├── portfolio/                        # NEW: Portfolio-specific components
│   │   ├── PortfolioHero.tsx             # Portfolio hero section
│   │   ├── CaseStudyCard.tsx             # Case study preview card
│   │   └── CaseStudyLayout.tsx           # Shared layout for case studies
│   │
│   └── ui/                               # Reusable UI (unchanged)
│       └── ...
│
└── public/
    └── images/
        └── ...
```

---

## Key Concepts Explained

### 1. **Nested Routes**
- Folders create URL segments
- `app/design-portfolio-sh/page.tsx` creates `/design-portfolio-sh` route
- `app/design-portfolio-sh/dhl/page.tsx` creates `/design-portfolio-sh/dhl` route

### 2. **Layout Hierarchy**
- `app/layout.tsx` wraps ALL pages (fonts, global styles)
- Each folder can have its own `layout.tsx` for nested layouts
- Layouts nest: Root Layout → Page Layout → Page Content

### 3. **Component Organization**
- **`components/sections/`**: Landing page specific sections
- **`components/portfolio/`**: Portfolio-specific components (reusable across portfolio pages)
- **`components/ui/`**: Generic UI components (Button, Card, etc.)

### 4. **Shared vs. Page-Specific**
- **Shared**: Components used across multiple pages (Button, GlowCard)
- **Page-Specific**: Components only used on one page (HeroSection for landing)
- **Section-Specific**: Components used in a section of pages (PortfolioHero for portfolio pages)

---

## Benefits of This Structure

1. **Scalable**: Easy to add new case studies (just add a new folder)
2. **Organized**: Clear separation between landing page and portfolio
3. **Reusable**: Portfolio components can be shared across case study pages
4. **Maintainable**: Each page is self-contained, easy to find and edit
5. **SEO-Friendly**: Each page gets its own URL and can have unique metadata

---

## Next Steps

1. Create `/app/design-portfolio-sh/page.tsx` (portfolio landing)
2. Create case study pages (`dhl`, `saloodo`, `obinext`)
3. Create shared portfolio components
4. Update navigation/links to connect pages
