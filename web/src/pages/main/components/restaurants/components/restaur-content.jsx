import { Stack } from "@chakra-ui/react";
import React from "react";

const RestaurantContent = ({ children }) => {
  return (
    <React.Fragment>
      <Stack w="100%" p="0px 7%" direction={["column", "column", "column"]}>
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default RestaurantContent;
