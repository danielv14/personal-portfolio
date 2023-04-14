import { CardPost } from 'components/cards/cardPost/cardPost';
import { SeoBlogPost } from 'components/seo/seoBlogPost';
import { styled } from 'theme/index';
import { PostPageProps } from 'types/Post';
import { Column } from 'ui/container/column';
import { ResponsiveContainer } from 'ui/container/responsiveContainer';
import { ResponsiveGrid } from 'ui/container/responsiveGrid';
import { Divider } from 'ui/content/divider';
import { Text } from 'ui/content/Text';
import { TextMuted } from 'ui/content/textMuted';
import { MarginLarge } from 'ui/margins/marginLarge';
import { MarginMedium } from 'ui/margins/marginMedium';
import { SyntaxHighlighter } from 'ui/SyntaxHighlighter';

const DateText = styled(TextMuted, {
  marginBottom: '0px',
});

const Preamble = styled(Text, {
  fontSize: '$h4',
});

export const BlogPostLayout: React.FC<PostPageProps> = ({ post, prevPost, nextPost, children }) => {
  return (
    <SyntaxHighlighter>
      <SeoBlogPost blogPost={post} />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <Text as="h1" gradient>
            {post.title}
          </Text>
          <DateText>{post.dateFormatted}</DateText>
          {post.preamble && (
            <>
              <MarginMedium />
              <Preamble bold>{post.preamble}</Preamble>
            </>
          )}
          <MarginMedium />
          {children}
          <MarginLarge />
          {(nextPost || prevPost) && (
            <>
              <Divider />
              <MarginMedium />
              <h2>Mer innehåll</h2>
              <ResponsiveGrid itemWidth="250px" gutter={20}>
                {prevPost && <CardPost subHeader="&larr; Föregående" post={prevPost} />}
                {nextPost && <CardPost subHeader="Nästa &rarr;" post={nextPost} />}
              </ResponsiveGrid>
            </>
          )}
        </Column>
      </ResponsiveContainer>
    </SyntaxHighlighter>
  );
};
