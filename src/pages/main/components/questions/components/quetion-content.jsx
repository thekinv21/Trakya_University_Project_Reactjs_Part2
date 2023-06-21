import { Stack } from "@chakra-ui/react";
import React from "react";

const QuetionContent = ({ children }) => {
  return (
    <React.Fragment>
      <Stack
        h="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={6}
      >
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default QuetionContent;
