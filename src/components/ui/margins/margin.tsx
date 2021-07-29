import { styled } from '../../../theme';

export const Margin = styled('div', {
  display: 'flex',
  variants: {
    size: {
      small: {
        maxWidth: '$small',
        minWidth: '$small',
        margin: '$small',
      },
      medium: {
        maxWidth: '$medium',
        minWidth: '$medium',
        margin: '$medium',
      },
      large: {
        maxWidth: '$large',
        minWidth: '$large',
        margin: '$large',
      },
      mega: {
        maxWidth: '$mega',
        minWidth: '$mega',
        margin: '$mega',
      },
    }
  }
});