import React from 'react';
import { cnb } from 'cnbuilder';
import useEscape from '../../../hooks/useEscape';
import { MainNavItem } from './MainMenuItem';

export type MainMenuItem = {
  link: string;
  text: string;
}

type MainNavProps = {
  mainMenuItems: MainMenuItem[];
  className?: string;
}


export const MainMenu: React.FC<MainNavProps> = ({ mainMenuItems, className }) => {
  return (
    <nav
      className={cnb('main-nav-desktop hidden lg:block', className)}
      aria-label="Main Menu"
    >
      <ul className="hidden lg:flex flex-col justify-end lg:ml-auto lg:flex-row lg:items-end list-unstyled children:mb-0">
        {mainMenuItems.map((mainMenuItem, index) => (
          <MainNavItem key={index} link={mainMenuItem.link} text={mainMenuItem.text} />
        ))}
      </ul>
    </nav>
  );
};

