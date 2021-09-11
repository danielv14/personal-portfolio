import { styled } from '../../theme';


export const ListItem = styled('li', {
  listStyle: 'none'
});

export const List = styled('ul', {
  paddingInlineStart: 0
});

export const Line = styled('div', {
  background: 'linear-gradient(45deg, $primary, $secondary)',
  borderRadius: '$default',
  height: '6px',
  marginBottom: '6px'
});
// export const Line = styled.div<HeaderLineProps>`
//   background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
//   width: ${(props) => props.width};
//   border-radius: var(--border-radius);
//   height: 6px;
//   margin-bottom: 6px;
// `;
