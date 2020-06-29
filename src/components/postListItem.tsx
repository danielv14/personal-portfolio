import React from 'react';
import { Column } from './ui/container/column';
import { MarginSmall } from './ui/margins/marginSmall';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import { TextMuted } from './ui/content/textMuted';
import { formatDate } from '../utils/formatDate';

interface PostListItemProps {
  title: string;
  summary: string;
  date?: string;
}

const ItemHeader = styled.h4`
  font-weight: bold;
`;

const Item = styled.div`
  cursor: pointer;
  border-radius: var(--border-radius-small);
  transition: all 0.2s ease;
  &:hover {
    background: var(--bg-color-highlight);
  }
  @media (min-width: ${theme.breakpoints.medium}) {
    padding: var(--margin-small) var(--margin-large);
  }
`;

export const PostListItem: React.FC<PostListItemProps> = ({ title, summary, date }) => {
  return (
    <Column>
      <Item>
        <ItemHeader>{title}</ItemHeader>
        {date && <TextMuted>{formatDate(date)}</TextMuted>}
        <MarginSmall />
        <p>{summary}</p>
      </Item>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
