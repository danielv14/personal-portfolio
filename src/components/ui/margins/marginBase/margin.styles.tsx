import styled, { css } from 'styled-components';
import { scaleSpacingToPx } from '../../../../theme/helpers/scaleHelpers';

export interface MarginComponentProps {
  size: number;
}

const styles = ({ size }: MarginComponentProps ) => css`
  display: flex;
  max-width: ${scaleSpacingToPx(size)};
  min-width: ${scaleSpacingToPx(size)};
  margin: ${scaleSpacingToPx(size)};
`;

export const MarginComponent = styled.div<MarginComponentProps>(styles);

MarginComponent.displayName = 'MarginComponent';
