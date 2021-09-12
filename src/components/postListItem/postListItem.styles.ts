import { MotionComponent } from 'components/ui/motion/MotionComponent';
import { styled } from 'theme';

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
