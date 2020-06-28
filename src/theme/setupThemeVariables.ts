import { ColorTheme } from './colors';
import { css } from 'styled-components';

export const setupThemeVariables = (theme: ColorTheme) => css`
  --bg-color: ${theme.backgroundColor};
  --bg-color-secondary: ${theme.backgroundColorSecondary};
  --text-color: ${theme.textColor};
  --text-muted-color: ${theme.textMutedColor};
`;
