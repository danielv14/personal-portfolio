import { styled } from 'theme';

const BlockQuote = styled('blockquote', {
  margin: '1rem auto',
  maxWidth: '97%',
  minWidth: '97%',
  padding: '1rem ',
  background: '$backgroundColorHighlight',
  borderRadius: '0.3rem',
  position: 'relative',
  '& p': {
    marginBottom: 0,
  },
  '&::before': {
    content: '💡',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '-14px',
    left: '-4px',
    width: '25px',
    height: '25px',
    borderRadius: '14.5px',
    background: '$backgroundGradient',
    padding: '2px',
  },
});

export const customQuoteComponent: React.FC = ({ children }) => {
  return <BlockQuote>{children}</BlockQuote>;
};
