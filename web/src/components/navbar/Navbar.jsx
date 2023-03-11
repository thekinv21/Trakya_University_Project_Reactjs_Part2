import React from "react";
import NavbarContainer from "./components/navbar-container";
import NavbarHamburger from "./components/navbar-hamburger";
import { useDisclosure, Image } from "@chakra-ui/react";
import Logo from "../../assets/brand/searchLogo.svg";
import RezztoranLogo from "../../assets/svg/REZZ.svg";
import NavbarDropdown from "./components/navbar-dropdown";
import NavbarMobile from "./components/navbar-mobile";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      {/*-------------------Navbar Container------------------ */}
      <NavbarContainer>
        {/*-------------------Navbar hamburger menu------------------ */}
        <NavbarHamburger isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

        {/*-------------------Navbar Logo------------------ */}

        <Image
          cursor="pointer"
          w={["60px", "60px", "80px", "90px"]}
          src={Logo}
          draggable="false"
          display={["none", "none", "none", "block"]}
        />

        {/*-------------------Navbar Rezztoran Logo------------------ */}

        <Image
          w={["130px", "160px", "160px", "220px"]}
          src={RezztoranLogo}
          draggable="false"
        />

        {/*-------------------Navbar UserLogo and Dropdown------------------ */}

        <NavbarDropdown username="Vadim Kiniabaev" puan={100} />

        {/*-------------------Navbar Mobile Responsive------------------ */}

        <NavbarMobile openMobile={isOpen} closeMobile={onClose} />
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
