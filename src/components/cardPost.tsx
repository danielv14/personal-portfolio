import { PostMetaData } from '../types/FrontMatter';
import { Card } from './ui/container/card';
import Link from 'next/link';
import { Row } from './ui/container/row';
import { MarginSmall } from './ui/margins/marginSmall';
import { Column } from './ui/container/column';
import { TextMuted } from './ui/content/textMuted';

interface CardPostProps {
  post: PostMetaData;
}

export const CardPost: React.FC<CardPostProps> = ({ post }) => (
  <Card style={{ cursor: 'pointer' }}>
    <Link href={post.url}>
      <Row style={{ height: '100%' }}>
        <MarginSmall />
        <Column style={{ alignItems: 'stretch' }}>
          <MarginSmall />
          <h3 style={{ marginTop: '0' }}>{post.title}</h3>
          <TextMuted>{post.date}</TextMuted>
        </Column>
        <MarginSmall />
      </Row>
    </Link>
  </Card>
);

CardPost.displayName = 'CardPost';
