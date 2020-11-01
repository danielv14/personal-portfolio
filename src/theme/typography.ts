import { css } from 'styled-components';

export const typography = css`
  html {
    font-size: var(--font-size-base);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--headings-font);
    color: var(--heading-color);
    line-height: 1.2;
    letter-spacing: -0.5px;
    margin-top: 1rem;
  }

  h1,
  h2 {
    margin-bottom: 1rem;
    font-weight: 700;
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  h1 {
    font-size: var(--font-size-h1);
  }
  h2 {
    font-size: var(--font-size-h2);
  }
  h3 {
    font-size: var(--font-size-h3);
  }
  h4 {
    font-size: var(--font-size-h4);
  }
  h5 {
    font-size: var(--font-size-h5);
  }
  h6 {
    font-size: var(--font-size-h6);
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

  p,
  li {
    line-height: 1.6;
  }

  p {
    margin: 0 0 1.6rem;
    overflow-wrap: break-word;
  }

  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  ul,
  ol {
    margin-bottom: 10px;
    padding-inline-start: 1rem;
  }

  li {
    margin: var(--margin-small);
  }

  img {
    max-width: 100%;
  }

  pre {
    border-radius: var(--border-radius);
    font-size: 1rem;
  }

  blockquote {
    margin: 0 0 1rem 0;
    padding: 1rem;
    background: var(--bg-color-highlight);
    border-radius: 0.3rem;
    border-left: 1px solid var(--primary-color);
    border-left-width: 8px;
    p {
      margin-bottom: 0;
    }
  }

  code {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: var(--font-size-code);
    color: var(--text-color);
    background: var(--bg-color-highlight);
    border-radius: var(--border-radius-small);
    font-weight: 400;
    padding: 4px;
  }

  strong {
    font-weight: bold;
    color: var(--text-emphasis-color);
  }
  em {
    font-style: italic;
  }
`;
