import { Box, Image, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { useReseveCard } from "./useReserveCard";

const ReservationCard = ({ reserve }) => {
  const { handleCancel, handleShow } = useReseveCard({
    reserve,
  });

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        width="100%"
        bg="whiteAlpha.300"
        p={5}
      >
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <Box flexShrink={0}>
            <Image
              src={reserve.restaurant.restaurantImage}
              alt={reserve.restaurant.restaurantName}
              width={300}
              height={200}
              objectFit="cover"
              borderRadius="md"
              draggable={false}
            />
          </Box>
          <Box flex="1" ml={4}>
            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {reserve.restaurant.restaurantName}
              </Text>
              <Text color="gray.500" fontSize="xs">
                Kişi saysi: {reserve.personCount}
              </Text>
              <Text color="gray.500" fontSize="xs">
                Booking Datetime: {reserve.reservationDate} /{" "}
                {reserve.reservationTime}
              </Text>
              <Text color="gray.500" fontSize="xs">
                City: {reserve.restaurant.city}
              </Text>
              <Text color="gray.500" fontSize="xs">
                Address: {reserve.restaurant.detailedAddress}
              </Text>
              <Text color="gray.500" fontSize="xs">
                Note: {reserve.note}
              </Text>
              <Text color="gray.500" fontSize="xs">
                Status: {reserve.bookingStatus}
              </Text>
            </Box>
            <Stack
              direction={{ base: "column", md: "row" }}
              alignItems="center"
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={5}
              pt={5}
            >
              <Button
                w={{ base: "100%", md: "120px" }}
                colorScheme="facebook"
                fontSize="small"
                fontWeight={200}
                size="sm"
                onClick={
                  reserve.bookingStatus === "CANCELLED" ? null : handleShow
                }
              >
                Görüntüle
              </Button>
              <Button
                w={{ base: "100%", md: "120px" }}
                colorScheme="red"
                fontSize="small"
                fontWeight={200}
                size="sm"
                onClick={
                  reserve.bookingStatus === "CANCELLED" ? null : handleCancel
                }
              >
                İptal Et
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ReservationCard;
