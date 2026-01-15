export const siteData = {
  companyName: 'Fry & Associates, CPAs, Inc.',
  shortName: 'Fry & Associates',
  tagline: 'Accounting, Tax & Financial Planning',
  foundedYear: 1996,

  contact: {
    phone: '937-428-0787',
    fax: '866-428-0277',
    email: 'jessiefrycpas@gmail.com',
    address: {
      street: '323 Regency Ridge Dr',
      city: 'Dayton',
      state: 'OH',
      zip: '45459',
      full: '323 Regency Ridge Dr, Dayton, OH 45459',
    },
  },

  bookingUrl: 'https://www.nickfrycpa.com/booking-calendar/financial-planning-discovery-call?referral=book_button_widget',

  stats: [
    { value: '96%', label: 'Client Satisfaction Rate' },
    { value: '28+', label: 'Years of Experience' },
    { value: '500+', label: 'Successful Tax Filings Annually' },
    { value: '5', label: 'Dedicated Professionals' },
  ],

  features: [
    'Expert Team of Professionals',
    'Client-Centric Approach',
    'Trusted Since 1996',
    'Tailored Financial Solutions',
  ],

  socialLinks: {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  },
};

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'Business Services', href: '/services/business' },
        { name: 'Tax Services', href: '/services/tax' },
        { name: 'Financial Planning', href: '/services/financial-planning' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Business Services', href: '/services/business' },
      { name: 'Tax Services', href: '/services/tax' },
      { name: 'Financial Planning', href: '/services/financial-planning' },
    ],
  },
};
