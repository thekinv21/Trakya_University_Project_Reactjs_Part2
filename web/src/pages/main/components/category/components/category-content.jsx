import React from "react";
import { Stack } from "@chakra-ui/react";

const CategoryContent = ({ children }) => {
  return (
    <React.Fragment>
      <Stack w="100%" p="0px 7%" direction={["column", "column", "column"]}>
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default CategoryContent;
