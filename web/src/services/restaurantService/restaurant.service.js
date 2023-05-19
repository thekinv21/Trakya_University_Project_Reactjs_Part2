import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { END_POINTS } from "../endpointService/endpoints.service";

//*===============GET USER ACCESTOKEN==================

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token")).accessToken;
};

//*===============GET RANDOM RESTAURANTS==================

export const useGetRandom = (restLength) => {
  const getRandom = async () => {
    const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RANDOM_RESTAURANT.replace(
      ":length",
      restLength
    );

    const response = await axios.get(URL);

    if (!response.data || !response.data.content) {
      throw new Error(
        "Geçersiz veri alindi Bu hata Main componentin içinde RestItemda"
      );
    }

    return response.data.content;
  };

  return useQuery(["randomRestaurants", restLength], getRandom);
};

//*====================GET RESTAURANTS===================

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
  return useQuery(["getRestaurant"], getRestaurant);
};

//*====================GET RESTAURANT BY ID===================

const getRestaurantById = async (id) => {
  const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_BY_ID.replace(
    ":id",
    id
  );

  const response = await axios.get(URL);
  return response.data.content;
};

export const useGetRestaurantById = (id) => {
  return useQuery(["getRestaurant", id], () => getRestaurantById(id));
};

//*====================GET RESTAURANT EMPTY DATE==================

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
  return useQuery(["getEmptyHours", id, date], () => getEmptyHours(id, date));
};
