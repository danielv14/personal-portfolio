import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../components/ui/globalStyle';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
import { MarginLarge } from '../components/ui/margins/marginLarge';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/Montserrat-Bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Montserrat-Regular.ttf" as="font" crossOrigin="" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <MarginLarge />
      <Footer />
    </>
  );
}

export default MyApp;
