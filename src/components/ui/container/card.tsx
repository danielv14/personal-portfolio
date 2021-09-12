import { motion } from 'framer-motion';
import { styled } from 'theme';

export const Card = styled(motion.div, {
  borderRadius: '$default',
  background: '$backgroundColorSecondary',
  padding: '$small',
  boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.09)',
  transition: 'box-shadow 0.2s ease',
  '&:hover': {
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.09)',
  },
});

Card.displayName = 'Card';
