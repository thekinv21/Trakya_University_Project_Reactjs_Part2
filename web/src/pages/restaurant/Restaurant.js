import React from "react";
import Container from "./components/RestContainer";
import RestImage from "./components/RestImage";
import RestForm from "./components/RestForm";
import RestAbout from "./components/RestAbout";
import { useParams } from "react-router-dom";
import { useGetRestaurantById } from "../../api/restaurant";

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
        {/*=================Restaurant Fotolari================= */}

        <RestImage restaurantInfo={restaurantInfo} />

        {/*====================Restaurant Form=================== */}
        <RestForm />

        {/*=====================Restaurant About==================*/}

        <RestAbout restaurantInfo={restaurantInfo} />
      </Container>
    </React.Fragment>
  );
};

export default Restaurant;
