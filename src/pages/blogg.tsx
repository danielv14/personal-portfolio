import { frontMatter } from './blogg/*.mdx';
import { PostFrontMatter } from '../types/FrontMatter';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';

const blogIndex = () => {
  const blogPostData = (frontMatter as unknown) as PostFrontMatter[];
  return (
    <ResponsiveContainer>
      {blogPostData.map((blogPost) => (
        <p key={blogPost.title}>{blogPost.title}</p>
      ))}
    </ResponsiveContainer>
  );
};

export default blogIndex;
