import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full-light';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showTagline = true,
}) => {
  const isLightTextNeeded = variant === 'light' || variant === 'full-light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/flyspurs_logo.jpg"
        alt="Flyspurs Corporate Travel Management"
        className={`h-full w-auto object-contain max-h-16 ${
          isLightTextNeeded ? 'brightness-0 invert brightness-200' : ''
        }`}
      />
    </div>
  );
};

