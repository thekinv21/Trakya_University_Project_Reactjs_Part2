import { Stack } from "@chakra-ui/react";
import React from "react";

const QuestionContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack
        w="100%"
        h="100%"
        textAlign="center"
        spacing="14"
        alignItems="center"
        pb="100px"
      >
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default QuestionContainer;
