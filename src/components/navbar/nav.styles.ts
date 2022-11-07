import { styled } from 'theme';
import { Row } from 'ui/container/row';

export const NavAdjustedContent = styled('div', {
  paddingTop: '60px',
});
NavAdjustedContent.displayName = 'NavAdjustedContent';

export const NavbarWrapper = styled('div', {
  boxShadow: '$main',
  position: 'fixed',
  width: '100%',
  background: '$backgroundColor',
  zIndex: '999',
  '@supports (backdrop-filter: blur(20px))': {
    backdropFilter: 'blur(20px)',
    background: '$backgroundColorNavBar',
  },
});

NavbarWrapper.displayName = 'NavbarWrapper';

export const NavbarContentWrapper = styled(Row, {
  width: '100%',
  height: '60px',
  alignItems: 'center',
  fontFamily: '$headings',
  fontWeight: 'bold',
  fontSize: '$5',
});

NavbarContentWrapper.displayName = 'NavbarContentWrapper';

export const NavbarItem = styled('span', {
  color: '$textMutedColor',
});

NavbarItem.displayName = 'NavbarItem';
