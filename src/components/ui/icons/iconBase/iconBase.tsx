import styled, { css } from 'styled-components';
import { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon';
import { IconAnimationWrapperProps, IconAnimationWrapper } from './iconAnimationWrapper';

type IconProps = StyledIconProps;
export type IconComponentProps = IconAnimationWrapperProps & IconProps;

const defaultSize = css`
  height: 24px;
  width: 24px;
`;

const iconBaseStyles = ({ size }: IconProps) => css`
  color: var(--text-muted-color);
  ${!size && defaultSize};
`;

export const renderIcon = (Icon: StyledIcon, props: IconComponentProps): JSX.Element => {
  const { animation, customAnimation, ...rest } = props;
  return (
    <IconAnimationWrapper animation={animation} customAnimation={customAnimation}>
      <Icon {...rest} />
    </IconAnimationWrapper>
  );
};

export const IconBase = (icon: StyledIcon): StyledIcon => styled(icon)<IconProps>(iconBaseStyles);
