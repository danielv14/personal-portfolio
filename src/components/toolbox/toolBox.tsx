import { ToolboxCategory } from 'types/ToolboxCategory';
import { ResponsiveGrid } from 'ui/container/responsiveGrid';
import { Text } from 'ui/content/Text';
import { MarginSmall } from 'ui/margins/marginSmall';
import { Line, List, ListItem } from './toolBox.styles';

interface ToolBoxProps {
  categories: ToolboxCategory[];
}

export const ToolBox: React.FC<ToolBoxProps> = ({ categories }) => {
  return (
    <>
      <h2>Verktygslådan!</h2>
      <Text as="h4" muted>
        Jag har tidigare använt allt från PHP och Ruby on Rails för att bygga sajter. Nu för tiden är det däremot mest
        TypeScript för front- och backend som ligger närmst till hands i form av React och Node/Express.
      </Text>
      <MarginSmall />
      <ResponsiveGrid gutter={10} itemWidth="175px">
        {categories.map(({ title, items }) => (
          <div key={title}>
            <Text bold as="h3">
              {title}
            </Text>
            <Line css={{ width: '115px' }} />
            <List>
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
