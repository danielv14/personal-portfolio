import styled from 'styled-components';
import { Spacing } from '../../../types/theme/Spacing';
import { margins } from '../../../theme/parts/margins';

interface MarginProps {
  size: Spacing;
}

const MarginComponent = styled.div<{ size: string }>`
  max-width: ${(props) => props.size};
  min-width: ${(props) => props.size};
  margin: ${(props) => props.size};
  display: flex;
`;

MarginComponent.displayName = 'MarginComponent';

export const Margin: React.FC<MarginProps> = ({ size }) => <MarginComponent size={margins[size]} />;

Margin.displayName = 'Margin';
