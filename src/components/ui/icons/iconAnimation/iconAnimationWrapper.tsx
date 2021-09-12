import { MotionComponent, MotionComponentProps } from 'components/ui/motion/MotionComponent';
import { IconAnimation } from '../../../../types/icon/iconAnimation';
import { iconAnimations } from './iconAnimations';

export interface IconAnimationWrapperProps {
  animation?: IconAnimation;
  customAnimation?: MotionComponentProps;
}

export const IconAnimationWrapper: React.FC<IconAnimationWrapperProps> = ({
  animation = 'none',
  customAnimation,
  children,
}) => {
  const iconAnimation = customAnimation ?? iconAnimations[animation];
  return <MotionComponent {...iconAnimation}>{children}</MotionComponent>;
};
IconAnimationWrapper.displayName = 'IconAnimationWrapper';
