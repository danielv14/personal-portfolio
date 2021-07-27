import React from 'react';
import styled from 'styled-components';
import { CardPost } from '../components/cards/cardPost/cardPost';
import { SeoBlogPost } from '../components/seo/seoBlogPost';
import { Column } from '../components/ui/container/column';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { ResponsiveGrid } from '../components/ui/container/responsiveGrid';
import { Divider } from '../components/ui/content/divider';
import { Header } from '../components/ui/content/header';
import { TextMuted } from '../components/ui/content/textMuted';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { usePrevAndNextBlogPost } from '../hooks/usePrevAndNextBlogPost';
import { PostLayoutProps } from '../types/Layout';
import { toPostMetaData } from '../utils/postMappings';

const DateText = styled(TextMuted)`
  margin-bottom: 0px;
`;

const LayoutBlogPost = ({ frontMatter, children }: PostLayoutProps) => {
  const postMetaData = toPostMetaData(frontMatter);
  const [prevPost, nextPost] = usePrevAndNextBlogPost(postMetaData);
  return (
    <>
      <SeoBlogPost blogPost={postMetaData} />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <h1>{postMetaData.title}</h1>
          <DateText>{postMetaData.date}</DateText>
          {postMetaData.description && (
            <Header as="h2" muted>
              {postMetaData.description}
            </Header>
          )}
          <MarginMedium />
          {children}
          <MarginLarge />
          {(nextPost || prevPost) && (
            <>
              <Divider />
              <MarginMedium />
              <h2>Mer innehåll</h2>
              <ResponsiveGrid itemWidth="250px" gutter={2}>
                {prevPost && <CardPost subHeader="&larr; Föregående" post={prevPost} />}
                {nextPost && <CardPost subHeader="Nästa &rarr;" post={nextPost} />}
              </ResponsiveGrid>
            </>
          )}
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default LayoutBlogPost;
