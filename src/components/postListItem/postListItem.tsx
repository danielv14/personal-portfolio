import React from 'react';
import { Column } from '../ui/container/column';
import { TextMuted } from '../ui/content/textMuted';
import { Item, ItemHeader } from './postListItem.styles';
import { MotionProps } from 'framer-motion';

interface PostListItemProps {
  title: string;
  summary: string;
  date?: string;
}

export const animation: MotionProps = {
  whileHover: { y: -2 },
  whileTap: {
    y: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 10,
  },
};

export const PostListItem: React.FC<PostListItemProps> = ({ title, summary, date }) => {
  return (
    <Column>
      <Item {...animation}>
        <ItemHeader>{title}</ItemHeader>
        {date && <TextMuted>{date}</TextMuted>}
        <p>{summary}</p>
      </Item>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
