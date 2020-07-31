import { PostFrontMatter } from '../../types/FrontMatter';
import { Seo } from './seo';

interface SeoBlogPostProps {
  blogPostData: PostFrontMatter;
}

export const SeoBlogPost: React.FC<SeoBlogPostProps> = ({ blogPostData: { title, summary, date } }) => (
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
