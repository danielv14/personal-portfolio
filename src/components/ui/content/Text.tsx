import { styled } from 'theme';

export const Text = styled('p', {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    muted: {
      true: {
        fontWeight: '400',
        color: '$textMutedColor',
      },
    },
    gradient: {
      true: {
        backgroundImage: '$backgroundGradient',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
    inline: {
      true: {
        display: 'inline',
      },
    },
    inlineBlock: {
      true: {
        display: 'inline-block',
      },
    },
  },
});

Text.displayName = 'Text';
