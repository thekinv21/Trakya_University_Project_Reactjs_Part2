import React from "react";
import { Box, Stack } from "@chakra-ui/react";

const MainContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Box maxW="100vw" minH="100vh" maxH="auto" bg="beige" overflowY="hidden">
        <Stack spacing={10} direction="column" h="auto">
          {children}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default MainContainer;
