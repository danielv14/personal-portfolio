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

const Item = styled.div`
  cursor: pointer;
  border-radius: var(--border-radius-small);
  transition: all 0.2s ease;
  @media (min-width: ${theme.breakpoints.medium}) {
    padding: var(--margin-small) var(--margin-large);
    &:hover {
      background: var(--primary-color-lighten);
    }
  }
  @media (prefers-color-scheme: dark) {
    &:hover {
      background: var(--bg-color-secondary);
    }
  }
`;

export const PostListItem: React.FC<PostListItemProps> = ({ title, summary, date }) => {
  return (
    <Column>
      <Item>
        <h4>{title}</h4>
        {date && <TextMuted>{formatDate(date)}</TextMuted>}
        <MarginSmall />
        <p>{summary}</p>
      </Item>
    </Column>
  );
};

PostListItem.displayName = 'PostListItem';
