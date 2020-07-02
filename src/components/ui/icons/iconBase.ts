import styled, { css } from 'styled-components';

export interface IconProps {
  hoverEffect?: boolean;
  onClick?: () => void;
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

export const IconBase = (icon: any) => styled(icon)<IconProps>`
  ${BaseStyle}
`;
