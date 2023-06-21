import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoriteButton = ({ onClick, restaurant }) => {
  const [favoriteState, setFavoriteState] = useState(false);

  useEffect(() => {
    setFavoriteState(restaurant?.isFavorite);
  }, [restaurant]);

  const _onClick = (e) => {
    onClick(e);
    return setFavoriteState(!favoriteState);
  };

  const getBgColor = () => {
    return favoriteState ? "green" : "orange";
  };

  const getHoverColor = () => {
    return favoriteState ? "green.800" : "orange.800";
  };

  return (
    <IconButton
      position="absolute"
      top={2}
      right={2}
      rounded="100%"
      aria-label="Add to Favorites"
      fontWeight={900}
      fontSize={25}
      bg={getBgColor}
      _hover={{ bg: getHoverColor }}
      color="#ddd"
      icon={favoriteState ? <AiFillHeart /> : <AiOutlineHeart />}
      onClick={_onClick}
    />
  );
};

export default FavoriteButton;
