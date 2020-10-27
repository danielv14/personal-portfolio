import styled from 'styled-components';
import { scaleToPx } from '../../../../theme/helpers/scaleHelpers';

interface MarginComponentProps {
  size: number;
}

const setSize = ({ size }: MarginComponentProps) => ({
  maxWidth: scaleToPx(size),
  minWidth: scaleToPx(size),
  margin: scaleToPx(size),
});

export const MarginComponent = styled.div<MarginComponentProps>`
  ${setSize}
  display: flex;
`;

MarginComponent.displayName = 'MarginComponent';
