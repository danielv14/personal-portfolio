import { fonts } from './parts/fonts';
import { colors } from './parts/colors';
import { breakpoints } from './parts/breakpoints';
import { layout } from './parts/layout';
import { spacings } from './parts/spacings';
import { ThemeSettings } from '../types/theme/Theme';

export const theme = {
  colors,
  fonts,
  breakpoints,
  spacings,
  layout,
} as ThemeSettings;
