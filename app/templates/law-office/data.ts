/**
 * Law Office Template Data
 *
 * This file contains all customizable content for the law firm template.
 * Replace the placeholder content with actual client information.
 *
 * Instructions:
 * 1. Copy this folder to /app/[client-name]
 * 2. Update this data file with client-specific content
 * 3. Update /data/config/colors.js with brand colors (typically navy/gold for law)
 * 4. Add client images to /public/static/images/[client-name]/
 */

import {
  Scale,
  Briefcase,
  Users,
  FileText,
  Shield,
  Gavel,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Building2,
} from 'lucide-react';

// ============================================================================
// SITE METADATA
// ============================================================================

export const siteData = {
  businessName: 'Harrison & Associates Law Firm',
  tagline: 'Experienced Legal Advocates Fighting for Your Rights',
  phone: '(555) 987-6543',
  email: 'contact@harrisonlaw.com',
  address: '456 Justice Avenue, Suite 200, City, ST 12345',
  hours: 'Mon-Fri: 8AM-6PM | 24/7 Emergency Line',
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  title: 'Experienced Legal Advocates Fighting for Your Rights',
  description:
    'When you need a legal team that truly cares about your case, Harrison & Associates delivers. Over 30 years of proven results in personal injury, family law, and business litigation.',
  primaryCta: {
    label: 'Free Case Evaluation',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Practice Areas',
    href: '#practice-areas',
  },
  image: {
    src: '/static/images/law/hero.jpg',
    alt: 'Professional law office with attorneys',
  },
  socialProof: {
    avatars: [
      { imageSrc: '/static/images/people/1.webp', name: 'Client 1' },
      { imageSrc: '/static/images/people/2.webp', name: 'Client 2' },
      { imageSrc: '/static/images/people/3.webp', name: 'Client 3' },
    ],
    count: 2500,
    text: 'cases successfully resolved',
  },
};

// ============================================================================
// PRACTICE AREAS/SERVICES
// ============================================================================

export const practiceAreasData = {
  title: 'Practice Areas',
  description:
    'Our experienced attorneys handle a wide range of legal matters. Whatever your situation, we have the expertise to help.',
  items: [
    {
      title: 'Personal Injury',
      description:
        'Injured due to negligence? We fight for maximum compensation for medical bills, lost wages, and pain and suffering.',
      icon: Shield,
    },
    {
      title: 'Family Law',
      description:
        'Divorce, custody, and support matters handled with compassion. We protect your family\'s best interests.',
      icon: Users,
    },
    {
      title: 'Business Litigation',
      description:
        'Contract disputes, partnership issues, and commercial litigation. Protecting your business interests in and out of court.',
      icon: Briefcase,
    },
    {
      title: 'Estate Planning',
      description:
        'Wills, trusts, and probate matters. Secure your legacy and protect your loved ones\' futures.',
      icon: FileText,
    },
    {
      title: 'Criminal Defense',
      description:
        'Facing charges? Our aggressive defense attorneys protect your rights and fight for the best possible outcome.',
      icon: Gavel,
    },
    {
      title: 'Real Estate Law',
      description:
        'Residential and commercial transactions, disputes, and closings. Expert guidance through complex real estate matters.',
      icon: Building2,
    },
  ],
};

// ============================================================================
// STATISTICS/CASE RESULTS
// ============================================================================

export const statsData = {
  items: [
    { value: '30+', description: 'Years of Experience' },
    { value: '$100M+', description: 'Recovered for Clients' },
    { value: '2,500+', description: 'Cases Won' },
    { value: '98%', description: 'Success Rate' },
  ],
};

// ============================================================================
// WHY CHOOSE US
// ============================================================================

export const whyChooseUsData = {
  title: 'Why Choose Harrison & Associates',
  description:
    'We\'re not just attorneys—we\'re your advocates, committed to achieving the best possible outcome for your case.',
  imageSrc: '/static/images/law/why-choose.jpg',
  imageAlt: 'Attorney consulting with client',
  points: [
    'No Win, No Fee: You don\'t pay unless we win your case',
    'Personalized Attention: Direct access to your attorney, not a paralegal',
    '24/7 Availability: We\'re here when you need us most',
    'Proven Track Record: Millions recovered for our clients',
    'Trial-Ready: We prepare every case for court, ensuring maximum leverage',
    'Bilingual Services: Spanish-speaking attorneys available',
  ],
};

// ============================================================================
// ATTORNEYS/TEAM
// ============================================================================

export const teamData = {
  title: 'Meet Our Attorneys',
  description:
    'Our team brings decades of combined experience and a passion for justice to every case.',
  members: [
    {
      name: 'James Harrison, Esq.',
      role: 'Founding Partner | Personal Injury',
      imageSrc: '/static/images/team/james.jpg',
    },
    {
      name: 'Maria Santos, Esq.',
      role: 'Partner | Family Law',
      imageSrc: '/static/images/team/maria.jpg',
    },
    {
      name: 'David Chen, Esq.',
      role: 'Senior Associate | Business Litigation',
      imageSrc: '/static/images/team/david.jpg',
    },
  ],
};

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const testimonialsData = {
  title: 'Client Success Stories',
  description: 'Hear from clients whose lives we\'ve helped transform through dedicated legal representation.',
  items: [
    {
      name: 'Michael R.',
      text: 'After my car accident, Harrison & Associates got me $850,000 when the insurance company offered $50,000. They changed my life.',
      handle: 'Personal Injury Client',
      imageSrc: '/static/images/testimonials/michael.jpg',
      verified: true,
    },
    {
      name: 'Sarah T.',
      text: 'Going through divorce was devastating, but Maria made sure I kept custody of my children and got a fair settlement. Forever grateful.',
      handle: 'Family Law Client',
      imageSrc: '/static/images/testimonials/sarah.jpg',
      verified: true,
    },
    {
      name: 'Robert K.',
      text: 'When my business partner tried to force me out, David fought back and protected everything I\'d built. True professional.',
      handle: 'Business Litigation Client',
      imageSrc: '/static/images/testimonials/robert.jpg',
      verified: false,
    },
    {
      name: 'Jennifer M.',
      text: 'They took my wrongful termination case when three other firms said no. Won a six-figure settlement. These lawyers fight.',
      handle: 'Employment Law Client',
      imageSrc: '/static/images/testimonials/jennifer.jpg',
      verified: true,
    },
    {
      name: 'Carlos G.',
      text: 'Spanish-speaking staff made everything easier during the most stressful time of my life. Professional and compassionate.',
      handle: 'Personal Injury Client',
      imageSrc: '/static/images/testimonials/carlos.jpg',
      verified: true,
    },
    {
      name: 'Patricia W.',
      text: 'Estate planning seemed overwhelming until I met with their team. Now I have peace of mind knowing my family is protected.',
      handle: 'Estate Planning Client',
      imageSrc: '/static/images/testimonials/patricia.jpg',
      verified: false,
    },
  ],
};

// ============================================================================
// FAQ
// ============================================================================

export const faqData = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about working with our firm.',
  items: [
    {
      question: 'How much does a consultation cost?',
      answer:
        'Initial consultations are completely free and confidential. We\'ll evaluate your case, explain your options, and answer all your questions with no obligation.',
    },
    {
      question: 'Do I have to pay upfront for a personal injury case?',
      answer:
        'No. We work on a contingency fee basis for personal injury cases, meaning you pay nothing unless we win. Our fee comes from the settlement or verdict we obtain for you.',
    },
    {
      question: 'How long will my case take?',
      answer:
        'Every case is different. Simple matters may resolve in weeks, while complex litigation can take months or years. We\'ll give you a realistic timeline during your consultation and keep you updated throughout.',
    },
    {
      question: 'Will my case go to trial?',
      answer:
        'Most cases settle out of court, but we prepare every case as if it will go to trial. This preparation often results in better settlements because opposing counsel knows we\'re ready to fight.',
    },
    {
      question: 'Can I switch attorneys if I already have one?',
      answer:
        'Yes, you have the right to change attorneys at any time. If you\'re unhappy with your current representation, contact us for a free second opinion on your case.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve clients throughout the entire state with offices in major metropolitan areas. We can also handle cases in neighboring states depending on the matter.',
    },
  ],
};

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  title: 'Get the Legal Help You Deserve',
  description:
    'Don\'t face your legal challenges alone. Contact us today for a free, confidential consultation.',
  buttonLabel: 'Free Case Evaluation',
  buttonHref: '#contact',
};

// ============================================================================
// CONTACT INFO
// ============================================================================

export const contactData = {
  title: 'Contact Us',
  description: 'Available 24/7 for emergencies. Regular office hours Mon-Fri.',
  items: [
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 987-6543',
      href: 'tel:+15559876543',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@harrisonlaw.com',
      href: 'mailto:contact@harrisonlaw.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '456 Justice Avenue, Suite 200',
      href: 'https://maps.google.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 8AM-6PM',
      href: null,
    },
  ],
};

// ============================================================================
// CREDENTIALS/AWARDS (optional)
// ============================================================================

export const credentialsData = {
  title: 'Recognition & Memberships',
  items: [
    'Super Lawyers Selection 2020-2024',
    'State Bar Association',
    'American Association for Justice',
    'Million Dollar Advocates Forum',
    'Martindale-Hubbell AV Rated',
  ],
};
