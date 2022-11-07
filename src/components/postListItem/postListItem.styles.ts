import { styled } from 'theme';
import { MotionComponent } from 'ui/motion/MotionComponent';

export const StyledItem = styled(MotionComponent, {
  cursor: 'pointer',
  borderRadius: '$small',
  transition: 'background-color 0.2s ease',
  hoverHighlight: true,
  padding: '$small',
  '&:hover': {
    backgroundColor: '$backgroundColorHighlight',
  },
  '@medium': {
    padding: '$small $large',
  },
});
