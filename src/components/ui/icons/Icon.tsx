import { StyledIconProps } from '@styled-icons/styled-icon';
import { css } from 'theme';
import { IconVariant } from '../../../types/icon/icons';
import { IconAnimationWrapper, IconAnimationWrapperProps } from './iconAnimation/iconAnimationWrapper';
import { iconMap } from './iconMap';

interface IconProps {
  variant: IconVariant;
}
export type IconComponentProps = IconAnimationWrapperProps & StyledIconProps;

const baseStyle = css({ color: '$textMutedColor' });
const baseDimension = css({ height: '24px', widht: '24px' });

export const Icon: React.FC<IconProps & IconComponentProps> = (props) => {
  const { animation, customAnimation, variant, size, ...rest } = props;
  const Icon = iconMap[variant];
  return (
    <IconAnimationWrapper animation={animation} customAnimation={customAnimation}>
      <Icon className={`${baseStyle()} ${!size ? baseDimension() : ''}`} {...rest} />
    </IconAnimationWrapper>
  );
};

Icon.displayName = 'Icon';
