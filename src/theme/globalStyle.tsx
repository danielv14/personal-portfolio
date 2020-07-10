import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { syntaxHighlighting } from './syntaxHighlighting';
import { typography } from './typography';
import { cssVariables } from './cssVariables';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}
  
  /* Add syntax highlighting styles */
  ${syntaxHighlighting}
  
  /* Add css variables */
  ${cssVariables}


  body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--content-font);
  }

  /* Add typography styles */
  ${typography}
`;
