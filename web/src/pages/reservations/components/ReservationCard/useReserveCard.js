import { toast } from "react-toastify";
import { useDeleteReserveById } from "../../../../services/reserveService/reserve.service";

export const useReseveCard = ({ reserve, refetch }) => {
  const { mutate: DeleteReserve } = useDeleteReserveById();

  const handleUpdate = () => {
    console.log("update");
  };

  const handleCancel = () => {
    new Promise(() => {
      DeleteReserve(reserve.id, {
        onSuccess: () => {
          toast.success("Rezervasyon İptal Edildi!");

          setTimeout(() => {
            refetch();
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
