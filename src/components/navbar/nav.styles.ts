import styled from 'styled-components';
import { Row } from '../ui/container/row';

export const NavAdjustedContent = styled.div`
  padding-top: 60px;
`;

NavAdjustedContent.displayName = 'NavAdjustedContent';

export const NavbarWrapper = styled.div`
  box-shadow: var(--box-shadow-main);
  position: fixed;
  width: 100%;
  background: var(--bg-color);
  z-index: 999;
  @supports (backdrop-filter: blur(20px)) {
    backdrop-filter: blur(20px);
    background: var(--bg-color-navbar);
  }
`;

NavbarWrapper.displayName = 'NavbarWrapper';

export const NavbarContentWrapper = styled(Row)`
  width: 100%;
  height: 60px;
  align-items: center;
  font-family: var(--headings-font);
  font-weight: bold;
  font-size: var(--font-size-h5);
`;

NavbarContentWrapper.displayName = 'NavbarContentWrapper';

export const NavbarItem = styled.span`
  color: var(--text-muted-color);
`;

NavbarItem.displayName = 'NavbarItem';
