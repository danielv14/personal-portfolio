import { css } from 'styled-components';

export const scaleToRem = (scale: number) => `${scale}rem`;

export const scaleToPx = (scale: number) => `${scale}px`;

export const scaleToMediaQuery = (scale: number) => (templateStrings: TemplateStringsArray) => css`
  @media (min-width: ${({theme}) => (theme.breakpoints[scale])}) {
    ${css(templateStrings)}
  }
`;