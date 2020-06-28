import styled from 'styled-components';

export const ButtonPrimary = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 16px 20px;
  text-align: center;
  font-weight: bold;
  border-radius: var(--border-radius);
  box-shadow: 0px 4px 7px rgba(102, 145, 255, 0.35);
  transition: all 0.15s ease;
  cursor: pointer;
  width: auto;
  display: inline-block;
  &:hover {
    transform: translateY(-1px);
    background: var(--primary-color-darken);
    box-shadow: 0px 4px 10px rgba(102, 145, 255, 0.35);
  }
`;

ButtonPrimary.displayName = 'ButtonPrimary';
