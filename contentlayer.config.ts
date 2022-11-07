import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { formatDate } from './src/utils/formatDate';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: './posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Summary of post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Desc of post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      description: 'URL in relation to blog post page',
      resolve: (post) => `/blogg/${post._raw.flattenedPath.replace('posts/', '')}`,
    },
    dateFormatted: {
      type: 'string',
      description: "Formatted date as 'yyyy-MM-dd'",
      resolve: (post) => formatDate(post.date, 'yyyy-MM-dd'),
    },
  },
}));

export default makeSource({
  contentDirPath: './src/data',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, rehypeSlug, rehypeAutolinkHeadings, rehypePrism],
  },
});
