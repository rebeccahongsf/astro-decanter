import React, { useRef, ReactNode } from 'react';
import { cnb } from 'cnbuilder';

interface SkiplinkProps {
  anchorLink?: string;
  children?: ReactNode;
  className?: string;
  [key: string]: any; // Allow additional props
}

export const Skiplink: React.FC<SkiplinkProps> = ({
  anchorLink = '#main-content',
  children = 'Skip to main content',
  className,
  ...props
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      href={anchorLink}
      className={cnb('skiplink', className)}
      ref={ref}
      onFocus={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
      {...props}
    >
      {children}
    </a>
  );
};
