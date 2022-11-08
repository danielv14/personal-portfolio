import { styled } from 'theme';

const BlockQuote = styled('blockquote', {
  margin: '1rem auto',
  maxWidth: '97%',
  padding: '1rem ',
  background: '$backgroundColorHighlight',
  borderRadius: '0.3rem',
  borderBottomLeftRadius: '0',
  borderLeft: '1px solid $primary',
  borderLeftWidth: '8px',
  position: 'relative',
  '& p': {
    marginBottom: 0,
  },
  '&::before': {
    content: '💡',
    position: 'absolute',
    top: '-12px',
    left: '-19px',
    background: '$backgroundGradient',
    padding: '4px 6px',
    borderRadius: '$rouded',
  },
});

export const customQuoteComponent: React.FC = ({ children }) => {
  return <BlockQuote>{children}</BlockQuote>;
};
