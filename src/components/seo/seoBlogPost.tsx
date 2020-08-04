import { PostMetaData } from '../../types/FrontMatter';
import { Seo } from './seo';

interface SeoBlogPostProps {
  blogPost: PostMetaData;
}

export const SeoBlogPost: React.FC<SeoBlogPostProps> = ({ blogPost: { title, summary, date } }) => (
  <Seo
    title={title}
    description={summary}
    openGraph={{
      type: 'article',
      article: {
        publishedTime: date,
      },
      title,
      description: summary,
    }}
  />
);

SeoBlogPost.displayName = 'SeoBlogPost';
