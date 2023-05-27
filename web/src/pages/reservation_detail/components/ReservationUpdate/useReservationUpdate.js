import { useState } from "react";
import { useGetEmptyHours } from "../../../../services/restaurantService/restaurant.service";
import { useReserveUpdate } from "../../../../services/reserveService/reserve.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useReservationUpdate = ({
  restaurantDetail,
  reservationDetail,
}) => {
  const { data: emptyHours, isLoading: emptyLoading } = useGetEmptyHours(
    restaurantDetail.id,
    reservationDetail.reservationDate
  );

  const { mutate: UpdateReserve } = useReserveUpdate();

  const [updateReserve, setUpdateReserve] = useState({
    phone: "",
    status: "",
    reserveDate: "",
    reserveTime: "",
    peopleCount: "",
    note: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdateReserve({ ...updateReserve, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (
      updateReserve.phone === "" ||
      updateReserve.peopleCount === "" ||
      updateReserve.reserveDate === "" ||
      updateReserve.reserveTime === "" ||
      updateReserve.status === "" ||
      updateReserve.note === ""
    )
      return toast.warn("Zorunlu Alanlari Doldurunuz!");

    const requestData = {
      id: reservationDetail.id,
      userId: reservationDetail.user.id,
      phone: updateReserve.phone,
      restaurantId: restaurantDetail.id,
      reservationDate: updateReserve.reserveDate,
      reservationTime: updateReserve.reserveTime,
      personCount: updateReserve.peopleCount,
      note: updateReserve.note,
      bookingStatus: updateReserve.status,
    };

    new Promise(() => {
      UpdateReserve(requestData, {
        onSuccess: () => {
          return (
            toast.success("Rezervasyon Güncellendi!"),
            setTimeout(() => {
              navigate("/reservations");
            }, [4500])
          );
        },
        onError: () => {
          toast.error("İşlem Başarisiz!");
        },
      });
    });
  };

  const peopleLength = Array.from({ length: 25 }, (_, index) => index + 1);
  const status = [
    { key: "PENDING", value: "PENDING" },
    { key: "CANCELLED", value: "CANCELLED" },
  ];

  return {
    handleUpdate,
    peopleLength,
    status,
    emptyHours,
    emptyLoading,
    updateReserve,
    handleChange,
  };
};
