import { createGlobalStyle, css } from 'styled-components';
import { theme } from '../../theme/theme';
import { ColorTheme } from '../../theme/colors';
import reset from 'styled-reset';

const setupThemeVariables = (theme: ColorTheme) => css`
  --bg-color: ${theme.backgroundColor};
  --text-color: ${theme.textColor};
  --text-muted-color: ${theme.textMutedColor};
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
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

    /* Setup colors */
    --primary-color: ${theme.colors.primary};
    --primary-darken-color: ${theme.colors.primaryDarken};

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

    --site-max-width: 750px;

    /* Setup themable variables depending on system color theme */
    ${setupThemeVariables(theme.colors.themed.light)}
    @media (prefers-color-scheme: dark) {
     ${setupThemeVariables(theme.colors.themed.dark)}
    }
  }

  html {
    font-size: 20px;
  }

  body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--content-font);
    font-size: var(--font-size-base);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--headings-font);
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.6rem;
  }

  h1 {
    font-size: var(--font-size-h1);
    margin-top: 1rem;
    margin-bottom: 0.6rem;
  }
  h2 {
    font-size: var(--font-size-h2);
    margin-top: 1rem;
    margin-bottom: 0.6rem;
  }
  h3 {
    font-size: var(--font-size-h3);
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
  }
  h4 {
    font-size: var(--font-size-h4);
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
  }
  h5 {
    font-size: var(--font-size-h5);
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
  }
  h6 {
    font-size: var(--font-size-h6);
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
  }

  a {
    color: var(--primary-color);
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  p, li {
    line-height: 1.5;
  }

  p {
    margin: 0 0 1.2rem;
  }

  code {
    color: var(--text-color);
    background: var(--text-muted-color);
    border-radius: var(--border-radius-small);
    padding: 2px 4px;
  }
`;
