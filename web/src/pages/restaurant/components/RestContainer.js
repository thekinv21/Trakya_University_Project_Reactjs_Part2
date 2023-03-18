import { Box } from "@chakra-ui/react";
import React from "react";
import Background from '../../../assets/images/Background.png'

const Container = ({ children }) => {
  return (
    <React.Fragment>
      <Box
        maxW="100vw"
        minH="100vh"
        maxH="auto"
        bgColor="gray.200"
        bgImage={Background}
      >
        <Box
          display="flex"
          justifyContent="center"
          gap={20}
          alignItems="center"
          flexWrap="wrap"
          w="100%"
          h="100%"
          pt={160}
        >
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Container;
