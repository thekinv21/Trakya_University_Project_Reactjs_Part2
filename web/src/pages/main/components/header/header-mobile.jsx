import React from "react";
import {
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Link,
  Image,
  DrawerBody,
  HStack,
  Text,
} from "@chakra-ui/react";
import RezztoranLogo from "../../../../assets/svg/REZZ.svg";
import { useSelector } from "react-redux";

const HeaderMobile = ({ isOpen, onClose }) => {
  //*--------------------Header Links--------------------

  const headerLinks = useSelector((state) => state.Link.headerLinks);

  return (
    <React.Fragment>
      {isOpen ? (
        <Stack display={{ md: "none" }}>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyItems="center"
          >
            <DrawerOverlay />

            {/*----------------------Siderbar Content------------------*/}

            <DrawerContent
              bg="rgb(0,0,0,0.7)"
              w="100%"
              h="100%"
              alignItems="center"
            >
              <DrawerCloseButton color="#fff" />

              {/*----------------------Siderbar header------------------*/}
              <DrawerHeader cursor="pointer">
                <Link href="/landing">
                  <Image src={RezztoranLogo} />
                </Link>
              </DrawerHeader>

              {/*----------------------Siderbar Body---------------------*/}

              <DrawerBody>
                <Stack
                  w="100%"
                  h="100%"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing="8"
                >
                  {headerLinks.map((link, index) => (
                    <HStack
                      key={index}
                      color="#fff"
                      _hover={{
                        textDecoration: "none",
                        p: "5px 80px",
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
        </Stack>
      ) : null}
    </React.Fragment>
  );
};

export default HeaderMobile;
