import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
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
      <DefaultSeo {...SEO} />
      <MDXProvider components={mdxComponents}>
        <ContentProvider projects={projects} blogPosts={getAllBlogPosts()}>
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
