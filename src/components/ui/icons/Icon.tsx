import { IconVariant } from '../../../types/icon/icons';
import { IconAnimationWrapper, IconAnimationWrapperProps } from './iconAnimation/iconAnimationWrapper';
import { iconVariants, SVGIconProps } from './iconVariants/IconVariants';

interface IconVariantProps {
  variant: IconVariant;
}

export type IconProps = IconAnimationWrapperProps & SVGIconProps;

export const Icon: React.FC<IconVariantProps & IconProps> = (props) => {
  const { animation, customAnimation, variant, ...rest } = props;
  const Icon = iconVariants[variant];
  return (
    <IconAnimationWrapper animation={animation} customAnimation={customAnimation}>
      <Icon {...rest} />
    </IconAnimationWrapper>
  );
};

Icon.displayName = 'Icon';
