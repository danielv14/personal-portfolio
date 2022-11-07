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
    fontSize: '$code',
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
});
