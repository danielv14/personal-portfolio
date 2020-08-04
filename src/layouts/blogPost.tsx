import React from 'react';
import { CardPost } from '../components/cards/cardPost/cardPost';
import { SeoBlogPost } from '../components/seo/seoBlogPost';
import { Column } from '../components/ui/container/column';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { ResponsiveGrid } from '../components/ui/container/responsiveGrid';
import { Divider } from '../components/ui/content/divider';
import { TextMuted } from '../components/ui/content/textMuted';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { usePrevAndNextBlogPost } from '../hooks/usePrevAndNextBlogPost';
import { theme } from '../theme/theme';
import { PostFrontMatter } from '../types/FrontMatter';
import { toPostMetaData } from '../utils/postMappings';

interface PostProps {
  children: React.ReactChildren;
}

const layoutBlogPost = (frontMatter: PostFrontMatter) => {
  // eslint-disable-next-line react/display-name
  return ({ children }: PostProps) => {
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
                <ResponsiveGrid itemWidth="250px" gutter={theme.margins.large}>
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
};

export default layoutBlogPost;
