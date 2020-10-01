import { MarginSmall } from '../ui/margins/marginSmall';
import { ResponsiveGrid } from '../ui/container/responsiveGrid';
import { ToolboxCategory } from '../../types/ToolboxCategory';
import { Line, ListItem, List } from './toolBox.styles';

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
      <ResponsiveGrid gutter="10px" itemWidth="175px">
        {categories.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <Line width="115px" />
            <List as="ul">
              {items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
            <MarginSmall />
          </div>
        ))}
      </ResponsiveGrid>
    </>
  );
};

ToolBox.displayName = 'ToolBox';
