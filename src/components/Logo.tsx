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
  const isLightNeeded = variant === 'light' || variant === 'full-light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/flyspurs_logo.png"
        alt="Flyspurs Corporate Travel Management"
        className={`h-full w-auto object-contain max-h-16 ${
          isLightNeeded ? 'brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''
        }`}
      />
    </div>
  );
};

