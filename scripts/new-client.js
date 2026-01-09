#!/usr/bin/env node

/**
 * New Client Setup Script
 *
 * This script helps you quickly set up a new client project by:
 * 1. Creating a client folder from a template
 * 2. Updating configuration files with client branding
 * 3. Creating necessary image directories
 *
 * Usage:
 *   node scripts/new-client.js
 *   npm run new-client
 *
 * Interactive prompts will guide you through the setup.
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

// Industry-specific color presets
const industryColors = {
  accounting: {
    name: 'Accounting/Finance (Blue + Green)',
    primary: {
      lighter: '#dbeafe',
      light: '#93c5fd',
      main: '#3b82f6',
      dark: '#1d4ed8',
      darker: '#1e3a8a',
    },
    secondary: {
      lighter: '#d1fae5',
      light: '#6ee7b7',
      main: '#10b981',
      dark: '#059669',
      darker: '#047857',
    },
  },
  legal: {
    name: 'Legal (Navy + Gold)',
    primary: {
      lighter: '#dbeafe',
      light: '#60a5fa',
      main: '#1e40af',
      dark: '#1e3a8a',
      darker: '#172554',
    },
    secondary: {
      lighter: '#fef3c7',
      light: '#fcd34d',
      main: '#d97706',
      dark: '#b45309',
      darker: '#92400e',
    },
  },
  medical: {
    name: 'Medical/Healthcare (Teal + Blue)',
    primary: {
      lighter: '#ccfbf1',
      light: '#5eead4',
      main: '#14b8a6',
      dark: '#0d9488',
      darker: '#115e59',
    },
    secondary: {
      lighter: '#dbeafe',
      light: '#93c5fd',
      main: '#3b82f6',
      dark: '#1d4ed8',
      darker: '#1e3a8a',
    },
  },
  construction: {
    name: 'Construction (Orange + Gray)',
    primary: {
      lighter: '#ffedd5',
      light: '#fdba74',
      main: '#f97316',
      dark: '#ea580c',
      darker: '#c2410c',
    },
    secondary: {
      lighter: '#f3f4f6',
      light: '#d1d5db',
      main: '#6b7280',
      dark: '#4b5563',
      darker: '#374151',
    },
  },
  restaurant: {
    name: 'Restaurant (Red + Brown)',
    primary: {
      lighter: '#fee2e2',
      light: '#fca5a5',
      main: '#ef4444',
      dark: '#dc2626',
      darker: '#b91c1c',
    },
    secondary: {
      lighter: '#fef3c7',
      light: '#fcd34d',
      main: '#92400e',
      dark: '#78350f',
      darker: '#451a03',
    },
  },
  realEstate: {
    name: 'Real Estate (Navy + Amber)',
    primary: {
      lighter: '#dbeafe',
      light: '#60a5fa',
      main: '#1e40af',
      dark: '#1e3a8a',
      darker: '#172554',
    },
    secondary: {
      lighter: '#fef3c7',
      light: '#fcd34d',
      main: '#f59e0b',
      dark: '#d97706',
      darker: '#b45309',
    },
  },
  custom: {
    name: 'Custom (Keep current colors)',
    primary: null,
    secondary: null,
  },
};

// Available templates
const templates = {
  accounting: {
    name: 'Accounting/CPA Firm',
    path: 'app/templates/accounting',
  },
  legal: {
    name: 'Law Office',
    path: 'app/templates/law-office',
  },
  blank: {
    name: 'Blank (no template)',
    path: null,
  },
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
};

const selectOption = async (prompt, options) => {
  console.log(prompt);
  Object.entries(options).forEach(([key, value], index) => {
    const name = typeof value === 'object' ? value.name : value;
    console.log(`  ${colors.cyan}${index + 1}${colors.reset}) ${name}`);
  });

  const keys = Object.keys(options);
  const answer = await question(`\nEnter choice (1-${keys.length}): `);
  const index = parseInt(answer, 10) - 1;

  if (index >= 0 && index < keys.length) {
    return keys[index];
  }

  log.warn('Invalid selection, using first option');
  return keys[0];
};

// Main setup function
async function setupNewClient() {
  log.header('🚀 New Client Setup Wizard');

  // Get client name
  const clientName = await question('Client name (for folder, e.g., "acme-accounting"): ');
  const clientSlug = clientName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (!clientSlug) {
    log.error('Invalid client name');
    rl.close();
    return;
  }

  // Get business name
  const businessName = await question('Business display name (e.g., "Acme Accounting Services"): ');

  // Get business description
  const businessDescription = await question(
    'Short business description (for SEO): '
  );

  // Select industry
  log.header('Select Industry');
  const industry = await selectOption('Choose the industry for color presets:', industryColors);

  // Select template
  log.header('Select Template');
  const template = await selectOption('Choose a starting template:', templates);

  // Get domain (optional)
  const domain = await question('Domain name (optional, e.g., "acmeaccounting.com"): ');

  // Get contact email (optional)
  const email = await question('Contact email (optional): ');

  // Get phone (optional)
  const phone = await question('Phone number (optional): ');

  // Confirm
  log.header('Configuration Summary');
  console.log(`  Client Slug:    ${colors.cyan}${clientSlug}${colors.reset}`);
  console.log(`  Business Name:  ${colors.cyan}${businessName}${colors.reset}`);
  console.log(`  Industry:       ${colors.cyan}${industryColors[industry].name}${colors.reset}`);
  console.log(`  Template:       ${colors.cyan}${templates[template].name}${colors.reset}`);
  if (domain) console.log(`  Domain:         ${colors.cyan}${domain}${colors.reset}`);
  if (email) console.log(`  Email:          ${colors.cyan}${email}${colors.reset}`);
  if (phone) console.log(`  Phone:          ${colors.cyan}${phone}${colors.reset}`);

  const confirm = await question('\nProceed with setup? (y/n): ');

  if (confirm.toLowerCase() !== 'y') {
    log.warn('Setup cancelled');
    rl.close();
    return;
  }

  // Execute setup
  log.header('Setting up project...');

  const projectRoot = path.resolve(__dirname, '..');

  // 1. Create client folder from template
  const clientPath = path.join(projectRoot, 'app', 'client', clientSlug);

  if (fs.existsSync(clientPath)) {
    log.warn(`Folder ${clientSlug} already exists, skipping folder creation`);
  } else {
    if (templates[template].path) {
      const templatePath = path.join(projectRoot, templates[template].path);
      copyDir(templatePath, clientPath);
      log.success(`Created client folder from ${templates[template].name} template`);
    } else {
      fs.mkdirSync(clientPath, { recursive: true });
      // Create minimal page.tsx for blank template
      const blankPage = `import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function ${toPascalCase(clientSlug)}Page() {
  return (
    <>
      <Header className="mb-4" />

      <main className="container-wide p-6 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">${businessName}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          ${businessDescription || 'Welcome to our website.'}
        </p>
      </main>

      <Footer className="mt-8" />
    </>
  );
}
`;
      fs.writeFileSync(path.join(clientPath, 'page.tsx'), blankPage);
      log.success('Created blank client folder');
    }
  }

  // 2. Create image directory
  const imageDir = path.join(projectRoot, 'public', 'static', 'images', clientSlug);
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
    // Create subdirectories
    fs.mkdirSync(path.join(imageDir, 'team'), { recursive: true });
    fs.mkdirSync(path.join(imageDir, 'testimonials'), { recursive: true });
    log.success(`Created image directories at /public/static/images/${clientSlug}/`);
  }

  // 3. Update colors.js if not custom
  if (industry !== 'custom' && industryColors[industry].primary) {
    const colorsPath = path.join(projectRoot, 'data', 'config', 'colors.js');
    const colorsContent = `/**
 * Brand Colors Configuration
 *
 * Client: ${businessName}
 * Industry: ${industryColors[industry].name}
 *
 * Configure colors at: https://shipixen.com/color-theme-explorer-shadcn
 */
const colors = {
  primary: {
    lighter: '${industryColors[industry].primary.lighter}',
    light: '${industryColors[industry].primary.light}',
    main: '${industryColors[industry].primary.main}',
    dark: '${industryColors[industry].primary.dark}',
    darker: '${industryColors[industry].primary.darker}',
  },
  secondary: {
    lighter: '${industryColors[industry].secondary.lighter}',
    light: '${industryColors[industry].secondary.light}',
    main: '${industryColors[industry].secondary.main}',
    dark: '${industryColors[industry].secondary.dark}',
    darker: '${industryColors[industry].secondary.darker}',
  },
};

module.exports = { colors };
`;
    fs.writeFileSync(colorsPath, colorsContent);
    log.success('Updated colors.js with industry colors');
  }

  // 4. Update metadata.js
  const metadataPath = path.join(projectRoot, 'data', 'config', 'metadata.js');
  const metadataContent = `/**
 * Site Metadata Configuration
 *
 * Client: ${businessName}
 * Generated: ${new Date().toISOString().split('T')[0]}
 */
const metadata = {
  // Business Information
  title: '${businessName}',
  description: '${businessDescription || `Welcome to ${businessName}. Contact us today.`}',
  businessName: '${businessName}',
  author: '${businessName}',

  // Domain & URLs
  domain: '${domain || 'yourdomain.com'}',
  siteUrl: 'https://${domain || 'yourdomain.com'}',
  siteRepo: '',
  socialBanner: '/api/og',

  // Contact
  supportEmail: '${email || `support@${domain || 'yourdomain.com'}`}',
  email: '${email || `info@${domain || 'yourdomain.com'}`}',

  // Social Media (update as needed)
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
  theme: 'light',
  locale: 'en-US',
};

module.exports = { metadata };
`;
  fs.writeFileSync(metadataPath, metadataContent);
  log.success('Updated metadata.js with client information');

  // 5. Update data.ts if template was used
  if (templates[template].path) {
    const dataPath = path.join(clientPath, 'data.ts');
    if (fs.existsSync(dataPath)) {
      let dataContent = fs.readFileSync(dataPath, 'utf8');

      // Replace placeholder business name
      dataContent = dataContent.replace(/Premier Accounting Services/g, businessName);
      dataContent = dataContent.replace(/Harrison & Associates Law Firm/g, businessName);

      // Replace placeholder contact info
      if (phone) {
        dataContent = dataContent.replace(/\(555\) \d{3}-\d{4}/g, phone);
      }
      if (email) {
        dataContent = dataContent.replace(/info@\w+\.com/g, email);
      }

      // Update image paths
      dataContent = dataContent.replace(/\/static\/images\/accounting\//g, `/static/images/${clientSlug}/`);
      dataContent = dataContent.replace(/\/static\/images\/law\//g, `/static/images/${clientSlug}/`);

      fs.writeFileSync(dataPath, dataContent);
      log.success('Updated data.ts with client information');
    }
  }

  // Done!
  log.header('✅ Setup Complete!');
  console.log(`\nNext steps:\n`);
  console.log(`  1. Add client images to: ${colors.cyan}/public/static/images/${clientSlug}/${colors.reset}`);
  console.log(`  2. Edit content in:      ${colors.cyan}/app/client/${clientSlug}/data.ts${colors.reset}`);
  console.log(`  3. Preview at:           ${colors.cyan}http://localhost:3000/client/${clientSlug}${colors.reset}`);
  console.log(`  4. Fine-tune colors in:  ${colors.cyan}/data/config/colors.js${colors.reset}`);
  console.log(`\nRun ${colors.cyan}npm run dev${colors.reset} to start the development server.\n`);

  rl.close();
}

// Helper: Copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper: Convert to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Run the setup
setupNewClient().catch((err) => {
  log.error(`Setup failed: ${err.message}`);
  rl.close();
  process.exit(1);
});
