import styled, { css } from 'styled-components';
import { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon';
import { IconAnimationWrapperProps, IconAnimationWrapper } from './iconAnimationWrapper';

type IconProps = StyledIconProps;
export type IconComponentProps = IconAnimationWrapperProps & IconProps;

const defaultSize = css`
  height: 24px;
  width: 24px;
`;

const BaseStyle = ({ size }: IconProps) => css`
  color: var(--text-muted-color);
  ${!size && defaultSize};
`;

export const renderIcon = (Icon: StyledIcon, props: IconComponentProps): JSX.Element => {
  const { animation, ...rest } = props;
  if (animation) {
    return (
      <IconAnimationWrapper animation={animation}>
        <Icon {...rest} />
      </IconAnimationWrapper>
    )
  }
  return <Icon {...rest} />
}

export const IconBase = (icon: StyledIcon): StyledIcon => styled(icon)<IconProps>`
  ${BaseStyle}
`;
