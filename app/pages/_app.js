import '@/styles/globals.scss';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from '@/styles/theme';
import AppLayout from '@/components/AppLayout';
import { StateProvider } from '@/utils/provider';
import { initialState, stateReducer } from '@/utils/reducer';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={stateReducer}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </StateProvider>
    </ChakraProvider>
  );
}
export default App;
