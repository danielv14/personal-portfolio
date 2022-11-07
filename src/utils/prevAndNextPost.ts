import { Post } from 'types/Post';

export const getPrevAndNextPost = (currentPost: Post, allPosts: Post[]) => {
  const currentBlogPostIndex = allPosts.findIndex((post) => post._id === currentPost._id);
  const prevPost = allPosts[currentBlogPostIndex + 1];
  const nextPost = allPosts[currentBlogPostIndex - 1];
  return {
    prevPost: prevPost ?? null,
    nextPost: nextPost ?? null,
  };
};
