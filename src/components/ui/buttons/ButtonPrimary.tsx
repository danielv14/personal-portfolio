import styled from 'styled-components';
import { motion, MotionProps } from 'framer-motion';

const animation: MotionProps = {
  whileHover: { y: -1 },
  whileTap: { y: 2 },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  },
};

export const ButtonPrimary = styled(motion.div).attrs({ ...animation })`
  background: var(--primary-color);
  color: white;
  padding: 16px 20px;
  text-align: center;
  font-weight: bold;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-button);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  width: auto;
  display: inline-block;
  &:hover {
    background: var(--primary-color-darken);
    box-shadow: var(--box-shadow-button-hover);
  }
`;

ButtonPrimary.displayName = 'ButtonPrimary';
