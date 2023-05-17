import { Stack, Text } from "@chakra-ui/react";

const RestaurantAddress = ({ city, district }) => (
  <Stack direction="column" justifyContent="center" h={30} py={5}>
    <Text
      color="gray.500"
      fontWeight="semibold"
      fontSize={10}
      textTransform="uppercase"
    >
      {city}
    </Text>
    <Text
      color="gray.500"
      fontWeight="semibold"
      fontSize={10}
      textTransform="uppercase"
    >
      {district}
    </Text>
  </Stack>
);

export default RestaurantAddress;
