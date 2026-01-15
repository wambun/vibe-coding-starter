import { LandingFooter } from '@/components/landing';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <LandingFooter
      className={className}
      title="Your App"
      description="Your app description"
      withBackground
      withBackgroundGlow={false}
      variant="primary"
      backgroundGlowVariant="primary"
      withBackgroundGradient
      logoComponent={
        <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
          Your App
        </div>
      }
    />
  );
};

export default Footer;
