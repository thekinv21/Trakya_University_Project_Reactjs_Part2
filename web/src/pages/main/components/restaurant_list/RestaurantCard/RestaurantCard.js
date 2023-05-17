import { Card, Stack } from "@chakra-ui/react";
import RestaurantAddress from "./components/RestaurantAddress";
import FavoriteButton from "./components/FavoriteButton";
import RestaurantImage from "./components/RestaurantImage";
import RestaurantTitle from "./components/RestaurantTitle";
import RestaurantStars from "./components/RestaurantStars";
import RestaurantReservationButton from "./components/RestaurantReservationButton";
import { useRestaurantCard } from "./useRestaurantCard";

const RestaurantCard = ({ restaurant, onClick }) => {
  const { navigate, handleFavoriteToggle } = useRestaurantCard({
    restaurant,
    onClick,
  });

  return (
    <Card
      maxW={300}
      h={390}
      borderRadius={5}
      border="none"
      overflow="hidden"
      cursor="pointer"
      bg="#fff"
      alignItems="center"
      textAlign="center"
    >
      <RestaurantImage
        src={restaurant.restaurantImage}
        alt={restaurant.title}
      />

      <FavoriteButton onClick={handleFavoriteToggle} restaurant={restaurant} />

      <Stack alignItems="center" p={5}>
        <RestaurantTitle name={restaurant.restaurantName} />

        <RestaurantAddress
          city={restaurant.city}
          district={restaurant.district}
        />

        <RestaurantStars starCount={restaurant.starCount} />
      </Stack>

      <RestaurantReservationButton
        onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      />
    </Card>
  );
};

export default RestaurantCard;
