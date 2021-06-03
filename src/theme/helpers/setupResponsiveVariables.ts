import { css } from 'styled-components';
import { Fonts } from '../../types/theme/Fonts';
import { theme } from '../theme';
import { scaleToPx } from './scaleHelpers';

export const setupResponsiveVariables = (fonts: Fonts) => css`
  @media (min-width: ${scaleToPx(theme.breakpoints[2])}) {
    :root {
      --font-size-base: ${fonts.sizeBaseDesktop};
    }
  }
`;