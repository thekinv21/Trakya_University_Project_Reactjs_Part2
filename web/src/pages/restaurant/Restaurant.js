import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Container from "./components/RestContainer";
import Footer from "../../components/footer/Footer";
import RestImage from "./components/RestImage";
import RestForm from "./components/RestForm";
import RestAbout from "./components/RestAbout";
import { useParams } from "react-router-dom";
import { useGetRestaurantById } from "../../api/restaurant";
import RestComment from "./components/RestCommenT";

const Restaurant = () => {
  //?-------------------Seçtiğimiz Restoranin id'si----------------
  const { id } = useParams();

  //?-------------------Restoranin id'sine istek atıldi-------------

  const { data: restaurantInfo, isLoading } = useGetRestaurantById(id);

  if (isLoading) {
    return restaurantInfo
  }

  return (
    <React.Fragment>
      {/*------------------- Navbar------------------ */}
      <Navbar />

      <Container>
        {/*-------------------Restaurant Fotolari------------------ */}

        <RestImage restaurantInfo={restaurantInfo} />

        {/*-------------------Restaurant Form------------------ */}
        <RestForm />

        {/*-------------------Restaurant About------------------ */}

        <RestAbout restaurantInfo={restaurantInfo} />

        {/*-------------------Restaurant Comment------------------ */}
        <RestComment />
      </Container>

      {/*-------------------Footer------------------ */}
      <Footer />
    </React.Fragment>
  );
};

export default Restaurant;
