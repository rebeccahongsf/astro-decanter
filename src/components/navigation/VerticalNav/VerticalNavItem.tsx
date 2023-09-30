import React from 'react';
import { cnb } from 'cnbuilder';
import useActivePath from '../../../hooks/useActivePath';
import { VerticalNavGroup } from './VerticalNavGroup';

interface VerticalNavItemProps {
  element: React.ReactElement;
  items: any[]; // @TODO: Define specific obj
  active: boolean;
  isRoot: boolean;
  showNestedLevels: boolean;
  className?: string;
  elementClasses?: string;
  activeClasses?: string;
  [key: string]: any; 
}

export const VerticalNavItem: React.FC<VerticalNavItemProps> = ({
  element,
  items,
  active,
  isRoot,
  showNestedLevels,
  className,
  elementClasses,
  activeClasses,
  ...props
}) => {
  const activeClass: string[] = [];

  if (active) {
    if (activeClasses) {
      activeClass.push(activeClasses);
    } else {
      activeClass.push(
        'text-black border-black-90 hocus:border-digital-blue-dark'
      );
    }
  } else {
    activeClass.push('border-white');
  }

  let linkClasses = cnb(
    'group no-underline hocus:underline border-l-5 py-14 block pl-10 transition-all hocus:text-digital-blue-dark hocus:border-digital-blue-dark',
    activeClass,
    elementClasses
  );

  linkClasses = element.props.className || linkClasses;
  const LinkObj = React.cloneElement(element, {
    className: linkClasses,
  });

  const inPath = useActivePath(items);

  return (
    <li className={cnb('nav-item m-0', className)} {...props}>
      {LinkObj}
      {Array.isArray(items) && (inPath || showNestedLevels) && (
        <VerticalNavGroup
          menuTree={items}
          showNestedLevels={showNestedLevels}
          activeClasses={activeClasses}
          className="list-none pb-15 pl-20 children:children:py-6 children:children:text-20"
        />
      )}
    </li>
  );
};
