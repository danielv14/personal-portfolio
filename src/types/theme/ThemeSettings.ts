import { Breakpoints } from './Breakpoints';
import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { SpacingScale } from './Spacing';

export interface ThemeSettings {
  colors: Colors;
  fonts: Fonts;
  breakpoints: Breakpoints;
  spacings: SpacingScale;
  layout: {
    siteWidth: string;
  }
}

export interface WithThemeContext {
  theme: ThemeSettings;
}