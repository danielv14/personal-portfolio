import styled, { css } from 'styled-components';

interface HeadingProps {
  bold?: boolean;
  muted?: boolean;
}

const styleBold = ({ bold }: HeadingProps) =>
  bold &&
  css`
    font-weight: bold;
    color: var(--heading-color);
  `;

const styleMuted = ({ muted }: HeadingProps) =>
  muted &&
  css`
    font-weight: 500;
    color: var(--text-muted-color);
  `;

export const Header = styled.h2(styleBold, styleMuted);

Header.displayName = 'Header';
