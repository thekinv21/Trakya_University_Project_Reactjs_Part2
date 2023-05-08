import React from "react";
import { Stack, useDisclosure, Image, Flex, Button } from "@chakra-ui/react";
import HeaderContainer from "./header-container";
import HeaderHamburger from "./header-hamburger";
import RezztoranLogo from "../../assets/svg/REZZ.svg";
import HeaderLink from "./header-links";
import HeaderMobile from "./header-mobile";
import { useDispatch } from "react-redux";
import { resetAuth } from "../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLogged = sessionStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [active, setActive] = React.useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //*=====================LOGOUT ON WEBSTİYE====================

  const doLogout = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("token");
    dispatch(resetAuth());
    navigate("/signin");
  };

  //*=====================LOGOUT TO WEBSTİYE====================

  const doLogin = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  //*================Change header bg when scrolling==============
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

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Image
              w={["130px", "160px", "160px", "220px"]}
              src={RezztoranLogo}
              cursor="pointer"
              display={["none", "none", "none", "block"]}
            />
            {/*------------------------------Header Links----------------------------- */}

            <HeaderLink />

            {isLogged ? (
              <Button
                size="sm"
                colorScheme="red"
                fontWeight={100}
                w={120}
                onClick={doLogout}
              >
                Çikiş
              </Button>
            ) : (
              <Button
                onClick={doLogin}
                size="sm"
                colorScheme="green"
                fontWeight={100}
                w={120}
              >
                Giriş
              </Button>
            )}
          </Flex>
        </HeaderContainer>

        {/*---------------------------Mobile Responsive Links and position------------------*/}

        <HeaderMobile isOpen={isOpen} onClose={onClose} />
      </Stack>
    </React.Fragment>
  );
};

export default Header;
