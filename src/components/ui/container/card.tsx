import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  border-radius: var(--border-radius);
  background: var(--bg-color-secondary);
  padding: var(--margin-small);
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.09);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.09);
  }
`;

Card.displayName = 'Card';
