import { MotionComponentProps } from 'ui/motion/MotionComponent';

export const animationSpring: MotionComponentProps = {
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
