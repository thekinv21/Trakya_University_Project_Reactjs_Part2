import React from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavbarHamburger = ({ isOpen, onClose, onOpen }) => {
  return (
    <React.Fragment>
      <IconButton
        size="lg"
        icon={
          isOpen ? (
            <CloseIcon />
          ) : (
            <HamburgerIcon fontSize={22} fontWeight={600} />
          )
        }
        display={["block", "block", "block", "none"]}
        onClick={isOpen ? onClose : onOpen}
        color="#fff"
        borderRadius="50%"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      />
    </React.Fragment>
  );
};

export default NavbarHamburger;
