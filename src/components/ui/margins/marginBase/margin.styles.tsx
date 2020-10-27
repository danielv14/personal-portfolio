import styled from 'styled-components';

interface MarginComponentProps {
  size: number;
}

const setSize = ({ size }: MarginComponentProps) => ({
  maxWidth: `${size}px`,
  minWidth: `${size}px`,
  margin: `${size}px`,
});

export const MarginComponent = styled.div<MarginComponentProps>`
  ${setSize}
  display: flex;
`;

MarginComponent.displayName = 'MarginComponent';
