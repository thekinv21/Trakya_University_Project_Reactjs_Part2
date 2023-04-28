import React from "react";
import Container from "../../components/container/Container";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import RestCard from "../main/components/restaurant_list/RestCard";
import UserCard from "./../../components/cards/user/UserCard";
import NotfoundFavorite from "./components/NotfoundFavorite";

const Favorites = () => {
  //*==============FAVORİTE RESTAURANTS LİST=============

  const favorites = useSelector((state) => state.Favorites.favoriteRestaurant);

  return (
    <React.Fragment>
      <Container>
        {/*=================FAVORİTES CONTAİNER===============*/}
        <Box
          padding={10}
          className="container"
          display="flex"
          alignItems="start"
          justifyContent="center"
          gap={5}
        >
          {/*=================FAVORİTES USERCARD===============*/}

          <UserCard />

          {/*================FAVORİ RESTAURANT VARSA============ */}

          <Box
            display="flex"
            justifyContent={["center", "center", "center", "start"]}
            alignItems="center"
            flexWrap="wrap"
            gap={5}
          >
            {favorites.length ? (
              favorites?.map((fav, index) => (
                <RestCard key={index} restaurant={fav} />
              ))
            ) : (
              <NotfoundFavorite />
            )}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Favorites;
