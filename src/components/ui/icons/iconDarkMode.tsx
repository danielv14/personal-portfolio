import { Sunset } from '@styled-icons/feather';
import styled from 'styled-components';
import { BaseStyle, IconProps } from './iconBase';

export const IconDarkMode = styled(Sunset)<IconProps>`
  ${BaseStyle}
`;

IconDarkMode.displayName = 'IconDarkMode';
