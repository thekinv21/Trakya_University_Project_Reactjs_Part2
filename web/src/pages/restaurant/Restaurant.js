import React from "react";
import RestImage from "./components/RestImage";
import RestAbout from "./components/RestAbout";
import { useParams } from "react-router-dom";
import { useGetRestaurantById } from "../../api/restaurant";
import Container from "../../components/container/Container";
import { Box } from "@chakra-ui/react";
import RestForm from "./components/RestForm";
import RestPuan from "./components/RestPuan";

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
            {/*=================Restaurant Fotolari================= */}

            <RestImage restaurantInfo={restaurantInfo} />

            {/*=====================Restaurant About==================*/}

            <RestAbout restaurantInfo={restaurantInfo} />

            {/*=====================Restaurant PUAN CARD==================*/}

            <RestPuan />
          </Box>

          {/*====================Restaurant Form=================== */}

          <RestForm restaurantInfo={restaurantInfo} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Restaurant;
