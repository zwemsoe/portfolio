import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box bg='bg'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default App;
