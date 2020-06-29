import { css } from 'styled-components';

export const typography = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--headings-font);
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--heading-color);
    line-height: 1.2;
  }

  h1 {
    font-size: var(--font-size-h1);
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  h2 {
    font-size: var(--font-size-h2);
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  h3 {
    font-size: var(--font-size-h3);
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }
  h4 {
    font-size: var(--font-size-h4);
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }
  h5 {
    font-size: var(--font-size-h5);
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }
  h6 {
    font-size: var(--font-size-h6);
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 500;
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
    line-height: 1.5;
  }

  p {
    margin: 0 0 1.2rem;
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
    font-size: 0.8rem;
    color: var(--text-color);
    background: var(--bg-color-highlight);
    border-radius: var(--border-radius-small);
    padding: 2px 4px;
    display: inline-block;
  }

  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;
