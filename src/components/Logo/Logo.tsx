import React from 'react';
import { cnb } from 'cnbuilder';
import * as styles from './Logo.styles'
import * as types from './Logo.types'

/**
 * Stanford Wordmark Logo Component.
 *
 */
type LogoProps = {
  color?: string;
  className?: string;
  isLink?: boolean;
  type?: types.LogoType;
}

export const Logo = ({
  color = 'cardinal-red',
  className,
  isLink,
  type = 'full',
  ...props
}: LogoProps) => {
  const validColor = styles.logoColors[color as types.LogoColorType]
  let logoText;

  if (type) {
    switch (type) {
      case 'full':
        logoText = 'Stanford University';
        break;

      case 'stacked':
        logoText = (
          <>
            Stanford
            <br />
            University
          </>
        );
        break;

      case 'short':
      default:
        logoText = 'Stanford';
        break;
    }
  }

  if (isLink) {
    return (
      <a
        className={cnb('su-logo font-serif', validColor, className)}
        href="https://www.stanford.edu"
      >
        {logoText}
      </a>
    );
  }

  return (
    <div className={cnb('su-logo font-serif', validColor, className)}>{logoText}</div>
  );
};
