import styled from 'styled-components';
import { Row } from '../ui/container/row';

export const NavbarWrapper = styled.div`
  box-shadow: var(--box-shadow-main);
`;

NavbarWrapper.displayName = 'NavbarWrapper';

export const NavbarContentWrapper = styled(Row)`
  width: 100%;
  background: var(--bg-color);
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
