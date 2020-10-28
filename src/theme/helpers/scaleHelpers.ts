import { css } from 'styled-components';
import { WithThemeContext } from '../../types/theme/ThemeSettings';

export const scaleToRem = (scale: number) => `${scale}rem`;

export const scaleToPx = (scale: number) => `${scale}px`;

export const scaleSpacingToPx = (scale: number) => css(
  ({ theme }: WithThemeContext) => scaleToPx(theme.spacings[scale])
);

const scaleMediaQueryToPx = (scale: number) => css(
  ({ theme }: WithThemeContext) => scaleToPx(theme.breakpoints[scale])
);

export const scaleFontSizeToRem = (scale: number) => css(
  ({ theme }: WithThemeContext) => scaleToRem(theme.fonts.sizeScale[scale])
);

export const scaleToMediaQuery = (scale: number) => (templateStrings: TemplateStringsArray) => css`
  @media (min-width: ${scaleMediaQueryToPx(scale)}) {
    ${css(templateStrings)}
  }
`;