import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Background from "../../../assets/images/Background.png";

const ProfileContainer = ({ children }) => {
  return (
    <React.Fragment>
      {/*----------------------------------Profile iöin main Container----------------- */}
      <Box
        w="100vw"
        maxW="100%"
        h="120vh"
        maxH="auto"
        bgColor="#ddd"
        bgImage={Background}
        position="relative"
        zIndex="0"
        p='0 5%'
      >
        {/*------------------Mobile,Tablet,Mack,Desktop Resonsive olması için-------------- */}
        <Stack
          w="100%"
          h="100%"
          spacing={8}
          direction={["column", "column", "row", "row"]}
          alignItems={["center", "center", "center", "center"]}
          justifyContent={["center", "center", "center", "center"]}
        >
          {children}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default ProfileContainer;
