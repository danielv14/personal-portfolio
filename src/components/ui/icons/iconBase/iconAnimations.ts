import { MotionProps } from 'framer-motion';
import { IconAnimation } from '../../../../types/icon/iconAnimation';

const animationHover: MotionProps = {
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

const animationRotateLeft: MotionProps = {
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
  animate: {
    rotate: -360,
  },
};

const animationRotateRight: MotionProps = {
  ...animationRotateLeft,
  animate: {
    rotate: 360,
  },
};

export const iconAnimations: { [key in IconAnimation]: MotionProps } = {
  [IconAnimation.None]: {},
  [IconAnimation.Hover]: animationHover,
  [IconAnimation.RotateLeft]: animationRotateLeft,
  [IconAnimation.RotateRight]: animationRotateRight,
};
