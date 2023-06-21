import { toast } from "react-toastify";
import { useDeleteReserveById } from "../../../../services/reserveService/reserve.service";
import { useNavigate } from "react-router-dom";

export const useReseveCard = ({ reserve }) => {
  const { mutate: DeleteReserve } = useDeleteReserveById();
  const navigate = useNavigate();

  const handleShow = async () => {
    navigate(`/reservation/${reserve.id}`);
  };

  const handleCancel = async () => {
    new Promise(() => {
      DeleteReserve(reserve.id, {
        onSuccess: () => {
          return toast.success("Rezervasyon İptal Edildi!");
        },

        onError: () => {
          toast.error("Rezervasyon Yaparken Hata oluştu!");
        },
      });
    });
  };

  return {
    handleCancel,
    handleShow,
  };
};
