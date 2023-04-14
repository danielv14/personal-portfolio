import { Column } from 'ui/container/column';
import { Text } from 'ui/content/Text';
import { TextMuted } from 'ui/content/textMuted';
import { MotionComponentProps } from 'ui/motion/MotionComponent';
import { StyledItem } from './postListItem.styles';

interface PostListItemProps {
  title: string;
  summary: string;
  date?: string;
}

export const animation: MotionComponentProps = {
  whileHover: { y: -2, x: 1 },
  whileTap: {
    y: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 350,
    damping: 15,
  },
};

export const PostListItem: React.FC<PostListItemProps> = ({ title, summary, date }) => {
  return (
    <Column>
      <StyledItem {...animation}>
        <Text bold as="h4">
          {title}
        </Text>
        {date && <TextMuted>{date}</TextMuted>}
        <p>{summary}</p>
      </StyledItem>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
