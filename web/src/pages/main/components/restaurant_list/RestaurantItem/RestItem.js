import Swipers from "../../../../../components/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import RestaurantCard from "./../RestaurantCard/RestaurantCard";
import { useGetRestaurant } from "./../../../../../api/restaurant";

const RestItem = () => {
  //?=====================Take Restaurants in state=======================

  const { data: restaurants } = useGetRestaurant();

  return (
    <Swipers>
      {restaurants?.map((restaurant) => (
        <SwiperSlide key={restaurant.id}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <RestaurantCard restaurant={restaurant} />
          </Box>
        </SwiperSlide>
      ))}
    </Swipers>
  );
};

export default RestItem;
