import { motion, MotionProps } from 'framer-motion';
import { IconAnimation } from '../../../../types/icon/iconAnimation';
import { iconAnimations } from './iconAnimations';

export interface IconAnimationWrapperProps {
  animation?: IconAnimation;
  customAnimation?: MotionProps;
}

export const IconAnimationWrapper: React.FC<IconAnimationWrapperProps> = ({
  animation = 'none',
  customAnimation,
  children,
}) => {
  const iconAnimation = customAnimation ?? iconAnimations[animation];
  return <motion.div {...iconAnimation}>{children}</motion.div>;
};
IconAnimationWrapper.displayName = 'IconAnimationWrapper';
