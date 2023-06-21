import Swipers from "../../../../../components/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import RestaurantCard from "./../RestaurantCard/RestaurantCard";
import {
  useGetRandom,
  useGetRestaurant,
} from "../../../../../services/restaurantService/restaurant.service";

const RestItem = () => {
  const itemsLength = 20;

  const { data: restaurants } = useGetRestaurant();
  const { data: randomRestaurants } = useGetRandom(itemsLength);
  const token = sessionStorage.getItem("token");

  const renderedRestaurants = token ? restaurants : randomRestaurants;

  return (
    <Swipers>
      {renderedRestaurants?.map((restaurant) => (
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
