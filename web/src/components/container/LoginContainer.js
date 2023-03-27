import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import Background from "../../assets/images/Background.png";

const LoginContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Box
        w="100vw"
        h="100vh"
        bgColor="#14162e"
        bgImage={Background}
        color="#fff"
      >
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent={["center", "center", "center", "space-between"]}
          p="0px 20px"
        >
          {children}
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default LoginContainer;