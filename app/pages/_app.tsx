import '@/styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { AppLayout } from '@/modules/shared/components';
import { StateProvider } from '@/state/provider';
import theme from '@/styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StateProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </StateProvider>
    </ChakraProvider>
  );
}
export default App;
