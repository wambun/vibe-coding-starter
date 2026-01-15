'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { services, serviceCards } from '@/data/config/services';
import { siteData } from '@/data/config/siteData';
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
function ServicesHero() {
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
            Our Services
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Comprehensive{' '}
            <span className="text-primary-600">Financial Solutions</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600">
            From tax preparation to financial planning, we offer a full suite of
            services to help individuals and businesses thrive.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Services Overview Section
function ServicesOverview() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container-wide mx-auto px-6">
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
                  <div className="group bg-[#F5F3EF] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                      <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Service Categories Section
function ServiceCategories() {
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
            Service Categories
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Explore Our Full Range of Services
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {services.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <Link href={`/services/${category.slug}`}>
                      <h3 className="text-2xl font-semibold text-gray-900 hover:text-primary-600 transition-colors mb-2">
                        {category.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-6">{category.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-[#F5F3EF] rounded-lg p-4"
                        >
                          <h4 className="font-medium text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button asChild variant="outline">
                        <Link href={`/services/${category.slug}`}>
                          View {category.shortTitle} Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="w-full bg-primary-600 py-20">
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Schedule a free consultation and we&apos;ll help you identify the right
            solutions for your unique situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href={`tel:${siteData.contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {siteData.contact.phone}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Services Page
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceCategories />
      <CTASection />
    </>
  );
}
