import { LandingHeader } from '@/components/landing';
import ThemeSwitch from '@/components/shared/ThemeSwitch';

export const Header = ({ className }: { className?: string }) => {
  return (
    <LandingHeader
      className={className}
      fixed
      withBackground
      variant="primary"
      logoComponent={
        <div className="flex items-center text-primary-500 dark:text-primary-500 gap-3">
          <span className="font-bold text-lg">Your App</span>
        </div>
      }
    >
      <ThemeSwitch />
    </LandingHeader>
  );
};

export default Header;
