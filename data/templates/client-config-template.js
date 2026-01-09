/**
 * Client Configuration Template
 *
 * Copy this file to /data/config/client.js and update with client information.
 * Then run the setup script to apply changes across the project.
 *
 * This is the SINGLE SOURCE OF TRUTH for client branding.
 */

const clientConfig = {
  // ============================================================================
  // BUSINESS INFORMATION
  // ============================================================================
  business: {
    name: 'Client Business Name',
    tagline: 'Your tagline here',
    description: 'A longer description of the business for SEO and meta tags.',
    industry: 'accounting', // accounting | legal | medical | construction | restaurant | realEstate | general
  },

  // ============================================================================
  // CONTACT INFORMATION
  // ============================================================================
  contact: {
    phone: '(555) 123-4567',
    email: 'info@clientdomain.com',
    address: '123 Main Street, Suite 100, City, ST 12345',
    hours: 'Mon-Fri: 9AM-5PM',
  },

  // ============================================================================
  // DOMAIN & URLs
  // ============================================================================
  urls: {
    domain: 'clientdomain.com',
    siteUrl: 'https://clientdomain.com',
  },

  // ============================================================================
  // SOCIAL MEDIA
  // ============================================================================
  social: {
    twitter: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
  },

  // ============================================================================
  // BRAND COLORS
  // ============================================================================
  // These colors will be applied to /data/config/colors.js
  colors: {
    primary: {
      lighter: '#dbeafe', // Tailwind blue-100
      light: '#93c5fd', // Tailwind blue-300
      main: '#3b82f6', // Tailwind blue-500
      dark: '#1d4ed8', // Tailwind blue-700
      darker: '#1e3a8a', // Tailwind blue-900
    },
    secondary: {
      lighter: '#d1fae5', // Tailwind emerald-100
      light: '#6ee7b7', // Tailwind emerald-300
      main: '#10b981', // Tailwind emerald-500
      dark: '#059669', // Tailwind emerald-700
      darker: '#047857', // Tailwind emerald-900
    },
  },

  // ============================================================================
  // THEME PREFERENCES
  // ============================================================================
  theme: {
    defaultMode: 'light', // 'light' | 'dark'
    grayScale: 'slate', // 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  },

  // ============================================================================
  // NAVIGATION LINKS
  // ============================================================================
  navigation: {
    header: [
      { title: 'Services', href: '#services' },
      { title: 'About', href: '#about' },
      { title: 'Testimonials', href: '#testimonials' },
      { title: 'FAQ', href: '#faq' },
      { title: 'Contact', href: '#contact' },
    ],
    footer: [
      {
        columnName: 'Services',
        links: [
          { title: 'Service 1', href: '#' },
          { title: 'Service 2', href: '#' },
          { title: 'Service 3', href: '#' },
        ],
      },
      {
        columnName: 'Company',
        links: [
          { title: 'About Us', href: '/about' },
          { title: 'Careers', href: '/careers' },
          { title: 'Contact', href: '/contact' },
        ],
      },
      {
        columnName: 'Legal',
        links: [
          { title: 'Privacy Policy', href: '/privacy' },
          { title: 'Terms of Service', href: '/terms' },
        ],
      },
    ],
  },
};

module.exports = { clientConfig };

/**
 * RECOMMENDED COLOR PALETTES BY INDUSTRY
 *
 * Accounting/Finance:
 * - Primary: Blue (#3b82f6) - Trust, stability
 * - Secondary: Green (#10b981) - Growth, money
 *
 * Legal:
 * - Primary: Navy (#1e3a5f) - Authority, tradition
 * - Secondary: Gold (#d4a574) - Excellence, premium
 *
 * Medical/Healthcare:
 * - Primary: Teal (#14b8a6) - Calm, health
 * - Secondary: Blue (#3b82f6) - Trust, cleanliness
 *
 * Construction:
 * - Primary: Orange (#f97316) - Energy, safety
 * - Secondary: Gray (#6b7280) - Industrial, strength
 *
 * Restaurant:
 * - Primary: Red (#ef4444) - Appetite, warmth
 * - Secondary: Warm brown (#92400e) - Comfort, organic
 *
 * Real Estate:
 * - Primary: Navy (#1e3a5f) - Trust, luxury
 * - Secondary: Amber (#f59e0b) - Warmth, premium
 */
