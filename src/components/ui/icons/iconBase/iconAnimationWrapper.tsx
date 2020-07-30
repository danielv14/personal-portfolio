import { motion, MotionProps } from 'framer-motion';
import { iconAnimations } from './iconAnimations';
import { IconAnimation } from '../../../../types/icon/iconAnimation';

export interface IconAnimationWrapperProps {
  animation?: IconAnimation;
  customAnimation?: MotionProps;
}

export const IconAnimationWrapper: React.FC<IconAnimationWrapperProps> = ({
  animation = IconAnimation.None,
  customAnimation,
  children,
}) => {
  const iconAnimation = customAnimation ?? iconAnimations[animation];
  return <motion.div {...iconAnimation}>{children}</motion.div>;
};
IconAnimationWrapper.displayName = 'IconAnimationWrapper';
