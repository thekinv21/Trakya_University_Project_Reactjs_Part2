import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const FooterContent = ({ title, children }) => {
  return (
    <React.Fragment>
      <Stack align="flex-start" mb={20}>
        <Text fontSize={30}>{title}</Text>
        {children}
      </Stack>
    </React.Fragment>
  );
};

export default FooterContent;
