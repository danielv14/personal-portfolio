import React from 'react';
import { Card } from '../../ui/card/Card';
import { Column } from '../../ui/container/Column';
import { Fill } from '../../ui/container/Fill';
import { Row } from '../../ui/container/Row';
import { UnstyledLink } from '../../ui/content/UnstyledLink';
import { MarginSmall } from '../../ui/margins/MarginSmall';
import { Header } from '../../ui/typography/Header';
import { animationSpring } from '../animations';

interface CardProjectProps {
  title: string;
  summary: string;
  urlSource: string;
  url?: string;
}

export const CardProject: React.FC<CardProjectProps> = ({ title, summary, urlSource, url }) => {
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
