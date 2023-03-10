import { Stack } from "@chakra-ui/react";
import React from "react";

const RestaurantsContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack w="100%" textAlign="center" spacing={12}>
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default RestaurantsContainer;
