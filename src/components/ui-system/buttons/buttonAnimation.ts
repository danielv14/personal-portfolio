import { MotionProps } from 'framer-motion';

export const buttonAnimation: MotionProps = {
  whileHover: { y: -1 },
  whileTap: { y: 1 },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  },
};