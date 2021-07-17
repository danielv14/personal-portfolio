import React from 'react';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Fill } from '../../ui-system/container/Fill';
import { ResponsiveContainer } from '../../ui-system/container/ResponsiveContainer';
import { Row } from '../../ui-system/container/Row';
import { UnstyledInternalLink } from '../../ui-system/content/UnstyledLink';
import { ThemeToggleIcon } from '../../ui-system/icons/IconThemeToggle';
import { MarginSmall } from '../../ui-system/margins/MarginSmall';
import { NavbarContentWrapper, NavbarItem, NavbarWrapper } from './nav.styles';

export const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <NavbarWrapper>
      <ResponsiveContainer>
        <NavbarContentWrapper>
          <UnstyledInternalLink href="/">
            <NavbarItem>Daniel Vernberg</NavbarItem>
          </UnstyledInternalLink>
          <Fill />
          <Row style={{ alignItems: 'center', cursor: 'pointer' }}>
            <UnstyledInternalLink href="/blogg">
              <NavbarItem>Blogg</NavbarItem>
            </UnstyledInternalLink>
            <MarginSmall />
            <ThemeToggleIcon isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          </Row>
        </NavbarContentWrapper>
      </ResponsiveContainer>
    </NavbarWrapper>
  );
};

Navbar.displayName = 'Navbar';