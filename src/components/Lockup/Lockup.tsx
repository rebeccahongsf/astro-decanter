import React from 'react';
import { cnb } from 'cnbuilder';
import { Logo } from '../Logo/Logo';
import { FlexBox } from '../FlexBox/FlexBox';
import * as types from './Lockup.types'
import * as styles from './Lockup.styles'

/**
 * Stanford Department Branding Component.
 *
 */

type LockupProps = {
  color?: types.lockupColors,
  url: string;
  isLink?: boolean,
  line1: string,
}

export const Lockup = ({ color = 'default', url, isLink = true, line1, ...props }: LockupProps) => {
  const LockupContent = (
    <FlexBox direction="col" className="md:flex-row basefont-19">
      <Logo
        type='short'
        color={styles.lockupLogo[color]}
        isLink={false}
        className={cnb(
          'type-4 leading-half pt-11 pr-7 mr-7 md:border-r border-solid',
          styles.lockupBar[color]
        )}
      />
      <div
        className={cnb(
          'text-25 md:text-m2 -mt-3 md:mt-0 -ml-2 md:ml-0 font-regular relative top-6',
          styles.lockupText[color],
        )}
      >
        {line1}
      </div>
    </FlexBox>
  );

  // isLink
  // Render logo as link or simple div
  if (isLink) {
    return (
      <a
        className=
        'lockup no-underline inline-block'
        href={url ?? '/'}
      >
        {LockupContent}
      </a>
    );
  }

  return (
    <div
      className='lockup no-underline inline-block'
    >
      {LockupContent}
    </div>
  );
};
