import { ToolboxCategory } from '../../types/ToolboxCategory';
import { ResponsiveGrid } from '../ui/container/responsiveGrid';
import { Header } from '../ui/content/header';
import { MarginSmall } from '../ui/margins/marginSmall';
import { Line, List, ListItem } from './toolBox.styles';

interface ToolBoxProps {
  categories: ToolboxCategory[];
}

export const ToolBox: React.FC<ToolBoxProps> = ({ categories }) => {
  return (
    <>
      <h2>Verktygslådan!</h2>
      <p>
        Jag har tidigare använt allt från PHP och Ruby on Rails för att bygga sajter. Nu för tiden är det däremot mest
        TypeScript för front- och backend som ligger närmst till hands i form av React och Node/Express.
      </p>
      <MarginSmall />
      <ResponsiveGrid gutter={10} itemWidth="175px">
        {categories.map(({ title, items }) => (
          <div key={title}>
            <Header bold as="h3">
              {title}
            </Header>
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
