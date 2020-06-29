import React from 'react';
import styled from 'styled-components';
import { Card } from './ui/container/card';
import { Column } from './ui/container/column';
import { Fill } from './ui/container/fill';
import { Row } from './ui/container/row';
import { Tag } from './ui/content/tag';
import { MarginSmall } from './ui/margins/marginSmall';

const CardLink = styled.a`
  color: inherit;
  font-weight: inherit;
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
      <CardLink href={urlSource}>
        <Row>
          <MarginSmall />
          <Column>
            <MarginSmall />
            <h3>{title}</h3>
            <MarginSmall />
            <p>{summary}</p>
            <Fill></Fill>
            <Row>
              {tags && tags.map((tag, index) => <Tag key={tag + index}>{tag}</Tag>)}
              <Fill></Fill>
              {url && <a href={url}>Visa</a>}
            </Row>
            <MarginSmall />
          </Column>
          <MarginSmall />
        </Row>
      </CardLink>
    </Card>
  );
};

CardProject.displayName = 'CardProject';
