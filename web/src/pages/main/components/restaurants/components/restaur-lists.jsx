import React from "react";
import { Box, Image, Text, Stack, Card } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import SliderSlick from "../../../../../components/slider/Slider";
import { useGetRestaurant } from "../../../../../api/restaurant";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  //*----------------------Take Restaurants in state----------------------
  const { data: restaurants } = useGetRestaurant();

  //?-------------------Navigate to Restaurant Page----------------------
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <SliderSlick>
        {restaurants?.map((restaurant) => (
          <Card
            key={restaurant.id}
            w="250px"
            maxW="320px"
            h={350}
            maxH="100%"
            borderRadius={5}
            border="none"
            overflow="hidden"
            cursor="pointer"
            bg="#fff"
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          >
            {/*--------------------Restaurant Image and Location----------------- */}

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

              <Stack pt={2} direction="row" justifyContent="center">
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

            {/*------------------Restaurant title------------------- */}

            <Stack pt={2}>
              <Text fontWeight="semibold" lineHeight="tight" noOfLines={1}>
                {restaurant.restaurantName}
              </Text>

              {/*------------------Restaurant Adress------------------- */}
              <Text fontSize="xs" p={3}>
                Address :&nbsp; {restaurant.detailedAddress}
              </Text>
            </Stack>

            {/*------------------Restaurant Start------------------- */}

            <Stack direction="row" alignItems="center" justifyContent="center">
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
          </Card>
        ))}
      </SliderSlick>
    </React.Fragment>
  );
};

export default RestaurantList;
