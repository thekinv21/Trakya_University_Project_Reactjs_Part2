import { Box, Image } from "@chakra-ui/react";
import Container from "../../components/container/Container";
import { styles } from "./RestaurantDetailStyle";
import { useParams } from "react-router-dom";
import RestTabMenu from "./components/RestTabMenu/RestTabMenu";
import { ToastContainer } from "react-toastify";
import { useGetRestaurantById } from "../../services/restaurantService/restaurant.service";
import ReservedForm from "./components/ReserveForm/ReservedForm";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { data: restaurantInfo, isLoading } = useGetRestaurantById(id);

  if (isLoading) return restaurantInfo;

  return (
    <Container>
      <Box className="container p-5" sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={styles.imageblock}>
            <Image
              draggable={false}
              src={restaurantInfo.restaurantImage}
              sx={styles.image}
            />
          </Box>
          <RestTabMenu restaurantInfo={restaurantInfo} />
        </Box>
        <ReservedForm restaurantInfo={restaurantInfo} />
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default RestaurantDetail;
