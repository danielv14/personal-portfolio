import React from 'react';
import { CardPost } from '../components/cards/CardPost';
import { SeoBlogPost } from '../components/seo/SeoBlogPost';
import { Column } from '../components/ui-system/container/Column';
import { ResponsiveContainer } from '../components/ui-system/container/ResponsiveContainer';
import { ResponsiveGrid } from '../components/ui-system/container/ResponsiveGrid';
import { Divider } from '../components/ui-system/content/Divider';
import { MarginLarge } from '../components/ui-system/margins/MarginLarge';
import { MarginMedium } from '../components/ui-system/margins/MarginMedium';
import { TextMuted } from '../components/ui-system/typography/TextMuted';
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
