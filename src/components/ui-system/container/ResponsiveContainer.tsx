import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: var(--site-max-width);
  margin: 0 auto;
`;

const Margin = styled.div`
  margin: 0 var(--margin-large);
`;

export const ResponsiveContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Margin>{children}</Margin>
    </Container>
  );
};

ResponsiveContainer.displayName = 'ResponsiveContainer';
