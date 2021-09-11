import { styled } from '../../theme';

export const TitleWrapper = styled('div', {
  display: 'inline-block',
  transform: 'skewY(-4deg)',
  fontSize: '$7'
});
export const SubTitleWrapper = styled('div', {
  maxWidth: '600px',
  margin: '0 auto'
});

TitleWrapper.displayName = 'Title';

// export const SubTitleWrapper = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
// `;

SubTitleWrapper.displayName = 'SubTitleWrapper';
