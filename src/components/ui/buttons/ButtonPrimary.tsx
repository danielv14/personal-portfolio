import { motion } from 'framer-motion';
import { styled } from 'theme';
import { buttonAnimation } from './buttonAnimation';

const StyledButton = styled(motion.div, {
  background: '$primary',
  color: 'white',
  padding: '16px 20px',
  textAlign: 'center',
  fontWeight: 'bold',
  borderRadius: '$default',
  boxShadow: '$button',
  transition: 'background-color 0.2s ease, box-shadow 0.2 ease',
  cursor: 'pointer',
  width: 'auto',
  display: 'inline-block',
  '&:hover': {
    background: '$primaryDarken',
    boxShadow: '$buttonHover',
  },
});

type ButtonPrimaryProps = React.ComponentProps<typeof StyledButton>;

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, ...rest }) => (
  <StyledButton {...buttonAnimation} {...rest}>
    {children}
  </StyledButton>
);

ButtonPrimary.displayName = 'ButtonPrimary';
