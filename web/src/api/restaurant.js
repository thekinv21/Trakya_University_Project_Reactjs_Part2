import { END_POINTS } from "./end-points";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

//*========== GET RESTAURANT ============
const getRestaurant = async () => {
  const myToken = getToken();
  const headers = {
    Authorization: `Bearer ${myToken}`,
  };

  const response = await axios.get(
    END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT,
    { headers }
  );
  return response.data.content;
};

export const useGetRestaurant = () => {
  const { data, refetch, isLoading } = useQuery(["getRestaurant"], () =>
    getRestaurant()
  );
  return { data, refetch, isLoading };
};

//*========== GET RESTAURANT BY ID ==========
const getRestaurantById = async (id) => {
  const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_BY_ID.replace(
    ":id",
    id
  );
  const response = await axios.get(URL);
  return response.data.content;
};

export const useGetRestaurantById = (id) => {
  const { data, refetch, isLoading } = useQuery(["getRestaurant", id], () =>
    getRestaurantById(id)
  );
  return { data, refetch, isLoading };
};

//*========== GET RESTAURANT EMPTY DATE ==========

const getEmptyHours = async (id, date) => {
  const URL =
    END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_EMPTY_HOURS.replace(
      ":id",
      id
    ).replace(":date", date);

  const response = await axios.get(URL);
  return response.data.content;
};

export const useGetEmptyHours = (id, date) => {
  const { data, isLoading } = useQuery(["getEmptyHours", id, date], () =>
    getEmptyHours(id, date)
  );
  return { data, isLoading };
};

//*============ GET FİLTERED RESTAURANT==============

const getFilterRestaurant = async (
  restaurantCity,
  restaurantName,
  page,
  size,
  sort
) => {
  const URL = `${END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_FİLTERED}?city=${restaurantCity}&restaurantName=${restaurantName}&page=${page}&size=${size}&sortField=${sort}`;

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

//*============ GET FAVORİTE RESTAURANT==============

const getTokenFromSessionStorage = () => {
  return JSON.parse(sessionStorage.getItem("token")).accessToken;
};

const getFavorites = async (userId) => {
  const URL = END_POINTS.FAVORİTE_CONTROLLER.GET_FAVORİTE_RESTAURANTS.replace(
    ":userId",
    userId
  );

  const token = getTokenFromSessionStorage();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await axios.get(URL, { headers });
  return response.data;
};

export const useGetFavorites = (userId) => {
  const { data, isLoading } = useQuery(["getFavorites", userId], () =>
    getFavorites(userId)
  );

  return { isLoading, data };
};

//*=============== CREATE FAV RESTAURANT=============

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token")).accessToken;
};

const postFavorite = async ({ userId, restaurantId }) => {
  const URL = `http://localhost:8082/api/favorite/toggle`;

  const myToken = getToken();
  const headers = {
    Authorization: `Bearer ${myToken}`,
  };

  try {
    const response = await axios.post(
      URL,
      { userId, restaurantId },
      { headers }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response.data;
    throw errorMessage;
  }
};

export const useCreateFavorite = () => {
  return useMutation(postFavorite);
};

//*========== GET RANDOM RESTAURANTS ============

const getRandom = async (restLength) => {
  const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RANDOM_RESTAURANT.replace(
    ":length",
    restLength
  );

  const response = await axios.get(URL);

  return response.data.content;
};

export const useGetRandom = (restLength) => {
  const { data, isLoading } = useQuery(["randomRestaurants", restLength], () =>
    getRandom(restLength)
  );

  return { data, isLoading };
};
