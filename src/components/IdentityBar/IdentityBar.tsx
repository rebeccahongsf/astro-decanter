import React from 'react';
import { cnb } from 'cnbuilder';
import * as types from './IdentityBar.type';
import * as styles from './IdentityBar.styles';
import { Container } from '../Container';
import { Logo } from '../Logo';

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
        'identity-bar pt-5 pb-1',
        color ? styles.IdentityBarWrapperColor[color] : '',
        className
      )}
    >
      <Logo
        className="text-20 leading-none"
        color={styles.IdentityBarLogoColor[color]}
        type="full"
      />
    </Container>
  );
};
