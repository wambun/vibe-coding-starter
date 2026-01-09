/**
 * Component Mapping Reference
 *
 * This file maps design patterns to available landing components.
 * Use this as a reference when generating pages from design briefs.
 *
 * All components support these common props:
 * - className?: string
 * - variant?: 'primary' | 'secondary'
 * - withBackground?: boolean
 * - withBackgroundGlow?: boolean
 * - backgroundGlowVariant?: 'primary' | 'secondary'
 */

// ============================================================================
// HERO SECTIONS
// ============================================================================

export const heroComponents = {
  /**
   * LandingPrimaryImageCtaSection
   * Best for: Hero with product screenshot, dashboard preview, app mockup
   *
   * Key props:
   * - title: string
   * - description: string
   * - imageSrc: string
   * - imageAlt: string
   * - imagePosition: 'left' | 'right' | 'center'
   * - imagePerspective: 'none' | 'left' | 'right' | 'bottom' | 'bottom-lg' | 'paper'
   * - imageShadow: 'none' | 'soft' | 'hard'
   * - textPosition: 'center' | 'left'
   * - minHeight: number (default: 350)
   * - leadingComponent?: React.ReactNode (for pills/badges above title)
   * - footerComponent?: React.ReactNode
   * - children: React.ReactNode (for CTA buttons)
   */
  imageHero: 'LandingPrimaryImageCtaSection',

  /**
   * LandingPrimaryVideoCtaSection
   * Best for: Hero with video demo, explainer video, product walkthrough
   *
   * Key props:
   * - title: string
   * - description: string
   * - videoSrc: string
   * - videoPoster?: string
   * - videoPosition: 'left' | 'right' | 'center'
   * - videoMaxWidth?: string
   * - videoShadow: 'none' | 'soft' | 'hard'
   * - muted?: boolean (default: true)
   * - autoPlay?: boolean (default: false)
   * - controls?: boolean (default: false)
   * - loop?: boolean (default: false)
   * - textPosition: 'center' | 'left'
   * - minHeight: number (default: 350)
   */
  videoHero: 'LandingPrimaryVideoCtaSection',

  /**
   * LandingPrimaryTextCtaSection
   * Best for: Simple text-only hero, announcement hero, minimal design
   *
   * Key props:
   * - title: string
   * - description: string
   * - textPosition: 'center' | 'left' (default: 'center')
   * - leadingComponent?: React.ReactNode
   * - footerComponent?: React.ReactNode
   * - children: React.ReactNode (for CTA buttons)
   */
  textHero: 'LandingPrimaryTextCtaSection',
};

// ============================================================================
// FEATURE SECTIONS
// ============================================================================

export const featureComponents = {
  /**
   * LandingFeatureList
   * Best for: Grid of 3-6 features with icons
   *
   * Key props:
   * - title: string
   * - description: string
   * - featureItems: Array<{ title: string, description: string, icon: React.ReactNode }>
   */
  featureGrid: 'LandingFeatureList',

  /**
   * LandingProductFeaturesGrid
   * Best for: Features displayed in a visual grid with more emphasis
   */
  productFeaturesGrid: 'LandingProductFeaturesGrid',

  /**
   * LandingProductFeature
   * Best for: Single feature spotlight with image
   *
   * Key props:
   * - title: string
   * - description: string | descriptionComponent: React.ReactNode
   * - imageSrc: string
   * - imageAlt: string
   * - imagePosition: 'left' | 'right' | 'center'
   * - imagePerspective: 'none' | 'left' | 'right' | 'bottom' | 'bottom-lg' | 'paper'
   * - imageShadow: 'none' | 'soft' | 'hard'
   * - textPosition: 'center' | 'left'
   * - zoomOnHover?: boolean
   * - minHeight: number (default: 350)
   */
  singleFeature: 'LandingProductFeature',

  /**
   * LandingProductSteps
   * Best for: "How it works" sections, step-by-step process
   *
   * Key props:
   * - title: string
   * - description: string
   * - display: 'grid' | 'list'
   * - children: React.ReactNode (LandingProductFeature components)
   */
  steps: 'LandingProductSteps',

  /**
   * LandingBentoGridSection
   * Best for: Modern bento-style feature showcase
   *
   * Key props:
   * - title: string
   * - description: string
   * - children: React.ReactNode (LandingBentoGridItem, LandingBentoGridIconItem, etc.)
   */
  bentoGrid: 'LandingBentoGridSection',

  /**
   * LandingProductFeatureKeyPoints
   * Best for: Feature with bullet point highlights
   */
  keyPoints: 'LandingProductFeatureKeyPoints',

  /**
   * LandingProductTour / LandingProductTourSection
   * Best for: Interactive product tour with multiple views
   *
   * Uses: LandingProductTourList, LandingProductTourTrigger, LandingProductTourContent
   */
  productTour: 'LandingProductTourSection',
};

// ============================================================================
// TESTIMONIAL SECTIONS
// ============================================================================

export const testimonialComponents = {
  /**
   * LandingTestimonialGrid
   * Best for: Multiple testimonials in masonry-style grid (3+ testimonials)
   *
   * Key props:
   * - title: string
   * - description: string
   * - testimonialItems: Array<{
   *     name: string,
   *     text: string,
   *     handle?: string,
   *     imageSrc?: string,
   *     url?: string,
   *     verified?: boolean
   *   }>
   * - featuredTestimonial?: TestimonialItem (highlighted testimonial)
   *
   * Wrap with LandingTestimonialReadMoreWrapper for expandable testimonials
   */
  grid: 'LandingTestimonialGrid',

  /**
   * LandingTestimonialInline
   * Best for: Single prominent testimonial or quote
   *
   * Key props:
   * - children: React.ReactNode (LandingTestimonialInlineItem components)
   */
  inline: 'LandingTestimonialInline',

  /**
   * LandingTestimonialListSection
   * Best for: Horizontal scrolling testimonials
   */
  list: 'LandingTestimonialListSection',
};

// ============================================================================
// PRICING SECTIONS
// ============================================================================

export const pricingComponents = {
  /**
   * LandingPricingSection
   * Best for: Standard pricing cards (2-3 tiers)
   *
   * Key props:
   * - title: string
   * - description: string
   * - children: React.ReactNode (LandingPricingPlan components)
   */
  cards: 'LandingPricingSection',

  /**
   * LandingPriceComparisonSection
   * Best for: Detailed feature comparison table
   *
   * Uses: LandingPriceComparisonColumn, LandingPriceComparisonItem
   */
  comparison: 'LandingPriceComparisonSection',
};

// ============================================================================
// CTA SECTIONS
// ============================================================================

export const ctaComponents = {
  /**
   * LandingSaleCtaSection
   * Best for: Promotional CTA, signup prompt, conversion section
   *
   * Key props:
   * - title: string
   * - description: string
   * - children: React.ReactNode (CTA buttons)
   */
  sale: 'LandingSaleCtaSection',

  /**
   * LandingNewsletterSection
   * Best for: Email signup, newsletter subscription
   *
   * Uses: LandingNewsletterInput for the form
   */
  newsletter: 'LandingNewsletterSection',

  /**
   * LandingDiscount
   * Best for: Discount badge/banner
   */
  discount: 'LandingDiscount',
};

// ============================================================================
// FAQ SECTIONS
// ============================================================================

export const faqComponents = {
  /**
   * LandingFaqCollapsibleSection
   * Best for: Expandable FAQ with accordion behavior
   *
   * Key props:
   * - title: string
   * - description: string
   * - faqItems: Array<{ question: string, answer: string }>
   */
  collapsible: 'LandingFaqCollapsibleSection',

  /**
   * LandingFaqSection
   * Best for: Static FAQ list (always expanded)
   */
  static: 'LandingFaqSection',
};

// ============================================================================
// SOCIAL PROOF SECTIONS
// ============================================================================

export const socialProofComponents = {
  /**
   * LandingSocialProof
   * Best for: User count with avatars (e.g., "Join 1,100+ happy users")
   *
   * Key props:
   * - avatarItems: Array<{ imageSrc: string, name: string }>
   * - numberOfUsers: number
   * - suffixText: string (e.g., "happy users")
   */
  avatars: 'LandingSocialProof',

  /**
   * LandingSocialProofBand
   * Best for: Logo band of clients/press mentions
   *
   * Uses: LandingSocialProofBandItem
   */
  logoBand: 'LandingSocialProofBand',

  /**
   * LandingRating
   * Best for: Star rating display
   */
  rating: 'LandingRating',

  /**
   * LandingProductHuntAward
   * Best for: Product Hunt badge
   */
  productHunt: 'LandingProductHuntAward',
};

// ============================================================================
// ABOUT/TEAM SECTIONS
// ============================================================================

export const aboutComponents = {
  /**
   * LandingTeamSection
   * Best for: Team member grid
   *
   * Key props:
   * - title: string (default: "Our Members")
   * - description: string
   * - members: Array<{ name: string, role: string, imageSrc: string }>
   * - textPosition: 'center' | 'left'
   */
  team: 'LandingTeamSection',

  /**
   * LandingAboutSection
   * Best for: Company story, about us content
   */
  about: 'LandingAboutSection',

  /**
   * LandingVisionMissionSection
   * Best for: Vision/mission statements
   */
  visionMission: 'LandingVisionMissionSection',
};

// ============================================================================
// STATS SECTIONS
// ============================================================================

export const statsComponents = {
  /**
   * LandingStatsSection
   * Best for: Key metrics, numbers, achievements
   *
   * Key props:
   * - title?: string
   * - description?: string
   * - stats: Array<{ value: string, label?: string, description: string }>
   * - columnsDesktop: 2 | 3 | 4 (default: 3)
   * - columnsMobile: 1 | 2 (default: 1)
   * - hasBorders: boolean (default: true)
   * - textPosition: 'center' | 'left'
   */
  stats: 'LandingStatsSection',
};

// ============================================================================
// NAVIGATION & LAYOUT
// ============================================================================

export const navigationComponents = {
  /**
   * LandingHeader
   * Best for: Floating/fixed header with menu
   *
   * Uses: LandingHeaderMenuItem for menu items
   */
  header: 'LandingHeader',

  /**
   * LandingFooter
   * Best for: Multi-column footer
   *
   * Uses: LandingFooterColumn, LandingFooterLink
   */
  footer: 'LandingFooter',
};

// ============================================================================
// VISUAL EFFECTS & BACKGROUNDS
// ============================================================================

export const backgroundComponents = {
  /** Animated blob gradient */
  blob: 'LandingBlobCtaBg',
  /** Conic gradient effect */
  conic: 'LandingConicCtaBg',
  /** Curved animated lines */
  curvedLines: 'LandingCurvedLinesCtaBg',
  /** Diagonal stripes pattern */
  diagonal: 'LandingDiagonalCtaBg',
  /** Floating dot particles */
  dotParticles: 'LandingDotParticleCtaBg',
  /** Side ellipse gradient */
  ellipseSide: 'LandingEllipseSideCtaBg',
  /** Flickering grid animation */
  flickeringGrid: 'LandingFlickeringGridCtaBg',
  /** Flying particle animation */
  flyingParticles: 'LandingFlyingParticleCtaBg',
  /** Subtle grid pattern */
  gridPattern: 'LandingGridPatternCtaBg',
  /** Mouse-following highlight */
  mouseHighlight: 'LandingMouseHighlightCtaBg',
  /** Animated path lines */
  paths: 'LandingPathsCtaBg',
  /** Geometric shapes */
  shapes: 'LandingShapesCtaBg',
  /** Straight animated lines */
  straightLines: 'LandingStraightLinesCtaBg',
  /** Wave animation */
  waves: 'LandingWavesCtaBg',
};

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

export const utilityComponents = {
  /** Scrolling logo/text band */
  marquee: 'LandingMarquee',
  /** Content band section */
  band: 'LandingBandSection',
  /** Read more wrapper for long content */
  readMore: 'LandingReadMoreWrapper',
  /** Leading pill/badge */
  leadingPill: 'LandingLeadingPill',
  /** Product showcase */
  showcase: 'LandingShowcase',
  /** Product cards section */
  productCards: 'LandingProductCardSection',
  /** Problem agitator section */
  problemAgitator: 'LandingProblemAgitator',
  /** Problem/solution comparison */
  problemSolution: 'LandingProductProblemSolution',
  /** App store buttons */
  appStoreButton: 'LandingAppStoreButton',
  /** Blog list */
  blogList: 'LandingBlogList',
};

// ============================================================================
// INDUSTRY-SPECIFIC RECOMMENDATIONS
// ============================================================================

export const industryRecommendations = {
  accounting: {
    hero: 'imageHero',
    features: ['featureGrid', 'keyPoints'],
    testimonials: 'grid',
    cta: 'sale',
    faq: 'collapsible',
    team: 'team',
    stats: 'stats',
    suggestedSections: [
      'Hero with professional office image',
      'Services/features grid (6 items)',
      'Stats section (years in business, clients served, etc.)',
      'Team section',
      'Testimonials',
      'FAQ',
      'CTA',
    ],
  },
  legal: {
    hero: 'imageHero',
    features: ['featureGrid', 'singleFeature'],
    testimonials: 'grid',
    cta: 'sale',
    faq: 'collapsible',
    team: 'team',
    stats: 'stats',
    suggestedSections: [
      'Hero with professional imagery',
      'Practice areas grid',
      'Attorney profiles',
      'Case results/stats',
      'Client testimonials',
      'FAQ',
      'Contact CTA',
    ],
  },
  medical: {
    hero: 'imageHero',
    features: ['featureGrid', 'bentoGrid'],
    testimonials: 'inline',
    cta: 'sale',
    faq: 'collapsible',
    team: 'team',
    stats: 'stats',
    suggestedSections: [
      'Hero with welcoming imagery',
      'Services offered',
      'Meet the doctors',
      'Patient testimonials',
      'Insurance/FAQ',
      'Appointment CTA',
    ],
  },
  construction: {
    hero: 'imageHero',
    features: ['featureGrid', 'steps'],
    testimonials: 'grid',
    cta: 'sale',
    faq: 'collapsible',
    team: 'team',
    stats: 'stats',
    suggestedSections: [
      'Hero with project showcase',
      'Services grid',
      'How we work (steps)',
      'Project stats',
      'Testimonials',
      'Contact CTA',
    ],
  },
  restaurant: {
    hero: 'videoHero',
    features: ['bentoGrid', 'showcase'],
    testimonials: 'inline',
    cta: 'newsletter',
    faq: 'collapsible',
    team: 'team',
    stats: 'stats',
    suggestedSections: [
      'Hero with food/ambiance video',
      'Menu highlights (bento grid)',
      'Location/hours',
      'Reviews',
      'Reservation CTA',
    ],
  },
  realEstate: {
    hero: 'imageHero',
    features: ['productTour', 'featureGrid'],
    testimonials: 'grid',
    cta: 'sale',
    faq: 'collapsible',
    team: 'team',
    stats: 'stats',
    suggestedSections: [
      'Hero with property imagery',
      'Property search/featured listings',
      'Agent profiles',
      'Market stats',
      'Client testimonials',
      'Contact CTA',
    ],
  },
};

// ============================================================================
// FULL COMPONENT LIST (for reference)
// ============================================================================

export const allComponents = [
  // Hero
  'LandingPrimaryImageCtaSection',
  'LandingPrimaryVideoCtaSection',
  'LandingPrimaryTextCtaSection',
  // Features
  'LandingFeatureList',
  'LandingFeature',
  'LandingProductFeature',
  'LandingProductFeaturesGrid',
  'LandingProductFeatureKeyPoints',
  'LandingProductSteps',
  'LandingProductVideoFeature',
  'LandingProductTour',
  'LandingProductTourSection',
  'LandingProductTourList',
  'LandingProductTourTrigger',
  'LandingProductTourContent',
  'LandingBentoGridSection',
  'LandingBentoGridItem',
  'LandingBentoGridIconItem',
  'LandingBentoGridNumberItem',
  'LandingBentoGridImageItem',
  // Testimonials
  'LandingTestimonialGrid',
  'LandingTestimonial',
  'LandingTestimonialInline',
  'LandingTestimonialInlineItem',
  'LandingTestimonialListSection',
  'LandingTestimonialReadMoreWrapper',
  // Pricing
  'LandingPricingSection',
  'LandingPricingPlan',
  'LandingPriceComparisonSection',
  'LandingPriceComparisonColumn',
  'LandingPriceComparisonItem',
  // CTA
  'LandingSaleCtaSection',
  'LandingNewsletterSection',
  'LandingNewsletterInput',
  'LandingDiscount',
  // FAQ
  'LandingFaqCollapsibleSection',
  'LandingFaqSection',
  // Social Proof
  'LandingSocialProof',
  'LandingSocialProofBand',
  'LandingSocialProofBandItem',
  'LandingAvatar',
  'LandingRating',
  'LandingProductHuntAward',
  // About/Team
  'LandingTeamSection',
  'LandingTeamMember',
  'LandingAboutSection',
  'LandingVisionMissionSection',
  // Stats
  'LandingStatsSection',
  'LandingStatItem',
  // Navigation
  'LandingHeader',
  'LandingHeaderMenuItem',
  'LandingFooter',
  'LandingFooterColumn',
  'LandingFooterLink',
  // Backgrounds
  'LandingBlobCtaBg',
  'LandingConicCtaBg',
  'LandingCurvedLinesCtaBg',
  'LandingDiagonalCtaBg',
  'LandingDotParticleCtaBg',
  'LandingEllipseSideCtaBg',
  'LandingFlickeringGridCtaBg',
  'LandingFlyingParticleCtaBg',
  'LandingGridPatternCtaBg',
  'LandingMouseHighlightCtaBg',
  'LandingPathsCtaBg',
  'LandingShapesCtaBg',
  'LandingStraightLinesCtaBg',
  'LandingWavesCtaBg',
  // Utility
  'LandingMarquee',
  'LandingBandSection',
  'LandingReadMoreWrapper',
  'LandingLeadingPill',
  'LandingShowcase',
  'LandingShowcaseItem',
  'LandingProductCard',
  'LandingProductCardSection',
  'LandingProblemAgitator',
  'LandingProblemAgitatorItem',
  'LandingProblemAgitatorComment',
  'LandingProductProblemSolution',
  'LandingAppStoreButton',
  'LandingBlogList',
  'LandingBlogPost',
];
