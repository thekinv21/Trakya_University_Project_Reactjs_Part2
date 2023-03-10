import React from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const HeaderHamburger = ({ isOpen, onClose, onOpen }) => {
  return (
    <IconButton
      size="lg"
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="22px" />}
      display={{ md: "none" }}
      onClick={isOpen ? onClose : onOpen}
      color="#ddd"
      bg="transparent"
      fontWeight={700}
      borderRadius="50%"
      _hover={{ bg: "gray.700" }}
    />
  );
};

export default HeaderHamburger;
