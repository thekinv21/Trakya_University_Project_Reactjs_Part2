import React from "react";
import { Stack, SimpleGrid, Container } from "@chakra-ui/react";

const FooterContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Stack bg="rgba(21, 21, 21, 1)" color="#fff" fontSize={14}>
        <Container as={Stack} maxW="6xl" py={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={8}
            fontSize={12}
            color="#c1c1c1"
          >
            {children}
          </SimpleGrid>
        </Container>
      </Stack>
    </React.Fragment>
  );
};

export default FooterContainer;
