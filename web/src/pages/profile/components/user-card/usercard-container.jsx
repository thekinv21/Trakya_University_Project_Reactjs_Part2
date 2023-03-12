import React from "react";
import { Card, Stack } from "@chakra-ui/react";

const UserCardContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Card bg="#ddd" minW="280px" maxW="300px" h="480px">
        <Stack h="100%" w="100%" justifyContent="center" alignItems="center">
          {children}
        </Stack>
      </Card>
    </React.Fragment>
  );
};

export default UserCardContainer;
