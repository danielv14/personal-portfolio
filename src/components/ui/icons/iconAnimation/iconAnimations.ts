import { MotionComponentProps } from 'components/ui/motion/MotionComponent';
import { IconAnimation } from '../../../../types/icon/iconAnimation';

const animationHover: MotionComponentProps = {
  whileHover: { y: -2 },
  whileTap: {
    y: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 10,
  },
};

const animationRotateLeft: MotionComponentProps = {
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
  animate: {
    rotate: -360,
  },
};

const animationRotateRight: MotionComponentProps = {
  ...animationRotateLeft,
  animate: {
    rotate: 360,
  },
};

export const iconAnimations: Record<IconAnimation, MotionComponentProps> = {
  none: {},
  hover: animationHover,
  'rotate-left': animationRotateLeft,
  'rotate-right': animationRotateRight,
};
