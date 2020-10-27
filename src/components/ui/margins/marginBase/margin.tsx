import { useTheme } from '../../../../context/ThemeContext';
import { MarginComponent } from './margin.styles';

interface MarginProps {
  size: number;
}

export const Margin: React.FC<MarginProps> = ({ size }) => {
  const theme = useTheme();
  return (
    <MarginComponent size={theme.spacings[size]} />
  );
};

Margin.displayName = 'Margin';
