import { PostListItem } from 'components/postListItem/postListItem';
import { Post } from 'contentlayer/generated';
import { styled } from 'theme';
import { Text } from 'ui/content/Text';
import { UnstyledInternalLink } from 'ui/content/unstyledLink';
import { MarginMedium } from 'ui/margins/marginMedium';

interface SectionArticlesProps {
  articles: Post[];
}

const ArticlesWrapper = styled('div', {
  '@medium': {
    margin: '0 -15px',
  },
});

export const SectionArticles: React.FC<SectionArticlesProps> = ({ articles }) => {
  return (
    <section>
      <h2>Inlägg</h2>
      <Text muted as="h4">
        Ibland skriver jag om saker och ting som förhoppningsvis kan vara intressant
      </Text>
      <MarginMedium />
      <ArticlesWrapper>
        {articles.map((post) => (
          <UnstyledInternalLink key={post.title} href={post.url}>
            <PostListItem title={post.title} summary={post.summary} />
          </UnstyledInternalLink>
        ))}
      </ArticlesWrapper>
    </section>
  );
};

SectionArticles.displayName = 'SectionArticles';
