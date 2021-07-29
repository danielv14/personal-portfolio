import color from 'color';
import { ThemeSettings } from '../types/theme/Theme';

// Reusable theme tokens
const MAIN_FONT =
  "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";
const COLOR_PRIMARY = '#6691FF';
const COLOR_PRIMARY_DARKEN = color(COLOR_PRIMARY).darken(0.05).hex();
const COLOR_PRIMARY_LIGHTEN = color(COLOR_PRIMARY).lighten(0.38).hex();
const COLOR_SECONDARY = '#3fc179';

// Theme config object containing all theme tokens
export const theme: ThemeSettings = {
  colors: {
    themed: {
      light: {
        backgroundColor: '#FFF',
        backgroundColorSecondary: '#FFF',
        backgroundColorHighlight: COLOR_PRIMARY_LIGHTEN,
        backgroundColorNavBar: 'hsl(0deg 0% 100% / 75%)',
        textColor: '#585858',
        textMutedColor: '#a2a2a2',
        headingColor: '#444444',
        boxShadowMain: '0px 4px 10px rgba(0, 0, 0, 0.09)',
        boxShadowButton: `0px 4px 7px ${color(COLOR_PRIMARY).lighten(0.25).opaquer(0.35)}`,
        boxShadowButtonHover: `0px 4px 10px ${color(COLOR_PRIMARY).lighten(0.1).opaquer(0.35)}`,
      },
      dark: {
        backgroundColor: '#171923',
        backgroundColorSecondary: '#202438',
        backgroundColorHighlight: '#202438',
        backgroundColorNavBar: 'hsl(230deg 21% 11% / 75%)',
        textColor: '#bec0c9',
        textMutedColor: '#87919e',
        headingColor: '#e4e4e4',
        boxShadowMain: 'none',
        boxShadowButton: 'none',
        boxShadowButtonHover: 'none',
      },
    },
    brand: {
      primary: COLOR_PRIMARY,
      primaryDarken: COLOR_PRIMARY_DARKEN,
      primaryLighten: COLOR_PRIMARY_LIGHTEN,
      secondary: COLOR_SECONDARY,
    },
  },
  fonts: {
    fontFamily: {
      main: MAIN_FONT,
      headings: MAIN_FONT,
      mono: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    },
    sizeBase: '16px',
    sizeBaseDesktop: '18px',
    sizeScale: [0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.5, 2],
  },
  breakpoints: [640, 768, 1024],
  spacings: [5, 10, 20, 40],
  layout: {
    siteWidth: '800px',
  },
};
