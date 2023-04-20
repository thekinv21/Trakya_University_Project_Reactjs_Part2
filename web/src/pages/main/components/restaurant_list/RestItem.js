import React from "react";
import { useGetRestaurant } from "../../../../api/restaurant";
import RestCard from "./RestCard";
import SliderSlick from './../../../../components/slider/Slider';


const RestItem = () => {
  //?=====================Take Restaurants in state=======================

  const { data: restaurants } = useGetRestaurant();

  return (
    <SliderSlick>
      {restaurants?.map((restaurant) => (
        <RestCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </SliderSlick>
  );
};

export default RestItem;
