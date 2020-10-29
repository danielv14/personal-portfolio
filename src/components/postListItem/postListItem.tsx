import { MotionProps } from 'framer-motion';
import React from 'react';
import { Column } from '../ui/container/column';
import { Heading } from '../ui/content/heading';
import { TextMuted } from '../ui/content/textMuted';
import { Item } from './postListItem.styles';

interface PostListItemProps {
  title: string;
  summary: string;
  date?: string;
}

export const animation: MotionProps = {
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
      <Item {...animation}>
        <Heading bold as="h4">{title}</Heading>
        {date && <TextMuted>{date}</TextMuted>}
        <p>{summary}</p>
      </Item>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
