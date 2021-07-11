import { PostMetaData } from '../../../types/FrontMatter';
import { Card } from '../../ui/card/Card';
import { Column } from '../../ui/container/Column';
import { Row } from '../../ui/container/Row';
import { UnstyledInternalLink } from '../../ui/content/UnstyledLink';
import { MarginSmall } from '../../ui/margins/MarginSmall';
import { Header } from '../../ui/typography/Header';
import { TextMuted } from '../../ui/typography/TextMuted';
import { animationSpring } from '../animations';
import { SubHeader } from './cardPost.styles';

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
          <Header as="h3" style={{ marginTop: '0' }}>
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
