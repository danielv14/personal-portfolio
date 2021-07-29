import React from 'react';
import { styled } from '../../../theme';

const SiteWidthContainer = styled('div', {
  width: '100%',
  maxWidth: '$siteWidth',
  margin: '0 auto'
});

const Margin = styled('div', {
  margin: '0 $large',
});

export const ResponsiveContainer: React.FC = ({ children }) => {
  return (
    <SiteWidthContainer>
      <Margin>{children}</Margin>
    </SiteWidthContainer>
  );
};

ResponsiveContainer.displayName = 'ResponsiveContainer';
