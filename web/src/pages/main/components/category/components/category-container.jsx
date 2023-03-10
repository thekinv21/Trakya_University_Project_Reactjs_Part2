import React from "react";
import { Stack } from "@chakra-ui/react";

const CategoryContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack w="100%" textAlign="center" spacing={12}>
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default CategoryContainer;
