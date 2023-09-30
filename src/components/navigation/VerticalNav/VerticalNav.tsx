import React from 'react';
import { cnb } from 'cnbuilder';
import { VerticalNavGroup } from './VerticalNavGroup';

type VerticalNavRootProps = {
  menu: any[]; // @TODO: Define specific obj
  className?: string;
  showNestedLevels: boolean;
  activeClasses?: string;
  [key: string]: any;
}

export const VerticalNavRoot: React.FC<VerticalNavRootProps> = ({
  menu,
  className,
  showNestedLevels,
  activeClasses,
  ...props
}) => (
  <nav
    className={cnb('su-vertical-nav su-relative', className)}
    {...props}
    aria-label="Section Menu"
  >
    <VerticalNavGroup
      menuTree={menu}
      showNestedLevels={showNestedLevels}
      activeClasses={activeClasses}
    />
  </nav>
);

