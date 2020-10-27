import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { syntaxHighlighting } from './syntaxHighlighting';
import { typography } from './typography';
import { cssVariables } from './cssVariables';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}
  
  /* Add css variables */
  ${cssVariables}

  /* Add syntax highlighting styles */
  ${syntaxHighlighting}
  
  body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--content-font);
    font-weight: 500;
  }

  /* Add typography styles */
  ${typography}
`;
