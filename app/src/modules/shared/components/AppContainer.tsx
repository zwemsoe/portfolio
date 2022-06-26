import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface ICustomMeta {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  publishedDate?: string;
}

interface IAppContainer {
  containerClass?: string;
  containerStyle?: any;
  customMeta?: ICustomMeta;
  children: React.ReactNode;
}

export function AppContainer({
  containerClass = 'container',
  containerStyle = {},
  customMeta,
  children,
}: IAppContainer) {
  const router = useRouter();

  const meta = {
    title: 'Zwe Min Soe',
    description: `Aspiring Full-Stack Developer. React & Node Enthusiast.`,
    image: 'https://zweminsoe.com/images/name.svg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://zweminsoe.soe${router.asPath}`}
        />
        <link rel="canonical" href={`https://zweminsoe.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Zwe Min Soe" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zweminsoe" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.publishedDate && (
          <meta
            property="article:published_time"
            content={meta.publishedDate}
          />
        )}
      </Head>
      <main className={containerClass} style={{ ...containerStyle }}>
        {children}
      </main>
    </div>
  );
}
