import React from "react";
import { VStack } from "@chakra-ui/react";

const FormContainer = ({ children, width, md, onSubmit }) => {
  return (
    <React.Fragment>
      <VStack
        as="form"
        mx="auto"
        h="100vh"
        w={{ base: width, md: md }}
        justifyContent="center"
        onSubmit={onSubmit}
      >
        {children}
      </VStack>
    </React.Fragment>
  );
};

export default FormContainer;
