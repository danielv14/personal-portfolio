import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { cssVariables } from '../theme/cssVariables';
import { syntaxHighlighting } from '../theme/syntaxHighlighting';
import { typography } from '../theme/typography';

export const GlobalAppStyle = createGlobalStyle`
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
