import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { END_POINTS } from "./../endpointService/endpoints.service";

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token")).accessToken;
};

//*==================CREATE FAVORİTE====================
const postFavorite = async ({ userId, restaurantId }) => {
  const URL = END_POINTS.FAVORITE_CONTROLLER.POST_FAVORITE_RESTAURANT;
  const myToken = getToken();
  const headers = {
    Authorization: `Bearer ${myToken}`,
  };

  const response = await axios.post(URL, { userId, restaurantId }, { headers });
  return response.data;
};

export const useCreateFavorite = () => {
  return useMutation(postFavorite);
};

//*==================GET USER FAVORİTES====================
const getFavorites = async (userId) => {
  const URL = END_POINTS.FAVORITE_CONTROLLER.GET_FAVORITE_RESTAURANTS.replace(
    ":userId",
    userId
  );

  const token = getToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await axios.get(URL, { headers });
  return response.data;
};

export const useGetFavorites = (userId) => {
  return useQuery(["getFavorites", userId], () => getFavorites(userId));
};
