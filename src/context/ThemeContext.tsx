import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeSettings } from '../types/theme/Theme';
import { ThemeContext } from 'styled-components';

export const ThemeProvider: React.FC<{ theme: ThemeSettings }> = ({ children, theme }) => 
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = (): ThemeSettings => React.useContext(ThemeContext);