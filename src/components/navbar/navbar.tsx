import React from 'react';
import { ResponsiveContainer } from '../ui/container/responsiveContainer';
import Link from 'next/link';
import { Fill } from '../ui/container/fill';
import { Row } from '../ui/container/row';
import { IconDarkMode } from '../ui/icons/iconDarkMode';
import { IconLightMode } from '../ui/icons/iconLightMode';
import { useDarkMode } from '../../hooks/useDarkMode';
import { MarginMedium } from '../ui/margins/marginMedium';
import { NavbarWrapper, NavbarContentWrapper, NavbarHeading, NavbarLink } from './stylesNav';

export const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <NavbarWrapper>
      <ResponsiveContainer>
        <NavbarContentWrapper>
          <Link href="/">
            <NavbarHeading>Daniel Vernberg</NavbarHeading>
          </Link>
          <Fill />
          <Row style={{ alignItems: 'center', cursor: 'pointer' }}>
            <Link href="/blogg">
              <NavbarLink>Blogg</NavbarLink>
            </Link>
            <MarginMedium />
            {isDarkMode ? <IconLightMode onClick={toggleDarkMode} /> : <IconDarkMode onClick={toggleDarkMode} />}
          </Row>
        </NavbarContentWrapper>
      </ResponsiveContainer>
    </NavbarWrapper>
  );
};

Navbar.displayName = 'Navbar';
