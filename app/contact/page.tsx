'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { siteData } from '@/data/config/siteData';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Label } from '@/components/shared/ui/label';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero Section
function ContactHero() {
  return (
    <section className="relative w-full bg-[#F5F3EF] overflow-hidden">
      <div className="container-wide mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 bg-primary-50 px-4 py-2 rounded-full mb-6"
          >
            Contact Us
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Let&apos;s Start a{' '}
            <span className="text-primary-600">Conversation</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600">
            Have questions about our services? Ready to schedule a consultation?
            We&apos;re here to help you achieve your financial goals.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section className="w-full bg-white py-20">
        <div className="container-wide mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;ve received your message and will get back to you within 1
              business day. If you need immediate assistance, please call us at{' '}
              <Link
                href={`tel:${siteData.contact.phone}`}
                className="text-primary-600 font-medium hover:underline"
              >
                {siteData.contact.phone}
              </Link>
              .
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              size="lg"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="container-wide mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="text-primary-600 font-medium"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6"
            >
              We&apos;re Here to Help
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
              Whether you have questions about our services, need help with tax
              planning, or want to schedule a consultation, our team is ready to
              assist you.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <Link
                    href={`tel:${siteData.contact.phone}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {siteData.contact.phone}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">
                    Fax: {siteData.contact.fax}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <Link
                    href={`mailto:${siteData.contact.email}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {siteData.contact.email}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    {siteData.contact.address.street}
                    <br />
                    {siteData.contact.address.city},{' '}
                    {siteData.contact.address.state}{' '}
                    {siteData.contact.address.zip}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Extended hours available during tax season
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#F5F3EF] rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-1.5 bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="mt-1.5 bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="mt-1.5 bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service of Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="tax-preparation">Tax Preparation</option>
                    <option value="business-services">Business Services</option>
                    <option value="financial-planning">
                      Financial Planning
                    </option>
                    <option value="bookkeeping">Bookkeeping & Payroll</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-1.5 w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary-600 hover:bg-primary-700"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by our
                  team. We respect your privacy and will never share your
                  information.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Map Section
function MapSection() {
  return (
    <section className="w-full bg-[#F5F3EF] py-20">
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary-600 font-medium"
          >
            Visit Our Office
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Conveniently Located in Dayton, Ohio
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.2847372483837!2d-84.1567!3d39.6867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s323%20Regency%20Ridge%20Dr%2C%20Dayton%2C%20OH%2045459!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fry & Associates Office Location"
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                siteData.contact.address.full
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Get Directions
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'For tax preparation, bring all W-2s, 1099s, receipts for deductions, last year\'s tax return, and any relevant financial documents. For business services, bring your financial statements and recent bank statements.',
    },
    {
      question: 'Do you offer virtual consultations?',
      answer:
        'Yes! We offer both in-person and virtual consultations via video call. This allows us to serve clients throughout Ohio and beyond.',
    },
    {
      question: 'How long does tax preparation take?',
      answer:
        'Simple returns can often be completed in one meeting. More complex returns with business income, investments, or rental properties may require additional time. We\'ll give you a timeline during your initial consultation.',
    },
    {
      question: 'What are your fees?',
      answer:
        'Our fees vary based on the complexity of your situation and the services you need. We provide transparent pricing and will discuss costs during your initial consultation before any work begins.',
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-primary-600 font-medium">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F5F3EF] rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Contact Page
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <MapSection />
      <FAQSection />
    </>
  );
}
