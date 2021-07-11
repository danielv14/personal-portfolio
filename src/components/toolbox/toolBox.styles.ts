import styled from 'styled-components';

interface HeaderLineProps {
  width: string;
}

export const ListItem = styled.li`
  list-style: none;
`;

export const List = styled.ul`
  padding-inline-start: 0;
`;

export const Line = styled.div<HeaderLineProps>`
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  width: ${(props) => props.width};
  border-radius: var(--border-radius);
  height: 6px;
  margin-bottom: 6px;
`;
