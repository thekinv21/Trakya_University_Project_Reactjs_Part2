import { useParams } from "react-router-dom";
import { useGetReserveById } from "../../services/reserveService/reserve.service";

export const useReservationDetail = () => {
  const { reserveId } = useParams();

  const { data, isLoading } = useGetReserveById(reserveId);

  return {
    reserveId,
    data,
    isLoading,
  };
};
