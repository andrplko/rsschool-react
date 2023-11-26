import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import { jost } from '@/utils/fonts';
import styles from './Layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Find Music</title>
        <meta property="og:title" content="Find Music" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={`${styles.container} ${jost.className}`}>
        <ErrorBoundary>
          <Header />
          {children}
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Layout;
