import styled from 'styled-components';
import { MarginSmall } from './ui/margins/marginSmall';
import { ResponsiveGrid } from './ui/container/responsiveGrid';
import { toolBox } from '../data/toolbox';

interface HeaderLineProps {
  width: string;
}

const ListItem = styled.li`
  list-style: none;
`;

const List = styled.ul`
  padding-inline-start: 0;
`;

const Line = styled.div<HeaderLineProps>`
  background: var(--primary-color);
  width: ${(props) => props.width};
  border-radius: var(--border-radius);
  height: 6px;
  margin-bottom: 6px;
`;

export const ToolBox = () => {
  return (
    <>
      <h2>Min verktygslåda</h2>
      <p>
        Jag har tidigare använt allt från PHP och Ruby on Rails för att bygga sajter. Nu för tiden är det mest
        TypeScript för front- och backend som ligger närmst till hands i form av React och Node.
      </p>
      <MarginSmall></MarginSmall>
      <ResponsiveGrid gutter="10px" itemWidth="150px">
        {toolBox.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <Line width="115px" />
            <List as="ul">
              {items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
            <MarginSmall></MarginSmall>
          </div>
        ))}
      </ResponsiveGrid>
    </>
  );
};
