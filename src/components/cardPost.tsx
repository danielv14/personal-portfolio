import { PostMetaData } from '../types/FrontMatter';
import { Card } from './ui/container/card';
import Link from 'next/link';
import { Row } from './ui/container/row';
import { MarginSmall } from './ui/margins/marginSmall';
import { Column } from './ui/container/column';
import { TextMuted } from './ui/content/textMuted';
import styled from 'styled-components';

const SubHeader = styled(TextMuted)`
  font-size: 0.7rem;
`;

interface CardPostProps {
  post: PostMetaData;
  subHeader?: string;
}

export const CardPost: React.FC<CardPostProps> = ({ post, subHeader }) => (
  <Card style={{ cursor: 'pointer' }}>
    <Link href={post.url}>
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
    </Link>
  </Card>
);

CardPost.displayName = 'CardPost';
