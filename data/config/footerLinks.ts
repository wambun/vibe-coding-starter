/**
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
