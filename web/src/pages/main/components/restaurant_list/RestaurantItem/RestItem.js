import Swipers from "../../../../../components/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import RestaurantCard from "./../RestaurantCard/RestaurantCard";
import {
  useGetRestaurant,
  useGetRandom,
} from "./../../../../../api/restaurant";

const RestItem = () => {
  const { data: restaurants } = useGetRestaurant();
  const { data: randomRestaurants } = useGetRandom(10);
  const token = sessionStorage.getItem("token");

  return (
    <Swipers>
      {(token ? restaurants : randomRestaurants)?.map((restaurant) => (
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
