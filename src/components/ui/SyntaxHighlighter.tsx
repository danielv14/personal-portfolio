import { styled } from 'theme';

export const SyntaxHighlighter = styled('div', {
  $$tokenBackground: '#2e3440',
  $$tokenBackgroundHighlight: '#3b414ccc',
  $$tokenCommentColor: '#636f88',
  $$tokenRegexColor: '#ebcb8b',
  $$tokenPropertyColor: '#81a1c1',
  $$tokenNumberColor: '#b48ead',
  $$tokenSelectorColor: '#a3be8c',
  $$tokenFunctionColor: '#88c0d0',
  $$tokenBaseColor: '#f8f8f2',

  'code[class*="language-"], pre[class*="language-"]': {
    color: '$$tokenBaseColor',
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
    background: '$$tokenBackground',
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '01.em',
    borderRadius: '$small',
    whiteSpace: 'normal',
  },
  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '$$tokenCommentColor',
  },
  '.token.punctuation': {
    color: '$$tokenPropertyColor',
  },
  '.namespace': {
    opacity: 0.7,
  },
  '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
    color: '$$tokenPropertyColor',
  },
  '.token.number': {
    color: '$$tokenNumberColor',
  },
  '.token.boolean': {
    color: '$$tokenPropertyColor',
  },
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '$$tokenSelectorColor',
  },
  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
    color: '$$tokenPropertyColor',
  },
  '.token.atrule, .token.attr-value, .token.function, .token.class-name': {
    color: '$$tokenFunctionColor',
  },
  '.token.keyword': {
    color: '$$tokenPropertyColor',
  },

  '.token.regex, .token.important': {
    color: '$$tokenRegexColor',
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

  '.rehype-code-title': {
    maxWidth: '100%',
    overflowY: 'hidden',
    fontFamily: '$mono',
    marginBottom: '-0.8rem',
    padding: '0.7em 1em 0.5em 1em',
    background: '$$tokenBackground',
    textAligh: 'left',
    fontWeight: 400,
    color: '$$tokenCommentColor',
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
    background: '$$tokenBackgroundHighlight',
    display: 'block',
    marginLeft: '-20px',
    paddingLeft: '20px',
    marginRight: '-20px',
    paddingRight: '20px',
  },

  '.line-number::before': {
    display: 'inline-block',
    width: '1rem',
    textAlign: 'right',
    marginRight: '16px',
    marginLeft: '-8px',
    color: '$$tokenCommentColor',
    content: 'attr(line)',
  },
});
