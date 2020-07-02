import { ColorTheme } from './colors';
import { css } from 'styled-components';

export const setupThemeVariables = (theme: ColorTheme) => css`
  --bg-color: ${theme.backgroundColor};
  --bg-color-secondary: ${theme.backgroundColorSecondary};
  --bg-color-highlight: ${theme.backgroundColorHighlight};
  --text-color: ${theme.textColor};
  --heading-color: ${theme.headingColor};
  --text-muted-color: ${theme.textMutedColor};
  --box-shadow-main: ${theme.boxShadowMain};
  --box-shadow-button: ${theme.boxShadowButton};
  --box-shadow-button-hover: ${theme.boxShadowButtonHover};
`;
