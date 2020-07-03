import styled, { css } from 'styled-components';
import { StyledIconProps, StyledIcon } from '@styled-icons/styled-icon';

export interface IconProps extends StyledIconProps {
  hoverEffect?: boolean;
}

const HoverStyle = css`
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

const defaultSize = css`
  height: 24px;
  width: 24px;
`;

export const BaseStyle = ({ hoverEffect = false, size }: IconProps) => css`
  color: var(--text-muted-color);
  ${size && defaultSize};
  ${hoverEffect && HoverStyle}
`;

export const IconBase = (icon: StyledIcon): StyledIcon => styled(icon)<IconProps>`
  ${BaseStyle}
`;
