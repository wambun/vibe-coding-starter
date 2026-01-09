# Stage 2: Implementation Prompt

Use this prompt after you have a design brief from Stage 1. This prompt tells the AI how to implement the design using the project's component library.

---

## Prompt Template

```
Your task is to implement a new website for [CLIENT_NAME], a [BUSINESS_TYPE] based on the design brief below.

## Project Setup

This project uses:
- Next.js 15 with App Router
- React 19
- Tailwind CSS 3.4
- Shadcn UI components
- Custom landing page components (85+ pre-built sections)

## File Structure

Create these files:
1. `/app/[client-name]/page.tsx` - Main page component
2. `/app/[client-name]/data.ts` - All content/data separated from UI
3. Update `/data/config/colors.js` - Brand colors

## Implementation Rules

### Colors (CRITICAL)
- Update `/data/config/colors.js` with the primary and secondary palette from the brief
- NEVER use hex values in components—use Tailwind classes: `bg-primary-500`, `text-secondary-700`, etc.
- For one-off accent colors, add them to the brief's accent section and use inline styles sparingly

### Components
Import from these locations ONLY:
```tsx
// Landing components (sections)
import {
  LandingPrimaryImageCtaSection,
  LandingFeatureList,
  LandingTestimonialGrid,
  LandingSaleCtaSection,
  LandingFaqCollapsibleSection,
  LandingTeamSection,
  LandingStatsSection,
  LandingProductFeature,
  LandingProductSteps,
  // etc.
} from '@/components/landing';

// UI primitives
import { Button } from '@/components/shared/ui/button';

// Layout
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

// Icons
import { IconName } from 'lucide-react';
```

### Data Structure
ALL content goes in `data.ts`:
- Hero text, CTAs
- Feature items (title, description, icon component reference)
- Testimonials array
- FAQ items
- Team members
- Statistics
- Contact information

Example data.ts structure:
```tsx
import { Calculator, Users, Shield } from 'lucide-react';

export const heroData = {
  title: 'Main headline',
  description: 'Supporting text',
  primaryCta: { label: 'CTA Text', href: '#contact' },
  secondaryCta: { label: 'Secondary', href: '#services' },
  image: { src: '/static/images/client/hero.jpg', alt: 'Description' },
};

export const servicesData = {
  title: 'Section Title',
  description: 'Section description',
  items: [
    { title: 'Service 1', description: 'Details', icon: Calculator },
    // ...
  ],
};
```

### Dark Mode (REQUIRED)
- All components must work in light and dark mode
- Use Tailwind's `dark:` prefix for color variations
- The landing components handle most dark mode automatically via `variant` prop
- Test both modes before considering complete

### Responsive Design
- All landing components are responsive by default
- Follow mobile-first approach
- Test at: 375px (mobile), 768px (tablet), 1280px (desktop)

### Common Props Reference

Most landing components accept:
- `variant`: 'primary' | 'secondary'
- `withBackground`: boolean
- `withBackgroundGlow`: boolean
- `backgroundGlowVariant`: 'primary' | 'secondary'

LandingPrimaryImageCtaSection:
- `imagePosition`: 'left' | 'right' | 'center'
- `imagePerspective`: 'none' | 'left' | 'right' | 'bottom' | 'paper'
- `imageShadow`: 'none' | 'soft' | 'hard'
- `textPosition`: 'center' | 'left'
- `minHeight`: number

LandingFeatureList:
- `featureItems`: Array<{ title, description, icon: ReactNode }>

LandingStatsSection:
- `stats`: Array<{ value, description }>
- `columnsDesktop`: 2 | 3 | 4
- `hasBorders`: boolean

LandingTestimonialGrid:
- `testimonialItems`: Array<{ name, text, handle, imageSrc, verified? }>

LandingFaqCollapsibleSection:
- `faqItems`: Array<{ question, answer }>

## Quality Checklist
Before completion, verify:
- [ ] colors.js updated with brand colors
- [ ] All content in data.ts, not inline
- [ ] No hex values in TSX files
- [ ] Dark mode works correctly
- [ ] Mobile layout is correct
- [ ] All images have alt text
- [ ] Links use Next.js Link component
- [ ] No TypeScript errors

---

## Design Brief

[PASTE JSONC DESIGN BRIEF HERE]

---

## Developer Notes

[PASTE IMPLEMENTATION PROMPT FROM STAGE 1 HERE]
```

---

## Quick Reference: Component Import Cheatsheet

```tsx
// Hero sections
LandingPrimaryImageCtaSection    // Image + text hero
LandingPrimaryVideoCtaSection    // Video + text hero
LandingPrimaryTextCtaSection     // Text-only hero

// Features
LandingFeatureList               // Grid of icon features
LandingProductFeature           // Single feature with image
LandingProductSteps             // How it works / process
LandingBentoGridSection         // Modern bento layout

// Testimonials
LandingTestimonialGrid          // Masonry grid
LandingTestimonialInline        // Single testimonial

// Other sections
LandingStatsSection             // Key metrics
LandingTeamSection              // Team members
LandingFaqCollapsibleSection    // Accordion FAQ
LandingSaleCtaSection           // CTA section
LandingPricingSection           // Pricing cards
LandingSocialProof              // User count with avatars

// Wrappers
LandingTestimonialReadMoreWrapper  // Makes testimonials expandable
LandingProductSteps               // Wrapper for step features
```
