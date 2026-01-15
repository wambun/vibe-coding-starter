# Product Requirements Document (PRD)
## Nick Fry CPA Website Redesign

---

## 1. Executive Summary

This document outlines the complete redesign and migration of the Fry & Associates, CPAs, Inc. website from its current Wix-based platform to a modern Next.js 15 application. The new design will emulate the premium UI/UX patterns demonstrated in the Accruefy reference site while preserving the existing content and business information.

---

## 2. Project Overview

### 2.1 Current State
- **Platform**: Wix
- **URL**: https://www.nickfrycpa.com
- **Company**: Fry & Associates, CPAs, Inc.
- **Founded**: 1996
- **Location**: 323 Regency Ridge Dr, Dayton, OH 45459
- **Contact**: 937-428-0787 | jessiefrycpas@gmail.com

### 2.2 Design Target
- **Reference**: https://accruefy.framer.website/
- **Style**: Modern, premium accounting firm aesthetic
- **Colors**: Warm neutrals (beige/cream backgrounds), dark teal accents, black CTAs

### 2.3 Technical Stack
- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn UI (pre-configured)
- **Animations**: Framer Motion 12.x
- **Typography**: Nunito Sans (configured)

---

## 3. Sitemap & Information Architecture

### 3.1 Current Site Structure (Old)
```
/                       → Home (Hero slider with services)
/about-7                → About Us (Company story + Team)
/copy-of-financial-planning → Business Services
/tax                    → Tax Services
/financial-planning     → Financial Planning
```

### 3.2 New Site Structure
```
/                       → Home
/about                  → About Us
/services               → Services Overview
  /services/business    → Business Services
  /services/tax         → Tax Services
  /services/financial-planning → Financial Planning
/contact                → Contact Us
```

---

## 4. Page Specifications

### 4.1 Home Page (`/`)

#### Hero Section
- **Layout**: Split layout - text left, image right
- **Headline**: "Simplifying accounting for your business" (adapt for Fry)
- **Subheadline**: Company value proposition
- **CTA Button**: "Contact Us" or "Schedule a Consultation"
- **Image**: Professional accountant photo with floating stat cards
- **Stats Overlay**: Pie charts showing metrics (Client Revenue Strategy, Tax Optimization)
- **Rating Badge**: Company rating display
- **Phone CTA**: Click-to-call button

#### Stats Section
- **Layout**: 4-column grid
- **Stats to Display**:
  - 96% → Client Satisfaction Rate
  - 20+ → Years of Experience (since 1996)
  - 500 → Successful Tax Filings Annually
  - 50+ → Tax Professionals on Team (or adapt)

#### About Preview Section
- **Layout**: Image collage left, text right
- **Content**: Company introduction, key differentiators
- **Checklist Items**:
  - Expert Team of Professionals
  - Client-Centric Approach
  - Trusted by Industry Leaders
  - Tailored Financial Solutions
- **CTA**: "Learn more about us" button

#### Services Section
- **Layout**: 6-card grid with icons
- **Services**:
  1. Bookkeeping & Payroll
  2. Tax Preparation
  3. Financial Statement & Cash Flow Analysis
  4. Virtual CFO
  5. Corporation/LLC Setup
  6. S-Corp Bootcamp
- **Each Card**: Icon, title, description, link to detail page

#### Process Section
- **Layout**: Horizontal stepped process
- **Steps**:
  1. Smart Solutions
  2. Financial Clarity
  3. Efficient Strategies
  4. Tax Optimization

#### Testimonials Section
- **Layout**: Horizontal carousel
- **Content**: Client testimonials with photos, names, titles
- **Navigation**: Prev/Next arrows

#### CTA Banner
- **Content**: "Get expert accounting assistance now"
- **Button**: "Get Started"
- **Image**: Professional photo

#### Team Preview Section
- **Layout**: 3-card grid
- **Content**: Key team members with photos and titles
- **Team Members**:
  - Nick Fry (Founder/CPA)
  - Masha Fry, MBA (Financial Planner)
  - Amber Wrobel (Client Specialist)

#### Pricing Section (Optional)
- **Layout**: 3-tier pricing cards
- **Style**: Light/Highlighted/Light pattern

#### Blog/Insights Section
- **Layout**: Featured post + 3 small cards
- **Content**: Financial tips and insights

### 4.2 About Page (`/about`)

#### Hero Section
- **Layout**: Centered text with flanking images
- **Headline**: "Building trust through financial excellence"
- **Content**: Company mission statement

#### Partners/Clients Section
- **Layout**: Logo marquee/slider
- **Content**: Partner or certification logos

#### Company Story Section
- **Layout**: Image left with floating stats, text right
- **Content**: Company history since 1996
- **Stats**: Years of experience, client count

#### Team Section
- **Layout**: 3-column grid
- **Team Members**:
  1. **Nick Fry** - Founder, CPA, Certified Investment Advisor
  2. **Masha Fry, MBA** - Financial Planner
  3. **Amber Wrobel** - Client Specialist
- **Card Style**: Photo, name, title, bio

### 4.3 Services Page (`/services`)

#### Hero Section
- **Headline**: "Achieving financial clarity through services"
- **Layout**: Centered title

#### Services Grid
- **Layout**: 2x3 grid
- **Each Service Card**:
  - Large image
  - Icon
  - Title
  - Description
  - Link to detail page

### 4.4 Service Detail Pages (`/services/[slug]`)

#### Business Services (`/services/business`)
- **Services**:
  1. Bookkeeping & Payroll
     - Monthly or Weekly bookkeeping
     - Full service or reconciling
     - Payroll through Gusto, Quickbooks, or ADP
  2. Tax Preparation (Business)
  3. Financial Statement and Cash Flow Analysis
  4. Virtual CFO
  5. Corporation/LLC Setup
  6. S-Corp Bootcamp

#### Tax Services (`/services/tax`)
- **Services**:
  1. Individual Tax
     - Federal, State, School District, City filings
     - Online or in-person options
     - Silver/Gold preparation packages
  2. Business Tax
     - S-Corporation Returns
     - Partnership Returns
     - C-Corporation Returns
  3. Trust/Estate Tax
  4. Tax Planning

#### Financial Planning (`/services/financial-planning`)
- **Content Areas**:
  - Retirement Planning
  - Divorce Financial Planning
  - Inheritance Planning
  - Asset Allocation Strategy
  - Debt Strategy
  - Tax Planning
  - Roth Conversion Analysis
  - Insurance Planning
  - Banking and Credit Management
  - Charitable Planning
- **Pricing Note**: Starting at $5,000

### 4.5 Contact Page (`/contact`)

#### Layout
- **Left Column**:
  - Title: "Contact Us"
  - Description text
  - Contact cards:
    - Phone: 937-428-0787
    - Location: 323 Regency Ridge Dr, Dayton, OH 45459
    - Email: jessiefrycpas@gmail.com
  - Map image/embed
- **Right Column**:
  - Contact form:
    - Full name
    - Phone number
    - Email address
    - Message
    - Submit button

---

## 5. Global Components

### 5.1 Header/Navigation
- **Logo**: Fry & Associates logo (left)
- **Nav Items**: Home, About, Services (dropdown), Contact
- **CTA Button**: "Contact Us" (black, rounded)
- **Style**: Sticky, white background, subtle shadow on scroll

### 5.2 Footer
- **Layout**: Dark section with multi-column links
- **Sections**:
  - Logo + Newsletter signup
  - Main Pages (Home, About, Contact)
  - Services links
  - Contact info with icons
  - Social media icons
- **Bottom**: Copyright, credits

### 5.3 Color Scheme
Based on Accruefy reference:
- **Background**: #F5F3EF (warm cream/beige)
- **Primary Text**: #1A1A1A (near black)
- **Accent**: #0D7377 (dark teal) - for buttons, icons
- **Secondary Accent**: #9B59B6 (purple) - for charts/highlights
- **Cards**: #FFFFFF or #F9F7F4
- **CTAs**: #1A1A1A (black buttons with white text)

### 5.4 Typography
- **Headings**: Serif font (elegant, professional)
- **Body**: Sans-serif (clean, readable)
- **Sizes**: Large headings (48-72px), body (16-18px)

---

## 6. Content Mapping

### 6.1 Old → New Content Migration

| Old Page | New Location | Content Status |
|----------|--------------|----------------|
| Home slider | Homepage hero | Redesign |
| About Us text | /about hero | Migrate |
| Team section | /about team section | Migrate with new design |
| Business Services | /services/business | Restructure |
| Tax Services | /services/tax | Restructure |
| Financial Planning | /services/financial-planning | Restructure |
| Contact info (footer) | /contact page | Enhance |

### 6.2 New Content Needed
- Professional photography (stock or custom)
- Updated team bios
- Client testimonials
- Service icons
- Company statistics
- Blog posts (optional)

---

## 7. Technical Implementation

### 7.1 File Structure
```
/app
  /layout.tsx              # Global layout with header/footer
  /page.tsx                # Home page
  /about/page.tsx          # About page
  /services/
    /page.tsx              # Services overview
    /[slug]/page.tsx       # Dynamic service detail pages
  /contact/page.tsx        # Contact page

/components
  /layout/
    Header.tsx
    Footer.tsx
    Navigation.tsx
  /home/
    Hero.tsx
    Stats.tsx
    AboutPreview.tsx
    ServicesGrid.tsx
    ProcessSteps.tsx
    Testimonials.tsx
    CTABanner.tsx
    TeamPreview.tsx
    BlogSection.tsx
  /about/
    AboutHero.tsx
    Partners.tsx
    CompanyStory.tsx
    TeamSection.tsx
  /services/
    ServicesHero.tsx
    ServiceCard.tsx
    ServiceDetail.tsx
  /contact/
    ContactForm.tsx
    ContactInfo.tsx
    Map.tsx
  /shared/
    (existing Shadcn components)

/data
  /services.ts             # Service definitions
  /team.ts                 # Team member data
  /testimonials.ts         # Testimonial data
  /navigation.ts           # Nav links
```

### 7.2 Data Files Structure

```typescript
// /data/services.ts
export const services = [
  {
    slug: 'business',
    title: 'Business Services',
    description: '...',
    icon: 'briefcase',
    items: [
      {
        title: 'Bookkeeping & Payroll',
        description: '...',
        features: ['...']
      }
    ]
  }
]

// /data/team.ts
export const team = [
  {
    name: 'Nick Fry',
    title: 'Founder, CPA',
    bio: '...',
    image: '/images/team/nick-fry.jpg'
  }
]
```

### 7.3 Animation Patterns (Framer Motion)
- **Page transitions**: Fade + slight slide
- **Section reveals**: Fade in + slide up on scroll
- **Card hovers**: Scale + shadow elevation
- **Button hovers**: Background color transition
- **Stat counters**: Animated number counting
- **Image reveals**: Clip-path or opacity animations

---

## 8. Implementation Phases

### Phase 1: Foundation
1. Set up global layout (Header, Footer)
2. Configure color scheme and typography
3. Create shared UI components

### Phase 2: Core Pages
1. Home page with all sections
2. About page
3. Services overview page

### Phase 3: Service Detail Pages
1. Business services detail
2. Tax services detail
3. Financial planning detail

### Phase 4: Contact & Polish
1. Contact page with form
2. Animations and transitions
3. Responsive design refinement
4. SEO optimization

---

## 9. Success Metrics
- Mobile-responsive design
- Lighthouse score > 90
- Page load < 3 seconds
- Accessible (WCAG 2.1 AA)
- SEO-optimized metadata

---

## 10. Approval

This PRD outlines the complete scope for the Nick Fry CPA website redesign. Upon approval, development will proceed according to the implementation phases outlined above.
