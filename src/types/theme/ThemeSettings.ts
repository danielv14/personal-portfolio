import { Breakpoints } from './Breakpoints';
import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { Spacing } from './Spacing';

export interface ThemeSettings {
  colors: Colors;
  fonts: Fonts;
  breakpoints: Breakpoints;
  layout: {
    siteWidth: string;
    margin: {
      [key in Spacing]: string
  }
  }
}