import React from "react";
import { Flex } from "@chakra-ui/react";

const NavbarContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="100px"
        maxH='100%'
        p={35}
        w="100%"
        bg="rgb(35,40,51)"
        boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
        zIndex="999"
      >
        {children}
      </Flex>
    </React.Fragment>
  );
};

export default NavbarContainer;
