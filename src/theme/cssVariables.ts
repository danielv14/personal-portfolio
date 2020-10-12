import { css } from 'styled-components';
import { theme } from './theme';
import { setupThemeVariables } from './setupThemeVariables';
const { fonts, colors, layout } = theme;
const { margin } = layout;

export const cssVariables = css`
  :root {
    /* Setup fonts */
    --content-font: ${fonts.fontFamily.main};
    --headings-font: ${fonts.fontFamily.headings};

    /* Setup font sizes */
    --font-size-base: ${fonts.size.base};
    --font-size-h1: ${fonts.size.h1};
    --font-size-h2: ${fonts.size.h2};
    --font-size-h3: ${fonts.size.h3};
    --font-size-h4: ${fonts.size.h4};
    --font-size-h5: ${fonts.size.h5};
    --font-size-h6: ${fonts.size.h6};
    --font-size-small: ${fonts.size.small};
    --font-size-smaller: ${fonts.size.smaller};
    --font-size-code: ${fonts.size.code};

    /* Setup colors */
    --primary-color: ${colors.brand.primary};
    --primary-color-darken: ${colors.brand.primaryDarken};
    --primary-color-lighten: ${colors.brand.primaryLighten};

    /* Setup border radiuses */
    --border-radius-small: 4px;
    --border-radius: 6px;

    /* Setup margins */
    --margin-small: ${margin.small};
    --margin-medium: ${margin.medium};
    --margin-large: ${margin.large};

    --site-max-width: ${layout.siteWidth};

    /* Setup variables depending on dark/light mode. Default to light mode */
    ${setupThemeVariables(colors.themed.light)}
  }
  body.dark-mode {
    ${setupThemeVariables(colors.themed.dark)};
  }
`;
