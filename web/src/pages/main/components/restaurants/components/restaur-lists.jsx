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
import { StarIcon } from "@chakra-ui/icons";
import SliderSlick from "../../../../../components/slider/Slider";
import { useGetRestaurant } from "../../../../../api/restaurant";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const RestaurantList = () => {
  //?=====================Take Restaurants in state=======================

  const { data: restaurants } = useGetRestaurant();

  //?=====================Navigate to Restaurant Page=====================

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <SliderSlick>
        {restaurants?.map((restaurant) => (
          <Card
            key={restaurant.id}
            maxW={300}
            borderRadius={5}
            border="none"
            overflow="hidden"
            cursor="pointer"
            bg="#fff"
          >
            {/*====================REST IMAGE==================== */}
            <Box w="full">
              <Image
                draggable={false}
                w="100%"
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
                bg="none"
                aria-label="Add to Favori"
                color="orange"
                fontWeight={900}
                fontSize={25}
                icon={<AiOutlineHeart />}
                _hover={{ bg: "orange.100" }}
              />

              {/*====================REST LOCATİON==================== */}

              <Stack direction="row" justifyContent="center" py={2}>
                <Text
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize={10}
                  textTransform="uppercase"
                >
                  Location : {restaurant.city}
                </Text>

                <Text
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize={10}
                  textTransform="uppercase"
                >
                  District : {restaurant.district}
                </Text>
              </Stack>
            </Box>

            {/*====================REST TİTLE==================== */}

            <Stack alignItems="center" p={5}>
              <Text fontWeight="semibold" lineHeight="tight" noOfLines={1}>
                {restaurant.restaurantName}
              </Text>

              {/*====================REST ADDRESS==================== */}

              <Text fontSize={10} maxH={30} overflow="hidden">
                Address :&nbsp; {restaurant.detailedAddress}
              </Text>

              {/*====================REST STARS==================== */}

              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <StarIcon
                      key={index}
                      color={
                        index < restaurant.starCount ? "teal.500" : "gray.300"
                      }
                    />
                  ))}
              </Box>
            </Stack>

            {/*====================REST RESERVE BUTTON==================== */}

            <Button
              size="sm"
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
        ))}
      </SliderSlick>
    </React.Fragment>
  );
};

export default RestaurantList;
