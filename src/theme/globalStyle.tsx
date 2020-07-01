import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import reset from 'styled-reset';
import { syntaxHighlighting } from './syntaxHighlighting';
import { typography } from './typography';
import { setupThemeVariables } from './setupThemeVariables';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}
  
  /* Add syntax highlighting styles */
  ${syntaxHighlighting}
  
  :root {

    /* Setup fonts */
    --content-font: ${theme.fonts.fontFamily.main};
    --headings-font: ${theme.fonts.fontFamily.headings};

    /* Setup font sizes */
    --font-size-base: ${theme.fonts.size.base};
    --font-size-h1: ${theme.fonts.size.h1};
    --font-size-h2: ${theme.fonts.size.h2};
    --font-size-h3: ${theme.fonts.size.h3};
    --font-size-h4: ${theme.fonts.size.h4};
    --font-size-h5: ${theme.fonts.size.h5};
    --font-size-h6: ${theme.fonts.size.h6};
    --font-size-small: ${theme.fonts.size.small};
    --font-size-smaller: ${theme.fonts.size.smaller};

    /* Setup colors */
    --primary-color: ${theme.colors.primary};
    --primary-color-darken: ${theme.colors.primaryDarken};
    --primary-color-lighten: ${theme.colors.primaryLighten};

    /* Setup border radiuses */
    --border-radius-small: 4px;
    --border-radius: 6px;

    /* Setup breakpoints */
    --breakpoint-small: ${theme.breakpoints.small};
    --breakpoint-medium: ${theme.breakpoints.medium};
    --breakpoint-large: ${theme.breakpoints.large};

    /* Setup margins */
    --margin-small: ${theme.margins.small};
    --margin-medium: ${theme.margins.medium};
    --margin-large: ${theme.margins.large};

    --site-max-width: ${theme.siteWidth};

    /* Setup themable variables depending on system color theme */
    ${setupThemeVariables(theme.colors.themed.light)}
  }

  html {
    font-size: var(--font-size-base);
  }

  body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--content-font);
    &.dark-mode {
     ${setupThemeVariables(theme.colors.themed.dark)}
    }
  }

  /* Add typography styles */
  ${typography}
`;
