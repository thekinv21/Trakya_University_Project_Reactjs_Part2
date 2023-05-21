import axios from "axios";
import { END_POINTS } from "./../endpointService/endpoints.service";
import { useQuery } from "@tanstack/react-query";

//*===================GET ACCESTOKEN==================
const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token")).accessToken;
};

//*===================GET MENU BY ID==================

const getMenuById = async (menuId) => {
  const URL = END_POINTS.MENU_CONTROLLER.GET_MENU.replace(":id", menuId);

  const response = await axios.get(URL);

  return response.data;
};

export const useGetMenu = (menuId) => {
  const { data, isLoading } = useQuery(["getMenu", menuId], () =>
    getMenuById(menuId)
  );

  return { data, isLoading };
};

//*===================GET MENU BY RESTAURANT ID==================

const getMenuByRestId = async (restId, page) => {
  const URL = END_POINTS.MENU_CONTROLLER.GET_MENU_BY_RESTAURANT_ID.replace(
    ":restId",
    restId
  ).replace(":page", page);

  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.get(URL, { headers });

  return response.data;
};

export const useGetMenuByRestId = (restId, page) => {
  const { data, isLoading } = useQuery(["getMenuByRestId", restId, page], () =>
    getMenuByRestId(restId, page)
  );

  return { data, isLoading };
};
