import React from "react";
import { useParams } from "react-router-dom";
import { useGetRestaurantById } from "../../api/restaurant";
import Container from "../../components/container/Container";
import { Box, Image } from "@chakra-ui/react";
import RestForm from "./components/RestForm";

import RestTab from "./components/RestTab";

const Restaurant = () => {
  //?====================Seçtiğimiz Restoranin id'si==================
  const { id } = useParams();

  //?====================Restoranin id'sine istek atıldi===============

  const { data: restaurantInfo, isLoading } = useGetRestaurantById(id);

  if (isLoading) {
    return restaurantInfo;
  }

  return (
    <React.Fragment>
      <Container>
        {/*==================RESTAURANT MAİN CONTAİNER==========*/}
        <Box
          className="container p-5"
          display="flex"
          gap={10}
          flexDirection={["column", "column", "column", "row"]}
          overflow="hidden"
          justifyContent="center"
        >
          {/*===================RESTAURANT CONTENT============== */}
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            gap={5}
          >
            {/*=================Restaurant FOTO================= */}

            <Box
              width={750}
              maxW="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                draggable={false}
                maxW="100%"
                objectFit="contain"
                src={restaurantInfo.restaurantImage}
              />
            </Box>

            {/*=================Restaurant Tab Header================= */}

            <RestTab restaurantInfo={restaurantInfo} />
          </Box>

          {/*====================Restaurant Form=================== */}

          <RestForm restaurantInfo={restaurantInfo} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Restaurant;
