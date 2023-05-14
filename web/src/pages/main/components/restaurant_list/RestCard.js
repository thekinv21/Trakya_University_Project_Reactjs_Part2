import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Card,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toogleFavorites } from "../../../../store/favorites/favorites.slice";

const RestCard = ({ restaurant }) => {
  //?====================REDUX-TOOLKİT FUNCTİONS======================

  const dispatch = useDispatch();

  //?==========================NAVİGATİON SETUP======================
  const navigate = useNavigate();

  //?==================FAVORİ RESTORANLAR BİLGİSİ====================f
  const favorites = useSelector((state) => state.Favorites.favoriteRestaurant);

  //?================FAVORİDE OLUP OLMADIĞI BİLİGİSİ================f
  const isExists = favorites.some((favRest) => favRest.id === restaurant.id);

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
    >
      {/*====================REST IMAGE==================== */}
      <Box w="full">
        <Image
          draggable={false}
          w={350}
          maxW="100%"
          h={180}
          maxH="100%"
          src={restaurant.restaurantImage}
          alt={restaurant.title}
        />
        {/*=================REST ADD TO FAVORİ===============*/}
        <IconButton
          position="absolute"
          top={2}
          right={2}
          rounded="100%"
          aria-label="Add to Favori"
          fontWeight={900}
          fontSize={25}
          bg={isExists ? "green" : "orange.400"}
          _hover={{ bg: "orange.400" }}
          color="#ddd"
          icon={
            isExists ? <MdOutlineFavorite color="#ddd" /> : <AiOutlineHeart />
          }
          onClick={() => dispatch(toogleFavorites(restaurant))}
        />
      </Box>

      {/*====================REST TİTLE==================== */}

      <Stack alignItems="center" p={5}>
        <Text fontWeight="semibold" lineHeight="tight" noOfLines={1}>
          {restaurant.restaurantName}
        </Text>

        {/*====================REST ADDRESS==================== */}

        <Stack direction="column" justifyContent="center" h={30} py={5}>
          <Text
            color="gray.500"
            fontWeight="semibold"
            fontSize={10}
            textTransform="uppercase"
          >
            {restaurant.city}
          </Text>

          <Text
            color="gray.500"
            fontWeight="semibold"
            fontSize={10}
            textTransform="uppercase"
          >
            {restaurant.district}
          </Text>
        </Stack>

        {/*====================REST STARS==================== */}

        <Box display="flex" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <StarIcon
                key={index}
                color={
                  index < parseFloat(restaurant.starCount)
                    ? "teal.500"
                    : "gray.300"
                }
              />
            ))}
        </Box>
      </Stack>

      {/*====================REST RESERVE BUTTON==================== */}

      <Button
        size="lg"
        bg="orange.300"
        w="90%"
        fontSize={12}
        fontWeight={200}
        my={5}
        px={5}
        color="#fff"
        _hover={{ bg: "orange" }}
        onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      >
        Rezervasyon Yap
      </Button>
    </Card>
  );
};

export default React.memo(RestCard);
