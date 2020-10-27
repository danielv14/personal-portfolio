import { useTheme } from '../../../../context/ThemeContext';
import { Spacing } from '../../../../types/theme/Spacing';
import { MarginComponent } from './margin.styles';

interface MarginProps {
  size: Spacing;
}

export const Margin: React.FC<MarginProps> = ({ size }) => {
  const theme = useTheme();
  return (
    <MarginComponent size={theme.spacings[size]} />
  );
};

Margin.displayName = 'Margin';
