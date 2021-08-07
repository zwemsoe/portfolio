import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppContainer({ children, ...props }) {
  return (
    <Box bg='bg'>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
