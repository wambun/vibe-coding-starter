# Agency Website Generation Workflow

A complete guide to rapidly generating professional websites for small-to-medium businesses using AI-assisted design extraction and implementation.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Setup](#project-setup)
3. [CLI Scripts](#cli-scripts)
4. [The Workflow](#the-workflow)
5. [Stage 1: Design Extraction (Screenshot)](#stage-1-design-extraction)
6. [Stage 1B: Website Clone (Firecrawl)](#stage-1b-website-clone)
7. [Stage 2: Implementation](#stage-2-implementation)
8. [Industry Templates](#industry-templates)
9. [Component Reference](#component-reference)
10. [Color System](#color-system)
11. [Client Handoff](#client-handoff)
12. [Troubleshooting](#troubleshooting)

---

## Overview

### What This System Does

This template and workflow allows you to:

1. **Find inspiration** on Dribbble, Mobbin, or similar design resources
2. **Extract design specifications** using AI (colors, typography, layout)
3. **Generate production-ready code** using 85+ pre-built landing components
4. **Deploy professional websites** in hours instead of days

### Target Clients

- CPA/Accounting firms
- Law offices
- Medical practices
- Construction companies
- Restaurants
- Real estate agencies
- Any small-to-medium professional services business

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.x | React framework with App Router |
| React | 19.x | UI library |
| Tailwind CSS | 3.4.x | Utility-first styling |
| Shadcn UI | Latest | Accessible component primitives |
| TypeScript | 5.x | Type safety |

---

## Project Setup

### Prerequisites

- Node.js 18+ installed
- Git configured
- Access to an AI tool (Claude, GPT-4, etc.)
- Design inspiration source (Dribbble, Mobbin, etc.)

### Initial Setup

```bash
# Clone the template
git clone [your-repo-url] client-website
cd client-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

```
├── app/                          # Next.js pages
│   ├── templates/               # Industry templates
│   │   ├── accounting/         # CPA/accounting template
│   │   └── law-office/         # Law firm template
│   └── [client-name]/          # Client-specific pages
├── components/
│   ├── landing/                 # 85+ landing page components
│   └── shared/                  # Shared UI components
├── data/
│   ├── config/                  # Site configuration
│   │   ├── colors.js           # Brand colors (UPDATE THIS)
│   │   ├── metadata.js         # Site metadata
│   │   ├── componentMapping.ts # Component reference guide
│   │   ├── headerNavLinks.ts   # Header navigation
│   │   └── footerLinks.ts      # Footer navigation
│   └── templates/              # Template files
│       ├── design-brief-schema.jsonc
│       ├── prompts/            # AI prompts
│       └── examples/           # Example briefs
├── scripts/
│   ├── new-client.js          # New client setup wizard
│   └── reset-template.js      # Reset to clean state
└── public/
    └── static/images/          # Image assets
```

---

## CLI Scripts

The template includes two CLI scripts to streamline your workflow.

### New Client Setup (`npm run new-client`)

This interactive wizard helps you set up a new client project quickly.

```bash
npm run new-client
```

**What it does:**

1. Prompts for client information (name, business name, industry)
2. Creates a client folder from an industry template
3. Updates `colors.js` with industry-appropriate colors
4. Updates `metadata.js` with client information
5. Creates image directories for the client
6. Updates the data file with client details

**Interactive prompts:**

```
🚀 New Client Setup Wizard

Client name (for folder, e.g., "acme-accounting"): acme-cpa
Business display name (e.g., "Acme Accounting Services"): Acme CPA Services
Short business description (for SEO): Professional accounting and tax services

Select Industry
  1) Accounting/Finance (Blue + Green)
  2) Legal (Navy + Gold)
  3) Medical/Healthcare (Teal + Blue)
  4) Construction (Orange + Gray)
  5) Restaurant (Red + Brown)
  6) Real Estate (Navy + Amber)
  7) Custom (Keep current colors)

Select Template
  1) Accounting/CPA Firm
  2) Law Office
  3) Blank (no template)

Domain name (optional): acmecpa.com
Contact email (optional): info@acmecpa.com
Phone number (optional): (555) 123-4567
```

**Output structure:**

```
app/acme-cpa/
├── page.tsx          # Main page (from template)
└── data.ts           # Content data (updated with client info)

public/static/images/acme-cpa/
├── team/             # Team member photos
└── testimonials/     # Client testimonial photos
```

**After running:**

1. Add client images to `/public/static/images/[client-name]/`
2. Edit content in `/app/[client-name]/data.ts`
3. Preview at `http://localhost:3000/[client-name]`
4. Fine-tune colors in `/data/config/colors.js` if needed

---

### Reset Template (`npm run reset`)

This script resets the project to a clean template state, useful when:

- Starting fresh after completing a client project
- Cleaning up test/demo content
- Preparing the template for a new client

```bash
npm run reset
```

**What it resets:**

- `data/config/colors.js` → Default blue/green palette
- `data/config/metadata.js` → Generic placeholder content
- `data/config/headerNavLinks.ts` → Default navigation
- `data/config/footerLinks.ts` → Default footer links

**Optional cleanup:**

The script will also ask if you want to:

1. Remove client-specific folders from `/app/`
2. Remove client image folders from `/public/static/images/`

**Protected folders** (never removed):

- Core pages: `api`, `pricing`, `features`, `faq`, `dashboard`, etc.
- System files: `templates`, `.next`, etc.
- Shared images: `outlets`, `people`

**Typical workflow:**

```bash
# After delivering a client project
npm run reset           # Clean up for next client

# When ready for new client
npm run new-client      # Set up new project
```

---

### Quick Script Reference

| Command | Purpose |
|---------|---------|
| `npm run new-client` | Interactive wizard to set up a new client project |
| `npm run reset` | Reset template to clean state |
| `npm run dev` | Start development server (port 6006) |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build |

---

## The Workflow

### Overview

You have **two paths** to generate a design brief, both leading to the same Stage 2 implementation:

```
                                    ┌─────────────────────┐
                                    │                     │
                              ┌────▶│  Stage 1: Screenshot│────┐
                              │     │  (Dribbble/Mobbin)  │    │
┌─────────────────┐           │     │                     │    │     ┌─────────────────┐
│                 │           │     └─────────────────────┘    │     │                 │
│  Find Design    │───────────┤                                ├────▶│  Stage 2: AI    │
│  Inspiration    │           │     ┌─────────────────────┐    │     │  Implementation │
│                 │           │     │                     │    │     │                 │
└─────────────────┘           └────▶│  Stage 1B: Firecrawl│────┘     └─────────────────┘
                                    │  (Real Website)     │                   │
                                    │                     │                   ▼
                                    └─────────────────────┘           Working Website
                                                                      Ready to Deploy
```

### Choose Your Path

| Path | Input | Best For |
|------|-------|----------|
| **Stage 1** | Screenshot from Dribbble/Mobbin | Design mockups, visual inspiration |
| **Stage 1B** | Scraped HTML/CSS from real website | Competitor sites, exact styling |

Both paths output a **JSONC Design Brief** that feeds into Stage 2.

### Time Estimates

| Step | Time |
|------|------|
| Find inspiration | 10-30 min |
| Stage 1 OR 1B extraction | 5-10 min |
| Stage 2 implementation | 20-45 min |
| Review & adjustments | 15-30 min |
| **Total** | **50-115 min** |

---

## Stage 1: Design Extraction

### Purpose

Convert a visual design screenshot into a structured specification that maps to your component library.

### The Prompt

Copy the full prompt from: `data/templates/prompts/stage-1-design-extraction.md`

### What to Include

When using the prompt, provide:

1. **The screenshot** - Full page or section captures
2. **Business type** - e.g., "CPA/accounting firm"
3. **Any specific requirements** - e.g., "Must have testimonials section"

### Expected Output

The AI should return:

1. **JSONC Design Brief** - Structured specification including:
   - Color palette (primary + secondary, 5 shades each)
   - Typography settings
   - Section-by-section breakdown with component recommendations
   - Dark mode specifications
   - Responsive behavior notes

2. **Developer Implementation Prompt** - A summary for Stage 2

### Example Output Structure

```jsonc
{
  "$schema": "design-brief-schema-v1",
  "meta": {
    "businessType": "accounting",
    "style": "corporate",
    "audience": "Small business owners",
    "primaryGoal": "lead-generation"
  },
  "colors": {
    "primary": {
      "lighter": "#dbeafe",
      "light": "#93c5fd",
      "main": "#3b82f6",
      "dark": "#1d4ed8",
      "darker": "#1e3a8a"
    },
    "secondary": { /* ... */ }
  },
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "component": "LandingPrimaryImageCtaSection",
      "props": { /* ... */ },
      "content": { /* ... */ }
    }
    // More sections...
  ]
}
```

---

## Stage 1B: Website Clone

### Purpose

Extract design specifications from an existing website you admire, using scraped HTML/CSS data for more accurate color and structure information.

### When to Use Stage 1B

- You found a real website (competitor, inspiration) you want to emulate
- You want **exact** color values instead of AI-guessed colors from screenshots
- You need accurate typography and spacing information
- You want to understand content structure and patterns

### Option A: Firecrawl MCP (Recommended)

With Firecrawl MCP configured, just give Claude a URL:

```
Create a website for "ABC Law Firm" based on https://competitor-lawfirm.com
```

Claude will automatically scrape, extract, and implement.

**Setup:**
1. Get API key from [firecrawl.dev](https://firecrawl.dev)
2. Set environment variable: `export FIRECRAWL_API_KEY=your_key`
3. MCP server is pre-configured in `.mcp.json`

### Option B: Manual Scraping

Copy the full prompt from: `data/templates/prompts/stage-1b-website-clone.md`

### How to Scrape a Website (Manual)

Use [Firecrawl](https://firecrawl.dev), Puppeteer, or similar tools:

```bash
# Using Firecrawl CLI
firecrawl scrape https://example-law-firm.com --format markdown,html

# Or using the API
curl -X POST https://api.firecrawl.dev/v1/scrape \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"url": "https://example-law-firm.com", "formats": ["markdown", "html"]}'
```

### What to Provide

1. **Source URL** - The website you're referencing
2. **HTML structure** - Main page HTML (trim scripts/tracking)
3. **Colors found** - CSS custom properties or extracted hex values
4. **Content/Markdown** - Text content for reference
5. **Notes** - What to keep, adapt, or change for your client

### Expected Output

Same as Stage 1:
1. **JSONC Design Brief** with `sourceUrl` in meta section
2. **Developer Implementation Prompt** for Stage 2

### Stage 1 vs Stage 1B Comparison

| Aspect | Stage 1 (Screenshot) | Stage 1B (Firecrawl) |
|--------|---------------------|----------------------|
| Input | UI screenshot | HTML + CSS + content |
| Color accuracy | AI-estimated | Exact values |
| Content | Manually described | Actual copy available |
| Structure | Visually inferred | DOM structure |
| Speed | Quick | Slightly more setup |
| Best for | Dribbble/Behance inspiration | Real competitor sites |

---

## Stage 2: Implementation

### Purpose

Generate production-ready code using the design brief and your component library.

### The Prompt

Copy the full prompt from: `data/templates/prompts/stage-2-implementation.md`

### What to Include

1. **Client name** - For file naming
2. **Business type** - For context
3. **The JSONC design brief** from Stage 1
4. **The developer implementation prompt** from Stage 1

### Implementation Steps

The AI should:

1. **Update colors.js** with the brand palette
2. **Create data.ts** with all content
3. **Create page.tsx** composing landing components
4. **Ensure dark mode** works correctly
5. **Verify responsive** behavior

### File Output

```
app/[client-name]/
├── page.tsx     # Main page component
└── data.ts      # All content/data
```

---

## Industry Templates

### Using a Template

Templates provide a starting point for common business types.

#### Accounting/CPA Firm

```bash
# Copy the template
cp -r app/templates/accounting app/[client-name]

# Edit the data file
# app/[client-name]/data.ts

# Update colors
# data/config/colors.js
```

**Included sections:**
- Hero with image
- Services grid (6 items)
- Statistics section
- How it works (3 steps)
- Team section
- Testimonials grid
- FAQ accordion
- CTA section

#### Law Office

```bash
cp -r app/templates/law-office app/[client-name]
```

**Included sections:**
- Hero with image
- Statistics/case results
- Practice areas grid
- Why choose us (with bullet points)
- Attorney profiles
- Client testimonials
- FAQ accordion
- CTA section

### Creating New Templates

1. Identify the industry's common sections
2. Select appropriate components from `componentMapping.ts`
3. Create `data.ts` with placeholder content
4. Create `page.tsx` composing the components
5. Add to `industryRecommendations` in `componentMapping.ts`

---

## Component Reference

### Hero Components

| Component | Best For | Key Props |
|-----------|----------|-----------|
| `LandingPrimaryImageCtaSection` | Product screenshots, office photos | `imagePosition`, `imagePerspective`, `imageShadow` |
| `LandingPrimaryVideoCtaSection` | Explainer videos, demos | `videoPosition`, `videoShadow`, `autoPlay` |
| `LandingPrimaryTextCtaSection` | Minimal designs, announcements | `textPosition` |

### Feature Components

| Component | Best For | Key Props |
|-----------|----------|-----------|
| `LandingFeatureList` | 3-6 features with icons | `featureItems` array |
| `LandingProductFeature` | Single feature spotlight | `imagePosition`, `imagePerspective` |
| `LandingProductSteps` | How it works sections | `display: 'grid' \| 'list'` |
| `LandingBentoGridSection` | Modern bento layouts | Children components |

### Testimonial Components

| Component | Best For | Key Props |
|-----------|----------|-----------|
| `LandingTestimonialGrid` | 3+ testimonials | `testimonialItems` array |
| `LandingTestimonialInline` | Single prominent quote | Children |

### Other Sections

| Component | Best For | Key Props |
|-----------|----------|-----------|
| `LandingStatsSection` | Key metrics, numbers | `stats`, `columnsDesktop` |
| `LandingTeamSection` | Team profiles | `members` array |
| `LandingFaqCollapsibleSection` | FAQ with accordion | `faqItems` array |
| `LandingSaleCtaSection` | Call-to-action | `title`, `description` |
| `LandingPricingSection` | Pricing cards | Children |

### Common Props (All Components)

```typescript
variant?: 'primary' | 'secondary'
withBackground?: boolean
withBackgroundGlow?: boolean
backgroundGlowVariant?: 'primary' | 'secondary'
className?: string
```

### Full Component List

See `data/config/componentMapping.ts` for the complete list with detailed documentation.

---

## Color System

### How It Works

Colors are defined in `data/config/colors.js` and mapped to Tailwind classes:

```javascript
// data/config/colors.js
const colors = {
  primary: {
    lighter: '#dbeafe',  // primary-100, primary-200
    light: '#93c5fd',    // primary-300, primary-400
    main: '#3b82f6',     // primary-500, primary-600
    dark: '#1d4ed8',     // primary-700, primary-800
    darker: '#1e3a8a',   // primary-900
  },
  secondary: { /* ... */ },
};
```

### Usage in Components

```tsx
// Do this ✓
<div className="bg-primary-500 text-white">
<div className="text-secondary-700 dark:text-secondary-300">

// Don't do this ✗
<div className="bg-[#3b82f6]">
<div style={{ color: '#1d4ed8' }}>
```

### Recommended Palettes by Industry

| Industry | Primary | Secondary |
|----------|---------|-----------|
| Accounting | Blue (#3b82f6) | Green (#10b981) |
| Legal | Navy (#1e3a5f) | Gold (#d4a574) |
| Medical | Teal (#14b8a6) | Blue (#3b82f6) |
| Construction | Orange (#f97316) | Gray (#6b7280) |
| Restaurant | Red (#ef4444) | Brown (#92400e) |
| Real Estate | Navy (#1e3a5f) | Amber (#f59e0b) |

### Dark Mode

The template automatically supports dark mode. Components use:

```tsx
// Backgrounds
className="bg-primary-100/20 dark:bg-primary-900/10"

// Text
className="text-gray-900 dark:text-gray-100"

// Borders
className="border-gray-200 dark:border-gray-800"
```

---

## Client Handoff

### Checklist Before Delivery

- [ ] All placeholder content replaced with real content
- [ ] Brand colors updated in `colors.js`
- [ ] Logo and images replaced
- [ ] Contact information updated
- [ ] Navigation links configured
- [ ] Dark mode tested
- [ ] Mobile responsiveness verified
- [ ] SEO metadata updated in `metadata.js`
- [ ] Forms connected to backend/email service
- [ ] Analytics configured (if needed)

### Deployment Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Deploy .next folder
```

**Self-hosted**
```bash
npm run build
npm run start
```

### Pricing Recommendations

| Service | Suggested Price |
|---------|-----------------|
| Basic landing page (single page) | $500 - $1,000 |
| Multi-page website (3-5 pages) | $1,500 - $3,000 |
| E-commerce integration | $3,000 - $5,000 |
| Monthly maintenance | $50 - $150/month |

---

## Troubleshooting

### Common Issues

#### Components not rendering correctly

**Cause:** Missing or incorrect imports

**Solution:** Check imports match the component names in `components/landing/index.ts`

```tsx
// Correct
import { LandingPrimaryImageCtaSection } from '@/components/landing';

// Incorrect
import LandingPrimaryImageCtaSection from '@/components/landing/cta/LandingPrimaryCta';
```

#### Colors not updating

**Cause:** Browser caching or missing Tailwind rebuild

**Solution:**
1. Clear browser cache
2. Restart dev server: `npm run dev`
3. Verify colors.js has correct hex values

#### Dark mode not working

**Cause:** Missing `dark:` classes or incorrect theme provider

**Solution:**
1. Ensure `theme-providers.tsx` wraps the app
2. Check component uses `dark:` variants
3. Verify `tailwind.config.js` has `darkMode: ['class']`

#### Images not loading

**Cause:** Incorrect path or missing file

**Solution:**
1. Images should be in `public/static/images/`
2. Reference as `/static/images/filename.jpg`
3. Check file extensions match (case-sensitive)

### Getting Help

1. Check the component documentation in `componentMapping.ts`
2. Review example templates in `app/templates/`
3. Check sample briefs in `data/templates/examples/`

---

## Quick Reference

### File Locations

| What | Where |
|------|-------|
| Brand colors | `data/config/colors.js` |
| Site metadata | `data/config/metadata.js` |
| Navigation | `data/config/headerNavLinks.ts`, `footerLinks.ts` |
| Components | `components/landing/index.ts` |
| Templates | `app/templates/` |
| AI Prompts | `data/templates/prompts/` |
| Design Schema | `data/templates/design-brief-schema.jsonc` |

### Import Cheatsheet

```tsx
// Landing components
import {
  LandingPrimaryImageCtaSection,
  LandingFeatureList,
  LandingTestimonialGrid,
  LandingFaqCollapsibleSection,
  LandingSaleCtaSection,
  LandingTeamSection,
  LandingStatsSection,
  LandingProductFeature,
  LandingProductSteps,
  LandingSocialProof,
} from '@/components/landing';

// UI components
import { Button } from '@/components/shared/ui/button';

// Layout
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

// Icons
import { Calculator, Users, Shield } from 'lucide-react';

// Next.js
import Link from 'next/link';
import Image from 'next/image';
```

---

## Changelog

### v1.2.0

- Added Firecrawl MCP integration for automatic website scraping
- Claude can now scrape websites directly during conversations
- Added `.env.example` for API key configuration

### v1.1.0

- Added Stage 1B: Website Clone workflow using Firecrawl
- Updated workflow diagram to show both extraction paths
- Added `stage-1b-website-clone.md` prompt template

### v1.0.0 (Initial Release)

- 85+ landing page components
- 2 industry templates (accounting, law office)
- Two-stage AI workflow
- Complete documentation

---

*Generated with the Vibe Coding Starter template system.*
