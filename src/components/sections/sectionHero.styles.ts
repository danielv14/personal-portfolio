import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: inline-block;
  transform: skewY(-4deg);
  font-size: var(--font-size-h1);
`;

TitleWrapper.displayName = 'Title';

export const SubTitleWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

SubTitleWrapper.displayName = 'SubTitleWrapper';
