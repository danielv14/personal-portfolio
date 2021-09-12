import { MotionComponentProps } from 'components/ui/motion/MotionComponent';
import React from 'react';
import { Column } from '../ui/container/column';
import { Header } from '../ui/content/header';
import { TextMuted } from '../ui/content/textMuted';
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
        <Header bold as="h4">
          {title}
        </Header>
        {date && <TextMuted>{date}</TextMuted>}
        <p>{summary}</p>
      </StyledItem>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
