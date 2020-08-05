import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Fill } from '../ui/container/fill';
import { ResponsiveContainer } from '../ui/container/responsiveContainer';
import { Row } from '../ui/container/row';
import { UnstyledInternalLink } from '../ui/content/unstyledLink';
import { MarginSmall } from '../ui/margins/marginSmall';
import { DarkModeToggleIcons } from './darkModeToggleIcons';
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
            <DarkModeToggleIcons isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          </Row>
        </NavbarContentWrapper>
      </ResponsiveContainer>
    </NavbarWrapper>
  );
};

Navbar.displayName = 'Navbar';
