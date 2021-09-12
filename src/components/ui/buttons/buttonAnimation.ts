import { MotionComponentProps } from '../motion/MotionComponent';

export const buttonAnimation: MotionComponentProps = {
  whileHover: { y: -1 },
  whileTap: { y: 1 },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  },
};
