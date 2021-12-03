import '@/styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import * as gtag from '@/lib/gtag';
import theme from '@/styles/theme';
import { StateProvider } from '@/utils/provider';
import { initialState, stateReducer } from '@/utils/reducer';

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtag.GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `,
        }}
      />
      <ChakraProvider theme={theme}>
        <StateProvider initialState={initialState} reducer={stateReducer}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </StateProvider>
      </ChakraProvider>
    </>
  );
}
export default App;
