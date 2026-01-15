'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteData, navigation } from '@/data/config/siteData';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary-main rounded-lg">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Fry & Associates</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Professional tax preparation, accounting services, and financial planning since 1996.
            </p>
            {/* Newsletter Signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent text-sm"
              />
              <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                Submit
              </button>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Main Pages
            </h3>
            <ul className="space-y-3">
              {navigation.footer.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {navigation.footer.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-main/20 rounded-full">
                    <Mail className="w-4 h-4 text-primary-main" />
                  </div>
                  <span className="text-sm">{siteData.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-main/20 rounded-full">
                    <Phone className="w-4 h-4 text-primary-main" />
                  </div>
                  <span className="text-sm">{siteData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-main/20 rounded-full">
                    <MapPin className="w-4 h-4 text-primary-main" />
                  </div>
                  <span className="text-sm">{siteData.contact.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {siteData.companyName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
