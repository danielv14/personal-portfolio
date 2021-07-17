import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import SEO from '../../next-seo.config';
import { mdxComponents } from '../components/mdx/Components.mdx';
import { Footer } from '../components/site/footer/Footer';
import { NavAdjustedContent } from '../components/site/navbar/nav.styles';
import { Navbar } from '../components/site/navbar/Navbar';
import { MarginLarge } from '../components/ui-system/margins/MarginLarge';
import { ContentProvider } from '../context/ContentContext';
import { ThemeProvider } from '../context/ThemeContext';
import { getAllBlogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';
import { GlobalStyle } from '../theme/globalStyle';
import { theme } from '../theme/theme';

const myApp = ({ Component, pageProps }: AppProps) => {
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
        <ThemeProvider theme={theme}>
          <ContentProvider projects={projects} blogPosts={getAllBlogPosts()}>
            <GlobalStyle />
            <Navbar />
            <NavAdjustedContent>
              <Component {...pageProps} />
            </NavAdjustedContent>
            <MarginLarge />
            <Footer />
          </ContentProvider>
        </ThemeProvider>
      </MDXProvider>
    </>
  );
};

export default myApp;
