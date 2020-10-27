import { fonts } from './parts/fonts';
import { colors } from './parts/colors';
import { breakpoints } from './parts/breakpoints';
import { layout } from './parts/layout';
import { spacing } from './parts/spacings';
import { ThemeSettings } from '../types/theme/ThemeSettings';

export const theme = {
  colors,
  fonts,
  breakpoints,
  spacing,
  layout,
} as ThemeSettings;
