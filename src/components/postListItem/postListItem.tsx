import { MotionProps } from 'framer-motion';
import React from 'react';
import { Column } from '../ui-system/container/Column';
import { Header } from '../ui-system/typography/Header';
import { TextMuted } from '../ui-system/typography/TextMuted';
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
        <Header bold as="h4">
          {title}
        </Header>
        {date && <TextMuted>{date}</TextMuted>}
        <p>{summary}</p>
      </Item>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
