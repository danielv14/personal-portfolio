/* eslint-disable @typescript-eslint/no-var-requires */
const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [require('remark-code-titles')],
  rehypePlugins: [mdxPrism],
})({
  // Keep webpack 4 for now due to crashes. Fix it seperately.
  webpack5: false,
});
