import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import reset from 'styled-reset';
import { syntaxHighlighting } from './syntaxHighlighting';
import { typography } from './typography';
import { setupThemeVariables } from './setupThemeVariables';

const { fonts, colors, margins, siteWidth } = theme;

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}
  
  /* Add syntax highlighting styles */
  ${syntaxHighlighting}
  
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
    --primary-color: ${colors.primary};
    --primary-color-darken: ${colors.primaryDarken};
    --primary-color-lighten: ${colors.primaryLighten};

    /* Setup border radiuses */
    --border-radius-small: 4px;
    --border-radius: 6px;

    /* Setup margins */
    --margin-small: ${margins.small};
    --margin-medium: ${margins.medium};
    --margin-large: ${margins.large};

    --site-max-width: ${siteWidth};

    /* Setup themable variables depending on system color theme */
    ${setupThemeVariables(colors.themed.light)}
  }

  html {
    font-size: var(--font-size-base);
  }

  body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--content-font);
    &.dark-mode {
     ${setupThemeVariables(colors.themed.dark)}
    }
  }

  /* Add typography styles */
  ${typography}
`;
