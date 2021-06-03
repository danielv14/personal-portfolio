import { Fonts, FontScale } from '../../types/theme/Fonts';

const fontScale: FontScale = [0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.5, 2];

export const fonts: Fonts = {
  fontFamily: {
    main:
      "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    headings:
      "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    mono: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  },
  sizeBase: '16px',
  sizeBaseDesktop: '18px',
  sizeScale: fontScale,
};
