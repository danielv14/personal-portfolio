import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { buttonAnimation } from './buttonAnimation';

const styles = () => css`
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

export const ButtonPrimary = styled(motion.div).attrs({ ...buttonAnimation })(styles);

ButtonPrimary.displayName = 'ButtonPrimary';
