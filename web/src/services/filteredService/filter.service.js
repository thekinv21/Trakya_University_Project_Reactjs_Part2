import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { END_POINTS } from "../endpointService/endpoints.service";

const getFilterRestaurant = async (
  restaurantCity,
  restaurantName,
  page,
  size,
  sort
) => {
  const URL = `${END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_FILTERED}?city=${restaurantCity}&restaurantName=${restaurantName}&page=${page}&size=${size}&sortField=${sort}`;

  const response = await axios.get(URL);
  return response.data;
};

export const useGetFilteredRest = (
  restaurantCity,
  restaurantName,
  page,
  size,
  sort
) => {
  const { data, isLoading, refetch } = useQuery(
    ["filteredRestaurant", restaurantCity, restaurantName, page, size, sort],
    () => getFilterRestaurant(restaurantCity, restaurantName, page, size, sort)
  );

  return { data, isLoading, refetch };
};
