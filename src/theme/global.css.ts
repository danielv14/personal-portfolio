import { reset } from './reset.css';
import { globalCss } from './theme.config';
export const globalStyles = globalCss({
  ...reset,
  body: {
    background: '$backgroundColor',
    color: '$textColor',
    fontFamily: '$main',
    fontWeight: 500,
  },

  html: {
    fontSize: '$base',
    '@large': {
      fontSize: '$baseDesktop',
    },
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$headings',
    color: '$headingColor',
    lineHeight: 1.2,
    letterSpacing: '-0.5px',
    marginTop: '1rem',
  },
  'h1, h2': {
    marginBottom: '1rem',
    fontWeight: 700,
  },
  'h3, h4, h5, h6': {
    fontWeight: 600,
    marginBottom: '0.7rem',
  },

  h1: {
    fontSize: '$h1',
  },
  h2: {
    fontSize: '$h2',
  },
  h3: {
    fontSize: '$h3',
  },
  h4: {
    fontSize: '$h4',
  },
  h5: {
    fontSize: '$h5',
  },
  h6: {
    fontSize: '$h6',
  },
  a: {
    color: '$primary',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  'p, li': {
    lineHeight: 1.6,
  },

  p: {
    margin: '0 0 1.6rem',
    overflowWrap: 'break-word',
  },

  ul: {
    listStyle: 'disc',
  },
  ol: {
    listStyle: 'decimal',
  },
  'ul, ol': {
    marginBottom: '10px',
    paddingInlineStart: '1rem',
  },
  li: {
    margin: '$small',
  },

  img: {
    maxWidth: '100%',
  },

  pre: {
    borderRadius: '$default',
    fontSize: '1rem',
  },

  blockquote: {
    margin: '0 0 1rem 0',
    padding: '1rem',
    background: '$backgroundColorHighlight',
    borderRadius: '0.3rem',
    borderLeft: '1px solid $primary',
    borderLeftWidth: '8px',
    '& p': {
      marginBottom: 0,
    },
  },

  code: {
    fontFamily: '$mono',
    fontSize: '$code',
    color: '$textColor',
    background: '$backgroundColorHighlight',
    borderRadius: '$small',
    fontWeight: 400,
    padding: '4px',
  },

  strong: {
    fontWeight: 'bold',
    color: '$headingColor',
  },
  em: {
    fontStyle: 'italic',
  },
  'code[class*="language-"], pre[class*="language-"]': {
    color: '#f8f8f2',
    background: 'none',
    display: 'block',
    fontFamily: '$mono',
    textAlign: 'left',
    fontWeight: 400,
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    padding: '1em',
    margin: '0.5em 0 1em',
    marginTop: 0,
    overflow: 'auto',
    borderRadius: '$small',
  },
  ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
    background: '#2e3440',
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '01.em',
    borderRadius: '$small',
    whiteSpace: 'normal',
  },
  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#636f88',
  },
  '.token.punctuation': {
    color: '#81a1c1',
  },
  '.namespace': {
    opacity: 0.7,
  },
  '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
    color: '#81a1c1',
  },
  '.token.number': {
    color: '#b48ead',
  },
  '.token.boolean': {
    color: '#81a1c1',
  },
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '#a3be8c',
  },
  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
    color: '#81a1c1',
  },
  '.token.atrule, .token.attr-value, .token.function, .token.class-name': {
    color: '#88c0d0',
  },
  '.token.keyword': {
    color: '#81a1c1',
  },

  '.token.regex, .token.important': {
    color: '#ebcb8b',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },
  '.token.italic': {
    fontStyle: 'italic',
  },
  '.token.entity': {
    cursor: 'help',
  },
  '.remark-code-title': {
    maxWidth: '100%',
    overflowY: 'hidden',
    fontFamily: '$mono',
    marginBottom: '-0.8rem',
    padding: '0.7em 1em 0.5em 1em',
    background: '#2e3440',
    textAligh: 'left',
    fontWeight: 400,
    color: '#636f88',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    fontSize: '$small',
    zIndex: 1,
  },
  '.mdx-marker': {
    marginLeft: '-1.55em',
    paddingLeft: '1em',
    borderLeft: '6px solid #88c0d0',
    '@medium': {
      marginRight: '-1.5em',
      background: '#3b414ccc',
    },
  },
});
