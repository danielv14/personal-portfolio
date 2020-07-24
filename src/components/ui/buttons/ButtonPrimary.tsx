import styled from 'styled-components';

export const ButtonPrimary = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 16px 20px;
  text-align: center;
  font-weight: bold;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-button);
  transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
  width: auto;
  display: inline-block;
  &:hover {
    transform: translateY(-1px);
    background: var(--primary-color-darken);
    box-shadow: var(--box-shadow-button-hover);
  }
`;

ButtonPrimary.displayName = 'ButtonPrimary';
