import React from "react";
import { Stack , Text , IconButton } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignWith = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        m="30px 0px"
      >
        <Text w={["70px", "120px", "130px", "140px"]} border="1px solid #ddd" />

        <Text fontSize={12}>Sign with</Text>

        <Text w={["70px", "120px", "130px", "140px"]} border="1px solid #ddd" />
      </Stack>

      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <IconButton w="80px" colorScheme="facebook" icon={<FaFacebook />} />
        <IconButton w="80px" colorScheme="whiteAlpha" icon={<FcGoogle />} />
      </Stack>
    </React.Fragment>
  );
};

export default SignWith;
