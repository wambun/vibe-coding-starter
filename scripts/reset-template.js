#!/usr/bin/env node

/**
 * Reset Template Script
 *
 * This script resets the project to a clean template state by:
 * 1. Resetting configuration files to defaults
 * 2. Optionally removing client-specific folders
 *
 * Usage:
 *   node scripts/reset-template.js
 *   npm run reset
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}\n`),
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
};

// Default configuration content
const defaultColors = `/**
 * Brand Colors Configuration
 *
 * Update these values for each client project.
 * Colors are mapped to Tailwind classes: primary-100 through primary-900
 *
 * Configure colors at: https://shipixen.com/color-theme-explorer-shadcn
 *
 * RECOMMENDED PALETTES BY INDUSTRY:
 * - Accounting/Finance: Blue (#3b82f6) + Green (#10b981)
 * - Legal: Navy (#1e40af) + Gold (#d97706)
 * - Medical: Teal (#14b8a6) + Blue (#3b82f6)
 * - Construction: Orange (#f97316) + Gray (#6b7280)
 * - Restaurant: Red (#ef4444) + Brown (#92400e)
 * - Real Estate: Navy (#1e40af) + Amber (#f59e0b)
 */
const colors = {
  primary: {
    lighter: '#dbeafe', // primary-100, primary-200 (Blue)
    light: '#93c5fd', // primary-300, primary-400
    main: '#3b82f6', // primary-500, primary-600
    dark: '#1d4ed8', // primary-700, primary-800
    darker: '#1e3a8a', // primary-900
  },
  secondary: {
    lighter: '#d1fae5', // secondary-100, secondary-200 (Emerald)
    light: '#6ee7b7', // secondary-300, secondary-400
    main: '#10b981', // secondary-500, secondary-600
    dark: '#059669', // secondary-700, secondary-800
    darker: '#047857', // secondary-900
  },
};

module.exports = { colors };
`;

const defaultMetadata = `/**
 * Site Metadata Configuration
 *
 * Update these values for each new client project.
 * This is the single source of truth for site-wide metadata.
 */
const metadata = {
  // Business Information
  title: 'Professional Services | Your Trusted Partner',
  description:
    'Expert professional services tailored to your needs. Contact us today for a free consultation.',
  businessName: 'Your Business Name',
  author: 'Your Business Name',

  // Domain & URLs
  domain: 'yourdomain.com',
  siteUrl: 'https://yourdomain.com',
  siteRepo: '',
  socialBanner: '/api/og',

  // Contact
  supportEmail: 'support@yourdomain.com',
  email: 'info@yourdomain.com',

  // Social Media (leave empty if not used)
  twitter: '',
  instagram: '',
  tiktok: '',
  github: '',
  linkedin: '',
  youtube: '',
  facebook: '',
  threads: '',
  mastodon: '',

  // Display Settings
  logoTitle: '',
  language: 'en-us',
  theme: 'light', // 'light' or 'dark'
  locale: 'en-US',
};

module.exports = { metadata };
`;

const defaultHeaderNavLinks = `/**
 * Header Navigation Links
 *
 * Update these for each client project.
 * These appear in the main navigation header.
 */
export const headerNavLinks: Array<{
  href: string;
  title: string;
}> = [
  { href: '#services', title: 'Services' },
  { href: '#about', title: 'About' },
  { href: '#testimonials', title: 'Testimonials' },
  { href: '#faq', title: 'FAQ' },
  { href: '#contact', title: 'Contact' },
];
`;

const defaultFooterLinks = `/**
 * Footer Navigation Links
 *
 * Update these for each client project.
 * These appear in multi-column format in the footer.
 */
export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Services',
    links: [
      { href: '#services', title: 'Our Services' },
      { href: '#process', title: 'How We Work' },
      { href: '/pricing', title: 'Pricing' },
    ],
  },
  {
    columnName: 'Company',
    links: [
      { href: '#about', title: 'About Us' },
      { href: '#team', title: 'Our Team' },
      { href: '#testimonials', title: 'Testimonials' },
      { href: '#contact', title: 'Contact' },
    ],
  },
  {
    columnName: 'Legal',
    links: [
      { href: '/privacy', title: 'Privacy Policy' },
      { href: '/terms', title: 'Terms of Service' },
    ],
  },
];
`;

// Protected folders that should not be deleted
const protectedFolders = [
  'api',
  'templates',
  'pricing',
  'features',
  'faq',
  'careers',
  'cookies',
  'dashboard',
  'help',
  'press',
  'privacy',
  'security',
  'status',
  'terms',
];

async function resetTemplate() {
  log.header('🔄 Reset Template Wizard');

  console.log('This will reset the project to a clean template state.\n');
  console.log('The following will be reset:');
  console.log('  - /data/config/colors.js');
  console.log('  - /data/config/metadata.js');
  console.log('  - /data/config/headerNavLinks.ts');
  console.log('  - /data/config/footerLinks.ts');
  console.log('');

  const confirm = await question('Proceed with reset? (y/n): ');

  if (confirm.toLowerCase() !== 'y') {
    log.warn('Reset cancelled');
    rl.close();
    return;
  }

  const projectRoot = path.resolve(__dirname, '..');

  // Reset colors.js
  const colorsPath = path.join(projectRoot, 'data', 'config', 'colors.js');
  fs.writeFileSync(colorsPath, defaultColors);
  log.success('Reset colors.js');

  // Reset metadata.js
  const metadataPath = path.join(projectRoot, 'data', 'config', 'metadata.js');
  fs.writeFileSync(metadataPath, defaultMetadata);
  log.success('Reset metadata.js');

  // Reset headerNavLinks.ts
  const headerNavLinksPath = path.join(projectRoot, 'data', 'config', 'headerNavLinks.ts');
  fs.writeFileSync(headerNavLinksPath, defaultHeaderNavLinks);
  log.success('Reset headerNavLinks.ts');

  // Reset footerLinks.ts
  const footerLinksPath = path.join(projectRoot, 'data', 'config', 'footerLinks.ts');
  fs.writeFileSync(footerLinksPath, defaultFooterLinks);
  log.success('Reset footerLinks.ts');

  // Ask about removing client folders
  console.log('');
  const removeClients = await question('Remove client-specific folders from /app/client/? (y/n): ');

  if (removeClients.toLowerCase() === 'y') {
    const clientPath = path.join(projectRoot, 'app', 'client');

    if (!fs.existsSync(clientPath)) {
      log.info('No /app/client/ folder found');
    } else {
      const folders = fs.readdirSync(clientPath, { withFileTypes: true });

      const clientFolders = folders
        .filter((f) => f.isDirectory())
        .filter((f) => !f.name.startsWith('.'))
        .map((f) => f.name);

      if (clientFolders.length === 0) {
        log.info('No client folders found to remove');
      } else {
        console.log(`\nFound ${clientFolders.length} client folder(s):`);
        clientFolders.forEach((f) => console.log(`  - ${f}`));

        const confirmRemove = await question('\nRemove these folders? (y/n): ');

        if (confirmRemove.toLowerCase() === 'y') {
          clientFolders.forEach((folder) => {
            const folderPath = path.join(clientPath, folder);
            fs.rmSync(folderPath, { recursive: true, force: true });
            log.success(`Removed /app/client/${folder}`);
          });
        }
      }
    }
  }

  // Ask about removing client images
  const removeImages = await question('\nRemove client image folders from /public/static/images? (y/n): ');

  if (removeImages.toLowerCase() === 'y') {
    const imagesPath = path.join(projectRoot, 'public', 'static', 'images');
    const folders = fs.readdirSync(imagesPath, { withFileTypes: true });

    // Protected image folders
    const protectedImageFolders = ['outlets', 'people'];

    const clientImageFolders = folders
      .filter((f) => f.isDirectory())
      .filter((f) => !protectedImageFolders.includes(f.name))
      .map((f) => f.name);

    if (clientImageFolders.length === 0) {
      log.info('No client image folders found to remove');
    } else {
      console.log(`\nFound ${clientImageFolders.length} potential client image folder(s):`);
      clientImageFolders.forEach((f) => console.log(`  - ${f}`));

      const confirmRemove = await question('\nRemove these folders? (y/n): ');

      if (confirmRemove.toLowerCase() === 'y') {
        clientImageFolders.forEach((folder) => {
          const folderPath = path.join(imagesPath, folder);
          fs.rmSync(folderPath, { recursive: true, force: true });
          log.success(`Removed /public/static/images/${folder}`);
        });
      }
    }
  }

  log.header('✅ Reset Complete!');
  console.log('\nThe template is now in a clean state.');
  console.log(`Run ${colors.cyan}npm run new-client${colors.reset} to set up a new client project.\n`);

  rl.close();
}

// Run the reset
resetTemplate().catch((err) => {
  log.error(`Reset failed: ${err.message}`);
  rl.close();
  process.exit(1);
});
