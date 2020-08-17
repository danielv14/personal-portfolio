import { Spacing } from '../../../../types/theme/Spacing';
import { margins } from '../../../../theme/parts/margins';
import { MarginComponent } from './margin.styles';

interface MarginProps {
  size: Spacing;
}

export const Margin: React.FC<MarginProps> = ({ size }) => <MarginComponent size={margins[size]} />;

Margin.displayName = 'Margin';
