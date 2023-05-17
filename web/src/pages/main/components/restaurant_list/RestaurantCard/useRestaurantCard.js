import { useNavigate } from "react-router-dom";
import { useCreateFavorite } from "../../../../../api/restaurant";
import { toast } from "react-toastify";

export const useRestaurantCard = ({ restaurant, onClick }) => {
  const navigate = useNavigate();

  const userId = JSON.parse(sessionStorage.getItem("token"));

  const { mutate: createFav } = useCreateFavorite();

  const handleFavoriteToggle = async () => {
    if (onClick !== undefined) {
      onClick(restaurant.id);
    }
    new Promise(() => {
      createFav(
        { userId: userId.user.id, restaurantId: restaurant.id },
        {
          onSuccess: () => {
            toast.success("Islem basarili", {
              position: "top-right",
              autoClose: 1600,
            });
          },

          onError: (err) => {
            toast.error("Bir hata olustu!  " + JSON.stringify(err.error), {
              position: "top-right",
              autoClose: 1600,
            });
          },
        }
      );
    });
  };

  return {
    navigate,
    handleFavoriteToggle,
  };
};
