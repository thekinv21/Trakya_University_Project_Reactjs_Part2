import { useGetEmptyHours } from "../../../../services/restaurantService/restaurant.service";
import { useState } from "react";
import { useCreateReserve } from "../../../../services/reserveService/reserve.service";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useReservedForm = ({ restaurantInfo }) => {
  const { mutate: CreateBook } = useCreateReserve();
  const userData = JSON.parse(sessionStorage.getItem("token"));

  const navigate = useNavigate();

  const todayDate = new Date();

  const { data, isLoading } = useGetEmptyHours(
    restaurantInfo.id,
    todayDate.toISOString().slice(0, 10)
  );

  const [reserveData, setReserveData] = useState({
    name: "",
    phone: "",
    dateTime: "",
    reserveTime: "",
    peopleCount: "",
    note: "",
  });

  const handleChange = (e) => {
    setReserveData({ ...reserveData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const requestData = {
      userId: userData.user.id,
      restaurantId: restaurantInfo.id,
      reservationDate: reserveData.dateTime,
      reservationTime: reserveData.reserveTime,
      personCount: reserveData.peopleCount,
      note: reserveData.note,
    };

    new Promise(() => {
      CreateBook(requestData, {
        onSuccess: () => {
          return (
            toast.success("Rezervasyon Oluşturuldu!", {
              autoClose: 1600,
            }),
            setTimeout(() => {
              navigate("/main");
            }, [2500])
          );
        },
        onError: () => {
          toast.error("Hata oluştu", { autoClose: 1600 });
        },
      });
    });
  };

  const peopleLength = Array.from({ length: 25 }, (_, index) => index + 1);

  return {
    peopleLength,
    data,
    isLoading,
    reserveData,
    handleChange,
    handleClick,
  };
};
