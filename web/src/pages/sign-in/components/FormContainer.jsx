import React from "react";
import { VStack } from "@chakra-ui/react";

const FormContainer = ({ children, width, md, onSubmit, position , bg }) => {
  return (
    <React.Fragment>
      <VStack
        as="form"
        mx="auto"
        h="100vh"
        w={{ base: width, md: md }}
        justifyContent={position}
        onSubmit={onSubmit}
        bg={bg}
      >
        {children}
      </VStack>
    </React.Fragment>
  );
};

export default FormContainer;
