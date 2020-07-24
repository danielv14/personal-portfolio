import { PostMetaData } from '../../types/FrontMatter';
import { Card } from '../ui/container/card';
import { Row } from '../ui/container/row';
import { MarginSmall } from '../ui/margins/marginSmall';
import { Column } from '../ui/container/column';
import { TextMuted } from '../ui/content/textMuted';
import styled from 'styled-components';
import { UnstyledInternalLink } from '../ui/content/unstyledLink';
import { animationSpring } from './animations';

const SubHeader = styled(TextMuted)`
  font-size: var(--font-size-smaller);
`;

interface CardPostProps {
  post: PostMetaData;
  subHeader?: string;
}

export const CardPost: React.FC<CardPostProps> = ({ post, subHeader }) => (
  <Card {...animationSpring} style={{ cursor: 'pointer' }}>
    <UnstyledInternalLink href={post.url}>
      <Row style={{ height: '100%' }}>
        <MarginSmall />
        <Column style={{ alignItems: 'stretch' }}>
          <MarginSmall />
          {subHeader && <SubHeader>{subHeader}</SubHeader>}
          <h3 style={{ marginTop: '0' }}>{post.title}</h3>
          <TextMuted>{post.date}</TextMuted>
        </Column>
        <MarginSmall />
      </Row>
    </UnstyledInternalLink>
  </Card>
);

CardPost.displayName = 'CardPost';
