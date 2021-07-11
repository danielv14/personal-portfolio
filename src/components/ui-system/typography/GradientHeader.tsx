import styled from 'styled-components';

export const GradientText = styled.h2`
  display: inline-block;
  background-image: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
