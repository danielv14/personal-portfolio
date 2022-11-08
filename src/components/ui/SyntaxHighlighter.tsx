import color from 'color';
import { styled } from 'theme';

const background = '#2E3440';
const highlight = color(background).lighten(0.3).hex();

export const SyntaxHighlighter = styled('div', {
  $$tokenBackground: background,
  $$tokenBackgroundHighlight: highlight,
  $$tokenCommentColor: '#636f88',
  $$tokenRegexColor: '#ebcb8b',
  $$tokenPropertyColor: '#81A1C1',
  $$tokenNumberColor: '#B48EAD',
  $$tokenSelectorColor: 'rgb(199, 146, 234)',
  $$tokenBooleanColor: '$$tokenPropertyColor',
  $$tokenPunctuationColor: '#81A1C1',
  $$tokenFunctionColor: '#88C0D0',
  $$tokenStringColor: '#A3BE8C',
  $$tokenOperator: '#81A1C1',
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
    color: '$$tokenPunctuationColor',
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
    color: '$$tokenBooleanColor',
  },
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '$$tokenStringColor',
  },
  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
    color: '$$tokenOperator',
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
    minWidth: '97%' /* 2 */,
  },

  '.highlight-line': {
    background: '$$tokenBackgroundHighlight',
    display: 'block',
    marginLeft: '-30px',
    paddingLeft: '30px',
    marginRight: '-30px',
    paddingRight: '30px',
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
