import React from 'react';
import { Card } from './ui/container/card';
import { Row } from './ui/container/row';
import { MarginSmall } from './ui/margins/marginSmall';
import { Column } from './ui/container/column';
import { ThemedParagraph } from './ui/content/themedContent';
import { Fill } from './ui/container/fill';
import { Tag } from './ui/content/tag';
import styled from 'styled-components';

const CardLink = styled.a`
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

interface CardProjectProps {
  title: string;
  summary: string;
  tags?: string[];
  urlSource: string;
  url?: string;
}

export const CardProject: React.FC<CardProjectProps> = ({ title, summary, tags, urlSource, url }) => {
  return (
    <Card>
      <Row>
        <MarginSmall />
        <Column>
          <MarginSmall />
          <CardLink href={urlSource}>
            <h3>{title}</h3>
          </CardLink>
          <MarginSmall />
          <ThemedParagraph>{summary}</ThemedParagraph>
          <Fill></Fill>
          <Row>
            {tags &&
              tags.map((tag, index) => (
                <>
                  <Tag key={tag + index}>{tag}</Tag>
                </>
              ))}
            <Fill></Fill>
            {url && <a href={url}>Visa</a>}
          </Row>
          <MarginSmall />
        </Column>
        <MarginSmall />
      </Row>
    </Card>
  );
};

CardProject.displayName = 'CardProject';
