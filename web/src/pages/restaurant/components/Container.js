import { Box } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }) => {
  return (
    <React.Fragment>
      <Box maxW="100vw" minH="100vh" maxH="auto" bg="gray.300">
        <Box
          display="flex"
          justifyContent="center"
          gap={20}
          alignItems="center"
          flexWrap="wrap"
          w="100%"
          h="100%"
          pt={110}
        >
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Container;
