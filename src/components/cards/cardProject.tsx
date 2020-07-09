import React from 'react';
import { Card } from '../ui/container/card';
import { Column } from '../ui/container/column';
import { Fill } from '../ui/container/fill';
import { Row } from '../ui/container/row';
import { Tag } from '../ui/content/tag';
import { MarginSmall } from '../ui/margins/marginSmall';
import { UnstyledLink } from '../ui/content/unstyledLink';

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
      <UnstyledLink href={urlSource}>
        <Row style={{ height: '100%' }}>
          <MarginSmall />
          <Column>
            <MarginSmall />
            <h3>{title}</h3>
            <MarginSmall />
            <p>{summary}</p>
            <Fill />
            <Row>
              {tags && tags.map((tag, index) => <Tag key={tag + index}>{tag}</Tag>)}
              <Fill />
              {url && <a href={url}>Visa</a>}
            </Row>
            <MarginSmall />
          </Column>
          <MarginSmall />
        </Row>
      </UnstyledLink>
    </Card>
  );
};

CardProject.displayName = 'CardProject';
