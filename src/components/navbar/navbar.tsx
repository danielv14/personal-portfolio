import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Fill } from '../ui/container/fill';
import { ResponsiveContainer } from '../ui/container/responsiveContainer';
import { Row } from '../ui/container/row';
import { UnstyledNextLink } from '../ui/content/unstyledLink';
import { IconDarkMode } from '../ui/icons/iconDarkMode';
import { IconLightMode } from '../ui/icons/iconLightMode';
import { MarginMedium } from '../ui/margins/marginMedium';
import { NavbarContentWrapper, NavbarItem, NavbarWrapper } from './stylesNav';

export const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <NavbarWrapper>
      <ResponsiveContainer>
        <NavbarContentWrapper>
          <UnstyledNextLink href="/">
            <NavbarItem>Daniel Vernberg</NavbarItem>
          </UnstyledNextLink>
          <Fill />
          <Row style={{ alignItems: 'center', cursor: 'pointer' }}>
            <UnstyledNextLink href="/blogg">
              <NavbarItem>Blogg</NavbarItem>
            </UnstyledNextLink>
            <MarginMedium />
            {isDarkMode ? <IconLightMode onClick={toggleDarkMode} /> : <IconDarkMode onClick={toggleDarkMode} />}
          </Row>
        </NavbarContentWrapper>
      </ResponsiveContainer>
    </NavbarWrapper>
  );
};

Navbar.displayName = 'Navbar';
