import React from 'react';
import { cnb } from 'cnbuilder';
import * as styles from './MainMenuItem.styles'; // Import your styles from the appropriate location

interface MainNavItemProps {
  link: string;
  text: string;
  mobileOnly?: boolean;
}

export const MainNavItem: React.FC<MainNavItemProps> = ({ link, text, mobileOnly }) => (
  <li className={cnb(styles.root, mobileOnly ? 'lg:su-hidden' : '')}>
    <a href={link} className={styles.link}>
      {text}
    </a>
  </li>
);

