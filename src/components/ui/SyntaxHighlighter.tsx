import { styled } from 'theme';

export const SyntaxHighlighter = styled('div', {
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
  // '.code-line': {
  //   fontSize: '$code',
  //   '& span': {
  //     fontSize: '$code',
  //   },
  // },
  '.rehype-code-title': {
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
  /**
   * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .code-highlight.
   */
  '.code-highlight': {
    float: 'left' /* 1 */,
    minWidth: '100%' /* 2 */,
  },

  '.highlight-line': {
    marginLeft: '-1.55em',
    paddingLeft: '1em',
    display: 'block',
    borderLeft: '6px solid #88c0d0',
    marginRight: '-1.5em',
    background: '#3b414ccc',
  },

  '.line-number::before': {
    display: 'inline-block',
    width: '1rem',
    textAlign: 'right',
    marginRight: '16px',
    marginLeft: '-8px',
    color: 'rgb(99, 111, 136)',
    content: 'attr(line)',
  },
});
