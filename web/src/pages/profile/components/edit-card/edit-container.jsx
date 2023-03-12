import React from "react";
import { Stack } from "@chakra-ui/react";

const EditContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack direction="column" spacing={6}>
        <Stack>{children}</Stack>
      </Stack>
    </React.Fragment>
  );
};

export default EditContainer;
