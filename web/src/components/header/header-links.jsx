import { HStack, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const HeaderLink = () => {
  //*================LOGGEDIN LİNKS================
  const LoggedInLinks = useSelector((state) => state.Link.LoginLinks);

  //*================LOGOUT LİNKS================
  const LogoutLinks = useSelector((state) => state.Link.LogoutLinks);

    //*===========GIRIŞ YAPIP YAPMADIĞI BİLGİ==========
  const token = sessionStorage.getItem("token");

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <HStack
          as={"nav"}
          spacing={16}
          display={{ base: "none", md: "flex" }}
          pr="20px"
        >
          {(token ? LoggedInLinks : LogoutLinks).map((link, index) => (
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
                  color: "#fff",
                }}
              >
                {link.name}
              </Link>
            </HStack>
          ))}
        </HStack>
      </Stack>
    </React.Fragment>
  );
};

export default HeaderLink;
