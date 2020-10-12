import { theme } from '../../../../theme/theme';
import { Spacing } from '../../../../types/theme/Spacing';

import { MarginComponent } from './margin.styles';

interface MarginProps {
  size: Spacing;
}

export const Margin: React.FC<MarginProps> = ({ size }) => <MarginComponent size={theme.layout.margin[size]} />;

Margin.displayName = 'Margin';
