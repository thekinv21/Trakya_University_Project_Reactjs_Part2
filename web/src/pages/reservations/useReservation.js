import { useGetReserveByUserId } from "../../services/reserveService/reserve.service";

export const useResevation = () => {
  //*=============GET USER ACCESTOKEN===============
  const userData = JSON.parse(sessionStorage.getItem("token"));

  //*=============TAKE USER RESERVATİONS===============
  const { data, isLoading } = useGetReserveByUserId(userData.user.id);

  return {
    data,
    isLoading,
  };
};
