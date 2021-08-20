import Head from 'next/head';
import { useRouter } from 'next/router';

export default function AppContainer({
  containerClass = 'container',
  containerStyle = {},
  customMeta,
  children,
  ...props
}) {
  const router = useRouter();
  const meta = {
    title: 'Zwe Min Soe',
    description: `Aspiring Full-Stack Developer. React & Node Enthusiast.`,
    image: 'https://zweminsoe.com/images/name.svg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://zweminsoe.soe${router.asPath}`}
        />
        <link rel="canonical" href={`https://zweminsoe.soe${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
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
        {meta.lastUpdatedDate && (
          <meta
            property="article:last_updated_time"
            content={meta.lastUpdatedDate}
          />
        )}
      </Head>
      <main className={containerClass} style={{ ...containerStyle }}>
        {children}
      </main>
    </div>
  );
}
