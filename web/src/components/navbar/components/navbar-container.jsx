import React from "react";
import { Flex } from "@chakra-ui/react";

const NavbarContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="10vh"
        p={35}
        w="100%"
        position="fixed"
        top="0"
        left="0"
        bg="rgba(21, 21, 21, 1)"
        boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
        zIndex="999"
      >
        {children}
      </Flex>
    </React.Fragment>
  );
};

export default NavbarContainer;
