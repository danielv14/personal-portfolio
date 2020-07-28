import React from 'react';
import { Card } from '../ui/container/card';
import { Column } from '../ui/container/column';
import { Fill } from '../ui/container/fill';
import { Row } from '../ui/container/row';
import { Tag } from '../ui/content/tag';
import { MarginSmall } from '../ui/margins/marginSmall';
import { UnstyledLink } from '../ui/content/unstyledLink';
import { animationSpring } from './animations';
import { CardHeader } from './shared.styles';

interface CardProjectProps {
  title: string;
  summary: string;
  tags?: string[];
  urlSource: string;
  url?: string;
}

export const CardProject: React.FC<CardProjectProps> = ({ title, summary, tags, urlSource, url }) => {
  return (
    <Card {...animationSpring}>
      <Row style={{ height: '100%' }}>
        <MarginSmall />
        <Column>
          <UnstyledLink href={urlSource}>
            <MarginSmall />
            <CardHeader>{title}</CardHeader>
            <MarginSmall />
            <p>{summary}</p>
          </UnstyledLink>
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
    </Card>
  );
};

CardProject.displayName = 'CardProject';
