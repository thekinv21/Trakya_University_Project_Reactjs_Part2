import React from "react";
import { Stack, useDisclosure, Image, Flex } from "@chakra-ui/react";
import HeaderContainer from "./header-container";
import HeaderHamburger from "./header-hamburger";
import RezztoranLogo from "../../../../assets/svg/REZZ.svg";
import HeaderLink from "./header-links";
import HeaderDropdown from "./header-dropdown";
import HeaderMobile from "./header-mobile";

const Header = () => {
  //*--------------Background change state-------------
  const [active, setActive] = React.useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // //*-----------Change header bg when scrolling-----------
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <React.Fragment>
      <Stack>
        <HeaderContainer active={active}>
          {/*---------------------------Hamburger Menu When Window was Mobile Responsive------------------------ */}

          <HeaderHamburger isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

          {/*-------------------------------Rezztoran Logo ------------------------ */}

          <Image
            w={["130px", "160px", "160px", "220px"]}
            src={RezztoranLogo}
            cursor="pointer"
          />

          <Flex alignItems="center">
            {/*------------------------------Header Links----------------------------- */}

            <HeaderLink />

            {/*------------------------------User Logo and Links------------------------- */}

            <HeaderDropdown username="Vadim Kiniabaev" puan={70} />
          </Flex>
        </HeaderContainer>

        {/*---------------------------Mobile Responsive Links and position------------------*/}

        <HeaderMobile isOpen={isOpen} onClose={onClose} />
      </Stack>
    </React.Fragment>
  );
};

export default Header;
