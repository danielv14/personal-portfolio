import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

interface GridProps {
  itemWidth: string;
  gutter: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(auto-fit, minmax(${props.itemWidth}, 1fr))`};
  grid-column-gap: ${(props) => `${props.gutter}px`};
  grid-row-gap: ${(props) => `${props.gutter}px`};
`;

export const ResponsiveGrid: React.FC<GridProps> = ({ children, gutter, ...props }) => {
  const { spacings } = useTheme();
  return <Grid gutter={spacings[gutter]} {...props}>{children}</Grid>;
};

ResponsiveGrid.displayName = 'ResponsiveGrid';
