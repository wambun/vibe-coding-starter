import {
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Building2,
  GraduationCap,
  Receipt,
  Briefcase,
  PiggyBank,
  Shield,
  LineChart,
  Wallet
} from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof Calculator;
  heroImage: string;
  items: ServiceItem[];
}

export const services: Service[] = [
  {
    slug: 'business',
    title: 'Business Services',
    shortTitle: 'Business',
    description: 'Comprehensive business accounting and advisory services to help your company thrive.',
    icon: Briefcase,
    heroImage: '/images/services/business-hero.jpg',
    items: [
      {
        title: 'Bookkeeping & Payroll',
        description: 'Keep your financial records accurate and your employees paid on time.',
        features: [
          'Monthly or Weekly bookkeeping',
          'Options for full service bookkeeping or just reconciling',
          'Payroll setup and processing through Gusto, Quickbooks, or ADP',
        ],
      },
      {
        title: 'Tax Preparation',
        description: 'Expert business tax return preparation for all entity types.',
        features: [
          'Business Tax Return Preparation',
          'Owners and family Tax Return Preparation',
          'Multiple Shareholder or Partners Tax Return Preparation',
        ],
      },
      {
        title: 'Financial Statement and Cash Flow Analysis, Budgeting, Tax Planning',
        description: 'Strategic financial guidance to optimize your business performance.',
        features: [
          'Personalized goal setting for spending or savings',
          'Reviewing Financial Statements regularly and translating them to you to see if goals are being met or if changes need to be made',
        ],
      },
      {
        title: 'Virtual CFO',
        description: 'All the benefits of an in-house accountant at a fraction of the cost.',
        features: [
          'A combination of all of the other service items',
          'Think of this like having an in house accountant but we are a fraction of the cost with all of the benefits of having an in house accountant',
        ],
      },
      {
        title: 'Corporation/LLC Setup',
        description: 'Expert guidance on business entity formation and structure.',
        features: [
          'Meeting to discuss the best type of business to have and the implications of owning this business',
          'Selection of Name for the business',
          'Filing of LLC or Corporation status',
        ],
      },
      {
        title: 'S-Corp Bootcamp',
        description: 'Learn everything about owning and forming an S-Corporation.',
        features: [
          '60-90 Minute Consultation to learn about everything involved in owning and forming an S-Corporation',
          'Calculation to see if S-Corporation will be beneficial to you based on your financial situation',
        ],
      },
    ],
  },
  {
    slug: 'tax',
    title: 'Tax Preparation Services',
    shortTitle: 'Tax',
    description: 'Professional tax preparation services for individuals, businesses, and trusts.',
    icon: Calculator,
    heroImage: '/images/services/tax-hero.jpg',
    items: [
      {
        title: 'Individual Tax',
        description: 'Comprehensive personal tax return preparation.',
        features: [
          'Federal, State, School District, and City filings',
          'Option for fully Online services with video and phone calls or our in person option with paper tax returns and in person meetings',
          'Prices vary based on complexity of return',
          'Ask us about Silver/Gold Preparation if you are looking for more than just tax prep',
        ],
      },
      {
        title: 'Business Tax',
        description: 'Expert preparation for all business entity types.',
        features: [
          'S-Corporation Returns',
          'Partnership Returns',
          'C-Corporation Returns',
          'Schedule C/E Returns',
          'This includes the Federal, State, and City return filings if applicable',
          'K-1 preparation if applicable',
        ],
      },
      {
        title: 'Trust/Estate Tax',
        description: 'Specialized tax preparation for trusts and estates.',
        features: [
          'Trust/Estate tax preparation',
          'K-1 Prep if applicable',
        ],
      },
      {
        title: 'Tax Planning',
        description: 'Strategic tax planning to minimize your tax liability.',
        features: [
          'Note, all tax packages come with a tax planning package',
          'Tax Planning for retirement, selling property, moving, having kids, increasing income, etc.',
        ],
      },
    ],
  },
  {
    slug: 'financial-planning',
    title: 'Financial Planning',
    shortTitle: 'Financial Planning',
    description: 'Comprehensive financial planning to help you achieve your life goals.',
    icon: TrendingUp,
    heroImage: '/images/services/financial-planning-hero.jpg',
    items: [
      {
        title: 'Comprehensive Financial Planning',
        description: 'We believe that a financial plan is the cornerstone of financial success because it empowers you to make informed decisions about your money.',
        features: [
          'Retirement (early, semi-, full)',
          'Divorce',
          'Inheritance',
          'Asset Allocation Strategy',
          'Debt Strategy',
          'Tax Planning',
          'Roth Conversion Analysis',
          'Insurance Planning',
          'Banking and Credit Management',
          'Charitable Planning',
        ],
      },
    ],
  },
];

// Service cards for homepage
export const serviceCards = [
  {
    title: 'Bookkeeping & Payroll',
    description: 'We keep your financial records accurate and provide detailed reports to support informed decisions.',
    icon: FileText,
    href: '/services/business',
  },
  {
    title: 'Tax Preparation',
    description: 'Tailored tax strategies to maximize savings and ensure complete compliance during tax season.',
    icon: Calculator,
    href: '/services/tax',
  },
  {
    title: 'Financial Planning',
    description: 'Comprehensive financial plans tailored to your unique goals and circumstances.',
    icon: TrendingUp,
    href: '/services/financial-planning',
  },
  {
    title: 'Virtual CFO',
    description: 'All the benefits of an in-house accountant at a fraction of the cost.',
    icon: Users,
    href: '/services/business',
  },
  {
    title: 'Business Formation',
    description: 'Expert guidance on business entity formation, LLC setup, and S-Corp elections.',
    icon: Building2,
    href: '/services/business',
  },
  {
    title: 'S-Corp Bootcamp',
    description: 'Learn everything about owning and forming an S-Corporation in a 60-90 minute consultation.',
    icon: GraduationCap,
    href: '/services/business',
  },
];
