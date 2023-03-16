import React from "react";
import { Stack } from "@chakra-ui/react";

const AminitiesContent = ({ children }) => {
  return (
    <React.Fragment>
      <Stack
        h="100%"
        w="100%"
        direction={["column", "column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        spacing={20}
        pt={50}
      >
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default AminitiesContent;
