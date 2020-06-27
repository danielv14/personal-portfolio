import styled from 'styled-components';

export const ThemedParagraph = styled.p`
  color: var(--text-color);
  @media (prefers-color-scheme: dark) {
    color: var(--text-muted-color);
  }
`;
