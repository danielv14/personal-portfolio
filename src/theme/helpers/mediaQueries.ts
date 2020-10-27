import { css } from 'styled-components';
import { theme } from '../theme';

export const mediaQuery = (breakpoint: string) => (templateStrings: TemplateStringsArray) => css`
  @media (min-width: ${breakpoint}) {
    ${css(templateStrings)}
  }
`;

export const media = {
  small: mediaQuery(theme.breakpoints[0]),
  medium: mediaQuery(theme.breakpoints[1]),  
  large: mediaQuery(theme.breakpoints[2])
};