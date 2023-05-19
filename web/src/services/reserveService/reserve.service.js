import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { END_POINTS } from "./../endpointService/endpoints.service";

//*===================GET ACCESTOKEN==================
const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token")).accessToken;
};

//*===================POST RESERVE==================

export const useCreateReserve = () => {
  const postReserve = async (requestData) => {
    const URL = END_POINTS.RESERVE_CONTROLLER.POST_RESERVE;

    const myToken = getToken();
    const headers = {
      Authorization: `Bearer ${myToken}`,
    };

    const response = await axios.post(URL, requestData, { headers });
    return response.data;
  };

  return useMutation(postReserve);
};

//*================GET RESERVE BY USER ID================

const getReserve = async (userId) => {
  const URL = END_POINTS.RESERVE_CONTROLLER.GET_RESERVE_BY_USER_ID.replace(
    ":userId",
    userId
  );
  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.get(URL, { headers });
  return response.data.content;
};

export const useGetReserveByUserId = (userId) => {
  const { data, isLoading } = useQuery(["getReserveByUserId", userId], () =>
    getReserve(userId)
  );
  return { data, isLoading };
};
