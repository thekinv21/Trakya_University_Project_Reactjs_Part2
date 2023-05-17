import { Button } from "@chakra-ui/react";

const RestaurantReservationButton = ({ onClick }) => (
  <Button
    size="lg"
    bg="orange.300"
    w="90%"
    fontSize={12}
    fontWeight={200}
    my={5}
    px={5}
    color="#fff"
    _hover={{ bg: "orange" }}
    onClick={onClick}
  >
    Rezervasyon Yap
  </Button>
);

export default RestaurantReservationButton;
