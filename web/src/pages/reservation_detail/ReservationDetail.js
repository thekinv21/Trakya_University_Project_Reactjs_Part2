import { useReservationDetail } from "./useReservationDetail";
import Container from "./../../components/container/Container";
import { Box, Image } from "@chakra-ui/react";
import { styles } from "./ReservationDetailStyle";
import { ToastContainer } from "react-toastify";
import Maps from "./../../components/map/Map";
import ReservationUpdate from "./components/ReservationUpdate/ReservationUpdate";
import ReservationInfo from "./components/ReservationInfo/ReservationInfo";

const ReservationDetail = () => {
  const { data, isLoading } = useReservationDetail();

  if (isLoading) return <p>Rezervasyon Yükleniyor....</p>;

  const reservationDetail = data.content;
  const restaurantDetail = data.content.restaurant;

  return (
    <Container>
      <Box className="container p-5" sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={styles.imageblock}>
            <Image
              draggable={false}
              src={restaurantDetail.restaurantImage}
              sx={styles.image}
            />
          </Box>

          <Box w="full">
            <ReservationInfo
              restaurantDetail={restaurantDetail}
              reservationDetail={reservationDetail}
            />
          </Box>
          <Box w="full">
            <Maps
              width="100%"
              height={250}
              restaurantInfo={data.content.restaurant}
            />
          </Box>
        </Box>
        <ReservationUpdate
          restaurantDetail={restaurantDetail}
          reservationDetail={reservationDetail}
        />
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default ReservationDetail;
