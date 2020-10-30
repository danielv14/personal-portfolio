import React from 'react';
import { Card } from '../../ui/container/card';
import { Column } from '../../ui/container/column';
import { Fill } from '../../ui/container/fill';
import { Row } from '../../ui/container/row';
import { Header } from '../../ui/content/header';
import { Tag } from '../../ui/content/tag';
import { UnstyledLink } from '../../ui/content/unstyledLink';
import { MarginSmall } from '../../ui/margins/marginSmall';
import { animationSpring } from '../animations';

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
            <Header as="h3" bold>
              {title}
            </Header>
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
