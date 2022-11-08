import { Analytics } from '@vercel/analytics/react';
import { Footer } from 'components/footer/footer';
import { NavAdjustedContent } from 'components/navbar/nav.styles';
import { Navbar } from 'components/navbar/navbar';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles } from 'theme';
import { MarginLarge } from 'ui/margins/marginLarge';
import SEO from '../../next-seo.config';

const myApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Navbar />
      <NavAdjustedContent>
        <Component {...pageProps} />
      </NavAdjustedContent>
      <MarginLarge />
      <Footer />
      <Analytics />
    </>
  );
};

export default myApp;
