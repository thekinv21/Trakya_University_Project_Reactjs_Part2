import { Text } from "@chakra-ui/react";

const RestaurantTitle = ({ name }) => (
  <Text fontWeight="semibold" lineHeight="tight" noOfLines={1}>
    {name}
  </Text>
);

export default RestaurantTitle;
