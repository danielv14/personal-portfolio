import { Card } from 'ui/container/card';
import { Column } from 'ui/container/column';
import { Fill } from 'ui/container/fill';
import { Row } from 'ui/container/row';
import { Text } from 'ui/content/Text';
import { UnstyledLink } from 'ui/content/unstyledLink';
import { MarginSmall } from 'ui/margins/marginSmall';
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
      <Row css={{ height: '100%' }}>
        <MarginSmall />
        <Column>
          <UnstyledLink href={urlSource}>
            <MarginSmall />
            <Text as="h3" bold>
              {title}
            </Text>
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
