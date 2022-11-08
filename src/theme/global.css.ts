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
    'text-size-adjust': 'none',
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
    margin: '0 0 1.2rem',
    overflowWrap: 'break-word',
  },

  ul: {
    listStyle: 'disc',
    '& li::marker': {
      color: '$primary',
      fontSize: '$5',
    },
  },
  ol: {
    listStyle: 'decimal',
    '& li::marker': {
      color: '$primary',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  },
  'ul, ol': {
    marginBottom: '10px',
    paddingInlineStart: '1rem',
  },
  li: {
    margin: '$medium $small',
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
    fontWeight: 'bold',
    padding: '6px',
  },
  'code:not([class^="language"])': {
    '&:after, &:before': {
      content: '`',
      fontWeight: 'bold',
    },
  },

  strong: {
    fontWeight: 'bold',
    color: '$headingColor',
  },
  em: {
    fontStyle: 'italic',
  },
  'span.token': {
    fontSize: '$code',
  },
});
