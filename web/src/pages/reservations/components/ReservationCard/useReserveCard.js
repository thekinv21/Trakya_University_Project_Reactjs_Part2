import { toast } from "react-toastify";
import { useDeleteReserveById } from "../../../../services/reserveService/reserve.service";

export const useReseveCard = ({ reserve }) => {
  const { mutate: DeleteReserve } = useDeleteReserveById();

  const handleUpdate = () => {
    console.log("update");
  };

  const handleCancel = () => {
    new Promise(() => {
      DeleteReserve(reserve.id, {
        onSuccess: () => {
          toast.success("Rezervasyon İptal Edildi!", { autoClose: 1600 });

          setTimeout(() => {
            window.location.reload();
          }, 2500);
        },

        onError: () => {
          toast.error("Rezervasyon Yaparken Hata oluştu!", { autoClose: 1600 });
        },
      });
    });
  };

  return {
    handleCancel,
    handleUpdate,
  };
};
