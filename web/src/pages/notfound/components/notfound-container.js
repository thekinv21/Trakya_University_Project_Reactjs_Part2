import React from "react";
import { Stack } from "@chakra-ui/react";

const NotfoundContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack
        w="100vw"
        h="100vh"
        padding="20px 0px"
        alignItems="center"
        direction="column"
      >
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default NotfoundContainer;
