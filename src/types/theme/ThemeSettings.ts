import { Breakpoints } from './Breakpoints';
import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { SpacingScale } from './Spacing';

export interface ThemeSettings {
  colors: Colors;
  fonts: Fonts;
  breakpoints: Breakpoints;
  spacing: SpacingScale;
  layout: {
    siteWidth: string;
  }
}