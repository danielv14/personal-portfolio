import React from 'react';
import { CardPost } from '../components/cards/cardPost/CardPost';
import { SeoBlogPost } from '../components/seo/SeoBlogPost';
import { Column } from '../components/ui/container/Column';
import { ResponsiveContainer } from '../components/ui/container/ResponsiveContainer';
import { ResponsiveGrid } from '../components/ui/container/ResponsiveGrid';
import { Divider } from '../components/ui/content/Divider';
import { MarginLarge } from '../components/ui/margins/MarginLarge';
import { MarginMedium } from '../components/ui/margins/MarginMedium';
import { TextMuted } from '../components/ui/typography/TextMuted';
import { usePrevAndNextBlogPost } from '../hooks/usePrevAndNextBlogPost';
import { PostLayoutProps } from '../types/Layout';
import { toPostMetaData } from '../utils/postMappings';

const LayoutBlogPost = ({ frontMatter, children }: PostLayoutProps) => {
  const postMetaData = toPostMetaData(frontMatter);
  const [prevPost, nextPost] = usePrevAndNextBlogPost(postMetaData);
  return (
    <>
      <SeoBlogPost blogPost={postMetaData} />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <h2>{postMetaData.title}</h2>
          <TextMuted>{postMetaData.date}</TextMuted>
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
