'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Award, Users, Clock, Target } from 'lucide-react';
import { siteData } from '@/data/config/siteData';
import { team } from '@/data/config/team';
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
function AboutHero() {
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
            About Us
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Your Trusted Financial Partners{' '}
            <span className="text-primary-600">Since 1996</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600">
            {siteData.companyName} was started in 1996 with the goal of
            offering personalized and professional tax preparation and
            accounting services to individuals and business owners in the
            Dayton, Ohio area.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Story Section
function StorySection() {
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
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
              <Image
                src="/images/about-office.jpg"
                alt="Fry & Associates Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 rounded-xl p-6 text-white">
              <div className="text-4xl font-bold">1996</div>
              <div className="text-sm text-primary-100">Founded</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-primary-600 font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built on Trust, Expertise, and Client Success
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nick Fry founded Fry & Associates, CPAs, Inc. in 1996 with a
              simple vision: to provide personalized, professional accounting
              services that make a real difference in people&apos;s financial lives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a small tax preparation practice has grown into a
              comprehensive financial services firm. Over the years, we&apos;ve
              expanded to include payroll services, business setup, bookkeeping,
              and financial planning—always maintaining our commitment to
              personal attention and expert guidance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, our team serves hundreds of clients throughout the Dayton
              area and beyond, helping individuals and businesses achieve their
              financial goals through thoughtful planning and dedicated service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Values Section
function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description:
        'Your success is our success. We take the time to understand your unique situation and goals.',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description:
        'Our team brings decades of experience and continuous education to serve you better.',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description:
        'No call centers or automated systems. You work directly with our dedicated professionals.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description:
        'We meet deadlines, respond promptly, and deliver consistent quality you can count on.',
    },
  ];

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
            Our Values
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            We believe in building lasting relationships through trust,
            expertise, and genuine care for our clients.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
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
            className="text-primary-600 font-medium"
          >
            Our Team
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Meet the Experts Behind Your Success
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Our dedicated team of professionals brings decades of combined
            experience to help you achieve your financial goals.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#F5F3EF] rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-sm mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                {member.credentials && member.credentials.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.credentials.map((credential, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  return (
    <section className="w-full bg-primary-600 py-16">
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {siteData.stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
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

// CTA Section
function CTASection() {
  return (
    <section className="w-full bg-[#F5F3EF] py-20">
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule a free consultation to discuss your accounting, tax, or
            financial planning needs. We&apos;re here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700"
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`tel:${siteData.contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {siteData.contact.phone}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main About Page
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
