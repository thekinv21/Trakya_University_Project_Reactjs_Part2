import React from "react";
import Title from "../title/title";
import RestaurantContent from "./components/restaur-content";
import RestaurantsContainer from "./components/restaur-container";
import RestaurantList from "./components/restaur-lists";

const Restaurants = () => {
  return (
    <React.Fragment>
      {/*-----------------------Restaurants main container---------------------- */}
      <RestaurantsContainer>
        <Title title="Populer Restoranlar" />

        {/*-----------------------Restaurants  content---------------------- */}
        <RestaurantContent>
          {/*-----------------------Restaurant  Slide---------------------- */}
          <RestaurantList />
        </RestaurantContent>
      </RestaurantsContainer>
    </React.Fragment>
  );
};

export default Restaurants;
