import { createCss } from '@stitches/react';
import color from 'color';

// Reusable theme tokens
const MAIN_FONT =
  "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";
const COLOR_PRIMARY = '#6691FF';
const COLOR_PRIMARY_DARKEN = color(COLOR_PRIMARY).darken(0.05).hex();
const COLOR_PRIMARY_LIGHTEN = color(COLOR_PRIMARY).lighten(0.38).hex();
const COLOR_SECONDARY = '#3fc179';

export const { theme, styled, getCssString, css, global } = createCss({
  media: {
    small: '(min-width: 640px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1024px)',
  },
  theme: {
    radii: {
      small: '4px',
      default: '6px',
    },
    shadows: {
      main: '0px 4px 10px rgba(0, 0, 0, 0.09)',
      button: `0px 4px 7px ${color(COLOR_PRIMARY).lighten(0.25).opaquer(0.35)}`,
      buttonHover: `0px 4px 10px ${color(COLOR_PRIMARY).lighten(0.1).opaquer(0.35)}`,
    },
    colors: {
      // Brand colors
      primary: COLOR_PRIMARY,
      primaryDarken: COLOR_PRIMARY_DARKEN,
      primaryLighten: COLOR_PRIMARY_LIGHTEN,
      secondary: COLOR_SECONDARY,
      backgroundColor: '#FFF',
      backgroundColorSecondary: '#FFF',
      backgroundColorHighlight: COLOR_PRIMARY_LIGHTEN,
      backgroundColorNavBar: 'hsl(0deg 0% 100% / 75%)',
      textColor: '#585858',
      textMutedColor: '#a2a2a2',
      headingColor: '#444444',
    },
    fonts: {
      main: MAIN_FONT,
      headings: MAIN_FONT,
      mono: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    },
    fontSizes: {
      base: '16px',
      baseDesktop: '18px',
      0: '0.8rem',
      1: '0.9rem',
      2: '1rem',
      3: '1.1rem',
      4: '1.2rem',
      5: '1.3rem',
      6: '1.5rem',
      7: '2rem',
      small: '$1',
      smaller: '$0',
      code: '$0',
      h1: '$fontSizes$7',
      h2: '$fontSizes$6',
      h3: '$fontSizes$5',
      h4: '$fontSizes$4',
      h5: '$fontSizes$3',
      h6: '$fontSizes$2',
    },
    space: {
      small: '5px',
      medium: '10px',
      large: '20px',
      mega: '40px',
    },
    sizes: {
      small: '5px',
      medium: '10px',
      large: '20px',
      mega: '40px',
      siteWidth: '800px',
    },
  },
  utils: {
    hoverHighlight: () => (shouldHighlight: boolean) =>
      shouldHighlight
        ? {
            '&:hover': {
              backgroundColor: '$backgroundColorHighlight',
            },
          }
        : {},
  },
});

export const darkTheme = theme({
  shadows: {
    main: 'none',
    button: 'none',
    buttonHover: 'none',
  },
  colors: {
    backgroundColor: '#171923',
    backgroundColorSecondary: '#202438',
    backgroundColorHighlight: '#202438',
    backgroundColorNavBar: 'hsl(230deg 21% 11% / 75%)',
    textColor: '#bec0c9',
    textMutedColor: '#87919e',
    headingColor: '#e4e4e4',
  },
});
