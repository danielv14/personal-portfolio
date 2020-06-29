import styled from 'styled-components';
import { MarginSmall } from './ui/margins/marginSmall';
import { ResponsiveGrid } from './ui/container/responsiveGrid';

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
      <ResponsiveGrid gutter="10px" itemWidth="250px">
        <div>
          <h3>Nära till hands</h3>
          <Line width="115px" />
          <List as="ul">
            <ListItem>HTML5</ListItem>
            <ListItem>CSS och Preprocessors</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>React och Next.js</ListItem>
            <ListItem>Node</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Jest</ListItem>
          </List>
          <MarginSmall></MarginSmall>
        </div>
        <div>
          <h3>Använder gärna</h3>
          <Line width="115px" />
          <List as="ul">
            <ListItem>NoSQL med Firebase</ListItem>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>Sketch of Figma</ListItem>
          </List>
        </div>
      </ResponsiveGrid>
    </>
  );
};
