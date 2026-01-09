/**
 * Law Office Template
 *
 * A complete landing page template for law firms and legal practices.
 * Uses landing components with data-driven content.
 *
 * To use this template:
 * 1. Copy this folder to /app/[client-name]
 * 2. Update data.ts with client content
 * 3. Update /data/config/colors.js with brand colors (navy/gold recommended)
 * 4. Add images to /public/static/images/[client-name]/
 */

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

// Landing Components
import {
  LandingPrimaryImageCtaSection,
  LandingSocialProof,
  LandingFeatureList,
  LandingStatsSection,
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
  practiceAreasData,
  statsData,
  whyChooseUsData,
  teamData,
  testimonialsData,
  faqData,
  ctaData,
} from './data';

export default function LawOfficeTemplate() {
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
        imagePerspective="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        minHeight={420}
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
      {/* STATISTICS/CASE RESULTS */}
      {/* ================================================================== */}
      <LandingStatsSection
        stats={statsData.items}
        columnsDesktop={4}
        hasBorders
        textPosition="center"
        withBackground
        variant="primary"
      />

      {/* ================================================================== */}
      {/* PRACTICE AREAS */}
      {/* ================================================================== */}
      <section id="practice-areas">
        <LandingFeatureList
          title={practiceAreasData.title}
          description={practiceAreasData.description}
          featureItems={practiceAreasData.items.map((item) => ({
            title: item.title,
            description: item.description,
            icon: <item.icon className="w-8 h-8" />,
          }))}
          withBackground={false}
          withBackgroundGlow
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </section>

      {/* ================================================================== */}
      {/* WHY CHOOSE US */}
      {/* ================================================================== */}
      <LandingProductFeature
        title={whyChooseUsData.title}
        descriptionComponent={
          <div className="space-y-4">
            <p className="mb-6 text-lg">{whyChooseUsData.description}</p>
            <ul className="space-y-3">
              {whyChooseUsData.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        }
        imageSrc={whyChooseUsData.imageSrc}
        imageAlt={whyChooseUsData.imageAlt}
        imagePosition="right"
        imagePerspective="left"
        imageShadow="hard"
        textPosition="left"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
        minHeight={400}
      />

      {/* ================================================================== */}
      {/* ATTORNEYS/TEAM */}
      {/* ================================================================== */}
      <LandingTeamSection
        title={teamData.title}
        description={teamData.description}
        members={teamData.members}
        textPosition="center"
        withBackground={false}
        variant="primary"
      />

      {/* ================================================================== */}
      {/* TESTIMONIALS */}
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
          withBackground
          variant="primary"
          withBackgroundGlow
          backgroundGlowVariant="primary"
        />
      </LandingTestimonialReadMoreWrapper>

      {/* ================================================================== */}
      {/* FAQ */}
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
          <p className="mt-4 text-sm opacity-80">Free consultation • No obligation • Available 24/7</p>
        </LandingSaleCtaSection>
      </section>

      <Footer className="mt-8" />
    </>
  );
}
