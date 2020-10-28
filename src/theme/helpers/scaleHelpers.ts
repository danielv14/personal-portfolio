import { css } from 'styled-components';
import { WithThemeContext } from '../../types/theme/ThemeSettings';

export const scaleToRem = (scale: number) => `${scale}rem`;

export const scaleToPx = (scale: number) => `${scale}px`;

export const scaleSpacingToPx = (scale: number) => css(
  ({ theme }: WithThemeContext) => scaleToPx(theme.spacings[scale])
);

export const scaleToMediaQuery = (scale: number) => (templateStrings: TemplateStringsArray) => css`
  @media (min-width: ${({theme}) => (theme.breakpoints[scale])}) {
    ${css(templateStrings)}
  }
`;