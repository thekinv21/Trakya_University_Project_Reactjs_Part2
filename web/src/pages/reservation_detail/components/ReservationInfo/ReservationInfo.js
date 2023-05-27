import { Box, Text } from "@chakra-ui/react";

const ReservationInfo = ({ restaurantDetail, reservationDetail }) => {
  const renderRestaurantInfo = () => (
    <>
      <Text color="orange.300" fontSize={16} py={2}>
        Restoran Bilgileri
      </Text>
      <Box display="flex" flexDirection={"column"} flexWrap="wrap">
        <Text color="gray.500" fontSize="xs">
          Restaurant: {restaurantDetail.restaurantName}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Şehir: {restaurantDetail.city}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Konumu: {restaurantDetail.district}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Telefonu: {restaurantDetail.phone || "Yok"}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Çalişma Saatleri: {restaurantDetail.openingTime} /{" "}
          {restaurantDetail.closingTime}
        </Text>
      </Box>
    </>
  );

  const renderReservationInfo = () => (
    <>
      <Text color="orange.300" fontSize={16} py={2}>
        Rezervasyon Bilgileri
      </Text>
      <Box display="flex" flexDirection={"column"} flexWrap="wrap">
        <Text color="gray.500" fontSize="xs">
          Tarih: {reservationDetail.reservationDate}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Saat: {reservationDetail.reservationTime}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Telefonu: {reservationDetail.phone}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Kişi Sayisi: {reservationDetail.personCount}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Note: {reservationDetail.note}
        </Text>
      </Box>
    </>
  );

  return (
    <Box
      w="full"
      bg="rgba(255, 255, 255, 0.40)"
      borderRadius={5}
      p={5}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexWrap="wrap"
      gap={10}
    >
      <Box>{renderRestaurantInfo()}</Box>
      <Box>{renderReservationInfo()}</Box>
    </Box>
  );
};

export default ReservationInfo;
