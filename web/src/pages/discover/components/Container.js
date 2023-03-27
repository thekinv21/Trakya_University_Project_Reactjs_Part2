import React from "react";
import { Box } from "@chakra-ui/react";
import Background from "../../../assets/images/Background.png";
import Footer from "../../../components/footer/Footer";
import Navbar from "./../../../components/navbar/Navbar";

const Container = ({ children }) => {
  return (
    <React.Fragment>
      {/*==================DISCOVER NAVBAR============== */}
      <Navbar />
      <Box
        width="100vw"
        maxW="100%"
        minH="100vh"
        maxH="auto"
        bg="gray.200"
        overflowY="hidden"
        bgImage={Background}
        p="130px 0px 100px 0px"
      >
        {children}
      </Box>

      {/*==================DISCOVER FOOTER============== */}
      <Footer />
    </React.Fragment>
  );
};

export default Container;
