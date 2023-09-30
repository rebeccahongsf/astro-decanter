import React from 'react';
import { VerticalNavItem } from './VerticalNavItem';

type VerticalNavGroupProps = {
  menuTree: any[]; // @TODO: Define specific obj
  className?: string;
  showNestedLevels: boolean;
  activeClasses?: string;
  [key: string]: any; 
}

export const VerticalNavGroup: React.FC<VerticalNavGroupProps> = ({
  menuTree,
  className,
  showNestedLevels,
  activeClasses,
  ...props
}) => (
  <ul
    className={
      className ||
      'nav-group list-none p-0 children:border-t children:border-solid children:border-black-20 children:children:text-21'
    }
    {...props}
  >
    {menuTree.map((group) => (
      <React.Fragment key={group.id || (group.link && (group.link.href || group.link.to))}>
        {group.link && (
          <VerticalNavItem
            element={group.link}
            active={group.active}
            items={group.children}
            showNestedLevels={showNestedLevels}
            activeClasses={activeClasses} isRoot={false}
          />
        )}
      </React.Fragment>
    ))}
  </ul>
);
