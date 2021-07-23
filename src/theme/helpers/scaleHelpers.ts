import { css } from 'styled-components';
import { BreakpointScaleIndex } from '../../types/theme/Breakpoints';
import { ThemeProps } from '../../types/theme/Theme';

export const scaleToRem = (scale: number) => `${scale}rem`;

export const scaleToPx = (scale: number) => `${scale}px`;

export const scaleSpacingToPx = (scale: number) => css(
  ({ theme }: ThemeProps) => scaleToPx(theme.spacings[scale])
);

const scaleMediaQueryToPx = (scale: number) => css(
  ({ theme }: ThemeProps) => scaleToPx(theme.breakpoints[scale])
);

export const scaleFontSizeToRem = (scale: number) => css(
  ({ theme }: ThemeProps) => scaleToRem(theme.fonts.sizeScale[scale])
);

export const scaleToMediaQuery = (scale: BreakpointScaleIndex) => (templateStrings: TemplateStringsArray) => css`
  @media (min-width: ${scaleMediaQueryToPx(scale)}) {
    ${css(templateStrings)}
  }
`;