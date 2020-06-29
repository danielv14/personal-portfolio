import { PostFrontMatter } from '../../types/FrontMatter';
import { site } from '../../data/site';
import { NextSeo } from 'next-seo';

interface SeoBlogPostProps {
  blogPostData: PostFrontMatter;
}

export const SeoBlogPost: React.FC<SeoBlogPostProps> = ({ blogPostData: { title, summary, date } }) => (
  <NextSeo
    title={`${title} – ${site.author}`}
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
