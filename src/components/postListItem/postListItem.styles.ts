import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { motion } from 'framer-motion';

export const ItemHeader = styled.h4`
  font-weight: bold;
`;

export const Item = styled(motion.div)`
  cursor: pointer;
  border-radius: var(--border-radius-small);
  padding: var(--margin-small);
  transition: background-color 0.2s ease;
  &:hover {
    background: var(--bg-color-highlight);
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    padding: var(--margin-small) var(--margin-large);
  }
`;
