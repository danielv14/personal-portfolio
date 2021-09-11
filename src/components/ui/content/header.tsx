import { styled } from 'theme';

export const Header = styled('h2', {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    muted: {
      true: {
        fontWeight: '400',
        color: '$textMutedColor',
      },
    },
  },
});

Header.displayName = 'Header';
