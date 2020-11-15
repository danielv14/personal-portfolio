import { css } from 'styled-components';
import { media } from './helpers/mediaQueries';

export const syntaxHighlighting = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    display: block;
    font-family: var(--mono-font);
    text-align: left;
    font-weight: 400;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0 1em;
    margin-top: 0;
    overflow: auto;
    border-radius: var(--border-radius-small);
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #2e3440;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: var(--border-radius-small);
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #636f88;
  }

  .token.punctuation {
    color: #81a1c1;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #81a1c1;
  }

  .token.number {
    color: #b48ead;
  }

  .token.boolean {
    color: #81a1c1;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a3be8c;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #81a1c1;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88c0d0;
  }

  .token.keyword {
    color: #81a1c1;
  }

  .token.regex,
  .token.important {
    color: #ebcb8b;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
  /* Line highlighting */
  .mdx-marker {
    margin-left: -1.55em;
    padding-left: 1em;
    border-left: 6px solid #88c0d0;
    ${media.medium`
      margin-right: -1.5em;
      background: #3b414ccc;
    `}
  }
  .remark-code-title {
    max-width: 100%;
    overflow-y: hidden;
    font-family: var(--content-font);
    margin-bottom: -0.8rem;
    padding: 0.7em 1em 0.5em 1em;
    background: #2e3440;
    text-align: left;
    font-style: italic;
    font-weight: 700;
    color: #636f88;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    font-size: var(--font-size-small);
    z-index: 1;
  }
`;
