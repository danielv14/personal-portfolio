import styled from 'styled-components';

export const Card = styled.div`
  border-radius: var(--border-radius);
  background: var(--bg-color);
  padding: var(--margin-small);
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.09);
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
  }
  @media (prefers-color-scheme: dark) {
    background: var(--bg-color-secondary);
  }
`;

Card.displayName = 'Card';
