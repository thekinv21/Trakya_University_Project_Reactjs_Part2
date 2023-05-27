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
  const { data, isLoading, refetch } = useQuery(
    ["getReserveByUserId", userId],
    () => getReserve(userId)
  );
  return { data, isLoading, refetch };
};

//*================DELETE RESERVE BY USER ID================

const deleteReserve = async (reserveId) => {
  const URL = END_POINTS.RESERVE_CONTROLLER.DELETE_RESERVE_BY_ID.replace(
    ":reserveId",
    reserveId
  );

  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.delete(URL, { headers });
  return response.data.content;
};

export const useDeleteReserveById = () => {
  return useMutation(deleteReserve);
};

//*=================GET RESERVE BY ID===================

const getReserveById = async (reserveId) => {
  const URL = END_POINTS.RESERVE_CONTROLLER.GET_RESERVE_BY_ID.replace(
    ":reserveId",
    reserveId
  );
  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.get(URL, { headers });
  return response.data;
};

export const useGetReserveById = (reserveId) => {
  const { data, isLoading } = useQuery(["getReserveById", reserveId], () =>
    getReserveById(reserveId)
  );
  return { data, isLoading };
};

//*=================PUT RESERVE BY ID===================

const putReserve = async ( requestData ) => {
  const URL = END_POINTS.RESERVE_CONTROLLER.PUT_RESERVE;

  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.put(URL, requestData, { headers });
  return response.data;
};

export const useReserveUpdate = () => {
  return useMutation(putReserve);
};
