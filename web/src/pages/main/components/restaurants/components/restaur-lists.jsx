import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { StarIcon } from "@chakra-ui/icons";
import SliderSlick from "../../../../../components/slider/Slider";
import { useGetRestaurant } from "../../../../../api/restaurant";

const RestaurantList = () => {
  //*----------------------Take Restaurants in state----------------------

  const { data: restaurants } = useGetRestaurant()
  // const restaurants = useSelector((state) => state.Restaurant.restaurants);

  const navigate = (title) => {
    console.log(title);
  };

  return (
    <React.Fragment>
      <SliderSlick>
        {restaurants?.map((restaurant) => (
          <Box
            key={restaurant.id}
            w="200px"
            maxW="250px"
            h={330}
            maxH="100%"
            borderRadius={5}
            border="none"
            overflow="hidden"
            cursor="pointer"
            bg="blackAlpha.100"
            onClick={() => navigate(restaurant.restaurantName)}
            _hover={{ background: "orange.100" }}
          >
            {/*--------------------Restaurant Image----------------- */}

            <Image
              draggable={false}
              w={250}
              maxW="100%"
              h={180}
              maxH="100%"
              src={restaurant.restaurantImage}
              alt={restaurant.title}
            />

            {/*--------------------Restaurant Location----------------- */}

            <Box p={3}>
              <Text
                color="gray.500"
                fontWeight="semibold"
                fontSize={10}
                textTransform="uppercase"
              >
                Location : {restaurant.city}
              </Text>

              {/*------------------Restaurant title------------------- */}
              <Text
                mt="1"
                fontWeight="semibold"
                lineHeight="tight"
                noOfLines={1}
              >
                Restaurant : &nbsp; {restaurant.title}
              </Text>

              {/*------------------Restaurant Adress------------------- */}
              <Text fontSize="xs" p={3}>
                Address :&nbsp; {restaurant.detailedAddress}
              </Text>

              {/*------------------Restaurant Start------------------- */}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
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
            </Box>
          </Box>
        ))}
      </SliderSlick>
    </React.Fragment>
  );
};

export default RestaurantList;
