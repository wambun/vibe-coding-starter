/**
 * Accounting Firm Template
 *
 * A complete landing page template for accounting/CPA firms.
 * Uses landing components with data-driven content.
 *
 * To use this template:
 * 1. Copy this folder to /app/[client-name]
 * 2. Update data.ts with client content
 * 3. Update /data/config/colors.js with brand colors
 * 4. Add images to /public/static/images/[client-name]/
 */

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';

// Landing Components
import {
  LandingPrimaryImageCtaSection,
  LandingSocialProof,
  LandingFeatureList,
  LandingStatsSection,
  LandingProductSteps,
  LandingProductFeature,
  LandingTeamSection,
  LandingTestimonialReadMoreWrapper,
  LandingTestimonialGrid,
  LandingFaqCollapsibleSection,
  LandingSaleCtaSection,
} from '@/components/landing';

// Template Data
import {
  heroData,
  servicesData,
  statsData,
  processData,
  teamData,
  testimonialsData,
  faqData,
  ctaData,
} from './data';

export default function AccountingTemplate() {
  return (
    <>
      <Header className="mb-4" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <LandingPrimaryImageCtaSection
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.image.src}
        imageAlt={heroData.image.alt}
        imagePosition="right"
        imagePerspective="bottom"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        minHeight={400}
      >
        <Button size="xl" asChild>
          <Link href={heroData.primaryCta.href}>{heroData.primaryCta.label}</Link>
        </Button>
        <Button size="xl" variant="outlinePrimary" asChild>
          <Link href={heroData.secondaryCta.href}>{heroData.secondaryCta.label}</Link>
        </Button>
        <LandingSocialProof
          className="mt-6 w-full"
          avatarItems={heroData.socialProof.avatars}
          numberOfUsers={heroData.socialProof.count}
          suffixText={heroData.socialProof.text}
        />
      </LandingPrimaryImageCtaSection>

      {/* ================================================================== */}
      {/* SERVICES/FEATURES SECTION */}
      {/* ================================================================== */}
      <section id="services">
        <LandingFeatureList
          title={servicesData.title}
        description={servicesData.description}
        featureItems={servicesData.items.map((item) => ({
          title: item.title,
          description: item.description,
          icon: <item.icon className="w-8 h-8" />,
        }))}
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        />
      </section>

      {/* ================================================================== */}
      {/* STATISTICS SECTION */}
      {/* ================================================================== */}
      <LandingStatsSection
        stats={statsData.items}
        columnsDesktop={4}
        hasBorders
        textPosition="center"
        withBackground={false}
      />

      {/* ================================================================== */}
      {/* PROCESS/HOW IT WORKS SECTION */}
      {/* ================================================================== */}
      <LandingProductSteps
        title={processData.title}
        description={processData.description}
        display="grid"
        withBackground={false}
        variant="primary"
      >
        {processData.steps.map((step, index) => (
          <LandingProductFeature
            key={index}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
            imageAlt={step.imageAlt}
            imagePosition="center"
            imageShadow="soft"
            zoomOnHover
            minHeight={300}
            withBackground={false}
            withBackgroundGlow={false}
            variant="primary"
          />
        ))}
      </LandingProductSteps>

      {/* ================================================================== */}
      {/* TEAM SECTION */}
      {/* ================================================================== */}
      <LandingTeamSection
        title={teamData.title}
        description={teamData.description}
        members={teamData.members}
        textPosition="center"
        withBackground
        variant="secondary"
      />

      {/* ================================================================== */}
      {/* TESTIMONIALS SECTION */}
      {/* ================================================================== */}
      <LandingTestimonialReadMoreWrapper>
        <LandingTestimonialGrid
          title={testimonialsData.title}
          description={testimonialsData.description}
          testimonialItems={testimonialsData.items.map((item) => ({
            name: item.name,
            text: item.text,
            handle: item.handle,
            imageSrc: item.imageSrc,
            verified: item.verified,
          }))}
          withBackground={false}
          variant="primary"
        />
      </LandingTestimonialReadMoreWrapper>

      {/* ================================================================== */}
      {/* FAQ SECTION */}
      {/* ================================================================== */}
      <section id="faq">
        <LandingFaqCollapsibleSection
          title={faqData.title}
          description={faqData.description}
          faqItems={faqData.items}
          withBackground={false}
          variant="primary"
        />
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION */}
      {/* ================================================================== */}
      <section id="contact">
        <LandingSaleCtaSection
          title={ctaData.title}
          description={ctaData.description}
          withBackground
          withBackgroundGlow
          variant="primary"
          backgroundGlowVariant="primary"
        >
          <Button size="xl" asChild>
            <Link href={ctaData.buttonHref}>{ctaData.buttonLabel}</Link>
          </Button>
        </LandingSaleCtaSection>
      </section>

      <Footer className="mt-8" />
    </>
  );
}
