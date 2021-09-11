import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { globalStyles } from 'theme';
import SEO from '../../next-seo.config';
import { Footer } from '../components/footer/footer';
import { mdxComponents } from '../components/mdx/mdxComponents';
import { NavAdjustedContent } from '../components/navbar/nav.styles';
import { Navbar } from '../components/navbar/navbar';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { ContentProvider } from '../context/ContentContext';
import { getAllBlogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';

const myApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
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
      <MDXProvider components={mdxComponents}>
        <ContentProvider projects={projects} blogPosts={getAllBlogPosts()}>
          {/* <GlobalAppStyle /> */}
          <Navbar />
          <NavAdjustedContent>
            <Component {...pageProps} />
          </NavAdjustedContent>
          <MarginLarge />
          <Footer />
        </ContentProvider>
      </MDXProvider>
    </>
  );
};

export default myApp;
