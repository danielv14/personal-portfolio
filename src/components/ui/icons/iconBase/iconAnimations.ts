import { MotionProps } from "framer-motion";
import { IconAnimation } from "../../../../types/icon/iconAnimation";

const hoverAnimation: MotionProps = {
  whileHover: { y: -2 },
  whileTap: {
    y: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 350,
    damping: 10,
  },
};

const rotateLeftAnimation: MotionProps = {
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 200
  },
  animate: {
    rotate: -360
  }
}

const rotateRightAnimation: MotionProps = {
  ...rotateLeftAnimation,
  animate: {
    rotate: 360
  }
}

export const iconAnimations: { [key in IconAnimation]: MotionProps } = {
  [IconAnimation.None]: {},
  [IconAnimation.Hover]: hoverAnimation,
  [IconAnimation.RotateLeft]: rotateLeftAnimation,
  [IconAnimation.RotateRight]: rotateRightAnimation
}