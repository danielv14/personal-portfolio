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
import { theme } from '../theme/theme';
import { PostFrontMatter } from '../types/FrontMatter';
import { formatDate } from '../utils/formatDate';
import { usePrevAndNextBlogPost } from '../hooks/usePrevAndNextBlogPost';

interface PostProps {
  children: React.ReactChildren;
}

export default (frontMatter: PostFrontMatter) => {
  // eslint-disable-next-line react/display-name
  return ({ children }: PostProps) => {
    const [prevPost, nextPost] = usePrevAndNextBlogPost(frontMatter);

    return (
      <>
        <SeoBlogPost blogPostData={frontMatter} />
        <ResponsiveContainer>
          <Column>
            <MarginLarge />
            <h2>{frontMatter.title}</h2>
            <TextMuted>{formatDate(frontMatter.date)}</TextMuted>
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
