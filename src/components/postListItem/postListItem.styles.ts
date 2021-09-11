import { motion } from 'framer-motion';
import { styled } from '../../theme';

export const Item = styled(motion.div, {
  cursor: 'pointer',
  borderRadius: '$small',
  transition: 'background-color 0.2s ease',
  hoverHighlight: true,
  padding: '$small',
  '@medium': {
    padding: '$small $large'
  }
});
