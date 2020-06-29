import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer } from '../ui/container/responsiveContainer';
import Link from 'next/link';
import { Fill } from '../ui/container/fill';
import { Row } from '../ui/container/row';
import { IconMoon } from '../ui/icons/iconMoon';
import { MarginSmall } from '../ui/margins/marginSmall';
import { IconSun } from '../ui/icons/iconSun';
import { useDarkMode } from '../../hooks/useDarkMode';

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
            <MarginSmall />
            {isDarkMode ? <IconSun onClick={toggleDarkMode} /> : <IconMoon onClick={toggleDarkMode} />}
          </Row>
        </NavbarContentWrapper>
      </ResponsiveContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  box-shadow: var(--box-shadow-main);
`;

NavbarWrapper.displayName = 'NavbarWrapper';

const NavbarContentWrapper = styled(Row)`
  width: 100%;
  background: var(--bg-color);
  height: 60px;
  align-items: center;
  font-family: var(--headings-font);
  font-weight: bold;
  font-size: var(--font-size-h5);
`;

NavbarContentWrapper.displayName = 'NavbarContentWrapper';

const NavbarLink = styled.a`
  color: var(--text-muted-color);
  &:hover {
    text-decoration: none;
  }
`;

NavbarLink.displayName = 'NavbarLink';

const NavbarHeading = styled.div`
  color: var(--text-muted-color);
  cursor: pointer;
`;

NavbarHeading.displayName = 'NavbarHeading';

Navbar.displayName = 'Navbar';
