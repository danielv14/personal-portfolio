import { PostMetaData } from '../../types/FrontMatter';
import { PostListItem } from '../postListItem/postListItem';
import { TextCenter } from '../ui/content/textCenter';
import { UnstyledInternalLink } from '../ui/content/unstyledLink';
import { MarginMedium } from '../ui/margins/marginMedium';

interface SectionArticlesProps {
  articles: PostMetaData[];
}

export const SectionArticles: React.FC<SectionArticlesProps> = ({ articles }) => {
  return (
    <section>
      <TextCenter>
        <h2>Ibland skriver jag om något förhoppningsvis intressant</h2>
      </TextCenter>
      <MarginMedium />
      {articles.map((post) => (
        <UnstyledInternalLink key={post.title} href={post.url}>
          <PostListItem title={post.title} summary={post.summary} />
        </UnstyledInternalLink>
      ))}
    </section>
  );
};

SectionArticles.displayName = 'SectionArticles';
