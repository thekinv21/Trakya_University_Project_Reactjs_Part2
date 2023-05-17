import Container from "../../components/container/Container";
import { Box } from "@chakra-ui/react";
import NotfoundFavorite from "./components/NotfoundFavorite";
import RestaurantCard from "../main/components/restaurant_list/RestaurantCard/RestaurantCard";
import { useFavorites } from "./useFavorites";

const Favorites = () => {
  const { onClick, isLoading, filteredData, data } = useFavorites();

  if (isLoading) return data;

  return (
    <Container>
      {/*=================FAVORİTES CONTAİNER===============*/}
      <Box
        padding={10}
        className="container"
        display="flex"
        alignItems="center"
        justifyContent="start"
        gap={5}
      >
        {/*================FAVORİ RESTAURANT VARSA============ */}

        <Box
          display="flex"
          justifyContent={["center", "center", "center", "center"]}
          alignItems="center"
          flexWrap="wrap"
          gap={5}
        >
          {filteredData?.length ? (
            filteredData?.map((fav, index) => (
              <RestaurantCard
                key={index}
                onClick={onClick}
                restaurant={{ ...fav, isFavorite: true }}
                favData={data.content}
              />
            ))
          ) : (
            <NotfoundFavorite />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Favorites;
