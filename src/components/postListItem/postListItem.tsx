import React from 'react';
import { Column } from '../ui/container/column';
import { TextMuted } from '../ui/content/textMuted';
import { Item, ItemHeader } from './postListItem.styles';

interface PostListItemProps {
  title: string;
  summary: string;
  date?: string;
}

export const PostListItem: React.FC<PostListItemProps> = ({ title, summary, date }) => {
  return (
    <Column>
      <Item>
        <ItemHeader>{title}</ItemHeader>
        {date && <TextMuted>{date}</TextMuted>}
        <p>{summary}</p>
      </Item>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
