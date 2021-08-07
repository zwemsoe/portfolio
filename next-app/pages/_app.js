import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../styles/theme";
import AppContainer from "../components/AppContainer";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  );
}
export default App;
