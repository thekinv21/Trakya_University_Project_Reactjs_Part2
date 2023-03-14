import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Container from "./components/Container";
import Footer from "../../components/footer/Footer";
import RestaurantImage from "./components/imageSlide";
import Form from "./components/Form";

const Restaurant = () => {
  return (
    <React.Fragment>
      {/*------------------- Navbar------------------ */}
      <Navbar />

      <Container>
        {/*-------------------Fotolari------------------ */}
        <RestaurantImage />

        {/*-------------------Slote Form------------------ */}
        <Form />

         {/*-------------------Locaiton------------------ */}

      </Container>

      {/*-------------------Footer------------------ */}
      <Footer />
    </React.Fragment>
  );
};

export default Restaurant;
