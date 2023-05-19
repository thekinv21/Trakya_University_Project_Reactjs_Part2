import { END_POINTS } from "../endpointService/endpoints.service";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

//*======================LOGİN=====================
export const useLogin = () => {
  const postLogin = async ({ username, password }) => {
    const response = await axios.post(END_POINTS.AUTH_CONTROLLER.LOGIN, {
      username,
      password,
    });
    return response.data;
  };

  return useMutation(postLogin);
};

//*======================REGİSTER=====================
export const useRegister = () => {
  const postRegister = async ({ username, mail, password, name, surname }) => {
    const response = await axios.post(END_POINTS.AUTH_CONTROLLER.REGISTER, {
      username,
      mail,
      password,
      name,
      surname,
    });
    return response.data;
  };

  return useMutation(postRegister);
};
