import React from 'react';
import styled from 'styled-components';

interface GridProps {
  itemWidth: string;
  gutter: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(auto-fit, minmax(${props.itemWidth}, 1fr))`};
  column-gap: ${(props) => props.gutter};
`;

export const ResponsiveGrid: React.FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

ResponsiveGrid.displayName = 'ResponsiveGrid';
