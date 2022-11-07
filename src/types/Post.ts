import { Post as ContentLayerPost } from 'contentlayer/generated';

export type Post = ContentLayerPost;

export interface PostPageProps {
  post: Post;
  prevPost?: Post;
  nextPost?: Post;
}
