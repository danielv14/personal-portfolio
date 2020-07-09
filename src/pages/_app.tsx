import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../theme/globalStyle';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { MDXComponents } from '../components/mdxComponents';
import { getAllBlogPosts } from '../utils/getBlogPosts';
import { BlogPostContext } from '../blogPostContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <MDXProvider components={MDXComponents}>
        <BlogPostContext.Provider value={{ allBlogPosts: getAllBlogPosts() }}>
          <GlobalStyle />
          <Navbar />
          <Component {...pageProps} />
          <MarginLarge />
          <Footer />
        </BlogPostContext.Provider>
      </MDXProvider>
    </>
  );
}

export default MyApp;
