import { styled } from '../../../theme';

export const GradientText = styled('h2', {
  display: 'inline-block',
  backgroundImage: 'linear-gradient(45deg, $primary, $secondary)',
  backgroundSize: '100%',
  backgroundRepeat: 'repeat',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

