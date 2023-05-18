import React from "react";
import { Stack, Text, IconButton } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginWith = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={5}
      >
        <Text w={["70px", "120px", "130px", "140px"]} border="1px solid #ddd" />

        <Text fontSize={12}>Giriş Yap</Text>

        <Text w={["70px", "120px", "130px", "140px"]} border="1px solid #ddd" />
      </Stack>

      <Stack
        w="100%"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        pt={5}
      >
        <IconButton w="80px" colorScheme="facebook" icon={<FaFacebook />} />
        <IconButton w="80px" colorScheme="whiteAlpha" icon={<FcGoogle />} />
      </Stack>
    </React.Fragment>
  );
};

export default LoginWith;
