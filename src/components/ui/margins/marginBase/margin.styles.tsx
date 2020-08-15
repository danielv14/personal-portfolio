import styled from 'styled-components';

interface MarginComponentProps {
  size: string;
}

const setSize = ({ size }: MarginComponentProps) => ({
  maxWidth: size,
  minWidth: size,
  margin: size,
});

export const MarginComponent = styled.div<MarginComponentProps>`
  ${setSize}
  display: flex;
`;

MarginComponent.displayName = 'MarginComponent';
