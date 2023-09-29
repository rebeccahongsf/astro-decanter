import React from 'react';
import { cnb } from 'cnbuilder';
import * as types from './IdentityBar.type';
import * as styles from './IdentityBar.styles';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';

/**
 * Stanford Identity Bar Component.
 *
 */
type IdentityBarProps = {
  color?:types.IdentityBarColorType;
  className?: string;
}

export const IdentityBar = ({ color = 'cardinal-red', className, ...props }: IdentityBarProps) => {
  return (
    <Container
      width="site"
      className={cnb(
        'su-identity-bar su-pt-5 su-pb-1',
        color ? styles.IdentityBarWrapperColor[color] : '',
        className
      )}
    >
      <Logo
        className="su-text-20 su-leading-none"
        color={color ? styles.IdentityBarLogoColor[color] : null}
        type="full"
      />
    </Container>
  );
};
