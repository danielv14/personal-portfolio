import { css } from 'styled-components';
import { theme } from '../../../theme/theme';

export const mediaQuery = (breakpoint: string) => (templateStrings: TemplateStringsArray) => css`
  @media (min-width: ${breakpoint}) {
    ${css(templateStrings)}
  }
`;

export const media = {
  small: mediaQuery(theme.breakpoints.small),
  medium: mediaQuery(theme.breakpoints.medium),  
  large: mediaQuery(theme.breakpoints.large)
};
