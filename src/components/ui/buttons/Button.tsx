import { styled } from 'theme';
import { MotionComponent } from '../motion/MotionComponent';
import { buttonAnimation } from './buttonAnimation';

const StyledButton = styled(MotionComponent, {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  borderRadius: '$rouded',
  boxShadow: '$button',
  transition: 'background 0.2s ease, box-shadow 0.2 ease',
  cursor: 'pointer',
  width: 'auto',
  display: 'inline-block',
  '&:hover': {
    boxShadow: '$buttonHover',
  },
  variants: {
    variant: {
      primary: {
        background: '$primary',
        '&:hover': {
          background: '$primaryDarken',
        },
      },
      gradient: {
        background: '$backgroundGradient',
        '&:hover': {
          background: '$backgroundGradintDarker',
        },
      },
    },

    size: {
      large: {
        padding: '14px 30px',
      },
      medium: {
        padding: '14px 20px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

StyledButton.displayName = 'StyledButton';

type ButtonProps = React.ComponentProps<typeof StyledButton>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton {...buttonAnimation} {...rest}>
    {children}
  </StyledButton>
);

Button.displayName = 'Button';
