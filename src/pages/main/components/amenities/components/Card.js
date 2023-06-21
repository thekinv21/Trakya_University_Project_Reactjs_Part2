import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const AminitiesCard = ({ text, icon, title }) => {
  return (
    <React.Fragment>
      <Stack
        w="300px"
        h="230px"
        maxW="100%"
        borderRadius="10px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="#fff"
      >
        <Stack fontSize={80}>{icon}</Stack>
        <Text fontWeight={600} fontSize={22}>
          {title}
        </Text>
        <Text fontSize="12px" p="10px 40px" color="#000">
          {text}
        </Text>
      </Stack>
    </React.Fragment>
  );
};

export default AminitiesCard;
