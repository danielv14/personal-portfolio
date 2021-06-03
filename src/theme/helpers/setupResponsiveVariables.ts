import { css } from 'styled-components';
import { Breakpoints } from '../../types/theme/Breakpoints';
import { Fonts } from '../../types/theme/Fonts';
import { scaleToPx } from './scaleHelpers';

export const setupResponsiveVariables = (fonts: Fonts, breakpoints: Breakpoints) => css`
  @media (min-width: ${scaleToPx(breakpoints[2])}) {
      --font-size-base: ${fonts.sizeBaseDesktop};
  }
`;
