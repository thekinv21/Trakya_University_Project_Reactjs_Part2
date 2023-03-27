import React from "react";
import Header from "../../pages/main/components/header/Header";
import Footer from "../footer/Footer";
import { Stack, Box } from "@chakra-ui/react";
import Background from '../../assets/images/Background.png'

const MainContainer = ({ children }) => {
  return (
    <React.Fragment>
      {/*===============MAİN HEADER============== */}

      <Header />

      {/*===============MAİN CONTENT============== */}
      <Box
        maxW="100vw"
        minH="100vh"
        maxH="auto"
        bg="gray.200"
        overflowY="hidden"
        bgImage={Background}
      >
        <Stack spacing={10} direction="column" h="auto">
          {children}
        </Stack>
      </Box>

      {/*===============MAİN FOOTER============== */}

      <Footer />
    </React.Fragment>
  );
};

export default MainContainer;
