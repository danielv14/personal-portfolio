import { styled } from 'theme';

export const ListItem = styled('li', {
  listStyle: 'none',
  margin: '$medium 0',
});

export const List = styled('ul', {
  paddingInlineStart: 0,
});

export const Line = styled('div', {
  background: '$backgroundGradient',
  borderRadius: '$default',
  height: '6px',
  marginBottom: '6px',
});
