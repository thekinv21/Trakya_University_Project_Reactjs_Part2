import React from "react";
import { Box } from "@chakra-ui/react";
import Background from "../../assets/images/Background.png";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Container = ({ children }) => {
  return (
    <React.Fragment>
      {/*===============NAVBAR================== */}
      <Navbar />

      {/*================MAİN CONTAİNER================== */}
      <Box
        w="100vw"
        maxW="100%"
        minH="100vh"
        maxH="auto"
        bgColor="gray.200"
        bgImage={Background}
        position="relative"
        zIndex="0"
      >
        {/*==============CHİLDRENS================*/}

        {children}
      </Box>

      {/*================FOOTER================== */}
      <Footer />
    </React.Fragment>
  );
};

export default Container;
