import { Post } from 'types/Post';
import { Seo } from './seo';

interface SeoBlogPostProps {
  blogPost: Post;
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
