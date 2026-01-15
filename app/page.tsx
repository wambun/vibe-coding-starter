'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, CheckCircle2, Calendar } from 'lucide-react';
import { siteData } from '@/data/config/siteData';
import { serviceCards } from '@/data/config/services';
import { team } from '@/data/config/team';
import { testimonials } from '@/data/config/team';
import { Button } from '@/components/shared/ui/button';

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
function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F5F3EF] via-[#F5F3EF] to-primary-50/30 overflow-hidden">
      <div className="container-wide mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-100 px-4 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                Trusted Since 1996
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-display"
            >
              Expert Accounting,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Tax & Financial
              </span>{' '}
              Planning
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-lg"
            >
              {siteData.companyName} provides comprehensive accounting, tax
              preparation, and financial planning services tailored to your
              unique needs.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-2">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full px-8 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
              >
                <a href={siteData.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link href={`tel:${siteData.contact.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteData.contact.phone}
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              {siteData.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary-500" />
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with floating stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-accountant.jpg"
                alt="Fry & Associates Professional Accounting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                28+
              </div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-600">
                500+
              </div>
              <div className="text-sm text-gray-600 font-medium">Annual Filings</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 py-16">
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {siteData.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// About Preview Section
function AboutPreviewSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container-wide mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-team.jpg"
                alt="Fry & Associates Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">96%</div>
                <div className="text-xs">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-primary-600 font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
              Your Trusted Financial Partners Since 1996
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {siteData.companyName} was started in 1996 with the goal of
              offering personalized and professional tax preparation and
              accounting services to individuals and business owners in the
              Dayton, Ohio area.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, we have expanded to include payroll services,
              business setup, bookkeeping, and financial planning. Our team is
              dedicated to helping you achieve your financial goals through
              expert guidance and personalized service.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button asChild className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F5F3EF] to-white py-20">
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
            className="text-primary-600 font-semibold"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            From tax preparation to financial planning, we offer a full suite of
            services to help individuals and businesses thrive.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={service.href}>
                  <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                      <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'We start with a free consultation to understand your needs and goals.',
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description:
        'Our team develops a personalized plan tailored to your situation.',
    },
    {
      number: '03',
      title: 'Implementation',
      description:
        'We execute the strategy with precision and keep you informed every step.',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description:
        'Continuous monitoring and adjustments to ensure your success.',
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
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary-600 font-semibold"
          >
            How We Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display"
          >
            Our Simple Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Getting started with us is easy. We guide you through every step of
            the way.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative text-center"
            >
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-200 to-primary-300 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F5F3EF] to-white py-20">
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
            className="text-primary-600 font-semibold"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display"
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Team Preview Section - show only first 3 for homepage
function TeamPreviewSection() {
  const displayedTeam = team.slice(0, 3);

  return (
    <section className="w-full bg-white py-20">
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
            className="text-primary-600 font-semibold"
          >
            Our Team
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display"
          >
            Meet the Experts
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Our dedicated team of professionals is here to help you achieve your
            financial goals.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayedTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-display">
                {member.name}
              </h3>
              <p className="text-primary-600 text-sm">{member.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/about">
              Meet Our Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Schedule a free consultation with our team to discuss your
              accounting, tax, or financial planning needs. Let us help you
              achieve your financial goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8 shadow-lg"
              >
                <a href={siteData.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <Link href={`tel:${siteData.contact.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {siteData.contact.phone}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/cta-man.png"
                alt="Start your financial journey"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamPreviewSection />
      <CTASection />
    </>
  );
}
