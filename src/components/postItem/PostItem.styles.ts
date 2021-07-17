import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../theme/helpers/mediaQueries';


export const Item = styled(motion.div)`
  cursor: pointer;
  border-radius: var(--border-radius-small);
  padding: var(--margin-small);
  transition: background-color 0.2s ease;
  &:hover {
    background: var(--bg-color-highlight);
  }
  ${media.medium`
    padding: var(--margin-small) var(--margin-large);
  `}
`;
