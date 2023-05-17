import { useNavigate } from "react-router-dom";
import { useCreateFavorite } from "../../../../../api/restaurant";

export const useRestaurantCard = ({ restaurant, onClick }) => {
  const navigate = useNavigate();

  const userId = JSON.parse(sessionStorage.getItem("token"));

  const { mutate: createFav } = useCreateFavorite();

  const handleFavoriteToggle = async () => {
    console.log(userId.user.id, restaurant.id);
    if (onClick !== undefined) {
      onClick(restaurant.id);
    }
    new Promise(() => {
      createFav(
        { userId: userId.user.id, restaurantId: restaurant.id },
        {
          onSuccess: () => {
            console.log("oluşturuldu");
          },

          onError: () => {
            console.log("hata oldu");
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
