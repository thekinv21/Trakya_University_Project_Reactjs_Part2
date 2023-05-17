import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const FavoriteButton = ({ onClick, restaurant }) => {
  const [color, setColor] = useState("orange.400");

  useEffect(() => {
    restaurant?.isFavorite ? setColor("green") : setColor("orange.400");
  }, [restaurant]);

  const _onClick = (e) => {
    onClick(e);
    return color === "green" ? setColor("orange.400") : setColor("green");
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
      bg={color}
      _hover={{ bg: "orange.400" }}
      color="#ddd"
      icon={<AiOutlineHeart />}
      onClick={_onClick}
    />
  );
};

export default FavoriteButton;
