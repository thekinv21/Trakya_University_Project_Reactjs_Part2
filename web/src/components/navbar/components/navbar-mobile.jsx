import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import Logo from "../../../assets/brand/searchLogo.svg";
import { useSelector } from "react-redux";

const NavbarMobile = ({ openMobile, closeMobile }) => {

  //*---------------------Take navbar links on global state--------------

  const navbarLinks = useSelector((state) => state.Link.navbarLinks);

  return (
    <React.Fragment>
      {/*-----------------------Eğer mobile responsive true ise---------------------- */}

      {openMobile ? (
        <Box display={{ md: "none" }}>
          {/*-----------Hamburger Buttona basıldığında açılacak pencere------------*/}
          <Drawer
            isOpen={openMobile}
            onClose={closeMobile}
            placement="left"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyItems="center"
          >
            <DrawerOverlay />
            {/*-----------Sidebar items positions and colors setups------------- */}
            <DrawerContent
              bg="rgba(0,0,0,0.6)"
              w="100%"
              h="100%"
              alignItems="center"
            >
              <DrawerCloseButton color="#fff" />

              <DrawerHeader>
                <Image cursor="pointer" draggable="false" src={Logo} />
              </DrawerHeader>

              {/*-----------------------------Sidebar links container---------------------- */}

              <DrawerBody>
                <Stack
                  w="100%"
                  h="100%"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={8}
                >
                  {/*-----------------------------Sidebar links---------------------- */}
                  {navbarLinks.map((link, index) => (
                    <HStack
                      key={index}
                      color="#fff"
                      _hover={{
                        textDecoration: "none",
                        p: "5px 40px",
                        borderRadius: "5px",
                        transition: "all 0.5s",
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      <Text>{link.icon}</Text>

                      <Link
                        href={link.href}
                        _hover={{
                          textDecoration: "none",
                        }}
                      >
                        {link.name}
                      </Link>
                    </HStack>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : null}
    </React.Fragment>
  );
};

export default NavbarMobile;
