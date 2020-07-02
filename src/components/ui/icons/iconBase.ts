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

export const BaseStyle = ({ hoverEffect = false }: IconProps) => css`
  width: 24px;
  height: 24px;
  color: var(--text-muted-color);
  ${hoverEffect ? HoverStyle : ''}
`;

export const IconBase = (icon: StyledIcon): StyledIcon => styled(icon)<IconProps>`
  ${BaseStyle}
`;
