import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const ItemHeader = styled.h4`
  font-weight: bold;
`;

export const Item = styled.div`
  cursor: pointer;
  border-radius: var(--border-radius-small);
  padding: var(--margin-small);
  transition: all 0.2s ease;
  &:hover {
    background: var(--bg-color-highlight);
    transform: translateY(-2px);
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    padding: var(--margin-small) var(--margin-large);
  }
`;
