import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer } from '../ui/container/responsiveContainer';
import Link from 'next/link';
import { Fill } from '../ui/container/fill';
import { Row } from '../ui/container/row';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <ResponsiveContainer>
        <NavbarContentWrapper>
          <Link href="/">
            <NavbarHeading>Daniel Vernberg</NavbarHeading>
          </Link>
          <Fill />
          <Row>
            <Link href="/blogg">
              <NavbarLink>Blogg</NavbarLink>
            </Link>
          </Row>
        </NavbarContentWrapper>
      </ResponsiveContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
  @media (prefers-color-scheme: dark) {
    box-shadow: none;
  }
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
`;

NavbarLink.displayName = 'NavbarLink';

const NavbarHeading = styled.div`
  color: var(--text-muted-color);
  cursor: pointer;
`;

NavbarHeading.displayName = 'NavbarHeading';

Navbar.displayName = 'Navbar';
