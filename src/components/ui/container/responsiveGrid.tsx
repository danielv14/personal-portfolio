import React from 'react';
import { styled } from 'theme';
interface GridProps {
  itemWidth: string;
  gutter: number;
}

const Grid = styled('div', {
  display: 'grid',
});

export const ResponsiveGrid: React.FC<GridProps> = ({ children, itemWidth, gutter }) => {
  return (
    <Grid
      css={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${itemWidth}, 1fr))`,
        gridColumnGap: `${gutter}px`,
        gridRowGap: `${gutter}px`,
      }}
    >
      {children}
    </Grid>
  );
};

ResponsiveGrid.displayName = 'ResponsiveGrid';
