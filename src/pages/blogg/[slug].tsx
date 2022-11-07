import { mdxComponents } from 'components/mdx/mdxComponents';
import { getAllBlogPosts } from 'data/blogPosts';
import { BlogPostLayout } from 'layouts/blogPost';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post, PostPageProps } from 'types/Post';
import { getPrevAndNextPost } from 'utils/prevAndNextPost';

export const getStaticPaths: GetStaticPaths = () => {
  const paths: string[] = getAllBlogPosts().map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const allPosts = getAllBlogPosts();
  const post = allPosts.find((post) => post._raw.flattenedPath.includes(params?.slug as string));

  const { prevPost, nextPost } = getPrevAndNextPost(post as Post, allPosts);
  return {
    props: {
      post: post,
      prevPost,
      nextPost,
    } as PostPageProps,
  };
};

const LayoutBlogPost = ({ post, prevPost, nextPost }: PostPageProps) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <BlogPostLayout post={post} prevPost={prevPost} nextPost={nextPost}>
      <MDXContent components={mdxComponents} />
    </BlogPostLayout>
  );
};

export default LayoutBlogPost;
