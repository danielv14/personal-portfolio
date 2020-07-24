import { MotionProps } from 'framer-motion';

export const animationSpring: MotionProps = {
  whileHover: { y: -4 },
  whileTap: {
    y: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 14,
  },
};
