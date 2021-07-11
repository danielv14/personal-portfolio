import styled, { css } from 'styled-components';
import { scaleSpacingToPx } from '../../../theme/helpers/scaleHelpers';

export interface MarginProps {
  size: number;
}

const styles = ({ size }: MarginProps ) => css`
  display: flex;
  max-width: ${scaleSpacingToPx(size)};
  min-width: ${scaleSpacingToPx(size)};
  margin: ${scaleSpacingToPx(size)};
`;

export const Margin = styled.div<MarginProps>(styles);

Margin.displayName = 'Margin';
