import React from "react";
import { useGetRestaurant } from "../../../../api/restaurant";
import RestCard from "./RestCard";
import Swipers from "../../../../components/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";

const RestItem = () => {
  //?=====================Take Restaurants in state=======================

  const { data: restaurants } = useGetRestaurant();

  return (
    <React.Fragment>
      <Swipers>
        {restaurants?.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <RestCard restaurant={restaurant} />
            </Box>
          </SwiperSlide>
        ))}
      </Swipers>
    </React.Fragment>
  );
};

export default RestItem;
