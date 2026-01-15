'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import { services } from '@/data/config/services';
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
function ServiceHero({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon;

  return (
    <section className="relative w-full bg-[#F5F3EF] overflow-hidden">
      <div className="container-wide mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 mb-4"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center"
            >
              <Icon className="h-8 w-8 text-primary-600" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              {service.title}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              {service.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary-600 hover:bg-primary-700"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`tel:${siteData.contact.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteData.contact.phone}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-800/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Service Items Section
function ServiceItemsSection({ service }: { service: (typeof services)[0] }) {
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
            What We Offer
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Our {service.shortTitle} Services
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {service.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#F5F3EF] rounded-2xl p-8"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Personalized Attention',
      description:
        'We take the time to understand your unique situation and provide tailored solutions.',
    },
    {
      title: 'Expert Knowledge',
      description:
        'Our team stays current with the latest regulations and best practices.',
    },
    {
      title: 'Transparent Pricing',
      description:
        'No hidden fees or surprises. We discuss pricing upfront so you know what to expect.',
    },
    {
      title: 'Ongoing Support',
      description:
        'We are available year-round to answer questions and provide guidance.',
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="text-primary-600 font-medium"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8"
            >
              The Fry & Associates Difference
            </motion.h2>

            <motion.div variants={staggerContainer} className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <Image
                src="/images/consultation.jpg"
                alt="Consultation"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection({ service }: { service: (typeof services)[0] }) {
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
            Ready to Get Started with {service.shortTitle}?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Schedule a free consultation to discuss how we can help you with
            your {service.shortTitle.toLowerCase()} needs.
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

// Other Services Section
function OtherServicesSection({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const otherServices = services.filter((s) => s.slug !== currentSlug);

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
            Explore More
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Other Services We Offer
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group bg-[#F5F3EF] rounded-xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                        <Icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
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

// Main Service Page
export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceItemsSection service={service} />
      <WhyChooseUsSection />
      <OtherServicesSection currentSlug={slug} />
      <CTASection service={service} />
    </>
  );
}
