import React from 'react';
import styled, { css } from 'styled-components';
import { scaleSpacingToPx } from '../../../theme/helpers/scaleHelpers';
interface GridProps {
  itemWidth: string;
  gutter: number;
}

const gridStyles = ({ gutter, itemWidth }: GridProps) => css`
  display: grid;
  grid-template-columns: ${`repeat(auto-fit, minmax(${itemWidth}, 1fr))`};
  grid-column-gap: ${scaleSpacingToPx(gutter)};
  grid-row-gap: ${scaleSpacingToPx(gutter)};
`;

const Grid = styled.div<GridProps>(gridStyles);

export const ResponsiveGrid: React.FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

ResponsiveGrid.displayName = 'ResponsiveGrid';
