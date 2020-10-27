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
    spacings: {
      [key in Spacing]: string
  }
  }
}