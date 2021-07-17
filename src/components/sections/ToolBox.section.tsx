import { ToolboxCategory } from '../../types/ToolboxCategory';
import { ResponsiveGridContainer } from '../ui-system/container/ResponsiveGridContainer';
import { MarginSmall } from '../ui-system/margins/MarginSmall';
import { Header } from '../ui-system/typography/Header';
import { Line, List, ListItem } from './ToolBox.section.styles';

interface ToolBoxProps {
  categories: ToolboxCategory[];
}

export const ToolBox: React.FC<ToolBoxProps> = ({ categories }) => {
  return (
    <>
      <h2>Min verktygslåda</h2>
      <p>
        Jag har tidigare använt allt från PHP och Ruby on Rails för att bygga sajter. Nu för tiden är det dock mest
        TypeScript för front- och backend som ligger närmst till hands i form av React och Node.
      </p>
      <MarginSmall />
      <ResponsiveGridContainer gutter={1} itemWidth="175px">
        {categories.map(({ title, items }) => (
          <div key={title}>
            <Header bold as="h3">
              {title}
            </Header>
            <Line width="115px" />
            <List as="ul">
              {items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
            <MarginSmall />
          </div>
        ))}
      </ResponsiveGridContainer>
    </>
  );
};

ToolBox.displayName = 'ToolBox';
