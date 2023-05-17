import { Box, Image } from "@chakra-ui/react";
import Container from "../../components/container/Container";
import { styles } from "./RestaurantDetailStyle";
import { useParams } from "react-router-dom";
import { useGetRestaurantById } from "../../api/restaurant";
import RestTabMenu from "./components/RestTabMenu/RestTabMenu";
import ReserveForm from "./components/ReserveForm/ReserveForm";
import { ToastContainer } from "react-toastify";

const RestaurantDetail = () => {
  //?====================Seçtiğimiz Restoranin id'si==================
  const { id } = useParams();

  //?====================Restoranin id'sine istek atıldi===============

  const { data: restaurantInfo, isLoading } = useGetRestaurantById(id);

  //?====================Bilgileri alındıysa return et=================
  if (isLoading) return restaurantInfo;

  return (
    <Container>
      {/*==================RESTAURANT MAİN CONTAİNER==========*/}
      <Box className="container p-5" sx={styles.container}>
        {/*===================RESTAURANT CONTENT============== */}
        <Box sx={styles.content}>
          <Box sx={styles.imageblock}>
            {/*=================Restaurant FOTO================= */}
            <Image
              draggable={false}
              src={restaurantInfo.restaurantImage}
              sx={styles.image}
            />
          </Box>
          {/*=================Restaurant Tab Header================= */}
          <RestTabMenu restaurantInfo={restaurantInfo} />
        </Box>

        {/*=================Restaurant RESERVE FORM================= */}
        <ReserveForm restaurantInfo={restaurantInfo} />

        {/*=================ALERT CONTAİNER================= */}
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default RestaurantDetail;
