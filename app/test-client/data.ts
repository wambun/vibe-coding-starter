/**
 * Accounting Firm Template Data
 *
 * This file contains all customizable content for the accounting firm template.
 * Replace the placeholder content with actual client information.
 *
 * Instructions:
 * 1. Copy this folder to /app/[client-name]
 * 2. Update this data file with client-specific content
 * 3. Update /data/config/colors.js with brand colors
 * 4. Add client images to /public/static/images/[client-name]/
 */

import {
  Calculator,
  BookOpen,
  Users,
  TrendingUp,
  Building,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

// ============================================================================
// SITE METADATA
// ============================================================================

export const siteData = {
  businessName: 'Premier Accounting Services',
  tagline: 'Expert Financial Solutions for Growing Businesses',
  phone: '(555) 123-4567',
  email: 'info@premieraccounting.com',
  address: '123 Financial District, Suite 500, City, ST 12345',
  hours: 'Mon-Fri: 9AM-6PM',
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  title: 'Expert Accounting Services for Growing Businesses',
  description:
    'Focus on what you do best. We\'ll handle the numbers. Professional tax preparation, bookkeeping, and financial consulting tailored to your needs.',
  primaryCta: {
    label: 'Schedule Consultation',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Our Services',
    href: '#services',
  },
  image: {
    src: '/static/images/accounting/hero.jpg',
    alt: 'Professional accounting team at work',
  },
  socialProof: {
    avatars: [
      { imageSrc: '/static/images/people/1.webp', name: 'Client 1' },
      { imageSrc: '/static/images/people/2.webp', name: 'Client 2' },
      { imageSrc: '/static/images/people/3.webp', name: 'Client 3' },
    ],
    count: 500,
    text: 'businesses trust us with their finances',
  },
};

// ============================================================================
// SERVICES/FEATURES
// ============================================================================

export const servicesData = {
  title: 'Comprehensive Financial Services',
  description:
    'From daily bookkeeping to complex tax planning, we provide the expertise your business needs to thrive.',
  items: [
    {
      title: 'Tax Preparation & Planning',
      description:
        'Maximize deductions and minimize liability with strategic tax planning for individuals and businesses.',
      icon: Calculator,
    },
    {
      title: 'Bookkeeping Services',
      description:
        'Accurate, timely bookkeeping that keeps your finances organized and audit-ready year-round.',
      icon: BookOpen,
    },
    {
      title: 'Payroll Management',
      description:
        'Hassle-free payroll processing with tax compliance, direct deposits, and detailed reporting.',
      icon: Users,
    },
    {
      title: 'Financial Consulting',
      description:
        'Strategic guidance to help you make informed decisions and achieve your financial goals.',
      icon: TrendingUp,
    },
    {
      title: 'Business Formation',
      description:
        'Expert assistance with entity selection, registration, and compliance for new businesses.',
      icon: Building,
    },
    {
      title: 'Audit Support',
      description:
        'Professional representation and support if you ever face an IRS audit or review.',
      icon: Shield,
    },
  ],
};

// ============================================================================
// STATISTICS
// ============================================================================

export const statsData = {
  items: [
    { value: '25+', description: 'Years of Experience' },
    { value: '500+', description: 'Clients Served' },
    { value: '$50M+', description: 'Tax Savings Found' },
    { value: '99%', description: 'Client Retention' },
  ],
};

// ============================================================================
// PROCESS/HOW IT WORKS
// ============================================================================

export const processData = {
  title: 'How We Work Together',
  description: 'A simple, transparent process designed to give you peace of mind.',
  steps: [
    {
      title: '1. Free Consultation',
      description:
        'We start with a no-obligation conversation to understand your needs and how we can help.',
      imageSrc: '/static/images/accounting/consultation.jpg',
      imageAlt: 'Consultation meeting',
    },
    {
      title: '2. Custom Plan',
      description:
        'We develop a tailored service plan that fits your business size, industry, and goals.',
      imageSrc: '/static/images/accounting/planning.jpg',
      imageAlt: 'Planning session',
    },
    {
      title: '3. Ongoing Support',
      description:
        'You\'ll have a dedicated accountant who knows your business and is always available to help.',
      imageSrc: '/static/images/accounting/support.jpg',
      imageAlt: 'Ongoing support',
    },
  ],
};

// ============================================================================
// TEAM MEMBERS
// ============================================================================

export const teamData = {
  title: 'Meet Your Financial Partners',
  description: 'Experienced CPAs and financial professionals dedicated to your success.',
  members: [
    {
      name: 'Sarah Johnson, CPA',
      role: 'Managing Partner',
      imageSrc: '/static/images/team/sarah.jpg',
    },
    {
      name: 'Michael Chen, CPA',
      role: 'Tax Director',
      imageSrc: '/static/images/team/michael.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Accountant',
      imageSrc: '/static/images/team/emily.jpg',
    },
  ],
};

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const testimonialsData = {
  title: 'Trusted by Businesses Like Yours',
  description: 'See what our clients say about working with us.',
  items: [
    {
      name: 'David Martinez',
      text: 'They saved us over $30,000 in taxes last year alone. Best investment we\'ve made in our business.',
      handle: 'Owner, Martinez Construction',
      imageSrc: '/static/images/testimonials/david.jpg',
      verified: true,
    },
    {
      name: 'Jennifer Lee',
      text: 'Finally, an accountant who actually explains things in plain English. I always know where my business stands.',
      handle: 'CEO, TechStart Inc',
      imageSrc: '/static/images/testimonials/jennifer.jpg',
      verified: true,
    },
    {
      name: 'Robert Wilson',
      text: 'They handled my IRS audit flawlessly. Professional, thorough, and always available when I needed them.',
      handle: 'Owner, Wilson\'s Auto Shop',
      imageSrc: '/static/images/testimonials/robert.jpg',
      verified: false,
    },
    {
      name: 'Amanda Chen',
      text: 'Switching to Premier was the best business decision I made this year. My books are finally organized.',
      handle: 'Founder, Chen Consulting',
      imageSrc: '/static/images/testimonials/amanda.jpg',
      verified: true,
    },
    {
      name: 'Marcus Thompson',
      text: 'Their payroll service is seamless. I never have to worry about compliance or late payments anymore.',
      handle: 'Owner, Thompson Landscaping',
      imageSrc: '/static/images/testimonials/marcus.jpg',
      verified: false,
    },
    {
      name: 'Lisa Park',
      text: 'The financial consulting helped us secure a loan for expansion. They really understand small business.',
      handle: 'Co-owner, Park & Kim Dental',
      imageSrc: '/static/images/testimonials/lisa.jpg',
      verified: true,
    },
  ],
};

// ============================================================================
// FAQ
// ============================================================================

export const faqData = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about our services.',
  items: [
    {
      question: 'How much do your services cost?',
      answer:
        'Our pricing depends on the complexity of your needs. We offer transparent, fixed-fee pricing with no surprises. Schedule a free consultation to get a custom quote tailored to your business.',
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer:
        'Yes! We serve everyone from solo entrepreneurs to established businesses with dozens of employees. Our services scale to match your needs and budget.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply schedule a free consultation using the form below or call us directly. We\'ll discuss your needs and determine how we can best help your business succeed.',
    },
    {
      question: 'Are you available year-round or just during tax season?',
      answer:
        'We\'re here for you 365 days a year. While tax season is busy, we believe great accounting is a year-round partnership, not just an annual transaction.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have deep experience in construction, healthcare, retail, professional services, and technology. However, our expertise applies across all industries.',
    },
    {
      question: 'Can you help with IRS problems or audits?',
      answer:
        'Absolutely. We provide full audit representation and can help resolve tax disputes, liens, levies, and other IRS issues. Many of our clients come to us specifically for this expertise.',
    },
  ],
};

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  title: 'Ready to Take Control of Your Finances?',
  description:
    'Schedule your free consultation today. No obligation, no pressure—just expert advice.',
  buttonLabel: 'Schedule Free Consultation',
  buttonHref: '#contact',
};

// ============================================================================
// CONTACT INFO (for footer or contact section)
// ============================================================================

export const contactData = {
  title: 'Get In Touch',
  description: 'Ready to discuss your financial needs? Reach out today.',
  items: [
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@premieraccounting.com',
      href: 'mailto:info@premieraccounting.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Financial District, Suite 500',
      href: 'https://maps.google.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 9AM-6PM',
      href: null,
    },
  ],
};

// ============================================================================
// CREDENTIALS/CERTIFICATIONS (optional section)
// ============================================================================

export const credentialsData = {
  title: 'Certified & Trusted',
  items: [
    'Licensed CPA Firm',
    'QuickBooks ProAdvisor',
    'AICPA Member',
    'State Board of Accountancy',
  ],
};
