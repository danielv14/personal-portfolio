import { PostMetaData } from '../../../types/FrontMatter';
import { Card } from '../../ui/container/card';
import { Column } from '../../ui/container/column';
import { Row } from '../../ui/container/row';
import { Header } from '../../ui/content/header';
import { TextMuted } from '../../ui/content/textMuted';
import { UnstyledInternalLink } from '../../ui/content/unstyledLink';
import { MarginSmall } from '../../ui/margins/marginSmall';
import { animationSpring } from '../animations';

interface CardPostProps {
  post: PostMetaData;
  subHeader?: string;
}

export const CardPost: React.FC<CardPostProps> = ({ post, subHeader }) => (
  <Card {...animationSpring} css={{ cursor: 'pointer' }}>
    <UnstyledInternalLink href={post.url}>
      <Row css={{ height: '100%' }}>
        <MarginSmall />
        <Column css={{ alignItems: 'stretch' }}>
          <MarginSmall />
          {subHeader && <TextMuted css={{ fontSize: '$smaller' }}>{subHeader}</TextMuted>}
          <Header as="h3" css={{ marginTop: '0' }}>
            {post.title}
          </Header>
          <TextMuted>{post.date}</TextMuted>
        </Column>
        <MarginSmall />
      </Row>
    </UnstyledInternalLink>
  </Card>
);

CardPost.displayName = 'CardPost';
