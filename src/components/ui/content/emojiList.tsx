import React from 'react';
import { styled } from 'theme/theme.config';

interface EmojiListItemProps {
  emoji: string;
  children: React.ReactNode;
}

interface EmojiListProps {
  as: 'ul' | 'ol';
  children: React.ReactNode;
}

const StyledListItem = styled('li', {
  listStyle: 'none',
  paddingInlineStart: '0',

  '&::before': {
    content: 'attr(data-emoji)',
    paddingRight: '8px',
    fontSize: '1.2em',
  },
});

const EmojiListItem = ({ emoji, children }: EmojiListItemProps) => {
  return <StyledListItem data-emoji={emoji}>{children}</StyledListItem>;
};

export const EmojiList = ({ as: Component, children }: EmojiListProps) => {
  return <Component>{children}</Component>;
};

EmojiList.Item = EmojiListItem;
