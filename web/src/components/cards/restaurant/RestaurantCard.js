import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useGetRestaurant } from "../../../api/restaurant";
import { useNavigate } from "react-router-dom";

const RestaurantCard = () => {
  //*===================RESTAURANT LİST===================

  const { data: restaurants } = useGetRestaurant();

  //*==============Navigate to Restaurant Page============

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {restaurants?.map((res, index) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          bg="#fff"
          key={index}
          mb={5}
        >
          {/*=======================RESTAURANT IMAGE======================= */}
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={res.restaurantImage}
            alt={res.restaurantName}
            draggable={false}
          />
          {/*=======================RESTAURANT INFO======================= */}
          <Stack
            direction={"row"}
            w="100%"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent={["start", "start", "start", "space-between"]}
          >
            <CardBody>
              <Stack spacing={4}>
                {/*=======================RESTAURANT NAME======================= */}
                <Text fontSize={20}>{res.restaurantName}</Text>

                {/*=====================RESTAURANT LOCATİON======================*/}

                <Text fontSize={12}>Location : {res.city}</Text>

                {/*=====================RESTAURANT DİSCTRİCT=====================*/}

                <Text fontSize={12}>District : {res.district}</Text>

                {/*=======================RESTAURANT VİEWS======================= */}
                <Text fontSize={12}>
                  Work : {res.openingTime} &#8741; {res.closingTime}
                </Text>
              </Stack>
            </CardBody>

            {/*=======================RESERVE BUTTON======================= */}
            <CardBody
              display="flex"
              alignItems="center"
              justifyContent={["center", "center", "center", "flex-end"]}
              gap={5}
            >
              <Divider
                display={["none", "none", "none", "block"]}
                orientation="vertical"
                borderColor="rgba(0,0,0,0.3)"
              />
              <Button
                w={["100%", "100%", "120px", "120px"]}
                fontSize={12}
                fontWeight={200}
                size="xs"
                bg="green"
                color="#ddd"
                _hover={{ bg: "green.400" }}
                onClick={() => navigate(`/restaurant/${res.id}`)}
              >
                Masa Ayirt
              </Button>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default RestaurantCard;
